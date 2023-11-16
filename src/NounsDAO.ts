import { Address, Bytes, BigInt, log } from "@graphprotocol/graph-ts"
import {
   ProposalCreated as ProposalCreatedEvent,
   ProposalExecuted as ProposalExecutedEvent
} from "../generated/NounsDAO/NounsDAO"
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
   proposal.executed = false
   proposal.count = BigInt.fromI32(0)
   proposal.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
   let proposal = getProposal(event.params.id)
   proposal.executed = true;
   proposal.save()
}

function getProposal(propId: BigInt): Proposal {
   let proposal = Proposal.load(propId.toString())
   if (proposal == null) {
      // this should never happen
      // can't be a getProposal call before a ProposalCreated call for a given propId
      log.error('Proposal {} not found on getProposal.', [
         propId.toString(),
      ]);
      return new Proposal(propId.toString())
   }
   log.info('in getProposal, found {}', [proposal.id])
   return proposal
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

