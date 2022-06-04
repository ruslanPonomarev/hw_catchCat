const cat = document.getElementById('cat');
const cont = document.querySelector('.conteiner');

cat.style.left = cont.clientWidth / 2 + "px";
let j = 0;

cat.addEventListener('mouseenter', e => {
    
    if (cat.style.left === '' || cat.style.left === cont.clientWidth / 2 + "px") {
      let timerId = setInterval(run, 250);
      
    return;
    }

    if (cat.style.left !== '') {
      cat.style.left = '';
      setInterval(run2, 250);
    }
    
});

function run() {


  if (parseInt(cat.style.left) >= cont.clientWidth - cat.clientWidth) {
    console.log(666);
    return;
  }
  let i = parseInt(cat.style.left);
 
  if (isNaN(i)) {
    i = 0;
  }
  cat.style.left = i + 5 + "px";
}

function run2() {
  if (parseInt(cat.style.left) >= cont.clientWidth - cat.clientWidth) {
    console.log(cat.style.left);
    console.log(cont.clientWidth - cat.clientWidth + "px");
    console.log('run1');
    return;
  }
  let i = parseInt(cat.style.left);
  console.log(i);
  if (isNaN(i)) {
    i = 0;
  }
  cat.style.left = i - 5 + "px";
    
}


function run1() {
  if (cat.style.left >= cont.clientWidth - cat.clientWidth + "px") {
    console.log('run2');
    return;
  }
 
  let i = cat.style.left;
  cat.style.left = i + 5 + "px";
  
}

/*var intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
} */