function etiquetadora(produto:{produto:string, lote:number, ano:number, qtd:number}) {
    let etiqueta:string[]=[]
    for (let i = 0; i <= produto.qtd; i++) {
        etiqueta.push(`${produto.lote}-${produto.ano}-${("000"+i).slice(-3)}`)
    }
    return etiqueta
}

console.log(etiquetadora(
    {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 50
    })
    );
