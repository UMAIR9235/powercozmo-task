export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
