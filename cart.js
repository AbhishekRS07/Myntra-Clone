
    var cartC =JSON.parse(localStorage.getItem("aadToCart1"))||[];
    var cart2C =JSON.parse(localStorage.getItem("aadToCart2"))||[];
    var cart3C =JSON.parse(localStorage.getItem("aadToCart3"))||[];

    // deleted array
    var deleteArrC=JSON.parse(localStorage.getItem("deleteArr"))||[];
    // *******************************************
    var cartValC=0;
    var cartVal1C=0;
    var cartVal2C=0;
    var cartVal3C=0;
    var totalIC=0;
    if(cartC.length === 0 && cart2C.length === 0 && cart3C.length === 0){

        var i=document.createElement("img");
        i.setAttribute("id","i1");
        i.setAttribute("src","./images/emptyCart.png");
        
        document.querySelector("#mainC").append(i);
        totalPriceC();
    }
    else{
       
        displayCart1C();
        displayCart2C();
        displayCart3C();
        totalPriceC();
    }

    // ****************   1     ***************************

    function displayCart1C(){
        
        document.querySelector("#mainC").textContent="";
       cartC.map(function(elem, index){
           var divC= document.createElement("div");
           var imageC= document.createElement("img");
           
          imageC.setAttribute("class" ,"imageC");
          imageC.setAttribute("src",elem.image_url);
          imageC.setAttribute("alt",elem.name);
          var h5C =document.createElement("h5");
          h5C.textContent=elem.name;
          
          var boxC=document.createElement("div");
          boxC.setAttribute("class","quantityC");
          
         
       
          var seC=document.createElement("select");
          seC.textContent="";
          seC.setAttribute("id","select");
          seC.addEventListener("change",setFun1);
          seC.setAttribute("class","seC");

           //   
           function setFun1(){
            var select=document.getElementById("select").value;
            
            if(select==1){
              document.getElementById("priceN").textContent=" ₹ "+elem.price;
            }
            else if(select==2){
              var c=2*elem.price;
              document.getElementById("priceN").textContent=" ₹ "+c;
              cartVal1C+=elem.price;
            }
            else if(select==3){
              var c=3*elem.price;
              document.getElementById("priceN").textContent=" ₹ "+c;
              cartVal1C+=2*elem.price;
            }
            else if(select==4){
              var c=4*elem.price;
              document.getElementById("priceN").textContent=" ₹ "+c;
              cartVal1C+=3*elem.price;
            }
           totalPriceC();
          }
          
      // 

          var op1=document.createElement("option");
          op1.setAttribute("value",1);
          op1.textContent=1;

          var op2=document.createElement("option");
          op2.setAttribute("value",2);
          op2.textContent=2;

          var op3=document.createElement("option");
          op3.setAttribute("value",3);
          op3.textContent=3;

          var op4=document.createElement("option");
          op4.setAttribute("value",4);
          op4.textContent=4;
          
       
          seC.append(op1,op2,op3,op4)
           

          var qytC=document.createElement("b");
          qytC.textContent="Qyt ";

          var priceC=document.createElement("p");
          priceC.textContent=" ₹ "+elem.price;
          priceC.setAttribute("id","priceN");
          cartVal1C+=elem.price;
         
          

           var removeC=document.createElement("button");
           removeC.textContent="Remove Item";
           removeC.setAttribute("class","removeC")
           removeC.addEventListener("click",function(){removeItem1C(elem,index)})

//          appending

          
          boxC.append(h5C,priceC,qytC,seC,removeC)
          divC.append(imageC, boxC)
          divC.setAttribute("class","cartProdC");
          document.querySelector("#mainC").append(divC);
         
       });
      
    };
    

    function removeItem1C(elem,index){
        
        cartC.splice(index,1);
        localStorage.setItem("aadToCart1", JSON.stringify(cartC));
        window.location.reload();

        displayCart1C();
       
      }
    
    // *******************  1   end********************************************
     // *******************  2   start********************************************
    function displayCart2C(){
        
        document.querySelector("#main1C").textContent="";
        cart2C.map(function(elem, index){
           var div= document.createElement("div");
           var image= document.createElement("img");
           
          image.setAttribute("class" ,"imageC");
          image.setAttribute("src",elem.image_url);
          image.setAttribute("alt",elem.name);
          var h5 =document.createElement("h5");
          h5.textContent=elem.name;
          
          var box=document.createElement("div");
          box.setAttribute("class","quantityC");
          
          var qyt=document.createElement("b");
          qyt.textContent="Qyt";
         
          var seC=document.createElement("select");
          seC.textContent="";
          seC.setAttribute("id","select2");
          seC.addEventListener("change",setFun2);
          seC.setAttribute("class","seC");

           //   
           function setFun2(){
            var select=document.getElementById("select2").value;
            
            if(select==1){
              document.getElementById("priceN2").textContent=" ₹ "+elem.price;
            }
            else if(select==2){
              var c=2*elem.price;
              document.getElementById("priceN2").textContent=" ₹ "+c;
              cartVal2C+=elem.price;
            }
            else if(select==3){
              var c=3*elem.price;
              document.getElementById("priceN2").textContent=" ₹ "+c;
              cartVal2C+=2*elem.price;
            }
            else if(select==4){
              var c=4*elem.price;
              document.getElementById("priceN2").textContent=" ₹ "+c;
              cartVal2C+=3*elem.price;
            }
           totalPriceC();
          }
          
      // 
          var op1=document.createElement("option");
          op1.textContent=1;

          var op2=document.createElement("option");
          op2.textContent=2;

          var op3=document.createElement("option");
          op3.textContent=3;

          var op4=document.createElement("option");
          op4.textContent=4;
          
          seC.append(op1,op2,op3,op4)
            
          var price=document.createElement("p");
          price.textContent=" ₹ "+elem.price;
          price.setAttribute("id","priceN2");

          cartVal2C+=elem.price; 

           var remove=document.createElement("button");
           remove.textContent="Remove Item";
           remove.setAttribute("class","removeC")
           remove.addEventListener("click",function(){removeItem2C(elem,index)})

//          appending

          
          box.append(h5,price,qyt,seC,  remove)
          div.append(image, box)
          div.setAttribute("class","cartProdC");
          document.querySelector("#main1C").append(div);
         
       });
    //    console.log(cart2C.length);
    };

    function removeItem2C(elem,index){
        
        cart2C.splice(index,1);
        localStorage.setItem("aadToCart2", JSON.stringify(cart2C));
        window.location.reload();
        displayCart2C();
       
      }
    // **********************2 end *********************************************

    

