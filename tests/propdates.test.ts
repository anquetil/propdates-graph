import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { PostUpdate } from "../generated/schema"
import { PostUpdate as PostUpdateEvent } from "../generated/Propdates/Propdates"
import { handlePostUpdate } from "../src/propdates"
import { createPostUpdateEvent } from "./propdates-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let propId = BigInt.fromI32(234)
    let isCompleted = "boolean Not implemented"
    let update = "Example string value"
    let newPostUpdateEvent = createPostUpdateEvent(propId, isCompleted, update)
    handlePostUpdate(newPostUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PostUpdate created and stored", () => {
    assert.entityCount("PostUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PostUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propId",
      "234"
    )
    assert.fieldEquals(
      "PostUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isCompleted",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "PostUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "update",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
