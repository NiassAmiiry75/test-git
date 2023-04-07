let cont=document.getElementById('content')
      const az=document.createElement('div')
 az.classList.add('champ')
 cont.appendChild(az)
 const btn=document.createElement('button')
 btn.classList.add("bouton")
 cont.appendChild(btn)
 btn.innerHTML="suivant"


 const lesQuestion=[{
    question:"carrote est un legume",
    a:"oui",
    b:"non",
    c:"moin important",
    d:"je ne veux  pas",
    correcte:"a",

 },
 

question:"le senegal rewu terranga",
a:"oui",
b:"non",
c:"ça peut etre",
d:"logique",
correcte:"b"
 }
 ];
 //inituialisation des donne 
  let score=0
 let  reponse=1


 function passerAuQuestions(){  
            

     az.innerHTML=` <h2>${lesQuestion[reponse].question}</h2> <br>
  
     <ul>

      <li>
      <input type="radio" id="rep" name="reponse" value="a">
      <label for="repA">${lesQuestion[reponse].a}</label>
      </li>


      <li>
      <input type="radio" id="rep" name="reponse" value="a">
      <label for="repB">${lesQuestion[reponse].b}</label>
      </li>
     
      <li>
      <input type="radio" id="rep" name="reponse" value="a">
      <label for="repC">${lesQuestion[reponse].c}</label>
      </li>


      <li>
      <input type="radio" id="rep" name="reponse" value="a">
      <label for="repD">${lesQuestion[reponse].d}</label>
      </li>
      
      </ul>

   `
 }
passerAuQuestions();
   

btn.addEventListener('click',function(){

  const answer=document.querySelector('input[type=radio]: checked');
   

    if(answer.value==lesQuestion[reponse].correcte){
        score++
   }
   reponse++

   if(reponse<lesQuestion.length)
   {
      passerAuQuestions();
   }else
   {
    container.innerHTML = '';
    const divR = document.createElement('div');
    divR.innerHTML= `
    <div> Vous avez trouvé ${score} / ${quizz.length}</div>
    <button onclick = 'reload()'>REJOUER</button>
    `
    container.appendChild(divR) ;  
    bouton.setAttribute('hidden','hidden')
}



})
function reload()
{
    location.reload()
}
