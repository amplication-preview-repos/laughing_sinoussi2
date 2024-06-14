import { Fact as TFact } from "../api/fact/Fact";

export const FACT_TITLE_FIELD = "date";

export const FactTitle = (record: TFact): string => {
  return record.date?.toString() || String(record.id);
};
