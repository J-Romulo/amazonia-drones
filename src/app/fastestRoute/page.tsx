'use client'
import { Chessboard } from '@/components/Chessboard'
import * as HomeStyle from '../styles'
import * as S from './styles'
import ReactHintFactory from 'react-hint';
import 'react-hint/css/index.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import api from '@/services/api';
import Loader from '@/components/Loader';

const ReactHint = ReactHintFactory(React);

export default function FastestRoute(){
    const [isLoading, setIsLoading] = useState(false)
    const [currentFastestRoute, setCurrentFastestRoute] = useState([])
    const [currentTotalTime, setCurrentTotalTime] = useState()

    async function calculateFastestRoute(starting_point: string, object: string, destination: string){
        try{
            setIsLoading(true)
            const { data } = await api.post('/drones/path', {starting_point, object, destination})

            setCurrentFastestRoute(data.path)
            setCurrentTotalTime(data.total_time)
            setIsLoading(false)
        }catch(err){
            console.log(err)
            toast.error('Ocorreu um erro ao calcular a rota. Tente novamente em instantes.')
        }
    }

    return(
        <>
        <ToastContainer autoClose={6000} toastStyle={{fontSize: '0.5rem'}}/>
        <HomeStyle.Container>
            <ReactHint autoPosition={true} events className='hint react-hint' />
            <S.MainContent>
                {isLoading &&
                    <S.LoadingScreen>
                        <Loader color='#FF0048'/>
                    </S.LoadingScreen>
                }
                <S.LeftSection>
                    <Chessboard calculateRoute={calculateFastestRoute}/>
                </S.LeftSection>
                <S.RightSection>
                        <S.Title>Está pronto para calcular sua entrega?</S.Title>
                        <S.GuidanceText>Posicione os elementos no tabuleiro ao lado para formar sua rota de entrega e clique em "Calcular rota". O resultado irá aparecer logo abaixo.</S.GuidanceText>

                        {currentFastestRoute.length > 0 && currentTotalTime && 
                            <S.FastestRouteInfo>
                                <S.FastestRouteField>
                                    <S.FastestRouteLabel>Essa é a rota mais rapida para sua entrega ser concluída:</S.FastestRouteLabel>
                                    <S.FastestRouteData>{currentFastestRoute.join(' -> ')}</S.FastestRouteData>
                                </S.FastestRouteField>
                                <S.FastestRouteField>
                                    <S.FastestRouteLabel>Tempo total:</S.FastestRouteLabel>
                                    <S.FastestRouteData>{currentTotalTime} segundos</S.FastestRouteData>
                                </S.FastestRouteField>
                            </S.FastestRouteInfo>
                        }
                </S.RightSection>
            </S.MainContent>
        </HomeStyle.Container>
        </>
    )
}