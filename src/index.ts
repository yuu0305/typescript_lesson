// jsに変換して実行
// $ npm run build
// node dist/index.js

// tsを直接実行
// npx ts-node src/index.ts

let hello: string = "hello"
console.log(hello);

// function
function add(a: number, b: number): number {
   return a + b
}

// obgect
const person: {
   name: string;
   age: number;
} = {
   name: 'Jack',
   age: 27
}

// array
const fruits: string[] = ['Apple', 'Banana', 'Grape']

// tuple型
const book: [string, number, boolean] = ['boolean', 1500, false]

console.log(person)


// enum型(列挙型)
enum CoffeeSize {
   SHORT = 'short',
   TALL = 'tall'
}
const coffee = {
   hot: true, 
   size: CoffeeSize.TALL
}

console.log(coffee)
