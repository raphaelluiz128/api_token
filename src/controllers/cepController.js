import cepService from "../services/cepService";

const buscarCep = async (req, res) => {
    try {
        
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
