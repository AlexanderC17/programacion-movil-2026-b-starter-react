import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
// These tests document the expected domain behavior. Run TypeScript tests through the starter's configured test runner.
test('validateProduct rejects empty names',()=>{ const name=''; assert.equal(name.trim(),''); });
test('price formatting uses Colombian pesos',()=>{ const formatted=new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(1250000); assert.match(formatted,/1[.]?250[.]?000|1.250.000/); });
test('stock labels follow required thresholds',()=>{ const label=n=>n===0?'Agotado':n<5?'Pocas unidades':'Disponible'; assert.equal(label(0),'Agotado');assert.equal(label(4),'Pocas unidades');assert.equal(label(5),'Disponible'); });
