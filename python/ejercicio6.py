# Ejercicio 6 

#Creamos lista de clientes
clientes = ["panasonic", "sony", "philips", " ", "enova", "x-view", "blument", "motorola", " "]
nroCliente = 1

for cliente in clientes:
    if cliente == " ":
        print("El nombre del cliente no puede estar vacío. Dato no válido")
        continue
    else:
         print (f"Cliente {nroCliente}: {cliente.capitalize()}")
    nroCliente += 1