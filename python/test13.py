import sqlite3

conexion = sqlite3.connect("productos.db")

cursor = conexion.cursor()
cursor.execute('''
               CREATE TABLE IF NOT EXISTS productos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre tTEXT NOT NULL,
                precio REAL NOT NULL                
                )
               
                
               ''')

cursor.execute('''
               INSERT INTO productos (nombre, precio) VALUES (?, ?)''', ("Cereza", 2500))

print("El producto se creó exitosamente.")

conexion.commit()
conexion.close()
