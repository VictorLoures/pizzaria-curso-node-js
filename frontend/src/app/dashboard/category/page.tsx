import { Button } from "../components/button";
import styles from "./styles.module.scss";

export default function Category() {
  const handleRegisterCategory = async () => {
    "use server";
  };

  return (
    <main className={styles.container}>
      <h1>Nova categoria</h1>

      <form action={handleRegisterCategory} className={styles.form}>
        <input
          type="text"
          name="name"
          required
          placeholder="Nome da categoria"
          className={styles.input}
        />
        <Button name="Cadastrar" />
      </form>
    </main>
  );
}
