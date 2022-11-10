import styled from 'styled-components';

interface SelectedProps{
    selected: boolean;
}

interface BodyProps{
    deleted: boolean;
}

export const PostContainer = styled.div<BodyProps>`
    width: 100%;
    background-color: #102E4A;
    display: ${(props: BodyProps)=> props.deleted ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    margin: 24px;
    border-top: solid;
    border-bottom: solid;
    border-color: #8d9ec6;
`;

export const Text =  styled.div`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    color: #E7DFC6;
`;


export const LikeButton = styled.button<SelectedProps>`
    border: none;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props: SelectedProps)=> props.selected ? 'red' : '#102E4A'};
`;

export const likeIcon = styled.img`
    width: 40px;
`;

export const profileInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px;
    align-self: flex-start;
`;

export const profilePic = styled.img`
    width: 64px;
    margin: 8px;
`;

export const userName = styled.h1`
    font-size: 24px;
    font-style: bold;
    font-family: 'Poppins', sans-serif;
    color: #E7DFC6;
`;

export const postHeader = styled.div`
    display:flex;
    flex-direction: row;
    align-items: left;
    justify-content: space-between;
    gap: 40px;
`;

export const remove = styled.button`
    border: none;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: #102E4A;
`;

export const removeIcon = styled.img`
    width: 36px;
`;

export const buttonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;