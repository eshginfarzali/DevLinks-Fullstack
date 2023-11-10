import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class User extends Document {
  


  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  image: string;


  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
