import { api } from "@/services/api";
import { Orders } from "./components/orders";
import { getCookieServer } from "@/lib/cookieServer";
import { OrderProps } from "@/lib/order.type";

async function getOrders(): Promise<OrderProps[] | []> {
  const response: any = await api
    .get("/orders", {
      headers: {
        Authorization: `Bearer ${getCookieServer()}`,
      },
    })
    .catch(() => {
      return [];
    });
  return response.data || [];
}

export default async function Dashboard() {
  const orders = await getOrders();
  return (
    <>
      <Orders orders={orders} />
    </>
  );
}
