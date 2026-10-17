import type {Product,ProductInput} from '../domain/product';
export const API_URL=(import.meta as any).env?.VITE_API_URL || 'http://localhost:3000';
export class ApiError extends Error { status:number; details:string[]; constructor(message:string,status:number,details:string[]=[]){super(message);this.name='ApiError';this.status=status;this.details=details;} }
async function request<T>(path:string,init?:RequestInit):Promise<T>{
 const response=await fetch(`${API_URL}${path}`,{...init,headers:{'Content-Type':'application/json',...(init?.headers||{})}});
 if(!response.ok){let body:any={};try{body=await response.json();}catch{} throw new ApiError(body.error||'Error en la solicitud',response.status,body.details||[]);}
 if(response.status===204) return undefined as T;
 return response.json();
}
export const getProducts=()=>request<Product[]>('/api/products');
export const getProduct=(id:number)=>request<Product>(`/api/products/${id}`);
export const createProduct=(input:ProductInput)=>request<Product>('/api/products',{method:'POST',body:JSON.stringify(input)});
export const updateProduct=(id:number,input:ProductInput)=>request<Product>(`/api/products/${id}`,{method:'PUT',body:JSON.stringify(input)});
export const deleteProduct=(id:number)=>request<void>(`/api/products/${id}`,{method:'DELETE'});
