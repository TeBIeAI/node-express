const dbConfig = require('../db')

const register = async (req, res) => {
    let { name, password } = req.query
    let sqlArr = [name, password]
    let sql = `INSERT INTO users ( username, password ) VALUE ( '${name}', '${password}' );`
    let callback = (err, data) => {
        if (err) {
            res.send({
                code: 400, msg: 'add user error'
            })
        } else {
            res.send({
                code: '200',
                msg: 'add user success'
            })
        }
    }
    dbConfig.sqlConnection(sql, sqlArr, callback)
}

module.exports = {
    register
}