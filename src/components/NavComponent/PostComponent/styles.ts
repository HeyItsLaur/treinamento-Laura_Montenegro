import styled from 'styled-components';

interface SelectedProps{
    selected: boolean;
}

export const PostContainer = styled.div`
    width: 180vh;
    height: 200px;
    background-color: #102E4A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px;
    border-top: solid;
    border-bottom: solid;
    border-color: #8d9ec6;
`;

export const Text =  styled.p`
    font-size: 16px;
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const LikeButton = styled.button<SelectedProps>`
    background-color:${({selected}) =>(selected ? '#FF0000' : '#102E4A')};
    border: none;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
`;

export const likeIcon = styled.img`
    width: 40px;
`;