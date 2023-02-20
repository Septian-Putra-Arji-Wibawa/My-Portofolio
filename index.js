const express = require("express");
const cors = require('cors');

const app = express();

const port = 5000;

const router  = require('./src/routes/index')

app.use(express.json());  
app.use(cors());
app.use('/api/v1/', router);
app.use('/uploads', express.static('uploads'));

app.listen(port, () => console.log(`Listening on port ${port}`))