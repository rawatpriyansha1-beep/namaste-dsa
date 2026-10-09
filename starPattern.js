// Star Pattern learned in Namaste dsa course practice

// 1st pattern
/*
 * * * *
 * * * *
 * * * *
 * * * *
*/

/* 1st program
for (let i = 0; i < 4; i++) { // responsible for rows
    let row = "";
    for (let j = 0; j < 4; j++) { // responsible for cols
        row = row + "* ";
    }
    console.log(row);
} */
// 2nd pattern
/*
 *
 * *
 * * *
 * * * *
*/
// 2nd program
/* for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = i; j >= 0; j--) { //  for(let j =0; j< i+1; j++) or for(let j =0; j<= i; j++)
        row = row + "* ";
    }
    console.log(row);
}*/

// 3rd pattern
/*
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/
/*
note
let n = 4;
for(let i =0;i<n+1;i++){} // this loop will run for [0,1,2,3,4]
for(let j=0;j<=n;j++){} // this loop will run for [0,1,2,3,4]
so, technically both loops will run for same iteration just the way of writing is different
*/
// 3rd program
/*for (let i = 1; i < 6; i++) {
    let row = "";
    for (let j = 1; j < i + 1; j++) { // or for(let j=0; j<=i; j++){row += j+" ";} both are same as per not written above this program
        row += j + " ";
    }
    console.log(row);
}*/
// 4th pattern
/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
*/
// 4th program

/*for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) { // or for(let j=0; j<=i; j++){row += j+" ";} both are same as per not written above this program
        row = row + (i + 1) + " ";
    }
    console.log(row);
}*/

// 5th pattern
/*
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/
// 5th program
/*for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row = row + j + " ";
    }
    console.log(row);
}*/

// 6th pattern
/*
    *
   **
  ***
 ****
*****
*/
// 6th program 
/*for (let i = 1; i <= 5; i++) { // no. of rows
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row = row + " ";
    }
    for (let j = 0; j < i; j++) {
        row = row + i;
    }
    console.log(row);

}*/
// 7th pattern
/*
1
10
101
1010
10101
*/
// 7th program
/*for (let i = 1; i <= 5; i++) { // no. of rows
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }


    console.log(row);
}
*/

// 8th pattern
/*
1
01
010
1010
10101
*/
// 8th program
let toggle = 1;
for (let i = 1; i <= 5; i++) { // no. of rows
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }


    console.log(row);
}