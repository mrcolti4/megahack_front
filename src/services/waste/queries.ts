import { useMutation } from "@tanstack/react-query"
import { recognizedWaste } from "./api"

export const useRecognizeWaste = () => {
    return useMutation({
        mutationKey: ["recognizedWaste"],
        mutationFn: async (image: File) => {
            return await recognizedWaste(image)
        }
    })
}