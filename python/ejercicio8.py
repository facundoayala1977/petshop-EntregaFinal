# Ejercicio 8
# Diccionario llamado productos con clave nombre y valor precio
# Simple pero creo que cumple con lo pedido

producto = []

print ("\nIngreso del nombre del producto y su valor.")

while True:
    nombre = input ("\nIngrese el nombre del producto: ").capitalize()
    if nombre == "":
        print ("\n ¡¡¡¡El nombre no puede estar vacío, intente nuevamente...!!!")
        continue
    
    valor = input ("\nIngrese el valor del producto: $ ")
    if not valor.isdigit() or int(valor) <=0:
            print("\n¡¡¡El precio debe ser un entero positivo!!!")
            continue
       
    valor_ingresado = int(valor)
    
    productos = {
        "Nombre" : nombre,
        "Valor" : valor_ingresado,
    }
    
    producto.append(productos)
    
    print (f"Hasta el momento se cuenta con los siguientes productos y precios: \n {producto} ")
      
    
    continuar = input ("\nDesea finalizar la carga productos y valores: 'si' para continuar / 'Enter para salir': ")
    if continuar.lower() == "si":
        continue
    elif continuar.lower() == "":
        break

print("\nGracias por usar el servicio!!!")

    
print ("\n*** Productos y Valores ***")

for productos in producto:
    print(f"Producto: \t{productos ['Nombre']} || Precio: $ {productos ['Valor']}")
