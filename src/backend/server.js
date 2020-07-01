const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://anshuk:0AUddGR05YtsfhU9@cluster0-joawd.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productsRouter = require('./routes/products');
const vendorRouter = require('./routes/vendor.routes');

app.use('/api',productsRouter);
app.use('/api',vendorRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});