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
