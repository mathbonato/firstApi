import { Router } from 'express';
import { FolhaController } from '../controllers/FolhaController';

const routes = Router();

routes.post("/folha/cadastrar",  new FolhaController().cadastrar);
routes.post("/folha/calcular",  new FolhaController().calcular);

export { routes };