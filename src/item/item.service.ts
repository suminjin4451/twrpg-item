import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Items } from './item';

@Injectable()
export class ItemService {
  private readonly logger = new Logger(ItemService.name);

  async findCraft(
    itemNameArray: Array<string>,
    itemArray: Array<[string, number, string]>,
  ) {
    for (let itemName of itemNameArray) {
      if (Items[itemName] == undefined) {
        this.logger.log(Items[itemName]);
        throw new NotFoundException();
      }
      for (let item of Items[itemName][1]) {
        console.log(item);
        if (Items[item][0] == 'craftable') {
          this.logger.log('Item was ' + item);
          await this.findCraft([item], itemArray);
        } else if (Items[item][0] == 'gear') {
          this.logger.log('Pushed ' + item);
          itemArray.push([item, 1, Items[item][1]]);
        } else {
          let temp = itemArray.findIndex((element) => element[0] == item);
          if (temp != -1) {
            itemArray[temp][1] = itemArray[temp][1] + 1;
          } else {
            itemArray.push([item, 1, Items[item][1]]);
          }

          this.logger.log('pushed ' + item);
        }
      }
    }
    return itemArray;
  }
}
