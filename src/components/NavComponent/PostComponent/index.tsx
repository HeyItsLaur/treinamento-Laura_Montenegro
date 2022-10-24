
import * as S from './styles';
import { useState } from 'react';

export type PostProps = {
    text: string;
    title: string;
    selected?: boolean;
};

const Post: React.FC<PostProps> = ({ text, title, selected}) => {

    return(
        <S.PostContainer>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
            <S.LikeButton selected={selected}>
                <S.likeIcon src = '/assets/like.svg'/>
            </S.LikeButton>
        </S.PostContainer>
    );
};

export default Post;
