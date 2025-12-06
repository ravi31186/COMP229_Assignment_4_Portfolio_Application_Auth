import express from 'express';
import contactsCtrl from '../controllers/contacts.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Define routes
router.get('/', auth, contactsCtrl.getAllContacts);
router.get('/:id', auth, contactsCtrl.getContactById);
router.post('/', contactsCtrl.createContact);
router.put('/:id', contactsCtrl.updateContact);
router.delete('/:id', auth, contactsCtrl.deleteContactById);
router.delete('/', auth, contactsCtrl.deleteAllContacts);

export default router;