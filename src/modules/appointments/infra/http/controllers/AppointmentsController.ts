import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const parsedDate = parseISO('2021-05-20 09:00:00');
        const provider_id = 'a4c8daa8-8382-47c1-9d1f-cfcfb49736e9';
        const createAppointment = container.resolve(CreateAppointmentService);

        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider_id,
            user_id,
        });

        return response.json(appointment);
    }
}
