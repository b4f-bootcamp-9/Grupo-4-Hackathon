import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
      <div className="form-container">
        <div className="step-container">
          <h2 className='text-box-one'>Selecione o Gênero</h2>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="genero"
                value="Menina"
                checked={formData.genero === 'Menina'}
                onChange={handleChange}
              />
              <span>Menina</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="genero"
                value="Menino"
                checked={formData.genero === 'Menino'}
                onChange={handleChange}
              />
              <span>Menino</span>
            </label>
          </div>
          <div className="button-container">
            <button className="next" onClick={nextStep}>Próximo</button>
          </div>
        </div>
      </div>
    );
  };

export default Step1;
