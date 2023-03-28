// Arquivo: router.ts

import { Router } from "express";
import { isValidateObjectRequest } from './helpers/validate';
import { loadContatos, saveContato } from './helpers/load-data';

const router = Router();

router.get('/', function (req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req, res) {
    res.send({
        name: 'João Teixeira',
        email: 'joao.teixeira@ifro.edu.br',
        github: 'github.com/joaoteixeira'
    });
});

router.post('/contato', function (req, res) {
    let ok = true;
    let mensagem = "Contato salvo com sucesso!";

    const inputs = [
        {
            name: "nome",
            message: "A propriedade [nome] não deve estar em indefinida/vazio!"
        },
        {
            name: "email",
            message: "A propriedade [email] não deve estar em indefinida/vazio!"
        }
    ];

    const checkValidate = isValidateObjectRequest(req, inputs);

    if (Array.isArray(checkValidate)) {
        ok = false;

        mensagem = checkValidate.join(', ');
    }

    if (ok) {
        saveContato(req.body);
    }


    res.send({
        success: ok,
        message: mensagem
    })
});

router.get('/contato', function (req, res) {
    const contatos = loadContatos();

    res.send(contatos);
});

export default router;