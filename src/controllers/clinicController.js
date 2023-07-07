import clinicService from "../services/clinicService"


let createNewClinic = async (req, res) => {
    try {
        let info = await clinicService.createNewClinicService(req.body);
        return res.status(200).json(info)
    } catch (e) {
        console.log('Get all code errrrr', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllClinic = async (req, res) => {
    try {
        let info = await clinicService.getAllClinicService();
        return res.status(200).json(info)
    } catch (e) {
        console.log('Get all code errrrr', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

// let getInfoClinicById = async (req, res) => {
//     try {
//         let info = await specialtyService.getInfoClinicByIdService(req.query.id, req.query.location);
//         return res.status(200).json(info)
//     } catch (e) {
//         console.log('Get all code errrrr', e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: "Error from server"
//         })
//     }
// }

module.exports = {
    createNewClinic: createNewClinic,
    getAllClinic: getAllClinic,
    // getInfoClinicById, getInfoClinicById
}