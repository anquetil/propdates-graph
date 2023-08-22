import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  PostUpdate,
  PropUpdateAdminTransferStarted,
  PropUpdateAdminTransfered,
} from "../generated/Propdates/Propdates"

export function createPostUpdateEvent(
  propId: BigInt,
  isCompleted: boolean,
  update: string
): PostUpdate {
  let postUpdateEvent = changetype<PostUpdate>(newMockEvent())

  postUpdateEvent.parameters = new Array()

  postUpdateEvent.parameters.push(
    new ethereum.EventParam("propId", ethereum.Value.fromUnsignedBigInt(propId))
  )
  postUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "isCompleted",
      ethereum.Value.fromBoolean(isCompleted)
    )
  )
  postUpdateEvent.parameters.push(
    new ethereum.EventParam("update", ethereum.Value.fromString(update))
  )

  return postUpdateEvent
}

export function createPropUpdateAdminTransferStartedEvent(
  propId: BigInt,
  oldAdmin: Address,
  newAdmin: Address
): PropUpdateAdminTransferStarted {
  let propUpdateAdminTransferStartedEvent = changetype<
    PropUpdateAdminTransferStarted
  >(newMockEvent())

  propUpdateAdminTransferStartedEvent.parameters = new Array()

  propUpdateAdminTransferStartedEvent.parameters.push(
    new ethereum.EventParam("propId", ethereum.Value.fromUnsignedBigInt(propId))
  )
  propUpdateAdminTransferStartedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  propUpdateAdminTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return propUpdateAdminTransferStartedEvent
}

export function createPropUpdateAdminTransferedEvent(
  propId: BigInt,
  oldAdmin: Address,
  newAdmin: Address
): PropUpdateAdminTransfered {
  let propUpdateAdminTransferedEvent = changetype<PropUpdateAdminTransfered>(
    newMockEvent()
  )

  propUpdateAdminTransferedEvent.parameters = new Array()

  propUpdateAdminTransferedEvent.parameters.push(
    new ethereum.EventParam("propId", ethereum.Value.fromUnsignedBigInt(propId))
  )
  propUpdateAdminTransferedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  propUpdateAdminTransferedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return propUpdateAdminTransferedEvent
}