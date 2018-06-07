import { Category } from './category';

export interface SaveItem {
  id?: number;
  name: string;
  price: number;
  categoryId: number;
}
