//3) Usar o json ou xml disponível como fonte dos dados do faturamento mensal
fetch('./scripts/dados.json')
    .then(r => r.json())
    .then(data => {
        MenorValor(data)
        MaiorValor(data)
        FaturamentoMedia(data)
        FaturamentoEstados(data)

    }).catch(err => console.log("Erro!"))

// • O menor valor de faturamento ocorrido em um dia do mês;
function MenorValor(dados) {
    var menorValor = 999999999999999999999999999999999999999999999999
    for (let i = 0; i < dados.length; i++) {
        let valorFat = dados[i].valor
        if (valorFat > 0 && valorFat < menorValor) {
            menorValor = valorFat
        }
    }
    console.log(`O menor valor faturado foi: ${menorValor}`)
}

// • O maior valor de faturamento ocorrido em um dia do mês;
function MaiorValor(dados) {
    let maiorValor = 0
    for (let i = 0; i < dados.length; i++) {
        let valorFat = dados[i].valor
        if (maiorValor < valorFat) {
            maiorValor = valorFat
        }
    }
    console.log(`O maior valor faturado foi: ${maiorValor}`)
}

// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// obs.: Dias sem faturamento, devem ser ignorados no cálculo da média;
function FaturamentoMedia(dados) {
    let faturamentoIgualMedia = 0
    let diasAcimaMedia = 0
    let diasAbaixoMedia = 0
    let diasImprodutivos = 0
    let valorTotal = 0
    let media = 0
    let diasProdutivos = 0

    for (let i = 0; i < dados.length; i++) {
        let valor = dados[i].valor
        if (valor != 0) {
            valorTotal += valor
            diasProdutivos++
        } else {
            diasImprodutivos++
        }
        //Calculo da média desconsiderando os dias improdutivos
        media = valorTotal / diasProdutivos

        if (valor > media) {
            diasAcimaMedia++
        } else if (valor == media) {
            faturamentoIgualMedia++
        } else if (valor < media && valor > 0) {
            diasAbaixoMedia++
        }
    }

    let totalDias = diasAcimaMedia + diasAbaixoMedia + diasImprodutivos + faturamentoIgualMedia

    console.log(`O valor TOTAL faturado no mês foi de ${valorTotal}`)
    console.log(`O valor médio foi de ${media}.`)
    console.log(`O mês verificado possui ${totalDias} dias onde:
     ${diasAcimaMedia} dias possuem faturamento SUPEROR a média mensal.
     ${diasAbaixoMedia} dias possuem faturamento INFERIOR a média mensal.
     ${diasImprodutivos} dias possuem faturamento ZERADO.
     ${faturamentoIgualMedia} dias possuem faturamento IGUAL a média.`)

}


// 4) Escreva um programa que calcule o percentual que cada estado teve dentro do valor total mensal da distribuidora, dado o valor de faturamento mensal detalhado por estado:

// SP – R$67.836, 43
// RJ – R$36.678, 66
// MG – R$29.229, 88
// ES – R$27.165, 48
// Outros – R$19.849, 53

function FaturamentoEstados(dados) {
    var estados = [
        { estadoNome: "SP", faturamentoMes: 67836.43 },
        { estadoNome: "RJ", faturamentoMes: 36678.66 },
        { estadoNome: "MG", faturamentoMes: 29229.88 },
        { estadoNome: "ES", faturamentoMes: 27165.48 },
        { estadoNome: "Outros", faturamentoMes: 19849.53 }
    ]

    var listaPercentualCalculado = estados.map(FaturamentoPorEstado)

    listaPercentualCalculado.forEach(elemento => {
       
        console.log(`O percentual do estado ${elemento.estado} foi de: ${elemento.percentualEstado + ' %'}`)
    })

    function FaturamentoPorEstado(elemento) {
        let valorTotal = 0
        for (let i = 0; i < dados.length; i++) {
            let valor = dados[i].valor
            if (valor != 0) {
                valorTotal += valor
            }
        }
        return {
            estado: elemento.estadoNome,
            percentualEstado: Math.round(elemento.faturamentoMes * (valorTotal / 100))
        }
    }
}


