const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/project1.html"));
});

router.post('/', (req, res) => {
    fs.writeFile(path.join(__dirname, `../report-files/${req.body.teamName}.json`), JSON.stringify(req.body), (err) => {
        if(err) {
            console.log(err);
        }
    });
    res.json(req.body);
});

module.exports = router;