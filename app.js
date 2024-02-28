let i=0;s=0;
let para1 = document.querySelectorAll('.img1');
let btn = document.querySelector('#btn');
let res = document.querySelector('#result');
let para = document.querySelectorAll('.para');


para1.forEach(element => {
    element.addEventListener('click',(evt)=> {
        
        
        if(!element.children[0])
        {
            let img = document.createElement('img');
            img.src="./image/sea.jpg";
            img.classList.add('imgset');
            element.appendChild(img);
            i=i+1;
            if(i>=8 && s!==5)
                {
            
                res.innerText="you lose";
                
            
                }
        }      
    })
    
});


let para2 = document.querySelectorAll('.img2');
para2.forEach(element => {
    element.addEventListener('click',()=> {

        if(!element.children[0])
        {
            let img = document.createElement('img');
            img.src="./image/ship.jpg";
            img.classList.add('imgset');
            element.appendChild(img);
            i++;
            s++;
            if(i<=8 && s===5)
            {
                res.innerText="Congratulation, you won";
                
            }
            else if(i>=8)
            {
                res.innerText="you lose";
                
            }
            
        }
        
    })
    
});

btn.addEventListener("click",()=>{
    for(p of para)
    {
        
       p.innerHTML = "";
       res.innerText="";

    }  
    i=0;s=0;    
})









