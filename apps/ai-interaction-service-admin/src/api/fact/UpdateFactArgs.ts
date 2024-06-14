import { FactWhereUniqueInput } from "./FactWhereUniqueInput";
import { FactUpdateInput } from "./FactUpdateInput";

export type UpdateFactArgs = {
  where: FactWhereUniqueInput;
  data: FactUpdateInput;
};
