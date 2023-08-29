import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompletitionsService } from './completitions.service';
import { CreateCompletitionDto } from './dto/create-completition.dto';
import { UpdateCompletitionDto } from './dto/update-completition.dto';

@Controller('completitions')
export class CompletitionsController {
  constructor(private readonly completitionsService: CompletitionsService) {}

  @Post('/generate')
  async completition(@Body('input') input: string) {
    return await this.completitionsService.completition(input.toString());
  }

  @Post()
  create(@Body() createCompletitionDto: CreateCompletitionDto) {
    return this.completitionsService.create(createCompletitionDto);
  }

  @Get()
  findAll() {
    return this.completitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.completitionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompletitionDto: UpdateCompletitionDto,
  ) {
    return this.completitionsService.update(+id, updateCompletitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.completitionsService.remove(+id);
  }
}
