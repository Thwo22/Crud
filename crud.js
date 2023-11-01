// dados

const clientes = [
    {
        username: "Thiago",
        id: 1,
        email: "thiago123@exemplo.com"
    },

    {
        username: "pedro",
        id: 2,
        email: "pedro123@exemplo.com"
        
    },

    {
        username: "Aghata",
        id: 3,
        email: "aghata123@exemplo.com"
    }

]

const descrição = [
    {
        nome: "caneta",
        preço: "R$ 1,50",
        estoque: 20
    },

    {
        nome: "lápis",
        preço: "R$ 1,00",
        estoque: 20
    },

    {
        nome: "creme",
        preço: "R$22,00",
        estoque: 10
    }
];

//create 

function criarCliente(username, id, email) {
    const obj = {username: username, id: id, email: email };
    clientes.push(obj);
}

//read

function verClientes() {
    console.log(clientes);
    return clientes;

}

//update

function atualizaCliente(username, novoEmail, novoUser) {
 
    if(novoEmail) {
        nome[index].nome = novoUser
    }
    if(novoUser) {
        nome[index].email = novoEmail
    }
}

function excluirCliente(username) {
     const index = clientes.findIndex(username => clientes.username == username);
     clientes.splice(index, 1)
}





criarCliente('maria', 4, "maria123@exemplo.com");
verClientes();