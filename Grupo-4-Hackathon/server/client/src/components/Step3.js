import React from 'react';

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
      <div className="form-container">
        <div className="step-container">
          <h2>Selecione o Tamanho</h2>
          
          {formData.faixaEtaria === 'Bebé' && (
            <div className="radio-group">
              {['0-1 mês', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', 
                '12-18 meses', '18-24 meses', '24-36 meses'].map((size) => (
                <label key={size} className="radio-label">
                  <input
                    type="radio"
                    name="tamanho"
                    value={size}
                    checked={formData.tamanho === size}
                    onChange={handleChange}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
  
          {formData.faixaEtaria === 'Criança' && (
            <div className="radio-group">
              {['4-5 anos', '5-6 anos', '7-8 anos', '9-10 anos', '11-12 anos', 
                '13-14 anos'].map((size) => (
                <label key={size} className="radio-label">
                  <input
                    type="radio"
                    name="tamanho"
                    value={size}
                    checked={formData.tamanho === size}
                    onChange={handleChange}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
  
          {formData.faixaEtaria === 'Adolescente' && (
            <div className="radio-group">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <label key={size} className="radio-label">
                  <input
                    type="radio"
                    name="tamanho"
                    value={size}
                    checked={formData.tamanho === size}
                    onChange={handleChange}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
  
          <div className="button-container">
            <button className="prev" onClick={prevStep}>Voltar</button>
            <button className="next" onClick={nextStep}>Próximo</button>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Step3;