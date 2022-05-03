window.addEventListener('DOMContentLoaded', () => {   
    const button = document.getElementById("button");
    button.addEventListener('click', fileUpload);
})

function fileUpload(){
    console.log("hi");

    const file = document.getElementsByName("picture")[0].files[0];
    
    const pic = new FileReader();
    
    const imageTag = document.getElementById("img");
    pic.onload = () => {
        var base46Pic = pic.result;
        console.log(base46Pic);
        imageTag.src = pic.result;
        navigator.clipboard.writeText(base46Pic);
    }
    pic.error = (e) => {
        console.log(e)
    }
    if(pic && file){
        pic.readAsDataURL(file);
        console.log("this happened next")
    }     
}
