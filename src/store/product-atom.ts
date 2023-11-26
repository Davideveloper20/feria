import { atom } from 'jotai';

interface Product {
  _id: string;
  title: string;
  image: string;
  price: string;
  reference: string;
  size: string;
}

export const productAtom = atom<Product[] | null>(null);
