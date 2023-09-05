import cepService from "../services/cepService.js";

const buscarCep = async (req, res) => {
    try {
       const cep = req.body.cep; 
       const response = await cepService.buscarCep(req, cep);
       res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}


export default {
    buscarCep
}
