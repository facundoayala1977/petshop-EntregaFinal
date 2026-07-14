# Ejercicio 5
print ("*******************************")
print ("Calculos de 6 meses de ingresos")
print ("*******************************")

ingresoMensual = 0

print ("Los ingresos mensuales deben ser números positivos. Ingresa 0 para terminar.")

sumaIngreso = 0

while True:
    ingresoMensual = int ( input("Coloca el ingreso mensual $: "))
    
    if ingresoMensual < 0:
        print ("El ingreso mensual colocado es un número negativo, no se toma en cuenta. Ingrese otro monto por favor. ")
        continue
    
    if ingresoMensual == 0:
        break
    
    sumaIngreso += ingresoMensual
    
print (f"La suma de los ingresos de los 6 meses es $: {sumaIngreso}")