function generate(){
    var firstname = document.getElementById('txt').value;
    localStorage.setItem("textvalue",firstname);

    var email = document.getElementById('email').value;
    localStorage.setItem("email",email);
    
    var number = document.getElementById('number').value;
    localStorage.setItem("number",number);

    var age = document.getElementById('age').value;
    age = '' + age;
    localStorage.setItem('age',age);
    
    var edu1 = document.getElementById('edu1').value;
    localStorage.setItem("edu1",edu1);

    var edu2 = document.getElementById('edu2').value;
    localStorage.setItem("edu2",edu2);

    var ad1 = document.getElementById('address1').value;
    localStorage.setItem("ad1",ad1);

    var ad2 = document.getElementById('address2').value;
    localStorage.setItem("ad2",ad2);

    var ad3 = document.getElementById('address3').value;
    localStorage.setItem('location',ad3);

    var obj = document.getElementById('objective').value;
    localStorage.setItem('obj',obj);

    var lang1 = document.getElementById('lang1').value;
    localStorage.setItem('lang1',lang1);

    var lang2 = document.getElementById('lang2').value;
    localStorage.setItem('lang2',lang2);

    var lang3 = document.getElementById('lang3').value;
    localStorage.setItem('lang3',lang3);

    var hobby1 = document.getElementById('hobby1').value;
    localStorage.setItem('hobby1',hobby1);

    var hobby2 = document.getElementById('hobby2').value;
    localStorage.setItem('hobby2',hobby2);

    var Projects = document.getElementById('Projects').value;
    localStorage.setItem('Projects',Projects);

    var designation = document.getElementById('Designation').value;
    localStorage.setItem('Designation',designation);
    return false;
 }
/*
 const image_input = document.querySelector("#image_input");
 var uploaded_image = "";

 image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = read.result;
    })
 })
 */