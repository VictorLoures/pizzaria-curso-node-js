import client from "../../prisma/";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email inválido!");
    }

    const emailJaCadastrado = await client.user.findFirst({
      where: { email: email },
    });
    if (emailJaCadastrado) {
      throw new Error("Email já cadastrado!");
    }

    const user = await client.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
