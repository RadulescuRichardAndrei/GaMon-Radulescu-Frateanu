
async function requestHtml(event){
event.preventDefault();
const time=document.getElementById("selected-interval");

fetch('api/generateHtml',{
    method:"POST",
    headers: {
        'Accept': 'text/html',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'time':time})  

}).then((response)=>{return response.blob();})
.then((data)=>{
    var a= document.createElement("a");
    a.href= window.URL.createObjectURL(data);
    a.download="generatedHTML.hmtl";
    document.body.appendChild(a);
    a.click();
    a.remove();
})

}