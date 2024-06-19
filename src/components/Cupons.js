import React from 'react';

const generateCoupons = (currency, count) => {
  const coupons = [];
  const currencySymbol = {
    dollar: '$',
    rand: 'R',
    euro: '€',
    mzn: 'MT',
    yuan: '¥'
  };

  for (let i = 1; i <= count; i++) {
    coupons.push({
      id: i,
      currency: currency,
      title: `Desconto de ${i}${currencySymbol[currency]}`,
      code: `DESCONTO${i}`,
      validity: '31/12/2024',
    });
  }
  return coupons;
};

const Coupons = () => {
  const currencies = ['dollar', 'rand', 'euro', 'mzn', 'yuan'];
  const allCoupons = currencies.reduce((acc, curr) => {
    return [...acc, ...generateCoupons(curr, 20)];
  }, []);

  return (
    <div className="coupons">
      <h1>Cupons de<span> Desconto</span>
      </h1>
      <div className="coupon-list">
        {allCoupons.map(coupon => (
          <div key={coupon.id} className="coupon">
            <h2>{coupon.title}</h2>
            <p>Use o código: {coupon.code}</p>
            <p>Válido até: {coupon.validity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
