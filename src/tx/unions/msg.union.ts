import { createUnionType } from '@nestjs/graphql'
import { MsgDeposit, MsgVote } from 'src/common/models'
import {
  MsgSend,
  MsgMultiSend,
  MsgModifyWithdrawAddress,
  MsgWithdrawDelegationReward,
  MsgWithdrawValidatorCommission,
  MsgFundCommunityPool,
  MsgSubmitProposal,
  MsgSwapSend,
  MsgSwap,
  MsgGrantAuthorization,
  MsgRevokeAuthorization,
  MsgExecAuthorized,
  MsgExchangeRateVote,
  MsgExchangeRatePrevote,
  MsgDelegateFeedConsent,
  MsgAggregateExchangeRateVote,
  MsgAggregateExchangeRatePrevote,
  MsgUnjail,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgEditValidator,
  MsgStoreCode,
  MsgInstantiateContract,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateContractOwner,
} from '../models'

export const MsgUnion = createUnionType({
  name: 'MsgUnion',
  types: () => [
    MsgSend,
    MsgMultiSend,
    MsgModifyWithdrawAddress,
    MsgWithdrawDelegationReward,
    MsgWithdrawValidatorCommission,
    MsgFundCommunityPool,
    MsgDeposit,
    MsgVote,
    MsgSubmitProposal,
    MsgSwapSend,
    MsgSwap,
    MsgGrantAuthorization,
    MsgRevokeAuthorization,
    MsgExecAuthorized,
    MsgExchangeRateVote,
    MsgExchangeRatePrevote,
    MsgDelegateFeedConsent,
    MsgAggregateExchangeRateVote,
    MsgAggregateExchangeRatePrevote,
    MsgUnjail,
    MsgDelegate,
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgEditValidator,
    MsgStoreCode,
    MsgInstantiateContract,
    MsgExecuteContract,
    MsgMigrateContract,
    MsgUpdateContractOwner,
  ],
})

export type MsgType = typeof MsgUnion
