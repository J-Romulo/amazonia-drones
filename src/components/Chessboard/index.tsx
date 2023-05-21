import { useState } from "react";
import * as S from './chessboardStyles'
import { GiDeliveryDrone, GiFinishLine } from 'react-icons/gi'
import { GoPackage } from 'react-icons/go'
import { toast } from 'react-toastify'

interface ChessboardProps {
  calculateRoute(startingPoint: string, object: string, destination: string): void;
}

export function Chessboard({calculateRoute}: ChessboardProps) {
    const [selectionMode, setSelectionMode] = useState<string | null>(null)

    const [startingPoint, setStartingPoint] = useState<string | null>(null)
    const [object, setObject] = useState<string | null>(null)
    const [destination, setDestination] = useState<string | null>(null)

    function handleSendPositions(){
      if(!startingPoint || !object || !destination){
        toast.error('Posicione todos os elementos antes de calcular a rota!')
        return
      }

      calculateRoute(startingPoint, object, destination)
    }

    function handleClick(row: number, col: number){
      const letter = String.fromCharCode(65 + col); // Convert column index to letter (A-H)
      const number = 8 - row; // Convert row index to number (1-8)

      if(selectionMode === 'starting_point'){
        setStartingPoint(`${letter}${number}`)
      }else if(selectionMode === 'object'){
        setObject(`${letter}${number}`)
      }else if (selectionMode === 'destination'){
        setDestination(`${letter}${number}`)
      }

      setSelectionMode(null)
    };
  
    function getIcon(position: string, isSelected: boolean){
      if(isSelected){
        if(startingPoint === position){
          return <GiDeliveryDrone />
        }else if(object === position){
          return <GoPackage />
        }else if (destination === position){
          return <GiFinishLine />
        }
      }else{
        if(selectionMode){
          if(selectionMode === 'starting_point'){
            return <GiDeliveryDrone />
          }else if(selectionMode === 'object'){
            return <GoPackage />
          }else if (selectionMode === 'destination'){
            return <GiFinishLine />
          }
        }else{
          return null
        }
      }
    }

    function checkSelected(position: string){
        if(startingPoint === position){
          return true
        }else if(object === position){
          return true
        }else if (destination === position){
          return true
        }else{
          return false
        }
    }

    const renderSquare = (row: number, col: number) => {
      const isDarkSquare = (row + col) % 2 === 1;
      const position = `${String.fromCharCode(65 + col)}${8 - row}`;
      const isSelected = checkSelected(position)

      return (
        <S.Square
          key={`${row}-${col}`}
          onClick={() => handleClick(row, col)}
          isDarkSquare={isDarkSquare}
          isSelected={isSelected}
        >
          {getIcon(position, isSelected)}
        </S.Square>
      );
    };
  
    const renderRow = (row: number) => {
      const squares = [];
  
      for (let col = 0; col < 8; col++) {
        squares.push(renderSquare(row, col));
      }
  
      return (
        <S.Row key={row}>
            <span>{8 - row}</span>
            {squares}
        </S.Row>
      )
    };
  
    const renderBoard = () => {
      const rows = [];
  
      for (let row = 0; row < 8; row++) {
        rows.push(renderRow(row));
      }
      
      return (
        <S.Board>
            {rows}
            <S.LettersLine>
                <S.Letters>A</S.Letters>
                <S.Letters>B</S.Letters>
                <S.Letters>C</S.Letters>
                <S.Letters>D</S.Letters>
                <S.Letters>E</S.Letters>
                <S.Letters>F</S.Letters>
                <S.Letters>G</S.Letters>
                <S.Letters>H</S.Letters>
            </S.LettersLine>
        </S.Board>
      )
    };
    
    return (
        <S.Container>
                {renderBoard()}
                <S.ButtonsContainer>
                    <S.SelectionButtons>
                      <S.SelectionButton onClick={() => {setSelectionMode('starting_point'); setStartingPoint(null)}} data-rh="Posicionar drone">
                        <GiDeliveryDrone size={30}/>
                      </S.SelectionButton>

                      <S.SelectionButton onClick={() => {setSelectionMode('object'); setObject(null)}} data-rh="Posicionar objeto">
                        <GoPackage size={30} />
                      </S.SelectionButton>

                      <S.SelectionButton onClick={() => {setSelectionMode('destination'); setDestination(null)}} data-rh="Posicionar chegada">
                        <GiFinishLine size={30} />
                      </S.SelectionButton>
                    </S.SelectionButtons>
                    <S.CalculateButton onClick={() => {handleSendPositions()}}>Calcular Rota</S.CalculateButton>
                </S.ButtonsContainer>
        </S.Container>
    );
  };