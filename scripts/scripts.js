var el = document.querySelector('ul');
// var obj = toJSON(el);
console.log(JSON.stringify(toJSON(el)));
// console.log(toDOM(obj));


function loadDomTree () {
    $.ajax({
        type: 'GET',
        url: 'dom.json',
        dataType: 'json',
        success: function (data) {
            // console.log(data);

            var body = document.querySelector('body');
            body.append(toDOM(data));

        }
    });
}
loadDomTree();





// <h4 id="example4" class="exclass3"> Пример </h4>
var d = document.styleSheets[0];
console.log(d.cssRules);
console.log(document.styleSheets);
var len = d.cssRules.length;
var s = len + ': ' + d.cssRules.cssText;
var rule = "h4.exclass3 { color: #126534; font-size:20px; font-style: italic; background-color: #aaeeff;}"
d.insertRule(rule, len);
len = d.cssRules.length;
alert(s + '\n' + len + ': ' + d.cssRules[len - 1].cssText);


setTimeout(function () {
    document.styleSheets[0].deleteRule(0);
}, 2000);