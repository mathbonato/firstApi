import { Request, Response } from 'express';
import  { v4 as uuidv4 } from 'uuid';

import { FolhaRepository } from '../repositories/FolhaRepository';
import { CalcularFolha } from '../service/CalcularFolha';
import { notifyAppConsulta } from '../service/ConsultaService';
import { PubSubService } from '../service/PubSub';

const folhaRepository = new FolhaRepository();

export class FolhaController {
    cadastrar (request: Request, response: Response): void {
        const { mes, ano, horas, valor, funcionario } = request.body;
        const { nome, cpf } = funcionario;
        const id = uuidv4();
        const  { INSS, IR, FGTS, salarioLiquido, salarioBruto } = CalcularFolha({ horas, valor });

        const folhaParams = {
            id,
            mes,
            ano,
            horas,
            valor,
            INSS, 
            IR, 
            FGTS, 
            salarioLiquido,
            salarioBruto,
            funcionario: { nome, cpf }
        }
        const folha = folhaRepository.cadastrar(folhaParams);

        if (folha) {
            const pubsub = new PubSubService();
            pubsub.publish(folha);
            response.status(201).json(folha);
        } else {
            response.status(500).json({ message: "Error on folha creation" });
        }
    }

    async calcular (_request: Request, response: Response) {
        const folhas = folhaRepository.listar();
        const folhasProcessadas = folhas.map(folha => {
            const calculos = CalcularFolha(folha);
            return {...folha, detalhes: calculos };
        });
        const result = await notifyAppConsulta(folhasProcessadas);
        if (result && result.status === 201) {
            response.status(200).json("Folhas processadas com sucesso!");
        } else {
            response.status(404).json({ message: "Erro ao processar folhas!" });
        }
    }
}



