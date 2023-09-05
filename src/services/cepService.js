import viaCep from "../configs/configs.js";
const buscarCep = async (req, cep) => {
    try {
    const response = await viaCep.apiViaCep.get("/"+cep+"/json");
    return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default {
    buscarCep
}