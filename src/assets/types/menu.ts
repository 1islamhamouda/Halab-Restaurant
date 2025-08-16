export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  isPopular: boolean;
}

export interface ButcherItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  weight: string;
}

export interface MenuItemsData {
  [key: number]: MenuItem[];
}

export interface ButcherItemsData {
  [key: number]: ButcherItem[];
}
