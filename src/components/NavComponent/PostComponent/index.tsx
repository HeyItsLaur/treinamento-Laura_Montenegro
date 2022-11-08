
import * as S from './styles';
import { useState } from 'react';

export type PostProps = {
    text: string;
    title: string;
    selected?: boolean;
};

const Post: React.FC<PostProps> = ({ text, title}) => {
    const[cor, setCor]= useState("#102E4A");

    function mudaCor(){
        if(cor == "#102E4A"){
            setCor("#A8577E")
        }else if(cor == "#A8577E"){
            setCor("#102E4A")
        }
    }



    return(
        <S.PostContainer>
            <S.profileInfo>
                <S.profilePic src = '/assets/profilePic.png'/>
                <S.userName>HeyItsLauren</S.userName>
            </S.profileInfo>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
            <S.buttonContainer>
                <S.LikeButton style={{backgroundColor: cor}} onClick={mudaCor}>
                    <S.likeIcon src='/assets/like.svg' />
                </S.LikeButton>
                <S.remove>
                    <S.removeIcon src = '/assets/removeIcon.svg' />
                </S.remove>
            </S.buttonContainer>
        </S.PostContainer>
    );
};

export default Post;
