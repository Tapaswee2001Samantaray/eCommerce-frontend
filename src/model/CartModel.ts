export interface CartModel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    qty: number;
}

export interface Rating {
    rate: number;
    count: number;
}