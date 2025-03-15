import { useCreateDisposeRecord } from "@/services/db/queries";
import { CreateDisposeRecord } from "@/types/CreateDisposeRecord";

export default function CreateRecord({ data }: { data: CreateDisposeRecord }) {
  const createDisposeRecord = useCreateDisposeRecord();
  createDisposeRecord.mutate(data);
  return (
    
  );
}
