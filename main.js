
   
const cat = document.getElementById('cat');
const cont = document.querySelector('.container');

cat.style.left = cont.clientWidth / 2 + "px";

let timerId = 0;
let indent = 1;

cat.addEventListener('mouseenter', e => {
    
  if (timerId) {
    clearInterval(timerId);
    indent = -indent;
  }
  timerId = setInterval(run, 10);
    
});

function run() {
  if (parseInt(cat.style.left) >= cont.clientWidth - cat.clientWidth) {
    indent = -indent;
  }

  if (parseInt(cat.style.left) <= 0) {
    indent = -indent;
  }

  let i = parseInt(cat.style.left);
 
  if (isNaN(i)) {
    i = 0;
  }
  cat.style.left = i + indent + "px";
}