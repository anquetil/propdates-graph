import {
  PostUpdate as PostUpdateEvent,
  PropUpdateAdminTransferStarted as PropUpdateAdminTransferStartedEvent,
  PropUpdateAdminTransfered as PropUpdateAdminTransferedEvent
} from "../generated/Propdates/Propdates"
import {
  PostUpdate,
  PropUpdateAdminTransferStarted,
  PropUpdateAdminTransfered
} from "../generated/schema"

export function handlePostUpdate(event: PostUpdateEvent): void {
  let entity = new PostUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propId = event.params.propId
  entity.isCompleted = event.params.isCompleted
  entity.update = event.params.update

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePropUpdateAdminTransferStarted(
  event: PropUpdateAdminTransferStartedEvent
): void {
  let entity = new PropUpdateAdminTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propId = event.params.propId
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePropUpdateAdminTransfered(
  event: PropUpdateAdminTransferedEvent
): void {
  let entity = new PropUpdateAdminTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propId = event.params.propId
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
