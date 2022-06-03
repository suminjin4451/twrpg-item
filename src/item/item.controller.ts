import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}
  @Post()
  async printItem(@Body() post) {
    let itemArray: Array<[string, number, string]> = [];
    console.log(post);
    return this.itemService.findCraft(post.item, itemArray, post.loadItem);
  }

  @Get()
  async getItem() {
    return this.itemService.getItem();
  }
  @Get('/validation')
  async getValidation() {
    await this.itemService.itemValidation();
  }
}
