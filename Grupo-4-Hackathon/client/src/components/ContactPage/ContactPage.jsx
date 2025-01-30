import React, { useState, useEffect } from "react";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";
import { LoadingSpinner } from "./LoadingSpinner";
import "./Contact.css";
import { Navbar } from '../Navbar/Navbar';

export function ContactPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingContact, setEditingContact] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        fetchContacts();
    }, [retryCount]);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3027/contacts');
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data = await response.json();
            setContacts(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setRetryCount(prev => prev + 1);
    };

    const handleCreate = async (contactData) => {
        try {
            const response = await fetch('http://localhost:3027/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });
            if (!response.ok) {
                throw new Error('Failed to create contact');
            }
            await fetchContacts();
            setShowForm(false);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleUpdate = async (id, contactData) => {
        try {
            const response = await fetch(`http://localhost:3027/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });
            if (!response.ok) {
                throw new Error('Failed to update contact');
            }
            await fetchContacts();
            setEditingContact(null);
            setShowForm(false);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                const response = await fetch(`http://localhost:3027/contacts/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Failed to delete contact');
                }
                await fetchContacts();
            } catch (err) {
                setError(err.message);
            }
        }
    };

    return (
        
        <div className="main-container">
              <Navbar />
            <div className="controls">
                <button 
                    className="refresh-button"
                    onClick={handleRetry}
                    disabled={loading}
                >
                    🔄 Refresh
                </button>
                <button 
                    className="add-button"
                    onClick={() => {
                        setEditingContact(null);
                        setShowForm(true);
                    }}
                >
                    ➕ Add Contact
                </button>
            </div>

            {error && (
                <div className="error-message">
                    <p>Error: {error}</p>
                    <button onClick={handleRetry}>Try Again</button>
                </div>
            )}

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="cards-container">
                    {contacts.map((contact) => (
                        <ContactCard
                            key={contact._id}
                            contact={contact}
                            onEdit={() => {
                                setEditingContact(contact);
                                setShowForm(true);
                            }}
                            onDelete={() => handleDelete(contact._id)}
                        />
                    ))}
                </div>
            )}

            {showForm && (
                <ContactForm
                    initialData={editingContact}
                    onSubmit={editingContact ? handleUpdate : handleCreate}
                    onClose={() => {
                        setShowForm(false);
                        setEditingContact(null);
                    }}
                />
            )}
        </div>
    );
}

export default ContactPage;