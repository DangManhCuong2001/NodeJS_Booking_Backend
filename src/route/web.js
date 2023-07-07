import express from "express";
import homecontroller from "../controllers/homecontroller";
import usercontroller from "../controllers/usercontroller"
import DoctorController from "../controllers/DoctorController"

import patientController from '../controllers/patientController'
import specialtyController from '../controllers/specialtyController'
import clinicController from '../controllers/clinicController'



let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homecontroller.getHomepage);
    router.get('/crud', homecontroller.getCRUD);
    router.post('/post-crud', homecontroller.getpostCRUD);
    router.get('/get-crud', homecontroller.displaygetCRUD);
    router.get('/edit-crud', homecontroller.geteditCRUD);
    router.post('/put-crud', homecontroller.getputCRUD);
    router.get('/delete-crud', homecontroller.getdeleteCRUD);


    router.post('/api/login', usercontroller.handeLogin);
    router.get('/api/get-all-users', usercontroller.handleGetAllUsers);
    router.post('/api/create-new-user', usercontroller.handleCreateNewUsers);
    router.put('/api/edit-user', usercontroller.handleEditUser);
    router.delete('/api/delete-user', usercontroller.handleDeleteUser);

    router.get('/api/top-doctor-home', DoctorController.getTopDoctor);
    router.get('/api/get-all-doctors', DoctorController.handleGetAllDoctors);
    router.post('/api/save-info-doctors', DoctorController.saveInfoDoctors);
    router.get('/api/get-info-doctors', DoctorController.getInfoDoctors);
    router.post('/api/bulk-create-schedule', DoctorController.bulkCreateSchedule);
    router.get('/api/get-schedule-doctors', DoctorController.getScheduleDoctors);
    router.get('/api/get-extra-info-doctors', DoctorController.getExtraInfoDoctors);
    router.get('/api/get-profile-doctors', DoctorController.getProfileDoctors);
    router.post('/api/bulk-book-schedule', patientController.bulkBookSchedule);

    router.post('/api/create-new-specialty', specialtyController.createNewSpecialty);
    router.get('/api/get-all-specialty', specialtyController.getAllSpecialty);
    router.get('/api/get-info-specialty-by-id', specialtyController.getInfoSpecialtyById);

    router.post('/api/create-new-clinic', clinicController.createNewClinic);
    router.get('/api/get-all-clinic', clinicController.getAllClinic);
    // router.get('/api/get-info-clinic-by-id', clinicController.getInfoClinicById);

    router.get('/api/allcode', usercontroller.handleGetAllCode);

    return app.use("/", router)

}

module.exports = initWebRoutes;