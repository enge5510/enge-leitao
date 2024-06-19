import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

const countryOptions= [
  { code: 'US', name: 'United States', region: 'Americas', phoneCode: '+1', regions: ['East', 'West', 'South', 'North'] },
  { code: 'US', name: 'United States', region: 'Americas', phoneCode: '+1' },
  { code: 'BR', name: 'Brazil', region: 'Americas', phoneCode: '+55' },
  { code: 'IN', name: 'India', region: 'Asia', phoneCode: '+91' },
  { code: 'VE', name: 'Venezuela', region: 'Americas', phoneCode: '+58' },,
  { code: 'RS', name: 'Serbia', region: 'Europe', phoneCode: '+381' },
  { code: 'GH', name: 'Ghana', region: 'Africa', phoneCode: '+233' },
  { code: 'SN', name: 'Senegal', region: 'Africa', phoneCode: '+221' },
  { code: 'UG', name: 'Uganda', region: 'Africa', phoneCode: '+256' },
  { code: 'HR', name: 'Croatia', region: 'Europe', phoneCode: '+385' },
  { code: 'BG', name: 'Bulgaria', region: 'Europe', phoneCode: '+359' },
  { code: 'SI', name: 'Slovenia', region: 'Europe', phoneCode: '+386' },
  { code: 'BA', name: 'Bosnia and Herzegovina', region: 'Europe', phoneCode: '+387' },
  { code: 'SV', name: 'El Salvador', region: 'Americas', phoneCode: '+503' },
  { code: 'GT', name: 'Guatemala', region: 'Americas', phoneCode: '+502' },
  { code: 'KR', name: 'South Korea', region: 'Asia', phoneCode: '+82' },
  { code: 'DO', name: 'Dominican Republic', region: 'Americas', phoneCode: '+1' },
  { code: 'KW', name: 'Kuwait', region: 'Middle East', phoneCode: '+965' },
  { code: 'CZ', name: 'Czech Republic', region: 'Europe', phoneCode: '+420' },
  { code: 'HN', name: 'Honduras', region: 'Americas', phoneCode: '+504' },
  { code: 'BY', name: 'Belarus', region: 'Europe', phoneCode: '+375' },
  { code: 'CY', name: 'Cyprus', region: 'Europe', phoneCode: '+357' },
  { code: 'NZ', name: 'New Zealand', region: 'Oceania', phoneCode: '+64' },
  { code: 'EE', name: 'Estonia', region: 'Europe', phoneCode: '+372' },
  { code: 'LT', name: 'Lithuania', region: 'Europe', phoneCode: '+370' },
  { code: 'LU', name: 'Luxembourg', region: 'Europe', phoneCode: '+352' },
  { code: 'MD', name: 'Moldova', region: 'Europe', phoneCode: '+373' },
  { code: 'MT', name: 'Malta', region: 'Europe', phoneCode: '+356' },
  { code: 'MN', name: 'Mongolia', region: 'Asia', phoneCode: '+976' },
  { code: 'ME', name: 'Montenegro', region: 'Europe', phoneCode: '+382' },
  { code: 'MK', name: 'North Macedonia', region: 'Europe', phoneCode: '+389' },
  { code: 'MZ', name: 'Mozambique', region: 'Africa', phoneCode: '+258' },
  { code: 'LV', name: 'Latvia', region: 'Europe', phoneCode: '+371' },
  { code: 'KW', name: 'Kuwait', region: 'Middle East', phoneCode: '+965' },
  { code: 'HN', name: 'Honduras', region: 'Americas', phoneCode: '+504' },
  { code: 'CZ', name: 'Czech Republic', region: 'Europe', phoneCode: '+420' },
  { code: 'DO', name: 'Dominican Republic', region: 'Americas', phoneCode: '+1' },
  { code: 'KR', name: 'South Korea', region: 'Asia', phoneCode: '+82' },
  { code: 'GT', name: 'Guatemala', region: 'Americas', phoneCode: '+502' },
  { code: 'SV', name: 'El Salvador', region: 'Americas', phoneCode: '+503' },
  { code: 'BA', name: 'Bosnia and Herzegovina', region: 'Europe', phoneCode: '+387' },
  { code: 'SI', name: 'Slovenia', region: 'Europe', phoneCode: '+386' },
  { code: 'BG', name: 'Bulgaria', region: 'Europe', phoneCode: '+359' },
  { code: 'HR', name: 'Croatia', region: 'Europe', phoneCode: '+385' },
  { code: 'UG', name: 'Uganda', region: 'Africa', phoneCode: '+256' },
  { code: 'SN', name: 'Senegal', region: 'Africa', phoneCode: '+221' },
  { code: 'GH', name: 'Ghana', region: 'Africa', phoneCode: '+233' },
  { code: 'RS', name: 'Serbia', region: 'Europe', phoneCode: '+381' },
  { code: 'VE', name: 'Venezuela', region: 'Americas', phoneCode: '+58' },
];

