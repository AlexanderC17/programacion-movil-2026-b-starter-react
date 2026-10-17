import express from 'express';
import cors from 'cors';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { validateProductInput } from './validation.js';
const require = createRequire(import.meta.url);
const initial = require('./data/products.json');
const app = express();
app.use(express.json());
app.use(cors());
let products = initial.map(p => ({...p}));
let nextId = Math.max(0, ...products.map(p => p.id)) + 1;

function parseId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({error:'Id inválido',details:['El id debe ser numérico']});
  req.productId = id; next();
}
function findProduct(id) { return products.find(p => p.id === id); }
app.get('/api/products', (req,res) => {
  const {search, category} = req.query;
  let result = [...products];
  if (typeof search === 'string' && search.trim()) result = result.filter(p => p.name.toLowerCase().includes(search.trim().toLowerCase()));
  if (typeof category === 'string' && category.trim()) result = result.filter(p => p.category === category);
  res.status(200).json(result);
});
app.get('/api/products/:id', parseId, (req,res) => {
  const product = findProduct(req.productId);
  if (!product) return res.status(404).json({error:'Producto no encontrado',details:['No existe un producto con ese id']});
  res.status(200).json(product);
});
app.post('/api/products', (req,res) => {
  const details = validateProductInput(req.body);
  if (details.length) return res.status(400).json({error:'Datos inválidos',details});
  const product = {id:nextId++, name:req.body.name.trim(), price:Number(req.body.price), category:req.body.category, stock:Number(req.body.stock)};
  products.push(product); res.status(201).json(product);
});
app.put('/api/products/:id', parseId, (req,res) => {
  const current = findProduct(req.productId);
  if (!current) return res.status(404).json({error:'Producto no encontrado',details:['No existe un producto con ese id']});
  const details = validateProductInput(req.body);
  if (details.length) return res.status(400).json({error:'Datos inválidos',details});
  const updated = {id:current.id,name:req.body.name.trim(),price:Number(req.body.price),category:req.body.category,stock:Number(req.body.stock)};
  products = products.map(p => p.id === current.id ? updated : p);
  res.status(200).json(updated);
});
app.delete('/api/products/:id', parseId, (req,res) => {
  const current = findProduct(req.productId);
  if (!current) return res.status(404).json({error:'Producto no encontrado',details:['No existe un producto con ese id']});
  products = products.filter(p => p.id !== current.id); res.status(204).end();
});
app.use((req,res) => res.status(404).json({error:'Ruta no encontrada',details:[`No existe la ruta ${req.method} ${req.path}`]}));
app.use((err,req,res,next) => { console.error(err); res.status(500).json({error:'Error interno del servidor',details:['Ocurrió un error inesperado']}); });
export function resetProductsForTests() { products = initial.map(p=>({...p})); nextId = Math.max(0,...products.map(p=>p.id))+1; }
export function startTestServer() { return new Promise(resolve => { const server = app.listen(0, '127.0.0.1', () => resolve(server)); }); }
const port = Number(process.env.PORT || 3000);
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) app.listen(port, () => console.log(`API disponible en http://localhost:${port}`));
export default app;
