let tblUsuarios;
let tblCajas;
let tblClientes;
let tblCategorias;
let tblMedidas;
let tblProductos;
let tblPedidos;
document.addEventListener("DOMContentLoaded", function(){
    tblUsuarios = $("#tblUsuarios").DataTable({
        ajax:{
            url: base_url + 'Usuarios/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_usuario'},
            {'data':'nick'},
            {'data':'nombre'},
            {'data':'caja'},
            {'data':'usuario_estado'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })

    tblCajas = $("#tblCajas").DataTable({
        ajax:{
            url: base_url + 'Cajas/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_caja'},
            {'data':'caja'},
            {'data':'caja_estado'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })

    tblClientes = $("#tblClientes").DataTable({
        ajax:{
            url: base_url + 'Clientes/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_cliente'},
            {'data':'razon_social'},
            {'data':'documentoid'},
            {'data':'complementoid'},
            {'data':'cliente_email'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })

    tblCategorias = $("#tblCategorias").DataTable({
        ajax:{
            url: base_url + 'Categorias/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_categoria'},
            {'data':'nombre_categoria'},
            {'data':'codigoProducto'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })

    tblMedidas = $("#tblMedidas").DataTable({
        ajax:{
            url: base_url + 'Medidas/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_medida'},
            {'data':'descripcion_medida'},
            {'data':'descripcion_corta'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })
    
    tblProductos = $("#tblProductos").DataTable({
        ajax:{
            url: base_url + 'Productos/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'codigo'},
            {'data':'nombre_categoria'},
            {'data':'nombre_producto'},
            {'data':'costo_compra'},
            {'data':'precio_venta'},
            {'data':'cantidad'},
            {'data':'descripcion_medida'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })

    tblPedidos = $("#tblPedidos").DataTable({
        ajax:{
            url: base_url + 'Pedidos/listar',
            dataSrc: ''
        },
        columns: [
            {'data':'id_factura'},
            {'data':'numeroFactura'},
            {'data':'fechaEmision'},
            {'data':'razon_social'},
            {'data':'documentoid'},
            {'data':'cliente_email'},
            {'data':'montoTotal'},
            {'data':'descuentoAdicional'},
            {'data':'acciones'}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ resultados por pagina",
            "zeroRecords": "No se encontro",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtered from _MAX_ total)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Sig.",
                "previous":   "Ant."
            },
        }
    })
})
/**
 * Usuarios
 */

function frmUsuario(){
    document.getElementById("title").innerHTML="Nuevo usuario"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_usuario").value = ""
    document.getElementById("claves").classList.remove("d-none")
    document.getElementById("frmUsuario").reset()
    $("#nuevo_usuario").modal("show")
}

function registrarUsuario(e){
    e.preventDefault()
    const nick = document.getElementById("nick")
    const nombre = document.getElementById("nombre")
    const clave = document.getElementById("clave")
    const id_caja = document.getElementById("id_caja")
    const confirmar = document.getElementById("confirmar")
    if(nick.value == "" || nombre.value=="" || clave.value==""){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Usuarios/registrar"
        const frm= document.getElementById("frmUsuario")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario registrado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_usuario").modal("hide")
                      tblUsuarios.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario modificado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_usuario").modal("hide")
                      tblUsuarios.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nuevo_usuario").modal("hide")
                }
            }
        }

    }
}

function btnEditarUsuario(id){
   document.getElementById('title').innerHTML = "Actualizar usuario"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Usuarios/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_usuario").value=res.id_usuario
            document.getElementById("nick").value=res.nick
            document.getElementById("nombre").value=res.nombre
            document.getElementById("id_caja").value=res.id_caja
            document.getElementById("clave").value=1
            document.getElementById("claves").classList.add('d-none')
            $("#nuevo_usuario").modal("show")
        }
    }
}

function btnInactivarUsuario(id){
    Swal.fire({
        title: 'Esta seguro de inactivar el Usuario?',
        text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Usuarios/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    var table = $('#tblUsuarios').DataTable();
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Usuario Inactivado con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblUsuarios.ajax.reload()
        }
      })
}

function btnReactivarUsuario(id){
    Swal.fire({
        title: 'Esta seguro de activar el Usuario?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Usuarios/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'usuario activado con exito',
                            'success'
                          )
                         
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblUsuarios.ajax.reload()
        }
      })
}
/**
 * Cajas
 */
function frmCaja(){
    document.getElementById("title").innerHTML = "Nueva Caja"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_caja").value = ""
    document.getElementById("frmCaja").reset()
    $("#nueva_caja").modal("show")
}

