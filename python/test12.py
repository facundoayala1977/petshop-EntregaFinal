archivo = open("C:/Users/Faku/OneDrive/Escritorio/Talento Lab/clientes.txt", "w", encoding="utf-8")

try:
    nombre = input("Ingrese el nombre del cliente: ")
    apellido = input("Ingrese el apellido del cliente: ")
    email = input ("Ingrese el correo electrónico del cliente: ")
    
    print ("=== Registro de Clientes ===")
    print("\nDatos del Cliente:\n")
    print(f"Nombre: {nombre} \n")
    print(f"Apellido: {apellido} \n")
    print(f"Email: {email} \n")

except TypeError:
    print("[ERROR] Debes ingresar caracteres válidos.")
    print("Intenta nuevamente....")

archivo.close