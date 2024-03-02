import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { GenesisState } from "./types/ibc/applications/transfer/v1/genesis";
import { QueryDenomHashRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomTracesResponse } from "./types/ibc/applications/transfer/v1/query";
import { MsgTransfer } from "./types/ibc/applications/transfer/v1/tx";
import { QueryDenomTracesRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomHashResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryParamsResponse } from "./types/ibc/applications/transfer/v1/query";
import { DenomTrace } from "./types/ibc/applications/transfer/v1/transfer";
import { Allocation } from "./types/ibc/applications/transfer/v1/authz";
import { MsgUpdateParams } from "./types/ibc/applications/transfer/v1/tx";
import { QueryDenomTraceResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressRequest } from "./types/ibc/applications/transfer/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/transfer/v1/tx";
import { QueryDenomTraceRequest } from "./types/ibc/applications/transfer/v1/query";
import { Params } from "./types/ibc/applications/transfer/v1/transfer";
import { TransferAuthorization } from "./types/ibc/applications/transfer/v1/authz";
import { MsgTransferResponse } from "./types/ibc/applications/transfer/v1/tx";
export { GenesisState, QueryDenomHashRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse, QueryParamsRequest, QueryDenomTracesResponse, MsgTransfer, QueryDenomTracesRequest, QueryDenomHashResponse, QueryParamsResponse, DenomTrace, Allocation, MsgUpdateParams, QueryDenomTraceResponse, QueryEscrowAddressRequest, MsgUpdateParamsResponse, QueryDenomTraceRequest, Params, TransferAuthorization, MsgTransferResponse };
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferParams = {
    value: MsgTransfer;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomTraceParams = {
    value: DenomTrace;
    fee?: StdFee;
    memo?: string;
};
type sendAllocationParams = {
    value: Allocation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendTransferAuthorizationParams = {
    value: TransferAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferResponseParams = {
    value: MsgTransferResponse;
    fee?: StdFee;
    memo?: string;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
};
type queryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
};
type queryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
};
type queryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
};
type msgTransferParams = {
    value: MsgTransfer;
};
type queryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
};
type queryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type denomTraceParams = {
    value: DenomTrace;
};
type allocationParams = {
    value: Allocation;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
};
type queryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
};
type paramsParams = {
    value: Params;
};
type transferAuthorizationParams = {
    value: TransferAuthorization;
};
type msgTransferResponseParams = {
    value: MsgTransferResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryDenomHashRequest({ value, fee, memo }: sendQueryDenomHashRequestParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressResponse({ value, fee, memo }: sendQueryEscrowAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomRequest({ value, fee, memo }: sendQueryTotalEscrowForDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomResponse({ value, fee, memo }: sendQueryTotalEscrowForDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesResponse({ value, fee, memo }: sendQueryDenomTracesResponseParams): Promise<DeliverTxResponse>;
    sendMsgTransfer({ value, fee, memo }: sendMsgTransferParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesRequest({ value, fee, memo }: sendQueryDenomTracesRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomHashResponse({ value, fee, memo }: sendQueryDenomHashResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendDenomTrace({ value, fee, memo }: sendDenomTraceParams): Promise<DeliverTxResponse>;
    sendAllocation({ value, fee, memo }: sendAllocationParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceResponse({ value, fee, memo }: sendQueryDenomTraceResponseParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressRequest({ value, fee, memo }: sendQueryEscrowAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceRequest({ value, fee, memo }: sendQueryDenomTraceRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendTransferAuthorization({ value, fee, memo }: sendTransferAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgTransferResponse({ value, fee, memo }: sendMsgTransferResponseParams): Promise<DeliverTxResponse>;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryDenomHashRequest({ value }: queryDenomHashRequestParams): EncodeObject;
    queryEscrowAddressResponse({ value }: queryEscrowAddressResponseParams): EncodeObject;
    queryTotalEscrowForDenomRequest({ value }: queryTotalEscrowForDenomRequestParams): EncodeObject;
    queryTotalEscrowForDenomResponse({ value }: queryTotalEscrowForDenomResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDenomTracesResponse({ value }: queryDenomTracesResponseParams): EncodeObject;
    msgTransfer({ value }: msgTransferParams): EncodeObject;
    queryDenomTracesRequest({ value }: queryDenomTracesRequestParams): EncodeObject;
    queryDenomHashResponse({ value }: queryDenomHashResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    denomTrace({ value }: denomTraceParams): EncodeObject;
    allocation({ value }: allocationParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryDenomTraceResponse({ value }: queryDenomTraceResponseParams): EncodeObject;
    queryEscrowAddressRequest({ value }: queryEscrowAddressRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryDenomTraceRequest({ value }: queryDenomTraceRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    transferAuthorization({ value }: transferAuthorizationParams): EncodeObject;
    msgTransferResponse({ value }: msgTransferResponseParams): EncodeObject;
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
        IbcApplicationsTransferV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
