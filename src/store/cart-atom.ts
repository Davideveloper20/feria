import { atom } from 'jotai';

interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    reference: string;
    size: string;
  }

export const cartAtom = atom<Product[]>([]);
