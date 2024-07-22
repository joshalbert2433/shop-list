import { create } from 'zustand'


interface AddItemState {
    showContainer: boolean,
    setShowContainer: (value: boolean) => void
}

export const useAddItemStore = create<AddItemState>((set) => ({
    showContainer: false,
    setShowContainer: (value) => set(() => ({ showContainer: value })),
}))