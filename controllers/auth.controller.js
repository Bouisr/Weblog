const UserModel = require('../models/user.model.js');
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {firstname, lastname, pseudo, email, password} = req.body

    try{
        const user = await UserModel.create({firstname, lastname, pseudo, email, password});
        res.status(201).json({user: user._id});
    }
    catch(err){
        res.status(200).send({err})
    }
}