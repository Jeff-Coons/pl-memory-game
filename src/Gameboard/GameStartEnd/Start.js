import styled from 'styled-components';

export const Start = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 768px;

    @media all and (min-width: 480px) {
        flex-direction: column;
        max-width: none;
    }
`;

export const Button = styled.button`
    appearance: none;
    background: trasparent;
    border: solid 1px #ce2020;
    color: #ce2020;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 3px;
    margin: 4rem;
    padding: 2rem;
    text-transform: uppercase;
`;