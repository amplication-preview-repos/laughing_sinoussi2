import { SortOrder } from "../../util/SortOrder";

export type JokeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
