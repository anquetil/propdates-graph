import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  NewAdmin,
  NewImplementation,
  NewPendingAdmin,
  NewVetoer,
  ProposalCanceled,
  ProposalCreated,
  ProposalCreatedWithRequirements,
  ProposalExecuted,
  ProposalQueued,
  ProposalThresholdBPSSet,
  ProposalVetoed,
  QuorumVotesBPSSet,
  VoteCast,
  VotingDelaySet,
  VotingPeriodSet
} from "../generated/Contract/Contract"

export function createNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): NewAdmin {
  let newAdminEvent = changetype<NewAdmin>(newMockEvent())

  newAdminEvent.parameters = new Array()

  newAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  newAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return newAdminEvent
}

export function createNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): NewImplementation {
  let newImplementationEvent = changetype<NewImplementation>(newMockEvent())

  newImplementationEvent.parameters = new Array()

  newImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  newImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return newImplementationEvent
}

export function createNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): NewPendingAdmin {
  let newPendingAdminEvent = changetype<NewPendingAdmin>(newMockEvent())

  newPendingAdminEvent.parameters = new Array()

  newPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  newPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return newPendingAdminEvent
}

export function createNewVetoerEvent(
  oldVetoer: Address,
  newVetoer: Address
): NewVetoer {
  let newVetoerEvent = changetype<NewVetoer>(newMockEvent())

  newVetoerEvent.parameters = new Array()

  newVetoerEvent.parameters.push(
    new ethereum.EventParam("oldVetoer", ethereum.Value.fromAddress(oldVetoer))
  )
  newVetoerEvent.parameters.push(
    new ethereum.EventParam("newVetoer", ethereum.Value.fromAddress(newVetoer))
  )

  return newVetoerEvent
}

export function createProposalCanceledEvent(id: BigInt): ProposalCanceled {
  let proposalCanceledEvent = changetype<ProposalCanceled>(newMockEvent())

  proposalCanceledEvent.parameters = new Array()

  proposalCanceledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return proposalCanceledEvent
}

export function createProposalCreatedEvent(
  id: BigInt,
  proposer: Address,
  targets: Array<Address>,
  values: Array<BigInt>,
  signatures: Array<string>,
  calldatas: Array<Bytes>,
  startBlock: BigInt,
  endBlock: BigInt,
  description: string
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("targets", ethereum.Value.fromAddressArray(targets))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "signatures",
      ethereum.Value.fromStringArray(signatures)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "calldatas",
      ethereum.Value.fromBytesArray(calldatas)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return proposalCreatedEvent
}

export function createProposalCreatedWithRequirementsEvent(
  id: BigInt,
  proposer: Address,
  targets: Array<Address>,
  values: Array<BigInt>,
  signatures: Array<string>,
  calldatas: Array<Bytes>,
  startBlock: BigInt,
  endBlock: BigInt,
  proposalThreshold: BigInt,
  quorumVotes: BigInt,
  description: string
): ProposalCreatedWithRequirements {
  let proposalCreatedWithRequirementsEvent = changetype<
    ProposalCreatedWithRequirements
  >(newMockEvent())

  proposalCreatedWithRequirementsEvent.parameters = new Array()

  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam("targets", ethereum.Value.fromAddressArray(targets))
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "signatures",
      ethereum.Value.fromStringArray(signatures)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "calldatas",
      ethereum.Value.fromBytesArray(calldatas)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "startBlock",
      ethereum.Value.fromUnsignedBigInt(startBlock)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "endBlock",
      ethereum.Value.fromUnsignedBigInt(endBlock)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "proposalThreshold",
      ethereum.Value.fromUnsignedBigInt(proposalThreshold)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "quorumVotes",
      ethereum.Value.fromUnsignedBigInt(quorumVotes)
    )
  )
  proposalCreatedWithRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return proposalCreatedWithRequirementsEvent
}

