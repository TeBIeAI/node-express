const mysql = require('mysql')

module.exports = {
    config: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'test'
    },

    sqlConnection: function (sql, sqlArr, callBack) {
        const pool = mysql.createPool(this.config)
        pool.getConnection((err, conn) => {
            if (err) {
                console.log('连接失败')
                return
            }
            conn.query(sql, sqlArr, callBack)

            conn.release()
        })
    }
}