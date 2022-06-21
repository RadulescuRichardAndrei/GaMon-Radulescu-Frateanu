function addZona()
{ 
    var id=document.Zone.id_zona.value; 
    var nume=document.Zone.nume.value; 
    
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
   
   /* 
   fetch('api/addSuperUser',{
        method: 'POST',
        body: JSON.stringify({
         "USERNAME":name,
         "EMAIL":email
        })
    })
*/
    
    td1.innerHTML=id;
    td2.innerHTML=nume;
    td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delZona(this);" class="btn btn-danger">'
    td4.innerHTML='<input type="button" name="up" value="Update" onclick="UpZn(this);" class="btn btn-primary">'

    document.getElementById("tb3").appendChild(tr);
}

function UpZn(zn){
    var id=document.Zone.id_zona.value; 
    var nume=document.Zone.nume.value; 
   
    var s = zn.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
  
    
    
    td1.innerHTML='<input type="number" name="id1">';
    td2.innerHTML='<input type="text" name="nume1">';
    td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delZona(this);" class="btn btn-danger">'
    td4.innerHTML='<input type="button" name="up" value="Update" onclick="addUpZn(this);" class="btn btn-primary">'

    document.getElementById("tb3").replaceChild(tr, s);
}

function addUpZn(zn){
    var id=document.Zone.id1.value; 
    var nume=document.Zone.nume1.value; 
    
    var s = zn.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));

    
    
    td1.innerHTML=id;
    td2.innerHTML=nume;
    td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delZona(this);" class="btn btn-danger">'
    td4.innerHTML='<input type="button" name="up" value="Update" onclick="UpZn(this);" class="btn btn-primary">'

    document.getElementById("tb3").replaceChild(tr, s);
}

function delZona(zn){
    var s=zn.parentNode.parentNode;
    s.parentNode.removeChild(s);
}