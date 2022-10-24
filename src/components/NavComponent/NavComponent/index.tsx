import * as S from './styles';

export type NavComponentProps = {
    title: string;
    icon: string;
};

const Test: React.FC<NavComponentProps> = ({ title }, {icon}) => (
    <S.Container>
        <S.Image src = {icon}/>
        <S.Title>{title}</S.Title>
    </S.Container>
);

export default Test;