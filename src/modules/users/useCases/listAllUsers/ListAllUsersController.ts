import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.json({ allUsers });
    } catch (error) {
      const errorMessage = error.message;

      return response.status(400).json({ errorMessage });
    }
  }
}

export { ListAllUsersController };
