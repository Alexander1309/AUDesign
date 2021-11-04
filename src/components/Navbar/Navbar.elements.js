import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerNavbar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1300px;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin: auto;
`

export const LogoContainer = styled.div`
    width: 100%;

    img {
        width: 4rem;
        height: 4rem;
    }
`

export const Menu = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 852px) {
        border-top: 3px solid var(--color-secondary);
        background-color: #000;
        position: absolute;
        top: 70px;
        right: ${({show}) => show ? "0" : "-100%"};
        display: ${({show}) => show ? "block" : "none"};
        width: 100%;
        height: 90vh;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        padding-top: 30px;
        z-index: 999;
    }
`

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 852px) {
        width: 100%;
        height: 70px;
    }
`

export const MenuLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: var(--color-secondary);
    font-family: sans-serif;

    &:hover {
        color: #fff;
        background-color: var(--color-primary);
    }

    @media screen and (max-width: 852px) {
        width: 100%;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 852px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
            font-size: 1.5rem;
            fill: #fff;
            margin-right: 0.5rem;
        }
    }
`