function registrarCaja(e){
    e.preventDefault()
    const caja = document.getElementById("caja")
    if(caja.value == ""){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Cajas/registrar"
        const frm= document.getElementById("frmCaja")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Caja registrada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_caja").modal("hide")
                      tblCajas.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Caja modificada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_caja").modal("hide")
                      tblCajas.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nueva_caja").modal("hide")
                }
            }
        }

    }
}

function btnEditarCaja(id){
   document.getElementById('title').innerHTML = "Actualizar caja"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Cajas/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_caja").value=res.id_caja
            document.getElementById("caja").value=res.caja
            $("#nueva_caja").modal("show")
        }
    }
}

function btnInactivarCaja(id){
    Swal.fire({
        title: 'Esta seguro de inactivar la Caja?',
        text: "La caja no se elimino de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Cajas/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'caja Inactivada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblCajas.ajax.reload()
        }
      })
}

function btnReactivarCaja(id){
    Swal.fire({
        title: 'Esta seguro de activar la Caja?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Cajas/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'caja activada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblCajas.ajax.reload()
        }
      })
}
/**
 * Clientes
 */
function frmCliente(){
    document.getElementById("title").innerHTML = "Nuevo Cliente"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_cliente").value = ""
    document.getElementById("frmCliente").reset()
    $("#nuevo_cliente").modal("show")
}

function registrarCliente(e){
    e.preventDefault()
    const documentoid = document.getElementById("documentoid")
    const complementoid = document.getElementById("complementoid")
    const razon_social = document.getElementById("razon_social")
    const cliente_email = document.getElementById("cliente_email")
    if(documentoid.value == "" || razon_social.value == "" ){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Clientes/registrar"
        const frm= document.getElementById("frmCliente")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Cliente registrado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_cliente").modal("hide")
                      tblClientes.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Cliente modificado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_cliente").modal("hide")
                      tblClientes.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nuevo_cliente").modal("hide")
                }
            }
        }

    }
}

function btnEditarCliente(id){
   document.getElementById('title').innerHTML = "Actualizar cliente"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Clientes/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_cliente").value=res.id_cliente
            document.getElementById("documentoid").value=res.documentoid
            document.getElementById("complementoid").value=res.complementoid
            document.getElementById("razon_social").value=res.razon_social
            document.getElementById("cliente_email").value=res.cliente_email
            $("#nuevo_cliente").modal("show")
        }
    }
}

function btnInactivarCliente(id){
    Swal.fire({
        title: 'Esta seguro de inactivar el Cliente?',
        text: "El cliente no se eliminara de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Clientes/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'cliente Inactivado con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblClientes.ajax.reload()
        }
      })
}

function btnReactivarCliente(id){
    Swal.fire({
        title: 'Esta seguro de activar el Cliente?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Clientes/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'cliente activado con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblClientes.ajax.reload()
        }
      })
}
/**
 * Categorias
 */
function frmCategoria(){
    document.getElementById("title").innerHTML = "Nuevo Categoria"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_categoria").value = ""
    document.getElementById("frmCategoria").reset()
    $("#nueva_categoria").modal("show")
}

function registrarCategoria(e){
    e.preventDefault()
    const nombre_categoria = document.getElementById("nombre_categoria")
    const codigoProducto = document.getElementById("codigoProducto")
    if(nombre_categoria.value == "" || codigoProducto.value == "" ){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Categorias/registrar"
        const frm= document.getElementById("frmCategoria")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Categoria registrada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_categoria").modal("hide")
                      tblCategorias.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Categoria modificada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_categoria").modal("hide")
                      tblCategorias.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nueva_categoria").modal("hide")
                }
            }
        }

    }
}

function btnEditarCategoria(id){
   document.getElementById('title').innerHTML = "Actualizar categoria"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Categorias/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_categoria").value=res.id_categoria
            document.getElementById("nombre_categoria").value=res.nombre_categoria
            document.getElementById("codigoProducto").value=res.codigoProducto
            $("#nueva_categoria").modal("show")
        }
    }
}

function btnInactivarCategoria(id){
    Swal.fire({
        title: 'Esta seguro de inactivar el Categoria?',
        text: "La categoria no se eliminara de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Categorias/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'categoria Inactivada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblCategorias.ajax.reload()
        }
      })
}

function btnReactivarCategoria(id){
    Swal.fire({
        title: 'Esta seguro de activar el Categoria?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Categorias/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'categoria activada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblCategorias.ajax.reload()
        }
      })
}
/**
 * Medidas
 */
function frmMedida(){
    document.getElementById("title").innerHTML = "Nueva Medida"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_medida").value = ""
    document.getElementById("frmMedida").reset()
    $("#nueva_medida").modal("show")
}

