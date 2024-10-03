import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreatecategoryController } from "./controllers/category/CreatecategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();

// Rotas user
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//Rotas category
router.post(
  "/category",
  isAuthenticated,
  new CreatecategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// Rotas product
router.post("/product", isAuthenticated, new CreateProductController().handle);

export { router };
