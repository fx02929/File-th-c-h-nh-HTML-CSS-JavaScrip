// /////Thao tác DOM
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
    console.log(this);
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";

    // document
    //     .getElementById("content")
    //     .textContent = message;

    document
        .getElementById("content")
        .innerHTML = message;

    if (name === "student") {
        var title = 
            document
                .querySelector("#title")
                .textContent;
        title += " & Sử dụng Javascript để xây dựng ứng dụng web!";

            document
                .querySelector("h1")
                .textContent = title;
    }
}
// Unobstrusive event binding 
// document