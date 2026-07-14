# Ejercicio 7

clientes = [] # Creamos una lista vacía para cargar los clientes

print ("Lista de Clientes | Ingrese 'fin' para terminar.")

# Insertamos la condición para empezar a cargar cada cliente

while True:
    nombre_cliente = input ("Ingrese el apellido y nombre del cliente: ")

# Comprobamos que el nombre sea válido
   
    if nombre_cliente == "":
        print("Debe ingresar un apellido y nombre válido. El campo no puede estar vacío, vuelva a ingresar.")

# Pasamos a minúsculas todos los caracteres si el usuario coloca Fin, FIN o fin
     
    elif nombre_cliente.lower() == "fin":
        break

# Si los datos ingresados son válidos lo agregamos a la lista clientes
    
    else:
        clientes.append(nombre_cliente)

# Ordenamos alfabéticamente los clientes ingresados
        
clientes.sort()

# Recorremos la lista con cada uno de los clientes agregados para mostrarlos alfabeticamente ordenados
        
for cliente in clientes:
    print(f"Cliente: {cliente.title()}")