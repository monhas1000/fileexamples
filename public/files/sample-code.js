/**
 * Sample JavaScript File
 * This file demonstrates common JavaScript patterns and functions
 */

// Basic variable declarations
const appName = "Sample JavaScript App"
let counter = 0
var legacyVar = "This is a legacy variable using var"

// Function declarations
function greet(name) {
  return `Hello, ${name}!`
}

// Arrow functions
const multiply = (a, b) => a * b

// Class definition
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
  }

  static createAnonymous() {
    return new Person("Anonymous", 0)
  }
}

// Array methods
const fruits = ["apple", "banana", "orange", "mango"]
const filteredFruits = fruits.filter((fruit) => fruit.length > 5)
const fruitLengths = fruits.map((fruit) => fruit.length)

// Object manipulation
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true,
  },
}

const {
  name,
  email,
  preferences: { theme },
} = user

// Promises and async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, value: "Sample data" }
      if (data) {
        resolve(data)
      } else {
        reject(new Error("Failed to fetch data"))
      }
    }, 1000)
  })
}

async function processData() {
  try {
    const data = await fetchData()
    console.log("Data received:", data)
    return data.value
  } catch (error) {
    console.error("Error:", error.message)
    return null
  }
}

// Event handling
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("action-button")
  if (button) {
    button.addEventListener("click", () => {
      counter++
      console.log(`Button clicked ${counter} times`)
    })
  }
})

// Module exports
export { greet, multiply, Person, processData }
