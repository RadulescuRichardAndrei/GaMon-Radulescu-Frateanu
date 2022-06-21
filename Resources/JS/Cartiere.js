function addCartier()
{ 
    var id=document.Cartiere.id_cartier.value; 
    var nume=document.Cartiere.nume_cartier.value; 
    var zonaID=document.Cartiere.zonaID.value;
    
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));

   
    td1.innerHTML=id;
    td2.innerHTML=nume;
    td3.innerHTML=zonaID;
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delCartier(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="UpCr(this);" class="btn btn-primary">'

    document.getElementById("tb4").appendChild(tr);
}

function UpCr(cr){
    var id=document.Cartiere.id_cartier.value; 
    var nume=document.Cartiere.nume_cartier.value; 
    var zonaID=document.Cartiere.zonaID.value;
   
    var s = cr.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
  
    
    
    td1.innerHTML='<input type="number" name="id1">';
    td2.innerHTML='<input type="text" name="nume1">';
    td3.innerHTML='<input type="number" name="zonaID1">';
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delCartier(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="addUpCr(this);" class="btn btn-primary">'

    document.getElementById("tb4").replaceChild(tr, s);
}

function addUpCr(cr){
    var id=document.Cartiere.id1.value; 
    var nume=document.Cartiere.nume1.value; 
    var zonaID=document.Cartiere.zonaID1.values;
    
    var s = cr.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));

    
    
    td1.innerHTML=id;
    td2.innerHTML=nume;
    td3.innerHTML=zonaID;
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delCartier(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="UpCr(this);" class="btn btn-primary">'

    document.getElementById("tb4").replaceChild(tr, s);
}

function delCartier(cr){
    var s=cr.parentNode.parentNode;
    s.parentNode.removeChild(s);
}