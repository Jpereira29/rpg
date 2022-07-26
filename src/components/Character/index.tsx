import * as C from "./styles";

type Props = {
    x: number
    y: number
    position: number,
    name: string
}
export function Character({x, y, position, name}: Props) {
    const size = 30
    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            position={position}
        >
            <C.Name>{name}</C.Name>
        </C.Container>
    )
}