export function createProposalExecutedEvent(id: BigInt): ProposalExecuted {
  let proposalExecutedEvent = changetype<ProposalExecuted>(newMockEvent())

  proposalExecutedEvent.parameters = new Array()

  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return proposalExecutedEvent
}

export function createProposalQueuedEvent(
  id: BigInt,
  eta: BigInt
): ProposalQueued {
  let proposalQueuedEvent = changetype<ProposalQueued>(newMockEvent())

  proposalQueuedEvent.parameters = new Array()

  proposalQueuedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  proposalQueuedEvent.parameters.push(
    new ethereum.EventParam("eta", ethereum.Value.fromUnsignedBigInt(eta))
  )

  return proposalQueuedEvent
}

export function createProposalThresholdBPSSetEvent(
  oldProposalThresholdBPS: BigInt,
  newProposalThresholdBPS: BigInt
): ProposalThresholdBPSSet {
  let proposalThresholdBpsSetEvent = changetype<ProposalThresholdBPSSet>(
    newMockEvent()
  )

  proposalThresholdBpsSetEvent.parameters = new Array()

  proposalThresholdBpsSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldProposalThresholdBPS",
      ethereum.Value.fromUnsignedBigInt(oldProposalThresholdBPS)
    )
  )
  proposalThresholdBpsSetEvent.parameters.push(
    new ethereum.EventParam(
      "newProposalThresholdBPS",
      ethereum.Value.fromUnsignedBigInt(newProposalThresholdBPS)
    )
  )

  return proposalThresholdBpsSetEvent
}

export function createProposalVetoedEvent(id: BigInt): ProposalVetoed {
  let proposalVetoedEvent = changetype<ProposalVetoed>(newMockEvent())

  proposalVetoedEvent.parameters = new Array()

  proposalVetoedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return proposalVetoedEvent
}

export function createQuorumVotesBPSSetEvent(
  oldQuorumVotesBPS: BigInt,
  newQuorumVotesBPS: BigInt
): QuorumVotesBPSSet {
  let quorumVotesBpsSetEvent = changetype<QuorumVotesBPSSet>(newMockEvent())

  quorumVotesBpsSetEvent.parameters = new Array()

  quorumVotesBpsSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldQuorumVotesBPS",
      ethereum.Value.fromUnsignedBigInt(oldQuorumVotesBPS)
    )
  )
  quorumVotesBpsSetEvent.parameters.push(
    new ethereum.EventParam(
      "newQuorumVotesBPS",
      ethereum.Value.fromUnsignedBigInt(newQuorumVotesBPS)
    )
  )

  return quorumVotesBpsSetEvent
}

export function createVoteCastEvent(
  voter: Address,
  proposalId: BigInt,
  support: i32,
  votes: BigInt,
  reason: string
): VoteCast {
  let voteCastEvent = changetype<VoteCast>(newMockEvent())

  voteCastEvent.parameters = new Array()

  voteCastEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "support",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support))
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("votes", ethereum.Value.fromUnsignedBigInt(votes))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return voteCastEvent
}

export function createVotingDelaySetEvent(
  oldVotingDelay: BigInt,
  newVotingDelay: BigInt
): VotingDelaySet {
  let votingDelaySetEvent = changetype<VotingDelaySet>(newMockEvent())

  votingDelaySetEvent.parameters = new Array()

  votingDelaySetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingDelay",
      ethereum.Value.fromUnsignedBigInt(oldVotingDelay)
    )
  )
  votingDelaySetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingDelay",
      ethereum.Value.fromUnsignedBigInt(newVotingDelay)
    )
  )

  return votingDelaySetEvent
}

export function createVotingPeriodSetEvent(
  oldVotingPeriod: BigInt,
  newVotingPeriod: BigInt
): VotingPeriodSet {
  let votingPeriodSetEvent = changetype<VotingPeriodSet>(newMockEvent())

  votingPeriodSetEvent.parameters = new Array()

  votingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(oldVotingPeriod)
    )
  )
  votingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(newVotingPeriod)
    )
  )

  return votingPeriodSetEvent
}
