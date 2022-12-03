import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  ItemBought as ItemBoughtEvent,
  ItemListed as ItemListedEvent,
  ItemRemoved as ItemRemovedEvent,
} from "../generated/NftMarketplace/NftMarketplace";
import {
  ItemBought,
  ItemListed,
  ItemRemoved,
  ActiveItem,
} from "../generated/schema";

export function handleItemBought(event: ItemBoughtEvent): void {
  let entity = ItemBought.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!entity) {
    entity = new ItemBought(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  entity.buyer = event.params.buyer;
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.nftPrice = event.params.nftPrice;
  // update the buyer in ActiveItem
  //activeItem! means activeItem will not be null (to fix TS check issue)

  activeItem!.buyer = event.params.buyer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  // save to the graph database
  entity.save();
  activeItem!.save();
}

export function handleItemListed(event: ItemListedEvent): void {
  // check if item is already present
  let entity = ItemListed.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  // if the item isn't present make a new item
  if (!entity) {
    entity = new ItemListed(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  if (!activeItem) {
    activeItem = new ActiveItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  //updates or initailize accordingly
  entity.seller = event.params.seller;
  activeItem.seller = event.params.seller;

  entity.nftAddress = event.params.nftAddress;
  activeItem.nftAddress = event.params.nftAddress;

  entity.tokenId = event.params.tokenId;
  activeItem.tokenId = event.params.tokenId;

  entity.price = event.params.price;
  activeItem.price = event.params.price;

  // set buyer to 'none' currently
  activeItem.buyer = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // also update Active Item table

  entity.save();
  activeItem.save();
}

export function handleItemRemoved(event: ItemRemovedEvent): void {
  let entity = ItemRemoved.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!entity) {
    entity = new ItemRemoved(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }

  // if we are cancelling an item that means its present in marketplace or listed or is in ActiveItem table

  entity.sender = event.params.sender;
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  // update the buyer of listed nft from 'none address' to 'dead address'
  //activeItem! means activeItem will not be null (to fix TS check issue)
  activeItem!.buyer = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
  activeItem!.save();
}

// custom function for setting unique id
function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}
