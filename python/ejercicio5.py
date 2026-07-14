#Ejercicio 5 

mes = 1  # Contador
ingresoMes = 0
sumaMeses = 0  # Acumulador

print("Vamos a calcular los ingresos totales durante 6 meses de una persona.")

while mes <= 6:
    ingresoMes = input(f"Ingrese el valor del mes {mes}: $ ").strip()
    if not ingresoMes.isdigit():
        print("\tError!! Los ingresos deben ser números positivos. Vuelva a ingresar el valor mensual.")
        continue  # Repite la solicitud del ingreso para el mismo mes
    else:
        ingresoMes = int(ingresoMes)
        sumaMeses += ingresoMes
        mes += 1  # Incrementar el contador solo si el ingreso es válido

print(f"El ingreso acumulado durante 6 meses asciende a: $ {sumaMeses}")