import client from "../../prisma";

class ListOrderService {
  async execute() {
    const allOrders = await client.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return allOrders;
  }
}

export { ListOrderService };
