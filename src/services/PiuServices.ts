import {Piu} from 'interfaces/piu';

import api from './api';

export default class PiusServices{
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }   
}
