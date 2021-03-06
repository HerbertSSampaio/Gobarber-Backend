import { Router } from 'express';
import bodyParser from 'body-parser';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const jsonParser = bodyParser.json();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', jsonParser, forgotPasswordController.create);
passwordRouter.post('/reset', jsonParser, resetPasswordController.create);

export default passwordRouter;
