"use client"

import { GraduationCap, Award, BookOpen, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DashboardButtonProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

function DashboardButton({ icon, label, onClick }: DashboardButtonProps) {
  return (
    <Card
      className="overflow-hidden hover:shadow-md transition-all cursor-pointer border-none rounded-4xl"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex flex-col items-center p-12 h-80">
          <div className="bg-primary/10 p-8 rounded-full mb-8">
            <div className="text-primary">{icon}</div>
          </div>
          <span className="font-medium text-3xl text-center">{label}</span>
        </div>
      </CardContent>
    </Card>
  )
}

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-4xl font-semibold mb-8">Mis Credenciales</h2>
      <div className="grid grid-cols-2 gap-12">
        <DashboardButton 
          icon={<GraduationCap size={64} />} 
          label="Títulos Académicos" 
          onClick={() => onNavigate("titulos-academicos")} 
        />
        <DashboardButton 
          icon={<Award size={64} />} 
          label="Insignias Académicas" 
          onClick={() => onNavigate("insignias-academicas")} 
        />
        <DashboardButton 
          icon={<BookOpen size={64} />} 
          label="Educación Continua" 
          onClick={() => onNavigate("educacion-continua")} 
        />
        <DashboardButton 
          icon={<Medal size={64} />} 
          label="Insignias Externas" 
          onClick={() => onNavigate("insignias-externas")} 
        />
      </div>
    </div>
  )
} 