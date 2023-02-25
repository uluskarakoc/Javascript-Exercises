let person = {
    firstName: 'Michael',
    lastName: 'Smith',
    citizenship: 'Germany',
    city: 'Berlin',
    gender: 'male',
    job: 'driver',
    age: 28,
    height: 178,
    'eye colour': 'brown',
};
const getKeyValueObjects = (person) => {
    const outerArray = []; 
    for (key in person) { 
        const innerObject = {}; 
        innerObject[key] = person[key];  
        outerArray.push(innerObject); 
    };
return outerArray;
}
console.log(getKeyValueObjects(person));