import { api } from "@/services/api";
import { Button } from "../components/button";
import styles from "./styles.module.scss";
import { getCookieServer } from "@/lib/cookieServer";
import { redirect } from "next/navigation";

export default function Category() {
  const handleRegisterCategory = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");

    if (!name) return;
    await api
      .post(
        "/category",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookieServer()}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });

    redirect("/dashboard");
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
