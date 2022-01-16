import styled from "styled-components"

export const Grid = styled.div`
    width:100%;
    max-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    display: grid;
    background-color: rgba(0,0,0,.225);
    position:relative;
    &::before{
        content: "";
        position: absolute;
        offset: 0;
        height: 18%;
        width: 100vw;
        background-color: rgb(0,150,136);
    }
`

export const App = styled.div`
    --offset-x: 100px;
    --offset-y:  30px;
    width: calc(100%- var(--offset-x)*2);
    height: calc(100% - var(--offset-y)*2);
    margin: var(--offset-y) var(--offset-x);
    box-shadow: 1px 2px 5px 0px rgba(0,0,0,.345);
    z-index: 1000;
    background-color: white;
    display:grid;
    grid-template-columns: 1.3fr 3fr;
    grid-template-rows: 1fr;
`
export const Aside = styled.aside`
    background-color: whitesmoke;
`

export const Main = styled.main`
    background-color: tomato;
`