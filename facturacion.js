function buscarCliente(){
    let documentoid = document.getElementById("documentoid").value
    var data_objeto = {documentoid: documentoid}
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/buscarCliente",
        data: data_objeto,
        dataType: "json",
        success: function(data){
            if(data=='error'){
                Swal.fire({
                    icon: 'error',
                    title: 'El cliente no existe',
                    text: '',
                    timer: 2000
                  })
            }else{
                document.getElementById("razon_social").value = data["razon_social"]
                document.getElementById("cliente_email").value = data["cliente_email"]
                document.getElementById("id_cliente").value = data["id_cliente"]
                document.getElementById("complementoid").value = data["complementoid"]
            }
        }
    })
}

function buscarProducto(){
    let codigo = document.getElementById("codigo").value
    var data_objeto = {codigo: codigo}
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/buscarProducto",
        data: data_objeto,
        dataType: "json",
        success: function(data){
            if(data=='error'){
                Swal.fire({
                    icon: 'error',
                    title: 'El producto no existe o no hay disponibilidad',
                    text: '',
                    timer: 2000
                  })
            }else{
                document.getElementById("codigoProducto").value = data["codigoProducto"]
                document.getElementById("nombre_producto").value = data["nombre_producto"]
                document.getElementById("descripcion_corta").value=data["descripcion_corta"]
                document.getElementById("precio_venta").value = data["precio_venta"]
                document.getElementById("sTotal").value = data["precio_venta"]
            }
        }
    })
}

var arrayProductos = []
var detalles = document.getElementById("detalles");
function cargarProductos(){
    let actEconomica = document.getElementById("actEconomica").value
    let codigoProducto = document.getElementById("codigoProducto").value
    let codigo = document.getElementById("codigo").value
    let nombre_producto = document.getElementById("nombre_producto").value
    let cantProducto = document.getElementById("cantProducto").value
    //let unidadMedida = document.getElementById("descripcion_corta").value
    let unidadMedida = 57
    let precio_venta = document.getElementById("precio_venta").value
    let descProducto = document.getElementById("descProducto").value
    let sTotal = document.getElementById("sTotal").value

    let detallesobj = {
        actividadEconomica: actEconomica,
        codigoProductoSin: codigoProducto,
        codigoProducto: codigo,
        descripcion: nombre_producto,
        cantidad: cantProducto,
        unidadMedida: unidadMedida,
        precioUnitario: precio_venta,
        montoDescuento: descProducto,
        subTotal: sTotal,
        numeroSerie: null,
        numeroImei: null 
    }

    arrayProductos.push(detallesobj)

    armarPedido()

    document.getElementById("codigo").value=""
    document.getElementById("nombre_producto").value=""
    document.getElementById("cantProducto").value="1"
    document.getElementById("descripcion_corta").value=""
    document.getElementById("precio_venta").value="0.00"
    document.getElementById("descProducto").value="0.00"
    document.getElementById("sTotal").value="0.00"
}

function armarPedido(){
    detalles.innerHTML = ""
    arrayProductos.forEach((detalle) => {
        let fila = document.createElement("tr")
        fila.innerHTML = '<td>' + detalle.descripcion + '</td>' +
        '<td>' + detalle.cantidad + '</td>' +
        '<td>' + detalle.precioUnitario + '</td>' +
        '<td>' + detalle.montoDescuento + '</td>' +
        '<td>' + parseFloat(detalle.subTotal).toFixed(2) + '</td>' 

        let tdEliminar = document.createElement("td")
        let botonEliminar = document.createElement("button")
        botonEliminar.classList.add("btn", "btn-danger")
        botonEliminar.innerText = "Eliminar"
        botonEliminar.onclick = () => { 
            eliminarProducto(detalle.codigoProducto)
        }

        tdEliminar.appendChild(botonEliminar)
        fila.appendChild(tdEliminar)
        detalles.appendChild(fila)
    })
    calcularstotal()
}

