const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const bodyBcg = document.querySelector('body')

hexBtn.addEventListener('click', getHex);


const demo = document.querySelector('.demo');
 hexCode = ['0','1','2','3','4'];
demo.innerHTML = hexCode;

//document.write(out);
//document.getElementById("demo") = hexOutput;


function getHex() {
  let hexCol = '#';

  for (i=0; i<6; i++) {
  let random = Math.floor(Math.random()*hexNumbers.length);
  hexCol +=hexNumbers[random];
  console.log(hexCol);  //hexOutput.push("a");
    }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
