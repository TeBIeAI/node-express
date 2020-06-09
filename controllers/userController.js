const dbConfig = require('../db')

const getUsers = (req, res) => {
    console.log('user');
    let sqlArr = []
    let sql = `select * from users`
    let callback = (err, data) => {
        if (err) {
            res.send({
                code: 400, msg: 'add user error'
            })
        } else {
            res.send({
                code: '200',
                msg: 'success',
                data: data
            })
        }
    }
    dbConfig.sqlConnection(sql, sqlArr, callback)
}

module.exports = {
    getUsers
}