import { JokeWhereInput } from "./JokeWhereInput";
import { JokeOrderByInput } from "./JokeOrderByInput";

export type JokeFindManyArgs = {
  where?: JokeWhereInput;
  orderBy?: Array<JokeOrderByInput>;
  skip?: number;
  take?: number;
};
