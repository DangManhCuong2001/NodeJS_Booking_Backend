import db from "../models/index"
require('dotenv').config();

let bulkBookScheduleServices = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data || !data.doctorId || !data.timeType || !data.date) {
                resolve({
                    errCode: 1,
                    errMessage: 'missing parameter'
                })
            } else {
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        role: 'R3'
                    }
                })
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientID: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }
                    })
                }
                resolve({
                    errCode: 0,
                    errMessage: 'Save success'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    bulkBookScheduleServices: bulkBookScheduleServices
}