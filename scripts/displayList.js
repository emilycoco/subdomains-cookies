// Add array as list elements

function displayList(obj) {
    var list = document.getElementsByTagName('ul')[0];

    var arr = JSON.parse(obj).data;
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.textContent = arr[i];
        list.appendChild(li);
    }
}