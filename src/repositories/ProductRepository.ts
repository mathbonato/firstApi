import Product from "../models/Product";

export class ProductRepository {
    private products: Product[] = [];

    create (product: Product): Product {
        this.products.push(product);
        const productIndex = this.products.findIndex(p => p.id === product.id);
        return this.products[productIndex];
    }

    update (updatedProduct: Product): Product | undefined {
        const productIndex = this.products.findIndex(product => product.id === updatedProduct.id);
        return this.products[productIndex] = updatedProduct;
    }

    getAll (): Product[] {
        return this.products;
    }

    getById (id: string): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    delete (id: string): Product[] {
        return this.products = this.products.filter(product => product.id != id);
    }
}