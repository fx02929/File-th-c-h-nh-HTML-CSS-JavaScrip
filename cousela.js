// //gọi biến var và in ra kết quả
// var message = "troccola";
// console.log("trong message = " + message);


// //gọi hàm ẩn danh sau đó gọi biến var ra để hiển thị lên màn hình
// var a = function() {
//     var message = "troccola";
//     console.log("a: message = " + message);
//     b();
// }
// var b = function() {
//     console.log("b: message = " + message);
// }
// a();



// //////Kiểu dữ liệu nguyên thủy
// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined(không xác định)");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined(x không xác định)");
// }


// /////cấu trúc ngôn ngữ
// var string = "hello";
// string += " world";
// //string = string + " world";
// console.log(string + "!");


// //////sử dụng toán tử thông thường + - * / 
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//     console.log(a / 5);
// }
// test1(20);

// /////Trả về true nếu các toán hạng bằng nhau
// var x = 4, y = 4;
//     if (x == y) {
//         console.log("x = '4' bằng y ='4'");
//     }


// /////toán tử so sánh nếu x == y thì hiển thị ra "x = '4' is equal to y ='4'" còn nếu không bằng nhau thì không chả ra kết quả(Trả về true nếu các toán hạng bằng nhau và cùng kiểu)
// var x = 4, y = 4;
// if (x === y) {
//     console.log("x = '4' bằng y ='4'");
// }else {
//     console.log("không bằng nhau");
// }



// if(false || null || undefined || "" || 0 || NaN) {
//     console.log("this line won't ever execute");
// }
// else {
//     console.log ("All false");
// }

// ///////// câu lệnh if(tất cả để đúng)
// if (true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }

// ////////Cách sử dụng object
// function a() {
//     return {
//         name: "Yaakov"
//     };
// }

// function b() {
//     return {
//         name: "Yaakov"
//     };
// }

// console.log(a());
// console.log(b());

// ///// Dùng vòng lặp for
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     sum = sum + i;
// }
// console.log("Tổng từ 0 đến 9 = " + sum); // tính tổng các số 0+1+2+3+4+5+6+7+8+9 = 45!

// ////// Giá trị mặc định
// function troccola(sideDish) {
//     sideDish = sideDish || "BT";
//     console.log("troccola " + sideDish);
// }
// troccola("BBT");
// troccola();


// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
// /////Tạo đối tượng bằng cú pháp 'new Object ()'
// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);


// /////object theo nghĩa đen
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

// ///////function hàm nhân 2 số
// ///////Function là object
// function multiply(x, y) {
//     return x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// ///////Hàm giai thừa
// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };
//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);


// /////////Vượt qua tham chiếu so với giá trị
// function changePrrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrrimitive(value); //value nguyên thủy = value(giá trị)
// console.log("after changePrimitive, orig value:");
// console.log(value);




// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("Before:");
//     console.log(objValue);

//     objValue.x = 5;
//     console.log("after:");
//     console.log(objValue);
// }

// value = { x: 7 };
// changeObject(value);  //đối tượng giá trị = giá trị
// console.log("after changeObject, orig value:");
// console.log(value);


// //////sử dụng this 
// function test() {
//     console.log(this);
//     this.myName = "Yaakov";
// }
// test();
// console.log(window.myName);


// //////Tạo hàm
// function Circle (radius) {
//     this.radius = radius;

//     this.getArea = function () {
//         return Math.PI / Math.pow(this.radius, 2);
//     };
// }

// var myCircle = new Circle(10);
// console.log(muCircle);



// //////Tạo hàm
// function Circle (radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2);
// };

// var myCircle = new Circle(10);
// console.log(muCircle);

// var myOtherCrircle = new Circle(20);
// console.log(myOtherCrircle);


// ///////đối tượng kiểu chữ and "this"
// var literalCircle = {
//     radius: 10,

//     getArea: function () {
//         var self = this;
//         console.log(this);

//         var increaseRadius = function() {
//             this.radius = 20;
//         }
//         increaseRadius();
//         console.log(this.radius);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());


// //////arrays
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS $ JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);


// //////Hàm rút gọn
// var names = ["Yaakov", "John", "Joe"];
// console.log(name);

// for (var i = 9; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//     name: "Yaakov",
//     course: "HTML/CSS/JS",
//     platform: "Courera"
// };
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }


// names2.greeting = "Hi!";

// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }


// ////////closures
// function makeMultiplier (multiplier) {
//     return (
//         function (x) {
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));


// function makeMultiplier (multiplier) {
//     // var multiplier = 2;
//     function b() {
//         console.log("Multiplier is: " + multiplier);
//     }
//     b();

//     return (
//         function (x) {
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));



