import { Grid } from "./Grid.js"

export class MarsRover {
  execute(commands: string) {
    if (!commands) return "0:0:N"

    const extractedCommands = commands.split("")

    return `0:${extractedCommands.length % 10}:N`
  }
}
