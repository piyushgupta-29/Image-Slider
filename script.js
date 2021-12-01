let a=["./images/image1.jpg","./images/image2.jpg","./images/image3.jpg","./images/image4.jpg","./images/image5.jpg"];
let i=0;
function previous(){
    if(i==0)
        i=4;
    else
        i--;
    $("#image").src=a[i];
}
function next(){
    i=(i+1)%5;
    $("#image").src=a[i];
}
let width=document.querySelector(".container-fluid");
let height=document.querySelector(".container-fluid");

console.log(width);
console.log(height);
