import { User } from 'interfaces/User';
import { createContext, useState, useEffect } from 'react';
import { destroyCookie, parseCookies } from 'nookies';
import UserServices from 'services/UserServices';

interface AuthContextData {
    user: User;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<User>({} as User);

    useEffect(() => {
        const aux = async () => {
            const { '@Piupiuwer:token': token, '@Piupiuwer:userId': userId } =
                parseCookies();
            if (token) {
                const user = await UserServices.getUserById(userId);
                setUserData(user);
            }
        };
        aux();
    }, []);

    const logout = () => {
        destroyCookie(undefined, '@Piupiuwer:token');
        destroyCookie(undefined, '@Piupiuwer:userId');
    };

    return (
        <AuthContext.Provider value={{ user: userData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
