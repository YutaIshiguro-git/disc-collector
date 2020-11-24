const express = require('express')
const app = express();
const { Router } = require('express');
const routes = Router();
import { DiscInfo } from './entity/Disc'
import { createConnection } from 'typeorm'

const setupExpressServer = async () => {
    const newCreateConnection = await createConnection();
    app.use(express.json()); //受け取ったリクエストのbodyをjasonに変換する
    app.get(`/`, (req, res) =>{
        return res.json({message: "CCJ3 Solo API"})
    });
    
    app.get(`/disc`, async (req, res) =>{
        const result = await newCreateConnection.getRepository(DiscInfo).find();
        return res.json(result);
    });    

    app.post("/newdisc", async (req, res) => {
        ///api/pokemon/pikachu → push
    
        const newDisc = req.body;
        const result = await newCreateConnection.getRepository(DiscInfo).find();
        result.push(newDisc);
    });

    app.patch("/disc/:idOrName", async (req, res) => {
        const indexOrKey = Number(req.params.idOrName);
        const result = await newCreateConnection.getRepository(DiscInfo).find();
        if (indexOrKey >= 0 && indexOrKey < result.length) {
            const newDisc = req.body;
            result.splice(indexOrKey - 1, 1, newDisc);
            res.send(result);
        } else {
            let discName = req.params.idOrName;
            for (let i = 0; i < result.length; i++) {
            if (result[i].artist === discName) {
                const newDisc = req.body;
                result.splice(i, 1, newDisc);
                res.send(result);
            }
            }
        }
        });

    app.delete("/disc/:idOrName", async (req, res) => {
    const indexOrKey = Number(req.params.idOrName);
    const result = await newCreateConnection.getRepository(DiscInfo).find();
    if (indexOrKey >= 0 && indexOrKey < result.length) {
        result.splice(indexOrKey - 1, 1);
        res.send(result);
    } else {
        let artistName = req.params.artist;
        let discName = req.params.disc;
        for (let i = 0; i < result.length; i++) {
        if (result[i].artist === artistName) {
            result.splice(i, 1);
            res.send(result);
        } else if (result[i].disc === discName) {
            result.splice(i, 1);
            res.send(result);
        }
        }
    }
    });

    return app;
    
};

module.exports = { setupExpressServer };

