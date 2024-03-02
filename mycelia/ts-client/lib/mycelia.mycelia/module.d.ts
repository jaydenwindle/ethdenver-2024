import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgPostRound1Data } from "./types/mycelia/mycelia/tx";
import { QueryRound1Data } from "./types/mycelia/mycelia/query";
import { QueryRound2Data } from "./types/mycelia/mycelia/query";
import { MsgUpdateParamsResponse } from "./types/mycelia/mycelia/tx";
import { QueryParamsRequest } from "./types/mycelia/mycelia/query";
import { QueryRound1DataResponse } from "./types/mycelia/mycelia/query";
import { MsgPostRound2Data } from "./types/mycelia/mycelia/tx";
import { QueryParamsResponse } from "./types/mycelia/mycelia/query";
import { Params } from "./types/mycelia/mycelia/params";
import { GenesisState } from "./types/mycelia/mycelia/genesis";
import { MsgUpdateParams } from "./types/mycelia/mycelia/tx";
import { MsgPostRound1DataResponse } from "./types/mycelia/mycelia/tx";
import { MsgPostRound2DataResponse } from "./types/mycelia/mycelia/tx";
import { QueryRound2DataResponse } from "./types/mycelia/mycelia/query";
export { MsgPostRound1Data, QueryRound1Data, QueryRound2Data, MsgUpdateParamsResponse, QueryParamsRequest, QueryRound1DataResponse, MsgPostRound2Data, QueryParamsResponse, Params, GenesisState, MsgUpdateParams, MsgPostRound1DataResponse, MsgPostRound2DataResponse, QueryRound2DataResponse };
type sendMsgPostRound1DataParams = {
    value: MsgPostRound1Data;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRound1DataParams = {
    value: QueryRound1Data;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRound2DataParams = {
    value: QueryRound2Data;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRound1DataResponseParams = {
    value: QueryRound1DataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPostRound2DataParams = {
    value: MsgPostRound2Data;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPostRound1DataResponseParams = {
    value: MsgPostRound1DataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPostRound2DataResponseParams = {
    value: MsgPostRound2DataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRound2DataResponseParams = {
    value: QueryRound2DataResponse;
    fee?: StdFee;
    memo?: string;
};
type msgPostRound1DataParams = {
    value: MsgPostRound1Data;
};
type queryRound1DataParams = {
    value: QueryRound1Data;
};
type queryRound2DataParams = {
    value: QueryRound2Data;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryRound1DataResponseParams = {
    value: QueryRound1DataResponse;
};
type msgPostRound2DataParams = {
    value: MsgPostRound2Data;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type paramsParams = {
    value: Params;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgPostRound1DataResponseParams = {
    value: MsgPostRound1DataResponse;
};
type msgPostRound2DataResponseParams = {
    value: MsgPostRound2DataResponse;
};
type queryRound2DataResponseParams = {
    value: QueryRound2DataResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgPostRound1Data({ value, fee, memo }: sendMsgPostRound1DataParams): Promise<DeliverTxResponse>;
    sendQueryRound1Data({ value, fee, memo }: sendQueryRound1DataParams): Promise<DeliverTxResponse>;
    sendQueryRound2Data({ value, fee, memo }: sendQueryRound2DataParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryRound1DataResponse({ value, fee, memo }: sendQueryRound1DataResponseParams): Promise<DeliverTxResponse>;
    sendMsgPostRound2Data({ value, fee, memo }: sendMsgPostRound2DataParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgPostRound1DataResponse({ value, fee, memo }: sendMsgPostRound1DataResponseParams): Promise<DeliverTxResponse>;
    sendMsgPostRound2DataResponse({ value, fee, memo }: sendMsgPostRound2DataResponseParams): Promise<DeliverTxResponse>;
    sendQueryRound2DataResponse({ value, fee, memo }: sendQueryRound2DataResponseParams): Promise<DeliverTxResponse>;
    msgPostRound1Data({ value }: msgPostRound1DataParams): EncodeObject;
    queryRound1Data({ value }: queryRound1DataParams): EncodeObject;
    queryRound2Data({ value }: queryRound2DataParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryRound1DataResponse({ value }: queryRound1DataResponseParams): EncodeObject;
    msgPostRound2Data({ value }: msgPostRound2DataParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgPostRound1DataResponse({ value }: msgPostRound1DataResponseParams): EncodeObject;
    msgPostRound2DataResponse({ value }: msgPostRound2DataResponseParams): EncodeObject;
    queryRound2DataResponse({ value }: queryRound2DataResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        MyceliaMycelia: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
