import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const userAsAdmin = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json({ userAsAdmin }).send();
    } catch (error) {
      const errorMessage = error.message;

      return response.status(404).json({ errorMessage });
    }
  }
}

export { TurnUserAdminController };
