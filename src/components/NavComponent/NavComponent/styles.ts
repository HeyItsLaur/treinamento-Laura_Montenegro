import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #8d9ec6;
    border-radius: 16px;
    gap: 8px;
    padding: 4px;
`;

export const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: #102e4a;
`;

export const Icon = styled.img`
    width: 24px;
    margin: 4px;
`;
