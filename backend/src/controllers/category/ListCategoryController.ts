import { json, Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategory = await new ListCategoryService().execute();
    return res.json(listCategory);
  }
}

export { ListCategoryController };
