import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import {
  PostUpdate as PostUpdateEvent,
  PropUpdateAdminTransferStarted as PropUpdateAdminTransferStartedEvent,
  PropUpdateAdminTransfered as PropUpdateAdminTransferedEvent
} from "../generated/Propdates/Propdates"
import {
  PropUpdate,
  Proposal
} from "../generated/schema"

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';


export function handlePostUpdate(event: PostUpdateEvent): void {
   let proposal = getProposal(event.params.propId)
   if(event.params.isCompleted){
      proposal.isCompleted = event.params.isCompleted
   }
   let newCount = BigInt.fromI32(proposal.count.toI32() + 1);
   proposal.count = newCount
   proposal.save()

   let entity = new PropUpdate(
      proposal.id.concat('-').concat(newCount.toString())
   )

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
   let proposal = getProposal(event.params.propId)
   proposal.transferPending = true
   proposal.pendingAdmin = event.params.newAdmin
   proposal.save()
}

export function handlePropUpdateAdminTransfered(
  event: PropUpdateAdminTransferedEvent
): void {
   let proposal = getProposal(event.params.propId)
   proposal.transferPending = false
   proposal.admin = event.params.newAdmin
   proposal.pendingAdmin = Address.fromString(ZERO_ADDRESS)
   proposal.save()
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
