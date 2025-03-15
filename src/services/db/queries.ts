import { CreateDisposeRecord } from "@/types/Waste";
import { useMutation } from "@tanstack/react-query";
import { createDisposeRecord, getAllDisposeRecords } from "./api";

export const useCreateDisposeRecord = () => {
    return useMutation({
        mutationKey: ["createDisposeRecord"],
        mutationFn: async (data: CreateDisposeRecord) => {
            createDisposeRecord(data);
        }
    })
};

export const useGetAllDisposeRecords = () => {
    return useMutation({
        mutationKey: ["getAllDisposeRecords"],
        mutationFn: async (userId: string) => {
            return await getAllDisposeRecords(userId);
        }
    })
}