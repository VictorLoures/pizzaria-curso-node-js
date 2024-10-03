import client from "../../prisma";

interface RemoveItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveItemRequest) {
    const item = await client.item.delete({
      where: {
        id: item_id,
      },
    });
    return item;
  }
}

export { RemoveItemService };
