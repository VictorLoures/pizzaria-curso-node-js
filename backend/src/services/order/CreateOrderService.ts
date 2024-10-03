import client from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const order = await client.order.create({
      data: {
        tabel: table,
        name: name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
