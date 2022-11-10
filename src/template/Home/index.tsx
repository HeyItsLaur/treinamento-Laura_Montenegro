import { useEffect, useState } from 'react';
import PiuServices from 'services/PiuServices';
import { Piu } from 'interfaces/piu';
import NavComponent from 'components/NavComponent/NavComponent';
import PostComponent from 'components/NavComponent/PostComponent'
import * as S from './styles';

function HomeTemplate(): JSX.Element {
    
    const [texto, setTexto] = useState('');
    const [cCount, setCCount] = useState(0);
    const [countColor, setCountColor] = useState("#102e4a");
    const [reloader, setReloader]= useState(false);

    const [piusArray, setPiusArray] = useState<Piu[]>([]);
    
    useEffect(() => {
        const getPiusFunction = async () => {
            const response = await PiuServices.getPius();
            console.log(response);
            setPiusArray(response);
        };
        getPiusFunction();
    }, [reloader]);
    
    function characterMax(){
        if(cCount >= 140){
            setCountColor("#FF0000")
        }else if(cCount <= 140){
            setCountColor("#102e4a")
        }
    }

    function handleClick(){
        if(cCount <= 140){
            if(texto !== ''){
                const postPiusFunction = async () => {
                    const response = await PiuServices.postPius(texto);
                    console.log(response);
                };
                postPiusFunction();
                setReloader(!reloader);
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
                        <S.TextContainer>
                            <S.TextName>Piu:</S.TextName>
                            <S.TextInput onChange={(valor)=>(setTexto(valor.target.value), setCCount(valor.target.value.length), characterMax())}/>
                        </S.TextContainer>
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
                       piusArray.map((pius)=>(
                            <PostComponent
                                text={pius.text}
                                key = {pius.id}
                                user ={pius.user.username}
                                photo ={pius.user.avatar}
                                id={pius.id}
                                liked={pius.likes}
                            >
                            </PostComponent>
                       ))
                   }
                </S.FeedContainer>
            </S.Body>
        </>
    );
}
export default HomeTemplate;
