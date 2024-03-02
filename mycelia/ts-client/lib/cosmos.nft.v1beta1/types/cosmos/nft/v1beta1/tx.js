/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseMsgSend() {
    return { classId: "", id: "", sender: "", receiver: "" };
}
export const MsgSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.receiver = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classId !== "") {
            obj.classId = message.classId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        if (message.receiver !== "") {
            obj.receiver = message.receiver;
        }
        return obj;
    },
    create(base) {
        return MsgSend.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        return MsgSendResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
};
export const MsgServiceName = "cosmos.nft.v1beta1.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.Send = this.Send.bind(this);
    }
    Send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request(this.service, "Send", data);
        return promise.then((data) => MsgSendResponse.decode(_m0.Reader.create(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
