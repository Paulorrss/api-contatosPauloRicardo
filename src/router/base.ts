// Arquivo: src/router/base.ts

import { Router } from "express";

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

export default router;