
//////////////////////////////
////////  Problem 01   ///////
/////// Feet To Inch /////////
//////////////////////////////

function feetToInch(feet) {
    let inch = 0;
    if (typeof feet != "number") {
        return "Insert a number.";
    } else {
        inch = feet * 12;
        return inch;
    }
}
console.log(feetToInch(true));

/////////////////////////////////////
//////////  Problem 02   ////////////
/////// Centimeter To Meter /////////
/////////////////////////////////////

function centimeterToMeter(centimeter) {
    let meter = 0;
    if (typeof centimeter != "number") {
        return "Insert a number";
    } else {
        meter = centimeter * 0.01;
        return meter;
    }
}

console.log(centimeterToMeter('2'))

/////////////////////////////////////
//////////  Problem 03   ////////////
/////// Page Requirements ///////////
/////////////////////////////////////

function pageRequirements(book1, book2, book3) {
    let totalPages = 0;
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    // Check inserted value number or not
    if (typeof book1 == "number" && typeof book2 == "number" && typeof book3 == "number") {
        // Check inserted value positive or not
        if (book1 >= 0 && book2 >= 0 && book3 >= 0) {
            let book1PagesTotal = book1 * book1Pages;
            let book2PagesTotal = book2 * book2Pages;
            let book3PagesTotal = book3 * book3Pages;
            totalPages = book1PagesTotal + book2PagesTotal + book3PagesTotal;
            return totalPages;
        } else {
            return "Number of Books cannot be negative";
        }
    }
    else {
        return "Please Insert Numbers Only";
    }
}
console.log(pageRequirements(0, 2, ''));


//////////////////////////////////////////////////////
////////////////  Problem 04   ///////////////////////
/////// Find Largest Name From Friend List ///////////
//////////////////////////////////////////////////////

function bestFriend(friendList) {
    let initialLength = friendList[0].length;
    let bestFriendName = "";
    for (let i = 0; i < friendList.length; i++) {
        let singleLenght = friendList[i].length;
        let singleFriend = friendList[i];
        if (initialLength < singleLenght) {
            bestFriendName = singleFriend;
        }
    }
    return bestFriendName;
}
let myFriendsList = ["azim", "mahmud", "ovi", "biplop", "sekannader"];
console.log(bestFriend(myFriendsList));



///////////////////////////////////////////////////////////////////////
////////////////////////////  Problem 05  /////////////////////////////
/////// Get Array List From An Array Till Found Negative Number ///////
///////////////////////////////////////////////////////////////////////

function onlyPositive(myNumbers) {
    let positiveNums = [];
    for (let i = 0; i < myNumbers.length; i++) {
        let single = myNumbers[i];
        if (single >= 0) {
            positiveNums.push(single);
        } else {
            return positiveNums;
        }
    }
    return positiveNums;
}
let numbersList = [2, 1, 7, 8, 4, 0, 9, 5, -9, 2, 1, 0];
console.log(onlyPositive(numbersList));
