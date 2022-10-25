import { FormEvent, useState } from 'react';
import NavComponent from 'components/NavComponent/NavComponent';
import PostComponent from 'components/NavComponent/PostComponent'
import * as S from './styles';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
</style>

function HomeTemplate(): JSX.Element {
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [cCount, setCCount] = useState(0);
    const [countColor, setCountColor] = useState("#102e4a")

    function characterMax(){
        if(cCount >= 140){
            setCountColor("#FF0000")
        }else if(cCount <= 140){
            setCountColor("#102e4a")
        }
    }

    interface IPost {
        title: string;
        text: string;
    }

    const[postsArray, setPostsArray] = useState<IPost[]>([]);

    function handleClick(){
        if(cCount <= 140){
            if(texto != ''){
                setPostsArray([
                    {
                        title: titulo,
                        text: texto
                    },
                    ...postsArray
                ]);
            }
        }
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
                        <S.TextInput onChange={(valor)=>(setTexto(valor.target.value), setCCount(valor.target.value.length), characterMax())}/>
                        <S.Info>
                            <S.countContainer style={{backgroundColor: countColor}}>
                                <S.characterCount>{cCount}/140</S.characterCount>'
                            </S.countContainer>
                            <S.SendButton onClick={handleClick}>
                                <S.SendIcon src='/assets/send.svg' />
                            </S.SendButton>
                        </S.Info>
                    </S.CreatePost>
                   {
                       postsArray.map((post)=>(
                            <PostComponent
                             text ={post.text}
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
