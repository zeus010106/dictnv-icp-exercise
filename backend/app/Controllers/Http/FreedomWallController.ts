import CreateEventValidator from 'App/Validators/CreateEventValidator';
import UpdateEventValidator from 'App/Validators/UpdateEventValidator';
import { Event, EventRequiredApproval, EventStatus, EventType } from 'Database/entities/event';
import { Guest, GuestStatus } from 'Database/entities/guest';
import { User } from 'Database/entities/user';
import { ic } from 'azle';
import { Response, Request } from 'express';

export default class FreedomWallController {
    static async create(request: Request, response: Response) {
        // const { data, success, error } = UserRegisterValidator.validate(request.body);
    }
    
  
}
