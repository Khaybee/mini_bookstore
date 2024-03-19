const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const {router} = require('./routes/rts');
const bodyParser = require('body-parser');
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', router)
 

app.listen(port, function(){
     console.log(`server running on post ${port}`)
})