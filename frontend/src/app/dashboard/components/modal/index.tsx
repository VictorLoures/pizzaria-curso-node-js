"use client";
import { use } from "react";
import styles from "./styles.module.css";
import { X } from "lucide-react";
import { OrderContext } from "@/providers/order";
import { calculateTotalOrder } from "@/lib/helper";

export function ModalOrder() {
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  async function handleFinishOrder() {
    await finishOrder(order[0].oreder.id);
  }

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2 className={styles.h2}>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>{order[0].oreder.tabel}</b>
          </span>

          {order.map((it) => (
            <section className={styles.item} key={it.id}>
              <span>
                Qtd: {it.amount} - <b>{it.product.name}</b> - R${" "}
                {parseFloat(it.product.price) * it.amount}
              </span>
              <span className={styles.description}>
                {it.product.description}
              </span>
            </section>
          ))}

          <h3 className={styles.total}>
            Total do pedido: R$ {calculateTotalOrder(order)}
          </h3>

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
