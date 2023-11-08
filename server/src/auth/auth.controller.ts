import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/signin.dto";
import { SignUpDto } from "./dtos/signup.dto";

@Controller("auth")
export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Post("signin")
  async signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post("signout")
  async signOut() {
    return this.authService.signOut();
  }

  @Post("signup")
  async register(@Body() body: SignUpDto) {
    return this.authService.signIn(body.email, body.password);
  }
}
