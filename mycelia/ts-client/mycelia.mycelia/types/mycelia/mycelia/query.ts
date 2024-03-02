/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "mycelia.mycelia";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/** QueryRound1Data is request type for the Query/Round1Data RPC method. */
export interface QueryRound1Data {
}

/** QueryRound1DataResponse is response type for the Query/Round1Data RPC method. */
export interface QueryRound1DataResponse {
  accumlatedRound1Data: Uint8Array;
}

/** QueryRound2Data is request type for the Query/Round2Data RPC method. */
export interface QueryRound2Data {
  identifier: string;
}

/** QueryRound2DataResponse is response type for the Query/Round2Data RPC method. */
export interface QueryRound2DataResponse {
  accumlatedRound2Data: Uint8Array;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRound1Data(): QueryRound1Data {
  return {};
}

export const QueryRound1Data = {
  encode(_: QueryRound1Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound1Data {
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

  fromJSON(_: any): QueryRound1Data {
    return {};
  },

  toJSON(_: QueryRound1Data): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRound1Data>, I>>(base?: I): QueryRound1Data {
    return QueryRound1Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRound1Data>, I>>(_: I): QueryRound1Data {
    const message = createBaseQueryRound1Data();
    return message;
  },
};

function createBaseQueryRound1DataResponse(): QueryRound1DataResponse {
  return { accumlatedRound1Data: new Uint8Array(0) };
}

export const QueryRound1DataResponse = {
  encode(message: QueryRound1DataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accumlatedRound1Data.length !== 0) {
      writer.uint32(10).bytes(message.accumlatedRound1Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound1DataResponse {
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

  fromJSON(object: any): QueryRound1DataResponse {
    return {
      accumlatedRound1Data: isSet(object.accumlatedRound1Data)
        ? bytesFromBase64(object.accumlatedRound1Data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: QueryRound1DataResponse): unknown {
    const obj: any = {};
    if (message.accumlatedRound1Data.length !== 0) {
      obj.accumlatedRound1Data = base64FromBytes(message.accumlatedRound1Data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRound1DataResponse>, I>>(base?: I): QueryRound1DataResponse {
    return QueryRound1DataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRound1DataResponse>, I>>(object: I): QueryRound1DataResponse {
    const message = createBaseQueryRound1DataResponse();
    message.accumlatedRound1Data = object.accumlatedRound1Data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryRound2Data(): QueryRound2Data {
  return { identifier: "" };
}

export const QueryRound2Data = {
  encode(message: QueryRound2Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound2Data {
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

  fromJSON(object: any): QueryRound2Data {
    return { identifier: isSet(object.identifier) ? String(object.identifier) : "" };
  },

  toJSON(message: QueryRound2Data): unknown {
    const obj: any = {};
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRound2Data>, I>>(base?: I): QueryRound2Data {
    return QueryRound2Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRound2Data>, I>>(object: I): QueryRound2Data {
    const message = createBaseQueryRound2Data();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseQueryRound2DataResponse(): QueryRound2DataResponse {
  return { accumlatedRound2Data: new Uint8Array(0) };
}

export const QueryRound2DataResponse = {
  encode(message: QueryRound2DataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accumlatedRound2Data.length !== 0) {
      writer.uint32(10).bytes(message.accumlatedRound2Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound2DataResponse {
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

  fromJSON(object: any): QueryRound2DataResponse {
    return {
      accumlatedRound2Data: isSet(object.accumlatedRound2Data)
        ? bytesFromBase64(object.accumlatedRound2Data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: QueryRound2DataResponse): unknown {
    const obj: any = {};
    if (message.accumlatedRound2Data.length !== 0) {
      obj.accumlatedRound2Data = base64FromBytes(message.accumlatedRound2Data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRound2DataResponse>, I>>(base?: I): QueryRound2DataResponse {
    return QueryRound2DataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRound2DataResponse>, I>>(object: I): QueryRound2DataResponse {
    const message = createBaseQueryRound2DataResponse();
    message.accumlatedRound2Data = object.accumlatedRound2Data ?? new Uint8Array(0);
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Round1Data queries the the round 1 data of all the participants in the dkg */
  Round1Data(request: QueryRound1Data): Promise<QueryRound1DataResponse>;
  /** Round2Data queries the the round 2 data of all the participants in the dkg */
  Round2Data(request: QueryRound2Data): Promise<QueryRound2DataResponse>;
}

export const QueryServiceName = "mycelia.mycelia.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Round1Data = this.Round1Data.bind(this);
    this.Round2Data = this.Round2Data.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Round1Data(request: QueryRound1Data): Promise<QueryRound1DataResponse> {
    const data = QueryRound1Data.encode(request).finish();
    const promise = this.rpc.request(this.service, "Round1Data", data);
    return promise.then((data) => QueryRound1DataResponse.decode(_m0.Reader.create(data)));
  }

  Round2Data(request: QueryRound2Data): Promise<QueryRound2DataResponse> {
    const data = QueryRound2Data.encode(request).finish();
    const promise = this.rpc.request(this.service, "Round2Data", data);
    return promise.then((data) => QueryRound2DataResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
