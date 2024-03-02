/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "mycelia.mycelia";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

/** MsgUpdateParams is the Msg/PostRound1Data request type. */
export interface MsgPostRound1Data {
  participant: string;
  round1Data: Uint8Array;
}

/**
 * MsgPostRound1DataResponse defines the response structure for executing a
 * MsgPostRound1Data message.
 */
export interface MsgPostRound1DataResponse {
}

/** MsgUpdateParams is the Msg/PostRound1Data request type. */
export interface MsgPostRound2Data {
  participant: string;
  round2Data: { [key: string]: Uint8Array };
}

export interface MsgPostRound2Data_Round2DataEntry {
  key: string;
  value: Uint8Array;
}

/**
 * MsgPostRound2DataResponse defines the response structure for executing a
 * MsgPostRound2Data message.
 */
export interface MsgPostRound2DataResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgPostRound1Data(): MsgPostRound1Data {
  return { participant: "", round1Data: new Uint8Array(0) };
}

export const MsgPostRound1Data = {
  encode(message: MsgPostRound1Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== "") {
      writer.uint32(10).string(message.participant);
    }
    if (message.round1Data.length !== 0) {
      writer.uint32(18).bytes(message.round1Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound1Data {
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

  fromJSON(object: any): MsgPostRound1Data {
    return {
      participant: isSet(object.participant) ? String(object.participant) : "",
      round1Data: isSet(object.round1Data) ? bytesFromBase64(object.round1Data) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgPostRound1Data): unknown {
    const obj: any = {};
    if (message.participant !== "") {
      obj.participant = message.participant;
    }
    if (message.round1Data.length !== 0) {
      obj.round1Data = base64FromBytes(message.round1Data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostRound1Data>, I>>(base?: I): MsgPostRound1Data {
    return MsgPostRound1Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostRound1Data>, I>>(object: I): MsgPostRound1Data {
    const message = createBaseMsgPostRound1Data();
    message.participant = object.participant ?? "";
    message.round1Data = object.round1Data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgPostRound1DataResponse(): MsgPostRound1DataResponse {
  return {};
}

export const MsgPostRound1DataResponse = {
  encode(_: MsgPostRound1DataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound1DataResponse {
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

  fromJSON(_: any): MsgPostRound1DataResponse {
    return {};
  },

  toJSON(_: MsgPostRound1DataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostRound1DataResponse>, I>>(base?: I): MsgPostRound1DataResponse {
    return MsgPostRound1DataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostRound1DataResponse>, I>>(_: I): MsgPostRound1DataResponse {
    const message = createBaseMsgPostRound1DataResponse();
    return message;
  },
};

function createBaseMsgPostRound2Data(): MsgPostRound2Data {
  return { participant: "", round2Data: {} };
}

export const MsgPostRound2Data = {
  encode(message: MsgPostRound2Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== "") {
      writer.uint32(10).string(message.participant);
    }
    Object.entries(message.round2Data).forEach(([key, value]) => {
      MsgPostRound2Data_Round2DataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2Data {
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

  fromJSON(object: any): MsgPostRound2Data {
    return {
      participant: isSet(object.participant) ? String(object.participant) : "",
      round2Data: isObject(object.round2Data)
        ? Object.entries(object.round2Data).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MsgPostRound2Data): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<MsgPostRound2Data>, I>>(base?: I): MsgPostRound2Data {
    return MsgPostRound2Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostRound2Data>, I>>(object: I): MsgPostRound2Data {
    const message = createBaseMsgPostRound2Data();
    message.participant = object.participant ?? "";
    message.round2Data = Object.entries(object.round2Data ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMsgPostRound2Data_Round2DataEntry(): MsgPostRound2Data_Round2DataEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const MsgPostRound2Data_Round2DataEntry = {
  encode(message: MsgPostRound2Data_Round2DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2Data_Round2DataEntry {
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

  fromJSON(object: any): MsgPostRound2Data_Round2DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgPostRound2Data_Round2DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostRound2Data_Round2DataEntry>, I>>(
    base?: I,
  ): MsgPostRound2Data_Round2DataEntry {
    return MsgPostRound2Data_Round2DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostRound2Data_Round2DataEntry>, I>>(
    object: I,
  ): MsgPostRound2Data_Round2DataEntry {
    const message = createBaseMsgPostRound2Data_Round2DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgPostRound2DataResponse(): MsgPostRound2DataResponse {
  return {};
}

export const MsgPostRound2DataResponse = {
  encode(_: MsgPostRound2DataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2DataResponse {
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

  fromJSON(_: any): MsgPostRound2DataResponse {
    return {};
  },

  toJSON(_: MsgPostRound2DataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPostRound2DataResponse>, I>>(base?: I): MsgPostRound2DataResponse {
    return MsgPostRound2DataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPostRound2DataResponse>, I>>(_: I): MsgPostRound2DataResponse {
    const message = createBaseMsgPostRound2DataResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * PostRound1Data defines an operation for posting round 1 data for each
   * participant. This is the first step in the key generation for forst
   * signatures.
   */
  PostRound1Data(request: MsgPostRound1Data): Promise<MsgPostRound1DataResponse>;
  /**
   * PostRound2Data defines an operation for posting round 2 data for each
   * participant This is the second step in the key generation for forst
   * signatures.
   */
  PostRound2Data(request: MsgPostRound2Data): Promise<MsgPostRound2DataResponse>;
}

export const MsgServiceName = "mycelia.mycelia.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.PostRound1Data = this.PostRound1Data.bind(this);
    this.PostRound2Data = this.PostRound2Data.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  PostRound1Data(request: MsgPostRound1Data): Promise<MsgPostRound1DataResponse> {
    const data = MsgPostRound1Data.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostRound1Data", data);
    return promise.then((data) => MsgPostRound1DataResponse.decode(_m0.Reader.create(data)));
  }

  PostRound2Data(request: MsgPostRound2Data): Promise<MsgPostRound2DataResponse> {
    const data = MsgPostRound2Data.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostRound2Data", data);
    return promise.then((data) => MsgPostRound2DataResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
