/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "mycelia.mycelia";
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgPostRound1Data() {
    return { participant: "", round1Data: new Uint8Array(0) };
}
export const MsgPostRound1Data = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participant !== "") {
            writer.uint32(10).string(message.participant);
        }
        if (message.round1Data.length !== 0) {
            writer.uint32(18).bytes(message.round1Data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPostRound1Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.participant = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.round1Data = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? String(object.participant) : "",
            round1Data: isSet(object.round1Data) ? bytesFromBase64(object.round1Data) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.participant !== "") {
            obj.participant = message.participant;
        }
        if (message.round1Data.length !== 0) {
            obj.round1Data = base64FromBytes(message.round1Data);
        }
        return obj;
    },
    create(base) {
        return MsgPostRound1Data.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPostRound1Data();
        message.participant = object.participant ?? "";
        message.round1Data = object.round1Data ?? new Uint8Array(0);
        return message;
    },
};
function createBaseMsgPostRound1DataResponse() {
    return {};
}
export const MsgPostRound1DataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPostRound1DataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgPostRound1DataResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgPostRound1DataResponse();
        return message;
    },
};
function createBaseMsgPostRound2Data() {
    return { participant: "", round2Data: {} };
}
export const MsgPostRound2Data = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participant !== "") {
            writer.uint32(10).string(message.participant);
        }
        Object.entries(message.round2Data).forEach(([key, value]) => {
            MsgPostRound2Data_Round2DataEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPostRound2Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.participant = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = MsgPostRound2Data_Round2DataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.round2Data[entry2.key] = entry2.value;
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? String(object.participant) : "",
            round2Data: isObject(object.round2Data)
                ? Object.entries(object.round2Data).reduce((acc, [key, value]) => {
                    acc[key] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.participant !== "") {
            obj.participant = message.participant;
        }
        if (message.round2Data) {
            const entries = Object.entries(message.round2Data);
            if (entries.length > 0) {
                obj.round2Data = {};
                entries.forEach(([k, v]) => {
                    obj.round2Data[k] = base64FromBytes(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return MsgPostRound2Data.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPostRound2Data();
        message.participant = object.participant ?? "";
        message.round2Data = Object.entries(object.round2Data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseMsgPostRound2Data_Round2DataEntry() {
    return { key: "", value: new Uint8Array(0) };
}
export const MsgPostRound2Data_Round2DataEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPostRound2Data_Round2DataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        return obj;
    },
    create(base) {
        return MsgPostRound2Data_Round2DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPostRound2Data_Round2DataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? new Uint8Array(0);
        return message;
    },
};
function createBaseMsgPostRound2DataResponse() {
    return {};
}
export const MsgPostRound2DataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPostRound2DataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgPostRound2DataResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgPostRound2DataResponse();
        return message;
    },
};
export const MsgServiceName = "mycelia.mycelia.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.PostRound1Data = this.PostRound1Data.bind(this);
        this.PostRound2Data = this.PostRound2Data.bind(this);
    }
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
    }
    PostRound1Data(request) {
        const data = MsgPostRound1Data.encode(request).finish();
        const promise = this.rpc.request(this.service, "PostRound1Data", data);
        return promise.then((data) => MsgPostRound1DataResponse.decode(_m0.Reader.create(data)));
    }
    PostRound2Data(request) {
        const data = MsgPostRound2Data.encode(request).finish();
        const promise = this.rpc.request(this.service, "PostRound2Data", data);
        return promise.then((data) => MsgPostRound2DataResponse.decode(_m0.Reader.create(data)));
    }
}
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
