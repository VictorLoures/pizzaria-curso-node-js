import client from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    console.log(name);
    if (!name) {
      throw new Error("Nome inválido!");
    }
    console.log(name);
    const category = await client.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    // console.log(category);
    return category;
  }
}

export { CreateCategoryService };
