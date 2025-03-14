"use client"

import { useState } from "react"
import { Home, User, Wallet, Bell, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import HomePage from "./home-page"
import TitulosAcademicosPage from "./titulos-academicos-page"
import InsigniasAcademicasPage from "./insignias-academicas-page"
import EducacionContinuaPage from "./educacion-continua-page"
import InsigniasExternasPage from "./insignias-externas-page"
import ProfilePage from "./profile-page"
import VerificationsPage from "./verifications-page"
import { NavButton } from "./components/nav-button"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("home")
  const [activePage, setActivePage] = useState<string | null>(null)

  // Handle navigation from dashboard buttons
  const handleNavigate = (page: string) => {
    setActivePage(page)
    // If we're not on the home tab, switch to it
    if (activeTab !== "home") {
      setActiveTab("home")
    }
  }

  // Handle back button click
  const handleBack = () => {
    setActivePage(null)
  }

  // Reset active page when switching tabs
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setActivePage(null)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 max-w-4xl mx-auto relative overflow-hidden">
      {/* Status Bar - Mobile App Style */}
      <div className="bg-[#452BE0] h-12 w-full"></div>
      
      {/* Top Bar */}
      <div className="bg-[#452BE0] text-white p-8 flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold">Tec Learner Wallet</h1>
          <p className="text-3xl text-white/80 mt-2">Credenciales Académicas</p>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-[#5A43E5] h-20 w-20 rounded-full">
          <Bell size={40} />
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8 pb-40">
        {activeTab === "home" && !activePage && <HomePage onNavigate={handleNavigate} />}
        {activeTab === "home" && activePage === "titulos-academicos" && <TitulosAcademicosPage onBack={handleBack} />}
        {activeTab === "home" && activePage === "insignias-academicas" && <InsigniasAcademicasPage onBack={handleBack} />}
        {activeTab === "home" && activePage === "educacion-continua" && <EducacionContinuaPage onBack={handleBack} />}
        {activeTab === "home" && activePage === "insignias-externas" && <InsigniasExternasPage onBack={handleBack} />}
        {activeTab === "profile" && <ProfilePage onBack={() => handleTabChange("home")} />}
        {activeTab === "verifications" && <VerificationsPage onBack={() => handleTabChange("home")} />}
      </main>

      {/* Bottom Navigation - Mobile App Style */}
      <div className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-t-5xl shadow-lg">
        <div className="flex justify-around items-center h-32 px-4">
          <NavButton
            icon={<Home size={48} />}
            label="Inicio"
            isActive={activeTab === "home"}
            onClick={() => handleTabChange("home")}
          />
          <NavButton
            icon={<User size={48} />}
            label="Perfil"
            isActive={activeTab === "profile"}
            onClick={() => handleTabChange("profile")}
          />
          <NavButton
            icon={<FileCheck size={48} />}
            label="Verificaciones"
            isActive={activeTab === "verifications"}
            onClick={() => handleTabChange("verifications")}
          />
        </div>
      </div>
    </div>
  )
}

export { PhotoCard } from "./components/photo-card"

