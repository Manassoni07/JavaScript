
    const screen = document.querySelector('.screen h1');
    const secBtns = document.querySelectorAll('.secbtn');
    const clearBtn = document.querySelector('.clr');
    const enterBtn = document.querySelector('.enter');
    const deleteBtn = document.querySelector('.delete');

    let expression = "";

    secBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains("delete")) {
                expression += btn.textContent;
                screen.textContent = expression;
            }
        });
    });

    clearBtn.addEventListener('click', () => {
        expression = "";
        screen.textContent = "0";
    });

    enterBtn.addEventListener('click', () => {
        try {
            const result = eval(expression); // not good yet but ok
            screen.textContent = result;
            expression = result.toString();
        } catch (error) {
            screen.textContent = "Error";
            expression = "";
        }
    });

    deleteBtn.addEventListener('click', () => {
        expression = expression.slice(0, -1);
        screen.textContent = expression || "0";
    });


