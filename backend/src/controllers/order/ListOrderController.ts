import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrderService = new ListOrderService();
    const allOrders = await listOrderService.execute();
    return res.json(allOrders);
  }
}

export { ListOrderController };
