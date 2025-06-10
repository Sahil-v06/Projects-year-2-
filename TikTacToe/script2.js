let O = [];
let X = [];
let c = 0;
let turn = true;
let box = document.querySelectorAll(".fill");
let reset = document.querySelector(".reset");
let allBtn = document.querySelectorAll('.fill');

box.forEach((box) => {
    box.addEventListener("click", () => {
        c += 1;
        box.disabled = true;
        if (c % 2 != turn) {
            box.innerHTML = 'O';      
            return O.push(parseInt(box.value));
        }
        else {
            box.innerText = 'X';
            return X.push(parseInt(box.value));
        }

    })
})
box.forEach((box) => {
    box.addEventListener("click", late)
    function late() {
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                for (let j = (i + 1); j < 4; j++) {
                    for (let k = (j + 1); k < 5; k++) {
                        if (X[i] + X[j] + X[k] == 15 || O[i] + O[j] + O[k] == 15) {
                            allBtn.forEach((button) => {
                                button.disabled = true;
                            });
                            if (X[i] + X[j] + X[k] == 15) {
                                document.getElementById('winner').innerText = 'X Won'
                                c+=1;
                                break;
                            }
                            else if (O[i] + O[j] + O[k] == 15) {
                                document.getElementById('winner').innerText = 'O Won'
                                c+=1;
                                break;
                            }
                        }
                    }
                }
            }
            if (c == 9) {
                document.getElementById('winner').innerText = 'Game over'
            }
        })
    }
})

reset.addEventListener("click", () => {
    box.forEach((box) => {
        box.innerHTML = '';
        box.disabled = false;
    })
    document.getElementById('winner').innerText = ''
    if(turn == true){
        turn = false;
    }
    else{
        turn = true;
    }
    return X = [], O = [], c = 0;
})
