import React from 'react';

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
      <div className="form-container">
        <div className="step-container">
          <h2>Selecione a Época do Ano</h2>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="epoca"
                value="Verão"
                checked={formData.epoca === 'Verão'}
                onChange={handleChange}
              />
              <span>Verão</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="epoca"
                value="Inverno"
                checked={formData.epoca === 'Inverno'}
                onChange={handleChange}
              />
              <span>Inverno</span>
            </label>
          </div>
          <div className="button-container">
            <button className="prev" onClick={prevStep}>Voltar</button>
            <button className="next" onClick={nextStep}>Próximo</button>
          </div>
        </div>
      </div>
    );
  };

export default Step4;
