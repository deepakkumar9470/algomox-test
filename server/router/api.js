import express from 'express'

const router = express.Router()

import fs from 'fs'


// @ /api/getAirline

router.get('/air', (req,res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        
        const ariData = JSON.parse(data)
        res.send(ariData);
      });
    
})


// @ code=CLT&filename=airlines.json
router.get('/getAirline', (req,res) =>{
  // console.log(req.body.query)
  res.send('by query')
})


// /api/items
router.get('/items',  (req,res) =>{
    // example array of 150 items to be paged
    const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

    // get page from query params or default to first page
    const page = parseInt(req.query.page) || 1;

    // get pager object for specified page
    const pageSize = 10;
    const pager = paginate(items.length, page, pageSize);

    // get page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // return pager object and current page of items
    return res.json({ pager, pageOfItems });
})


export default router