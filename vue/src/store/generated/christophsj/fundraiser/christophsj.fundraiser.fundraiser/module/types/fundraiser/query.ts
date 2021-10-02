/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Fund } from "../fundraiser/fund";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Project } from "../fundraiser/project";

export const protobufPackage = "christophsj.fundraiser.fundraiser";

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

const baseQueryGetFundRequest: object = { id: 0 };

export const QueryGetFundRequest = {
  encode(
    message: QueryGetFundRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFundRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFundRequest } as QueryGetFundRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFundRequest {
    const message = { ...baseQueryGetFundRequest } as QueryGetFundRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetFundRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetFundRequest>): QueryGetFundRequest {
    const message = { ...baseQueryGetFundRequest } as QueryGetFundRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetFundResponse: object = {};

export const QueryGetFundResponse = {
  encode(
    message: QueryGetFundResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Fund !== undefined) {
      Fund.encode(message.Fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFundResponse } as QueryGetFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Fund = Fund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFundResponse {
    const message = { ...baseQueryGetFundResponse } as QueryGetFundResponse;
    if (object.Fund !== undefined && object.Fund !== null) {
      message.Fund = Fund.fromJSON(object.Fund);
    } else {
      message.Fund = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFundResponse): unknown {
    const obj: any = {};
    message.Fund !== undefined &&
      (obj.Fund = message.Fund ? Fund.toJSON(message.Fund) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetFundResponse>): QueryGetFundResponse {
    const message = { ...baseQueryGetFundResponse } as QueryGetFundResponse;
    if (object.Fund !== undefined && object.Fund !== null) {
      message.Fund = Fund.fromPartial(object.Fund);
    } else {
      message.Fund = undefined;
    }
    return message;
  },
};

const baseQueryAllFundRequest: object = {};

export const QueryAllFundRequest = {
  encode(
    message: QueryAllFundRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFundRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFundRequest } as QueryAllFundRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFundRequest {
    const message = { ...baseQueryAllFundRequest } as QueryAllFundRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFundRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllFundRequest>): QueryAllFundRequest {
    const message = { ...baseQueryAllFundRequest } as QueryAllFundRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFundResponse: object = {};

export const QueryAllFundResponse = {
  encode(
    message: QueryAllFundResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Fund) {
      Fund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFundResponse } as QueryAllFundResponse;
    message.Fund = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Fund.push(Fund.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFundResponse {
    const message = { ...baseQueryAllFundResponse } as QueryAllFundResponse;
    message.Fund = [];
    if (object.Fund !== undefined && object.Fund !== null) {
      for (const e of object.Fund) {
        message.Fund.push(Fund.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFundResponse): unknown {
    const obj: any = {};
    if (message.Fund) {
      obj.Fund = message.Fund.map((e) => (e ? Fund.toJSON(e) : undefined));
    } else {
      obj.Fund = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllFundResponse>): QueryAllFundResponse {
    const message = { ...baseQueryAllFundResponse } as QueryAllFundResponse;
    message.Fund = [];
    if (object.Fund !== undefined && object.Fund !== null) {
      for (const e of object.Fund) {
        message.Fund.push(Fund.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProjectRequest: object = { id: 0 };

export const QueryGetProjectRequest = {
  encode(
    message: QueryGetProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProjectRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectRequest>
  ): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetProjectResponse: object = {};

export const QueryGetProjectResponse = {
  encode(
    message: QueryGetProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Project !== undefined) {
      Project.encode(message.Project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.Project !== undefined && object.Project !== null) {
      message.Project = Project.fromJSON(object.Project);
    } else {
      message.Project = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProjectResponse): unknown {
    const obj: any = {};
    message.Project !== undefined &&
      (obj.Project = message.Project
        ? Project.toJSON(message.Project)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectResponse>
  ): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.Project !== undefined && object.Project !== null) {
      message.Project = Project.fromPartial(object.Project);
    } else {
      message.Project = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectRequest: object = {};

export const QueryAllProjectRequest = {
  encode(
    message: QueryAllProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectRequest>
  ): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectResponse: object = {};

export const QueryAllProjectResponse = {
  encode(
    message: QueryAllProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Project) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Project.push(Project.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    if (object.Project !== undefined && object.Project !== null) {
      for (const e of object.Project) {
        message.Project.push(Project.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectResponse): unknown {
    const obj: any = {};
    if (message.Project) {
      obj.Project = message.Project.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.Project = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectResponse>
  ): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    if (object.Project !== undefined && object.Project !== null) {
      for (const e of object.Project) {
        message.Project.push(Project.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Fund(request: QueryGetFundRequest): Promise<QueryGetFundResponse>;
  FundAll(request: QueryAllFundRequest): Promise<QueryAllFundResponse>;
  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
  ProjectAll(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Fund(request: QueryGetFundRequest): Promise<QueryGetFundResponse> {
    const data = QueryGetFundRequest.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Query",
      "Fund",
      data
    );
    return promise.then((data) =>
      QueryGetFundResponse.decode(new Reader(data))
    );
  }

  FundAll(request: QueryAllFundRequest): Promise<QueryAllFundResponse> {
    const data = QueryAllFundRequest.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Query",
      "FundAll",
      data
    );
    return promise.then((data) =>
      QueryAllFundResponse.decode(new Reader(data))
    );
  }

  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse> {
    const data = QueryGetProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Query",
      "Project",
      data
    );
    return promise.then((data) =>
      QueryGetProjectResponse.decode(new Reader(data))
    );
  }

  ProjectAll(
    request: QueryAllProjectRequest
  ): Promise<QueryAllProjectResponse> {
    const data = QueryAllProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Query",
      "ProjectAll",
      data
    );
    return promise.then((data) =>
      QueryAllProjectResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
