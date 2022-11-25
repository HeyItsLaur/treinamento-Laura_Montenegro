import { useRouter } from 'next/router';
import { useState } from 'react';
import UserServices from 'services/UserServices';
import * as S from './styles';

function LoginTemplate(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await UserServices.login({ email, password });
            router.push('/feed');
        } catch (err) {
            setError((err as any).message);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <S.Body>
            <S.LoginContainer>
                <S.LoginText>Email</S.LoginText>
                <S.LoginInput
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <S.LoginText>Senha</S.LoginText>
                <S.LoginInput
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <S.LoginButton onClick={handleLogin}>Login</S.LoginButton>
                <S.ErrorMessage>{error}</S.ErrorMessage>
            </S.LoginContainer>
        </S.Body>
    );
}
export default LoginTemplate;
