import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 16px;
    color: black;
`;

export const SideBar = styled.div`
    width: 24vh;
    height: bottom;
    background-color: #102e4a;
`;

export const Header = styled.div`
    width: 100%;
    height: 96px;
    background-color: #102e4a;
    border-bottom-style: solid;
    border-bottom-color: #8d9ec6;
`;

export const searchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const logo = styled.img`
    width: 70px;
    margin: 8px;
`;

export const search = styled.input`
    width: 400px;
    height: 56px;
    background-color: #8D9EC6;
    border: none;
    border-radius: 16px;
`;

export const searchIcon = styled.img`
    width: 48px;
    margin: 8px;
`;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;;
    align-items: center;
    width: 120vw;
    height: 600vh;
    background-color: #102e4a;
    overflow-y: scroll;
`;
export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    gap: 16px;
    padding-top: 8px;
    margin: 8px;
`;

export const CreatePost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 120vh;
    height: 200px;
    background-color: #8d9ec6;
    border-radius: 24px; 
    margin-top: 16px;
`;

export const TextInput = styled.input`
    margin: 8px;
    width: 80vh;
    font-size: 16px;
    padding: 8px;
    background-color: #8d9ec6;
    border: solid;
    border-color: #102e4a;
    border-radius: 8px;
`;
export const TitleInput = styled.input`
    margin: 8px;
    margin-top: 24px;
    width: 80vh;
    font-size: 16px;
    padding: 8px;
    background-color: #8d9ec6;
    border: solid;
    border-color: #102e4a;
    border-radius: 8px;
`;

export const SendButton = styled.button`
    background-color: #8d9ec6;
    border: none;
    margin-bottom: 8px;
    border-radius: 24px;
`;
export const SendIcon = styled.img`
    width: 40px;
`;
