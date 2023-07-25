import pool from '../configs/connectDB';



let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');

    return res.render('index.ejs', {data: rows})
}

let getDetailPage = async (req, res) => {
    console.log(req.params)
    const [user, ] = await pool.execute(`SELECT * FROM user WHERE id = ${req.params.userId}`)
    return res.send(user)
}


module.exports = {
    getHomePage,
    getDetailPage
}





