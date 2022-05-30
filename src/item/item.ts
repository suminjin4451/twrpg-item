import { Injectable } from '@nestjs/common';

export const Items = {
  //CRAFTABLE
  '성녀의 로브 다이아나': [
    'craftable',
    ['요정의 예복', '정령의 구슬', '정화의 증표', '안티 매터'],
  ],
  '요정의 예복': ['craftable', ['요정의 로브', '정령의 구슬']],
  '영겁의 검 에스피슈': [
    'craftable',
    [
      '천 마검 아스모데우스',
      '낡은 모래시계',
      '바람의 조각',
      '망각의 구슬',
      '마나 오브',
    ],
  ],
  '천 마검 아스모데우스': [
    'craftable',
    [
      '진 성검 카론프니엠',
      '성서의 한 페이지',
      '마서의 한 페이지',
      '다크 매터',
      '아다만티움',
      '고대의 문서',
    ],
  ],
  '진 성검 카론프니엠': [
    'craftable',
    ['성검 카론프니엠', '성서의 한 페이지', '고대의 문서', '오리하르콘'],
  ],
  '피의 지배검 테페시아': [
    'craftable',
    ['피의 검 테페시아', '블러드 스톤', '오리하르콘'],
  ],
  '혈혼검 테페시아': [
    'craftable',
    ['피의 지배검 테페시아', '진혼검', '스캐럽 본', '미스릴'],
  ],
  '크림슨 리퍼': [
    'craftable',
    [
      '혈혼검 테페시아',
      '스톰 리버',
      '작은 분노의 조각',
      '심연의 기운',
      '암흑의 결정',
      '불로의 심장',
    ],
  ],
  '스톰 리버': ['craftable', ['뇌전의 검', '폭풍의 문장']],
  '시간의 반지': [
    'craftable',
    [
      '잠식의 반지',
      '각인의 반지 네프티스',
      '낡은 모래시계',
      '신의 금속',
      '망각의 구슬',
      '불로의 심장',
    ],
  ],
  '잠식의 반지': [
    'craftable',
    ['현자의 반지', '마나 오브', '낡은 유적의 조각', '암흑의 날개 조각'],
  ],
  '현자의 반지': [
    'craftable',
    ['공명의 반지', '고대의 문서', '드래곤 하트', '미스릴'],
  ],
  '선혈의 갑주 베네딕트': [
    'craftable',
    [
      '피의 갑주 크루오리스',
      '불로의 심장',
      '신의 금속',
      '망각의 구슬',
      '분노의 결정',
      '영혼의 돌',
    ],
  ],
  '피의 갑주 크루오리스': [
    'craftable',
    [
      '마갑 데카로스',
      '암흑의 날개 조각',
      '마서의 한 페이지',
      '블러드 스톤',
      '왈라키아 백작의 유품',
      '드래곤 본',
    ],
  ],
  '퓨어 크리스탈 윙': [
    'craftable',
    ['타락한 크리스탈 날개', '망각의 구슬', '정령의 구슬', '성서의 한 페이지'],
  ],
  '타락한 크리스탈 날개': [
    'craftable',
    ['타락한 크리스탈 조각', '타락한 천사의 깃털 결정', '타락한 피조물'],
  ],
  '학살자의 날개': [
    'craftable',
    [
      '진노의 날개',
      '집념의 장막',
      '타락한 크리스탈 날개',
      '안티 매터',
      '다크 크리스탈',
      '망각의 파편',
    ],
  ],
  '진노의 날개': [
    'craftable',
    ['백작의 망토', '망자의 옷', '분노의 결정', '암흑의 날개 조각'],
  ],
  '백작의 망토': [
    'craftable',
    ['백작의 낡은 망토', '왈라키아 백작가의 유품', '오리하르콘', '미스릴'],
  ],

  //GEAR
  '요정의 로브': ['gear', '마나 에인션트'],
  '크랩 아머': ['gear', '킹크랩'],
  '터스크 헌터': ['gear', '바다코끼리'],
  '고기 주머니': ['gear', '킹콩'],
  '망자의 옷': ['gear', '피의 망령'],
  진혼검: ['gear', '피의 망령'],
  진혼궁: ['gear', '피의 망령'],
  돌갑주: ['gear', '왈라키아 괴인'],
  '박쥐 날개': ['gear', '왈라키아 괴인'],
  '악마 사냥꾼': ['gear', '왈라키아 괴인'],
  적석: ['gear', '이블라바 스폰'],
  '플레임 리버': ['gear', '이블라바 스폰'],
  '열정의 투구': ['gear', '이블라바 스폰'],
  '작은 분노의 조각': ['gear', '이블라바 스폰'],
  블래스터: ['gear', '이블라바 스폰'],
  '망자의 투구': ['gear', '망자의 투구'],
  '화염의 투구': ['gear', '라그나스'],
  '화염의 망토': ['gear', '라그나스'],
  '심해의 뿔피리': ['gear', '촉수 지배자'],
  '타락한 크리스탈 조각': ['gear', '자이언트 골렘'],
  '대지의 갑주': ['gear', '마나 에인션트'],
  '수호의 복장': ['gear', '마나 에인션트'],
  '생명의 돌': ['gear', '마나 에인션트'],
  '잭 펌킨 투구': ['gear', '잭 오 랜턴'],
  '잭 펌킨 후드': ['gear', '잭 오 랜턴'],
  '펌킨 로드': ['gear', '잭 오 랜턴'],
  '사탕 주머니': ['gear', '잭 오 랜턴'],
  '피의 검 테페시아': ['gear', '블러드 체페슈'],
  '피의 창 상귀엘': ['gear', '블러드 체페슈'],
  '혈포 체페슈': ['gear', '블러드 체페슈'],
  '왈라키아 백작가의 반지': ['gear', '블러드 체페슈'],
  '용검 라인하르트': ['gear', '데드렉트'],
  '용궁 에이엔스': ['gear', '데드렉트'],
  '용봉 이레이브': ['gear', '데드렉트'],
  '용갑 마그론': ['gear', '데드렉트'],
  '용투 아그론': ['gear', '데드렉트'],
  '공명의 반지': ['gear', '마법사 왕'],
  '후드 오브 메이지': ['gear', '마법사 왕'],
  '로브 오브 메이지': ['gear', '마법사 왕'],
  '불의 장검': ['gear', '마법사 왕'],
  '바람의 궁': ['gear', '마법사 왕'],
  '대지의 봉': ['gear', '마법사 왕'],
  '강철의 탄환': ['gear', '마법사 왕'],
  '뇌전의 검': ['gear', '마법사 왕'],
  '가디언 링': ['gear', '문지기'],
  '성검 카론프니엠': ['gear', '능천사'],
  '성봉 클레네티아': ['gear', '능천사'],
  '성포 이이나': ['gear', '능천사'],
  '성갑 홀리오스': ['gear', '능천사'],
  '성투 홀리로스': ['gear', '능천사'],
  '마투 스케리스': ['gear', '타천사'],
  '마갑 데카로스': ['gear', '타천사'],
  '마검 엑시멜리아': ['gear', '타천사'],
  '마궁 알카테': ['gear', '타천사'],
  '윈터 로즈': ['gear', '서리한, 일셰나'],
  '서리한의 로브 켈투자드': ['gear', '서리한, 일셰나'],
  '서리한의 투구 프로스트': ['gear', '서리한, 일셰나'],
  '서라한의 후드 프로스트': ['gear', '서리한, 일셰나'],
  '빙결의 창 오켈켄크': ['gear', '서리한, 일셰나'],
  '빙결의 활 오켈렌크': ['gear', '서리한, 일셰나'],
  '로드 오브 리볼버': ['gear', '서리한, 일셰나'],
  '프로스트 웹 브로치': ['gear', '서리한, 일셰나'],
  '겨울의 눈물': ['gear', '거미제왕'],
  '프로스트 베인': ['gear', '거미제왕'],
  니플하임: ['gear', '거미제왕'],
  '리플 스노우': ['gear', '거미제왕'],
  '파괴의 손톱': ['gear', '마왕'],
  '파괴의 탄환': ['gear', '마왕'],
  '슬레이어 부츠': ['gear', '마왕'],
  '마왕의 뿔': ['gear', '마왕'],
  '심연의 눈': ['gear', '마왕'],
  '워터 캐논': ['gear', '터틀 로드'],
  '교활의 튜닉': ['gear', '터틀 로드'],
  '스케일 프로텍터': ['gear', '터틀 로드'],
  '마력의 정수': ['gear', '터틀 로드'],
  커럽터: ['gear', '커럽터 렉터스'],
  복수자: ['gear', '커럽터 렉터스'],
  추적자: ['gear', '커럽터 렉터스'],
  체이서: ['gear', '커럽터 렉터스'],
  '전염의 지팡이': ['gear', '커럽터 렉터스'],
  '타락의 포션': ['gear', '커럽터 렉터스'],
  '해골 인장': ['gear', '커럽터 렉터스'],
  '열정의 화관': ['gear', '플레임 나이트메어'],
  '악몽의 반지': ['gear', '플레임 나이트메어'],
  '플레임샤드 아머': ['gear', '플레임 나이트메어'],
  증오: ['gear', '플레임 나이트메어'],
  인페르노: ['gear', '플레임 나이트메어'],
  '데스 사이드': ['gear', '해골왕 데스페리아'],
  '영혼의 지팡이': ['gear', '해골왕 데스페리아'],
  '암흑의 브로치': ['gear', '해골왕 데스페리아'],
  '사신의 로브': ['gear', '해골왕 데스페리아'],
  '본 네크리스': ['gear', '해골왕 데스페리아'],
  '집념의 장막': ['gear', '좀비 로드'],
  '기생의 지팡이': ['gear', '좀비 로드'],
  '망자의 두건': ['gear', '좀비 로드'],
  '수호의 검 그리세우스': ['gear', '에인션트 엔트'],
  '폭풍의 반지': ['gear', '에인션트 엔트'],
  '대자연의 포옹': ['gear', '에인션트 엔트'],
  '창공의 수호자': ['gear', '주천사 사미엘'],
  '낡은 모래시계': ['gear', '본 드래곤'],
  '드래고닉 오브': ['gear', '본 드래곤'],
  '애증의 검 르반테': ['gear', '암흑룡 이르베르트'],
  '각인의 반지 네프티스': ['gear', '암흑룡 이르베르트'],
  '드래고닉 스킨 루살카': ['gear', '암흑룡 이르베르트'],

  //METERIAL
  '정령의 구슬': ['material', '마나 에인션트, 스피릿 비스트'],
  '정화의 증표': ['material', '좀비 로드'],
  '안티 매터': ['material', '암흑룡 이베르트'],
  '감염된 촉수': ['material', '촉수 지배자'],
  '타락한 피조물': ['material', '자이언트 골렘, 타천사'],
  '매드 심볼': ['material', '매드 클라운'],
  '영혼의 돌': ['material', '매드 클라운'],
  '망령의 실': ['material', '매드 클라운'],
  '스캐럽 본': ['material', '매드 클라운'],
  '하이드라 맹독의 이빨': ['material', '하이드라'],
  '하이드라 스케일': ['material', '하이드라'],
  오리하르콘: ['material', '잭 오 랜턴'],
  '왈라키아 백작가의 유품': ['material', '블러드 체페슈'],
  '백작의 낡은 망토': ['material', '블러드 체페슈'],
  '블러드 스톤': ['material', '블러드 체페슈'],
  '드래곤 하트': ['material', '데드렉트'],
  '드래곤 본': ['material', '데드렉트'],
  '드래곤 스케일': ['material', '데드렉트'],
  '고대의 문서': ['material', '마법사 왕'],
  미스릴: ['material', '마법사 왕'],
  '천사의 깃털 결정': ['material', '능천사'],
  '성서의 한 페이지': ['material', '능천사'],
  '타락한 천사의 깃털 결정': ['material', '타천사'],
  '마서의 한 페이지': ['material', '타천사'],
  '얼음 거미줄': ['material', '서리한, 일셰나, 거미제왕'],
  프로리스트: ['material', '서리한, 일셰나, 거미제왕'],
  아다만티움: ['material', '거미제왕'],
  '암흑의 날개 조각': ['material', '마왕'],
  '다크 매터': ['material', '마왕'],
  '마나 오브': ['material', '터틀 로드'],
  '순수의 강철': ['material', '터틀 로드'],
  '폭풍의 문장': ['material', '터틀 로드'],
  '용기의 맹세': ['material', '터틀 로드'],
  '낡은 유적의 조각': ['material', '커럽터 렉터스'],
  '타락의 결정': ['material', '커럽터 렉터스'],
  '분노의 결정': ['material', '플레임 나이트메어'],
  '악몽의 기운': ['material', '플레임 나이트메어'],
  '심연의 기운': ['material', '해골왕 데스페리아'],
  '망각의 파편': ['material', '해골왕 데스페리아'],
  '망각의 구슬': ['material', '해골왕 데스페리아'],
  '스켈레톤 본': ['material', '해골왕 데스페리아'],
  '다크 크리스탈': ['material', '좀비 로드'],
  '불로의 심장': ['material', '좀비 로드'],
  '바람의 조각': ['material', '에인션트 엔트'],
  '대자연의 정수': ['material', '에인션트 엔트'],
  '빛의 결정': ['material', '에인션트 엔트'],
  '신의 금속': ['material', '에인션트 엔트'],
  '위서의 한 페이지': ['material', '에인션트 엔트'],
  '용의 눈': ['material', '본 드래곤'],
  '불타는 뼛조각': ['material', '본 드래곤'],
  '한기의 조각': ['material', '암흑룡 이르베르트'],
  '암흑의 결정': ['material', '암흑룡 이르베르트'],
};
