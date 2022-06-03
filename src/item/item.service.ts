import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Items } from './item';

@Injectable()
export class ItemService {
  private readonly logger = new Logger(ItemService.name);

  async itemValidation() {
    const bossSequence = [
      '상점',
      '폴라 베어 자이언트',
      '드래곤 터틀',
      '킹크랩',
      '바다코끼리',
      '킹콩',
      '매머드',
      '데스나이트 로드',
      '라그나스',
      '촉수 지배자',
      '자이언트 골렘',
      '자이언트 골렘, 타천사',
      '이블라바 스폰',
      '피의 망령',
      '왈라키아 괴인',
      '하이드라',
      '블러드 체페슈',
      '마법사 왕',
      '잭 오 랜턴',
      '데드렉트',

      '문지기',
      '능천사',
      '타천사',
      '마나 에인션트',
      '마나 에인션트, 스피릿 비스트',
      '매드 클라운',
      '서리한, 일셰나',
      '거미제왕',
      '서리한, 일셰나, 거미제왕',
      '마왕',
      '커럽터 렉터스',
      '플레임 나이트메어',
      '터틀 로드',
      '스피릿 비스트',
      '해골왕 데스페리아',
      '주천사 사미엘',
      '좀비 로드',
      '본 드래곤',
      '에인션트 엔트',
      '암흑룡 이르베르트',
    ];

    for (let [key, value] of Object.entries(Items)) {
      if (value[0] == 'craftable') {
        for (let item of value[1]) {
          if (Items[item] == undefined) {
            this.logger.error(
              "There's a error on " + key + '! Missing Material is ' + item,
            );
          }
        }
      }

      if (value[0] == 'gear' || value[0] == 'material') {
        if (typeof value[1] == 'string') {
          if (bossSequence.indexOf(value[1]) == -1) {
            this.logger.error(
              "There's a error on " + key + '! Missing Boss is ' + value[1],
            );
          }
        }
      }
    }
  }
  async getItem() {
    this.logger.log('Returned');
    return Items;
  }

  async findCraft(
    itemNameArray: Array<string>,
    itemArray: Array<[string, number, string]>,
    loadItem: Array<String>,
  ) {
    const bossSequence = [
      '상점',
      '폴라 베어 자이언트',
      '드래곤 터틀',
      '킹크랩',
      '바다코끼리',
      '킹콩',
      '매머드',
      '데스나이트 로드',
      '라그나스',
      '촉수 지배자',
      '자이언트 골렘',
      '자이언트 골렘, 타천사',
      '이블라바 스폰',
      '피의 망령',
      '왈라키아 괴인',
      '하이드라',
      '블러드 체페슈',
      '마법사 왕',
      '잭 오 랜턴',
      '데드렉트',

      '문지기',
      '능천사',
      '타천사',
      '마나 에인션트',
      '마나 에인션트, 스피릿 비스트',
      '매드 클라운',
      '서리한, 일셰나',
      '거미제왕',
      '서리한, 일셰나, 거미제왕',
      '마왕',
      '커럽터 렉터스',
      '플레임 나이트메어',
      '터틀 로드',
      '스피릿 비스트',
      '해골왕 데스페리아',
      '주천사 사미엘',
      '좀비 로드',
      '본 드래곤',
      '에인션트 엔트',
      '암흑룡 이르베르트',
    ];

    for (let itemName of itemNameArray) {
      if (Items[itemName] == undefined) {
        this.logger.error(itemName + ' is not in item.ts!');
        throw new NotFoundException();
      }
      if (loadItem.indexOf(itemName) != -1) {
        delete loadItem[loadItem.indexOf(itemName)];
        this.logger.log('Find Item on loadItem! Item name is ' + itemName);
        continue;
      }
      if (Items[itemName][0] == 'gear' || Items[itemName][0] == 'material') {
        this.logger.log('Pushed ' + itemName);
        itemArray.push([itemName, 1, Items[itemName][1]]);
        continue;
      }

      for (let item of Items[itemName][1]) {
        console.log(item);
        if (loadItem.indexOf(item) != -1) {
          delete loadItem[loadItem.indexOf(item)];
          this.logger.log('Find Item on loadItem! Item name is ' + item);
          continue;
        }
        if (Items[item][0] == 'craftable') {
          this.logger.log('Item was ' + item);
          await this.findCraft([item], itemArray, loadItem);
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

    itemArray.sort(function (a, b) {
      if (bossSequence.indexOf(a[2]) > bossSequence.indexOf(b[2])) {
        return 1;
      } else {
        return -1;
      }
    });
    return itemArray;
  }
}
