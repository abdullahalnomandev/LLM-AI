import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';
import { PreferenceValidation } from './preferences.validation';
import { ApiController } from './preferences.controller';



const router = express.Router();

router
    .route('/')
    .get(ApiController.getSummarize);

export const ApiRoute = router;


