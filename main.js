// 1. Yangi obyekt yarating. Unga "name", "age" va "location" kabi xususiyatlarni qo'shing. Keyin, obyektning qiymatlarini konsolda ko'rsating.

// const my = {
    
// };

// my.name = "Qoyilbek",
// my.age = 18,
// my.location = "Farg'ona";
// console.log(my);

// ==================================================

// 2. Obyekt ichida boshqa obyekt yarating. Masalan, "address" obyektini asosiy obyektda joylashtiring, unda "city" va "zipCode" kabi xususiyatlar bo'lsin.

// const location = {
//     adress:{
//         city: "Fargona",
//         zipCode: 96,
//     }
// }


// ==================================================

// 3. Biror obyektda mavjud bo'lgan xususiyatni o'zgartirish, yangi xususiyat qo'shish va xususiyatni o'chirish vazifasini bajaring.

// const my = {
//     age: 17,
//     location: "Andijon",
//     firstName: "Qoyilbek",
// }
// my.age = 18;
// my.location = "Farg'ona";
// console.log(my);

// const my = {
    // age: 18,
    // firstName: "Qoyilbek",
    // location: "Farg'ona"
// }
// my.lastName = "Bozorov"
// console.log(my);

// const my = {
//   age: 18,
//   firstName: "Qoyilbek",
//   location: "Farg'ona",
//   lastName: "Bozorov"
// }

// delete my.location;
// console.log(my);

// ==================================================

//4. Ushbu obyetkdan home va work qiymatlarini destructuring orqali oling.

// const user = {
//     name: "Toshpo'lat",
//     age:30,
//     adress: {
//         city: "Toshkent",
//         street: "Amir Temir Street",
//         zipCode: 100000,
//     },
//     contact:{
//         email: "ulug'bek@example.com",
//         phone : {
//             home: "123-4567",
//             work: "765-4321",
//         },
//     },
// };

// const {contact:{phone:{home,work}}}  = user;

// console.log(home,work);
