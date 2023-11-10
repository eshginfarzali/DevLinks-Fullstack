import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
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
    try {
      await this.authService.signIn(body.email, body.password);
      return { message: "Signed In" };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { message: "User not found or incorrect password", status: 404 };
      }
      return { message: "An error occurred", status: 500 };
    }
  }
  


  @Post('signup')
  async register(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @Get("user/:id") 
  async getUserById(@Param("id") id: string) {
    try {
      const user = this.authService.getUserById(id);
      return { user };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { message: "User not found", status: 404 };
      }
      return { message: "An error occurred", status: 500 };
    }
  }
@Get("users")
async getAllUsers() {
  const users = await this.authService.getAllUsers();
  return { users };
}


  @Post("signout")
  async signOut() {
    return this.authService.signOut();
  }
}
