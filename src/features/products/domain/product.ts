export type Category = 'Bebidas' | 'Snacks' | 'Aseo' | 'Hogar';
export interface Product { id:number; name:string; price:number; category:Category; stock:number; }
export interface ProductInput { name:string; price:number; category:Category; stock:number; }
export function validateProduct(input: Partial<ProductInput>): string[] {
 const errors:string[]=[];
 if(typeof input.name!=='string'||!input.name.trim()) errors.push('name es obligatorio');
 else if(input.name.trim().length>60) errors.push('name no puede superar 60 caracteres');
 if(typeof input.price!=='number'||!Number.isFinite(input.price)||input.price<=0) errors.push('price debe ser un número mayor que 0');
 if(!['Bebidas','Snacks','Aseo','Hogar'].includes(input.category as string)) errors.push('Selecciona una categoría válida');
 if(!Number.isInteger(input.stock)||Number(input.stock)<0) errors.push('stock debe ser un entero mayor o igual que 0');
 return errors;
}
export function formatCOP(price:number):string { return new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(price); }
export function toProductView(product:Product) { return {...product,priceLabel:formatCOP(product.price),stockLabel:product.stock===0?'Agotado':product.stock<5?'Pocas unidades':'Disponible'}; }
export function filterProducts(products:Product[],search:string,category:string):Product[] { return products.filter(p=>(!search||p.name.toLowerCase().includes(search.toLowerCase()))&&(category==='Todas'||p.category===category)); }
