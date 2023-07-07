import db from "../models/index"
require('dotenv').config();
import bcrypt from 'bcryptjs';

let createNewClinicService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.imageBase64
                || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            } else {
                await db.Clinic.create({
                    name: data.name,
                    image: data.imageBase64,
                    address: data.address,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                });
                resolve({
                    errCode: 0,
                    errMessage: 'ok'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllClinicService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findAll();
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = Buffer.from(item.image, 'base64').toString('binary');
                    return item;
                })
            }
            resolve({
                errMessage: 'ok',
                errCode: 0,
                data: data
            })
        } catch (e) {
            reject(e)
        }
    })
}

// let getInfoClinicByIdService = (inputId, location) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!inputId || !location) {
//                 resolve({
//                     errMessage: 'missing parameter!',
//                     errCode: 1,
//                 })
//             } else {


//                 let data = await db.Clinic.findOne({
//                     where: { id: inputId },
//                     attributes: ['descriptionHTML', 'descriptionMarkdown'],
//                 })

//                 if (data) {
//                     let doctorClinic = [];
//                     if (location == 'ALL') {
//                         doctorClinic = await db.Doctor_Info.findAll({
//                             where: { clinicId: inputId },
//                             attributes: ['doctorId', 'provinceId'],
//                         })
//                     } else {
//                         doctorClinic = await db.Doctor_Info.findAll({
//                             where: {
//                                 clinicId: inputId,
//                                 provinceId: location
//                             },
//                             attributes: ['doctorId', 'provinceId'],
//                         })
//                     }
//                     data.doctorClinic = doctorClinic
//                 } else
//                     data = {}
//                 resolve({
//                     errMessage: 'ok',
//                     errCode: 0,
//                     data: data
//                 })


//             }
//         } catch (e) {
//             reject(e)
//         }
//     })
// }
module.exports = {
    createNewClinicService: createNewClinicService,
    getAllClinicService: getAllClinicService,
    // getInfoClinicByIdService: getInfoClinicByIdService
}