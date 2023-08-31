import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect("mongodb://127.0.0.1/db_token");
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.log("Error: ", e.message);
    }
}

export default {connect};