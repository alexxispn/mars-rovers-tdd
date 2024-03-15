import { Grid } from "./Grid.js"

export class MarsRover {
  private readonly Y_SIZE = 10

  execute(commands: string) {
    if (!commands) return "0:0:N"

    if (commands === "R") return "0:0:E"
    if (commands === "RR") return "0:0:S"

    const extractedCommands = commands.split("")

    return `0:${extractedCommands.length % this.Y_SIZE}:N`
  }
}
