import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { RedelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { MsgUndelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/staking/v1beta1/query";
import { DVPair } from "./types/cosmos/staking/v1beta1/staking";
import { Params } from "./types/cosmos/staking/v1beta1/staking";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/tx";
import { StakeAuthorization } from "./types/cosmos/staking/v1beta1/authz";
import { QueryValidatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/staking/v1beta1/query";
import { UnbondingDelegation } from "./types/cosmos/staking/v1beta1/staking";
import { Pool } from "./types/cosmos/staking/v1beta1/staking";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { Description } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplet } from "./types/cosmos/staking/v1beta1/staking";
import { QueryPoolResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoRequest } from "./types/cosmos/staking/v1beta1/query";
import { Delegation } from "./types/cosmos/staking/v1beta1/staking";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { Commission } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplets } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgDelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoResponse } from "./types/cosmos/staking/v1beta1/query";
import { CommissionRates } from "./types/cosmos/staking/v1beta1/staking";
import { QueryRedelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { RedelegationEntryResponse } from "./types/cosmos/staking/v1beta1/staking";
import { MsgUpdateParams } from "./types/cosmos/staking/v1beta1/tx";
import { QueryRedelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { HistoricalInfo } from "./types/cosmos/staking/v1beta1/staking";
import { UnbondingDelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolRequest } from "./types/cosmos/staking/v1beta1/query";
import { Validator } from "./types/cosmos/staking/v1beta1/staking";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryUnbondingDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { GenesisState } from "./types/cosmos/staking/v1beta1/genesis";
import { QueryDelegatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { DelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { ValidatorUpdates } from "./types/cosmos/staking/v1beta1/staking";
import { MsgCreateValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { LastValidatorPower } from "./types/cosmos/staking/v1beta1/genesis";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { ValAddresses } from "./types/cosmos/staking/v1beta1/staking";
import { DVPairs } from "./types/cosmos/staking/v1beta1/staking";
import { Redelegation } from "./types/cosmos/staking/v1beta1/staking";
import { MsgEditValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/staking/v1beta1/tx";
import { StakeAuthorization_Validators } from "./types/cosmos/staking/v1beta1/authz";
export { RedelegationEntry, MsgUndelegateResponse, QueryParamsResponse, DVPair, Params, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, StakeAuthorization, QueryValidatorDelegationsRequest, QueryDelegatorValidatorResponse, QueryParamsRequest, UnbondingDelegation, Pool, MsgEditValidator, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponse, Description, DVVTriplet, QueryPoolResponse, QueryHistoricalInfoRequest, Delegation, MsgCreateValidator, QueryDelegationResponse, Commission, DVVTriplets, RedelegationResponse, MsgDelegate, QueryValidatorRequest, MsgDelegateResponse, QueryValidatorsRequest, QueryValidatorResponse, QueryHistoricalInfoResponse, CommissionRates, QueryRedelegationsRequest, QueryDelegatorValidatorRequest, RedelegationEntryResponse, MsgUpdateParams, QueryRedelegationsResponse, HistoricalInfo, UnbondingDelegationEntry, QueryDelegatorUnbondingDelegationsRequest, QueryPoolRequest, Validator, MsgBeginRedelegate, QueryValidatorsResponse, QueryUnbondingDelegationRequest, QueryDelegatorValidatorsRequest, GenesisState, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, DelegationResponse, ValidatorUpdates, MsgCreateValidatorResponse, LastValidatorPower, QueryDelegatorValidatorsResponse, ValAddresses, DVPairs, Redelegation, MsgEditValidatorResponse, MsgBeginRedelegateResponse, QueryDelegationRequest, QueryUnbondingDelegationResponse, MsgUndelegate, MsgUpdateParamsResponse, StakeAuthorization_Validators };
type sendRedelegationEntryParams = {
    value: RedelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairParams = {
    value: DVPair;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorizationParams = {
    value: StakeAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationParams = {
    value: UnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendPoolParams = {
    value: Pool;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorParams = {
    value: MsgEditValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDescriptionParams = {
    value: Description;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletParams = {
    value: DVVTriplet;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolResponseParams = {
    value: QueryPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationParams = {
    value: Delegation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorParams = {
    value: MsgCreateValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationResponseParams = {
    value: QueryDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionParams = {
    value: Commission;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletsParams = {
    value: DVVTriplets;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationResponseParams = {
    value: RedelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateParams = {
    value: MsgDelegate;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorRequestParams = {
    value: QueryValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateResponseParams = {
    value: MsgDelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorResponseParams = {
    value: QueryValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionRatesParams = {
    value: CommissionRates;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendHistoricalInfoParams = {
    value: HistoricalInfo;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolRequestParams = {
    value: QueryPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationResponseParams = {
    value: DelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorUpdatesParams = {
    value: ValidatorUpdates;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendLastValidatorPowerParams = {
    value: LastValidatorPower;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValAddressesParams = {
    value: ValAddresses;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairsParams = {
    value: DVPairs;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationParams = {
    value: Redelegation;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRequestParams = {
    value: QueryDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateParams = {
    value: MsgUndelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorization_ValidatorsParams = {
    value: StakeAuthorization_Validators;
    fee?: StdFee;
    memo?: string;
};
type redelegationEntryParams = {
    value: RedelegationEntry;
};
type msgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type dvpairParams = {
    value: DVPair;
};
type paramsParams = {
    value: Params;
};
type msgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
};
type msgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
};
type stakeAuthorizationParams = {
    value: StakeAuthorization;
};
type queryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
};
type queryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type unbondingDelegationParams = {
    value: UnbondingDelegation;
};
type poolParams = {
    value: Pool;
};
type msgEditValidatorParams = {
    value: MsgEditValidator;
};
type queryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
};
type queryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
};
type queryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
};
type queryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
};
type descriptionParams = {
    value: Description;
};
type dvvtripletParams = {
    value: DVVTriplet;
};
type queryPoolResponseParams = {
    value: QueryPoolResponse;
};
type queryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
};
type delegationParams = {
    value: Delegation;
};
type msgCreateValidatorParams = {
    value: MsgCreateValidator;
};
type queryDelegationResponseParams = {
    value: QueryDelegationResponse;
};
type commissionParams = {
    value: Commission;
};
type dvvtripletsParams = {
    value: DVVTriplets;
};
type redelegationResponseParams = {
    value: RedelegationResponse;
};
type msgDelegateParams = {
    value: MsgDelegate;
};
type queryValidatorRequestParams = {
    value: QueryValidatorRequest;
};
type msgDelegateResponseParams = {
    value: MsgDelegateResponse;
};
type queryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
};
type queryValidatorResponseParams = {
    value: QueryValidatorResponse;
};
type queryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
};
type commissionRatesParams = {
    value: CommissionRates;
};
type queryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
};
type queryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
};
type redelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
};
type historicalInfoParams = {
    value: HistoricalInfo;
};
type unbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
};
type queryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
};
type queryPoolRequestParams = {
    value: QueryPoolRequest;
};
type validatorParams = {
    value: Validator;
};
type msgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
};
type queryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
};
type queryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
};
type queryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
};
type delegationResponseParams = {
    value: DelegationResponse;
};
type validatorUpdatesParams = {
    value: ValidatorUpdates;
};
type msgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
};
type lastValidatorPowerParams = {
    value: LastValidatorPower;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type valAddressesParams = {
    value: ValAddresses;
};
type dvpairsParams = {
    value: DVPairs;
};
type redelegationParams = {
    value: Redelegation;
};
type msgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
};
type msgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
};
type queryDelegationRequestParams = {
    value: QueryDelegationRequest;
};
type queryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
};
type msgUndelegateParams = {
    value: MsgUndelegate;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type stakeAuthorizationValidatorsParams = {
    value: StakeAuthorization_Validators;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse>;
    sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsRequest({ value, fee, memo }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorResponse({ value, fee, memo }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse>;
    sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsResponse({ value, fee, memo }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse>;
    sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse>;
    sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoRequest({ value, fee, memo }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse>;
    sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse>;
    sendQueryDelegationResponse({ value, fee, memo }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse>;
    sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse>;
    sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse>;
    sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse>;
    sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse>;
    sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse>;
    sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsRequest({ value, fee, memo }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorResponse({ value, fee, memo }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoResponse({ value, fee, memo }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse>;
    sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsRequest({ value, fee, memo }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorRequest({ value, fee, memo }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse>;
    sendRedelegationEntryResponse({ value, fee, memo }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsResponse({ value, fee, memo }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse>;
    sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegationEntry({ value, fee, memo }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsResponse({ value, fee, memo }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationRequest({ value, fee, memo }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsRequest({ value, fee, memo }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsResponse({ value, fee, memo }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse>;
    sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidatorResponse({ value, fee, memo }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse>;
    sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse>;
    sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse>;
    sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse>;
    sendMsgEditValidatorResponse({ value, fee, memo }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegateResponse({ value, fee, memo }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRequest({ value, fee, memo }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationResponse({ value, fee, memo }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization_Validators({ value, fee, memo }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse>;
    redelegationEntry({ value }: redelegationEntryParams): EncodeObject;
    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    dvpair({ value }: dvpairParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject;
    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject;
    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject;
    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject;
    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject;
    pool({ value }: poolParams): EncodeObject;
    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject;
    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject;
    queryValidatorUnbondingDelegationsRequest({ value }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject;
    queryValidatorUnbondingDelegationsResponse({ value }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject;
    queryDelegatorUnbondingDelegationsResponse({ value }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject;
    description({ value }: descriptionParams): EncodeObject;
    dvvtriplet({ value }: dvvtripletParams): EncodeObject;
    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject;
    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject;
    delegation({ value }: delegationParams): EncodeObject;
    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject;
    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject;
    commission({ value }: commissionParams): EncodeObject;
    dvvtriplets({ value }: dvvtripletsParams): EncodeObject;
    redelegationResponse({ value }: redelegationResponseParams): EncodeObject;
    msgDelegate({ value }: msgDelegateParams): EncodeObject;
    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject;
    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject;
    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject;
    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject;
    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject;
    commissionRates({ value }: commissionRatesParams): EncodeObject;
    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject;
    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject;
    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject;
    historicalInfo({ value }: historicalInfoParams): EncodeObject;
    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject;
    queryDelegatorUnbondingDelegationsRequest({ value }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject;
    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject;
    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject;
    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject;
    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject;
    delegationResponse({ value }: delegationResponseParams): EncodeObject;
    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject;
    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject;
    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    valAddresses({ value }: valAddressesParams): EncodeObject;
    dvpairs({ value }: dvpairsParams): EncodeObject;
    redelegation({ value }: redelegationParams): EncodeObject;
    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject;
    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject;
    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject;
    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject;
    msgUndelegate({ value }: msgUndelegateParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject;
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
        CosmosStakingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
