const pool = require('../db');

exports.listar = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM carros')
        res.json(result.rows)
    } catch (error) {
        console.log("Deu errado mn: ", error)
        res.status(500).send('Errou')
    }
}