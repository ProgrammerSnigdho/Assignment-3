function feetToMile(feet) { // Declaring the function feetToMile for converting feet to mile
    if (feet === 0) { // Checking if the number is 0 or not
        return `The feet can't be "0"`; // Returning that you can't give the number of feet "0"
    }
    else if (feet < 0) { // Checking if the number is negative or not
        return `The feet can't be negative`; // Returning that you can't give a negative number as the number of feet
    }
    const mile = feet / 5280; // Calculating the number of miles by dividing feet with 5280
    return `The number of miles in ${feet} feet is ${mile}`; // Returning the number of mile
}

// const result = feetToMile(5280); // Calling the feetToMile function with a parameter of feet
// console.log(result); // Printing the result



function woodCalculator(chair, table, bed) { // Declaring the function woodCalculator for calculating how much wood is needed for a number of chair, table and bed given in the parameters
    if (chair === 0 || table === 0 || bed === 0) { // Checking if any parameters given is "0" or not
        return `Any of the parameters given can't be "0"`; // Returning that any of the parameters can't be "0"
    }
    else if (chair < 0 || table < 0 || bed < 0) { // Checking if any parameters given is negative or not
        return `Any of the parameters given can't be negative`; // Returning that any of the parameters can't be negative
    }
    const chairTotalWood = chair * 5; // Calculating how much wood is needed for the number of chairs
    const tableTotalWood = table * 5; // Calculating how much wood is needed for the number of tables
    const bedTotalWood = bed * 5; // Calculating how much wood is needed for the number of beds
    return `The total wood needed is: ${chairTotalWood + tableTotalWood + bedTotalWood} Cubic Feet`; // returning how much wood is needed
}

// const result = woodCalculator(1, 1, 1); // Calling the woodCalculator function with 3 parameters one is the number of chair, the second is the number of tables and the last is the number of beds
// console.log(result); // Printing the result



function brickCalculator(storey) { // Declaring a function for calculating the number of brick needed in a number of stories of the parameter given
    let totalFeet; // Declaring the totalFeet variable
    if (storey === 0) { // Checking if the number of storey is "0" or not
        return `You can't give the number of stories "0"`; // Returning that you can't give the number of stories 0
    }
    else if (storey < 0) { // Checking if the number of storey is negative or not
        return `You can't give a negative number of stories`;  // Returning that you can't give a negative number of stories
    }
    else if (storey <= 10) { // Checking if the number of storey is less than or equals to "10" or not
        totalFeet = storey * 15; // Calculating the number of feet in the number of stories
    }
    else if (storey > 10 && storey <= 20) { // Checking if the number of storey is greater than 10 and less than or equals to 20 or not
        const first10StoreyFeet = 10 * 15; // Calculating the number of feet in the first 10 stories by multiplying 10 with 15
        storey -= 10; // Subtracting 10 from the number of stories
        totalFeet = first10StoreyFeet + storey * 12; // Calculating the number of total feet in the number of stories by adding the number of storey we just calculated with the feet needed in the first 10 stories
    }
    else { // Checking if the number of storey doesn't match any of these conditions
        const first10StoreyFeet = 10 * 15; // Calculating the number of feet in the first 10 stories by multiplying 10 with 15
        const second10StoreyFeet = 10 * 12; // Calculating the number of feet in the second 20 stories by multiplying 10 with 12
        storey -= 20; // Subtracting 20 from the number of stories
        totalFeet = first10StoreyFeet + second10StoreyFeet + storey * 10; // Calculating the number of total feet in the number of stories by adding the number of storey we just calculated with the feet needed in the first 10 stories and the feet needed in the second 10 stories
    }
    const totalBrick = totalFeet * 1000; // Calculating how much brick is needed 
    return `Total brick needed is: ${totalBrick}`; // Returning How much brick is needed
}

// const result = brickCalculator(12) // Calling the brickCalculator function with a parameter of stories
// console.log(result); // Printing the result



function tinyFriend(friendsList) {  // Declaring a function for checking which friend's name is the tiniest from an array given
    let tinyFriend = friendsList[0]; // Declaring the tinyFriend variable
    if (friendsList.length === 0) { // Checking if the array is empty or not
        return `You can't give an empty array`; // Returning that you can't give an empty array
    }
    else { // Checking if the array doesn't match any of these conditions
        for (let i = 0; i < friendsList.length; i++) { // Declaring a for loop that will run until the array is completely checked
            const friend = friendsList[i]; // Declaring a variable called friend that contains [i] positioned element
            if (friend.length < tinyFriend.length) { // Checking if the length of friend is less than the length of tinyFriend or not
                tinyFriend = friend; // Making the tinyFriend variable contain the friend variable
            }
            else { // Checking if the friend length doesn't match any of these conditions
                continue; // Skipping the friend
            }
        }
    }
    return `The tiny friend is: ${tinyFriend}`; // Returning the tiny friends name
}

// const result = tinyFriend(['Snigdho', 'Mugdho', 'Farhan', 'Sadman', 'Sadik', 'Sakib']) // Calling the tinyFriend function with a parameter which is an array and the array contains friends name
// console.log(result); // Printing the result