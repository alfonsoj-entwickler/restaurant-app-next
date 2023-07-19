const formatMoney = quantity => {
    return quantity.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
};

export {
    formatMoney
}