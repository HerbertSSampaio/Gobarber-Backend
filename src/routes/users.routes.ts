import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import bodyParser from 'body-parser';
import { parseISO } from 'date-fns';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

const jsonParser = bodyParser.json();

usersRouter.post('/', jsonParser, async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        delete user.password;

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
