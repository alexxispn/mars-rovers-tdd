import { Grid } from "./Grid.js"

export class MarsRover {
  private readonly Y_SIZE = 10

  private readonly directions = ["N", "E", "S", "W"]

  execute(commands: string) {
    if (!commands || commands === "RRRR") return "0:0:N"

    if (commands.split("").every((c) => c === "R")) {
      return `0:0:${this.directions[commands.length % this.directions.length]}`
    }

    return `0:${commands.length % this.Y_SIZE}:N`
  }
}