function CheckoutPage({ selectedProducts, cartTotal}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    country: '',
    region: '',
    phoneNumber: '',
    phoneCode: '',
    state: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let validValue = value;

    if (name === 'name') {
      // Permitir apenas letras e espaços
      validValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'cardNumber' || name === 'phoneNumber' || name === 'zipCode') {
      // Permitir apenas números
      validValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'expiryDate') {
      // Permitir apenas números e '/'
      validValue = value.replace(/[^0-9/]/g, '');
    } else if (name === 'cvv') {
      // Permitir apenas números
      validValue = value.replace(/[^0-9]/g, '');
    }

    setFormData({
      ...formData,
      [name]: validValue,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { name: '', cardNumber: '', expiryDate: '', cvv: '' };

    // Validate name
    if (!formData.name) {
      formIsValid = false;
      newErrors.name = 'Nome no cartão é obrigatório.';
    }

    // Validate card number
    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      formIsValid = false;
      newErrors.cardNumber = 'Número do cartão deve ter 16 dígitos.';
    }

    // Validate expiry date
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!formData.expiryDate || !expiryRegex.test(formData.expiryDate)) {
      formIsValid = false;
      newErrors.expiryDate = 'Data de validade deve estar no formato MM/AA.';
    }

    // Validate CVV
    if (!formData.cvv || formData.cvv.length !== 3) {
      formIsValid = false;
      newErrors.cvv = 'CVV deve ter 3 dígitos.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Processando pagamento', formData);

      const paymentSuccessful = true;
      if (paymentSuccessful) {
        alert('Pagamento realizado com sucesso!');
      } else {
        alert('Falha no processamento do pagamento.');
      }
    }
  };

  const handleSetDefaultAddress = () => {
    setFormData({
      ...formData,
      address: 'Rua Exemplo, 123',
      city: 'Cidade Exemplo',
      country: 'País Exemplo',
      region: 'Região Exemplo',
      phoneNumber: '123456789',
      state: 'Estado Exemplo',
      zipCode: '12345'
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countryOptions.find(country => country.code === e.target.value);
    setFormData({
      ...formData,
      country: selectedCountry.name,
      phoneCode: selectedCountry.phoneCode
    });
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Pagamento</h2>
      {selectedProducts.length === 0 ? (
        <div className="empty-cart">
          <p>Carrinho Vazio</p>
          <Link to="/" className="back-link">
            Voltar
            <b><FontAwesomeIcon icon={faRightToBracket} /></b>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} Mzn
              </li>
            ))}
          </ul>
          <div className="total">
            <b>Total: </b> {cartTotal} Mzn
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardName">Nome no Cartão</label>
              <input
                type="text"
                id="cardName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
              <label htmlFor="cardNumber">Número do Cartão</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
            </div>
            <div>
              <label htmlFor="expiryDate">Data de Validade</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                placeholder="MM/AA"
              />
              {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
            </div>
            <div>
              <label htmlFor="cvv">CVV / CVC</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
            <div>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                required
              >
                <option value="">Selecione o país</option>
                {countryOptions.map(country => (
                  <option key={country.code} value={country.code}>{country.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="region">Região</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Selecione a região</option>
                {/* Adicione opções de regiões aqui */}
              </select>
            </div>
            <div>
              <label htmlFor="phoneNumber">Número de Telefone</label>
              <div style={{ display: 'flex' }}>
                <input
                  type="text"
                  id="phoneCode"
                  name="phoneCode"
                  value={formData.phoneCode}
                  readOnly
                  style={{ width: '60px', marginRight: '10px' }}
                />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode">Código Postal</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={handleSetDefaultAddress} className="btn-default-address">
              Colocar Endereço Padrão
            </button>
            <button type="submit" className="btn-pagar">
              Confirme o Pagamento
              <b><FontAwesomeIcon icon={faMoneyBill1} /></b>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
