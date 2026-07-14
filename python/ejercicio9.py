#Funciones definidas por el usuario

#Funcion Agregar Productos

productos = []

def agregar_productos():
    print("\nProducto a agregar\n")
    producto = input ("Ingrese el nombre del producto: \n").strip().capitalize()
    if producto == "" or producto.isdigit():
        print ("Debe ingresar una cadena de caracteres!!!\n")
        #continue    #validacion
    precio = input ("Ingrese el precio del producto: $ \n") .strip().capitalize()
        
    if not precio.isdigit() or int(precio) <= 0:
        print ("El precio ingresado debe ser un número entero mayor a 0, vuelva a intentarlo.\n")
        #continue
    precioAgregado = int(precio)
    productos.append([producto, precioAgregado])
    print (f"\n Producto '{producto}' agregado exitosamente.\n")

#Funcion Consultar Productos

def consultar_productos():
    if productos:
        print("Listado de Productos:")
                
        for i, producto in enumerate (productos, start=1):
                
            print(f"\n{i}. {producto}\n")
        
    else: 
        print("La lista de productos se encuentra vacía en estos momentos.\n")
            
#Función Eliminar Productos

def eliminar_productos():
    global productos
    if productos:
        producto = input("Ingresá el nombre del producto que querés eliminar: ").strip().capitalize()
        
        # Buscar el producto por nombre dentro de la lista de listas
        for item in productos:
            if item[0] == producto:
                productos.remove(item)
                print(f"Producto '{producto}' eliminado con éxito.\n")
                return  # Salimos de la función una vez eliminado
        
        print(f"El producto '{producto}' no se encuentra en el listado.\n")
    else:
        print("La lista de productos se encuentra vacía. No hay nada para borrar...")
        
#Función Mostrar Menú

def mostrar_menu():
    while True:
        print("===================================================")
        print ("**** Ingreso de Productos, Categorías y Precios****")
        print("===================================================\n")
        print ("-1- Agregar un producto ")
        print ("-2- Consultar productos")
        print ("-3- Eliminar un producto")
        print ("-4- Salir ")
    
        opcion = input("\nElija una opción del menú: \n")
        #validación
        if opcion == "1":
            agregar_productos()
        elif opcion == "2":
            consultar_productos()
        elif opcion == "3":
            eliminar_productos()
        elif opcion == "4":
            print("Gracias por usar el servicio!!! Hasta Luego...\n")
            break
        else:
            print ("\nOpción Inválida!!! Debe ingresar una opción del 1 al 4. Intente nuevamente...")
            
mostrar_menu()
    