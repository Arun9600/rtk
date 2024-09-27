export interface productsListDatas {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}
export interface productsSliceInitialState {
  datas: [] | null;
  loading: boolean;
  error: string;
}
export interface productsCatergoriesSliceInitialState {
  datas: [] | null;
  loading: boolean;
  error: string;
}
export interface limitResultsSliceInitialState {
  datas: [] | null;
  loading: boolean;
  error: string;
}
export interface productsDetailsSliceInitialSlice {
  datas: {} | null;
  loading: boolean;
  error: string;
}
export interface productsDetailData {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: {
    count?: number | null;
    rate?: number | null;
  };
}

export interface cartSliceInitialState {
  datas: [] | null;
}

export interface CartData {
  id: number;
  title: string;
  price: string | number;
  image: string;
  qty?: number | undefined;
}

export interface limitResult {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
