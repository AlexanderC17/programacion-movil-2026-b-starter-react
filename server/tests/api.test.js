import test from 'node:test';
import assert from 'node:assert/strict';
import {startTestServer,resetProductsForTests} from '../index.js';
let server, base;
test('API: GET inexistente responde 404', async t => {
  resetProductsForTests(); server=await startTestServer(); base=`http://127.0.0.1:${server.address().port}`;
  t.after(()=>server.close());
  const response=await fetch(`${base}/ruta-inexistente`);
  assert.equal(response.status,404); const body=await response.json(); assert.equal(body.error,'Ruta no encontrada');
});
test('API: POST inválido responde 400 con details', async t => {
  resetProductsForTests(); server=await startTestServer(); base=`http://127.0.0.1:${server.address().port}`;
  t.after(()=>server.close());
  const response=await fetch(`${base}/api/products`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'',price:-1,category:'Otro',stock:-2})});
  assert.equal(response.status,400); const body=await response.json(); assert.ok(body.details.length>=4);
});
test('API: GET de producto inexistente responde 404', async t => {
  resetProductsForTests(); server=await startTestServer(); base=`http://127.0.0.1:${server.address().port}`;
  t.after(()=>server.close());
  const response=await fetch(`${base}/api/products/99999`);
  assert.equal(response.status,404);
  const body=await response.json();
  assert.equal(body.error,'Producto no encontrado');
  assert.ok(Array.isArray(body.details));
});
test('API: DELETE exitoso responde 204 sin cuerpo', async t => {
  resetProductsForTests(); server=await startTestServer(); base=`http://127.0.0.1:${server.address().port}`;
  t.after(()=>server.close());
  const response=await fetch(`${base}/api/products/1`,{method:'DELETE'});
  assert.equal(response.status,204);
  assert.equal(await response.text(),'');
});
test('API: GET lista acepta filtro por categoría', async t => {
  resetProductsForTests(); server=await startTestServer(); base=`http://127.0.0.1:${server.address().port}`;
  t.after(()=>server.close());
  const response=await fetch(`${base}/api/products?category=Bebidas`);
  assert.equal(response.status,200);
  const body=await response.json();
  assert.ok(body.length>0);
  assert.ok(body.every(product=>product.category==='Bebidas'));
});
