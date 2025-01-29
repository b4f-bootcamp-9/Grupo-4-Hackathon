import React from 'react';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
      <div className="form-container">
        <div className="step-container">
          <h2>Selecione a Faixa Etária</h2>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="faixaEtaria"
                value="Bebé"
                checked={formData.faixaEtaria === 'Bebé'}
                onChange={handleChange}
              />
              <span>Bebé</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="faixaEtaria"
                value="Criança"
                checked={formData.faixaEtaria === 'Criança'}
                onChange={handleChange}
              />
              <span>Criança</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="faixaEtaria"
                value="Adolescente"
                checked={formData.faixaEtaria === 'Adolescente'}
                onChange={handleChange}
              />
              <span>Adolescente</span>
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

export default Step2;