// ************************3 start************************************************
     function displayCart3C(){
        
        document.querySelector("#main2C").textContent="";
        cart3C.map(function(elem, index){
           var div= document.createElement("div");
           var image= document.createElement("img");
           
          image.setAttribute("class" ,"imageC");
          image.setAttribute("src",elem.image_url);
          image.setAttribute("alt",elem.name);
          var h5 =document.createElement("h5");
          h5.textContent=elem.name;
          
          var box=document.createElement("div");
          box.setAttribute("class","quantityC");
          
          var qyt=document.createElement("b");
          qyt.textContent="Qyt";

          var seC=document.createElement("select");
          seC.textContent="";
          seC.setAttribute("id","select3");
          seC.addEventListener("change",setFun3);
          seC.setAttribute("class","seC");

           //   
           function setFun3(){
            var select=document.getElementById("select3").value;
            
            if(select==1){
              document.getElementById("priceN3").textContent=" ₹ "+elem.price;
            }
            else if(select==2){
              var c=2*elem.price;
              document.getElementById("priceN3").textContent=" ₹ "+c;
              cartVal3C+=elem.price;
            }
            else if(select==3){
              var c=3*elem.price;
              document.getElementById("priceN3").textContent=" ₹ "+c;
              cartVal3C+=2*elem.price;
            }
            else if(select==4){
              var c=4*elem.price;
              document.getElementById("priceN3").textContent=" ₹ "+c;
              cartVal3C+=3*elem.price;
            }
           totalPriceC();
          }
          
      // 
          var op1=document.createElement("option");
          op1.textContent=1;

          var op2=document.createElement("option");
          op2.textContent=2;

          var op3=document.createElement("option");
          op3.textContent=3;

          var op4=document.createElement("option");
          op4.textContent=4;
          
          seC.append(op1,op2,op3,op4)
          
            
          var price=document.createElement("p");
          price.textContent=" ₹ "+elem.price;
          price.setAttribute("id","priceN3")
          cartVal3C+=elem.price; 

           var remove=document.createElement("button");
           remove.textContent="Remove Item";
           remove.setAttribute("class","removeC")
           remove.addEventListener("click",function(){removeItem3C(elem,index)})

//          appending

          
          box.append(h5, price,qyt,seC, remove)
          div.append(image, box)
          div.setAttribute("class","cartProdC");
          document.querySelector("#main2C").append(div);
         
       });
    //    console.log(cart3C.length);
    };

    function removeItem3C(elem,index){
        
        cart3C.splice(index,1);
        localStorage.setItem("aadToCart3", JSON.stringify(cart3C));
        window.location.reload();
        displayCart3C();
       
      }
// **************************************************************************


    function totalPriceC(){
      document.querySelector("#costC").textContent="";
        totalIC=cartC.length+cart2C.length+cart3C.length
        // console.log(totalIC);
        document.querySelector("#itemC").textContent=totalIC;
        
        cartValC=cartVal1C+cartVal2C+cartVal3C
        // console.log(cartValC);

       var divC=document.createElement("div");
       divC.setAttribute("id" ,"boxC");
       var pC=document.createElement("p");
       pC.textContent="Total Price  "
       var p1C=document.createElement("p");
       p1C.setAttribute("id", "p1C")
       p1C.textContent="Total Items : "+ totalIC ;
       var inputC=document.createElement("input");
       inputC.setAttribute("id","inputC")
       inputC.setAttribute("placeholder","Enter Promo Code")
       var promoC=document.createElement("button");
       promoC.setAttribute("id","promoC")
       promoC.textContent="Apply Promo"
       promoC.addEventListener("click",addDiscount);
       totalC=document.createElement("p");
       totalC.textContent="₹ "+ cartValC
       totalC.setAttribute("id","totalC")
        // 
     function addDiscount(){
       var select= document.getElementById("inputC").value;

        if( select=== "m20"){
        document.getElementById("totalC").textContent=cartValC-((cartValC*20)/100);
        document.getElementById("totalC").style.color="green";
        }else{
            alert("Promo Code Is Not Valid")
        }
     };
        // 
        var PaymentC=document.createElement("a");
        PaymentC.setAttribute("id","paymentC")
        PaymentC.textContent="Payment"
        PaymentC.setAttribute("href","address.html")
    
    //  appending
       divC.append(p1C,inputC,promoC ,pC,totalC,PaymentC);
       document.querySelector("#costC").append(divC);
    };
   
   document.getElementById("logoC1").addEventListener("click",logoFunC);
   function logoFunC(){
    window.location.replace("./index.html")
   };
