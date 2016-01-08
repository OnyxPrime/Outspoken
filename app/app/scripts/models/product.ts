import {Suggestion} from './Suggestion';
export interface Product{
    id:number;
    name:string;
    description:string;
    suggestions: Suggestion[];
}