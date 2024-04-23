
const usrData = require('../models/model.js')



const postUsr = async (req, res) => {
    try{
        const usr = await usrData.create(req.body);
        res.status(200);
        res.render('../public/templates/index.ejs')
    }
    catch (error){
      res.status(500).json({message: error.message})
    }
}



module.exports = { postUsr }

