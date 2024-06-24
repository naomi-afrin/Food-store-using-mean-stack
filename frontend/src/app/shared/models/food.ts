export class Food{
    // required fileds defined by !
    // optional fields defined by ?
    id!: string;
    name!: string;
    price!: number;
    tas?: string[];
    favorite!: boolean;
    stars!: number;
    imageUrl!: string;
    origins!: string[];
    cookTime!: string;
    tags?: string[];
}