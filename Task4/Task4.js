( function()
{   
    let textbar=document.querySelector('.bar');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');
    let clear=document.querySelector('.btn-clear');
    buttons.forEach(function(button)  
    {
        button.addEventListener('click',function(e)
        {
            let value = e.target.dataset.num;
            textbar.value += value;
        })
    });
    equal.addEventListener('click',function(e) {
        if(textbar.value ==='')
        {
            textbar.value="";
        } 
        else
        {
            let answer= eval(textbar.value);
            textbar.value=answer;
        }
    })
    clear.addEventListener('click',function(e){
        textbar.value=" ";
    })
})();