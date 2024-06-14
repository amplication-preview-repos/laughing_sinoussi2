import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "theme";

export const SettingsTitle = (record: TSettings): string => {
  return record.theme?.toString() || String(record.id);
};
