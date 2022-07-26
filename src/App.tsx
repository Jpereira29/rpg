import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'
export default function App() {

  const char = useCharacter('Player 1')
  const char2 = useCharacter('Player 2')

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.movLeft()
        break
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
        break
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} position={char.position} name={char.name} />
        <Character x={char2.x} y={char2.y} position={char2.position} name={char2.name} />
      </C.Map>
    </C.Container>
  )
}