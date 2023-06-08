//values from form
const initialAmount=document.getElementById("initialamount");
const years=document.getElementById("years");
const rates=document.getElementById("rates ");
const compound =document.getElementById("compound ");


// The calculate button
const button=document.querySelector(".input-group button");
//Attach an event listener
button.addEventListener("click",calculateGrowth);

 const data =[];
 const labels =[];

 function calculateGrowth(e) {
    e.preventDefault();

    try{
        const initial=parseInt(initialAmount.value);
        const period=parseInt(years.value);
        const interest=parseInt(rates.value);
        const comp=parseInt(compound.value)

        for(let i=1 ;i<=period;i++){
            const final=initial * Math.pow(1 + ((interest / 100)/comp),comp*i);
            data.push(final);
            labels.push("Year"+ i);
        }
     

    }catch (error){

    }
 }


