import styled from "styled-components"

export const Container = styled.div<{ items?: number }>`
    --items: ${props => props.items}
    height: 100%;
    max-height: 70px;
    background-color: var(--bg-color-header);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2.5fr repeat(var(--items), 1fr);
    align-items:center;
    grid-gap: 2em;
    padding: 10px 15px;
    border: .025em solid #333;
`

