const express = require('express')
const router = express.Router();
const request = require('request')

// @route   GET api/search
// @param   query
// @desc    GET repos from github using param.query
// @access  Public
router.get('/:query', (req, res) => {
        try { 
            const options = {
                url : `https://api.github.com/search/repositories?q=${req.params.query}`,
                method: 'GET',
                headers: { 'user-agent': 'node.js'}
            };
            request(options, (error, response, body) => {
                if(error) console.error(error);

                if(response.statusCode !== 200) {
                    res.status(404).json({msg: 'NO GITHUB REPO FOUND'})
                }
                res.json(JSON.parse(body))
            })
        }
        catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error');
        }
    })

module.exports = router