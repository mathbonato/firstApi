import { Request, Response } from 'express';
import { ProductRepository } from '../repositories/ProductRepository';
import  { v4 as uuidv4 } from 'uuid';

const productRepository = new ProductRepository();

export class ProductController {
    list (request: Request, response: Response) {
        response.status(201).json(productRepository.getAll());
    }
    
    create (request: Request, response: Response): void {
        const { name, description, quantity, price } = request.body;
        const id = uuidv4();
        const productParams = {
            id,
            name,
            description,
            quantity,
            price
        }
        const product = productRepository.create(productParams);
        response.status(201).json(product);
    }

    update (request: Request, response: Response) {
        const { name, description, quantity, price } = request.body;
        const { id } = request.params;
        const product = { id, name, description, quantity, price };
        const updatedProduct = productRepository.update(product);
        if (updatedProduct) {
            response.status(201).json(updatedProduct);
        } else {
            response.status(201).json({ message: "Product not found!" });
        }
    }

    delete (request: Request, response: Response) {
        const { id } = request.params;
        const products = productRepository.delete(id);
        response.status(201).json(products);
    }
}

