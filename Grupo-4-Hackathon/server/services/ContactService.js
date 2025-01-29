const Contact = require('../data/Contact');

const initialContacts = [
    {
        city: "Porto",
        address: "Rua da Vitória, 123, Porto",
        email: "porto.location@gmail.com",
        phone: "+351 912 345 678"
    },
    {
        city: "Lisboa",
        address: "Avenida da Liberdade, 456, Lisbon",
        email: "lisbon.location@gmail.com",
        phone: "+351 911 234 567"
    },
    {
        city: "Sintra",
        address: "Rua da Praia, 789, Sintra",
        email: "sintra.location@gmail.com",
        phone: "+351 913 456 789"
    },
    {
        city: "Algarve",
        address: "Praia da Rocha, 901, Algarve",
        email: "algarve.location@gmail.com",
        phone: "+351 916 789 012"
    }
];
class ContactService {
    async createContact(contactData) {
        try {
            const contact = new Contact(contactData);
            return await contact.save();
        } catch (error) {
            throw error;
        }
    }

    async getAllContacts() {
        try {
            return await Contact.find().sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    }

    async getContactById(id) {
        try {
            return await Contact.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async updateContact(id, updateData) {
        try {
            return await Contact.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async deleteContact(id) {
        try {
            return await Contact.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ContactService();