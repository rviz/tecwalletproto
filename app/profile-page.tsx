"use client"

import { User, Mail, Phone, MapPin, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProfilePageProps {
  onBack?: () => void
}

export default function ProfilePage({ onBack }: ProfilePageProps) {
  return (
    <div className="relative space-y-16">
      
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Mi Perfil</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-80 h-80 mb-12">
          <Image 
            src="/profile.png" 
            alt="Profile Picture" 
            fill 
            className="rounded-full object-cover border-8 border-primary" 
          />
        </div>
        <h3 className="text-5xl font-bold mb-4">Carlos Rodríguez Méndez</h3>
        <p className="text-3xl text-muted-foreground mb-12">Ingeniero Físico Industrial</p>
      </div>

      <Card className="border-none shadow-md">
        <CardContent className="p-12 space-y-10">
          <h4 className="text-4xl font-semibold mb-8">Información Personal</h4>
          
          <div className="flex items-center gap-8">
            <User size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Nombre Completo</p>
              <p className="text-3xl">Carlos Rodríguez Méndez</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Mail size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Correo Electrónico</p>
              <p className="text-3xl">carlos.rodmen@tec.mx</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Phone size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Teléfono</p>
              <p className="text-3xl">+52 55 1234 5678</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <MapPin size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Ubicación</p>
              <p className="text-3xl">Ciudad de México, México</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Calendar size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Fecha de Nacimiento</p>
              <p className="text-3xl">15 de Marzo de 1995</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardContent className="p-12 space-y-10">
          <h4 className="text-4xl font-semibold mb-8">Resumen Académico</h4>
          
          <div className="flex items-center gap-8">
            <Award size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Títulos Académicos</p>
              <p className="text-3xl">2 Títulos</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Award size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Insignias Académicas</p>
              <p className="text-3xl">9 Insignias</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Award size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Educación Continua</p>
              <p className="text-3xl">7 Certificados</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <Award size={48} className="text-primary" />
            <div>
              <p className="text-2xl text-muted-foreground">Insignias Externas</p>
              <p className="text-3xl">1 Certificados</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 