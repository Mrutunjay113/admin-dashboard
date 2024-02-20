import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

export default function page() {
  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className={styles.input}
            placeholder="title"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            className={styles.input}
            placeholder="25"
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            className={styles.input}
            placeholder="230"
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            className={styles.input}
            placeholder="red"
          />
          <label>Size</label>
          <textarea
            name="size"
            id="size"
            rows="2"
            className={styles.textarea}
            placeholder="size"
            required
          ></textarea>
          <label>Cat</label>
          <select name="cat" id="cat" className={styles.select} required>
            <option value="general">Choose a Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Shoes">Shoes</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Kitchen">Kitchen</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="4"
            className={styles.textarea}
            placeholder="Description"
            required
          ></textarea>

          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </main>
  );
}
