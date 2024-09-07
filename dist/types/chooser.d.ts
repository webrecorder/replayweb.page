import { LitElement, type PropertyValues } from "lit";
export interface FileWithPath extends File {
    readonly path: string;
}
export declare class Chooser extends LitElement {
    fileDisplayName: string;
    file: FileWithPath | null;
    droppedFile: FileWithPath | null;
    hasNativeFS: boolean;
    showOpenFilePickerOptions: {
        types: {
            description: string;
            accept: {
                "application/warc": string[];
                "application/har": string[];
                "application/wacz": string[];
                "application/json": string[];
            };
        }[];
    };
    newFullImport: boolean;
    noHead: boolean;
    fileHandle?: FileSystemFileHandle;
    updated(changedProperties: PropertyValues<this>): void;
    onDropFile(): void;
    onChooseFile(event: any): void;
    setFile(file: FileWithPath): void;
    onChooseNativeFile(): Promise<void>;
    randomId(): string;
    onStartLoad(event?: Event): boolean;
    onInput(event: any): void;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=chooser.d.ts.map