function registrarMedida(e){
    e.preventDefault()
    const descripcion_medida = document.getElementById("descripcion_medida")
    const descripcion_corta = document.getElementById("descripcion_corta")
    if(descripcion_medida.value == "" || descripcion_corta.value == "" ){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Medidas/registrar"
        const frm= document.getElementById("frmMedida")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Medida registrada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_medida").modal("hide")
                      tblMedidas.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Medida modificada con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nueva_medida").modal("hide")
                      tblMedidas.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nueva_medida").modal("hide")
                }
            }
        }

    }
}

function btnEditarMedida(id){
   document.getElementById('title').innerHTML = "Actualizar medida"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Medidas/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_medida").value=res.id_medida
            document.getElementById("descripcion_medida").value=res.descripcion_medida
            document.getElementById("descripcion_corta").value=res.descripcion_corta
            $("#nueva_medida").modal("show")
        }
    }
}

function btnInactivarMedida(id){
    Swal.fire({
        title: 'Esta seguro de inactivar el Medida?',
        text: "La medida no se eliminara de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Medidas/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'medida Inactivada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblMedidas.ajax.reload()
        }
      })
}

function btnReactivarMedida(id){
    Swal.fire({
        title: 'Esta seguro de activar el Medida?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Medidas/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'medida activada con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblMedidas.ajax.reload()
        }
      })
}
/**
 * Productos
 */
function frmProducto(){
    document.getElementById("title").innerHTML = "Nuevo Producto"
    document.getElementById("btnAccion").innerHTML = "Registrar"
    document.getElementById("id_producto").value = ""
    document.getElementById("frmProducto").reset()
    $("#nuevo_producto").modal("show")
}

function registrarProducto(e){
    e.preventDefault()
    const codigo = document.getElementById("codigo")
    const nombre_producto = document.getElementById("nombre_producto")
    const costo_compra = document.getElementById("costo_compra")
    const precio_venta = document.getElementById("precio_venta")
    const cantidad = document.getElementById("cantidad")
    const id_medida = document.getElementById("id_medida")
    const id_categoria = document.getElementById("id_categoria")
    if(codigo.value == "" || nombre_producto.value == "" ){
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Los campos son obligatorios'
          })
    }else{
        const url = base_url + "Productos/registrar"
        const frm= document.getElementById("frmProducto")
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto registrado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_producto").modal("hide")
                      tblProductos.ajax.reload()
                    }else if(res == "modificado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto modificado con exito',
                        text: '',
                        showConfirmButton:false,
                        timer : 2000
                      }) 
                      $("#nuevo_producto").modal("hide")
                      tblProductos.ajax.reload()
                    
                }else{
                    Swal.fire({
                        icon: 'Error',
                        title: res,
                        text: '',
                        timer : 3000
                      }) 
                      $("#nuevo_producto").modal("hide")
                }
            }
        }

    }
}

function btnEditarProducto(id){
   document.getElementById('title').innerHTML = "Actualizar producto"
   document.getElementById('btnAccion').innerHTML = "Modificar"
   const url = base_url + "Productos/editar/" + id
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            const res = JSON.parse(this.responseText)
            document.getElementById("id_producto").value=res.id_producto
            document.getElementById("codigo").value=res.codigo
            document.getElementById("nombre_producto").value=res.nombre_producto
            document.getElementById("costo_compra").value=res.costo_compra
            document.getElementById("precio_venta").value=res.precio_venta
            document.getElementById("cantidad").value=res.cantidad
            document.getElementById("id_medida").value=res.id_medida
            document.getElementById("id_categoria").value=res.id_categoria
            $("#nuevo_producto").modal("show")
        }
    }
}

function btnInactivarProducto(id){
    Swal.fire({
        title: 'Esta seguro de inactivar el Producto?',
        text: "El producto no se eliminara de forma permanente, solo cambiara el estado a Inactivo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Productos/inactivar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'producto Inactivado con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblProductos.ajax.reload();
        }
      })
}

function btnReactivarProducto(id){
    Swal.fire({
        title: 'Esta seguro de activar el Producto?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const url=base_url + "Productos/activar/" + id
            const http = new XMLHttpRequest()
            http.open("GET",url, true)
            http.send()
            http.onreadystatechange = function(){
                if(this.readyState==4 && this.satatus==200){
                    const res = JSON.parse(this.responseText)
                    if(res=="ok"){
                        Swal.fire(
                            'Mensaje!',
                            'producto activado con exito',
                            'success'
                          )
                          
                    }else{
                        Swal.fire(
                            'Mensaje!',
                             res,
                            'error'
                          )
                    }
                }
            }
            tblProductos.ajax.reload();
        }
      })
      
}
function btnImprimirFactura(id){
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/imprimirFactura",
        data: { id: id },
        cache: false,
        success: function(data){

        }
    })

}
