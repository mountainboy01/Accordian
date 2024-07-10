  /****** ACCORDIAN START *******/  
    const accordianitems = document.querySelectorAll(".accordian-item");
            accordianitems.forEach(item =>{
                const title = item.querySelector(".accordian-title");
                const content = item.querySelector(".accordian-content");

                title.addEventListener("click" ,()=>{
                    for(var i=0; i<accordianitems.length;i++)
                        {
                            if(accordianitems[i]!=item)
                             {
                                 accordianitems[i].classList.remove("active");
                             }
                            else
                             {
                                 item.classList.toggle("active");
                             }
                        }
                });
            });
          
