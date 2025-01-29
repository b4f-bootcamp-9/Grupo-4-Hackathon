import React from 'react';

export function ContactCard({ contact, onEdit, onDelete }) {
    return (
        <div className="contact-card">
            <div className="icon-box">
                <img 
                    src="/Icon/pin-icon.png" 
                    alt="Localização" 
                    className="Localização" 
                />
            </div>
            <div className="contact-info">
                <h3>{contact.city}</h3>
                <p>{contact.address}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
            <div className="card-actions">
                <button onClick={onEdit}>✏️ Edit</button>
                <button onClick={onDelete}>🗑️ Delete</button>
            </div>
        </div>
    );
}