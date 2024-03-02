/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "mycelia.mycelia";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryRound1Data() {
    return {};
}
export const QueryRound1Data = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRound1Data();
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
        return QueryRound1Data.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryRound1Data();
        return message;
    },
};
function createBaseQueryRound1DataResponse() {
    return { accumlatedRound1Data: new Uint8Array(0) };
}
export const QueryRound1DataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accumlatedRound1Data.length !== 0) {
            writer.uint32(10).bytes(message.accumlatedRound1Data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRound1DataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accumlatedRound1Data = reader.bytes();
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
            accumlatedRound1Data: isSet(object.accumlatedRound1Data)
                ? bytesFromBase64(object.accumlatedRound1Data)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accumlatedRound1Data.length !== 0) {
            obj.accumlatedRound1Data = base64FromBytes(message.accumlatedRound1Data);
        }
        return obj;
    },
    create(base) {
        return QueryRound1DataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryRound1DataResponse();
        message.accumlatedRound1Data = object.accumlatedRound1Data ?? new Uint8Array(0);
        return message;
    },
};
function createBaseQueryRound2Data() {
    return { identifier: "" };
}
export const QueryRound2Data = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRound2Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.identifier = reader.string();
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
        return { identifier: isSet(object.identifier) ? String(object.identifier) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.identifier !== "") {
            obj.identifier = message.identifier;
        }
        return obj;
    },
    create(base) {
        return QueryRound2Data.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryRound2Data();
        message.identifier = object.identifier ?? "";
        return message;
    },
};
function createBaseQueryRound2DataResponse() {
    return { accumlatedRound2Data: new Uint8Array(0) };
}
export const QueryRound2DataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accumlatedRound2Data.length !== 0) {
            writer.uint32(10).bytes(message.accumlatedRound2Data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRound2DataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accumlatedRound2Data = reader.bytes();
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
            accumlatedRound2Data: isSet(object.accumlatedRound2Data)
                ? bytesFromBase64(object.accumlatedRound2Data)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accumlatedRound2Data.length !== 0) {
            obj.accumlatedRound2Data = base64FromBytes(message.accumlatedRound2Data);
        }
        return obj;
    },
    create(base) {
        return QueryRound2DataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryRound2DataResponse();
        message.accumlatedRound2Data = object.accumlatedRound2Data ?? new Uint8Array(0);
        return message;
    },
};
export const QueryServiceName = "mycelia.mycelia.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Round1Data = this.Round1Data.bind(this);
        this.Round2Data = this.Round2Data.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }
    Round1Data(request) {
        const data = QueryRound1Data.encode(request).finish();
        const promise = this.rpc.request(this.service, "Round1Data", data);
        return promise.then((data) => QueryRound1DataResponse.decode(_m0.Reader.create(data)));
    }
    Round2Data(request) {
        const data = QueryRound2Data.encode(request).finish();
        const promise = this.rpc.request(this.service, "Round2Data", data);
        return promise.then((data) => QueryRound2DataResponse.decode(_m0.Reader.create(data)));
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
function isSet(value) {
    return value !== null && value !== undefined;
}
