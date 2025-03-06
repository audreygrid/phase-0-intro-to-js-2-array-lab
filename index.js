// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    let x = [...cats]
    x.push(name)
    return (x)
}

function prependCat(name) {
    let x = [...cats]
    x.unshift(name)
    return (x)
}

function removeLastCat() {
    let x = [...cats]
    x.pop()
    return (x)
}

function removeFirstCat() {
    let x = [...cats]
    x.shift()
    return (x)
}