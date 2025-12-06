import Contacts from '../models/contacts.js';

// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET Contact by id
const getContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contacts.findById(id);

        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }

        res.json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create new contact
const createContact = async (req, res) => {
 try {

  const newContact = new Contacts(req.body);

  const savedcontact = await newContact.save();

  res.status(201).json(savedcontact);

 } catch (err) {
  res.status(400).json({ error: err.message });
 }
};

// Update Contact
const updateContact = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedContact = await Contacts.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } 
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found'});
        }

        res.json(updatedContact);
    } catch (err) {
        res.status(400).json( { error: err.message });
    }
};

//Delete contact by id
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const deteleContact = await Contacts.findByIdAndDelete(id);

        if (!deteleContact) {
        return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(deteleContact);
    } catch (err) {
        res.status(400).json( { error: err.message });
    }
};

//Delete all contacts
const deleteAllContacts = async (req, res) => {
    try {
        const deteleAllContacts = await Contacts.deleteMany({});

        res.json(deteleAllContacts);
    } catch (err) {
        res.status(400).json( { error: err.message });
    }
};

export default { getAllContacts, getContactById, createContact, updateContact, deleteContactById, deleteAllContacts }