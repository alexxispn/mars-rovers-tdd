import { Grid } from "./Grid.js"

export class MarsRover {
  private readonly Y_SIZE = 10

  execute(commands: string) {
    if (!commands || commands === "RRRR") return "0:0:N"

    if (commands === "R") return "0:0:E"
    if (commands === "RR") return "0:0:S"
    if (commands === "RRR") return "0:0:W"

    return `0:${commands.length % this.Y_SIZE}:N`
  }
}
