import { Router, Request, Response } from 'express';
import { ProductController } from '../controllers/ProductController';

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
    return response.status(201).json({ message: "Deu boa! 2" });
});

routes.get("/products",  new ProductController().list);
routes.post("/products",  new ProductController().create);
routes.put("/products/:id",  new ProductController().update);
routes.delete("/products/:id",  new ProductController().delete);

export { routes };