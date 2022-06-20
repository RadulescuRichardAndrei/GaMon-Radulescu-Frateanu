
async function GarbageIsFull(event){
    event.preventDefault();
    const pubID=document.getElementById('pubele').value;
    fetch('api/PubStatus',{
        method:'PUT',
        body:JSON.stringify({'id': pubID,'status':'true'})
    }).then((response)=>{
        window.alert('Bin has been reported as full');
    }).catch(function(err){
        console.log(err);
    })
}