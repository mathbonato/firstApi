import Funcionario from "./Funcionario";

export default interface Folha {
    id?: string,
    mes: string;
    ano: string;
    horas: number;
    valor: number;
    INSS: number; 
    IR: number; 
    FGTS: number; 
    salarioLiquido: number;
    salarioBruto: number;
    funcionario: Funcionario;
    // detalhes?: any;
}