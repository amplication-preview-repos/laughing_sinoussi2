import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FactWhereInput = {
  date?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
