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
    width: 320px;
    height: 40px;
    background-color: #8D9EC6;
    border: none;
    border-radius: 16px;
`;

export const searchIcon = styled.img`
    width: 40px;
    margin: 8px;
`;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;;
    align-items: center;
    width: 120vw;
    min-height: 100vh;
    background-color: #102e4a;
    overflow-y: scroll;
    padding: 16px;
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
    width: 100%;
    height: 200px;
    background-color: #8d9ec6;
    border-radius: 24px; 
    margin-top: 16px;
    padding: 8px;

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width:100%;
    justify-content: center;
`;

export const TextName = styled.h1`
    font-size: 24px;
    font-style: bold;
    font-family: 'Poppins', sans-serif;
    color: #102e4a;
    margin-top: 8px;
    margin-left: 12px;
`;

export const TextInput = styled.input`
    margin: 8px;
    width: 100%;
    font-size: 16px;
    padding: 8px;
    background-color: #8d9ec6;
    border: solid;
    border-color: #102e4a;
    border-radius: 8px;
    overflow-x: scroll;

`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleName = styled.h1`
    font-size: 24px;
    font-style: bold;
    font-family: 'Poppins', sans-serif;
    color: #102e4a;
    margin-top: 8px;
`;

export const TitleInput = styled.input`
    margin: 8px;
    margin-top: 24px;
    width: 100%;
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

export const countContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 12px;
`;

export const characterCount = styled.h1`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    color: #8d9ec6;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;