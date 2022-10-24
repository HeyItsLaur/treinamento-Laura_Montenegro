import { useState } from 'react';
import NavComponent from 'components/NavComponent/NavComponent';
import PostComponent from 'components/NavComponent/PostComponent'
import * as S from './styles';

function HomeTemplate() {
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');

    interface IPost {
        title: string;
        text: string;
    }

    const[postsArray, setPostsArray] = useState<IPost[]>([]);

    function handleClick(){
        setPostsArray([
            {
                title: titulo,
                text: texto
            },
            ...postsArray
        ]);
    }

    return (
        <>
            <S.Header>
                <S.searchBar>
                    <S.logo src = '/assets/wind.svg' />
                    <S.searchIcon src = '/assets/search.svg'/>
                    <S.search>
                    </S.search>
                </S.searchBar>
            </S.Header>
            <S.Body>
                <S.SideBar>
                    <S.Title />
                    <S.NavContainer>
                        <NavComponent title="Home" img="/assets/home.svg" />
                        <NavComponent title="Profile" img="/assets/profile.svg"/>
                        <NavComponent title="Configs" img="/assets/configs.svg"/>
                    </S.NavContainer>
                </S.SideBar>
                <S.FeedContainer>
                    <S.CreatePost>
                        <S.TitleInput onChange={(valor)=>(setTitulo(valor.target.value))}/>
                        <S.TextInput onChange={(valor)=>(setTexto(valor.target.value))}/>
                        <S.SendButton onClick={handleClick}>
                            <S.SendIcon src='/assets/send.svg' />
                        </S.SendButton>
                    </S.CreatePost>
                   {
                       postsArray.map((post)=>(
                            <PostComponent
                             text ={post.text}
                             selected ={true}
                             title ={post.title}>
                             </PostComponent>
                       ))
                   }
                </S.FeedContainer>
            </S.Body>
        </>
    );
}
export default HomeTemplate;
