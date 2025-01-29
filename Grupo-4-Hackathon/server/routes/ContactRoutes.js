const express = require('express');
const router = express.Router();
const ContactService = require('../services/ContactService');

// Create a new contact
router.post('/', async (req, res) => {
    try {
        const contact = await ContactService.createContact(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await ContactService.getAllContacts();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await ContactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update contact
router.put('/:id', async (req, res) => {
    try {
        const contact = await ContactService.updateContact(req.params.id, req.body);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete contact
router.delete('/:id', async (req, res) => {
    try {
        const contact = await ContactService.deleteContact(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;