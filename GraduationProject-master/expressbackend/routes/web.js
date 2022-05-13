import  express from "express";
import PharmController from '../controllers/pharmController.js';
import ClinicController from '../controllers/clinicController.js';
import CityController from '../controllers/cityController.js';
import StoreController from "../controllers/storeController.js";
import gameController from "../controllers/gameController.js";
import userController from "../controllers/userController.js";
//import userUpdate from "../controllers/userUpdate.js";

// import PharmController from "../controllers/pharmController.js";
const router=express.Router();
router.get('/pharm',PharmController.getAllDoc)
router.get('/clinic',ClinicController.getAllDoc)
router.get('/city',CityController.getAllDoc)
router.get('/store',StoreController.getAllDoc)
router.get('/game',gameController.getAllDoc)
router.get('/user',userController.getAllDoc)
router.get('/user',userController.getAllDoc)
//router.post('/user', userUpdate.addNew)
export default router

