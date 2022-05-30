import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Items } from './item';

@Injectable()
export class ItemService {
  private readonly logger = new Logger(ItemService.name);

  async findCraft(
    itemNameArray: Array<string>,
    itemArray: Array<[string, number, string]>,
  ) {
    const bossSequence = [
      '킹콩',
      '바다 코끼리',
      '이블 라바 스폰',
      '마법사 왕',
      '잭 오 랜턴',
      '블러드 체페슈',
      '하이드라',
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

    itemArray.sort(function (a, b) {
      console.log(a + ' ' + b);
      if (bossSequence.indexOf(a[2]) > bossSequence.indexOf(b[2])) {
        return 1;
      } else {
        return -1;
      }
    });
    return itemArray;
  }
}
