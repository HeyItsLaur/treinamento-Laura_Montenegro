import NavComponent from 'components/NavComponent/NavComponent';
import * as S from './styles';

function HomeTemplate() {
    return (
        <>
            <S.Header />
            <S.Body>
                <S.SideBar>
                    <S.Title />
                    <S.NavContainer>
                        <NavComponent title="Home" img="/assets/home.svg" />
                        <NavComponent
                            title="Profile"
                            img="/assets/profile.svg"
                        />
                        <NavComponent
                            title="Configs"
                            img="/assets/configs.svg"
                        />
                    </S.NavContainer>
                </S.SideBar>
                <S.FeedContainer />
            </S.Body>
        </>
    );
}
export default HomeTemplate;
