import type { EmbedReplayData, TabData } from "./item";

export type TabNavEvent = CustomEvent<{
  data: TabData;
  reload?: boolean;
  replaceLoc?: boolean;
  replayNotFoundError?: boolean;
}>;

export type EmbedReplayEvent = CustomEvent<
  EmbedReplayData & {
    type: "urlchange";
    replayNotFoundError: boolean;
  }
>;
