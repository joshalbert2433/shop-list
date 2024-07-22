import { Item } from './../types/products.types';
import { create } from 'zustand'


interface ItemInfoState {
    itemInfo: Item;
    showItem: boolean,
    setItemInfo: (item: Item) => void;
    toggleShowItem: () => void
}

export const useItemInfoStore = create<ItemInfoState>((set) => ({
    itemInfo: {},
    showItem: false,
    setItemInfo: (item: Item) => set({ itemInfo: item }),
    toggleShowItem: () => set((state) => ({ showItem: !state.showItem })),
}))