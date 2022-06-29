import Folha from "../models/Folha";

export class FolhaRepository {
    private folhas: Folha[] = [];

    listar (): Folha[] {
        return this.folhas;
    }

    cadastrar (folha: Folha): Folha {
        this.folhas.push(folha);
        const productIndex = this.folhas.findIndex(p => p.id === folha.id);
        return this.folhas[productIndex];
    }
}