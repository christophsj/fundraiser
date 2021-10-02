/* eslint-disable */
import { Fund } from "../fundraiser/fund";
import { Project } from "../fundraiser/project";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "christophsj.fundraiser.fundraiser";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.fundList) {
            Fund.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.projectList) {
            Project.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.fundList = [];
        message.projectList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.fundList.push(Fund.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.projectList.push(Project.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.fundList = [];
        message.projectList = [];
        if (object.fundList !== undefined && object.fundList !== null) {
            for (const e of object.fundList) {
                message.fundList.push(Fund.fromJSON(e));
            }
        }
        if (object.projectList !== undefined && object.projectList !== null) {
            for (const e of object.projectList) {
                message.projectList.push(Project.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.fundList) {
            obj.fundList = message.fundList.map((e) => e ? Fund.toJSON(e) : undefined);
        }
        else {
            obj.fundList = [];
        }
        if (message.projectList) {
            obj.projectList = message.projectList.map((e) => e ? Project.toJSON(e) : undefined);
        }
        else {
            obj.projectList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.fundList = [];
        message.projectList = [];
        if (object.fundList !== undefined && object.fundList !== null) {
            for (const e of object.fundList) {
                message.fundList.push(Fund.fromPartial(e));
            }
        }
        if (object.projectList !== undefined && object.projectList !== null) {
            for (const e of object.projectList) {
                message.projectList.push(Project.fromPartial(e));
            }
        }
        return message;
    },
};
