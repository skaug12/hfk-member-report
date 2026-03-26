// HFK 2026 봄시즌 멤버 데이터
const HFK_DATA = {
  season: '2026 봄시즌',
  seasonPeriod: '2026년 3월 - 5월',

  // 이벤트 일정
  events: [
    { name: '스페셜토크', date: '3/18' },
    { name: 'PEST 브리핑', date: '3/26' },
    { name: 'AAR 밋업', date: '4/22' },
    { name: 'HBR 포럼', date: '5/20' },
  ],

  // 팀 데이터
  teams: [
    {
      name: '감각적기획',
      partner: { name: '김동일', company: '네이버' },
      schedule: '일 14:30-17:00',
      dates: ['3/15', '3/29', '4/12', '4/26', '5/10', '5/24'],
      members: [
        { name: '김서현', company: 'HSAD', reg: '첫등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '안은진', company: '-', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '민희준', company: '지마켓', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '서효정', company: '포스코인재창조원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '유지민', company: '빅플래닛메이드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '임효정', company: '한샘', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '조주영', company: 'ihateflyingbugs', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '한미정', company: '코스트코', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '강점차별화',
      partner: { name: '전소영', company: 'Telta' },
      schedule: '일 10:30-13:00',
      dates: ['3/1', '3/22', '4/5', '4/19', '5/3', '5/17'],
      members: [
        { name: '이수민', company: 'SK텔레콤', reg: '첫등록', attendance: [true, true, null, null, null, null], events: [true, true, null, null] },
        { name: '홍은지', company: '삼성전자', reg: '첫등록', attendance: [false, true, null, null, null, null], events: [null, null, null, null] },
        { name: '나종원', company: '라쿠텐 코리아', reg: '재등록', attendance: [true, false, null, null, null, null], events: [null, null, null, null] },
        { name: '박선영', company: '이노션', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, true, null, null] },
        { name: '박지영', company: 'DL이앤씨', reg: '재등록', attendance: [true, false, null, null, null, null], events: [null, null, null, null] },
        { name: '윤미나', company: '한국방송통신대학교 산학협력단', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
        { name: '이민정', company: '사실은대단한제작소', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
        { name: '최혜정', company: '일룸', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '경영의전설',
      partner: { name: '장재형', company: '잇그린' },
      schedule: '금 19:30-22:00',
      dates: ['3/13', '3/27', '4/10', '4/24', '5/8', '5/22'],
      members: [
        { name: '권오림', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '남은경', company: '(주)이엠인피니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '돈명진', company: 'LX하우시스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '원정현', company: '아이큐비아(IQVIA)', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이현주', company: '디자인피버', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '조연준', company: '잇그린', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '고급화전략',
      partner: { name: '박양일', company: 'teaf' },
      schedule: '월 19:30-22:00',
      dates: ['3/16', '3/30', '4/13', '4/27', '5/11', '5/25'],
      members: [
        { name: '김성래', company: '선미한과', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김지현', company: '오렐린', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '방승환', company: '앤더슨딜스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '유통민', company: 'JTSnowball', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '장진영', company: 'PwC비즈니스서비스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '한새롬', company: '주식회사 힛더티', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '김민주', company: '폴라초이스코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '유선화', company: 'HBAF', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '윤다희', company: '버슨', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '조진서', company: '오호츠크 퍼블리싱', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '최이슬', company: 'CJ올리브영', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '리더십첫줄',
      partner: { name: '김성남', company: 'HR컨설턴트' },
      schedule: '일 10:30-13:00',
      dates: ['3/15', '3/29', '4/12', '4/26', '5/10', '5/24'],
      members: [
        { name: '김희원', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '이영주', company: '서울대학교 산학협력단', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '권나윤', company: '페일블루닷컴퍼니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '석지윤', company: '약사', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '주선경', company: '어댑트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '리더의서재',
      partner: { name: '심현보', company: 'Kearney' },
      schedule: '금 19:30-22:00',
      dates: ['3/20', '4/3', '4/17', '5/1', '5/15', '5/29'],
      members: [
        { name: '이현정', company: '추다 CHU DA', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '권수은', company: '삼성서울병원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박지영', company: 'DL이앤씨', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '손상희', company: 'LG경영연구원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '엄선용', company: '아이레', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '윤왕교', company: '금호오토파츠', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '임아영', company: 'Morphic', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '마케팅디깅',
      partner: { name: '김민정', company: '오늘의집' },
      schedule: '목 19:30-22:00',
      dates: ['3/19', '4/2', '4/16', '4/30', '5/14', '5/28'],
      members: [
        { name: '강동훈', company: '(주)오디스랩', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '송선혜', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '윤지성', company: 'Remerge', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '황성준', company: '바이트댄스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김한나', company: 'LG전자', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '이지현', company: '네이버웹툰', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이태희', company: 'HuskyFox', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '임성우', company: '삼성전자', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '소통의기술',
      partner: { name: '박민우', company: '보이스랩' },
      schedule: '토 10:30-13:00',
      dates: ['3/7', '3/21', '4/4', '4/18', '5/2', '5/16'],
      members: [
        { name: '송서현', company: '서울특별시청', reg: '첫등록', attendance: [true, true, null, null, null, null], events: [null, true, null, null] },
        { name: '김다영', company: '(주)다다씨앤씨', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
        { name: '서지희', company: '신젠타코리아', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
        { name: '이승원', company: 'HD현대일렉트릭', reg: '재등록', attendance: [false, false, null, null, null, null], events: [null, null, null, null] },
        { name: '전소영', company: '아모레퍼시픽', reg: '재등록', attendance: [false, true, null, null, null, null], events: [false, null, null, null] },
        { name: '홍수경', company: '대한항공', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '저스트두잇',
      partner: { name: '김보경', company: '금은보화' },
      schedule: '화 19:30-22:00',
      dates: ['3/17', '3/31', '4/14', '4/28', '5/12', '5/26'],
      members: [
        { name: '강국주', company: '위즈팜', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김규리', company: '프리랜서', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '박소현', company: 'fadó', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '이홍진', company: '다이소코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '유희경', company: '매일경제신문', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '전략가의일',
      partner: { name: '송진우', company: '우버 택시 코리아' },
      schedule: '목 19:30-22:00',
      dates: ['3/12', '3/26', '4/9', '4/23', '5/7', '5/21'],
      members: [
        { name: '강혜원', company: '바커케미칼코리아', reg: '첫등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김보정', company: '슈미트/똑똑', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김향주', company: '더퍼스트터치', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박명근', company: 'NVIDIA', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박상연', company: '에피원스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '안정민', company: 'GS에너지', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이정민', company: '매스프레소', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이한별', company: 'LG에너지솔루션', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '홍아람', company: 'Apex dynamic', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김유일', company: '테크트로닉인더스트리즈코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김재연', company: '대한항공', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박승표', company: '스케일업스쿼드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이수림', company: '오뚜기', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이은혁', company: '삼양홀딩스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이정은', company: '필더필', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '장지웅', company: '삼성바이오로직스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '조현국', company: '오뚜기', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: '팀오호츠크',
      partner: { name: '김재윤', company: 'HFK' },
      schedule: '일 10:30-13:00',
      dates: ['3/22', '4/5', '4/19', '5/3', '5/15', '5/31'],
      members: [
        { name: '정호준', company: '삼성전자', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김하나', company: 'HERE Technologies', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박지원', company: 'LINE+', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '신선아', company: '오아시스마켓', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '윤다혜', company: 'Emirates Shipping Line', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이수연', company: '부산시립미술관', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이주영', company: '더플레이컴퍼니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: 'AI부사수',
      partner: { name: '이슬기', company: 'HFK' },
      schedule: '금 19:30-22:00',
      dates: ['3/13', '3/27', '4/10', '4/24', '5/8', '5/22'],
      members: [
        { name: '김준형', company: 'SK텔레콤', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '이다은', company: '머쉬룸컴퍼니(레디투킥)', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '강주현', company: 'NE능률', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '금가람', company: '우리밀', reg: '재등록', attendance: [false, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김경아', company: '(주)트립레이어', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김지애', company: '경기도어린이박물관', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김지현', company: '몽베스트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '김화진', company: '현대해상', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박경문', company: '금융감독원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박정연', company: 'TD7VII INC', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '신상호', company: '(주)에어코드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '유효영', company: '퍼플식스스튜디오', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이세림', company: 'SK텔레콤', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이수정', company: '아웃사이트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null] },
        { name: '이지은', company: 'CJ제일제당', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '정나리', company: 'LVMH BEAUTY', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '허재영', company: '현대자동차', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '황인중', company: '금화 세무회계', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
    {
      name: 'AI핸즈온',
      partner: { name: '이 림', company: '이미커피' },
      schedule: '토 10:30-13:00',
      dates: ['3/14', '3/28', '4/11', '4/25', '5/9', '5/30'],
      members: [
        { name: '김혜림', company: '카카오페이', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '민세원', company: '(주)트레이', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '김경아', company: '아이스크림아트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김정민', company: '아모레퍼시픽', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김준영', company: 'SKT', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김효현', company: '나인바운드랩', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박윤승', company: '카카오페이', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '박재희', company: '이노크라스', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '신승환', company: '위펀', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '신현주', company: '주한캐나다대사관', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '오지영', company: '버핏서울', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '이다혜', company: '롯데e커머스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이슬기', company: '쿠팡', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이정준', company: '메모리올', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '이파라', company: '-', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, true, null, null] },
        { name: '전신애', company: '비아트리스코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '정서연', company: 'CJ 올리브영', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
        { name: '조혜진', company: '-', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '이홍진', company: '다이소코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null] },
      ]
    },
  ]
};
