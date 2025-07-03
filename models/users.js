const dbPool = require("../config/database");

const getAllUsers = () => {
    // pemanggil query ke dalam database berdasarkan tabel
    const SQLQuery = 'SELECT * FROM users'

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers
}