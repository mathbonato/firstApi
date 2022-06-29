import Folha from "../models/Folha";

export function CalcularFolha(folha : { horas: number, valor: number }) {
    const salarioBruto = folha.horas * folha.valor;
    const IR = calculateIR(salarioBruto);
    const INSS = calculateINSS(salarioBruto);
    const FGTS = calculateFGTS(salarioBruto);
    const salarioLiquido = salarioBruto - IR - INSS;
    return { salarioBruto, IR, INSS, FGTS, salarioLiquido };
};

function calculateIR(valor: number) {
    if (valor > 1903.98 && valor <= 2826.65) {
        const aliquota = valor * (7.5/100);
        const parcela = 142.80;
        return aliquota - parcela;
    } else if (valor > 2826.65 && valor <= 3751.05) {
        const aliquota = valor * (15/100);
        const parcela = 142.80;
        return aliquota - parcela;
    } else if (valor > 3751.05 && valor <= 4664.68) {
        const aliquota = valor * (22.5/100);
        const parcela = 142.80;
        return aliquota - parcela;
    } else if (valor > 4664.68) {
        const aliquota = valor * (27.5/100);
        const parcela = 142.80;
        return aliquota - parcela;
    } else {
        return 0;
    }
}

function calculateINSS(valor: number) {
    if (valor <= 1693.72) {
        return valor * (8/100);
    } else if (valor > 1693.72 && valor <= 2822.90) {
        return valor * (9/100);;
    } else if (valor > 2822.90 && valor <= 5645.80) {
        return valor * (11/100);
    } else {
        return 621.03;
    }
}

function calculateFGTS(valor: number) {
    return valor * (8/100);
}