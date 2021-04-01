import express from 'express';
import romanceModel from '../models/romanceModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    await romanceModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.status(200).send(result);
    });
});

router.post('/insert', async (req, res) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const description = req.body.description;
    const trailerId = req.body.trailerId;
    const production  = req.body.production;
    const release = req.body.release;
    const director = req.body.director;
    const producer = req.body.producer;
    const cast = req.body.cast;
    const viewAt = req.body.viewAt;

    const movie = new romanceModel({
        title : title,
        imgUrl : imgUrl,
        description : description,
        trailerId : trailerId,
        production : production,
        release : release,
        director : director,
        producer : producer,
        cast : cast,
        viewAt : viewAt,
    });
    try {
        await movie.save();
        res.status(201).send("Movie Inserted");
    }
    catch(err){
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    await romanceModel.findById(id, (err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});

export default router;