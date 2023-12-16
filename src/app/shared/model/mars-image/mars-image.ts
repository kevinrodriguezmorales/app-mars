import { Rover } from "../rover/rover"

export interface MarsImage {
    id: number
    img_src: string
    earth_date: string
    rover: Rover
}
