let new_deposit = '';
let toggle = document.getElementById("flexSwitchCheckDefault");

if(localStorage.length == 0){
    localStorage.setItem('your_text_deposits',JSON.stringify(['No notes :(']));
}
else{
    function update_local_storage(){
        let ask = prompt('Type here');
        new_deposit = ask;
        if(new_deposit != '' && new_deposit != null){
            your_text_deposits_arrstr = localStorage.getItem('your_text_deposits');
            your_text_deposits_arr = JSON.parse(your_text_deposits_arrstr);
            your_text_deposits_arr.push(new_deposit);
            localStorage.setItem('your_text_deposits',JSON.stringify(your_text_deposits_arr));
        }
    }
    toggle.addEventListener('click', () => {
        if(toggle.checked){
            document.getElementById("statustxt").innerText = '💡';
            update_local_storage();
        }
        else{
            document.getElementById("statustxt").innerText = '😴';
        }
    });
}
