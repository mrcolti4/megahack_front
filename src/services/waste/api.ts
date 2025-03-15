import { WasteResponse } from "@/types/Waste";
import client from "../client";

export async function recognizedWaste(image: File): Promise<WasteResponse> {
    const formData = new FormData();
    formData.append("image", image);
    const response = await client.post<WasteResponse>(
        "/waste_recognition/recognize",
        formData
    );

    return response.data;
}