var getData = function() {
    var codigo = document.getElementById("codigo").value;
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var editorial = document.getElementById("editorial").value;
    var año = document.getElementById("año").value;
    if (codigo == "") {
        document.getElementById("codigo").focus();
    } else {
        if (titulo == "") {
            document.getElementById("titulo").focus();
        } else {
            if (autor == "") {
                document.getElementById("autor").focus();
            } else {
                if (editorial == "") {
                    document.getElementById("editorial").focus();
                } else {
                    if (año == "") {
                        document.getElementById("año").focus();
                    } else {
                        console.log(codigo + " " + titulo + " " + autor + " " + editorial + " " + año);
                        document.getElementById("codigo").value = "";
                        document.getElementById("titulo").value = "";
                        document.getElementById("autor").value = "";
                        document.getElementById("editorial").value = "";
                        document.getElementById("año").value = "";
                    }

                }
            }
        }
    }
};
document.querySelector('#boton').addEventListener('click', obtenerdatos());

function obtenerdatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'biblioteca.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of datos) {
                res.innerHTML += `<tr>
                <td>${item.codigo}</td>
                 <td>${item.titulo}</td>
                <td>${item.autor}</td>
                <td>${item.editorial}</td>
                <td>${item.año}</td>
                </tr>`;
            }
        }
    };
}