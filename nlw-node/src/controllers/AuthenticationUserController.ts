import { Request, Response } from 'express'
import { AuthenticationUserService } from '../services/AuthenticationUserService'

class AuthenticationUserController {
   async handle(request: Request, response: Response) {
      const { code } = request.body

      const service = new AuthenticationUserService();
      try {
         const result = await service.execute(code);
         return response.json(result);

      } catch (err) {
         return response.json(err.message)
      }

   }
}

export { AuthenticationUserController }
