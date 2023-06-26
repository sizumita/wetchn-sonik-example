import {wache} from "../wetch";

export const getTime = wache(() => {
    return Date.now()
})
