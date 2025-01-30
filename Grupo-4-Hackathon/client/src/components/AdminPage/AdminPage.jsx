import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPage.css"; 
import { Navbar } from '../Navbar/Navbar';

const API_BASE_URL = "http://localhost:3027";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.patch(`${API_BASE_URL}/orders/${orderId}`, { status: newStatus });
      fetchOrders();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  return (
    
    <div className="admin-container"><Navbar />
      <h2>Lista de Pedidos</h2>
      <div className="admin-orders">
        {orders.map((order) => (
          <div key={order._id} className="admin-order-card">
            <p>Faixa Etária: {order.childAgeGroup}</p>
            <p>Tipo de Roupa: {order.season}</p>
            <p>Ponto de Recolha: {order.pickupLocation}</p>
            <p>Status: {order.status}</p>
            <div className="admin-actions">
              {order.status === "Pendente" && (
                <>
                  <button className="accept" onClick={() => updateOrderStatus(order._id, "Aceito")}>
                    Aceitar
                  </button>
                  <button className="archive" onClick={() => updateOrderStatus(order._id, "Arquivado")}>
                    Arquivar
                  </button>
                </>
              )}
              {order.status === "Aceito" && (
                <button className="archive" onClick={() => updateOrderStatus(order._id, "Arquivado")}>
                  Arquivar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;