function frmLogin(e){
    e.preventDefault()
    const nick=document.getElementById("nick")
    const clave=document.getElementById("clave")
    if(nick.value == ""){
        clave.classList.remove('is-invalid')
        nick.classList.add('is-invalid')
    }else if(clave.value == ""){
        //nick.classList.remove('is-invalid')
        clave.classList.add('is-invalid')
    }else{
        const url = base_url + "Usuarios/validar";
        const frm = document.getElementById("frmLogin")
        const http = new XMLHttpRequest()
        http.open("POST",url, true)
        http.send(new FormData(frm))
        http.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                const res=JSON.parse(this.responseText)
                if(res=="ok"){
                    window.location = base_url + "Usuarios";
                }else{
                    document.getElementById("alerta").classList.remove("d-none");
                    document.getElementById("alerta").innerHTML = res;
                }
            }
        }
    }
}
