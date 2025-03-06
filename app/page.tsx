"use client"

import { useState } from "react"
import { Home, User, Wallet, BarChart2, Settings, Bell, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <div className="bg-[#452BE0] text-white p-20 flex justify-between items-center">
        <h1 className="text-6xl font-bold">Tec Learner Wallet</h1>
        <Button variant="ghost" size="icon" className="text-white hover:bg-[#5A43E5] h-16 w-16">
          <Bell size={64} />
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        {activeTab === "home" && <HomePage />}
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
            onClick={() => setActiveTab("profile")}
          />
          <NavButton
            icon={<Wallet size={48} />}
            label="Wallet"
            isActive={activeTab === "wallet"}
            onClick={() => setActiveTab("wallet")}
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
    <Card className="flex flex-col items-center justify-center p-24 h-64 hover:bg-accent transition-colors">
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <div className="text-primary">{icon}</div>
      </div>
      <span className="font-medium text-3xl">{label}</span>
    </Card>
  )
}

function ProfilePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <User size={128} className="text-muted-foreground mb-8" />
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <p className="text-2xl text-muted-foreground">Profile page content would go here</p>
    </div>
  )
}

function WalletPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Wallet size={128} className="text-muted-foreground mb-8" />
      <h1 className="text-4xl font-bold mb-4">Wallet</h1>
      <p className="text-2xl text-muted-foreground">Wallet page content would go here</p>
    </div>
  )
}

