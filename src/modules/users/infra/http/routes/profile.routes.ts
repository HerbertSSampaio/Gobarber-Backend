import { Router } from 'express';
import bodyParser from 'body-parser';
import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const jsonParser = bodyParser.json();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', jsonParser, profileController.update);

export default profileRouter;
