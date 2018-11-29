var get = function (id) {
    return document.getElementById(id);
}
var gets = function (name) {
    return document.getElementsByTagName(name);
}
var c = function (id) {
    return document.createElement(id);
}
onload = function () {
    var image = c("img");
    var dv = get("dv");
    dv.setAttribute("width", "600px");
    dv.setAttribute("style", "text-align:center");
    dv.appendChild(image);
    var ul = document.getElementsByTagName("ul")[0];
    var a = ul.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function () {
            image.src = this.href;
            return false;
        };
    }

};