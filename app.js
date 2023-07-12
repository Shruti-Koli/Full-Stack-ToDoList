const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database')
const listRoutes = require('./routes/listRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use(listRoutes);

sequelize.sync().then((result) => {
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});