import React, { useState } from 'react';
import axios from 'axios';
import "../FormPage/FormPage.css"
import { Navbar } from '../Navbar/Navbar';



const API_BASE_URL = 'http://localhost:3027';

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    genero: '',
    faixaEtaria: '',
    tamanho: '',
    epoca: '',
    entrega: {
      nome: '',
      morada: '',
      juntaFreguesia: '',
      codigoVerificacao: '',
      associacao: 'Morada'
    }
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEntregaChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      entrega: {
        ...prevState.entrega,
        [name]: value
      }
    }));
  };

  // Map frontend data to match backend schema
  const mapFormDataToOrder = () => {
    const ageGroupMapping = {
      'Bebé': 'Bebê (0-3 anos)',
      'Criança': 'Criança (4-14 anos)',
      'Adolescente': 'Jovem Adulto (14-18 anos)'
    };

    const getSizeMapping = () => {
      if (formData.faixaEtaria === 'Bebé') {
        return formData.tamanho; // Already in months format
      } else if (formData.faixaEtaria === 'Criança') {
        return formData.tamanho; // Already in years format
      } else {
        return formData.tamanho; // XS, S, M, L, XL, XXL
      }
    };

    return {
      childAgeGroup: ageGroupMapping[formData.faixaEtaria],
      season: formData.epoca,
      clothingItems: {
        upperWear: {
          size: getSizeMapping(),
          quantity: 1
        },
        lowerWear: {
          size: getSizeMapping(),
          quantity: 1
        },
        footwear: {
          size: getSizeMapping(),
          quantity: 1
        }
      },
      pickupLocation: formData.entrega.associacao === 'Morada' ? 'Porto' : formData.entrega.associacao,
      status: 'Pendente'
    };
  };

  const handleSubmit = async () => {
    try {
      const orderData = mapFormDataToOrder();
      
      // Make POST request to create order
      const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
      
      if (response.status === 201) {
        console.log('Order created successfully:', response.data);
        nextStep(); // Move to success step
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
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

      case 2:
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

      case 3:
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

      case 4:
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

      case 5:
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

      case 6:
        return (
          <div className="form-container">
            <div className="step-container success-message">
              <h2>Obrigada! Receberás um email de confirmação.</h2>
              <img src="/deitados.jpg" alt="Imagem de confirmação" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderStep()}
    </div>
  );
};

export default FormPage;
