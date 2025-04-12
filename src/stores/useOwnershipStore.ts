import { create } from "zustand";
import { ownershipService } from "../services/ownershipService";
import { Ownership } from "../entities/ownership";

interface OwnershipStore{
    loading: boolean,
    erro: string | null
    prevPage: number|null,
    lastPage: number|null,
    ownership: Ownership[],
    findAll: () => void
}

export const useOwnershipStore = create<OwnershipStore>((set)=>({
    loading: false,
    erro: null,
    prevPage: null,
    lastPage: null,
    ownership: [],
    findAll: async () => {
        try {
            set({loading: true})
            const service = ownershipService();
            const { data, status } = await service.findAll();
            set({
                ownership: data.data,
                lastPage: data.last_page,
                prevPage: data.prev_page_url ? data.current_page - 1 : null,
                loading: false,
                erro: null
            })
        } catch (error) {
            if (error instanceof Error) {
                set({erro: error!.response.data.error, loading: false})
            }
        }
        
    }
}))