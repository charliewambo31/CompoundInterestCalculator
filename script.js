document.addEventListener("DOMContentLoaded", function() {
    const context=document.getElementById("data-set").getContext("2d");
    let line =new Chart(context,{});

//values from form
const initialAmount=document.getElementById("initialamount");
const years=document.getElementById("years");
const rates=document.getElementById("rates");
const compound =document.getElementById("compound");


// The calculate button
const button=document.querySelector(".input-group button");
//Attach an event listener
button.addEventListener("click",calculateGrowth);

 const data =[];
 const labels =[];

 
 function calculateGrowth(e) {
  
    e.preventDefault();
    

    data.length = 0;
    labels.length = 0;
    let growth = 0 ;

    try{
        
        const initial = parseInt(initialAmount.value);
        const period = parseInt(years.value);
        const interest = parseInt(rates.value);
        const comp = parseInt(compound.value)

        for(let i = 1 ;i <= period;i++){
            let final;
            final = initial * Math.pow(1 + ((interest / 100)/comp),comp*i);
           //final = initial*interest*i;
            data.push(toDecimal(final,2)) ;
            labels.push("Year"+ i);
            growth = toDecimal(final,2) ; 
        }
        // console.table(data);
        message.innerText = `Vous aurez un montant de ${growth} apres ${period} periodes`;
        drawGraph();
     

    }catch (error){
        
        console.error("error");
    }

    }
 
 console.log("deloo");

 function drawGraph(){
    line.destroy()
    line = new Chart (context,{
        type:"line",
        data:{
            labels,
            datasets:[{
                label:"compound",
                data,
                fill: true,
                background:"rgba(12,141,0,0.7)",
                borderWitdh: 3
            }]
            
        }
    });
 }
 console.log("deloo");
 function toDecimal(value,decimals){
    return +value.toFixed(decimals);
 }

 
});
