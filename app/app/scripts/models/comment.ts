import {User} from './User';
export interface Comment{
    id:number;
    description:string;
    createUser:User;  
    createDate:string;          
}