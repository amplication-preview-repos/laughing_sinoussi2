import { JokeWhereUniqueInput } from "./JokeWhereUniqueInput";
import { JokeUpdateInput } from "./JokeUpdateInput";

export type UpdateJokeArgs = {
  where: JokeWhereUniqueInput;
  data: JokeUpdateInput;
};
