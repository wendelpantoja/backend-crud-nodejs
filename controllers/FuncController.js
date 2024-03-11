const database = require('../database/conn');

class Product {

    createProduct(req, res) {
        const {name, category, brand, stock, price} = req.body

        console.log(name, category, brand, stock, price);

        const sql = 'INSERT INTO product (??,??,??,??,??) VALUES (?,?,?,?,?)'
        const data = ['name', 'category', 'brand', 'stock', 'price', name, category, brand, stock, price]

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return
            };

            res.json({message: "Produto criado(a) com sucesso"});
        })
    }

    listProducts(req, res) {
        const sql = 'SELECT * FROM product';
        database.query(sql, (error, data) => {
            if(error) {
                res.json(error)
                return
            };

            const products = data;

            res.json(products);
        })
    }

    searchProduct(req, res) {
        const id = req.params.id;

        const sql = 'SELECT * FROM product WHERE ?? = ?';
        const data = ['id', id];

        database.query(sql, data, (error, data) => {
            if(error) {
                res.json(error);
                return
            }

            const product = data;

            res.json(product);
        })
    }

    updateProduct(req, res) {
        const {id, name, category, brand, stock, price} = req.body;

        const sql = 'UPDATE product SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?';
        const data = ['name', name, 'category', category, 'brand', brand, 'stock', stock, 'price', price, 'id', id];

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return
            }

            res.json({message: "Produto atualizado com sucesso"});
        })
    }   

    deleteProduct(req, res) {
        const id = req.params.id;

        const sql = 'DELETE FROM product WHERE ?? = ?';
        const data = ['id', id];

        database.query(sql, data, (error) => {
            if(error) {
                res.json(error);
                return;
            }

            res.json({message: "Produto deletado com sucesso"});
        })
    }
}

module.exports = new Product()