export const addToCart = (cart, item) => {
  const existing = cart.find(p => p.id === item.id);
  if (existing) {
    return cart.map(p => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
  }
  return [...cart, { ...item, quantity: 1 }];
};

export const removeFromCart = (cart, item) => {
  const existing = cart.find(p => p.id === item.id);
  if (existing.quantity === 1) {
    return cart.filter(p => p.id !== item.id);
  }
  if (existing) {
    return cart.map(p => (p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p));
  }
};
