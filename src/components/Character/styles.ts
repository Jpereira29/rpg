import styled from "styled-components";

export const Container = styled.div<{size: number, left: number, top: number, position: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('assets/char.png');
    background-position: 0px -${props => props.position}px;
`
export const Name = styled.div`
    width: 35px;
    color: #FFFB00;
    background-color: gray;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    margin-top: -20px;
`