function eliminarProducto(codigo){
    arrayProductos = arrayProductos.filter((detalle) => {
        if(codigo != detalle.codigoProducto){
            return detalle
        }
    })
    armarPedido()
}
function calcularstotal(){
    let totalPedido = 0
    for(var i=0; i<arrayProductos.length; i++){
        totalPedido += parseFloat(arrayProductos[i].subTotal)
    }
    //console.log(totalPedido)
    document.getElementById("subTotal").value=totalPedido.toFixed(2)
    let descAdicional = parseFloat(document.getElementById("descAdicional").value)
    document.getElementById("total").value=(totalPedido - descAdicional).toFixed(2)
    let cantProducto = document.getElementById("cantProducto").value
    let precio_venta = parseFloat(document.getElementById("precio_venta").value)
    let descProducto = parseFloat(document.getElementById("descProducto").value)
    document.getElementById("sTotal").value=(cantProducto*precio_venta)-descProducto
   
}
function verificarComunicacion(){
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/verificarComunicacion",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(data){
            if(data.RespuestaComunicacion.transaccion==true){
                document.getElementById("comunicacionSiat").innerHTML = data.RespuestaComunicacion.mensajesList.descripcion
                document.getElementById("comunicacionSiat").className = "badge bg-success" 
            }else{
                document.getElementById("comunicacionSiat").innerHTML = "Desconectado"
                document.getElementById("comunicacionSiat").className = "badge bg-secondary"
            }
        }
    })
}

verificarComunicacion()

function cufd(){
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/cufd",
        cache: false,
        processData: false,
        dataType: "json",
        success: function(data){
            if(data.transaccion!=false){
                document.getElementById("cufd").innerHTML = "CUFD Vigente "+ data.fechaVigencia.substring(0,16);
            }else{
                document.getElementById("cufd").innerHTML = "No existe cufd vigente";
            }
        }
    })
}

cufd()

function emitirFactura(){
    let id_cliente = document.getElementById("id_cliente").value
    let numeroFactura = document.getElementById("numeroFactura").value
    let cuf = "";
    let cufd = document.getElementById("cufdvalor").value
    var tzoffset = (new Date()).getTimezoneOffset()*60000
    let fechaFactura = (new Date(Date.now()-tzoffset)).toISOString().slice(0,-1)
    let razon_social = document.getElementById("razon_social").value
    let tipo_documento = document.getElementById("tipo_documento").value 
    let documentoid = document.getElementById("documentoid").value
    let complementoid = document.getElementById("complementoid").value
    let total = document.getElementById("total").value
    let descAdicional = document.getElementById("descAdicional").value
    let leyenda = "Ley No. 453: Tienes derecho a un trato equitativo sin discriminacion en la oferta de servicios."
    let usuario = document.getElementById("snick").value

    var factura = []
    factura.push({
        cabecera: {
            nitEmisor: "13492810016",
            razonSocialEmisor: "HUAYCHO CUIZA MANUEL ALFREDO",
            municipio: "Santa Cruz de la Sierra",
            telefono: "61145448",
            numeroFactura: numeroFactura,
            cuf: cuf,
            cufd: cufd,
            codigoSucursal: 0,
            direccion: "Los Pitnoes ",
            codigoPuntoVenta: 0,
            fechaEmision: fechaFactura,
            nombreRazonSocial: razon_social,
            codigoTipoDocumentoIdentidad: tipo_documento,
            numeroDocumento: documentoid,
            complemento: complementoid,
            codigoCliente: documentoid+'1',
            codigoMetodoPago: 1,
            numeroTarjeta: null,
            montoTotal: total,
            montoTotalSujetoIva: total,
            codigoMoneda: 1,
            tipoCambio: 1,
            montoTotalMoneda: total,
            montoGiftCard: null,
            descuentoAdicional: descAdicional,
            codigoExcepcion: 0,
            cafc: null,
            leyenda: leyenda,
            usuario: usuario,
            codigoDocumentoSector: 1
        }   
    })
    arrayProductos.forEach(function(prod){
        factura.push({detalle: prod})
    })
    
    var datos = {factura}
    //console.log(factura)
    $.ajax({
        type: "POST",
        url: base_url + "Pedidos/generaFactura",
        data: {
            id_cliente: id_cliente,
            factura: datos
        },
        dataType: "json",
        success: function(data){
            console.log(data)
            if(data == "VALIDADA")
            {
                Swal.fire({
                    icon: 'success',
                    title: 'FACTURA'+data,
                    text: ''
                  })
                  window.setTimeout(function(){
                    window.location.href = base_url +"Pedidos";
                  }, 2000);
            }
        }
    })

    
    
}