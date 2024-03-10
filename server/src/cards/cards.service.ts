import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from '../entities/Card';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardsRepository: Repository<CardEntity>,
  ) {}

  async create({ sectionId, title }: { sectionId: number; title: string }): Promise<CardEntity> {
    let card = new CardEntity();
    card.title = title;
    card.section_id = sectionId;
    return this.cardsRepository.save(card);
  }

  async move(cardId: number, newSectionId: number): Promise<CardEntity> {
    const card = await this.cardsRepository.findOne(cardId);
    if (!card) {
      throw new NotFoundException(`Card with id ${cardId} not found`);
    }
    card.section_id = newSectionId;
    return this.cardsRepository.save(card);
  }
}
