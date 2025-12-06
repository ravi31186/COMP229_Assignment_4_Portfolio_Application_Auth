import express from 'express';
import contactsCtrl from '../controllers/contacts.controller.js';

const router = express.Router();

// Define routes
router.get('/', contactsCtrl.getAllContacts);
router.get('/:id', contactsCtrl.getContactById);
router.post('/', contactsCtrl.createContact);
router.put('/:id', contactsCtrl.updateContact);
router.delete('/:id', contactsCtrl.deleteContactById);
router.delete('/', contactsCtrl.deleteAllContacts);

export default router;