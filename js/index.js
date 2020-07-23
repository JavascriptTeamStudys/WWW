var victory = 1;
var start;
var position;
var nextPosition;
var times;
var color = '#';
var begin = function (speed) {
    start = setInterval(function () {
        if (victory == 1) {
            lastNodeh = 1;
            setnode = 0;
            var family = document.getElementById('play');
            if (!family.children[0]) {
                position = addNode();
                nextblock();
            }
            var node = document.getElementsByClassName('move')
            var allnode = document.getElementById('play').children
            var isded = 0;
            for (i = 0; i < allnode.length; i++) {
                if (allnode[i].getAttribute('class') != 'move') {
                    for (var key in position) {
                        if (allnode[i].offsetLeft == position[key].X && position[key].Y + 20 - allnode[i].offsetTop == 0) {
                            isded = 1;
                            break;
                        }
                    }
                }
            }
            if (node[0].offsetTop == 680 || node[1].offsetTop == 680 || node[2].offsetTop == 680 || node[3].offsetTop == 680) {
                var nodes = family.children;
                for (d = 0; d < nodes.length; d++) {
                    nodes[d].setAttribute('class', '')
                }
                var rowsmax = fullDel();
                if (rowsmax) {
                    match(rowsmax);
                }
                setnode = 1;
            }
            else if (isded) {
                for (b = 0; b <= 3; b++) {
                    if (lastNodeh > node[b].offsetTop) {
                        lastNodeh = node[b].offsetTop;
                    }
                }
                var nodes = family.children;
                for (d = 0; d < nodes.length; d++) {
                    nodes[d].setAttribute('class', '')
                }
                var rowsmax = fullDel();
                if (rowsmax) {
                    match(rowsmax);
                }
                setnode = 1;
            }
            if (setnode == 1 && lastNodeh >= 0) {
                position = addNode();
                nextblock();
                setnode = 0;
            }
            else if (setnode == 0) {
                var node = document.getElementsByClassName('move')
                for (var fix in position) {
                    if (fix == 'type') {
                        break;
                    }
                    position[fix].Y += 1;
                }
                reload(position.type, position.cla, position.box1.X, position.box1.Y)
                setnode = 0;
            }
            else {
                victory = 0;
            }
        }
        else {
            clearInterval(start);
            clearInterval(times);
            faild();
        }
    }, speed);
}
function fullDel() {
    var family = document.getElementById('play');
    allnode = family.children;
    allnodeFix = {};
    for (i = 0; i < allnode.length; i++) {
        allnodeFix['box' + i] = {
            X: allnode[i].offsetLeft,
            Y: allnode[i].offsetTop
        }
    }
    var rows = [];
    var rowsmax = 0;
    for (var key in allnodeFix) {
        if (!rows[allnodeFix[key].Y]) {
            rows[allnodeFix[key].Y] = 1;
        }
        else {
            rows[allnodeFix[key].Y] += 1;
            if (rows[allnodeFix[key].Y] == 25) {
                rowsmax++;
            }
        }
    }
    var rosplay = [];
    for (i = 0; i < rowsmax; i++) {
        rosplay.push(rows.indexOf(25));
        rows[rows.indexOf(25)] = 1;
    }
    rosplay = numSort(rosplay).reverse();
    for (i = 1; i <= rowsmax; i++) {
        var bot = rosplay[i - 1]
        bot += (i - 1) * 20;
        for (b = 0; b < allnode.length; b++) {
            if (allnode[b].offsetTop == bot) {
                allnode[b].remove();
                b--;
            }
        }
        allnode = family.children;
        for (c = 0; c < allnode.length; c++) {
            if (allnode[c].offsetTop < bot) {
                allnode[c].style.top = (allnode[c].offsetTop + 20) + 'px';
            }
        }
    }
    return rowsmax;
}
function setTime() {
    var date = 0;
    times = setInterval(function () {
        var hour = 0;
        var min = 0;
        var sec = 0;
        var time = '';
        sec = date % 60;
        min = parseInt(date / 60) % 60;
        hour = parseInt(date / 60 / 60) % 24;
        if (hour) {
            if (hour < 10) {
                time += '小时:' + '0' + hour;
            }
            else { time += '小时:' + hour }
        }
        if (min) {
            if (min < 10) {
                time += '分:' + '0' + min;
            }
            else { time += '分:' + min }
        }
        if (sec < 10) {
            time += '秒:' + '0' + sec;
        }
        else { time += '秒:' + sec }
        document.getElementsByClassName('time')[0].children[1].children[1].innerText = time;
        date++;
    }, 1000);
}
function match(time) {
    var time = 200 * time;
    var fix = 1;
    var num = setInterval(function () {
        document.getElementsByClassName('time')[0].children[0].children[1].innerText = document.getElementsByClassName('time')[0].children[0].children[1].innerText * 1 + 1;
        if (fix == time) {
            clearInterval(num);
        }
        fix++
    }, 10);
}
function faild() {
    var text = document.getElementsByClassName('time')[0].children[0].children[1].innerText
    if (text < 2000) {
        text = '是个黑铁';
    }
    else if (text >= 2000 && text < 4000) {
        text = '是个青铜';
    }
    else if (text >= 4000 && text < 6000) {
        text = '是个白银';
    }
    else if (text >= 6000 && text < 7000) {
        text = '是个黄金';
    }
    else if (text >= 7000 && text < 8000) {
        text = '是个铂金';
    }
    else if (text >= 8000 && text < 9000) {
        text = '是个钻石';
    }
    else{
        text = '王者非你莫属';
    }
    document.getElementsByClassName('faild')[0].children[1].innerText = '你的得分:' + document.getElementsByClassName('time')[0].children[0].children[1].innerText + '分' + '[' + text + ']';
    document.getElementsByClassName('faild')[0].style.display = 'block';
    document.getElementById('play').innerHTML = '';
    document.getElementsByClassName('time')[0].children[0].children[1].innerText = 0;
    document.getElementsByClassName('time')[0].children[1].children[1].innerText = '秒:00';
}
document.onclick = function (evt) {
    var e = evt || event;
    var node = e.target || e.srcElement
    if (node.getAttribute('class') == 'startBtn') {
        node.parentNode.style.display = 'none';
        begin(10);
        setTime();
    }
    if (node.getAttribute('class') == 'endBtn') {
        node.parentNode.style.display = 'none';
        victory = 1;
        begin(10);
        setTime();
    }
}
document.onkeydown = function (evt) {
    var e = evt || event;
    if (e.keyCode == 65) {
        clearInterval(start);
        if (position.type == 0) {
            position.cla = 1;
        }
        else if (position.type <= 3) {
            position.cla == 1 ? position.cla = 2 : position.cla = 1;
        }
        else {
            position.cla == 1 ? position.cla = 4 : position.cla -= 1;
        }
        if (newBlock(position.type, position.cla, position.box1.X, position.box1.Y, 20) == 0) {
            if (position.type == 0) {
                position.cla = 1;
            }
            else if (position.type <= 3) {
                position.cla == 2 ? position.cla = 1 : position.cla = 2;
            }
            else {
                position.cla == 4 ? position.cla = 1 : position.cla += 1;
            }
        }
        reload(position.type, position.cla, position.box1.X, position.box1.Y);
        begin(10);
    }
    else if (e.keyCode == 68) {
        clearInterval(start);
        if (position.type == 0) {
            position.cla = 1;
        }
        else if (position.type <= 3) {
            position.cla == 2 ? position.cla = 1 : position.cla = 2;
        }
        else {
            position.cla == 4 ? position.cla = 1 : position.cla += 1;
        }
        if (newBlock(position.type, position.cla, position.box1.X, position.box1.Y, 20) == 0) {
            if (position.type == 0) {
                position.cla = 1;
            }
            else if (position.type <= 3) {
                position.cla == 1 ? position.cla = 2 : position.cla = 1;
            }
            else {
                position.cla == 1 ? position.cla = 4 : position.cla -= 1;
            }
        }
        reload(position.type, position.cla, position.box1.X, position.box1.Y);
        begin(10);
    }
    else if (e.keyCode == 39) {
        clearInterval(start);
        for (var key in position) {
            if (key == 'type') {
                break;
            }
            position[key].X += 20;
        }
        if (newBlock(position.type, position.cla, position.box1.X, position.box1.Y, 20) == 0) {
            for (var key in position) {
                if (key == 'type') {
                    break;
                }
                position[key].X -= 20;
            }
        }
        reload(position.type, position.cla, position.box1.X, position.box1.Y);
        begin(10);
    }
    else if (e.keyCode == 37) {
        clearInterval(start);
        for (var key in position) {
            if (key == 'type') {
                break;
            }
            position[key].X -= 20;
        }
        if (newBlock(position.type, position.cla, position.box1.X, position.box1.Y, 20) == 0) {
            for (var key in position) {
                if (key == 'type') {
                    break;
                }
                position[key].X += 20;
            }
        }
        reload(position.type, position.cla, position.box1.X, position.box1.Y);
        begin(10);
    }
    else if (e.keyCode == 40) {
        clearInterval(start);
        for (var key in position) {
            if (key == 'type') {
                break;
            }
            position[key].Y += 10;
        }
        if (newBlock(position.type, position.cla, position.box1.X, position.box1.Y, 20) == 0) {
            for (var key in position) {
                if (key == 'type') {
                    break;
                }
                position[key].Y -= 10;
            }
        }
        reload(position.type, position.cla, position.box1.X, position.box1.Y);
        begin(10);
    }
}