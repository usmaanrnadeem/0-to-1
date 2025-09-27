// Translate border-left-width to borderLeftWidth

function camelzie(str) {
    return str
        .split("-")
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.substr(1))
        .join("")
}

// Filter range 

function filterRange(arr, a, b) {
    return arr.filter(item => a >= item && item <= b);
}

// Filter range "in place"
// Using splice when running forward to solve this will cause elements to be skipped when we remove and element 
// To solve this we can iterate backwards

function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length-1; i >= 0; i--) {
        if (a > arr[i] || b < arr[i]) {
            arr.splice(i,1)
        }
    }
}

// Sort in decreasing order


function sortArray(arr) {
    return arr.sort((a,b) => a-b)
}

// Copy and sort array 

function copySorted(arr) {
    return arr.slice().sort();
}

// Shuffle an Array

function shuffle(arr) {
    let ind;
    let newArray = [];
    while (arr.length) {
        ind = Math.floor((Math.random() * (arr.length)));
        if (arr[ind] !== undefined) {
            newArray.push(arr[ind]);
            arr.splice(ind,1);
        }
    }
    arr.push(...newArray);
}

// Filter unique array members 

function unique(arr) {
    let newArray = [];

    for (const item of arr) {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    }

    return newArray
}


// Map to names 

let names = users.map(obj => obj.name)

// Map to objects 

let usersMapped = users.map(item => {
    item.fullName = item.name + " " + item.surname;
    delete item.name 
    delete item.surname
    return item
})

// Sort users by age 

function sortByAge(users) {
    users.sort((a,b) => a.age - b.age)
}


