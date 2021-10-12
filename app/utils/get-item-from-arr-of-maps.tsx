export function getItemFromArrOfMaps(arr: any, key: string, keyVal: string) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] == keyVal) {
            const item: any = arr[i] || new Map();
            return [item, i];
        }
    }
    const item: any = arr[0] || new Map();
    return [item, 0];
}