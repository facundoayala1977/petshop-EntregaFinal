# Ejercicio de Clase 4
nombre = input ("Ingrese su nombre: ")
apellido = input ("Ingrese su apellido: ")
edad = int(input ("Ingrese su edad: "))
email = input ("Ingrese su correo electrónico: ")

if nombre and apellido and email and edad > 0:
    print ("========================================")
    print ("                 CLIENTE                ")
    print ("========================================")
    print ( "Nombre:\t\t\t " , nombre.title())
    print ("Apellido:\t\t " , apellido.title())
    print ("Edad:\t\t\t ", str (edad) + " años")
    print ("Correo electrónico:\t ", email.strip())
    print ("----------------------------------------")
    print ("               Rango Etario             ")
    print ("----------------------------------------")
    
    match edad:
        case e if e < 15:
            print ("\t\tEres un Niño")
        case e if e < 18:
            print ("\tEres un Adolescente")
        case _:
            print ("\t\tEres un Adulto")
    print ("========================================")
else:
    print ("ERROR!")