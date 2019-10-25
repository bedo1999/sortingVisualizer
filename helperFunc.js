function createDiv(parent,height){
    let d = document.createElement("div");
    d.style.height = height+"px";
    d.classList.add('bar')
    
    parent.appendChild(d);
    return {
        div:d,
        val:height
    }
}

function createRandArray(parent,size){
    let arr = [];
    for(let i=0;i<size;i++){
        let rand = Math.floor(Math.random()*500+30);
        arr.push( createDiv(parent,rand) );
    }
    return arr;
}
function swap(array,i,j){
    let temp = {...array[i]};
    array[i].div.style.height = array[j].val+"px";
    array[i].val = array[j].val;
    
    array[j].div.style.height = temp.val+"px";
    array[j].val = temp.val;
   
    
    //console.log(temp.val+ "    "+array[i].val)
}
async function colorSelected(array,i,j,color){
     array[i].div.style.backgroundColor = color;
     array[j].div.style.backgroundColor = color;
}
async function colorUnSelected(array,i,j,color){
    array[i].div.style.backgroundColor = color;
    array[j].div.style.backgroundColor = color;
}
async function colorSorted(array,i,color){
    array[i].div.style.backgroundColor = color;
  
}
function copyProp(el1,el2){
    el1.div.style.height = el2.val+"px";
    el1.val = el2.val;
}
function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds){
//         break;
//       }
//     }
//   }
//createRandArray(document.getElementById("container"),100)