// src/user/user.service.ts

import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { User } from './user.model';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository, 
  private  prisma:PrismaService
) {}

  async createUser(data: User){
    try{
        const emailExists = await this.prisma.user.findUnique({
            where:{
                email: data.email
            }
        })
        if(emailExists) return { statusCode:0 , message:'Email already exits' }
        const saltRounds = 10;

        const hashPassword = await bcrypt.hash(data.password, saltRounds)


    return this.userRepository.createUser({...data, password:hashPassword});
    }
    catch(err){
        console.log('error Occured', err)
        return err
    }
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  async updateUser(id: number, data: User): Promise<User | null> {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: number): Promise<User | null> {
    return this.userRepository.deleteUser(id);
  }
}
