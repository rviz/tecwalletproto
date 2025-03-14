"use client"

import { PhotoCard } from "./components/photo-card"
import { BackButton } from "./components/back-button"

interface InsigniasAcademicasPageProps {
  onBack?: () => void
}

export default function InsigniasAcademicasPage({ onBack }: InsigniasAcademicasPageProps) {
  return (
    <div className="relative space-y-16">
      <div className="flex items-center justify-between">
        {onBack && <BackButton onClick={onBack} />}
        <h2 className="text-4xl font-bold">Insignias y diplomas académicos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0100.svg"
          alt=""
          info={{
            title: "Solución de problemas complejos",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SSF0100 - Fundamentos de Seguridad Informática" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
              { title: "Competencias", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0200.svg"
          alt=""
          info={{
            title: "Construcción de modelos",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SSF0200 - Seguridad en Redes" },
              { title: "Fecha de Emisión", content: "Julio 2022" },
              { title: "Competencias", content: "Configuración de firewalls, detección de intrusiones, VPNs" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0300.svg"
          alt=""
          info={{
            title: "Caracterización de fenómenos físicos",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SSF0300 - Seguridad en Aplicaciones Web" },
              { title: "Fecha de Emisión", content: "Septiembre 2022" },
              { title: "Competencias", content: "OWASP Top 10, XSS, CSRF, SQL Injection" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF400.svg"
          alt=""
          info={{
            title: "Identificación de fenómenos físicos",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SSF400 - Seguridad en Dispositivos Móviles" },
              { title: "Fecha de Emisión", content: "Octubre 2022" },
              { title: "Competencias", content: "Seguridad en Android, iOS, análisis de malware móvil" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0500.svg"
          alt=""
          info={{
            title: "Comunicación de información",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SSF0500 - Seguridad en Entornos Cloud" },
              { title: "Fecha de Emisión", content: "Noviembre 2022" },
              { title: "Competencias", content: "AWS Security, Azure Security, GCP Security" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0100.svg"
          alt=""
          info={{
            title: "Autoconocimiento y gestión",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0100 - Fundamentos de Seguridad de la Información" },
              { title: "Fecha de Emisión", content: "Enero 2023" },
              { title: "Competencias", content: "Gestión de riesgos, políticas de seguridad, ISO 27001" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0200.svg"
          alt=""
          info={{
            title: "Emprendimiento innovador",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0200 - Seguridad Operacional" },
              { title: "Fecha de Emisión", content: "Febrero 2023" },
              { title: "Competencias", content: "Monitoreo de seguridad, respuesta a incidentes, SOC" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0600.svg"
          alt=""
          info={{
            title: "Comunicación",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0600 - Seguridad Avanzada" },
              { title: "Fecha de Emisión", content: "Marzo 2023" },
              { title: "Competencias", content: "Análisis forense, threat hunting, red teaming" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/F0122.svg"
          alt=""
          info={{
            title: "Fotónica y tecnologías cuánticas",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "F0122 - Fundamentos de Ciberseguridad" },
              { title: "Fecha de Emisión", content: "Abril 2023" },
              { title: "Competencias", content: "Principios básicos, amenazas comunes, controles de seguridad" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
      </div>
    </div>
  )
} 