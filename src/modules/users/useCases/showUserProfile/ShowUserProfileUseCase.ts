import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userProfile = this.usersRepository.findById(user_id);
    const nonExistingUser = userProfile === undefined || userProfile === null;

    if (nonExistingUser) {
      throw new Error("Sorry, user does not exist.");
    }

    return userProfile;
  }
}

export { ShowUserProfileUseCase };
