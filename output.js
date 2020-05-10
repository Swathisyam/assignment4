//  Question :1 function definition for finding the first element and check whether prime or not

function prime(a)
{ var a = [7,5,6];
  var n = a[0];

  if (n===1)
  {
    document.getElementById("ans1").innerHTML = (n + " is neither a prime nor a composite number");
  }
  else if(n === 2)
  {
    // document.getElementById("ans1").innerHTML = (n + " is a prime  number");
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        // return false;
        document.getElementById("ans1").innerHTML = (n + " is not a prime number");
      }
    }
    
    document.getElementById("ans1").innerHTML = (n + " is a prime number"); 
    return true;
  }
}




// Question 2: function definition for finding the frequent element in an array
function frequent(){
    var arr1=document.getElementById("demo").value;
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
    {
            for (var j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                      item = arr1[i];
                    }
            }
            m=0;
    }
    document.getElementById("ans2").innerHTML = (item+" ( " +mf +" times ) ") ;
}


//Question 3: function definition for swapping the case of each character
function swap(){
    var str = document.getElementById("demo3").value;
   
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }

document.getElementById("ans3").innerHTML = result.join('');
}


// Question 4: function definition for sum of squares of elements of an array
function sumsq(arr) {
  var arr = [2,4,5,7,10];
  var sum = 0;
  var i, iLen;
 
  for (i = 0, iLen = arr.length; i < iLen; i++) {
    sum += arr[i] * arr[i];
  }
  document.getElementById("ans4").innerHTML = "The sum of squares of the elements of array is..." +sum;
}
 


// Question 5: function definition for iteration of loop from 1 to 15 and check even or odd
function iteration(){
  var numb = "";
 
    for (var x=0; x<=15; x++) {
        if (x === 0) {
            numb += "Iteration No: "+x+" where 0 is even "+" <br>" ;
        }
        else if (x % 2 === 0) {
          numb += "Iteration No: "+x+" where "+x+" is an even number "+" <br>";    
        }
        else {
          numb += "Iteration No: "+x+" where "+x+" is an odd number "+" <br>";
        }

}
 document.getElementById("ans5").innerHTML = numb;

}


// Question 6: function definition for truncate a string if it is longer than the specified number of characters
function truncateString(str6, num) {

  var num = 4;
  var outp;
  var str6 = document.getElementById("demo6");
  if (str6.length <= num) {

  outp = str6.slice(0, num) + '...';
}
document.getElementById("ans6").innerHTML = outp;
}


// Question :6 function definition for truncating strinG

function truncateString() {
  var str1;
  var str =document.getElementById("demo6").value;
  let num = document.getElementById("trncvalue").value;


  str1 = str.slice(0, num) ;
  document.getElementById("ans6").innerHTML = "String after truncation is "+str1+" is with a limit of "+num;

}

// Question 7: function definition for accepting two integers and display the larger number

function findLarge(a,b) {
  var a = document.getElementById("fst").value;
  var b = document.getElementById("scnd").value;
    if (a > 0 && b > 0 && a > b) {
    document.getElementById("ans7").innerHTML = ("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
    document.getElementById("ans7").innerHTML =("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
    document.getElementById("ans7").innerHTML = ("Both numbers are equal!")
    } else {
    document.getElementById("ans7").innerHTML = ("Please add an integer!");

    }
}

// Question :8  function definition for sorting an array by reading elemnts using for ...in
function sortstrng(){
  var array8 = [];
  var arrsze = document.getElementById("sze").value;
  var element;

  for(var i=0;i<arrsze;i++){
    array8[i] = prompt("Enter the element in array"+(i+1));
  }
document.getElementById("demo8").innerHTML = array8;

  for(element in array8){
    array8.sort();

  }
document.getElementById("ans8").innerHTML = array8;
} 


// Question :9 function definition for printing text JAVASCRIPT
  function text(){
    var string = "JAVASCRIPT";
    var char1 ="", char2="";
      for (let char of string) {
        
        char1 += char;
        char2 += char1+"<br>";
  }
 
    document.getElementById("ans9").innerHTML = char2;
  }

  // Question :10 function definition for a pattern using * symbol
  function pyramid(){

  
  var  i,j,patrn='';
  for(var i = 1; i <= 10; i++){

    for(var j = 0; j<=i; j++){
      patrn +="*";
    }
      patrn +="<br>";
  }
  document.getElementById("ans10").innerHTML = patrn;
}