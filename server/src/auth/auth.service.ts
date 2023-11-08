import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signIn(email: string, password: string) {
    return "Sgined In";
  }
  signUp(email: string, password: string) {
    return "Sgined Up";
  }
  signOut() {
    return "Logged Out";
  }
}
