export function realPrice(price, discountPercentage) {
  return Math.floor((price * (100 - discountPercentage)) / 100);
}
