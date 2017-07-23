
function   change(content){
    var str = JSON.stringify(content, undefined, 30);
    document.getElementById('output').innerHTML = str;
}