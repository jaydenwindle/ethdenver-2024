import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ValidatorHistoricalRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { GenesisState } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryValidatorCommissionRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { MsgCommunityPoolSpend } from "./types/cosmos/distribution/v1beta1/tx";
import { Params } from "./types/cosmos/distribution/v1beta1/distribution";
import { CommunityPoolSpendProposalWithDeposit } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorOutstandingRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgFundCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorDistributionInfoRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryValidatorSlashesRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgCommunityPoolSpendResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgDepositValidatorRewardsPool } from "./types/cosmos/distribution/v1beta1/tx";
import { CommunityPoolSpendProposal } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorAccumulatedCommissionRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { ValidatorHistoricalRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryDelegatorWithdrawAddressRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgWithdrawDelegatorRewardResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { DelegatorStartingInfoRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { ValidatorSlashEventRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryValidatorDistributionInfoResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/query";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorAccumulatedCommission } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorSlashEvents } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo } from "./types/cosmos/distribution/v1beta1/genesis";
import { ValidatorSlashEvent } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgSetWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryCommunityPoolRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryValidatorOutstandingRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { DelegationDelegatorReward } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryDelegationTotalRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorCurrentRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegatorStartingInfo } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryDelegationTotalRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorSlashesResponse } from "./types/cosmos/distribution/v1beta1/query";
import { FeePool } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorOutstandingRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryParamsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorOutstandingRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorCurrentRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgWithdrawValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgDepositValidatorRewardsPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
export { ValidatorHistoricalRewards, GenesisState, MsgWithdrawDelegatorReward, QueryValidatorCommissionRequest, QueryDelegationRewardsRequest, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, MsgCommunityPoolSpend, Params, CommunityPoolSpendProposalWithDeposit, QueryValidatorOutstandingRewardsRequest, MsgFundCommunityPoolResponse, QueryParamsResponse, QueryValidatorDistributionInfoRequest, MsgSetWithdrawAddress, QueryValidatorSlashesRequest, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPool, CommunityPoolSpendProposal, ValidatorAccumulatedCommissionRecord, ValidatorHistoricalRewardsRecord, QueryDelegatorWithdrawAddressRequest, MsgWithdrawDelegatorRewardResponse, DelegatorStartingInfoRecord, ValidatorSlashEventRecord, QueryValidatorDistributionInfoResponse, QueryDelegatorWithdrawAddressResponse, MsgFundCommunityPool, ValidatorAccumulatedCommission, ValidatorSlashEvents, DelegatorWithdrawInfo, ValidatorSlashEvent, MsgSetWithdrawAddressResponse, QueryCommunityPoolRequest, MsgUpdateParamsResponse, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionResponse, QueryDelegationRewardsResponse, DelegationDelegatorReward, QueryCommunityPoolResponse, MsgUpdateParams, QueryDelegationTotalRewardsResponse, ValidatorCurrentRewards, DelegatorStartingInfo, QueryDelegationTotalRewardsRequest, QueryValidatorSlashesResponse, FeePool, ValidatorOutstandingRewardsRecord, QueryParamsRequest, ValidatorOutstandingRewards, ValidatorCurrentRewardsRecord, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommission, MsgDepositValidatorRewardsPoolResponse };
type sendValidatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventsParams = {
    value: ValidatorSlashEvents;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventParams = {
    value: ValidatorSlashEvent;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeePoolParams = {
    value: FeePool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type validatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
};
type queryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
};
type queryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type msgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
};
type paramsParams = {
    value: Params;
};
type communityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
};
type queryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
};
type msgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
};
type msgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
};
type queryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
};
type msgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
};
type msgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
};
type communityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
};
type validatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
};
type validatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
};
type queryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
};
type msgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
};
type delegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
};
type validatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
};
type queryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
};
type queryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
};
type msgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
};
type validatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
};
type validatorSlashEventsParams = {
    value: ValidatorSlashEvents;
};
type delegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
};
type validatorSlashEventParams = {
    value: ValidatorSlashEvent;
};
type msgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
};
type queryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
};
type queryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
};
type queryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
};
type delegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
};
type queryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
};
type validatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
};
type delegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
};
type queryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
};
type queryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
};
type feePoolParams = {
    value: FeePool;
};
type validatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type validatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
};
type validatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
};
type msgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
};
type msgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
};
type msgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendValidatorHistoricalRewards({ value, fee, memo }: sendValidatorHistoricalRewardsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionRequest({ value, fee, memo }: sendQueryValidatorCommissionRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsRequest({ value, fee, memo }: sendQueryDelegationRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposalWithDeposit({ value, fee, memo }: sendCommunityPoolSpendProposalWithDepositParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsRequest({ value, fee, memo }: sendQueryValidatorOutstandingRewardsRequestParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPoolResponse({ value, fee, memo }: sendMsgFundCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoRequest({ value, fee, memo }: sendQueryValidatorDistributionInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesRequest({ value, fee, memo }: sendQueryValidatorSlashesRequestParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpendResponse({ value, fee, memo }: sendMsgCommunityPoolSpendResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPool({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposal({ value, fee, memo }: sendCommunityPoolSpendProposalParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommissionRecord({ value, fee, memo }: sendValidatorAccumulatedCommissionRecordParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewardsRecord({ value, fee, memo }: sendValidatorHistoricalRewardsRecordParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressRequest({ value, fee, memo }: sendQueryDelegatorWithdrawAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorRewardResponse({ value, fee, memo }: sendMsgWithdrawDelegatorRewardResponseParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfoRecord({ value, fee, memo }: sendDelegatorStartingInfoRecordParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEventRecord({ value, fee, memo }: sendValidatorSlashEventRecordParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoResponse({ value, fee, memo }: sendQueryValidatorDistributionInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressResponse({ value, fee, memo }: sendQueryDelegatorWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommission({ value, fee, memo }: sendValidatorAccumulatedCommissionParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvents({ value, fee, memo }: sendValidatorSlashEventsParams): Promise<DeliverTxResponse>;
    sendDelegatorWithdrawInfo({ value, fee, memo }: sendDelegatorWithdrawInfoParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvent({ value, fee, memo }: sendValidatorSlashEventParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddressResponse({ value, fee, memo }: sendMsgSetWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolRequest({ value, fee, memo }: sendQueryCommunityPoolRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsResponse({ value, fee, memo }: sendQueryValidatorOutstandingRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionResponse({ value, fee, memo }: sendQueryValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsResponse({ value, fee, memo }: sendQueryDelegationRewardsResponseParams): Promise<DeliverTxResponse>;
    sendDelegationDelegatorReward({ value, fee, memo }: sendDelegationDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolResponse({ value, fee, memo }: sendQueryCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsResponse({ value, fee, memo }: sendQueryDelegationTotalRewardsResponseParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewards({ value, fee, memo }: sendValidatorCurrentRewardsParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfo({ value, fee, memo }: sendDelegatorStartingInfoParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsRequest({ value, fee, memo }: sendQueryDelegationTotalRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesResponse({ value, fee, memo }: sendQueryValidatorSlashesResponseParams): Promise<DeliverTxResponse>;
    sendFeePool({ value, fee, memo }: sendFeePoolParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewardsRecord({ value, fee, memo }: sendValidatorOutstandingRewardsRecordParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewards({ value, fee, memo }: sendValidatorOutstandingRewardsParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewardsRecord({ value, fee, memo }: sendValidatorCurrentRewardsRecordParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommissionResponse({ value, fee, memo }: sendMsgWithdrawValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPoolResponse({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolResponseParams): Promise<DeliverTxResponse>;
    validatorHistoricalRewards({ value }: validatorHistoricalRewardsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject;
    queryValidatorCommissionRequest({ value }: queryValidatorCommissionRequestParams): EncodeObject;
    queryDelegationRewardsRequest({ value }: queryDelegationRewardsRequestParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    communityPoolSpendProposalWithDeposit({ value }: communityPoolSpendProposalWithDepositParams): EncodeObject;
    queryValidatorOutstandingRewardsRequest({ value }: queryValidatorOutstandingRewardsRequestParams): EncodeObject;
    msgFundCommunityPoolResponse({ value }: msgFundCommunityPoolResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryValidatorDistributionInfoRequest({ value }: queryValidatorDistributionInfoRequestParams): EncodeObject;
    msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject;
    queryValidatorSlashesRequest({ value }: queryValidatorSlashesRequestParams): EncodeObject;
    msgCommunityPoolSpendResponse({ value }: msgCommunityPoolSpendResponseParams): EncodeObject;
    msgDepositValidatorRewardsPool({ value }: msgDepositValidatorRewardsPoolParams): EncodeObject;
    communityPoolSpendProposal({ value }: communityPoolSpendProposalParams): EncodeObject;
    validatorAccumulatedCommissionRecord({ value }: validatorAccumulatedCommissionRecordParams): EncodeObject;
    validatorHistoricalRewardsRecord({ value }: validatorHistoricalRewardsRecordParams): EncodeObject;
    queryDelegatorWithdrawAddressRequest({ value }: queryDelegatorWithdrawAddressRequestParams): EncodeObject;
    msgWithdrawDelegatorRewardResponse({ value }: msgWithdrawDelegatorRewardResponseParams): EncodeObject;
    delegatorStartingInfoRecord({ value }: delegatorStartingInfoRecordParams): EncodeObject;
    validatorSlashEventRecord({ value }: validatorSlashEventRecordParams): EncodeObject;
    queryValidatorDistributionInfoResponse({ value }: queryValidatorDistributionInfoResponseParams): EncodeObject;
    queryDelegatorWithdrawAddressResponse({ value }: queryDelegatorWithdrawAddressResponseParams): EncodeObject;
    msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject;
    validatorAccumulatedCommission({ value }: validatorAccumulatedCommissionParams): EncodeObject;
    validatorSlashEvents({ value }: validatorSlashEventsParams): EncodeObject;
    delegatorWithdrawInfo({ value }: delegatorWithdrawInfoParams): EncodeObject;
    validatorSlashEvent({ value }: validatorSlashEventParams): EncodeObject;
    msgSetWithdrawAddressResponse({ value }: msgSetWithdrawAddressResponseParams): EncodeObject;
    queryCommunityPoolRequest({ value }: queryCommunityPoolRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryValidatorOutstandingRewardsResponse({ value }: queryValidatorOutstandingRewardsResponseParams): EncodeObject;
    queryValidatorCommissionResponse({ value }: queryValidatorCommissionResponseParams): EncodeObject;
    queryDelegationRewardsResponse({ value }: queryDelegationRewardsResponseParams): EncodeObject;
    delegationDelegatorReward({ value }: delegationDelegatorRewardParams): EncodeObject;
    queryCommunityPoolResponse({ value }: queryCommunityPoolResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryDelegationTotalRewardsResponse({ value }: queryDelegationTotalRewardsResponseParams): EncodeObject;
    validatorCurrentRewards({ value }: validatorCurrentRewardsParams): EncodeObject;
    delegatorStartingInfo({ value }: delegatorStartingInfoParams): EncodeObject;
    queryDelegationTotalRewardsRequest({ value }: queryDelegationTotalRewardsRequestParams): EncodeObject;
    queryValidatorSlashesResponse({ value }: queryValidatorSlashesResponseParams): EncodeObject;
    feePool({ value }: feePoolParams): EncodeObject;
    validatorOutstandingRewardsRecord({ value }: validatorOutstandingRewardsRecordParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    validatorOutstandingRewards({ value }: validatorOutstandingRewardsParams): EncodeObject;
    validatorCurrentRewardsRecord({ value }: validatorCurrentRewardsRecordParams): EncodeObject;
    msgWithdrawValidatorCommissionResponse({ value }: msgWithdrawValidatorCommissionResponseParams): EncodeObject;
    msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject;
    msgDepositValidatorRewardsPoolResponse({ value }: msgDepositValidatorRewardsPoolResponseParams): EncodeObject;
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
        CosmosDistributionV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
