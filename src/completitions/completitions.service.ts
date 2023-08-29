import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CreateCompletitionDto } from './dto/create-completition.dto';
import { UpdateCompletitionDto } from './dto/update-completition.dto';

@Injectable()
export class CompletitionsService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async completition(input: string) {
    const completitions = await this.openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'generate a JUnit test case for the received source code',
        },
        {
          role: 'assistant',
          content: 'this is a sample generated from the provided input',
        },
        {
          role: 'user',
          content: input,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    return { text: completitions };
  }

  create(createCompletitionDto: CreateCompletitionDto) {
    return 'This action adds a new completition';
  }

  findAll() {
    return `This action returns all completitions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} completition`;
  }

  update(id: number, updateCompletitionDto: UpdateCompletitionDto) {
    return `This action updates a #${id} completition`;
  }

  remove(id: number) {
    return `This action removes a #${id} completition`;
  }
}
