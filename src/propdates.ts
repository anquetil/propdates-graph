import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import {
  PostUpdate as PostUpdateEvent,
  PropUpdateAdminTransferStarted as PropUpdateAdminTransferStartedEvent,
  PropUpdateAdminTransfered as PropUpdateAdminTransferedEvent
} from "../generated/Propdates/Propdates"
import {
  PropUpdate,
  PropUpdateAdminTransferStarted,
  PropUpdateAdminTransfered,
  Proposal
} from "../generated/schema"

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';


export function handlePostUpdate(event: PostUpdateEvent): void {
   let entity = new PropUpdate(
      event.transaction.hash.concatI32(event.logIndex.toI32())
   )

   let proposal = getProposal(event.params.propId)
   if(event.params.isCompleted){
      proposal.isCompleted = event.params.isCompleted
   }
   proposal.save()

   entity.hash = event.transaction.hash;
   entity.admin = proposal.admin
   entity.prop = proposal.id   
   entity.update = event.params.update
   entity.isCompleted = event.params.isCompleted

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

   let proposal = getProposal(event.params.propId)
   proposal.transferPending = true
   proposal.pendingAdmin = event.params.newAdmin
   proposal.save()

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
   let proposal = getProposal(event.params.propId)
   proposal.transferPending = false
   proposal.admin = event.params.newAdmin
   proposal.pendingAdmin = Address.fromString(ZERO_ADDRESS)
   proposal.save()

   entity.propId = event.params.propId
   entity.oldAdmin = event.params.oldAdmin
   entity.newAdmin = event.params.newAdmin

   entity.blockNumber = event.block.number
   entity.blockTimestamp = event.block.timestamp
   entity.transactionHash = event.transaction.hash

   entity.save()
}

function getProposal(propId: BigInt): Proposal{
   let proposal = Proposal.load(propId.toString())
   if(proposal == null){ 
      // this should never happen
      // can't be a getProposal call before a ProposalCreated call for a given propId
      log.error('Proposal {} not found on getProposal.', [
         propId.toString(),
      ]);
      return new Proposal(propId.toString())
   }
   return proposal
}
