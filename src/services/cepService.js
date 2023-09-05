import apiViaCep from "../configs/configs.js";
const buscarCep = async (req, cep) => {
    try {
    await apiViaCep.get("/"+cep+"/json")
      .then((response) => { return response.data})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        return err;
     });

    } catch (error) {
        console.error(error);
        return error;
    }
}


export default {
    buscarCep
}