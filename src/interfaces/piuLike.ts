import {User} from './User';
import {Piu} from './piu';

export interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}