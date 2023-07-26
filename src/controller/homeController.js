import { findRelativeConfig } from '@babel/core/lib/config/files';
import pool from '../configs/connectDB';



const getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');

    return res.render('index.ejs', {data: rows})
}

const getDetailPage = async (req, res) => {
    console.log(req.params)
    const [user, ] = await pool.execute(`SELECT * FROM user WHERE id = ${req.params.userId}`)
    return res.send(user)
}

const createNewUser = async (req, res) => {
    console.log(req.body)
    await pool.execute(`insert into user(firstName, lastName, email, address) values(?,?,?,?)`,
                        [req.body.firstName, req.body.lastName, req.body.email, req.body.address]);
    return res.redirect('/');
}

const deleteUser = async (req, res) => {
    await pool.execute(`DELETE FROM user WHERE id=${req.body.userId}`);
    return res.redirect('/');
}

const getEditUser = async (req, res) => {
    const [user, ] = await pool.execute(`SELECT * FROM user WHERE id=${req.params.id}`);
    return res.render('updateUser.ejs', {dataUser: user[0]});
}

const updateUser = async (req, res) => {
    const { id, firstName, lastName, email, address } = req.body
    await pool.execute(`UPDATE user SET firstName=?, lastName = ?, email=?, address=? WHERE id=?`,
                        [firstName, lastName, email, address, id]);

    return res.redirect('/');
}


module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditUser,
    updateUser,
}





