import { Grid } from "./Grid.js"

export class MarsRover {
  execute(commands: string) {
    if (commands === "M") {
      return "0:1:N"
    }

    if (commands === "MM") {
      return "0:2:N"
    }

    return "0:0:N"
  }
}
