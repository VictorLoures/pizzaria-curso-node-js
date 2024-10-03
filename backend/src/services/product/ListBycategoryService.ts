import client from "../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListBycategoryService {
  async execute({ category_id }: ProductRequest) {
    const findBYCategory = await client.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findBYCategory;
  }
}

export { ListBycategoryService };
