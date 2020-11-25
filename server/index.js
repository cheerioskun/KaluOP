import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'
import orderRouter from './routes/orders.js';

const app = express();
app.use('/orders', orderRouter);
app.use(bodyParser.json({ limit: "10mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://hpandey110301:thisIsKindaCool@cluster0.dyzwb.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
        .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);