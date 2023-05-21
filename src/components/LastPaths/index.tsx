'use client'
import api from "@/services/api"
import { useEffect, useState } from "react"
import Loader from "../Loader"
import * as S from './styles'

interface Path {
    id: string,
    starting_point: string,
    object: string,
    destination: string,
    path: string,
    total_time: string,
    created_at: string
}

export function LastPaths({parentLoading}: {parentLoading: boolean}) {
    const [lastPathsCalculated, setLastPathsCalculated] = useState<Path[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!parentLoading){
            (async function(){
                setIsLoading(true)
                const { data } = await api.get('/drones/paths')
    
                setLastPathsCalculated(data)
                setIsLoading(false)
            })()
        }
    }, [parentLoading])

    if(isLoading){
        return(
            <Loader color='#FF0048'/>
        )
    }

    return (
        <S.LastPathsContainer>
            {lastPathsCalculated.map((path) => {
                return(
                    <S.LastPath key={path.id}>
                        De {path.starting_point}, coletando o objeto em {path.object} até {path.destination}. Em {Number(path.total_time).toFixed(0)} segundos.
                    </S.LastPath>
                )
            })}
        </S.LastPathsContainer>
    )
}