import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";

export function ItemList({ productos }) {

  return (
    <div className={styles["productos-container"]}>

      {productos.map((producto) => (

        <Item
          key={producto.id}
          producto={producto}
        />

      ))}

    </div>
  );
}