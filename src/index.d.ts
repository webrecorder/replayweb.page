declare module "*.svg";
declare module "*.html";
declare const __SW_NAME__: string;
declare const __HELPER_PROXY__: string;
declare const __GDRIVE_CLIENT_ID__: string;
declare const __VERSION__: string;

// showOpenFilePicker doesn't yet exist in Typescript's DOM lib
// see https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker for details
interface Window {
  showOpenFilePicker: (options?: {
    types: { description: string; accept: Record<string, string[]> }[];
  }) => Promise<[FileSystemFileHandle]>;
}
