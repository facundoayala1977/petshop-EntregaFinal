# Ejercicio clase 4
nombre = input ("Ingrese su nombre: ")
if nombre =="":
    print ("Debe ingresar un nombre!!!")
else:
    print (f"Nombre: {nombre} ".title().strip())
            
apellido = input ("Ingrese su apellido: ")
if apellido =="":
    print ("Debe ingresar un apellido!!!")
else:
    print (f"Apellido: {apellido} ".title().strip())
 
edad = input ("Ingrese su edad: ").strip()
if not edad.isdigit():
    print ("Ingrese valores numéricos!!!")
    edad_numero = int (edad)
else:
    print (f"Su edad es {edad}")
    
match edad:
    case e if e > 15:
        print ("Eres un niño.")
    case e if e > 18:
        print ("Eres un adolescente.")
    case _:
        print ("Eres un adulto")
    
email = input ("Ingrese su correo electrónico: ").strip()
if email == "":
    print("Correo: Error. El correo no puede estar vacío.")
elif email.find(" ") != -1:
    print("Correo: Error. El correo no puede contener espacios en blanco.")
elif email.find("@") != email.rfind("@"):
    print("Correo: Error. El correo contiene multiples arrobas '@'.")
else:
    print(f"Su correo electrónico es: {email}")