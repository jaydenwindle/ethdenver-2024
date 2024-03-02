import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
export { QueryNFTsResponse, QueryBalanceRequest, Class, Entry, NFT, QueryNFTResponse, MsgSendResponse, GenesisState, QuerySupplyRequest, QuerySupplyResponse, QueryNFTRequest, EventMint, EventBurn, QueryBalanceResponse, QueryOwnerResponse, EventSend, QueryClassesResponse, QueryClassRequest, QueryOwnerRequest, QueryNFTsRequest, QueryClassResponse, QueryClassesRequest, MsgSend };
type sendQueryNFTsResponseParams = {
    value: QueryNFTsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendClassParams = {
    value: Class;
    fee?: StdFee;
    memo?: string;
};
type sendEntryParams = {
    value: Entry;
    fee?: StdFee;
    memo?: string;
};
type sendNFTParams = {
    value: NFT;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTResponseParams = {
    value: QueryNFTResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyRequestParams = {
    value: QuerySupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyResponseParams = {
    value: QuerySupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTRequestParams = {
    value: QueryNFTRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventMintParams = {
    value: EventMint;
    fee?: StdFee;
    memo?: string;
};
type sendEventBurnParams = {
    value: EventBurn;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerResponseParams = {
    value: QueryOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventSendParams = {
    value: EventSend;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesResponseParams = {
    value: QueryClassesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassRequestParams = {
    value: QueryClassRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerRequestParams = {
    value: QueryOwnerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsRequestParams = {
    value: QueryNFTsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassResponseParams = {
    value: QueryClassResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesRequestParams = {
    value: QueryClassesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type queryNftsResponseParams = {
    value: QueryNFTsResponse;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type classParams = {
    value: Class;
};
type entryParams = {
    value: Entry;
};
type nftParams = {
    value: NFT;
};
type queryNftresponseParams = {
    value: QueryNFTResponse;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type querySupplyRequestParams = {
    value: QuerySupplyRequest;
};
type querySupplyResponseParams = {
    value: QuerySupplyResponse;
};
type queryNftrequestParams = {
    value: QueryNFTRequest;
};
type eventMintParams = {
    value: EventMint;
};
type eventBurnParams = {
    value: EventBurn;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryOwnerResponseParams = {
    value: QueryOwnerResponse;
};
type eventSendParams = {
    value: EventSend;
};
type queryClassesResponseParams = {
    value: QueryClassesResponse;
};
type queryClassRequestParams = {
    value: QueryClassRequest;
};
type queryOwnerRequestParams = {
    value: QueryOwnerRequest;
};
type queryNftsRequestParams = {
    value: QueryNFTsRequest;
};
type queryClassResponseParams = {
    value: QueryClassResponse;
};
type queryClassesRequestParams = {
    value: QueryClassesRequest;
};
type msgSendParams = {
    value: MsgSend;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryNFTsResponse({ value, fee, memo }: sendQueryNFTsResponseParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendClass({ value, fee, memo }: sendClassParams): Promise<DeliverTxResponse>;
    sendEntry({ value, fee, memo }: sendEntryParams): Promise<DeliverTxResponse>;
    sendNFT({ value, fee, memo }: sendNFTParams): Promise<DeliverTxResponse>;
    sendQueryNFTResponse({ value, fee, memo }: sendQueryNFTResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQuerySupplyRequest({ value, fee, memo }: sendQuerySupplyRequestParams): Promise<DeliverTxResponse>;
    sendQuerySupplyResponse({ value, fee, memo }: sendQuerySupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTRequest({ value, fee, memo }: sendQueryNFTRequestParams): Promise<DeliverTxResponse>;
    sendEventMint({ value, fee, memo }: sendEventMintParams): Promise<DeliverTxResponse>;
    sendEventBurn({ value, fee, memo }: sendEventBurnParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryOwnerResponse({ value, fee, memo }: sendQueryOwnerResponseParams): Promise<DeliverTxResponse>;
    sendEventSend({ value, fee, memo }: sendEventSendParams): Promise<DeliverTxResponse>;
    sendQueryClassesResponse({ value, fee, memo }: sendQueryClassesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassRequest({ value, fee, memo }: sendQueryClassRequestParams): Promise<DeliverTxResponse>;
    sendQueryOwnerRequest({ value, fee, memo }: sendQueryOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTsRequest({ value, fee, memo }: sendQueryNFTsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassResponse({ value, fee, memo }: sendQueryClassResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassesRequest({ value, fee, memo }: sendQueryClassesRequestParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    queryNftsResponse({ value }: queryNftsResponseParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    class({ value }: classParams): EncodeObject;
    entry({ value }: entryParams): EncodeObject;
    nft({ value }: nftParams): EncodeObject;
    queryNftresponse({ value }: queryNftresponseParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    querySupplyRequest({ value }: querySupplyRequestParams): EncodeObject;
    querySupplyResponse({ value }: querySupplyResponseParams): EncodeObject;
    queryNftrequest({ value }: queryNftrequestParams): EncodeObject;
    eventMint({ value }: eventMintParams): EncodeObject;
    eventBurn({ value }: eventBurnParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryOwnerResponse({ value }: queryOwnerResponseParams): EncodeObject;
    eventSend({ value }: eventSendParams): EncodeObject;
    queryClassesResponse({ value }: queryClassesResponseParams): EncodeObject;
    queryClassRequest({ value }: queryClassRequestParams): EncodeObject;
    queryOwnerRequest({ value }: queryOwnerRequestParams): EncodeObject;
    queryNftsRequest({ value }: queryNftsRequestParams): EncodeObject;
    queryClassResponse({ value }: queryClassResponseParams): EncodeObject;
    queryClassesRequest({ value }: queryClassesRequestParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
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
        CosmosNftV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
