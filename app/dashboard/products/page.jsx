import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <main className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Descripton</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.delete} ${styles.button}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </main>
  );
}
