<div><h1>Interview Questions - Blog Task</h1></div>

<div><h3>1. What are some differences between interfaces and types in TypeScript? </h3></div>
<p>১. বেসিক সংজ্ঞা

interface → মূলত অবজেক্টের (Object) গঠন বা কাঠামো বর্ণনা করার জন্য ব্যবহৃত হয়।

type → একটি টাইপ এলিয়াস তৈরি করে, যা primitive, union, tuple, object, function ইত্যাদি যেকোনো টাইপের জন্য ব্যবহার করা যায়।

interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

২. একাধিক বারের সম্প্রসারণ (Extending / Declaration Merging)

interface → একাধিকবার একই নাম ব্যবহার করলে মিলিয়ে নেওয়া হয় (declaration merging)।

interface Person { name: string; }
interface Person { age: number; }
const p: Person = { name: 'Rakib', age: 22 }; // ✅ ঠিক


type → একবার ডিফাইন করার পর একই নাম আর ব্যবহার করা যায় না।

type Person = { name: string; }
type Person = { age: number; } // ❌ Error

৩. Union ও Tuple টাইপের সাথে ব্যবহার

type → সহজে Union, Tuple, Primitive ইত্যাদি টাইপের জন্য ব্যবহার করা যায়।

type ID = string | number;
type Point = [number, number];


interface → মূলত অবজেক্টের জন্য, union বা tuple সরাসরি ব্যবহার করা যায় না।

৪. ক্লাসের সাথে ব্যবহার

interface → ক্লাসকে enforce করতে ব্যবহার করা যায়।

interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;
  constructor(name: string) { this.name = name; }
  greet() { console.log(`Hi, I'm ${this.name}`); }
}


type → ক্লাসের জন্যও ব্যবহার করা যায়, কিন্তু implements করার সময় interface বেশি প্রাকটিক্যাল।

৫. সম্ভাব্য পারফরম্যান্স

TypeScript কম্পাইলার interface এর জন্য বেশি optimized, কারণ এটি মূলত অবজেক্ট স্ট্রাকচার।

type অনেক জায়গায় more flexible কিন্তু কিছু ক্ষেত্রে complexity বাড়ায়।</p>
