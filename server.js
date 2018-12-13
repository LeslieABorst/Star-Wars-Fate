const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();
// proxy
router.get('/*', (req, res) => {
    const url = req.path.substring(1);
    const method = req.method.toLowerCase();
    axios.get(url).then(result =>  {
        res.status(result.status).send(result.data)
    })
})

app.use(express.json());
app.use('/', express.static('public'));
app.use('/proxy', router);




app.listen(port, () => console.log(`listening on port ${port}`));