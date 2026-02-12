import type { EmbedReplayData, TabData } from "./item";

export type TabNavEvent = CustomEvent<{
  data: TabData;
  reload?: boolean;
  replaceLoc?: boolean;
  replayNotFoundError?: boolean;
}>;

export type RwpUrlChangeEvent = CustomEvent<
  EmbedReplayData & {
    type: "urlchange";
    replayNotFoundError: boolean;
  }
>;

export type ReplayLoadingDetail =
  | { loading: true }
  | { loading: false; replayNotFoundError: boolean };

export type RwpPageLoadingEvent = CustomEvent<
  Required<Pick<EmbedReplayData, "url" | "ts">> & {
    type: "page-loading";
  } & ReplayLoadingDetail
>;
