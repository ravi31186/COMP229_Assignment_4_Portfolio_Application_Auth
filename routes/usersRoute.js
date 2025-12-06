import express from 'express';
import usersCtrl from '../controllers/users.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Define routes
router.get('/', auth, usersCtrl.getAllUsers);
router.get('/:id', auth, usersCtrl.getUserById);
router.post('/', usersCtrl.createUser);
router.put('/:id', usersCtrl.updateUser);
router.delete('/:id', auth, usersCtrl.deleteUserById);
router.delete('/', auth, usersCtrl.deleteAllUsers);

export default router;
