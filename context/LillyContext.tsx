'use client';

import {
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  createContext,
} from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  productDetails: {
    material: string;
    fit: string;
    care: string[];
    durability: string;
  };
  isNew?: boolean;
  size: string[];
}

export interface LillyItem extends Product {
  quantity: number;
}

interface LillyState {
  items: LillyItem[];
  total: number;
}

type LillyAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

interface LillyContextType {
  state: LillyState;
  dispatch: Dispatch<LillyAction>;

  products: Product[];
  setProducts: (p: Product[]) => void;

  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredProducts: Product[];
}

const LillyContext = createContext<LillyContextType | null>(null);

function cartReducer(state: LillyState, action: LillyAction): LillyState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...action.product, quantity: 1 }];

      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.productId
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.productId
            ? { ...item, quantity: Math.max(0, action.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
}

export function LillyProvider({ children }: { children: ReactNode }) {
  const initialState: LillyState =
    typeof window !== 'undefined'
      ? JSON.parse(
          localStorage.getItem('lillyState') || '{"items":[],"total":0}'
        )
      : { items: [], total: 0 };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lillyState', JSON.stringify(state));
    }
  }, [state]);

  return (
    <LillyContext.Provider
      value={{
        state,
        dispatch,
        products,
        setProducts,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </LillyContext.Provider>
  );
}

export function useLilly() {
  const context = useContext(LillyContext);
  if (!context) {
    throw new Error('useLilly must be used within LillyProvider');
  }
  return context;
}