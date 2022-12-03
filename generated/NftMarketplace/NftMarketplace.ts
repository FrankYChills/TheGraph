// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get nftPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ItemListed extends ethereum.Event {
  get params(): ItemListed__Params {
    return new ItemListed__Params(this);
  }
}

export class ItemListed__Params {
  _event: ItemListed;

  constructor(event: ItemListed) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ItemRemoved extends ethereum.Event {
  get params(): ItemRemoved__Params {
    return new ItemRemoved__Params(this);
  }
}

export class ItemRemoved__Params {
  _event: ItemRemoved;

  constructor(event: ItemRemoved) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NftMarketplace__getListingResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get seller(): Address {
    return this[1].toAddress();
  }
}

export class NftMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NftMarketplace {
    return new NftMarketplace("NftMarketplace", address);
  }

  getHolding(seller: Address): BigInt {
    let result = super.call("getHolding", "getHolding(address):(uint256)", [
      ethereum.Value.fromAddress(seller)
    ]);

    return result[0].toBigInt();
  }

  try_getHolding(seller: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getHolding", "getHolding(address):(uint256)", [
      ethereum.Value.fromAddress(seller)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getListing(
    nftAddress: Address,
    tokenId: BigInt
  ): NftMarketplace__getListingResultValue0Struct {
    let result = super.call(
      "getListing",
      "getListing(address,uint256):((uint256,address))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return changetype<NftMarketplace__getListingResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListing(
    nftAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<NftMarketplace__getListingResultValue0Struct> {
    let result = super.tryCall(
      "getListing",
      "getListing(address,uint256):((uint256,address))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NftMarketplace__getListingResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class CancelItemCall extends ethereum.Call {
  get inputs(): CancelItemCall__Inputs {
    return new CancelItemCall__Inputs(this);
  }

  get outputs(): CancelItemCall__Outputs {
    return new CancelItemCall__Outputs(this);
  }
}

export class CancelItemCall__Inputs {
  _call: CancelItemCall;

  constructor(call: CancelItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelItemCall__Outputs {
  _call: CancelItemCall;

  constructor(call: CancelItemCall) {
    this._call = call;
  }
}

export class ListItemCall extends ethereum.Call {
  get inputs(): ListItemCall__Inputs {
    return new ListItemCall__Inputs(this);
  }

  get outputs(): ListItemCall__Outputs {
    return new ListItemCall__Outputs(this);
  }
}

export class ListItemCall__Inputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListItemCall__Outputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }
}

export class UpdateItemCall extends ethereum.Call {
  get inputs(): UpdateItemCall__Inputs {
    return new UpdateItemCall__Inputs(this);
  }

  get outputs(): UpdateItemCall__Outputs {
    return new UpdateItemCall__Outputs(this);
  }
}

export class UpdateItemCall__Inputs {
  _call: UpdateItemCall;

  constructor(call: UpdateItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateItemCall__Outputs {
  _call: UpdateItemCall;

  constructor(call: UpdateItemCall) {
    this._call = call;
  }
}

export class WithdrawHoldingsCall extends ethereum.Call {
  get inputs(): WithdrawHoldingsCall__Inputs {
    return new WithdrawHoldingsCall__Inputs(this);
  }

  get outputs(): WithdrawHoldingsCall__Outputs {
    return new WithdrawHoldingsCall__Outputs(this);
  }
}

export class WithdrawHoldingsCall__Inputs {
  _call: WithdrawHoldingsCall;

  constructor(call: WithdrawHoldingsCall) {
    this._call = call;
  }
}

export class WithdrawHoldingsCall__Outputs {
  _call: WithdrawHoldingsCall;

  constructor(call: WithdrawHoldingsCall) {
    this._call = call;
  }
}
