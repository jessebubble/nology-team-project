import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    id: Number,
    city: String,
    country: String,
    population: Number,
    parks: String,
    museums: String,
    restaurants: String,
    attractions: String,
    zoo: String,
    image: String,
    university: String,
    companies: String,
    description: String,
});

const Cities = mongoose.model("cities", citySchema);

export { Cities };