import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
export default function page() {
  return (
    <main className={styles.container}>
      <form className={styles.form} action="">
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          name="title"
          required
        />
        <select name="cat" id="cat" className={styles.select} required>
          <option value="general">Choose a Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Phones">Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Kitchen">Kitchen</option>
        </select>
        <input
          type="number"
          className={styles.input}
          placeholder="Price"
          name="price"
          required
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Stock"
          name="stock"
          required
        />
        <input
          type="text"
          placeholder="color"
          className={styles.input}
          name="color"
          required
        />
        <input
          type="text"
          placeholder="size"
          className={styles.input}
          name="size"
          required
        />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          className={styles.textarea}
          placeholder="Description"
          required
        ></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
