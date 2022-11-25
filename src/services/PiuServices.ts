import { Piu } from 'interfaces/piu';
import { User } from 'interfaces/User';
import api from './api';

export default class PiusServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        console.log((api.defaults.headers as any).Authorization);
        return response.data;
    }

    static async postPius(texto: string): Promise<Piu> {
        const response = await api.post('/pius', { text: texto });
        return response.data.text;
    }

    static async likePius(id: string): Promise<Piu & { operation: string }> {
        const response = await api.patch(`/pius/like/${id}`);
        return response.data;
    }

    static async deletePius(id: string): Promise<void>{
        const response = await api.delete(`/pius/${id}`);
        return response.data;
    }

    static async getUserByID(userId: string): Promise<User> {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    }
}
