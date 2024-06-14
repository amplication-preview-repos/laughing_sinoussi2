import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notificationsEnabled?: SortOrder;
  theme?: SortOrder;
  updatedAt?: SortOrder;
};
