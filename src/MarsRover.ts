import { Grid } from "./Grid.js"

export class MarsRover {
  execute(command: string) {
    if (command === "M") return "0:1:N"
    return "0:0:N"
  }
}
