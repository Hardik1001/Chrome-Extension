let str = "";
let main_deposit = document.getElementById("depall");

if(localStorage.getItem('your_text_deposits') != '' && localStorage.length != 0){
  let your_text_deposits_array = JSON.parse(localStorage.getItem('your_text_deposits'));
  for(let i=0; i<your_text_deposits_array.length; i++){
    if(your_text_deposits_array[i] == 'No notes :(' && your_text_deposits_array.length != 1){
      continue;
    }
    str += `<div class="alert alert-primary my-3 deposit" role="alert">
            ${your_text_deposits_array[i]}
            </div>`;
    };
main_deposit.innerHTML = str;
}