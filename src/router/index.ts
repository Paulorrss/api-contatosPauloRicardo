// Arquivo: src/router/index.ts

import { Router } from "express";
import baseRouter from './base';
import contatoRouter from './contato';

const router = Router();

router.use('/', baseRouter);
router.use('/contato', contatoRouter);

export default router;