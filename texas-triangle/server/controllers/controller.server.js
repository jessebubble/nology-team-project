import { CitiesModel } from "../models/model.server.js";

export const getCities = (req, res) => {
    CitiesModel.find()
        .then((cities) => {
            res.status(200).send(cities);
        })
        .catch((error) => console.log(error));
};

export const getCitiesById = (req, res) => {
    CitiesModel.findById(req.params.id)
        .then((cities) => {
            res.status(200).send(cities || `No Texas Triangle data with id ${req.params.id} found`);
        })
        .catch((error) => console.log(error));
}

export const addCity = (req, res) => {
    const newCity = new CitiesModel(req.body);
    newCity.save()
        .then((city) => {
            res.status(201).send(city);
        })
        .catch((error) => console.log(error));
}