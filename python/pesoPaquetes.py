peso = int(input("Ingrese el peso del paquete: "))

match peso:
    
    case p if peso > 0 <= 5:
        print ("Es un paquete pequeño.")
    case p if 5 < p <= 20:
        print ("Es un  paquete mediano.")
    case p if p > 20:
        print ("Es un paquete grande.")
    case _:
        print ("Peso ingresado no válido.")
    