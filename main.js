const simpsonFamily = [
{
    Name: "Homer Jay",
    Surname: "Simpson",
    Occupation: "Nuclear  inspector",
    Immagine: "./img/homer.jpg"

},
{
    Name: "Marjorie Jacqueline",
    Surname: "Bouvier - Simpson",
    Occupation : "Housewife",
    Immagine: "./img/marge.jpg"

},
{
    Name: "Bartholomew JoJo",
    Surname: "Simpson",
    Occupation : "Student",
    Immagine: "./img/bart.jpg"

},
{
    Name: "Lisa Marie",
    Surname: "Simpson",
    Occupation : "Student",
    Immagine: "./img/lisa.jpg"

},
{
    Name: "Margaret Evelyn Lenny",
    Surname: "Simpson",
    Occupation : "Suckling",
    Immagine: "./img/maggie.png"

},
{
    Name: "Abraham Jay Jebediah",
    Surname: "Simpson",
    Occupation : "Pensioner",
    Immagine: "./img/nonno.jpg"

}
]

 for(let i=0; simpsonFamily.length; i++){
     let simpEl = simpsonFamily[i]
     let card= document.querySelector("main")
     card.innerHTML+=`<div style="width: 270px; " class="bg-warning rounded-4 _shadow1 border border-4 border-black">
     <div class="bg-warning d-flex justify-content-center rounded-4">
         <img style="width:250px ;" class="mt-2 rounded-4 shadow border border-4 border-black" src="${simpEl.Immagine}" alt="">

     </div>
     <div style="padding-left: 12px;">
         <h6 class="fw-bold " >Name: <span class="fw-semibold ps-3 _shadow2">${simpEl.Name}</span></h6>
         <h6 class="fw-bold " >Surname: <span class="fw-semibold ps-3 _shadow2"> ${simpEl.Surname}</h6>
         <h6 class="fw-bold " >Occupation: <span class="fw-semibold ps-3 _shadow2">${simpEl.Occupation}</h6>
     </div>

 </div>`
    
 }


