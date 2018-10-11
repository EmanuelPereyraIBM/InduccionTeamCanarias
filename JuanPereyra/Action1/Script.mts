'Clickea la X del anuncio al abrir por primera vez
'Browser("Tienda de Vinos Online").Page("Home").WebElement("WE-X-esns_box_close").Click

'Setea el browser y la direccion que necesita abrir
abrirDesdeExplorer()
'Clickea el producto, lo añade al carrito y clickea pagar 
comprarDonCristobal1942()

'En la ventana del carrito clickea el boton pagar
If carritoPage.WebElement("LBL-Testigo-Carrito de compra - Checkout").Exist Then
	carritoPage.WebButton("BTN-Pagar").Click
End If


'Seleeciona comprar como invitado
procesoDeCompra1Inicio()
'LLena los datos del formulario de registro de la pagin
procesoDeCompra2InformacionDeClienteYFacturacion()
'LLena los datos del formulario de envios
procesoDeCompra3MetodoDeEnvio()
'Elige la forma de pago de transferencia bancaria
procesoDeCompra4InformacionDePago()
'Clickea el boton para confirmar el pedido
procesoDeCompra5ResumenDePedido()
'Valida si el proceso de compra fue realizado correctamente
validarCompra()
