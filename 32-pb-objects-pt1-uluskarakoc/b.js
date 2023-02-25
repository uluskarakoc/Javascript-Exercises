






const switchedCopy = (originalObject) => {
    const entriesArray = Object.entries(originalObject);
    const reversedArray = [];
    for (let i = 0; i < entriesArray.length; i++) {
        reversedArray.push(entriesArray[i].reverse());
    };
    return Object.fromEntries(reversedArray)
};
console.log(switchedCopy({location: 'berlin',status: 'occupied'}));

