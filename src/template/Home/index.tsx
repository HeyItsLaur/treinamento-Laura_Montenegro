import NavComponent from 'components/NavComponent';
import * as S from './styles';

function HomeTemplate() {

    return (
        <><S.Header>
        </S.Header><S.Body>
                <S.SideBar>
                    <S.Title>
                        Home
                    </S.Title>
                    <S.NavContainer>
                    </S.NavContainer>
                </S.SideBar>
                <S.FeedContainer>
                </S.FeedContainer>
            </S.Body></>

    );

}
export default HomeTemplate;
