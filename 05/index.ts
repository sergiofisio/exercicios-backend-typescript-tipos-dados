function soletrar(palavra:string) {
    const palavraseparada = palavra.split('')
    let soletrado:string = ''
    for (const letra of palavraseparada) {
        soletrado += letra+'-'
    }
    return soletrado.slice(0, -1)
}

console.log(soletrar('programador'));
