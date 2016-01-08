import {Comment} from './comment';
import {User} from './user';

export interface Suggestion{
    id:number;
    title:string;
    description:string;
    createUser: User;
    createDate: string;
    votes: number;
    comments: Comment[];
}