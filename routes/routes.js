const express = require('express');
const router = express.Router();
const Funcionario = require('../controllers/FuncController');

router.post('/novoFuncionario', Funcionario.criarFuncionario);
router.get('/funcionarios', Funcionario.listarFunciorarios);
router.get('/funcionario/:id', Funcionario.buscarFuncionario);
router.put('/funcionario/atualizar', Funcionario.atualizarFuncionario);
router.delete('/funcionario/deletar/:id', Funcionario.deleteFuncionario);


module.exports = router