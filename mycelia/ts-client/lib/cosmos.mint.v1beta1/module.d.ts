import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Minter } from "./types/cosmos/mint/v1beta1/mint";
import { QueryInflationRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryInflationResponse } from "./types/cosmos/mint/v1beta1/query";
import { Params } from "./types/cosmos/mint/v1beta1/mint";
import { MsgUpdateParams } from "./types/cosmos/mint/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/mint/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/mint/v1beta1/query";
import { GenesisState } from "./types/cosmos/mint/v1beta1/genesis";
import { QueryParamsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsRequest } from "./types/cosmos/mint/v1beta1/query";
export { Minter, QueryInflationRequest, QueryAnnualProvisionsResponse, QueryInflationResponse, Params, MsgUpdateParams, MsgUpdateParamsResponse, QueryParamsResponse, GenesisState, QueryParamsRequest, QueryAnnualProvisionsRequest };
type sendMinterParams = {
    value: Minter;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationRequestParams = {
    value: QueryInflationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationResponseParams = {
    value: QueryInflationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
    fee?: StdFee;
    memo?: string;
};
type minterParams = {
    value: Minter;
};
type queryInflationRequestParams = {
    value: QueryInflationRequest;
};
type queryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
};
type queryInflationResponseParams = {
    value: QueryInflationResponse;
};
type paramsParams = {
    value: Params;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMinter({ value, fee, memo }: sendMinterParams): Promise<DeliverTxResponse>;
    sendQueryInflationRequest({ value, fee, memo }: sendQueryInflationRequestParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsResponse({ value, fee, memo }: sendQueryAnnualProvisionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInflationResponse({ value, fee, memo }: sendQueryInflationResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsRequest({ value, fee, memo }: sendQueryAnnualProvisionsRequestParams): Promise<DeliverTxResponse>;
    minter({ value }: minterParams): EncodeObject;
    queryInflationRequest({ value }: queryInflationRequestParams): EncodeObject;
    queryAnnualProvisionsResponse({ value }: queryAnnualProvisionsResponseParams): EncodeObject;
    queryInflationResponse({ value }: queryInflationResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryAnnualProvisionsRequest({ value }: queryAnnualProvisionsRequestParams): EncodeObject;
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
        CosmosMintV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
