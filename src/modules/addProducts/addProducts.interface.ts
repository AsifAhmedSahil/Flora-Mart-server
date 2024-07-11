export interface TAddProduct {
    title:string,
    price:number,
    rating:number,
    quantity:number,
    image:string,
    category:string,
    categoryID?:string,
    description:string,
    isDeleted?:boolean,
    instock?:boolean
}