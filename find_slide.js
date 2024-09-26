const usuarios = [
    {name: "Ana", email: "ana@exemple.com"},
    {name: "joao", email: "joao@exemple.com"},
    {name: "Luis", email: "luis@exemple.com"},
    {name: "Maria", email: "maria@exemple.com"}
];

const usuarioEncontrado = usuarios.find(usuario => usuario.name === "Luis");

console.log(usuarioEncontrado);