import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/entities/user.entity';
import { SignUpDto } from "./dtos/signup.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new NotFoundException('User not found or incorrect password');
    }

    const token = this.generateToken(user);
    return token;
  }

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const { email, password, firstName, lastName, image } = signUpDto;

    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new this.userModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      image,
    });

    await newUser.save();

    const token = this.generateToken(newUser);
    return token;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  private generateToken(user: User): string {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.sign(payload);
  }

  // Add methods to handle JWT cookie storage and verification


  signOut(): string {
    // Implement your sign-out logic here
    return "Logged Out";
  }
}
