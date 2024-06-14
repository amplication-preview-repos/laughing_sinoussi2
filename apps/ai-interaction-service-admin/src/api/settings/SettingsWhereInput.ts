import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  notificationsEnabled?: BooleanNullableFilter;
  theme?: StringNullableFilter;
};
