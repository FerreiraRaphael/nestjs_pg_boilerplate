import { Controller, Get } from '@nestjs/common';

import { PhotoService } from './photo.service';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  search() {
    return this.photoService.findAll();
  }

  @Get(':id')
  find() {
    return this.photoService.findAll;
  }
}
