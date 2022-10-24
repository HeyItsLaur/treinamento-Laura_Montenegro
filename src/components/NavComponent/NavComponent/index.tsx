import * as S from './styles';

export type NavComponentProps = {
    title: string;
    img: string;
};

const NavComponent: React.FC<NavComponentProps> = ({ title, img }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.Title>{title}</S.Title>
    </S.Container>
);

export default NavComponent;
