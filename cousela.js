//gọi biến var và in ra kết quả
var message = "troccola";
console.log("trong message = " + message);


//gọi hàm ẩn danh sau đó gọi biến var ra để hiển thị lên màn hình
var a = function() {
    var message = "troccola";
    console.log("a: message = " + message);
    b();
}
var b = function() {
    console.log("b: message = " + message);
}
a();



//////Kiểu dữ liệu nguyên thủy
var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined(không xác định)");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined(x không xác định)");
}


/////cấu trúc ngôn ngữ
var string = "hello";
string += " world";
//string = string + " world";
console.log(string + "!");


//////sử dụng toán tử thông thường + - * / 
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
    console.log(a / 5);
}
test1(20);

/////Trả về true nếu các toán hạng bằng nhau
var x = 4, y = 4;
    if (x == y) {
        console.log("x = '4' bằng y ='4'");
    }


/////toán tử so sánh nếu x == y thì hiển thị ra "x = '4' is equal to y ='4'" còn nếu không bằng nhau thì không chả ra kết quả(Trả về true nếu các toán hạng bằng nhau và cùng kiểu)
var x = 4, y = 4;
if (x === y) {
    console.log("x = '4' bằng y ='4'");
}else {
    console.log("không bằng nhau");
}



if(false || null || undefined || "" || 0 || NaN) {
    console.log("this line won't ever execute");
}
else {
    console.log ("All false");
}

///////// câu lệnh if(tất cả để đúng)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

////////Cách sử dụng object
function a() {
    return {
        name: "Yaakov"
    };
}

function b() {
    return {
        name: "Yaakov"
    };
}

console.log(a());
console.log(b());

///// Dùng vòng lặp for
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + i;
}
console.log("Tổng từ 0 đến 9 = " + sum); // tính tổng các số 0+1+2+3+4+5+6+7+8+9 = 45!

////// Giá trị mặc định
function troccola(sideDish) {
    sideDish = sideDish || "BT";
    console.log("troccola " + sideDish);
}
troccola("BBT");
troccola();

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);