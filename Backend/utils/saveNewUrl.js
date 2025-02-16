const saveNewUrl = async (URL, req, codes,generateShortCode, max_retries) =>{
    const { url, alias } = req.body;
    const shortCode = generateShortCode()
    if(codes.includes(shortCode)){
        if(max_retries === 0){
            throw new Error("Max retries reached. No unique short code found.")
        }
        return saveNewUrl(URL, req, codes, generateShortCode, max_retries-1)
    }
    return await URL.create({ long_url: url, short_code: shortCode })
}

module.exports = {saveNewUrl};