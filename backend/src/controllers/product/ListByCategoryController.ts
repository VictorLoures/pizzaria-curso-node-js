import { Request, Response } from "express";
import { ListBycategoryService } from "../../services/product/ListBycategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const list = new ListBycategoryService();
    const products = await list.execute({ category_id });
    res.json(products);
  }
}

export { ListByCategoryController };
