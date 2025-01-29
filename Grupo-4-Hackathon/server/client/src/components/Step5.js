import React from 'react';

const Step5 = ({ formData, handleEntregaChange, handleSubmit, prevStep }) => {
    return (
      <div className="form-container">
        <div className="step-container">
          <h2>Dados para a Entrega</h2>
          <div className="input-group">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.entrega.nome}
              onChange={handleEntregaChange}
            />
            <input
              type="text"
              name="morada"
              placeholder="Morada"
              value={formData.entrega.morada}
              onChange={handleEntregaChange}
            />
            <input
              type="text"
              name="juntaFreguesia"
              placeholder="Junta de Freguesia"
              value={formData.entrega.juntaFreguesia}
              onChange={handleEntregaChange}
            />
            <input
              type="text"
              name="codigoVerificacao"
              placeholder="Código de Verificação"
              value={formData.entrega.codigoVerificacao}
              onChange={handleEntregaChange}
            />
            
            <h3>Escolha uma Associação para Levantar</h3>
            <select
              name="associacao"
              value={formData.entrega.associacao}
              onChange={handleEntregaChange}
            >
              <option value="Morada">Prefiro que enviem para a minha morada</option>
              <option value="Porto">Porto</option>
              <option value="Lisboa">Lisboa</option>
              <option value="Sintra">Sintra</option>
              <option value="Algarve">Algarve</option>
            </select>
          </div>
          <div className="button-container">
            <button className="prev" onClick={prevStep}>Voltar</button>
            <button className="next" onClick={handleSubmit}>Submeter</button>
          </div>
        </div>
      </div>
    );
  };
export default Step5;
