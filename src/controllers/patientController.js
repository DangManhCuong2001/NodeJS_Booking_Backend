import patientService from "../services/patientService"


let bulkBookSchedule = async (req, res) => {
    try {
        let info = await patientService.bulkBookScheduleServices(req.body);
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
    bulkBookSchedule: bulkBookSchedule
}

