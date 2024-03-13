
const dropdownBtn = document.querySelectorAll(".button");
// const dropdownBtn1 = document.querySelectorAll(".button");
const addContent1=document.querySelector(".add_new1");
const addContent2=document.querySelector(".add_new2");
const addContent3=document.querySelector(".add_new3");
const addContent4=document.querySelector(".add_new4");
const addContent5=document.querySelector(".add_new5");
const dropdownContent1 = document.querySelector(".O1");
const dropdownContent2 = document.querySelector(".O2");
const dropdownContent3 = document.querySelector(".O3");
const dropdownContent4 = document.querySelector(".O4");
const dropdownContent5 = document.querySelector(".O5");


const input = document.getElementById("searchInput");
      const table = document.getElementById("myTable");

      input.addEventListener("input", function() {
        const filter = input.value.toLowerCase();
        const rows = table.rows;

        for (let i = 1; i < rows.length; i++) {
          const cells = rows[i].cells;
          const rowText = cells[0].innerText.toLowerCase();

          if (rowText.indexOf(filter) > -1) {
            rows[i].style.display = "";
          } else {
            rows[i].style.display = "none";
          }
        }
      });
dropdownBtn.forEach(function(item){
    item.addEventListener('click',function(){
        let a=item.id
        let b=a.charAt(a.length-1);
        b=parseInt(b)       
        if(b===1){
            dropdownContent1.classList.add("show")
            
        }
        if(b===2){
            dropdownContent2.classList.add("show")
        }
        if(b===3){
            dropdownContent3.classList.add("show")
        }
        if(b===4){
            dropdownContent4.classList.add("show")
        }
        if(b===5){
            dropdownContent5.classList.add("show")
        }
        
    })
})
window.addEventListener("click", function(event) {
    
    if (!event.target.matches('.button') 
         && !event.target.matches('li')
            && !['.add_new1', '.add_new2', '.add_new3', '.add_new4', '.add_new5'].some(selector => event.target.matches(selector))
                &&!event.target.matches('input')
                &&!event.target.matches('a')
                    &&!event.target.matches('button')
                        &&!event.target.matches('img')
                            &&!event.target.matches('h4')
                        )
                
    {
        if (dropdownContent1.classList.contains('show')) {
            dropdownContent1.classList.remove("show");
        }
        
        if (dropdownContent2.classList.contains('show')) {
            dropdownContent2.classList.remove("show");
        }
        if (dropdownContent3.classList.contains('show')) {
            dropdownContent3.classList.remove("show");
        }
        if (dropdownContent4.classList.contains('show')) {
            dropdownContent4.classList.remove("show");
        }
        if (dropdownContent5.classList.contains('show')) {
            dropdownContent5.classList.remove("show");
        }
    }
})
// Function to add a new item to the list
function addItem() {
    // Get the input field value
    var newItemText = document.getElementById("newItemText1").value;
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Add the input field value as text content to the new list item
    newItem.textContent = newItemText;
  
    // Append the new list item to the list
    document.getElementById("myList1").appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("newItemText1").value = "";
}
function addItem1() {
    // Get the input field value
    var newItemText = document.getElementById("newItemText2").value;
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Add the input field value as text content to the new list item
    newItem.textContent = newItemText;
  
    // Append the new list item to the list
    document.getElementById("myList2").appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("newItemText2").value = "";
}
function addItem2() {
    // Get the input field value
    var newItemText = document.getElementById("newItemText3").value;
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Add the input field value as text content to the new list item
    newItem.textContent = newItemText;
  
    // Append the new list item to the list
    document.getElementById("myList3").appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("newItemText3").value = "";
}

function addItem3() {
    // Get the input field value
    var newItemText = document.getElementById("newItemText4").value;
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Add the input field value as text content to the new list item
    newItem.textContent = newItemText;
  
    // Append the new list item to the list
    document.getElementById("myList4").appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("newItemText4").value = "";
}
function addItem4() {
    // Get the input field value
    var newItemText = document.getElementById("newItemText5").value;
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Add the input field value as text content to the new list item
    newItem.textContent = newItemText;
  
    // Append the new list item to the list
    document.getElementById("myList5").appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("newItemText5").value = "";
}


addContent1.addEventListener('click',()=>{
    document.querySelector(".addItems1").style.display="block"
})
addContent2.addEventListener('click',()=>{

    document.querySelector(".addItems2").style.display="block";
})
addContent3.addEventListener('click',()=>{
    document.querySelector(".addItems3").style.display="block";
})
addContent4.addEventListener('click',()=>{
    document.querySelector(".addItems4").style.display="block";
})
addContent5.addEventListener('click',()=>{
    document.querySelector(".addItems5").style.display="block";
})







  

  

    
    





    



