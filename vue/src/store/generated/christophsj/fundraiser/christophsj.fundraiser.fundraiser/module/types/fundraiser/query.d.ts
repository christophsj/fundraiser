import { Reader, Writer } from "protobufjs/minimal";
import { Fund } from "../fundraiser/fund";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Project } from "../fundraiser/project";
export declare const protobufPackage = "christophsj.fundraiser.fundraiser";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetFundRequest {
    id: number;
}
export interface QueryGetFundResponse {
    Fund: Fund | undefined;
}
export interface QueryAllFundRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllFundResponse {
    Fund: Fund[];
    pagination: PageResponse | undefined;
}
export interface QueryGetProjectRequest {
    id: number;
}
export interface QueryGetProjectResponse {
    Project: Project | undefined;
}
export interface QueryAllProjectRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllProjectResponse {
    Project: Project[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetFundRequest: {
    encode(message: QueryGetFundRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFundRequest;
    fromJSON(object: any): QueryGetFundRequest;
    toJSON(message: QueryGetFundRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetFundRequest>): QueryGetFundRequest;
};
export declare const QueryGetFundResponse: {
    encode(message: QueryGetFundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFundResponse;
    fromJSON(object: any): QueryGetFundResponse;
    toJSON(message: QueryGetFundResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetFundResponse>): QueryGetFundResponse;
};
export declare const QueryAllFundRequest: {
    encode(message: QueryAllFundRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFundRequest;
    fromJSON(object: any): QueryAllFundRequest;
    toJSON(message: QueryAllFundRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllFundRequest>): QueryAllFundRequest;
};
export declare const QueryAllFundResponse: {
    encode(message: QueryAllFundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFundResponse;
    fromJSON(object: any): QueryAllFundResponse;
    toJSON(message: QueryAllFundResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllFundResponse>): QueryAllFundResponse;
};
export declare const QueryGetProjectRequest: {
    encode(message: QueryGetProjectRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProjectRequest;
    fromJSON(object: any): QueryGetProjectRequest;
    toJSON(message: QueryGetProjectRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetProjectRequest>): QueryGetProjectRequest;
};
export declare const QueryGetProjectResponse: {
    encode(message: QueryGetProjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProjectResponse;
    fromJSON(object: any): QueryGetProjectResponse;
    toJSON(message: QueryGetProjectResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetProjectResponse>): QueryGetProjectResponse;
};
export declare const QueryAllProjectRequest: {
    encode(message: QueryAllProjectRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProjectRequest;
    fromJSON(object: any): QueryAllProjectRequest;
    toJSON(message: QueryAllProjectRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProjectRequest>): QueryAllProjectRequest;
};
export declare const QueryAllProjectResponse: {
    encode(message: QueryAllProjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProjectResponse;
    fromJSON(object: any): QueryAllProjectResponse;
    toJSON(message: QueryAllProjectResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllProjectResponse>): QueryAllProjectResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Fund(request: QueryGetFundRequest): Promise<QueryGetFundResponse>;
    FundAll(request: QueryAllFundRequest): Promise<QueryAllFundResponse>;
    Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
    ProjectAll(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Fund(request: QueryGetFundRequest): Promise<QueryGetFundResponse>;
    FundAll(request: QueryAllFundRequest): Promise<QueryAllFundResponse>;
    Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
    ProjectAll(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
