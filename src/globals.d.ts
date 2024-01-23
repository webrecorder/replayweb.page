declare module "*.svg";
declare module "*.html";
declare const __SW_NAME__: string;
declare const __HELPER_PROXY__: string;
declare const __GDRIVE_CLIENT_ID__: string;
declare const __VERSION__: string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODOFixMe = any;

// showOpenFilePicker doesn't yet exist in Typescript's DOM lib
// see https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker for details
interface Window {
  showOpenFilePicker: (options?: {
    types: { description: string; accept: Record<string, string[]> }[];
  }) => Promise<[FileSystemFileHandle]>;
}

// This is only supported in Blink (see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle/requestPermission#browser_compatibility), so Typescript leaves it out of their definitions (https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1393#issuecomment-1483735315)
interface FileSystemHandle {
  requestPermission: (options?: {
    mode?: "read" | "readwrite";
  }) => Promise<PermissionStatus>;
}

type GAPIResponse =
  | { error: string; access_token: never }
  | { error: never; access_token: string };
interface Window {
  gapi: {
    load: (method: string, callback: (response: GAPIResponse) => void) => void;
    auth2: {
      authorize: (
        config: {
          client_id: string;
          scope: string;
          response_type: string;
          prompt: unknown;
        },
        callback: (response: GAPIResponse) => void,
      ) => void;
    };
  };
}
