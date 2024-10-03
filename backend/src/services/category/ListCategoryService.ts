import client from "../../prisma";

class ListCategoryService {
  async execute() {
    const categories = await client.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  }
}

export { ListCategoryService };
