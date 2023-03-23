// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - hqLocation);
}

function distanceFromHqInFeet(pickup) {
    return 264 * distanceFromHqInBlocks(pickup);
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distInFeet = distanceTravelledInFeet(startBlock, endBlock);
    if(distInFeet < 400) return 0;
    if(distInFeet >= 400 && distInFeet <= 2000) {
        return (distInFeet - 400) * 0.02;
    }
    if(distInFeet > 2000 && distInFeet < 2500) {
        return 25;
    }
    return 'cannot travel that far';
}
