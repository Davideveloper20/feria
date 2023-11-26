export interface Product {
    _id: string;
    title: string;
    image: string;
    price: string;
    reference: string;
    size: string;
    color:string;
  }
  
  export interface ProductListProps {
    title: string;
    products: Product[];
  }

