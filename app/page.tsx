"use client"

import { useState } from "react"
import { Home, User, Wallet, BarChart2, Settings, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [activePage, setActivePage] = useState(null)
  // Handle navigation from dashboard buttons
  const handleNavigate = (page) => {
    setActivePage(page)
    // If we're not on the home tab, switch to it
    if (activeTab !== "home") {
      setActiveTab("home")
    }
  }

  // Reset active page when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setActivePage(null)
  }

  return (
    
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 border-32 border-black">
      {/* Top Bar */}
      <div className="bg-[#452BE0] text-white p-20 flex justify-between items-center">
        <h1 className="text-6xl font-bold">Tec Learner Wallet</h1>
        <Button variant="ghost" size="icon" className="text-white hover:bg-[#5A43E5] h-16 w-16">
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        {activeTab === "home" && !activePage && <HomePage onNavigate={handleNavigate} />}
        {activeTab === "home" && activePage === "analytics" && <AnalyticsPage />}
        {activeTab === "home" && activePage === "settings" && <SettingsPage />}
        {activeTab === "home" && activePage === "transfer" && <TransferPage />}
        {activeTab === "home" && activePage === "payments" && <PaymentsPage />}
        {activeTab === "profile" && <ProfilePage />}
        {activeTab === "wallet" && <WalletPage />}
      </main>

      {/* Bottom Navigation */}
      <div className="border-t-4 border-gray-200 dark:border-gray-800 bg-background">
        <div className="flex justify-around items-center h-32">
          <NavButton
            icon={<Home size={48} />}
            label="Home"
            isActive={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <NavButton
            icon={<User size={48} />}
            label="Profile"
            isActive={activeTab === "profile"}
            onClick={() => setActiveTab("home")}
          />
          <NavButton
            icon={<Wallet size={48} />}
            label="Wallet"
            isActive={activeTab === "wallet"}
            onClick={() => setActiveTab("home")}
          />
        </div>
      </div>
    </div>
  )
}

function NavButton({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span className="text-2xl mt-2 font-medium">{label}</span>
    </button>
  )
}

function HomePage() {
  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 gap-8 mt-8">
        <DashboardButton icon={<BarChart2 size={64} />} label="Título y grados académicos" />
        <DashboardButton icon={<Settings size={64} />} label="Insignias y diplomas académicos" />
        <DashboardButton icon={<Send size={64} />} label="Educación continua" />
        <DashboardButton icon={<Wallet size={64} />} label="Insignias y dsimplomas externos" />
      </div>
    </div>
  )
}

function DashboardButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <Card className="flex flex-col items-center justify-center p-24 h-96 hover:bg-accent transition-colors">
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <div className="text-primary">{icon}</div>
      </div>
      <span className="font-medium text-3xl">{label}</span>
    </Card>
  )
}

function PhotoCard({ src, alt, info }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative h-96 w-full">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{alt}</h3>
          <p className="text-xl text-muted-foreground mt-2">Click to view details</p>
        </div>
      </Card>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="max-h-[85vh]">
          <div className="mx-auto w-full max-w-4xl">
            <DrawerHeader>
              <DrawerTitle className="text-3xl">{info.title}</DrawerTitle>
              <DrawerDescription className="text-xl">{info.description}</DrawerDescription>
            </DrawerHeader>
            <div className="p-6">
              <div className="relative h-96 w-full mb-6">
                <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover rounded-lg" />
              </div>
              <div className="space-y-4">
                {info.details.map((detail, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="text-2xl font-medium">{detail.title}</h4>
                    <p className="text-xl text-muted-foreground">{detail.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <DrawerFooter>
              <Button className="text-xl py-6">Take Action</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="text-xl py-6">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { PhotoCard }