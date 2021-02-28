/* eslint-disable camelcase */
import { Router } from 'express';
import bodyParser from 'body-parser';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

const jsonParser = bodyParser.json();

sessionsRouter.post('/', jsonParser, async (request, response) => {
    const { email, password } = request.body;
    const usersRepository = new UsersRepository();
    const authenticateUserService = new AuthenticateUserService(
        usersRepository,
    );

    const { user, token } = await authenticateUserService.execute({
        email,
        password,
    });

    const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
    };

    return response.json({ userWithoutPassword, token });
});

export default sessionsRouter;
