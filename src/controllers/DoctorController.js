import doctorService from "../services/doctorService"

let getTopDoctor = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await doctorService.getTopDoctorHome(+limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}


let handleGetAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorService.getAllDoctors()
        return res.status(200).json(doctors)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let saveInfoDoctors = async (req, res) => {
    try {
        let response = await doctorService.saveInfoDoctorsService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getInfoDoctors = async (req, res) => {
    try {
        let info = await doctorService.getInfoDoctorService(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let bulkCreateSchedule = async (req, res) => {
    try {
        let info = await doctorService.bulkCreateScheduleServices(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getScheduleDoctors = async (req, res) => {
    try {
        let info = await doctorService.getScheduleDoctorsServices(req.query.doctorId, req.query.date);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getExtraInfoDoctors = async (req, res) => {
    try {
        let info = await doctorService.getExtraInfoDoctorsServices(req.query.doctorId);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getProfileDoctors = async (req, res) => {
    try {
        let info = await doctorService.getProfileDoctorsServices(req.query.doctorId);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    getTopDoctor: getTopDoctor,
    handleGetAllDoctors: handleGetAllDoctors,
    saveInfoDoctors: saveInfoDoctors,
    getInfoDoctors: getInfoDoctors,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleDoctors: getScheduleDoctors,
    getExtraInfoDoctors: getExtraInfoDoctors,
    getProfileDoctors: getProfileDoctors
}