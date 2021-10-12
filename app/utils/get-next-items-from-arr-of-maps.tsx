import { getRange } from '../utils/range'

export function getNextItemsFromArrOfMaps(arr: any, itemCount: number, itemQuant: number) {

    let nextItemIndexs: any[]

    const startVal: number = itemCount + 1
    const maxVal: number = arr.length
    const maxValM1: number = arr.length - 1
    const endVal: number = itemCount + itemQuant
    if (startVal == maxVal) {
        nextItemIndexs = getRange(0, itemQuant, 1);
    }
    else if (endVal >= maxVal) {
        var backVals = getRange(startVal, maxValM1, 1);
        var frontValsEnd = endVal - maxValM1;
        var frontVals = getRange(0, frontValsEnd, 1);
        nextItemIndexs = [...backVals, ...frontVals];
    } else {
        nextItemIndexs = getRange(startVal, endVal, 1);
    }

    return nextItemIndexs
}