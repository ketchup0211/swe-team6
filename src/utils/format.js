export const formatPrice = (price) => {
  return `${price.toLocaleString()}원`;
};

export const calculatePricePerPerson = (totalPrice, personCount = 3) => {
  const pricePerPerson = Math.floor(totalPrice / personCount);
  return formatPrice(pricePerPerson);
};

export const calculateDiscountPercent = (originalPrice, discountedPrice) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};
