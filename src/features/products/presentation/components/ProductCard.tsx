import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import type { Product } from '../../domain/product';
import { toProductView } from '../../domain/product';

interface ProductCardProps {
  product: Product;
  onOpen: (id: number) => void;
}

export default function ProductCard({ product, onOpen }: ProductCardProps) {
  const view = toProductView(product);
  return (
    <IonCard className="product">
      <IonCardHeader><IonCardTitle>{product.name}</IonCardTitle></IonCardHeader>
      <IonCardContent>
        <p>{product.category}</p>
        <strong>{view.priceLabel}</strong>
        <p>Existencias: {product.stock} — {view.stockLabel}</p>
        <IonButton onClick={() => onOpen(product.id)}>Ver detalle</IonButton>
      </IonCardContent>
    </IonCard>
  );
}
