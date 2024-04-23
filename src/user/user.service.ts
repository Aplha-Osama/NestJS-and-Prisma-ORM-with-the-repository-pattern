// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: User): Promise<User> {
    return this.userRepository.createUser(data);
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
