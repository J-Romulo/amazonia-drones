'use client'
import './globals.css'
import * as S from './styles'
import Image from 'next/image'
import amazonia_logo from '../assets/amazonia_logo.png'
import drone_image from '../assets/drone.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false);

  async function startTransition(){
    setIsTransitioning(true)
    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })
    setIsTransitioning(false)

    router.push('/fastestRoute')
  }

  return (
    <S.Container>
      {
        isTransitioning &&          
        <S.TransitionImage
          src={drone_image}// Replace with your actual image path
          alt="Transition Image"
          layout="fill"
          objectFit="contain"
          className="active"
        />
      }
      <S.MainContent>
        <Image 
          src={amazonia_logo}
          width={250}
          height={100}
          quality={100}
          alt="Amazonia logo"
        />
        <S.PresentationText>Bem-vindo ao Amazonia! O aplicativo que torna a entrega por drones rápida e eficiente. Insira as coordenadas iniciais, do objeto e do destino, e obtenha a rota mais rápida em segundos. Revolucione suas entregas agora mesmo!</S.PresentationText>

        <S.StyledButton onClick={() => startTransition()}>Começar</S.StyledButton>
      </S.MainContent>
    </S.Container>
  )
}