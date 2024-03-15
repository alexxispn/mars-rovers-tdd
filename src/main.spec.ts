import { describe, expect, it } from "vitest"
import { MarsRover } from "./MarsRover.js"

describe("Mars rover kata", () => {
  it("mars rover should exists", () => {
    const marsRover = new MarsRover()

    expect(marsRover).toBeDefined()
  })

  it("should return initial position", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("")

    expect(position).toEqual("0:0:N")
  })

  it("should calculate position when moving once", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("M")

    expect(position).toEqual("0:1:N")
  })

  it("should calculate position when moving twice", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("MM")

    expect(position).toEqual("0:2:N")
  })
})
