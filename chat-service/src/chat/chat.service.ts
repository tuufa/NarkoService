import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto } from './send-message.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(dto: SendMessageDto) {
    return this.prisma.message.create({ data: dto });
  }

  async getMessages(room?: string) {
    return this.prisma.message.findMany(room ? { where: { room } } : undefined);
  }
}
