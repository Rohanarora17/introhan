const data1 = ['A', 'B','C','D','E','F'];
const data2 = ['0','1', '2','3', '4', '5'];
let resarr = [];
let turn = 0;
let output =[];
let danger = null;
const btn  = document.querySelector('.btn-group');
const guess = document.querySelector('.hidden');
const container = document.getElementById('grid'); 
const level = document.getElementById('game-level');
const labe = document.getElementById('test');
let mode;
let total = [];
let game = null;


Array.prototype.remove = function (input) {
  return this.filter( e => !e.includes(input));
}





function check(){
  for (let i = 0; i < mode; i++){
    for(let j=0;j<mode;j++){
      total.push(data1[i]+data2[j]);
      
    }
    
  }

  

  

  let inp = document.querySelector('.t').value.toUpperCase();
  if(output.includes(inp)){
    return alert('you cannot enter same column again');
    

  }
  

  else if(!(total.includes(inp))){
     return alert('enter valid position');
  

  }
  else{
    output.push(inp);
  
    console.log(inp);
    turn++;

  }
      
            
  if(resarr.includes(inp)){
      console.log(true);

      let im = document.getElementById(inp);
      if(im !=null){
        im.innerHTML = `<img src="giftbox.png" alt="gift" width= 99px" height = "99px" />`;
        
        resarr = resarr.remove(inp);

        console.log(resarr);

      }
      


  }
  else if (danger.includes(inp)) {

      let im = document.getElementById(inp);
      im.innerHTML = `<img src="poison.png" alt="gift" width= 99px" height = "99px" />`;

      setTimeout(() => {
        alert('You lost!!! Restarting game');
        window.location.reload();
        turn =0;
      }, 1000);

      
      

      
  }

  else{
      let im = document.getElementById(inp);
      im.innerHTML =`<img src="cross.png" alt="gift" width= 99px" height = "99x" />` ;
      
      
      // alert('you guessed it wrong');
  }

  

  

  if(resarr.length<=0){
      let accuracy = ((3/turn) * 100);
      alert('your score was ' + accuracy + '%');
      window.location.reload();

  }




}

function generate(l){
  let i =0;
  while(resarr.length<3){
    let res = data1[Math.floor(Math.random() * l)] + data2[Math.floor(Math.random() * l)];
    
    if (!(resarr.includes(res))) {
      resarr[i] = res;
      i++;

    }
    

  }
  while(danger==null){
    

  
  let dang = data1[Math.floor(Math.random() * l)] + data2[Math.floor(Math.random() * l)];
  if (!(resarr.includes(dang))){
    danger = dang;
  }
  
    
  console.log(resarr);
  console.log(danger);
  }
    
  

}




function smgrid() {
  
    
  
  for (var i = 0; i < 3; i++) {
    
      var row = document.createElement('div');
      row.className = "row";
      for (var j = 0; j < 3; j++) {
          var box = document.createElement('div');
          box.className = "box";
          box.id = data1[i]+data2[j];
          box.innerText = data1[i]+data2[j];
          row.appendChild(box);
      }                
      document.getElementById('grid').appendChild(row);
  }
  mode = 3;
  generate(3);


  }

function mdgrid() {
  

  for (var i = 0; i < 4; i++) {
      var row = document.createElement('div');
      row.className = "row";
      for (var j = 0; j < 4; j++) {
          var box = document.createElement('div');
          box.className = "box";
          box.id = data1[i]+data2[j];
          box.innerText = data1[i]+data2[j];
          row.appendChild(box);
      }                
      document.getElementById('grid').appendChild(row);
  }
  mode = 4;
  generate(4);

}


function lggrid() {
    
  
  for (var i = 0; i < 6; i++) {
      var row = document.createElement('div');
      row.className = "row";
      for (var j = 0; j < 6; j++) {
          var box = document.createElement('div');
          box.className = "box";
          box.id = data1[i]+data2[j];
          box.innerText = data1[i]+data2[j];
          row.appendChild(box);
      }                
      document.getElementById('grid').appendChild(row);
  }
  mode = 6;
  generate(6);

  }
  

  
btn.addEventListener('click', (e)=>{
    if(e.target.nodeName === 'BUTTON'){


      
      btn.classList.add('hidden');
      guess.classList.remove('hidden');
      guess.classList.add('guess');



      

        if(level.value === 'smgrid'){
          // target.style.display="none";
            
            // window.location.href = './smgird.html';
            labe.setAttribute("hidden", "hidden");
            level.classList.add('hidden');
            smgrid();
            // e.stopPropagation();
            console.log('function called');
            // btn.style.display="none";

        }
        else if(level.value === 'mdgrid'){
          labe.setAttribute("hidden", "hidden");
          level.classList.add('hidden');
          mdgrid();
            
            
          console.log('function called');
           

        }
        else {
          labe.setAttribute("hidden", "hidden");
          level.classList.add('hidden');
          lggrid();
           
          console.log('function called');
            
        }


    }

    
});
    

            
    

    
