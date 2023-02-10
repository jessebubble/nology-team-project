import { Cities } from "../models/model.server.js";
import { ObjectId } from "mongodb";

export const getCities = (req, res) => {
    Cities.find()
        .then((cities) => {
            res.status(200).send(cities);
        })
        .catch((error) => console.log(error));
}

export const getCitiesById = (req, res) => {
    Cities.findOne({ _id: ObjectId(req.params.id) })
        .then((city) => {
            res.status(200).send(city);
        })
        .catch((error) => console.log(error));
}   

export const addCity = (req, res) => {
    const city = new Cities(req.body);
    city.save()
        .then((city) => {
            res.status(201).send(city);
        })
        .catch((error) => console.log(error));
}