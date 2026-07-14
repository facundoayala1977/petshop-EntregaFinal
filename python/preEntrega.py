#PreEntrega: Menú de Ingreso de Productos, Categoría y Precio, Visualización, Buscar, Eliminar y Salir.

productos = []

while True:
    print("===================================================")
    print ("**** Ingreso de Productos, Categorías y Precios****")
    print("===================================================\n")
    print ("-1- Agregar un producto ")
    print ("-2- Visualizar el stock")
    print ("-3- Buscar un producto")
    print ("-4- Eliminar un producto")
    print ("-5- Salir ")
    
    opcion = input("\nElija una opción del menú: \n")
    
    #Agregar productos a un stock
    
    if opcion == "1":
        print("\nProducto a agregar\n")
        nombre = input ("Ingrese el nombre del producto: \n").strip().capitalize()
        if nombre =="" or nombre.isdigit():
            print ("Debe ingresar una cadena de caracteres!!!\n")
            continue    #validacion
        categoria = input ("Ingrese la categoría del producto: \n") .strip().capitalize()
        if categoria =="" or categoria.isdigit():
            print ("Debe ingresar una cadena de caracteres!!!\n")
            continue    #validacion
        precio = input ("Ingrese el precio del producto: $ \n") .strip().capitalize()
        
        if not precio.isdigit() or int(precio) <= 0:
            print ("El precio ingresado debe ser un número entero mayor a 0, vuelva a intentarlo.\n")
            continue
        precioAgregado = int(precio)
        productos.append([nombre, categoria, precioAgregado])
        print (f"\n Producto '{nombre}' agregado exitosamente.\n")
        
    #Ver los productos que se encuentran en stock, si fueron cargados
    
    elif opcion == "2":
        if len(productos) <= 0:
            print("\nNO EXISTEN PRODUCTOS EN EL INVENTARIO.\n")
        else:
            for i in range(len(productos)):
                print(f"\n\t{i + 1}. Nombre: {productos[i][0]} | Categoría: {productos[i][1]} | Precio: $ {productos[i][2]}\n")        
    
    #Buscar productos en stock, si los hay
    
    elif opcion == "3":
        print("Buscar Producto")
        
        buscar = input(f"Ingrese el nombre del producto a buscar: \n").strip().capitalize()
        
        busqueda = []
        for listado_productos in productos:
            if buscar in listado_productos[0]:
                busqueda.append(listado_productos)
                
        print("\nResultados de la Búsqueda:\n")
        
        if busqueda:
            for i in range(len(busqueda)):
                print(f"\t{i + 1}. Nombre: {busqueda[i][0]} | Categoría: {busqueda[i][1]} | Precio: {busqueda[i][2]}\n")
        else: 
            print("El producto no se encuentra en stock en estos momentos.\n")
    
    #Eliminar productos, si existieran
    
    elif opcion == "4":
        for i in range(len(productos)):
                print(f"\n\t{i + 1}. Nombre: {productos[i][0]} | Categoría: {productos[i][1]} | Precio: $ {productos[i][2]}\n")        
        eliminar = input ("Ingrese el número de la posición del producto a eliminar: \n").strip()
        if not eliminar.isdigit():
            print("Ingrese un número de posición válido...\n")
            continue
        
        eliminar = int(eliminar)
        
        if eliminar < 1 or eliminar > len(productos):
            print("Número de posición del producto inexistente. Reintente.\n")
            continue
        
        eliminado = productos.pop(eliminar - 1)
        print(f"El producto '{eliminado[0]}' fue eliminado del stock.\n")
        
    #Salir del programa
        
    elif opcion == "5":
        print ("Gracias por utilizar el servicio.")
        break
    else:
        print ("La opción elegida no es válida.")
    
    