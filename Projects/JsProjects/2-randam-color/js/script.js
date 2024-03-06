// 16777215

const getcolor = () => {
  // hex code
  const randomNumber = Math.floor(Math.random() * 16777215);
  // console.log(randomNumber)
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  // console.log(randomNumber,randomCode)
  document.getElementById("color-code").innerText = randomCode;

  // randam color-code copy to clipboard automatically
  navigator.clipboard.writeText(randomCode);
};

// event call
document.getElementById("btn").addEventListener("click", getcolor);

// initial call
getcolor();

//#a24188 #3f60eb