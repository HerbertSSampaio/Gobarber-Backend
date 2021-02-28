/* eslint-disable camelcase */
import { Router } from 'express';
import bodyParser from 'body-parser';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

const jsonParser = bodyParser.json();

sessionsRouter.post('/', jsonParser, async (request, response) => {
    const { email, password } = request.body;
    const authenticateUserService = container.resolve(AuthenticateUserService);

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
