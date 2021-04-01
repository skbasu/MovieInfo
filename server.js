import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import trendingRoute from './routes/trendingRoute.js';
import topratedRoute from './routes/topratedRoute.js';
import actionRoute from './routes/actionRoute.js';
import comedyRoute from './routes/comedyRoute.js';
import romanceRoute from './routes/romanceRoute.js';
import seriesRoute from './routes/seriesRoute.js';
import bannerRoute from './routes/bannerRoute.js';

//Initialize app
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT =  process.env.PORT || 9000;

//Testing Endpoint
app.get('/', (req, res) => {
    res.status(200).send("Working Fine...");
});

//API Endpoints
app.use('/trending', trendingRoute);
app.use('/top-rated', topratedRoute);
app.use('/action', actionRoute);
app.use('/comedy', comedyRoute);
app.use('/romance', romanceRoute);
app.use('/series', seriesRoute);
app.use('/banner', bannerRoute);

//DB Config
mongoose.connect(process.env.mongo_url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once("open", () => {
    console.log("MongoDb Connected...");
});

//Server listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

