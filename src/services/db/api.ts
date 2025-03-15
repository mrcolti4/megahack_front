import { db } from "@/firebase/config";
import { CreateDisposeRecord, DisposeRecord } from "@/types/Waste";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";


export const createDisposeRecord = async (data: CreateDisposeRecord): Promise<boolean> => {
    const docRef = await addDoc(collection(db, "dispose_records"), {
        ...data,
        created_at: serverTimestamp(),
    });
    if (docRef.id) {
        return true;
    }
    return false;
}

export const getAllDisposeRecords = async (userId: string): Promise<DisposeRecord[]> => {
    const result: DisposeRecord[] = [];
    const collectionRef = collection(db, 'dispose_records');
    const q = query(collectionRef, where('user_id', "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        result.push({
            ...doc.data() as DisposeRecord
        });
    });

    return result;
}
