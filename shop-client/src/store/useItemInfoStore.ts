import { Item } from './../types/products.types';
import { create } from 'zustand'


interface ItemInfoState {
    itemInfo: Item;
    setItemInfo: (item: Item) => void;
}

export const useItemInfoStore = create<ItemInfoState>((set) => ({
    itemInfo: {},
    setItemInfo: (item: Item) => set({ itemInfo: item }),
}))