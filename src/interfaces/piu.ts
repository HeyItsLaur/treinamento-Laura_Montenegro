import {User} from './User';
import {PiuLike} from './piuLike';

export interface Piu{
    id: string,
    user: User;
    likes: PiuLike[],
    text: string;
    created_at: Date;
    updated_at: Date;
}
