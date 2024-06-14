import { FactWhereInput } from "./FactWhereInput";
import { FactOrderByInput } from "./FactOrderByInput";

export type FactFindManyArgs = {
  where?: FactWhereInput;
  orderBy?: Array<FactOrderByInput>;
  skip?: number;
  take?: number;
};
