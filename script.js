const navigation = document.getElementById("nav");
const display = document.getElementById("display");
const displayInput = document.getElementById("screen");
const keyPad = document.getElementById("keyPad");
const delbtn = document.getElementById("delete");
const equal = document.getElementById("equal");
const attribution = document.getElementById("attribution");
const attri = document.querySelectorAll("a");
const container = document.getElementById("container");
const checkMark = document.getElementById("check-mark");
const checkBox = document.getElementById("check-box");
const buttons = document.querySelectorAll("button");
const Btns = document.querySelectorAll(".btn");
const resetButton = document.getElementById("reset");
const checkBoxDiv = document.querySelector(".checkbox").getElementsByTagName("div");

buttons.forEach(btn => {
    btn.classList.remove("two");
    btn.classList.remove("three");
})

checkBoxDiv.item(0).addEventListener("click", () => {
    checkMark.style.left = "4px";
    checkMark.style.background = "hsl(6, 63%, 50%)";
    checkBox.classList.remove("key-pad-two");
    checkBox.classList.remove("key-pad-three");
    keyPad.classList.remove("key-pad-two");
    keyPad.classList.remove("key-pad-three");
    display.classList.remove("display-two");
    navigation.classList.remove("navigation-two");
    navigation.classList.remove("navigation-three");
    display.classList.remove("display-three");
    buttons.forEach(btn => {
        btn.classList.remove("two");
        btn.classList.remove("three");
    });
    container.style.background = "hsl(222, 26%, 31%)";
    attri.forEach(att => { att.style.color = "hsl(6, 63%, 50%)" });
    attribution.style.color = "hsl(0, 0%, 93%)";
});

checkBoxDiv.item(1).addEventListener("click", () => {
    checkMark.style.left = "22px";
    checkMark.style.background = "hsl(25, 98%, 40%)";
    keyPad.classList.add("key-pad-two");
    keyPad.classList.remove("key-pad-three");
    display.classList.add("display-two");
    display.classList.remove("display-three");
    checkBox.classList.add("key-pad-two");
    checkBox.classList.remove("key-pad-three");
    navigation.classList.add("navigation-two");
    navigation.classList.remove("navigation-three");
    buttons.forEach(btn => {
        btn.classList.add("two");
        btn.classList.remove("three");
    });
    container.style.background = " hsl(0, 0%, 90%)";
    attri.forEach(att => { att.style.color = "hsl(25, 98%, 40%)" });
    attribution.style.color = "hsl(60, 10%, 19%)";
});
checkBoxDiv.item(2).addEventListener("click", () => {
    checkMark.style.left = "40px";
    checkMark.style.background = "hsl(176, 100%, 44%)";
    keyPad.classList.remove("key-pad-two");
    keyPad.classList.add("key-pad-three");
    display.classList.remove("display-two");
    display.classList.add("display-three");
    checkBox.classList.add("key-pad-three");
    navigation.classList.remove("navigation-two");
    navigation.classList.add("navigation-three");
    buttons.forEach(btn => {
        btn.classList.remove("two");
        btn.classList.add("three");
    });
    container.style.background = "hsl(268, 75%, 9%)";
    attri.forEach(att => { att.style.color = "hsl(176, 100%, 44%)" });
    attribution.style.color = "hsl(52, 100%, 62%)";
});

// Calculator Activation
Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        displayInput.value += btn.value;
    });
});
delbtn.addEventListener("click", () => {
    displayInput.value = displayInput.value.slice(0, -1);
});
resetButton.addEventListener("click", () => {
    displayInput.value = "";
});
equal.addEventListener("click", () => {
    if (displayInput.value == "") {
        displayInput.value = "";
    } else {
        const result = eval(displayInput.value);
        displayInput.value = result.toLocaleString();
    }
});
