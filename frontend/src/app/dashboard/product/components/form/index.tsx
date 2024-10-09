"use client";
import { UploadCloud } from "lucide-react";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/dashboard/components/button";
import { api } from "@/services/api";
import { headers } from "next/headers";
import { getCookieClient } from "@/lib/cookieClient";

interface CategoriesProps {
  id: string;
  name: string;
}

interface Props {
  categories: CategoriesProps[];
}

export function Form({ categories }: Props) {
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type !== "image/jpeg" && image.type !== "image/png") return;
      setImage(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  };

  async function handleRegisterProduct(formData: FormData) {
    const categoryIndex = formData.get("category");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    if (!categoryIndex || !name || !price || !description || !image) return;

    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category_id", categories[Number(categoryIndex)].id);
    data.append("file", image);

    await api
      .post("/product", data, {
        headers: {
          Authorization: `Bearer ${getCookieClient()}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className={styles.container}>
      <h1>Novo produto</h1>
      <form action={handleRegisterProduct} className={styles.form}>
        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={30} color="#FFF" />
          </span>

          <input
            type="file"
            accept="image/png, image/jpeg"
            required
            onChange={handleFile}
          />

          {previewImage && (
            <Image
              src={previewImage}
              alt="preview"
              className={styles.preview}
              fill={true}
              quality={100}
              priority={true}
            />
          )}
        </label>

        <select name="category">
          {categories.map((it, index) => (
            <option key={it.id} value={index}>
              {it.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Digite o nome do produto..."
          required
          className={styles.input}
        />
        <input
          type="text"
          name="price"
          placeholder="Digite o preço do produto..."
          required
          className={styles.input}
        />

        <textarea
          name="description"
          placeholder="Digite a descrição do produto..."
          required
          className={styles.input}
        ></textarea>

        <Button name="Cadastrar" />
      </form>
    </main>
  );
}
