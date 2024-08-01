document.addEventListener("DOMContentLoaded",
function(){
    const images = document.querySelectorAll(".images img")
    const model = document.querySelector(".model");
    const modelImg = document.querySelector(".model-img");
    const closeBtn = document.querySelector(".close");
    const modelTxt = document.querySelector(".model-text");
    let currentIndex = 0;
    const btnPrev = document.querySelector(".btnprev");
    const btnNext = document.querySelector(".btnnext");
    
    //Add click for all images
    images.forEach((image,index)=>{
        image.addEventListener("click",function(){
        currentIndex=index;
        updateModelContent();
        model.classList.add("show");
        })
    })
     //Update Image in model
     function updateModelContent(){
        const image = images[currentIndex];
        modelImg.classList.remove("show")

    setTimeout(()=>{
        modelImg.src = image.src;
        modelTxt.innerHTML=image.alt;
        modelImg.classList.add("show")
    },300)
    }
     //Next btn onclick:
     btnNext.addEventListener("click",function(){
        currentIndex=currentIndex+1>=images.length?0: currentIndex+1;
        updateModelContent();
    });

     //Previous btn onclick:
     btnPrev.addEventListener("click",function(){
        currentIndex=currentIndex - 1 < 0 ?images.length - 1 : currentIndex-1;
        updateModelContent();
    });

    //Code for close icon:
    closeBtn.addEventListener("click",function(){
     model.classList.remove("show");
    });
        
});