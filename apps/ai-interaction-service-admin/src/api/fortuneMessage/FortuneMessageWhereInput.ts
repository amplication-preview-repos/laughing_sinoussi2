import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FortuneMessageWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
