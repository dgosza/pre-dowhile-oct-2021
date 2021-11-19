import { Request, Response } from 'express';
import { LastMessagesService } from '../services/LastMessagesService';

class LastMessageController {
   async handle(request: Request, response: Response) {
      const service = new LastMessagesService();
      const result = await service.execute();
      return response.json(result);
   }
}

export { LastMessageController };
