import { User } from 'interfaces/User';
import { setCookie } from 'nookies';
import api from './api';

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    user: User;
    token: string;
}

export default class UserServices {
    static async getUserById(id: string): Promise<User> {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }


    static async login({
        email,
        password
    }: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await api.post('/sessions/login', {
                email,
                password
            });
            const { token } = response.data;
            const userId = response.data.user.id;

            setCookie(undefined, '@Piupiuwer:token', token, {
                maxAge: 60 * 60 * 24
            });

            setCookie(undefined, '@Piupiuwer:userId', userId, {
                maxAge: 60 * 60 * 24
            });
            (api.defaults.headers as any).Authorization = `Bearer ${token}`;
            return response.data;
        } catch (err) {
            throw new Error((err as any).response.data.message);
        }
    }
}
