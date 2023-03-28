// Arquivo: src/router/contato.ts

import { Router } from "express";
import { isValidateObjectRequest } from '../helpers/validate';
import { loadContatos, saveContato } from '../helpers/load-data';

const router = Router();

router.get('/', function (req, res) {
    const contatos = loadContatos();

    res.send(contatos);
});

router.post('/', function (req, res) {
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

export default router;