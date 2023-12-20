
// let number = 0
// Retrieve the stored value from localStorage or default to 0
let number = parseInt(localStorage.getItem('storedNumber'))  || 210;
// 
function test() {

    // subject: the first dropdown
    const subject = document.getElementById("subject");

    // style
    const style = document.getElementById("style");

    // ratio
    const ratio = document.getElementById("ratio");

    // type
    const type = document.getElementById("type");

    // year
    const d = new Date();
    let year = d.getFullYear();

    // source
    const source = document.getElementById("source");
   
   
    // week
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

   
    
    
    number++;
    
    

 
    var result = document.querySelector(".result");

    // if errors
    if (source.options[source.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا منبع را انتخاب کنید");
        result.classList.add("hide");
    } else if (subject.options[subject.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا موضوع را انتخاب کنید");
        result.classList.add("hide");
    } else if (style.options[style.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا سبک را انتخاب کنید");
        result.classList.add("hide");
    } else if (ratio.options[ratio.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا نسبت تصویر را انتخاب کنید");
        result.classList.add("hide");
    } else if (type.options[type.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا نوع را انتخاب کنید");
        result.classList.add("hide");
    } else {
        result.classList.remove("hide");
    }

    var week = Math.ceil(days / 7)
    

    


    result.innerHTML = year.toString().slice(-1) + week + source.options[source.selectedIndex].value + subject.options[subject.selectedIndex].value + style.options[style.selectedIndex].value + ratio.options[ratio.selectedIndex].value + number.toString().padStart(3, '0') + type.options[type.selectedIndex].value;

    
     if (number === 999) {
         console.log("test")
         number = 0;
        
    } 

     // Store the updated number in localStorage
     localStorage.setItem('storedNumber', number);

    

    
}

// function increaseNumber() {
   // number++;
   // test();
  // }

  // Function to decrease the number
 // function decreaseNumber() {
  //  number--;
  //  test();
 // }

 