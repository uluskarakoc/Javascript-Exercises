let i=1;
const result=()=>{console.log(`Result🥊🥊🥊🥊🥊🥊${i++}`)}
 // // Syntax
// // Functionless
// sort()

// // Arrow function
// sort((a, b) => { /* … */ } )

// // Compare function
// sort(compareFn)

// // Inline compare function
// sort(function compareFn(a, b) { /* … */ })

result()
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
const rst= items.sort((a, b) => a.localeCompare(b));
console.log(rst)

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
