import { Address, Bytes, BigInt, log } from "@graphprotocol/graph-ts"
import {
   ProposalCreated as ProposalCreatedEvent,
   ProposalExecuted as ProposalExecutedEvent
} from "../generated/Contract/Contract"
import {
   Proposal,
} from "../generated/schema"
import { getProposal } from "./propdates";

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export function handleProposalCreated(event: ProposalCreatedEvent): void {
   let proposal = new Proposal(event.params.id.toString())
   proposal.id = event.params.id.toString()
   proposal.title = extractTitle(event.params.description.split('\\n').join('\n'))
   proposal.admin = Address.fromString(ZERO_ADDRESS)
   proposal.proposer = event.params.proposer
   proposal.isCompleted = false
   proposal.transferPending = false
   proposal.pendingAdmin = Address.fromString(ZERO_ADDRESS)
   proposal.executed = false
   proposal.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
   let proposal = getProposal(event.params.id)
   proposal.executed = true;
   proposal.save()
}

function extractTitle(description: string): string {
   // Extract a markdown title from a proposal body that uses the `# Title` or `Title\n===` formats
   let splitDescription = description.split('#', 3);
   if (splitDescription.length > 1) {
      splitDescription.shift(); // Remove any characters before `#`
   }
   let title = splitDescription.join('').split('\n', 1).join('').trim();

   // Remove bold and italics
   title = title.replaceAll('**', '').replaceAll('__', '');

   if (title == '') {
      return 'Untitled';
   }
   return title;
}

