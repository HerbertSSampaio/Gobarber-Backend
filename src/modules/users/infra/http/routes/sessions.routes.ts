/* eslint-disable camelcase */
import { Router } from 'express';
import bodyParser from 'body-parser';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const jsonParser = bodyParser.json();
const sessionsController = new SessionsController();

sessionsRouter.post('/', jsonParser, sessionsController.create);

export default sessionsRouter;
