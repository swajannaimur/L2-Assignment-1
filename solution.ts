// Problem 1
const formatValue = (input: string | number | boolean): string | number | boolean | undefined => {
    if (typeof input === "string") {
        return (input.toUpperCase());
    } else if (typeof input === "number") {
        return (input * 10)
    } else if (typeof input === "boolean") {
        return (!input)
    }
}

// Problem 2
const getLength = (input: string | number[]): number | undefined => {
    if (typeof input === "string") {
        return (input.length)
    } else if (Array.isArray(input)) {
        return (input.length)
    }
}

// Problem 3
class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

// Problem 4
type Item = {
    title: string,
    rating: number
}

const filterByRating = (items: Item[]): Item[] => {
    return items.filter((item) => item.rating >= 4)
}

// Problem 5
type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive === true)
}

// problem 6
interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

const printBookDetails = (book: Book): void => {
    const avaibility = book.isAvailable ? "yes" : "no"
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${avaibility}`);
}

// Problem 7
function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (string | number)[] {
    const freshArray: (number | string)[] = []

    for (let a = 0; a < array1.length; a++) {
        let isExists = false
        for (let b = 0; b < freshArray.length; b++) {
            if (array1[a] === freshArray[b]) {
                isExists = true
            }
        }
        if (!isExists) {
            freshArray.push(array1[a])
        }
    }

    for (let a = 0; a < array2.length; a++) {
        let isExists = false
        for (let b = 0; b < freshArray.length; b++) {
            if (array2[a] === freshArray[b]) {
                isExists = true
            }
        }
        if (!isExists) {
            freshArray.push(array2[a])
        }
    }
    return freshArray
}


// Problem 8
interface Product {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

const calculateTotalPrice = (products: Product[]) => {
    return products.reduce((total, product) => {
        const totalPrice = product.price * product.quantity
        const discountedPrice = product.discount !== undefined ? totalPrice - totalPrice * product.discount / 100 : totalPrice

        return total + discountedPrice
    }, 0)
}


