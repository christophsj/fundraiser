import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "christophsj.fundraiser.fundraiser";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateFund {
    creator: string;
    project: string;
    amount: string;
}
export interface MsgCreateFundResponse {
    id: number;
}
export interface MsgUpdateFund {
    creator: string;
    id: number;
    project: string;
    amount: string;
}
export interface MsgUpdateFundResponse {
}
export interface MsgDeleteFund {
    creator: string;
    id: number;
}
export interface MsgDeleteFundResponse {
}
export interface MsgCreateProject {
    creator: string;
    title: string;
    description: string;
    start: string;
    end: string;
    goal: string;
}
export interface MsgCreateProjectResponse {
    id: number;
}
export interface MsgUpdateProject {
    creator: string;
    id: number;
    title: string;
    description: string;
    start: string;
    end: string;
    goal: string;
}
export interface MsgUpdateProjectResponse {
}
export interface MsgDeleteProject {
    creator: string;
    id: number;
}
export interface MsgDeleteProjectResponse {
}
export declare const MsgCreateFund: {
    encode(message: MsgCreateFund, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateFund;
    fromJSON(object: any): MsgCreateFund;
    toJSON(message: MsgCreateFund): unknown;
    fromPartial(object: DeepPartial<MsgCreateFund>): MsgCreateFund;
};
export declare const MsgCreateFundResponse: {
    encode(message: MsgCreateFundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateFundResponse;
    fromJSON(object: any): MsgCreateFundResponse;
    toJSON(message: MsgCreateFundResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateFundResponse>): MsgCreateFundResponse;
};
export declare const MsgUpdateFund: {
    encode(message: MsgUpdateFund, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateFund;
    fromJSON(object: any): MsgUpdateFund;
    toJSON(message: MsgUpdateFund): unknown;
    fromPartial(object: DeepPartial<MsgUpdateFund>): MsgUpdateFund;
};
export declare const MsgUpdateFundResponse: {
    encode(_: MsgUpdateFundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateFundResponse;
    fromJSON(_: any): MsgUpdateFundResponse;
    toJSON(_: MsgUpdateFundResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateFundResponse>): MsgUpdateFundResponse;
};
export declare const MsgDeleteFund: {
    encode(message: MsgDeleteFund, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteFund;
    fromJSON(object: any): MsgDeleteFund;
    toJSON(message: MsgDeleteFund): unknown;
    fromPartial(object: DeepPartial<MsgDeleteFund>): MsgDeleteFund;
};
export declare const MsgDeleteFundResponse: {
    encode(_: MsgDeleteFundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteFundResponse;
    fromJSON(_: any): MsgDeleteFundResponse;
    toJSON(_: MsgDeleteFundResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteFundResponse>): MsgDeleteFundResponse;
};
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProject;
    fromJSON(object: any): MsgCreateProject;
    toJSON(message: MsgCreateProject): unknown;
    fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(message: MsgCreateProjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(object: any): MsgCreateProjectResponse;
    toJSON(message: MsgCreateProjectResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgUpdateProject: {
    encode(message: MsgUpdateProject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProject;
    fromJSON(object: any): MsgUpdateProject;
    toJSON(message: MsgUpdateProject): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProject>): MsgUpdateProject;
};
export declare const MsgUpdateProjectResponse: {
    encode(_: MsgUpdateProjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProjectResponse;
    fromJSON(_: any): MsgUpdateProjectResponse;
    toJSON(_: MsgUpdateProjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProjectResponse>): MsgUpdateProjectResponse;
};
export declare const MsgDeleteProject: {
    encode(message: MsgDeleteProject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProject;
    fromJSON(object: any): MsgDeleteProject;
    toJSON(message: MsgDeleteProject): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProject>): MsgDeleteProject;
};
export declare const MsgDeleteProjectResponse: {
    encode(_: MsgDeleteProjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProjectResponse;
    fromJSON(_: any): MsgDeleteProjectResponse;
    toJSON(_: MsgDeleteProjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProjectResponse>): MsgDeleteProjectResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateFund(request: MsgCreateFund): Promise<MsgCreateFundResponse>;
    UpdateFund(request: MsgUpdateFund): Promise<MsgUpdateFundResponse>;
    DeleteFund(request: MsgDeleteFund): Promise<MsgDeleteFundResponse>;
    CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
    DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateFund(request: MsgCreateFund): Promise<MsgCreateFundResponse>;
    UpdateFund(request: MsgUpdateFund): Promise<MsgUpdateFundResponse>;
    DeleteFund(request: MsgDeleteFund): Promise<MsgDeleteFundResponse>;
    CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
    DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
