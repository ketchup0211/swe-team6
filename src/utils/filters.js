import { PRICE_FILTER_RANGES, PRICE_FILTERS } from '../constants/products';

export const filterBySearchTerm = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(lowerSearchTerm)
  );
};

export const filterByPriceRange = (products, priceFilter) => {
  if (priceFilter === PRICE_FILTERS.ALL) return products;
  
  const range = PRICE_FILTER_RANGES[priceFilter];
  if (!range) return products;
  
  return products.filter(
    (product) => product.price >= range.min && product.price < range.max
  );
};

export const filterProducts = (products, searchTerm, priceFilter) => {
  let filtered = filterBySearchTerm(products, searchTerm);
  filtered = filterByPriceRange(filtered, priceFilter);
  return filtered;
};
