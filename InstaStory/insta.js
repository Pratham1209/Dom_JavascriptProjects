var arr = [
    {
        dp:"https://images.unsplash.com/photo-1627577279497-4b24bf1021b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1611042553365-9b101441c135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1683134161605-2a5e5e1abe62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1556935383-b0f5f9ca4100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D"
    },
]

var clutter=""
arr.forEach(function(elem,idx){
    clutter+= `<div class="story">
    <img id="${idx}"src="${elem.dp}" alt="">
</div>`
})
// dets ke andar properties hoti hai pointerevnt karke so wo hota hai hum kya kya kar rahe hai , uske andar hota dets jo pura info deta hai ek property hoti hai target jo abhi click karne pe jisko target kar rahe wo de raha hai
var storiyan = document.querySelector("#storyian")
storiyan.innerHTML=clutter
storiyan.addEventListener("click",function(dets){
 document.querySelector("#full-screen").style.display="block";
 document.querySelector("#full-screen").style.backgroundImage=`url(${(arr[dets.target.id].story)})`

 setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"

 },3000)
})