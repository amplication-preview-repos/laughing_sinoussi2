import { Joke as TJoke } from "../api/joke/Joke";

export const JOKE_TITLE_FIELD = "text";

export const JokeTitle = (record: TJoke): string => {
  return record.text?.toString() || String(record.id);
};
