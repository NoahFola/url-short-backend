const {URL} = require("../models/url.js")
const {generateShortCode} = require('../utils/generateShortcode.js')
const {saveNewUrl} = require('../utils/saveNewUrl.js')


const createUrl = async (req, res)=>{
    const urls = await URL.findAll({ attributes: ["short_code"] });
    const codes = urls.map(url => url.short_code)
    const response = async () => {
        try {
            return await saveNewUrl(URL, req, codes, generateShortCode, 11231999)
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    res.json(await response())

    
    // res.json({ message: "URL shortened successfully", shortUrl: `http://localhost:9090/${alias}` });
}



const redirectUser = async (req,res)=>{
    const id = req.params.id
    const urlObject = await URL.findOne({ where: { short_code: id } })
    if(!urlObject){
        return res.status(404).json({message:"Path doesn't exist"})
    }

    res.status(200).redirect(urlObject.long_url)
}

module.exports = { createUrl, redirectUser};