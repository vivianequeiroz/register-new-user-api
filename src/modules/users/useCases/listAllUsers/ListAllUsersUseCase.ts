import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestingUser = this.usersRepository.findById(user_id);
    const nonExistingRequestingUser =
      requestingUser === undefined || requestingUser === null;

    if (nonExistingRequestingUser) {
      throw new Error(
        "Sorry, requesting user does not exist. Operation can not be completed."
      );
    }

    const isRequestingUserAdmin = requestingUser.admin === true;
    if (!isRequestingUserAdmin) {
      throw new Error("Only admin users can access this operation.");
    }

    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
