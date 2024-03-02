import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "mycelia.mycelia";
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryRound1Data: {
    encode(_: QueryRound1Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound1Data;
    fromJSON(_: any): QueryRound1Data;
    toJSON(_: QueryRound1Data): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryRound1Data;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryRound1Data;
};
export declare const QueryRound1DataResponse: {
    encode(message: QueryRound1DataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound1DataResponse;
    fromJSON(object: any): QueryRound1DataResponse;
    toJSON(message: QueryRound1DataResponse): unknown;
    create<I extends {
        accumlatedRound1Data?: Uint8Array;
    } & {
        accumlatedRound1Data?: Uint8Array;
    } & { [K in Exclude<keyof I, "accumlatedRound1Data">]: never; }>(base?: I): QueryRound1DataResponse;
    fromPartial<I_1 extends {
        accumlatedRound1Data?: Uint8Array;
    } & {
        accumlatedRound1Data?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "accumlatedRound1Data">]: never; }>(object: I_1): QueryRound1DataResponse;
};
export declare const QueryRound2Data: {
    encode(message: QueryRound2Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound2Data;
    fromJSON(object: any): QueryRound2Data;
    toJSON(message: QueryRound2Data): unknown;
    create<I extends {
        identifier?: string;
    } & {
        identifier?: string;
    } & { [K in Exclude<keyof I, "identifier">]: never; }>(base?: I): QueryRound2Data;
    fromPartial<I_1 extends {
        identifier?: string;
    } & {
        identifier?: string;
    } & { [K_1 in Exclude<keyof I_1, "identifier">]: never; }>(object: I_1): QueryRound2Data;
};
export declare const QueryRound2DataResponse: {
    encode(message: QueryRound2DataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRound2DataResponse;
    fromJSON(object: any): QueryRound2DataResponse;
    toJSON(message: QueryRound2DataResponse): unknown;
    create<I extends {
        accumlatedRound2Data?: Uint8Array;
    } & {
        accumlatedRound2Data?: Uint8Array;
    } & { [K in Exclude<keyof I, "accumlatedRound2Data">]: never; }>(base?: I): QueryRound2DataResponse;
    fromPartial<I_1 extends {
        accumlatedRound2Data?: Uint8Array;
    } & {
        accumlatedRound2Data?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "accumlatedRound2Data">]: never; }>(object: I_1): QueryRound2DataResponse;
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
export declare const QueryServiceName = "mycelia.mycelia.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Round1Data(request: QueryRound1Data): Promise<QueryRound1DataResponse>;
    Round2Data(request: QueryRound2Data): Promise<QueryRound2DataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
