import { FortuneMessage as TFortuneMessage } from "../api/fortuneMessage/FortuneMessage";

export const FORTUNEMESSAGE_TITLE_FIELD = "text";

export const FortuneMessageTitle = (record: TFortuneMessage): string => {
  return record.text?.toString() || String(record.id);
};
