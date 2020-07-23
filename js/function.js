function numSort(arr) {
    var stringlength = arr.length
    for (numMaxi = 1; numMaxi <= stringlength; numMaxi++) {
        if (isNaN(arr[numMaxi - 1])) {
            return false;
        }
    }
    for (numMaxi = 1; numMaxi < stringlength; numMaxi++) {
        var numMaxFix = true;
        for (numMaxp = 1; numMaxp <= stringlength - numMaxi; numMaxp++) {
            if (arr[numMaxp - 1] > arr[numMaxp]) {
                [arr[numMaxp - 1], arr[numMaxp]] = [arr[numMaxp], arr[numMaxp - 1]]
                numMaxFix = false;
            }
        }
        if (numMaxFix) {
            return arr;
        }
    }
    return arr;
}
function newBlock(type, cla, X, Y, size) {
    switch (type) {
        case 0:
            var position = {
                box1: {
                    X: X,
                    Y: Y
                },
                box2: {
                    X: X,
                    Y: Y - size
                },
                box3: {
                    X: X + size,
                    Y: Y - size
                },
                box4: {
                    X: X + size,
                    Y: Y
                }
            }
            break;
        case 1:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X + size,
                        Y: Y
                    },
                    box3: {
                        X: X + size * 2,
                        Y: Y
                    },
                    box4: {
                        X: X + size * 3,
                        Y: Y
                    }
                }
            }
            else {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y + size
                    },
                    box3: {
                        X: X,
                        Y: Y + size * 2
                    },
                    box4: {
                        X: X,
                        Y: Y + size * 3
                    }
                }
            }
            break;
        case 2:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X - size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y - size
                    },
                    box4: {
                        X: X + size,
                        Y: Y - size
                    }
                }
            }
            else if (cla == 2) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y - size
                    },
                    box3: {
                        X: X + size,
                        Y: Y
                    },
                    box4: {
                        X: X + size,
                        Y: Y + size
                    }
                }
            }
            break;
        case 3:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X + size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y - size
                    },
                    box4: {
                        X: X - size,
                        Y: Y - size
                    }
                }
            }
            else if (cla == 2) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y + size
                    },
                    box3: {
                        X: X + size,
                        Y: Y
                    },
                    box4: {
                        X: X + size,
                        Y: Y - size
                    }
                }
            }
            break;
        case 4:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y - size
                    },
                    box3: {
                        X: X + size,
                        Y: Y
                    },
                    box4: {
                        X: X + size * 2,
                        Y: Y
                    }
                }
            }
            else if (cla == 2) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X + size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y + size
                    },
                    box4: {
                        X: X,
                        Y: Y + size * 2
                    }
                }
            }
            else if (cla == 3) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y + size
                    },
                    box3: {
                        X: X - size,
                        Y: Y
                    },
                    box4: {
                        X: X - size * 2,
                        Y: Y
                    }
                }
            }
            else if (cla == 4) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X - size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y - size
                    },
                    box4: {
                        X: X,
                        Y: Y - size * 2
                    }
                }
            }
            break;
        case 5:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y - size
                    },
                    box3: {
                        X: X - size,
                        Y: Y
                    },
                    box4: {
                        X: X - size * 2,
                        Y: Y
                    }
                }
            }
            else if (cla == 2) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X + size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y - size
                    },
                    box4: {
                        X: X,
                        Y: Y - size * 2
                    }
                }
            }
            else if (cla == 3) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y + size
                    },
                    box3: {
                        X: X + size,
                        Y: Y
                    },
                    box4: {
                        X: X + size * 2,
                        Y: Y
                    }
                }
            }
            else if (cla == 4) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X - size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y + size
                    },
                    box4: {
                        X: X,
                        Y: Y + size * 2
                    }
                }
            }
            break;
        case 6:
            if (cla == 1) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X - size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y - size
                    },
                    box4: {
                        X: X + size,
                        Y: Y
                    }
                }
            }
            else if (cla == 2) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y - size
                    },
                    box3: {
                        X: X + size,
                        Y: Y
                    },
                    box4: {
                        X: X,
                        Y: Y + size
                    }
                }
            }
            else if (cla == 3) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X + size,
                        Y: Y
                    },
                    box3: {
                        X: X,
                        Y: Y + size
                    },
                    box4: {
                        X: X - size,
                        Y: Y
                    }
                }
            }
            else if (cla == 4) {
                var position = {
                    box1: {
                        X: X,
                        Y: Y
                    },
                    box2: {
                        X: X,
                        Y: Y + size
                    },
                    box3: {
                        X: X - size,
                        Y: Y
                    },
                    box4: {
                        X: X,
                        Y: Y - size
                    }
                }
            }
            break;
    }
    var allnode = document.getElementById('play').children
    for (i = 0; i < allnode.length; i++) {
		if (allnode[i].getAttribute('class') != 'move') {
			for (var key in position) {
				if (allnode[i].offsetLeft == position[key].X && position[key].Y + 20 - allnode[i].offsetTop > 0 && position[key].Y - allnode[i].offsetTop - 20 < 0) {
					return 0;
				}
			}
		}
    }
    var right = 0;
    var left = 0;
    var bottom = 0;
    for (var key in position) {
        if (position[key].X > 480 && right < position[key].X - 480) {
            right = position[key].X - 480;
        }
    }
    for (var key in position) {
        position[key].X -= right;
    }
    for (var key in position) {
        if (position[key].X < 0 && left < Math.abs(position[key].X)) {
            left = Math.abs(position[key].X);
        }
    }
    for (var key in position) {
        position[key].X += left;
    }
    for (var key in position) {
        if (Math.abs(position[key].Y) > 680 && bottom < position[key].Y - 680) {
            bottom = position[key].Y - 680;
        }
    }
    for (var key in position) {
        position[key].Y -= bottom;
    }
    position['type'] = type;
    position['cla'] = cla;
    return position;
}
function nextblock() {
    var type = parseInt(Math.random() * 7);
    if (type == 0) {
        var cla = 1;
    }
    else if (type <= 3) {
        var cla = parseInt(Math.random() * 2) + 1;
    }
    else {
        var cla = parseInt(Math.random() * 4) + 1;
    }
    nextPosition = {
        'type': type,
        'cla': cla
    }
    var X = 50;
    var Y = 130;
    switch (type) {
        case 0:
            var nextposition = {
                box1: {
                    'X': X -5,
                    'Y': Y
                },
                box2: {
                    'X': X -5,
                    'Y': Y - 30
                },
                box3: {
                    X: X + 25,
                    Y: Y - 30
                },
                box4: {
                    X: X + 25,
                    Y: Y
                }
            }
            break;
        case 1:
            var nextposition = {
                box1: {
                    X: X + 10,
                    Y: Y - 30
                },
                box2: {
                    X: X + 10,
                    Y: Y
                },
                box3: {
                    X: X + 10,
                    Y: Y + 30
                },
                box4: {
                    X: X + 10,
                    Y: Y + 60
                }
            }
            break;
        case 2:
            var nextposition = {
                box1: {
                    X: X,
                    Y: Y
                },
                box2: {
                    X: X,
                    Y: Y - 30
                },
                box3: {
                    X: X + 30,
                    Y: Y
                },
                box4: {
                    X: X + 30,
                    Y: Y + 30
                }
            }
            break;
        case 3:
            var nextposition = {
                box1: {
                    X: X,
                    Y: Y
                },
                box2: {
                    X: X,
                    Y: Y + 30
                },
                box3: {
                    X: X + 30,
                    Y: Y
                },
                box4: {
                    X: X + 30,
                    Y: Y - 30
                }
            }
            break;
        case 4:
            var nextposition = {
                box1: {
                    X: X,
                    Y: Y - 20
                },
                box2: {
                    X: X + 30,
                    Y: Y - 20
                },
                box3: {
                    X: X,
                    Y: Y + 10
                },
                box4: {
                    X: X,
                    Y: Y + 40
                }
            }
            break;
        case 5:
            var nextposition = {
                box1: {
                    X: 35,
                    Y: 110
                },
                box2: {
                    X: 35,
                    Y: 140
                },
                box3: {
                    X: 65,
                    Y: 110
                },
                box4: {
                    X: 95,
                    Y: 110
                }
            }
            break;
        case 6:
            var nextposition = {
                box1: {
                    X: 60,
                    Y: 120
                },
                box2: {
                    X: 90,
                    Y: 120
                },
                box3: {
                    X: 60,
                    Y: 150
                },
                box4: {
                    X: 30,
                    Y: 120
                }
            }
            break;
    }
    var node = document.getElementsByClassName('nextBox')[0].children;
    node[0].style.cssText = 'top:' + nextposition.box1.Y + 'px;' + 'left:' + nextposition.box1.X + 'px;';
    node[1].style.cssText = 'top:' + nextposition.box2.Y + 'px;' + 'left:' + nextposition.box2.X + 'px;';
    node[2].style.cssText = 'top:' + nextposition.box3.Y + 'px;' + 'left:' + nextposition.box3.X + 'px;';
    node[3].style.cssText = 'top:' + nextposition.box4.Y + 'px;' + 'left:' + nextposition.box4.X + 'px;';
}
function reload(type, cal, X, Y) {
    var size = 20;
    var node = document.getElementsByClassName('move')
    if (newBlock(type, cal, X, Y, size)) {
        position = newBlock(type, cal, X, Y, size)
        node[0].style.cssText = 'top:' + position.box1.Y + 'px;' + 'left:' + position.box1.X + 'px;' + 'background-color:' + color + ';';
        node[1].style.cssText = 'top:' + position.box2.Y + 'px;' + 'left:' + position.box2.X + 'px;' + 'background-color:' + color + ';';
        node[2].style.cssText = 'top:' + position.box3.Y + 'px;' + 'left:' + position.box3.X + 'px;' + 'background-color:' + color + ';';
        node[3].style.cssText = 'top:' + position.box4.Y + 'px;' + 'left:' + position.box4.X + 'px;' + 'background-color:' + color + ';';
    }
    else {
        node[0].style.cssText = 'top:' + position.box1.Y + 'px;' + 'left:' + position.box1.X + 'px;' + 'background-color:' + color + ';';
        node[1].style.cssText = 'top:' + position.box2.Y + 'px;' + 'left:' + position.box2.X + 'px;' + 'background-color:' + color + ';';
        node[2].style.cssText = 'top:' + position.box3.Y + 'px;' + 'left:' + position.box3.X + 'px;' + 'background-color:' + color + ';';
        node[3].style.cssText = 'top:' + position.box4.Y + 'px;' + 'left:' + position.box4.X + 'px;' + 'background-color:' + color + ';';
    }
}
function radPosition() {
    var type = parseInt(Math.random() * 7);
    if (type == 0) {
        var cla = 1;
    }
    else if (type <= 3) {
        var cla = parseInt(Math.random() * 2) + 1
    }
    else {
        var cla = parseInt(Math.random() * 4) + 1
    }
    var X = parseInt(Math.random() * 19) * 20 + 40;
    return newBlock(type, cla, X, -60, 20);
}
function addNode() {
    var family = document.getElementById('play');
    var position = radPosition();
    if (nextPosition) {
        position.type = nextPosition.type;
        position.cla = nextPosition.cla;
    }
    color = '#';
    for (i = 1; i <= 6; i++) {
        color += (parseInt(Math.random() * 15) + 1).toString(16);
    }
    for (var fix in position) {
        if (fix == 'type') {
            return position;
        }
        var node = document.createElement('DIV')
        node.setAttribute('class', 'move')
        node.style.cssText = 'top:' + position[fix].Y + 'px;' + 'left:' + position[fix].X + 'px;' + 'background-color:' + color + ';';
        family.appendChild(node);
    }
}
