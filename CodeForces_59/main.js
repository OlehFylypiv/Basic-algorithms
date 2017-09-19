function createTeam(arr, k) {
    
    let playersCounter = 0;
    let teamsCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 5 - k) {
            playersCounter += 1;

            if (playersCounter === 3) {
                
                teamsCounter +=1;
                playersCounter = 0;
            }
        }
    }

    return teamsCounter;
}


const arr = [0, 0, 3, 0, 0, 4];
const k = 2;

console.log(createTeam(arr, k));
