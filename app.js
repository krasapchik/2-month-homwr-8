const isPangram = (phrase) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "u",
    "w",
    "x",
    "y",
    "z",
  ];

  let isTrue = true;

  for (let letter of alphabet) {
    const idx = phrase.toLowerCase().indexOf(letter);
    if (idx < 0) {
      isTrue = false;
      break;
    }
  }
  return isTrue;
};
console.log(isPangram("abs"), isPangram("abcdefghijklmnopqrstuvwxyz"));

function findEvenIndex(arr) {
  let trueIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    let leftSumm = 0;
    let rightSumm = 0;

    for (let q = 0; q < i; q++) {
      leftSumm += arr[q]
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSumm += arr[j]
    }
    if (rightSumm === leftSumm) {
      trueIdx = i;
      break;

    }
  }
  return trueIdx
}
console.log(findEvenIndex([12, 2, 3, 4, 10]));
const elementA = document.getElementById("list")

const getData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const jsData = await data.json()

  const deleTe = jsData.map(({ userId, body, ...rest }) => {
    return rest

  })
  const newArr = deleTe.map((el) => {
    return {
      ...el,
      className: "post",
      element: "div"
    }
  })
  const keys = newArr.map((el) => {
    return `<${el.element} class= "${el.className}">${el.title}</${el.element}>`
  })
  elementA.innerHTML = keys.join("")

}


getData()

