const database = require('../database/conn');

class Funcionario {

    criarFuncionario(req, res) {
        const {nome, sobrenome, cargo, data_contrato} = req.body

        console.log(nome,sobrenome,cargo, data_contrato);

        const sql = 'INSERT INTO funcionarios (??,??,??,??) VALUES (?,?,?,?)'
        const data = ['nome', 'sobrenome', 'cargo', 'data_contrato', nome, sobrenome, cargo, data_contrato]

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return
            };

            res.json({message: "Funcionário(a) cadastrado(a) com sucesso"});
        })
    }

    listarFunciorarios(req, res) {
        const sql = 'SELECT * FROM funcionarios';
        database.query(sql, (error, data) => {
            if(error) {
                res.json(error)
                return
            };

            const funcionarios = data;

            res.json(funcionarios);
        })
    }

    buscarFuncionario(req, res) {
        const id = req.params.id;

        const sql = 'SELECT * FROM funcionarios WHERE ?? = ?';
        const data = ['id', id];

        database.query(sql, data, (error, data) => {
            if(error) {
                res.json(error);
                return
            }

            const funcionario = data;

            res.json(funcionario);
        })
    }

    atualizarFuncionario(req, res) {
        const {id, nome, sobrenome, cargo, data_contrato} = req.body;

        const sql = 'UPDATE funcionarios SET ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?';
        const data = ['nome', nome, 'sobrenome', sobrenome, 'cargo', cargo, 'data_contrato', data_contrato, 'id', id];

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return
            }

            res.json({message: "Funcionário(a) atualizado(a) com sucesso"});
        })
    }   

    deleteFuncionario(req, res) {
        const id = req.params.id;

        const sql = 'DELETE FROM funcionarios WHERE ?? = ?';
        const data = ['id', id];

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return;
            }

            res.json({message: 'Funcionário(a) deletado(a) com sucesso'});
        })
    }
}

module.exports = new Funcionario()