function addPubela()
    { 
        var id=document.Pubele.id_pubela.value; 
        var tipgunoi=document.Pubele.tipgunoi.value; 
        var capacitate=document.Pubele.capacitate.value;
        var idcartier=document.Pubele.idcartier.value;
        
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        var td6 = tr.appendChild(document.createElement('td'));
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
        td2.innerHTML=tipgunoi;
        td3.innerHTML=capacitate;
        td4.innerHTML=idcartier;
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delPubela(this);" class="btn btn-danger">'
        td6.innerHTML='<input type="button" name="up" value="Update" onclick="UpPub(this);" class="btn btn-primary">'

        document.getElementById("tbl2").appendChild(tr);
    }

    function UpPub(pub){
        var id=document.Pubele.id_pubela.value; 
        var tipgunoi=document.Pubele.tipgunoi.value; 
        var capacitate=document.Pubele.capacitate.value;
        var idcartier=document.Pubele.idcartier.value;

        var s = pub.parentNode.parentNode;
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        var td6 = tr.appendChild(document.createElement('td'));
        
        
        td1.innerHTML='<input type="number" name="id1">';
        td2.innerHTML='<input type="text" name="tipgunoi1">';
        td3.innerHTML='<input type="number" name="capacitate1">';
        td4.innerHTML='<input type="number" name="idcartier1">';
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delPubela(this);" class="btn btn-danger">'
        td6.innerHTML='<input type="button" name="up" value="Update" onclick="addUpPub(this);" class="btn btn-primary">'

        document.getElementById("tbl2").replaceChild(tr, s);
    }

    function addUpPub(pub){
        var id=document.Pubele.id1.value; 
        var tipgunoi=document.Pubele.tipgunoi1.value; 
        var capacitate=document.Pubele.capacitate1.value;
        var idcartier=document.Pubele.idcartier1.value;
        
        var s = pub.parentNode.parentNode;
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        var td6 = tr.appendChild(document.createElement('td'));
        
        
        td1.innerHTML=id;
        td2.innerHTML=tipgunoi;
        td3.innerHTML=capacitate;
        td4.innerHTML=idcartier;
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delPubela(this);" class="btn btn-danger">'
        td6.innerHTML='<input type="button" name="up" value="Update" onclick="UpPub(this);" class="btn btn-primary">'

        document.getElementById("tbl2").replaceChild(tr, s);
    }

    function delPubela(pub){
        var s=pub.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }