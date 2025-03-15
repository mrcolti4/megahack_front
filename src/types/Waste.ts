import { Timestamp } from "firebase/firestore";

export interface DisposeRecord {
    user_id: string;
    created_at: Timestamp;
    labels: LabelObject[];
}
export interface CreateDisposeRecord extends WasteResponse {
    user_id: string;
}

export interface WasteResponse {
    labels: LabelObject[];
}

interface LabelObject {
    description: string;
    category: string;
}