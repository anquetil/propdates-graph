import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
   ProposalCreated as ProposalCreatedEvent
} from "../generated/Contract/Contract"
import {
   Proposal,
} from "../generated/schema"

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

