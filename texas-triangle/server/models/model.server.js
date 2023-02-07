import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CitiesModelSchema = new Schema(
    {
        city: { type: String},
        country: { type: String},
        population: { type: Number},
        parks: { type: String},
        museums: { type: String},
        restaurants: { type: String},
        attractions: { type: String},
        zoo: { type: String},
        University: { type: String},
        Companies: { type: String},
        description: { type: String},
    },
);

const CitiesModel = mongoose.model("cities", CitiesModelSchema);

export  { CitiesModel };
