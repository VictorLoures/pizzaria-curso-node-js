"use client";
import { UploadCloud } from "lucide-react";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/dashboard/components/button";

export function Form() {
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

  return (
    <main className={styles.container}>
      <h1>Novo produto</h1>
      <form action="" className={styles.form}>
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
          <option key={1} value={1}>
            Pizzas
          </option>
          <option key={2} value={2}>
            Pizzas
          </option>
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
