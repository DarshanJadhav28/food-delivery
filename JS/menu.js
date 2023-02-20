function menu() {
    
   window.location="addtocart.html";
}

function search_restaurant() {
   let input = document.getElementById('exampleDataList').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('menu');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



