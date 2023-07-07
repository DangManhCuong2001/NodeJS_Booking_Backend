import specialtyService from "../services/specialtyService"


let createNewSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.createNewSpecialtyService(req.body);
        return res.status(200).json(info)
    } catch (e) {
        console.log('Get all code errrrr', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.getAllSpecialtyService();
        return res.status(200).json(info)
    } catch (e) {
        console.log('Get all code errrrr', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getInfoSpecialtyById = async (req, res) => {
    try {
        let info = await specialtyService.getInfoSpecialtyByIdService(req.query.id, req.query.location);
        return res.status(200).json(info)
    } catch (e) {
        console.log('Get all code errrrr', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
    getInfoSpecialtyById, getInfoSpecialtyById
}