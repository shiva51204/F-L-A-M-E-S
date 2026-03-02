

let username;
const btn = document.getElementById("button");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const opt = document.getElementById("output");
btn.onclick = function(){
    
    let fname = [...name1.value.toLowerCase()];
    let sname = [...name2.value.toLowerCase()];
    let flames = ['f','l','a','m','e','s'];
    let ot;

    if (!name1.value.trim() || !name2.value.trim()) {
    alert("Only valid names!!! Again!!!");
    opt.textContent = "";
    return;
}

    else{
        let cnt = removeCommonCharacters(fname,sname);
        let fin = iterate(flames,cnt);
        mapper(fin,opt);
        //console.log(fin);
    }

    
    
}

function removeCommonCharacters(name1,name2){
    let count = name1.length + name2.length;
    for(let letter of name1){
        if(name2.includes(letter)){
            name2.splice(name2.indexOf(letter),1);
            count-=2;
        }
    }

    return count;
}

function iterate(array, count) {
    let index = 0;
    while (array.length > 1) {
        index = (index + count - 1) % array.length;
        array.splice(index, 1);
    }
    return array[0];
}


function mapper(lettr,out){
    let ot="";
    out.className = "";
    switch(lettr){
        case 'f':
            ot = "Friends";
            out.classList.add("result-f");
            break;
        case 'l':
            ot = "LOVERS";
            out.classList.add("result-l");
            break;
        case 'a':
            ot = "Acquaintance.";
            out.classList.add("result-a");
            break;
        case 'm':
            ot = "marriage" ;
            out.classList.add("result-l");
            break;
        case 'e':
            ot = "Enemies";
            out.classList.add("result-e");
            break;
        case 's':
            ot="SISTER";
            out.classList.add("result-s");
            break;
        default:
            ot="try again...some error...";

    }

    out.textContent = ot;
}












