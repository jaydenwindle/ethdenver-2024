import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "mycelia.mycelia";
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
    round2Data: {
        [key: string]: Uint8Array;
    };
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
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgPostRound1Data: {
    encode(message: MsgPostRound1Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound1Data;
    fromJSON(object: any): MsgPostRound1Data;
    toJSON(message: MsgPostRound1Data): unknown;
    create<I extends {
        participant?: string;
        round1Data?: Uint8Array;
    } & {
        participant?: string;
        round1Data?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof MsgPostRound1Data>]: never; }>(base?: I): MsgPostRound1Data;
    fromPartial<I_1 extends {
        participant?: string;
        round1Data?: Uint8Array;
    } & {
        participant?: string;
        round1Data?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgPostRound1Data>]: never; }>(object: I_1): MsgPostRound1Data;
};
export declare const MsgPostRound1DataResponse: {
    encode(_: MsgPostRound1DataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound1DataResponse;
    fromJSON(_: any): MsgPostRound1DataResponse;
    toJSON(_: MsgPostRound1DataResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgPostRound1DataResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPostRound1DataResponse;
};
export declare const MsgPostRound2Data: {
    encode(message: MsgPostRound2Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2Data;
    fromJSON(object: any): MsgPostRound2Data;
    toJSON(message: MsgPostRound2Data): unknown;
    create<I extends {
        participant?: string;
        round2Data?: {
            [x: string]: Uint8Array;
        };
    } & {
        participant?: string;
        round2Data?: {
            [x: string]: Uint8Array;
        } & {
            [x: string]: Uint8Array;
        } & { [K in Exclude<keyof I["round2Data"], string | number>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgPostRound2Data>]: never; }>(base?: I): MsgPostRound2Data;
    fromPartial<I_1 extends {
        participant?: string;
        round2Data?: {
            [x: string]: Uint8Array;
        };
    } & {
        participant?: string;
        round2Data?: {
            [x: string]: Uint8Array;
        } & {
            [x: string]: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["round2Data"], string | number>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgPostRound2Data>]: never; }>(object: I_1): MsgPostRound2Data;
};
export declare const MsgPostRound2Data_Round2DataEntry: {
    encode(message: MsgPostRound2Data_Round2DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2Data_Round2DataEntry;
    fromJSON(object: any): MsgPostRound2Data_Round2DataEntry;
    toJSON(message: MsgPostRound2Data_Round2DataEntry): unknown;
    create<I extends {
        key?: string;
        value?: Uint8Array;
    } & {
        key?: string;
        value?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof MsgPostRound2Data_Round2DataEntry>]: never; }>(base?: I): MsgPostRound2Data_Round2DataEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: Uint8Array;
    } & {
        key?: string;
        value?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgPostRound2Data_Round2DataEntry>]: never; }>(object: I_1): MsgPostRound2Data_Round2DataEntry;
};
export declare const MsgPostRound2DataResponse: {
    encode(_: MsgPostRound2DataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostRound2DataResponse;
    fromJSON(_: any): MsgPostRound2DataResponse;
    toJSON(_: MsgPostRound2DataResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgPostRound2DataResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPostRound2DataResponse;
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
export declare const MsgServiceName = "mycelia.mycelia.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    PostRound1Data(request: MsgPostRound1Data): Promise<MsgPostRound1DataResponse>;
    PostRound2Data(request: MsgPostRound2Data): Promise<MsgPostRound2DataResponse>;
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
