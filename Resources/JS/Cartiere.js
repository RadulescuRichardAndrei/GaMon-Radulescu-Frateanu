function addCartier() {
    var name = document.Cartiere.nume_cartier.value;
    var addr = document.Cartiere.adresa.value;
    var id_Zona = document.Cartiere.zonaID.value;

    fetch('/api/addCartier', {
        method: 'POST',
        body: JSON.stringify({
            "nume": name,
            "adresa":addr,
            "idZona":id_Zona

        })

    }).then((response) => {
        window.alert('Cartier has been registred')
    }).then(function (err) { console.log(err) }).then(() => {
        getCartier();
       
})
}
function getCartier() {
    document.getElementById("tb4").textContent = '';
    fetch('/api/Cartiere', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
    }).then(response => response.json()).then(data => {
        const root = document.getElementById("tb3");
        for (var i = 0; i < data.json_agg.length; i++) {

            var tr = document.createElement('tr');


            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));
            var td4 = tr.appendChild(document.createElement('td'));
            var td5 = tr.appendChild(document.createElement('td'));

            td1.innerHTML = data.json_agg[i].ID;
            td2.innerHTML = data.json_agg[i].Nume;
            td3.innerHTML = data.json_agg[i].adresa;
            td4.innerHTML = data.json_agg[i].idZona;
            td5.innerHTML = '<input type="button" name="del" value="Delete" onclick="delCartier(this);" class="btn btn-danger">'


            document.getElementById("tb4").appendChild(tr);


        }
    })

}


function delCartier(cr) {
    var id = cr.parentNode.parentNode.children[0].innerText;
 fetch('/api/delCartier',{
    method : 'DELETE',
    body: JSON.stringify({"id":id,
     }),

 })

    var s = cr.parentNode.parentNode;
    s.parentNode.removeChild(s);
}