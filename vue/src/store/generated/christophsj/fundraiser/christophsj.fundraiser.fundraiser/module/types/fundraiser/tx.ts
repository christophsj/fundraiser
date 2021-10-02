/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "christophsj.fundraiser.fundraiser";

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

export interface MsgUpdateFundResponse {}

export interface MsgDeleteFund {
  creator: string;
  id: number;
}

export interface MsgDeleteFundResponse {}

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

export interface MsgUpdateProjectResponse {}

export interface MsgDeleteProject {
  creator: string;
  id: number;
}

export interface MsgDeleteProjectResponse {}

const baseMsgCreateFund: object = { creator: "", project: "", amount: "" };

export const MsgCreateFund = {
  encode(message: MsgCreateFund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFund {
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = String(object.project);
    } else {
      message.project = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgCreateFund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateFund>): MsgCreateFund {
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    } else {
      message.project = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgCreateFundResponse: object = { id: 0 };

export const MsgCreateFundResponse = {
  encode(
    message: MsgCreateFundResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
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

  fromJSON(object: any): MsgCreateFundResponse {
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFundResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFundResponse>
  ): MsgCreateFundResponse {
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateFund: object = {
  creator: "",
  id: 0,
  project: "",
  amount: "",
};

export const MsgUpdateFund = {
  encode(message: MsgUpdateFund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateFund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFund } as MsgUpdateFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.project = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFund {
    const message = { ...baseMsgUpdateFund } as MsgUpdateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = String(object.project);
    } else {
      message.project = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateFund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.project !== undefined && (obj.project = message.project);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateFund>): MsgUpdateFund {
    const message = { ...baseMsgUpdateFund } as MsgUpdateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    } else {
      message.project = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgUpdateFundResponse: object = {};

export const MsgUpdateFundResponse = {
  encode(_: MsgUpdateFundResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFundResponse } as MsgUpdateFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateFundResponse {
    const message = { ...baseMsgUpdateFundResponse } as MsgUpdateFundResponse;
    return message;
  },

  toJSON(_: MsgUpdateFundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateFundResponse>): MsgUpdateFundResponse {
    const message = { ...baseMsgUpdateFundResponse } as MsgUpdateFundResponse;
    return message;
  },
};

const baseMsgDeleteFund: object = { creator: "", id: 0 };

export const MsgDeleteFund = {
  encode(message: MsgDeleteFund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteFund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteFund } as MsgDeleteFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteFund {
    const message = { ...baseMsgDeleteFund } as MsgDeleteFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteFund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteFund>): MsgDeleteFund {
    const message = { ...baseMsgDeleteFund } as MsgDeleteFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteFundResponse: object = {};

export const MsgDeleteFundResponse = {
  encode(_: MsgDeleteFundResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteFundResponse } as MsgDeleteFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteFundResponse {
    const message = { ...baseMsgDeleteFundResponse } as MsgDeleteFundResponse;
    return message;
  },

  toJSON(_: MsgDeleteFundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteFundResponse>): MsgDeleteFundResponse {
    const message = { ...baseMsgDeleteFundResponse } as MsgDeleteFundResponse;
    return message;
  },
};

const baseMsgCreateProject: object = {
  creator: "",
  title: "",
  description: "",
  start: "",
  end: "",
  goal: "",
};

export const MsgCreateProject = {
  encode(message: MsgCreateProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.start !== "") {
      writer.uint32(34).string(message.start);
    }
    if (message.end !== "") {
      writer.uint32(42).string(message.end);
    }
    if (message.goal !== "") {
      writer.uint32(50).string(message.goal);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.start = reader.string();
          break;
        case 5:
          message.end = reader.string();
          break;
        case 6:
          message.goal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProject {
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = String(object.start);
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = String(object.end);
    } else {
      message.end = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = String(object.goal);
    } else {
      message.goal = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.goal !== undefined && (obj.goal = message.goal);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = object.goal;
    } else {
      message.goal = "";
    }
    return message;
  },
};

const baseMsgCreateProjectResponse: object = { id: 0 };

export const MsgCreateProjectResponse = {
  encode(
    message: MsgCreateProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
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

  fromJSON(object: any): MsgCreateProjectResponse {
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateProjectResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProjectResponse>
  ): MsgCreateProjectResponse {
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateProject: object = {
  creator: "",
  id: 0,
  title: "",
  description: "",
  start: "",
  end: "",
  goal: "",
};

export const MsgUpdateProject = {
  encode(message: MsgUpdateProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.start !== "") {
      writer.uint32(42).string(message.start);
    }
    if (message.end !== "") {
      writer.uint32(50).string(message.end);
    }
    if (message.goal !== "") {
      writer.uint32(58).string(message.goal);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.start = reader.string();
          break;
        case 6:
          message.end = reader.string();
          break;
        case 7:
          message.goal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProject {
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = String(object.start);
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = String(object.end);
    } else {
      message.end = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = String(object.goal);
    } else {
      message.goal = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.goal !== undefined && (obj.goal = message.goal);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProject>): MsgUpdateProject {
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = object.goal;
    } else {
      message.goal = "";
    }
    return message;
  },
};

const baseMsgUpdateProjectResponse: object = {};

export const MsgUpdateProjectResponse = {
  encode(
    _: MsgUpdateProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProjectResponse {
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    return message;
  },

  toJSON(_: MsgUpdateProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProjectResponse>
  ): MsgUpdateProjectResponse {
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    return message;
  },
};

const baseMsgDeleteProject: object = { creator: "", id: 0 };

export const MsgDeleteProject = {
  encode(message: MsgDeleteProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProject {
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProject>): MsgDeleteProject {
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteProjectResponse: object = {};

export const MsgDeleteProjectResponse = {
  encode(
    _: MsgDeleteProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProjectResponse {
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    return message;
  },

  toJSON(_: MsgDeleteProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProjectResponse>
  ): MsgDeleteProjectResponse {
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    return message;
  },
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

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateFund(request: MsgCreateFund): Promise<MsgCreateFundResponse> {
    const data = MsgCreateFund.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "CreateFund",
      data
    );
    return promise.then((data) =>
      MsgCreateFundResponse.decode(new Reader(data))
    );
  }

  UpdateFund(request: MsgUpdateFund): Promise<MsgUpdateFundResponse> {
    const data = MsgUpdateFund.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "UpdateFund",
      data
    );
    return promise.then((data) =>
      MsgUpdateFundResponse.decode(new Reader(data))
    );
  }

  DeleteFund(request: MsgDeleteFund): Promise<MsgDeleteFundResponse> {
    const data = MsgDeleteFund.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "DeleteFund",
      data
    );
    return promise.then((data) =>
      MsgDeleteFundResponse.decode(new Reader(data))
    );
  }

  CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "CreateProject",
      data
    );
    return promise.then((data) =>
      MsgCreateProjectResponse.decode(new Reader(data))
    );
  }

  UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse> {
    const data = MsgUpdateProject.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "UpdateProject",
      data
    );
    return promise.then((data) =>
      MsgUpdateProjectResponse.decode(new Reader(data))
    );
  }

  DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse> {
    const data = MsgDeleteProject.encode(request).finish();
    const promise = this.rpc.request(
      "christophsj.fundraiser.fundraiser.Msg",
      "DeleteProject",
      data
    );
    return promise.then((data) =>
      MsgDeleteProjectResponse.decode(new Reader(data))
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
