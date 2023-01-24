const express = require('express')
const dbConnect = require('./utils/dbconnect');
const dotenv = require('dotenv')
const authRoute = require('./routes/authRoute')



const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))



app.use('/api/v1', authRoute);




app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
})