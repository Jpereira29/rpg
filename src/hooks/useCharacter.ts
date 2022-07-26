import { useState } from "react";
import { mapSpots } from "../data/mapSpots";

export function useCharacter(propName: string) {
    const [pos, setPos] = useState({ x: 3, y: 5 })

    const [position, setPosition] = useState(0)

    const [name, setName] = useState(propName)

    function movLeft() {
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }))
        setPosition(30)
    }

    function moveRight() {
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }))
        setPosition(60)
    }

    function moveDown() {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y  + 1: pos.y,
        }))
        setPosition(0)
    }

    function moveUp() {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y  - 1: pos.y,
        }))
        setPosition(90)
    }

    function canMove(x: number, y: number) {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] ===  1)
        }

        return false
    }

    return {
        name,
        x: pos.x,
        y: pos.y,
        movLeft,
        moveRight,
        moveDown,
        moveUp,
        position
    }
}