# Lista de números 
numeros = [10, 20, 30, 40, 50] 
# Inicializamos un índice para recorrer la lista 
indice = 0 
# Usamos un bucle while para iterar sobre la lista 
# len(numeros) = cantidad de elementos en la lista 
while indice < len(numeros):  
# Mostramos el valor actual 
    print(f"El valor en el índice {indice} es: {numeros[indice]}")  
    # Incrementamos el índice para pasar al siguiente elemento 
    indice += 1  
print("Fin del bucle.")