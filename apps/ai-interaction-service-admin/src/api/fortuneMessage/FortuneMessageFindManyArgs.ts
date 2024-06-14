import { FortuneMessageWhereInput } from "./FortuneMessageWhereInput";
import { FortuneMessageOrderByInput } from "./FortuneMessageOrderByInput";

export type FortuneMessageFindManyArgs = {
  where?: FortuneMessageWhereInput;
  orderBy?: Array<FortuneMessageOrderByInput>;
  skip?: number;
  take?: number;
};
