
const usrData = require('../models/model.js')
const mailData = require('../models/mail.js')



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

const postMail = async (req, res) => {
  try{
      const usr = await mailData.create(req.body);
      res.status(200);
      res.render('../public/templates/index.ejs')
  }
  catch (error){
    res.status(500).json({message: error.message})
  }
}



module.exports = { postUsr, postMail }

