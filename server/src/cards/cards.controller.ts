import { Body, Controller, Logger, Post, Put, Param } from '@nestjs/common'; // Import Param decorator
import { CardEntity } from '../entities/Card';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  private readonly logger = new Logger(CardsController.name);

  constructor(private cardsService: CardsService) {}

  @Post()
  addCard(@Body() card: { sectionId: number; title: string }): Promise<CardEntity> {
    this.logger.log('POST /cards');
    return this.cardsService.create(card);
  }

  @Put(':id/move')
  moveCard(@Body() moveData: { sectionId: number }, @Param('id') cardId: number): Promise<CardEntity> {
    this.logger.log(`PUT /cards/${cardId}/move`);

    return this.cardsService.move(cardId, moveData.sectionId);
  }
}

