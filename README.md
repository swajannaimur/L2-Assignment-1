<div><h1>Interview Questions - Blog Task</h1></div>

<div><h3>1. What are some differences between interfaces and types in TypeScript? </h3></div>
<p>
  interface মূলত অবজেক্টের গঠন বা কাঠামো বর্ণনা করার জন্য ব্যবহৃত হয়।
type একটি টাইপ এলিয়াস তৈরি করে, যা primitive, union, tuple, object, function ইত্যাদি যেকোনো টাইপের জন্য ব্যবহার করা যায়।

interface একাধিকবার একই নাম ব্যবহার করলে declaration merging হয়। উদাহরণস্বরূপ, দুইবার একই নামের interface ডিফাইন করলে তাদের প্রপার্টি মিলিয়ে নেওয়া হয়।
type একবার ডিফাইন করার পর একই নাম আর ব্যবহার করা যায় না।

type সহজে Union, Tuple, Primitive ইত্যাদির জন্য ব্যবহার করা যায়।
interface মূলত অবজেক্টের জন্য ব্যবহৃত হয়, union বা tuple সরাসরি ব্যবহার করা যায় না।

interface ক্লাসকে enforce করতে ব্যবহার করা যায়। ক্লাস implements করে interface এর কাঠামো মেনে চলে।
type ক্লাসের জন্যও ব্যবহার করা যায়, কিন্তু implements করার সময় interface বেশি প্রাকটিক্যাল।

TypeScript কম্পাইলার interface এর জন্য বেশি optimized, কারণ এটি মূলত অবজেক্ট স্ট্রাকচার।
type বেশি flexible, তবে কিছু ক্ষেত্রে complexity বাড়ায়।
</p>

<div><h3>2. Explain the difference between any, unknown, and never types in TypeScript.</h3></div>
<p>
  TypeScript-এ any, unknown, এবং never টাইপের মধ্যে পার্থক্য আছে। any টাইপ মানে হলো যে কোনো ধরনের মান গ্রহণ করা যায় এবং কম্পাইলার কোনো চেক করবে না। এটি সবচেয়ে flexible কিন্তু unsafe, কারণ এতে ভুল টাইপ ব্যবহার হলেও TypeScript কোনো warning দেয় না। unknown টাইপও যে কোনো ধরনের মান নিতে পারে, কিন্তু এটি ব্যবহার করার আগে TypeScript-কে নিশ্চিত করতে হবে যে মানটি সঠিক টাইপের, অর্থাৎ type assertion বা type checking ছাড়া এর উপর কোনো অপারেশন করা যাবে না। এটি any-এর চেয়ে safer। never টাইপ পুরোপুরি আলাদা, এটি বোঝায় যে ফাংশন কখনোই কোনো মান return করবে না, যেমন exception throw করা বা অনন্ত লুপ। never টাইপ এমন পরিস্থিতির জন্য ব্যবহার হয় যেখানে কোন মান আসতেই পারে না।
</p>
