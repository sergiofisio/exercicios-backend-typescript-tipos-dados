function acharUsuario(
    usuarios:{
        nome:string, 
        idade:number,
        status:boolean
        }[], 
        nome:string) {    
    const usuarioEncontrado = usuarios.filter((usuario)=>{
        
        return usuario.nome.toLowerCase().includes(nome.toLowerCase())
        })
    console.log(usuarioEncontrado);   
}

acharUsuario([
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
], 'jo')