const categories = ['Bebidas','Snacks','Aseo','Hogar'];
export function validateProductInput(input) {
  const details = [];
  if (!input || typeof input !== 'object' || Array.isArray(input)) return ['El cuerpo debe ser un objeto'];
  if (typeof input.name !== 'string' || input.name.trim() === '') details.push('name es obligatorio');
  else if (input.name.trim().length > 60) details.push('name no puede superar 60 caracteres');
  if (typeof input.price !== 'number' || !Number.isFinite(input.price) || input.price <= 0) details.push('price debe ser un número mayor que 0');
  if (typeof input.category !== 'string' || !categories.includes(input.category)) details.push('category debe ser Bebidas, Snacks, Aseo u Hogar');
  if (!Number.isInteger(input.stock) || input.stock < 0) details.push('stock debe ser un entero mayor o igual que 0');
  return details;
}
