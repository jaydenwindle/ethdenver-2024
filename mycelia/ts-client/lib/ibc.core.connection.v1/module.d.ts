import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionParamsResponse } from "./types/ibc/core/connection/v1/query";
import { IdentifiedConnection } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionResponse } from "./types/ibc/core/connection/v1/query";
import { QueryClientConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenInitResponse } from "./types/ibc/core/connection/v1/tx";
import { Counterparty } from "./types/ibc/core/connection/v1/connection";
import { MsgUpdateParamsResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionPaths } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenTryResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAckResponse } from "./types/ibc/core/connection/v1/tx";
import { Params } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenConfirmResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionEnd } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateResponse } from "./types/ibc/core/connection/v1/query";
import { Version } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateRequest } from "./types/ibc/core/connection/v1/query";
import { MsgUpdateParams } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/ibc/core/connection/v1/query";
import { GenesisState } from "./types/ibc/core/connection/v1/genesis";
import { QueryConnectionConsensusStateResponse } from "./types/ibc/core/connection/v1/query";
import { QueryClientConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { ClientPaths } from "./types/ibc/core/connection/v1/connection";
export { MsgConnectionOpenAck, QueryConnectionParamsResponse, IdentifiedConnection, QueryConnectionResponse, QueryClientConnectionsResponse, MsgConnectionOpenInitResponse, Counterparty, MsgUpdateParamsResponse, ConnectionPaths, MsgConnectionOpenInit, QueryConnectionRequest, QueryConnectionsResponse, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, Params, MsgConnectionOpenConfirmResponse, ConnectionEnd, MsgConnectionOpenConfirm, MsgConnectionOpenTry, QueryConnectionClientStateResponse, Version, QueryConnectionsRequest, QueryConnectionConsensusStateRequest, MsgUpdateParams, QueryConnectionClientStateRequest, QueryConnectionParamsRequest, GenesisState, QueryConnectionConsensusStateResponse, QueryClientConnectionsRequest, ClientPaths };
type sendMsgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedConnectionParams = {
    value: IdentifiedConnection;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionResponseParams = {
    value: QueryConnectionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionPathsParams = {
    value: ConnectionPaths;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionRequestParams = {
    value: QueryConnectionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionEndParams = {
    value: ConnectionEnd;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVersionParams = {
    value: Version;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendClientPathsParams = {
    value: ClientPaths;
    fee?: StdFee;
    memo?: string;
};
type msgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
};
type queryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
};
type identifiedConnectionParams = {
    value: IdentifiedConnection;
};
type queryConnectionResponseParams = {
    value: QueryConnectionResponse;
};
type queryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
};
type msgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type connectionPathsParams = {
    value: ConnectionPaths;
};
type msgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
};
type queryConnectionRequestParams = {
    value: QueryConnectionRequest;
};
type queryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
};
type msgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
};
type msgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
};
type paramsParams = {
    value: Params;
};
type msgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
};
type connectionEndParams = {
    value: ConnectionEnd;
};
type msgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
};
type msgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
};
type queryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
};
type versionParams = {
    value: Version;
};
type queryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
};
type queryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
};
type queryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
};
type queryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
};
type clientPathsParams = {
    value: ClientPaths;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgConnectionOpenAck({ value, fee, memo }: sendMsgConnectionOpenAckParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsResponse({ value, fee, memo }: sendQueryConnectionParamsResponseParams): Promise<DeliverTxResponse>;
    sendIdentifiedConnection({ value, fee, memo }: sendIdentifiedConnectionParams): Promise<DeliverTxResponse>;
    sendQueryConnectionResponse({ value, fee, memo }: sendQueryConnectionResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsResponse({ value, fee, memo }: sendQueryClientConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInitResponse({ value, fee, memo }: sendMsgConnectionOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendConnectionPaths({ value, fee, memo }: sendConnectionPathsParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInit({ value, fee, memo }: sendMsgConnectionOpenInitParams): Promise<DeliverTxResponse>;
    sendQueryConnectionRequest({ value, fee, memo }: sendQueryConnectionRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsResponse({ value, fee, memo }: sendQueryConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTryResponse({ value, fee, memo }: sendMsgConnectionOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAckResponse({ value, fee, memo }: sendMsgConnectionOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirmResponse({ value, fee, memo }: sendMsgConnectionOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendConnectionEnd({ value, fee, memo }: sendConnectionEndParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirm({ value, fee, memo }: sendMsgConnectionOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTry({ value, fee, memo }: sendMsgConnectionOpenTryParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateResponse({ value, fee, memo }: sendQueryConnectionClientStateResponseParams): Promise<DeliverTxResponse>;
    sendVersion({ value, fee, memo }: sendVersionParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsRequest({ value, fee, memo }: sendQueryConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateRequest({ value, fee, memo }: sendQueryConnectionConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateRequest({ value, fee, memo }: sendQueryConnectionClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsRequest({ value, fee, memo }: sendQueryConnectionParamsRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateResponse({ value, fee, memo }: sendQueryConnectionConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsRequest({ value, fee, memo }: sendQueryClientConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendClientPaths({ value, fee, memo }: sendClientPathsParams): Promise<DeliverTxResponse>;
    msgConnectionOpenAck({ value }: msgConnectionOpenAckParams): EncodeObject;
    queryConnectionParamsResponse({ value }: queryConnectionParamsResponseParams): EncodeObject;
    identifiedConnection({ value }: identifiedConnectionParams): EncodeObject;
    queryConnectionResponse({ value }: queryConnectionResponseParams): EncodeObject;
    queryClientConnectionsResponse({ value }: queryClientConnectionsResponseParams): EncodeObject;
    msgConnectionOpenInitResponse({ value }: msgConnectionOpenInitResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    connectionPaths({ value }: connectionPathsParams): EncodeObject;
    msgConnectionOpenInit({ value }: msgConnectionOpenInitParams): EncodeObject;
    queryConnectionRequest({ value }: queryConnectionRequestParams): EncodeObject;
    queryConnectionsResponse({ value }: queryConnectionsResponseParams): EncodeObject;
    msgConnectionOpenTryResponse({ value }: msgConnectionOpenTryResponseParams): EncodeObject;
    msgConnectionOpenAckResponse({ value }: msgConnectionOpenAckResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgConnectionOpenConfirmResponse({ value }: msgConnectionOpenConfirmResponseParams): EncodeObject;
    connectionEnd({ value }: connectionEndParams): EncodeObject;
    msgConnectionOpenConfirm({ value }: msgConnectionOpenConfirmParams): EncodeObject;
    msgConnectionOpenTry({ value }: msgConnectionOpenTryParams): EncodeObject;
    queryConnectionClientStateResponse({ value }: queryConnectionClientStateResponseParams): EncodeObject;
    version({ value }: versionParams): EncodeObject;
    queryConnectionsRequest({ value }: queryConnectionsRequestParams): EncodeObject;
    queryConnectionConsensusStateRequest({ value }: queryConnectionConsensusStateRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryConnectionClientStateRequest({ value }: queryConnectionClientStateRequestParams): EncodeObject;
    queryConnectionParamsRequest({ value }: queryConnectionParamsRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryConnectionConsensusStateResponse({ value }: queryConnectionConsensusStateResponseParams): EncodeObject;
    queryClientConnectionsRequest({ value }: queryClientConnectionsRequestParams): EncodeObject;
    clientPaths({ value }: clientPathsParams): EncodeObject;
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
        IbcCoreConnectionV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
