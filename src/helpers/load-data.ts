// Arquivo: src/helpers/load-data.ts

import fs from 'fs';

const ARQUIVO = `${__dirname}/../storage/contatos.json`;

let contatos = Array();

function loadContatos() {

    console.log(ARQUIVO)

    // Verifica se o arquivo existe, caso não exista ele cria
    if (!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));

    // Lê o arquivo e adiciona o conteúdo na variável `data`
    const data = fs.readFileSync(ARQUIVO);

    // Converte o conteúdo do arquivo para JSON
    contatos = JSON.parse(data.toString());

    return contatos;
}

function saveContato(data: any) {
    contatos.push({
        id: contatos.length + 1,
        ...data
    });

    fs.writeFileSync(ARQUIVO, JSON.stringify(contatos));

}

export { loadContatos, saveContato };