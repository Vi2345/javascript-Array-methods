function arraytoString()
{
 var text =String(document.getElementById("text").value);
 let array= text.split(",")
 let result=(array.toString());
 document.getElementById("demo").innerHTML=result;

}

function joint()
{
    let text = String(document.getElementById("textjoin").value);
    let array = text.split(",");
    let joint = String(document.getElementById("join").value);
    let result = array.join(joint);
    document.getElementById("demo1").innerHTML = result;
}

function popmethod()
{
    let text = String(document.getElementById("textpop").value);
    let array = text.split(",");
    let result = array.pop();
    document.getElementById("demo2").innerHTML = "Popped Element:"+" "+result+ "<br>"+ "Array after Pop:"+" "+array;
}

function pushmethod()
{
    let text = String(document.getElementById("textpush").value);
    let a = String(document.getElementById("push").value);
    let array = text.split(",");
    let result = array.push(a);
    document.getElementById("demo3").innerHTML = "Array length:"+" "+result+"<br>"+ "Array after Push:"+" "+array;
}

function shiftmethod()
{
    let text = String(document.getElementById("textshift").value);
    let array = text.split(",");
    let result = array.shift();
    document.getElementById("demo4").innerHTML = "Array element:"+" "+result+"<br>"+ "Array after shift:"+" "+array;
}

function unshiftmethod()
{
    let text = String(document.getElementById("textunshift").value);
    let a = String(document.getElementById("unshift").value);
    let array = text.split(",");
    let result = array.unshift(a);
    document.getElementById("demo5").innerHTML = "Array length:"+" "+result+"<br>"+ "Array after Unshift:"+" "+array;
}

function deletemethod()
{
    let text = String(document.getElementById("textdelete").value);
    let a = Number(document.getElementById("delete").value);
    let array = text.split(",");
    delete array[a];
    document.getElementById("demo6").innerHTML =array;
}

function splicemethod()
{
    let text = String(document.getElementById("textsplice").value);
    let a = Number(document.getElementById("index").value);
    let b = Number(document.getElementById("remove").value);
    let c = String(document.getElementById("splice").value);
    let array = text.split(",");
    let result = array.splice(a,b,c);
    document.getElementById("demo7").innerHTML = "Removed elements:"+" "+result+"<br>"+"Array after Splice:"+" "+array;
}
function concatemethod()
{
    let text1 = String(document.getElementById("textconcate1").value);
    let text2 = String(document.getElementById("textconcate2").value);
    let text3 = String(document.getElementById("textconcate3").value);
    let array1 = text1.split(",");
    let array2 = text2.split(",");
    let array3=  text3.split(",");
    let result = array1.concat(array2,array3);
    document.getElementById("demo8").innerHTML = result;
}


function slicemethod()
{
    let text = String(document.getElementById("textslice").value);
    let a = Number(document.getElementById("start").value);
    let b = Number(document.getElementById("stop").value);
    let array = text.split(",");
    let result = array.slice(a,b);
    document.getElementById("demo9").innerHTML ="sliced Array:"+" " +result+"<br>";
}

function sortmethod()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.sort();
    document.getElementById("demo10").innerHTML = result;
}

function reversemethod()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.reverse();
    document.getElementById("demo11").innerHTML = result;
}

function ascendingmethod()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.sort(function(a, b){return a - b});
    document.getElementById("demo12").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

function descendingmethod()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.sort(function(a, b){return b - a});
    document.getElementById("demo13").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}


function myFunction1()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.sort();
    document.getElementById("demo14").innerHTML = result;
}


function myFunction2()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    let result = array.sort(function(a, b){return a - b});
    document.getElementById("demo15").innerHTML = result;
}


function randommethod()
{
    let text = String(document.getElementById("textsort").value); 
    let array = text.split(",");
    result = array.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo16").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

function Fisheryatesmethod()
{
    let text = String(document.getElementById("textsort").value); 
    let points = text.split(",");
    for (let i = points.length -1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i+1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    } 
    document.getElementById("demo17").innerHTML = points+"<br>"+"Min value:"+" "+points[0]+"<br>"+"Max value:"+" "+points[points.length - 1];
}

function maxmethod()
{
    let text = String(document.getElementById("textfind").value); 
    let array = text.split(",");
    let result = Math.max.apply(null,array)
    document.getElementById("demo18").innerHTML ="The highest number is:"+" "+result;
}
function minmethod()
{
    let text = String(document.getElementById("textfind").value); 
    let array = text.split(",");
    let result = Math.min.apply(null,array)
    document.getElementById("demo19").innerHTML ="The Lowest number is:"+" "+result;
}




