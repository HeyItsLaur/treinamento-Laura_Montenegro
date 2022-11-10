import { useEffect, useState } from 'react';
import PiuServices from 'services/PiuServices';
import * as S from './styles';

export type PostProps = {
    user: string;
    text: string;
    photo: string;
    id: string;
    liked: string;
    selected?: boolean;
};

const Post: React.FC<PostProps> = ({ text, user, photo, id }) => {
    const [selected, setSelected] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const deletePiusFunction = async () => {
        const response = await PiuServices.deletePius(id);
        console.log(response);
        setDeleted(!deleted);
    };

    const likePiusFunction = async () => {
        const response = await PiuServices.likePius(id);
        console.log(response);
    };

    useEffect(() => {
        const aux = async () => {
            const userObject = await PiuServices.getUserByID(
                '3c0e589d-daa2-47d6-890b-3a24c136b423'
            );
            if (userObject.likes.find((like) => like.piuId === id)){
                setSelected(true);
            }
        };
        aux();
    }, []);

    function mudaCor() {
        likePiusFunction();
        setSelected(!selected);
    }

    return (
        <S.PostContainer deleted={deleted}>
            <S.profileInfo>
                <S.profilePic src={photo} />
                <S.userName>{user}</S.userName>
            </S.profileInfo>
            <S.Text>{text}</S.Text>
            <S.buttonContainer>
                <S.LikeButton onClick={mudaCor} selected={selected}>
                    <S.likeIcon src="/assets/like.svg" />
                </S.LikeButton>
                <S.remove>
                    <S.removeIcon
                        src="/assets/removeIcon.svg"
                        onClick={deletePiusFunction}
                    />
                </S.remove>
            </S.buttonContainer>
        </S.PostContainer>
    );
};

export default Post;
