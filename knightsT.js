function knightMoves(start, end) {
    const boardSize = 8;
    const [startX, startY] = start;
    const [endX, endY] = end;

    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]];

    if (startX < 0 || startX >= boardSize || startY < 0 || startY >= boardSize || endX < 0 || endX >= boardSize || endY < 0 || endY >= boardSize) {
        return [];
    }

    if (startX === endX && startY === endY) {
        return [start];
    }

    const  q = [[startX, startY]];
    const parentMap = new Map();
    const startKey = `${startX}, ${startY}`;
    parentMap.set(startKey, null)

    const visited = new Set();
    visited.add(startKey);
    let moveCount = 0;

    while (q.length > 0) {
        const [x, y] = q.shift();

        for (const [dx, dy] of moves) {
            const nextX = x + dx;
            const nextY = y + dy;
            const nextPosKey = `${nextX}, ${nextY}`;

            if (nextX >= 0 && nextX < boardSize && nextY >= 0 && nextY < boardSize && !visited.has(nextPosKey)) {
                visited.add(nextPosKey);
                parentMap.set(nextPosKey, [x, y]);
                q.push([nextX, nextY]);

                if (nextX === endX && nextY === endY) {
                const path = [];
                let current = [endX, endY];

                while (current !== null) {
                    moveCount++;
                    path.push(current);
                    const currentKey = `${current[0]}, ${current[1]}`;
                    current = parentMap.get(currentKey);
                }
                console.log(`You made it in ${moveCount - 1} moves! Here's your path:`);
                return path.reverse();
                }
            }
        }
    }
    return [];
}

const test = knightMoves([0, 0], [7, 7]);
console.log(test);
const test2 = knightMoves([3, 3], [4, 3]);
console.log(test2);