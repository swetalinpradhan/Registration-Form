function AddRow(){
    var data1=document.getElementById("name").value;
    var data2=document.getElementById("email").value;
    var data3=document.getElementById("age").value;
   

// print radio values
  
    var radios = document.getElementsByName('gender');
    for (var radio of radios)
    {
        if (radio.checked) {
            document.getElementById("previewgender").innerHTML='Gender: '+radio.value;
        }
        
    }

// print checkbox value

    var checks = document.getElementsByName('skill');
    var str='';
    for(i=0;i<3;i++)
    {
      if(checks[i].checked==true)
    {
      str+=checks[i].value+" ";
    }
    }
    document.getElementById("skillprint").innerHTML=str;


// print image file
    var [img]=document.getElementById("image-input").files;
          if(img.value!='')
          {
            display_img.src = URL.createObjectURL(img);
          }
          else
          {
            alert("No image is Selected");
          }

// print other values in form
    document.getElementById("name1").innerHTML='Name: '+ data1;
    document.getElementById("email1").innerHTML='Email: '+data2;
    document.getElementById("age1").innerHTML='Age: '+data3;
}