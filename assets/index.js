


window.onload = () => {
   const card = document.body.querySelector('article');

async function getAdvice() {
   try{
      const API_URL = './vefxi.json';

      fetch(API_URL).then((data) => {
         return data.json();
      }).then((ObjectData) => {

      const keysdata = Object.keys(ObjectData);
      const keysdataLenght = Object.keys(ObjectData).length;
      const randomNum = Math.floor(Math.random()*keysdataLenght);
      const advice = ObjectData[keysdata[randomNum]].text;
      const adviceId = ObjectData[keysdata[randomNum]].id;

      document.getElementById("advice").innerHTML = advice;
      document.getElementById("adviceId").innerHTML = adviceId;
      });
   }
   catch(err){
      console.error('sorry');
   }
}
   getNewAdvice.addEventListener('click', getAdvice);

}



// const API_URL = 'https://api.adviceslip.com/advice';

// const API_URL = 'https://api.adviceslip.com/advice';
//    fetch(API_URL).then((data) => {
//       return data.json();
//   }).then((ObjectData) => {
//       const advice = ObjectData.slip.advice;
//       const adviceID = ObjectData.slip.id;
//       console.log(advice);
//       console.log(adviceID);
//       document.getElementById("advice").innerHTML = advice;
//   });