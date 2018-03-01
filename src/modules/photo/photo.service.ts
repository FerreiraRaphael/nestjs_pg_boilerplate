import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Photo } from './photo.entity';

@Component()
export class PhotoService implements Service<Photo> {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findById(id: string): Promise<Photo> {
    return await this.photoRepository.findOneById(id);
  }

  async create() {
    return null;
  }

  async delete() {
    return null;
  }

  async update() {
    return null;
  }
}
