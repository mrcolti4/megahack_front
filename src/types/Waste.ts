export interface DisposeRecord {
    user_id: string;
    created_at: Date | string | number;
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