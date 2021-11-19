import { Router } from 'express';
import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { LastMessageController } from './controllers/LastMessageController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticationUserController().handle);
router.post(
   '/messages',
   ensureAuthenticated,
   new CreateMessageController().handle,
);
router.get('/lastMessages', new LastMessageController().handle);
router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
