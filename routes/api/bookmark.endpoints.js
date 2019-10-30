const express = require('express')
const router = express.Router();

var dataArray = []

// @route   POST api/bookmark/add
// @desc    ADD repo to bookmarks array
// @access  Public

router.post('/add', (req, res) => {
    //find if the repository already exist in dataArray
    //check first entry
    console.log(dataArray.length)
    let count = 0

    if(dataArray.length == 0)
    {
        dataArray.push(req.body.item)
        console.log('ADD')
    }
    else{
        console.log("ELSE")
        for (var i = 0; i < dataArray.length; i++){
            if (dataArray[i].id == req.body.item.id)
            {
                count = 1
                break;
            }
            else
                continue;
        }
        console.log("COUNT "+count)
        if(count !== 0)
            console.log("bookmard already exists")
        else{
            console.log("bookmard added")
            dataArray.push(req.body.item)
        }
    }
})

// @route   GET api/bookmark/show
// @desc    Return the dataArray of Bookmark objects
// @access  Public

router.get('/show', (req, res) => {
    //send the item inside the dataArray
    res.send(JSON.stringify(dataArray))
})

// @route   GET api/delete/add
// @param   id
// @desc    remove entire array index if dataArray[].id = param.id
// @access  Public

router.get('/delete/:id', (req, res) => {
    //find index of the item to delete and delete the entire item
    function findIndex() {
        for (var i = 0; i < dataArray.length; i++){
            if (dataArray[i].id == req.params.id)
                    return i;
            else
                    continue;
        }
        return null;
    }
    var index = findIndex()
    if (index  !== null)
    {
        dataArray.splice(index,1)
        res.send("DELETE REPO ID "+req.params.id)
        console.log(dataArray.length)
    }
    else
        res.send("NO ID MATCH FOR DELETE - NOTHING HAPPENED")
})

module.exports = router