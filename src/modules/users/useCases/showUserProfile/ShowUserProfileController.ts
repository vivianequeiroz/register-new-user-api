import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const userProfile = this.showUserProfileUseCase.execute({ user_id });

      return response.json({ userProfile });
    } catch (error) {
      const errorMessage = error.message;

      return response.status(404).json({ errorMessage });
    }
  }
}

export { ShowUserProfileController };
