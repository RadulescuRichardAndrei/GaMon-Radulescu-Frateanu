function addSuperUser()
{ 
    var id=document.SUser.id_SUser.value; 
    var username=document.SUser.username.value; 
    var email=document.SUser.email.value;
    var password=document.SUser.password.value;
    
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
 
    td1.innerHTML=id;
    td2.innerHTML=username;
    td3.innerHTML=email;
    td4.innerHTML=password;
    td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delUser(this);" class="btn btn-danger">'
    td6.innerHTML='<input type="button" name="up" value="Update" onclick="UpUsr(this);" class="btn btn-primary">'

    document.getElementById("tbl1").appendChild(tr);

}
function getSuperUser()
{
    fetch('api/addSuperUser',{
        method: 'GET',
        body: JSON.stringify({
            "ID":id,
            "USERNAME":username,
            "EMAIL":email,
            "PASSWORD":password
        })
    })
}
async function getSuperUser(event) {
    event.preventDefault();
    fetch('api/getSuperUser', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
    }).then(response => response.json()).then(data => {
        
        const oldData = document.getElementById('table-requests');
        const root = oldData.parentElement;
        if(oldData!==null){        
        root.removeChild(oldData);
        }
        const newData = document.createElement('div');
        newData.setAttribute('id', 'table-requests');

        const tableData = document.createElement('table');
        tableData.setAttribute('class','table');
        const tableBody = document.createElement('tbody');

        const row = document.createElement("tr");

        addToRow(row,'ID','td');
        addToRow(row,'USERNAME','td');
        addToRow(row,'EMAIL','td');
        addToRow(row,'PASSWORD','td');
        tableBody.appendChild(row);

        for (var i = 0; i < data.json_agg.length; i++) {
            const row = document.createElement("tr");

            addToRow(row,data.json_agg.at(i).id,'td');
            addToRow(row,data.json_agg.at(i).username,'td');
            addToRow(row,data.json_agg.at(i).email,'td');
            addToRow(row,data.json_agg.at(i).PASSWORD,'td');
            if(data.json_agg.at(i).stare)
            addToRow(row,'solved','td');
            else
            addToRow(row,'not solved','td');

            tableBody.appendChild(row);        

        }

        tableData.appendChild(tableBody);
        newData.appendChild(tableData);
        root.appendChild(newData)

    })
}
function UpUsr(usr){
    var id = document.SUser.id_SUser.value; 
    var username = document.SUser.username.value; 
    var email = document.SUser.email.value;
    var password = document.SUser.password.value;

    var s = usr.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML='<input type="number" name="id1">';
    td2.innerHTML='<input type="text" name="username1">';
    td3.innerHTML='<input type="text" name="email1">';
    td4.innerHTML='<input type="text" name="password1">';
    td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delUser(this);" class="btn btn-danger">'
    td6.innerHTML='<input type="button" name="up" value="Update" onclick="addUpUsr(this);" class="btn btn-primary">'

    document.getElementById("tbl1").replaceChild(tr, s);
}

function addUpUsr(usr){
    var id=document.SUser.id1.value; 
    var username=document.SUser.username1.value; 
    var email=document.SUser.email1.value;
    var password=document.SUser.password1.value;
    
    var s = usr.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML=id;
    td2.innerHTML=username;
    td3.innerHTML=email;
    td4.innerHTML=password;
    td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delUser(this);" class="btn btn-danger">'
    td6.innerHTML='<input type="button" name="up" value="Update" onclick="UpUsr(this);" class="btn btn-primary">'

    document.getElementById("tbl1").replaceChild(tr, s);
}

function delUser(usr){
    var s=usr.parentNode.parentNode;
    s.parentNode.removeChild(s);
}




