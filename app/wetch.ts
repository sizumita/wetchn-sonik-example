import {createWache} from "wetchn";
import AsyncLocalStorageWacheService from "wetchn/wache";

const {wache, etch} = createWache(AsyncLocalStorageWacheService.create())

export {
    wache,
    etch
}
