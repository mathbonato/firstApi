import { Request, Response } from 'express';
import Product from '../models/Product';

let products: Product[] = [];

export class ProductController {
    create (request: Request, response: Response): void {
        const { name, description, quantity, price } = request.body;

        products.push({
            name,
            description,
            quantity,
            price
        });
        
        response.status(201).json(products);
    }

    list (request: Request, response: Response) {
        response.status(201).json({ message: "Listed success!" });
    }

    update (request: Request, response: Response) {
        response.status(201).json({ message: "Updated success!" });
    }

    delete (request: Request, response: Response) {
        response.status(201).json({ message: "Deleted success!" });
    }
}