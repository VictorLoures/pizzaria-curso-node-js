"use client";
import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";
import { OrderProps } from "@/lib/order.type";
import { ModalOrder } from "../modal";
import { use } from "react";
import { OrderContext } from "@/providers/order";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  orders: OrderProps[];
}

export function Orders({ orders }: Props) {
  const router = useRouter();
  const { isOpen, onRequestOpen } = use(OrderContext);

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados!");
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerheader}>
          <h1>Últimos pedidos</h1>
          <button onClick={handleRefresh}>
            <RefreshCw size={24} color="#3fffa3" />
          </button>
        </section>
        <section className={styles.listOrders}>
          {orders.length === 0 && (
            <span className={styles.emptyList}>
              Nenhum pedido aberto no momento...
            </span>
          )}
          {orders.map((it) => (
            <button
              key={it.id}
              className={styles.orderItem}
              onClick={() => handleDetailOrder(it.id)}
            >
              <div className={styles.tag}></div>
              <span>Mesa {it.tabel}</span>
            </button>
          ))}
        </section>
      </main>

      {isOpen && <ModalOrder />}
    </>
  );
}
