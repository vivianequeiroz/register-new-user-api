import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      const newUser = this.createUserUseCase.execute({ name, email });

      return response.status(201).json({ newUser }).send();
    } catch (error) {
      const errorMessage = error.message;

      return response.status(400).json({ errorMessage });
    }
  }
}

export { CreateUserController };
