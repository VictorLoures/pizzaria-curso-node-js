import { OrderItemProps } from "@/providers/order";

export function calculateTotalOrder(orders: OrderItemProps[]) {
  return orders.reduce((total, it) => {
    const itemTotal = parseFloat(it.product.price) * it.amount;
    return total + itemTotal;
  }, 0);
}
