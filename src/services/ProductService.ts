import axios from "axios";

export class ProductService {
    private static URL: string = "https://fakestoreapi.com";
    
    public static getAllProducts() {
        let productURL = `${this.URL}/products`;
        return axios.get(productURL);
    }
    
    public static getProductByID(id: number) {
        let productURL = `${this.URL}/products/${id}`;
        return axios.get(productURL);
    }
}