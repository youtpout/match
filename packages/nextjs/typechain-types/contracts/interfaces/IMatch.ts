/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace MatchLibrary {
  export type ActionStruct = {
    actionType: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type ActionStructOutput = [number, string] & {
    actionType: number;
    data: string;
  };

  export type OrderStruct = {
    status: PromiseOrValue<BigNumberish>;
    trader: PromiseOrValue<string>;
    reward: PromiseOrValue<BigNumberish>;
    amountToSell: PromiseOrValue<BigNumberish>;
    amountToBuy: PromiseOrValue<BigNumberish>;
    amountToSellRest: PromiseOrValue<BigNumberish>;
    amountToBuyRest: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    status: number;
    trader: string;
    reward: BigNumber;
    amountToSell: BigNumber;
    amountToBuy: BigNumber;
    amountToSellRest: BigNumber;
    amountToBuyRest: BigNumber;
  };
}

export interface IMatchInterface extends utils.Interface {
  functions: {
    "countOrders(address,address)": FunctionFragment;
    "execute((uint8,bytes)[])": FunctionFragment;
    "fetchPageOrders(address,address,uint256,uint256)": FunctionFragment;
    "getActionAddOrder(address,address,uint88,uint128,uint128)": FunctionFragment;
    "getActionCancel(address,address,uint256)": FunctionFragment;
    "getActionDeposit(address,uint256)": FunctionFragment;
    "getActionMatch(address,address,uint256,uint256)": FunctionFragment;
    "getActionWithdraw(address,uint256)": FunctionFragment;
    "getActionWithdrawTo(address,address,uint256)": FunctionFragment;
    "getOrder(address,address,uint256)": FunctionFragment;
    "minReward()": FunctionFragment;
    "usersBalances(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "countOrders"
      | "execute"
      | "fetchPageOrders"
      | "getActionAddOrder"
      | "getActionCancel"
      | "getActionDeposit"
      | "getActionMatch"
      | "getActionWithdraw"
      | "getActionWithdrawTo"
      | "getOrder"
      | "minReward"
      | "usersBalances"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "countOrders",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [MatchLibrary.ActionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchPageOrders",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionAddOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionCancel",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionDeposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionMatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionWithdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionWithdrawTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "minReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "usersBalances",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "countOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchPageOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionAddOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionCancel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionWithdrawTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usersBalances",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMatch extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMatchInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    countOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    execute(
      actions: MatchLibrary.ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fetchPageOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      cursor: PromiseOrValue<BigNumberish>,
      howMany: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.OrderStructOutput[], BigNumber] & {
        values: MatchLibrary.OrderStructOutput[];
        newCursor: BigNumber;
      }
    >;

    getActionAddOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      amountToSell: PromiseOrValue<BigNumberish>,
      amountToBuy: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getActionCancel(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getActionDeposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getActionMatch(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrderA: PromiseOrValue<BigNumberish>,
      indexOrderB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getActionWithdraw(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getActionWithdrawTo(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.ActionStructOutput] & {
        action: MatchLibrary.ActionStructOutput;
      }
    >;

    getOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[MatchLibrary.OrderStructOutput]>;

    minReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usersBalances(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  countOrders(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  execute(
    actions: MatchLibrary.ActionStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fetchPageOrders(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    cursor: PromiseOrValue<BigNumberish>,
    howMany: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [MatchLibrary.OrderStructOutput[], BigNumber] & {
      values: MatchLibrary.OrderStructOutput[];
      newCursor: BigNumber;
    }
  >;

  getActionAddOrder(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    reward: PromiseOrValue<BigNumberish>,
    amountToSell: PromiseOrValue<BigNumberish>,
    amountToBuy: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getActionCancel(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    indexOrder: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getActionDeposit(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getActionMatch(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    indexOrderA: PromiseOrValue<BigNumberish>,
    indexOrderB: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getActionWithdraw(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getActionWithdrawTo(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.ActionStructOutput>;

  getOrder(
    tokenToSell: PromiseOrValue<string>,
    tokenToBuy: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MatchLibrary.OrderStructOutput>;

  minReward(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usersBalances(
    user: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    countOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      actions: MatchLibrary.ActionStruct[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; reward: BigNumber }
    >;

    fetchPageOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      cursor: PromiseOrValue<BigNumberish>,
      howMany: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [MatchLibrary.OrderStructOutput[], BigNumber] & {
        values: MatchLibrary.OrderStructOutput[];
        newCursor: BigNumber;
      }
    >;

    getActionAddOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      amountToSell: PromiseOrValue<BigNumberish>,
      amountToBuy: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getActionCancel(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getActionDeposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getActionMatch(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrderA: PromiseOrValue<BigNumberish>,
      indexOrderB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getActionWithdraw(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getActionWithdrawTo(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.ActionStructOutput>;

    getOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MatchLibrary.OrderStructOutput>;

    minReward(overrides?: CallOverrides): Promise<BigNumber>;

    usersBalances(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    countOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      actions: MatchLibrary.ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fetchPageOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      cursor: PromiseOrValue<BigNumberish>,
      howMany: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionAddOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      amountToSell: PromiseOrValue<BigNumberish>,
      amountToBuy: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionCancel(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionDeposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionMatch(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrderA: PromiseOrValue<BigNumberish>,
      indexOrderB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionWithdraw(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActionWithdrawTo(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usersBalances(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    countOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      actions: MatchLibrary.ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fetchPageOrders(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      cursor: PromiseOrValue<BigNumberish>,
      howMany: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionAddOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      reward: PromiseOrValue<BigNumberish>,
      amountToSell: PromiseOrValue<BigNumberish>,
      amountToBuy: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionCancel(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionDeposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionMatch(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      indexOrderA: PromiseOrValue<BigNumberish>,
      indexOrderB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionWithdraw(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActionWithdrawTo(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrder(
      tokenToSell: PromiseOrValue<string>,
      tokenToBuy: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usersBalances(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
