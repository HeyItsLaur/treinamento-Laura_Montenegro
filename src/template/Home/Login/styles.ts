import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #102e4a;
`;

export const LoginContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    width: 24%;
    background-color: #8d9ec6;
    border-radius: 24px;
`;

export const LoginText = styled.div`
    font-size: 24px;
    color: black;
    margin-top: 8px;
`;

export const LoginInput = styled.input`
    padding: 8px;
    border: 2px;
    background-color: #8d9ec6;
    border-color: #102e4a;
    border-style: solid;
    border-radius: 16px;
    margin: 8px;
`;

export const LoginButton = styled.button`
    padding: 16px;
    background-color: #102e4a;
    color: #8d9ec6;
    border-radius: 16px;
    border-style: none;
    margin: 8px;
`;

export const ErrorMessage = styled.p`
    font-size: 24px;
    color: red;
    margin: 4px;
`;
