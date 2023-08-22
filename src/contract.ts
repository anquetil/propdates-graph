import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
   ProposalCreated as ProposalCreatedEvent
} from "../generated/Contract/Contract"
import {
   Proposal,
} from "../generated/schema"

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export function handleProposalCreated(event: ProposalCreatedEvent): void {
   let prop = createProposal(event.params.id, event.params.proposer)
   prop.save()
}

export function createProposal(propId: BigInt, proposer: Bytes): Proposal {
   let proposal = new Proposal(propId.toString())
   proposal.id = propId.toString()
   proposal.admin = Address.fromString(ZERO_ADDRESS)
   proposal.proposer = proposer
   proposal.isCompleted = false
   proposal.transferPending = false
   proposal.pendingAdmin = Address.fromString(ZERO_ADDRESS)
   proposal.save()
   return proposal
}

