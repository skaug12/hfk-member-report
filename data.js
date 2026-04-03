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
        { name: '김서현', company: 'HSAD', reg: '첫등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '감각적기획 팀에서 첫 시즌을 함께하고 있습니다.',
            fourL: null,
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '안은진', company: '-', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"-조부모님들이 아이를 케어해 주시기 힘든 상황이라 지금까지는 다른 사람 손에 아이를 맡길 자신이 없어 선뜻 일할 용기가 나지 않았어요. 아이와 함께 하는 시간도 너무 소중하고 행복하지만 일하는걸 좋아했던 저라..."라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "좋은 기획, 경험은 결국 지속가능함이 중요하다는 것!"라는 배움을 얻었습니다.',
            fourL: '1회차: "좋은 기획, 경험은 결국 지속가능함이 중요하다는 것!". 2회차: "보통 어떤 현상이나 공간을 바라볼 때 관찰과 해석에서 멈추고 평가, 가치판단까지 확장시키는 훈련 또는 세 가지를 구분해서 생각해 보는 것에 대해 생각해 볼 ...".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '민희준', company: '지마켓', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '감각적기획 팀에 다시 돌아온 시즌입니다. 세션을 통해 "ai를 활용한 기획 방법을 상세하게 배웠다. ai를 쓰면서 내가 키울 수 있는 능력이 무엇인가를 고민하게 되었다."라는 배움을 얻었습니다.',
            fourL: '2회차: "ai를 활용한 기획 방법을 상세하게 배웠다. ai를 쓰면서 내가 키울 수 있는 능력이 무엇인가를 고민하게 되었다.".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '서효정', company: '포스코인재창조원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"→ 하고 있는 일의 시작과 사이사이에 ‘기획’이 있다는 느낌을 받고 있는데 가끔 모호하게 느껴질 때가 많이 있습니다. 기획에 대한 새로운 관점을 가지고 가는게 이번 시즌의 목표입니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "생각보다 경험한 것에 대해 왜?를 질문하면서 나에 대해서도, 경험에 대해서도 알려고 하지 않았다는 걸 느끼게 되었습니다"라는 배움을 얻었습니다.',
            fourL: '1회차: "생각보다 경험한 것에 대해 왜?를 질문하면서 나에 대해서도, 경험에 대해서도 알려고 하지 않았다는 걸 느끼게 되었습니다". 2회차: "경험을 볼 때 어떤 관점으로 봐야할지 고민할 수 있었습니다. 생각보다 더 피상적인 것만 관찰하고 인사이트까지는 가보지 못했던 것 같아요.". 앞으로 시도하고 싶은 것: "Ai로 페르소나 만들어보기!".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '유지민', company: '빅플래닛메이드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '감각적기획 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '임효정', company: '한샘', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"→ 하고 있는 일의 시작과 사이사이에 ‘기획’이 있다는 느낌을 받고 있는데 가끔 모호하게 느껴질 때가 많이 있습니다. 기획에 대한 새로운 관점을 가지고 가는게 이번 시즌의 목표입니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "생각보다 경험한 것에 대해 왜?를 질문하면서 나에 대해서도, 경험에 대해서도 알려고 하지 않았다는 걸 느끼게 되었습니다"라는 배움을 얻었습니다.',
            fourL: '1회차: "생각보다 경험한 것에 대해 왜?를 질문하면서 나에 대해서도, 경험에 대해서도 알려고 하지 않았다는 걸 느끼게 되었습니다". 2회차: "경험을 볼 때 어떤 관점으로 봐야할지 고민할 수 있었습니다. 생각보다 더 피상적인 것만 관찰하고 인사이트까지는 가보지 못했던 것 같아요.". 앞으로 시도하고 싶은 것: "Ai로 페르소나 만들어보기!".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '조주영', company: 'ihateflyingbugs', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"이번 시즌의 목표는 제 업무를 명확히, 효율화하는 것입니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "불편한 경험으로부터도 좋은 제품의 아이디어와 좋은 질문들을 인사이트화 할 수 있다"라는 배움을 얻었습니다.',
            fourL: '1회차: "불편한 경험으로부터도 좋은 제품의 아이디어와 좋은 질문들을 인사이트화 할 수 있다".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
        { name: '한미정', company: '코스트코', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '감각적기획 팀에 다시 돌아온 시즌입니다. 세션을 통해 "우리 회사의 중요 타겟을 한번 더 생각해보고 가는 시간, 이를 통해 사용자 경험의 방향성을 다르게 잡을 수 있다는 것을 깨닫게 되었습니다."라는 배움을 얻었습니다.',
            fourL: '2회차: "우리 회사의 중요 타겟을 한번 더 생각해보고 가는 시간, 이를 통해 사용자 경험의 방향성을 다르게 잡을 수 있다는 것을 깨닫게 되었습니다.". 앞으로 시도하고 싶은 것: "AI를 활용해서 심층 인터뷰, 페르소나 방법을 시도해보고 싶습니다.".',
            nextSeason: '이번 시즌 감각적기획(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '리서치 결과를 설득력 있게 전달하는 방법을 배웁니다' },
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: 'AI로 프로토타이핑하며 기획의 속도를 높입니다' }
            ]
          }
         },
      ]
    },
    {
      name: '강점차별화',
      partner: { name: '전소영', company: 'Telta' },
      schedule: '일 10:30-13:00',
      dates: ['3/1', '3/22', '4/5', '4/19', '5/3', '5/17'],
      members: [
        { name: '이수민', company: 'SK텔레콤', reg: '첫등록', attendance: [true, true, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: '"시장에서의 경쟁력을 정의하고 강점 개발 방향을 잡겠다"는 목표로 시작한 시즌입니다. 2회차까지 참여하면서 자신의 일을 task 단위로 쪼개보고, 주어진 일을 해내는 것과 자기 강점을 아는 것이 다르다는 걸 느꼈습니다. "수요를 고민하지 않고 일해왔다"는 스스로의 솔직한 기록이 이 시즌에서 가장 의미 있는 출발점입니다.',
            fourL: '1회차에서 일을 인수분해하는 관점을 얻었고, 2회차에서는 스킬 리스트로 자기 현황을 점검하며 "앙꼬가 작은 게 아니라 해온 일의 특성"이라는 생각의 전환을 경험했습니다. 두 회차를 이어보면 방향이 보입니다. 지금 하는 일의 리소스 대비 효과를 따져보고, 나만의 스킬셋을 시대에 맞게 다시 정의하는 것. "문제를 정의하고 해결하는 사람"이라는 자기 소개에 구체적인 좌표가 붙기 시작한 시즌입니다.',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)에서 자기 스킬의 좌표를 잡았다면, 다음 시즌에는 그 좌표를 콘텐츠로 만들어보는 건 어떨까요.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '온라인 마케팅 실무에서 AI를 깊이 있게 활용하여 생산성 확장' }
            ]
          }
        },
        { name: '홍은지', company: '삼성전자', reg: '첫등록', attendance: [false, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '강점차별화 팀에서 첫 시즌을 함께하고 있습니다.',
            fourL: '2회차: "인사팀의 시각으로 내 현재 위치를 점검해볼수 있어서 좋았습니다.". 앞으로 시도하고 싶은 것: "내가 하고있는 일과 능력을 명확히 정의할수있는 사람이 되고싶다.".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '나종원', company: '라쿠텐 코리아', reg: '재등록', attendance: [true, false, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"나의 수많은 강점을 객관적으로 판단하고 가시화하고 싶습니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "저의 커리어 속에서 내가 바란 ‘키워드’ 는 어떤건지, 내 커리어에서 붙을 참들은 어떤게 될 건지 고민하고 묻는 시간이었습니다!"라는 배움을 얻었습니다.',
            fourL: '1회차: "저의 커리어 속에서 내가 바란 ‘키워드’ 는 어떤건지, 내 커리어에서 붙을 참들은 어떤게 될 건지 고민하고 묻는 시간이었습니다!".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '박선영', company: '이노션', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '강점차별화 팀에 다시 돌아온 시즌입니다. 세션을 통해 "내가 내 능력을 \'업계\'에서 필요한 능력과 보편적 능력을 잘 구별하지 못했던 것은 아닌지를 느꼈다."라는 배움을 얻었습니다.',
            fourL: '2회차: "내가 내 능력을 \'업계\'에서 필요한 능력과 보편적 능력을 잘 구별하지 못했던 것은 아닌지를 느꼈다.". 앞으로 시도하고 싶은 것: "1,2회차를 엑셀로 좀 다시 작업해보고 싶다. 소영님말로는 이걸 따로 다시 해본 사람이 없다고 하셨지만.. 내일 연차니까 해볼 수 있지 않...".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '박지영', company: 'DL이앤씨', reg: '재등록', attendance: [true, false, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '강점차별화 팀에 다시 돌아온 시즌입니다.',
            fourL: '1회차: "차분한 리딩, 나의 강점을 객관적으로 확인 할수 있었던 시간".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '윤미나', company: '한국방송통신대학교 산학협력단', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '강점차별화 팀에 다시 돌아온 시즌입니다. 세션을 통해 "전략적인일, 다크호스, 정크일을 한눈에 알아보기쉽게 기록한점."라는 배움을 얻었습니다.',
            fourL: '1회차: "전략적인일, 다크호스, 정크일을 한눈에 알아보기쉽게 기록한점.". 2회차: "Task 에 대해 객관적시각으로 생각해본점".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '이민정', company: '사실은대단한제작소', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '강점차별화 팀에 다시 돌아온 시즌입니다. 세션을 통해 "좌표에서 나의 전략, 다크호스, 정크부분을 시각적으로 본점"라는 배움을 얻었습니다.',
            fourL: '1회차: "좌표에서 나의 전략, 다크호스, 정크부분을 시각적으로 본점". 2회차: "내가 가진 강점을 세분화 해보는 감각". 앞으로 시도하고 싶은 것: "앞으로 나는 어디까지 할 수 있을까?".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
        { name: '최혜정', company: '일룸', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '강점차별화 팀에 다시 돌아온 시즌입니다. 세션을 통해 "성격강점과 직무강점의 차이, 직무강점이 집중하는 이유. 내가 좋아하는 일이고 그것이 인정 받았다고 나의 엣지가 되지는 않는다."라는 배움을 얻었습니다.',
            fourL: '1회차: "성격강점과 직무강점의 차이, 직무강점이 집중하는 이유. 내가 좋아하는 일이고 그것이 인정 받았다고 나의 엣지가 되지는 않는다.". 2회차: "커리어를 이분법적으로 쪼개는 방법이 아닌, 코카콜라의 사례처럼 넓은 지평선에서 바라보고 방향을 정할 수 있다는 것. 그리고 그 방향에 맞춰 나의 레고블록들을...".',
            nextSeason: '이번 시즌 강점차별화(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '커리어기록', track: 'Realignment 트랙', desc: '정리된 강점을 글로 풀어내며 전문성을 자산으로 전환' },
              { name: '커리어캠프', track: 'Realignment 트랙', desc: '방향 재설정이 필요하다면 커리어 전환을 탐색' }
            ]
          }
         },
      ]
    },
    {
      name: '경영의전설',
      partner: { name: '장재형', company: '잇그린' },
      schedule: '금 19:30-22:00',
      dates: ['3/13', '3/27', '4/10', '4/24', '5/8', '5/22'],
      members: [
        { name: '권오림', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"• 관련 책을 찾아봅니다. 광화문 교보문고를 애용합니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "하나의 주제에 대해서 다양한 관점이 나와서 놀랐고 나 역시 다른 사람들과는 다른 관점을 갖고 있다는 그래서 더 많이 접하는 것이 필요하겠다."라는 배움을 얻었습니다.',
            fourL: '1회차: "하나의 주제에 대해서 다양한 관점이 나와서 놀랐고 나 역시 다른 사람들과는 다른 관점을 갖고 있다는 그래서 더 많이 접하는 것이 필요하겠다.". 2회차: "리소스와 레이오프에 대해서 다른 시각을 들어볼 수 있었습니다.". 앞으로 시도하고 싶은 것: "확실히 6인이 되니 더 다양한 관점에서 의견을 들을 수 있어서 좋았습니다. 다음에도 다 같이 하면 좋겠네요.".',
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
        { name: '남은경', company: '(주)이엠인피니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '경영의전설 팀에 다시 돌아온 시즌입니다. 세션을 통해 "‘실패’라는 단어를 같은 장면에서도 전혀 다르게 해석하는 여러 관점이 흥미로웠다. 실패란 포기인가? 예측이 불가한 앞날일까? 누군가에게는 멈춤이고, 누군가에..."라는 배움을 얻었습니다.',
            fourL: '1회차: "‘실패’라는 단어를 같은 장면에서도 전혀 다르게 해석하는 여러 관점이 흥미로웠다. 실패란 포기인가? 예측이 불가한 앞날일까? 누군가에게는 멈춤이고, 누군가에...". 2회차: "자원 재분배의 관점에서, 새로운 투자를 받게 된다면 나는 어떻게 사용할 것인지 고민하게 되었다. 신사업에 쓸지, 사옥을 만들지, 직원 복지와 급여를 올릴지. ...".',
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
        { name: '돈명진', company: 'LX하우시스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '경영의전설 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
        { name: '원정현', company: '아이큐비아(IQVIA)', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"• 유튜브로 관련 강연을 찾아 듣거나 교보문고를 갑니다!"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "모든 질문들에 대한 고민의 끝은 결국 “나는 누구인가”"라는 배움을 얻었습니다.',
            fourL: '2회차: "모든 질문들에 대한 고민의 끝은 결국 “나는 누구인가”". 앞으로 시도하고 싶은 것: "오늘 세션에서 나왔던 질문들에 답할 수 있도록 곱씹어보기".',
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
        { name: '이현주', company: '디자인피버', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '경영의전설 팀에 다시 돌아온 시즌입니다. 세션을 통해 "각각의 상황들에서 나는 어떤 결정을 할 수 있었을까 생각해 보는 것이 필요하다는 생각이 들었어요. 꼭 해봐야겠습니다."라는 배움을 얻었습니다.',
            fourL: '2회차: "각각의 상황들에서 나는 어떤 결정을 할 수 있었을까 생각해 보는 것이 필요하다는 생각이 들었어요. 꼭 해봐야겠습니다.". 앞으로 시도하고 싶은 것: "개인의 성공과 실패 경험을 정리해 보고 싶어졌어요.".',
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
        { name: '조연준', company: '잇그린', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '경영의전설 팀에 다시 돌아온 시즌입니다. 세션을 통해 "모든 결정의 책임은 나에게 있고, 믿어야한다."라는 배움을 얻었습니다.',
            fourL: '2회차: "모든 결정의 책임은 나에게 있고, 믿어야한다.". 앞으로 시도하고 싶은 것: "경영의전설 남은 회차 모두 참석하기".',
            nextSeason: '이번 시즌 경영의전설(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '사례에서 배운 경영 기준을 현업에 적용' },
              { name: '영화로운일', track: 'New Horizons 트랙', desc: '영화를 통해 리더십과 조직의 질문을 확장' }
            ]
          }
         },
      ]
    },
    {
      name: '고급화전략',
      partner: { name: '박양일', company: 'teaf' },
      schedule: '월 19:30-22:00',
      dates: ['3/16', '3/30', '4/13', '4/27', '5/11', '5/25'],
      members: [
        { name: '김성래', company: '선미한과', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '고급화전략 팀에서 첫 시즌을 함께하고 있습니다.',
            fourL: null,
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '김지현', company: '오렐린', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"브랜드에 대해 좀더 알고 싶고 배워서 새롭게 준비하는 브랜드에 체계적으로 반영하고 고급화로 만드는게 제 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "해리티지와 프리미엄에 대한 개념이해와 AI가 대체할수 없는 휴먼터치에 대한 새로운 개념이 생겨서 좋았습니다 ."라는 배움을 얻었습니다.',
            fourL: '1회차: "해리티지와 프리미엄에 대한 개념이해와 AI가 대체할수 없는 휴먼터치에 대한 새로운 개념이 생겨서 좋았습니다 .".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '방승환', company: '앤더슨딜스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '": 몇 년간 커리어 및 지식의 축적 기간을 가졌다고 생각하는데, 이것을 명확히 활용 가능한 Mental Model로 체계화하고 싶습니다. *• 자기 계발이 필요하다고 느껴질 때 어떻게 정보를 찾아보나요?* : ..."라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "다양한 브랜드의 고급화 전략에 대해 생각해 볼 수 있었습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "다양한 브랜드의 고급화 전략에 대해 생각해 볼 수 있었습니다.". 앞으로 시도하고 싶은 것: "실생활에서 만나는 브랜드들 중에서 고급화 전략을 접목한 브랜드들을 찾아보고자 합니다.".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '유통민', company: 'JTSnowball', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"바이브코딩 과외 교육의 고급화 전략에 대한 고민을 해결하고 싶어 등록하게 되었습니다. 좋은 분들과 새로운 인연을 만들어가는 것도 이번 시즌의 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "동경, 기원에 대한 헤리티지의 요소를 더 생각해보게 됐다"라는 배움을 얻었습니다.',
            fourL: '1회차: "동경, 기원에 대한 헤리티지의 요소를 더 생각해보게 됐다". 2회차: "내 브랜드가 고급화 전략이 필요한 상황인가라는 질문 자체를 던져보는게 의미가 있음". 앞으로 시도하고 싶은 것: "내 제품과 브랜드로 오는 길목이 필요하다".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '장진영', company: 'PwC비즈니스서비스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"준비 중인 브랜드에 고급화 전략을 녹이고 싶어 등록하게 되었으며, 브랜드의 성공적인 론칭이 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "헤리티지 vs. 프리미엄까지는 나눌 생각을 못했는데 새롭게 알게 되었습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "헤리티지 vs. 프리미엄까지는 나눌 생각을 못했는데 새롭게 알게 되었습니다.". 2회차: "우리브랜드에 대해 가성비 vs.가심비를 생각하게 되었습니다.". 앞으로 시도하고 싶은 것: "우리 브랜드의 스토리와 왜 우리를 선택해야하는지를 찾아보겠습니다.".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '한새롬', company: '주식회사 힛더티', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"브랜딩에 대한 이해는 항상 어렵다고 생각해왔는데 이번 기회로 좀 더 가까워지고 싶습니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "헤리티지와 프리미엄! 어느 것 하나 정답은 아니라서 이번 기회를 계기로 내 브랜드는 어느 지점에 있는지, 어떻게 해나가야 하는지 나름의 정의하는 방법과 연습..."라는 배움을 얻었습니다.',
            fourL: '1회차: "헤리티지와 프리미엄! 어느 것 하나 정답은 아니라서 이번 기회를 계기로 내 브랜드는 어느 지점에 있는지, 어떻게 해나가야 하는지 나름의 정의하는 방법과 연습...". 앞으로 시도하고 싶은 것: "새롭게 리뉴얼한 슈퍼보리 브랜드 전략에 적용해보고 싶습니다. 기존 말차와 다른 새로운 시도가 가능한 신제품이라 꼭 적용해보겠습니다.".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '김민주', company: '폴라초이스코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '고급화전략 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '유선화', company: 'HBAF', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '고급화전략 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '윤다희', company: '버슨', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"AI가 대체할 수 없는 감각 ‘안목‘과 ‘문제해결력’을 성장시키고, 제 커리어 플랜도 세워 볼 수 있으면 좋을 것 같습니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "브랜드 메세지와 시간이 주는 가치에 중요성을 느꼈어요. 훗날 브랜드를 만들게되면 럭셔리 브랜드 요소를 녹여내고 싶습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "브랜드 메세지와 시간이 주는 가치에 중요성을 느꼈어요. 훗날 브랜드를 만들게되면 럭셔리 브랜드 요소를 녹여내고 싶습니다.". 2회차: "양일님의 티아프 브랜드 탄생 스토리와 디테일한 고민들을 예시로 주셔서 이해에 도움 됐습니다. 꿀 질문도 좋았습니다.". 앞으로 시도하고 싶은 것: "브랜드들 분석을 해보면서 더 스터디가 필요할 것 같습니다!".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '조진서', company: '오호츠크 퍼블리싱', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"제가 잘 모르는 사람들에게 스스로를 험블하게 표현하는 버릇이 있어서 그걸 완전히 바꿔보려 합니다. 개인적으로 또 브랜드 차원의 스토리텔링을 잘 하는 습관을 배우고자 합니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "내가 추구하는 게 프리미엄이냐 해리티지냐 생각해봤음"라는 배움을 얻었습니다.',
            fourL: '1회차: "내가 추구하는 게 프리미엄이냐 해리티지냐 생각해봤음". 2회차: "쌀밥과 어울리는 김을 포기하고 해산물/고기맛을 살려주는 김으로 좁게 포지셔닝..". 앞으로 시도하고 싶은 것: "티프의 사례를 더 연구해봐야겠다".',
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
        { name: '최이슬', company: 'CJ올리브영', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '고급화전략 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 고급화전략(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '고급화 전략을 고객 경험과 세일즈로 연결' },
              { name: '스몰브랜드', track: 'New Horizons 트랙', desc: '작지만 뾰족한 브랜드에서 사업 감각을 배웁니다' }
            ]
          }
         },
      ]
    },
    {
      name: '리더십첫줄',
      partner: { name: '김성남', company: 'HR컨설턴트' },
      schedule: '일 10:30-13:00',
      dates: ['3/15', '3/29', '4/12', '4/26', '5/10', '5/24'],
      members: [
        { name: '김희원', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"올해 매니저로 직무가 바뀌게 되었습니다. 리더십에 대한 고민이 많아지던 중 딱 맞는 팀을 발견하여 등록하였습니다. 바뀐 직무에 잘 적응하는 것이 이번 시즌의 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "리더의 행동이나 감정이 큰 영향을 미친다는 것을 알았습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "리더의 행동이나 감정이 큰 영향을 미친다는 것을 알았습니다.". 2회차: "거절하는 방법에 대해 배웠다.". 앞으로 시도하고 싶은 것: "저맥락언어로 업무 지시를 하는 것.".',
            nextSeason: '이번 시즌 리더십첫줄(Vertical 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '중간리더십', track: 'Vertical 트랙', desc: '리더십 경험을 다음 단계로 확장' },
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '리더로서의 강점을 정의하고 성장 방향을 설계' }
            ]
          }
         },
        { name: '이영주', company: '서울대학교 산학협력단', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"업무와 관련하여 자기계발을 하고싶던 중, 리더십에 대해 배울수 있을 것 같아 등록하게되었습니다. 건강한 리더십을 정립해보고, 리더를 이해하고 유연하게 상황을 이끌어가는 리더가 될수있는 기본기를 갖추고 싶네요. ..."라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "리더십 관련된 여러 이론을 배우고, 통계를 접해볼 수 있었던 것 같습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "리더십 관련된 여러 이론을 배우고, 통계를 접해볼 수 있었던 것 같습니다.".',
            nextSeason: '이번 시즌 리더십첫줄(Vertical 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '중간리더십', track: 'Vertical 트랙', desc: '리더십 경험을 다음 단계로 확장' },
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '리더로서의 강점을 정의하고 성장 방향을 설계' }
            ]
          }
         },
        { name: '권나윤', company: '페일블루닷컴퍼니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '리더십첫줄 팀에 다시 돌아온 시즌입니다. 세션을 통해 "리더의 언행이 매우 영향력있다는 것이 다시 한번 매일의 스스로를 의식해야겠다고 다짐..!"라는 배움을 얻었습니다.',
            fourL: '1회차: "리더의 언행이 매우 영향력있다는 것이 다시 한번 매일의 스스로를 의식해야겠다고 다짐..!". 2회차: "평소에 추상적으로 인지하고 있던 상황들이 심리학 전문 용어로 설명되는 것을 알게되어서 좋았습니다.".',
            nextSeason: '이번 시즌 리더십첫줄(Vertical 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '중간리더십', track: 'Vertical 트랙', desc: '리더십 경험을 다음 단계로 확장' },
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '리더로서의 강점을 정의하고 성장 방향을 설계' }
            ]
          }
         },
        { name: '석지윤', company: '약사', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '리더십첫줄 팀에 다시 돌아온 시즌입니다. 세션을 통해 "자기성찰과 통찰력 점수를 통한 나에 대한 인식"라는 배움을 얻었습니다.',
            fourL: '1회차: "자기성찰과 통찰력 점수를 통한 나에 대한 인식". 2회차: "소통 스킬들을 알 수 있었다". 앞으로 시도하고 싶은 것: "소통방식 회고 @ 이영주".',
            nextSeason: '이번 시즌 리더십첫줄(Vertical 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '중간리더십', track: 'Vertical 트랙', desc: '리더십 경험을 다음 단계로 확장' },
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '리더로서의 강점을 정의하고 성장 방향을 설계' }
            ]
          }
         },
        { name: '주선경', company: '어댑트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"cold_face: 잠시 쉬다 봄 시즌에 다시 참여하게 되었습니다 :) 회사에서 리더 전환 평가 대상자의 상황이고 리더십에 대해서 고민이 생기는 시기라 조금더 체계적으로 고민해보고자 리더십첫줄 신청하게 되었고..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "자기인식과 통찰력에 대해서 나를 진단해보고, 내가 부족한 부분이 뭔지에 대해 생각해볼수 있었습니다. 리더들은 어떤 부분으로 평가 받게 되는지에 대해서도 생각..."라는 배움을 얻었습니다.',
            fourL: '1회차: "자기인식과 통찰력에 대해서 나를 진단해보고, 내가 부족한 부분이 뭔지에 대해 생각해볼수 있었습니다. 리더들은 어떤 부분으로 평가 받게 되는지에 대해서도 생각...". 2회차: "경청의 단계 측면에서 모든 사람들에게 에너지를 들여 소통할 필요는 없다, 내 에너지가 많이 소모 될수 있음을 인지할수 있고 개선해야겠다 느꼈어요". 앞으로 시도하고 싶은 것: "차근차근 배워나가고 배운거 실행하며 초보 리더십을 디벨롭 시켜 나가고자 합니다.".',
            nextSeason: '이번 시즌 리더십첫줄(Vertical 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '중간리더십', track: 'Vertical 트랙', desc: '리더십 경험을 다음 단계로 확장' },
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '리더로서의 강점을 정의하고 성장 방향을 설계' }
            ]
          }
         },
      ]
    },
    {
      name: '리더의서재',
      partner: { name: '심현보', company: 'Kearney' },
      schedule: '금 19:30-22:00',
      dates: ['3/20', '4/3', '4/17', '5/1', '5/15', '5/29'],
      members: [
        { name: '이현정', company: '추다 CHU DA', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"전통분야 이외의 사람들의 생각을 보고 듣고 공유하는 기회속에서 앞으로 만들어갈 브랜드를 정비하고 싶습니다. 대외적인 일이 아니면 제 생각을 잘 말하지 않아서 , 이번엔 깊이 생각한 말들을 꼭 해보기!"라는 목표로 첫 시즌을 시작했습니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
        { name: '권수은', company: '삼성서울병원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '리더의서재 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
        { name: '박지영', company: 'DL이앤씨', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '손상희', company: 'LG경영연구원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '리더의서재 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
        { name: '엄선용', company: '아이레', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"AI 시대의 도래로 급습한 막연한 두려움을 기회를 포착하는 인사이트로 전환하는 것입니다"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
        { name: '윤왕교', company: '금호오토파츠', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '리더의서재 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
        { name: '임아영', company: 'Morphic', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '리더의서재 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 리더의서재(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '책에서 읽은 경영 관점을 현업 의사결정에 적용' },
              { name: '경영의전설', track: 'New Horizons 트랙', desc: '기업 실패와 턴어라운드에서 나만의 경영 기준 수립' }
            ]
          }
         },
      ]
    },
    {
      name: '마케팅디깅',
      partner: { name: '김민정', company: '오늘의집' },
      schedule: '목 19:30-22:00',
      dates: ['3/19', '4/2', '4/16', '4/30', '5/14', '5/28'],
      members: [
        { name: '강동훈', company: '(주)오디스랩', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"저는 전문 마케터가 아니지만 마케팅은 컨텐츠만큼, 어쩌면 컨텐츠보다 더 중요하다는 생각으로 이분야에 \'디깅\' 하려 하는 편입니다. 흐름에 대한 이야기듣고 나누고 싶습니다"라는 목표로 첫 시즌을 시작했습니다.',
            fourL: null,
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '송선혜', company: '플렉스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"사실 지금 속한 팀이 개발자 비중이 높은 기술 중심의 조직입니다. 홀로 마케팅을 하고 있어서 가끔은 성장이 정체된다고 느껴지는데요"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "마케팅과 관련된 좋은 책을 많이 알게 된 것 같습니다. 그리고 다른 회사에서 마케팅을 어떻게 하는지 알 수 있었습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "마케팅과 관련된 좋은 책을 많이 알게 된 것 같습니다. 그리고 다른 회사에서 마케팅을 어떻게 하는지 알 수 있었습니다.". 앞으로 시도하고 싶은 것: "단편적인 업무가 아닌(ex. 랜딩페이지 만들기...) 거시적인 관점에서 마케팅을 고민할 예정입니다.".',
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '윤지성', company: 'Remerge', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"*집 갈 때 혼자 가야하는 내향형이라 모임 참여를 결정하는 게 쉽지 않았는데, 같은 목표와 시선을 가진 분들과 좋은 인사이트 공유하고 따뜻한 시간 보내고 싶습니다! 프로덕트 마케팅으로 커리어를 확장시키고 싶어 ..."라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "두꺼운 [마케팅 설계자] 책에서 어떤 프로덕트/서비스를 판매하는 회사이든 결국 가장 중요한 하나로 집약되는 것이 ‘유저\' \'소비자\' 즉, \'사람\'이라는 생각..."라는 배움을 얻었습니다.', fourL: '2회차: "두꺼운 [마케팅 설계자] 책에서 어떤 프로덕트/서비스를 판매하는 회사이든 결국 가장 중요한 하나로 집약되는 것이 ‘유저\' \'소비자\' 즉, \'사람\'이라는 생각...". 앞으로 시도하고 싶은 것: "책을....... 완독하고 참여하기......... 🙂‍↕️ ​ ​ @송선혜_마케팅디깅".',
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '황성준', company: '바이트댄스', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"-제가 담당한 고객에 대해 더 깊이 있게 이해하고자 등록하게 되었습니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "서로 다른 업종에서 마케터가 하는 고민의 넓이와 깊이를 알게 된 것 같습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "서로 다른 업종에서 마케터가 하는 고민의 넓이와 깊이를 알게 된 것 같습니다.". 2회차: "마케팅설계자 책에서 퍼널 기빈으로 유저를 끌어오는 개념이 인상깊었어요.". 앞으로 시도하고 싶은 것: "다음번 세션에는 꼭 책 읽고 오겠습니다! ​ ​".',
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '김한나', company: 'LG전자', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"-입사 후 7년동안 B2B 시스템에어컨 영업만 하다가, 마케팅 기획 업무에 관심이 생겨 작년 브랜드 커뮤니케이션 담당으로 작년 이동했습니다. 아직 브랜딩의 세계는 무긍무진하고, 배울게 너무 많은것 같습니다. 회..."를 위해 다시 돌아온 시즌입니다.',
            fourL: '2회차: "좋았던 점 다양한 분야의 생생한 얘기를 들을 수 있어서 좋았습니다:) *접화군생 브랜드는 영웅이 아니다. 영웅은 고객이고, 브랜드가 하는 역할은 영웅이 맞닥...". 앞으로 시도하고 싶은 것: "시도해보고 싶은 것 프레임워크를 모델링 한 다음 나만의 제품과 나만의 말로 바꾸기 시스템에어컨 정기조사 자료 확인하기 오늘의집 고객 데이터...".',
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '이지현', company: '네이버웹툰', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '마케팅디깅 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '이태희', company: 'HuskyFox', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"오랜 기간 브랜드 전략기획 일을 하면서, 다양한 클라이언트를 설득하는 과정에서 실제 데이터와 성과를 다루는 마케팅 영역에 대한 니즈가 생겼습니다. 관련된 스터디를 하고 싶다고 생각만 하며 미뤄두고 있었는데, 이..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "막연하게만 생각하던 마케팅과 마케터에 대한 생각들을 문자로 정리하면서 듣게 되니 더 이해하기 좋았습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "막연하게만 생각하던 마케팅과 마케터에 대한 생각들을 문자로 정리하면서 듣게 되니 더 이해하기 좋았습니다.". 2회차: "마케터의 시선으로 고객을 바라보고, 어떻게 고객의 니즈를 충족시키기 위해 노력할 수 있을지 배울 수 있었습니다.". 앞으로 시도하고 싶은 것: "책을 읽고 \'알맹이\'를 건지기 위해 톺아보고, 체화하는 습관을 들이면 좋을 것 같습니다. ​".',
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
        { name: '임성우', company: '삼성전자', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"-&gt; 6년차이지만 아직 마케팅을 잘 모르겠습니다. 마케팅에 대해 이해하고, 마케팅 업무에 몸담은 분들의 이야기를 들으면서 스스로의 업무 방식에 대해 고찰해보고 성장하고자 이 마케팅디깅에 참가하게 됐고, 목..."를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 마케팅디깅(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'CMO씽킹', track: 'Horizontal 트랙', desc: '마케팅 리더의 사고방식으로 확장' },
              { name: '팔리는경험', track: 'Enrichment 트랙', desc: '마케팅에서 세일즈, 고객 경험까지 연결' }
            ]
          }
         },
      ]
    },
    {
      name: '소통의기술',
      partner: { name: '박민우', company: '보이스랩' },
      schedule: '토 10:30-13:00',
      dates: ['3/7', '3/21', '4/4', '4/18', '5/2', '5/16'],
      members: [
        { name: '송서현', company: '서울특별시청', reg: '첫등록', attendance: [true, true, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '소통의기술 팀에서 첫 시즌을 함께하고 있습니다. 세션을 통해 "스스로에 대해 생각해보게 되서 좋았습니다. 다른 분들 얘기를 들으면서 저는 어떤 사람인지 더 생각해보게 된 것 같습니다."라는 배움을 얻었습니다.',
            fourL: '1회차: "스스로에 대해 생각해보게 되서 좋았습니다. 다른 분들 얘기를 들으면서 저는 어떤 사람인지 더 생각해보게 된 것 같습니다.". 2회차: "다른 분들의 얘기를 들으면서 리더의 언어도 색다른 시각으로 볼수 있었습니다.". 앞으로 시도하고 싶은 것: "마침표를 물음표로 바꾸는 연습을 많이 해봐야겠습니다.".',
            nextSeason: '이번 시즌 소통의기술(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '소통을 설득의 관점에서 한 단계 깊이 파고듭니다' },
              { name: '고급진영어', track: 'Enrichment 트랙', desc: '영어로도 같은 깊이의 소통을 할 수 있도록' }
            ]
          }
         },
        { name: '김다영', company: '(주)다다씨앤씨', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '소통의기술 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 소통의기술(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '소통을 설득의 관점에서 한 단계 깊이 파고듭니다' },
              { name: '고급진영어', track: 'Enrichment 트랙', desc: '영어로도 같은 깊이의 소통을 할 수 있도록' }
            ]
          }
         },
        { name: '서지희', company: '신젠타코리아', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '소통의기술 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 소통의기술(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '소통을 설득의 관점에서 한 단계 깊이 파고듭니다' },
              { name: '고급진영어', track: 'Enrichment 트랙', desc: '영어로도 같은 깊이의 소통을 할 수 있도록' }
            ]
          }
         },
        { name: '이승원', company: 'HD현대일렉트릭', reg: '재등록', attendance: [false, false, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '소통의기술 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 소통의기술(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '소통을 설득의 관점에서 한 단계 깊이 파고듭니다' },
              { name: '고급진영어', track: 'Enrichment 트랙', desc: '영어로도 같은 깊이의 소통을 할 수 있도록' }
            ]
          }
         },
        { name: '전소영', company: '아모레퍼시픽', reg: '재등록', attendance: [false, true, null, null, null, null], events: [false, null, null, null] },
        { name: '홍수경', company: '대한항공', reg: '재등록', attendance: [true, true, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"회사 업무와 일상에서 소통이 점점 중요하다고 느껴져 등록하게 되었습니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "서로의 고민을 통해 내가 어렵게 느끼는 부분(스몰토크)도 다시 생각났다."라는 배움을 얻었습니다.',
            fourL: '1회차: "서로의 고민을 통해 내가 어렵게 느끼는 부분(스몰토크)도 다시 생각났다.". 2회차: "리더의 언어를 분석적으로 파악". 앞으로 시도하고 싶은 것: "리더의 언어와 성향에 맞게 장(?)을 마련해보기".',
            nextSeason: '이번 시즌 소통의기술(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '설득의구조', track: 'Enrichment 트랙', desc: '소통을 설득의 관점에서 한 단계 깊이 파고듭니다' },
              { name: '고급진영어', track: 'Enrichment 트랙', desc: '영어로도 같은 깊이의 소통을 할 수 있도록' }
            ]
          }
         },
      ]
    },
    {
      name: '저스트두잇',
      partner: { name: '김보경', company: '금은보화' },
      schedule: '화 19:30-22:00',
      dates: ['3/17', '3/31', '4/14', '4/28', '5/12', '5/26'],
      members: [
        { name: '강국주', company: '위즈팜', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"세상의 정답보다는 자기만의 \'똘끼\'로 새로운 길을 만드는 분들의 이야기에 갈증을 요즘 느껴서 왔습니다. 그런 에너지를 가진 분들과 섞여서 제 고정관념을 좀 깨보고 싶어요"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "zine라는거를 처음 알게 되었고 처음 시도 했는데 좋았어요"라는 배움을 얻었습니다.',
            fourL: '1회차: "zine라는거를 처음 알게 되었고 처음 시도 했는데 좋았어요". 앞으로 시도하고 싶은 것: "생각해보겠습니다.! 감사합니다".',
            nextSeason: '이번 시즌 저스트두잇(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '실행력에 강점 분석을 더해 방향을 잡습니다' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '실행의 속도를 AI로 끌어올립니다' }
            ]
          }
         },
        { name: '김규리', company: '프리랜서', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"건강한 자극, HFK 멤버들과 강의들을 통해서 정말 많은 인사이트와 회고를 하게되서, 이번 시즌도 신청했습니다. 그리고 이제는 뭐든 \'저스트두잇\' 하고 싶은 시기에, 새롭고 좋은 수업이 생긴 것 같아 신청했어요!"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "진을 알게 된게 오늘 참 재밌었습니다!"라는 배움을 얻었습니다.',
            fourL: '1회차: "진을 알게 된게 오늘 참 재밌었습니다!". 2회차: "그냥 수집한 단어들이라 생각했는데, 의식하진 못했지만 가장 신경쓰고 있던 단어들이었단 생각이 들었어요.". 앞으로 시도하고 싶은 것: "이야기를 어떻게 만들지, 제 생각을 더 확장하고 싶어요.".',
            nextSeason: '이번 시즌 저스트두잇(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '실행력에 강점 분석을 더해 방향을 잡습니다' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '실행의 속도를 AI로 끌어올립니다' }
            ]
          }
         },
        { name: '박소현', company: 'fadó', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"제가 하고 싶은 일을 좀더 잘 하고 싶어서. 이 8회차 모임이 끝날 즈음엔 이미 다음스텝을 한발짝 내딛었길 바라며"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "스스로의 취향의 일관성을 다시금 확인하며.. 이걸 어케 더 발전시키거나 변화시킬 수 있을지도 생각해보면 좋겠다는 생각이 들었다."라는 배움을 얻었습니다.',
            fourL: '2회차: "스스로의 취향의 일관성을 다시금 확인하며.. 이걸 어케 더 발전시키거나 변화시킬 수 있을지도 생각해보면 좋겠다는 생각이 들었다.". 앞으로 시도하고 싶은 것: "발전이든 변화든 나아가기를 화이팅".',
            nextSeason: '이번 시즌 저스트두잇(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '실행력에 강점 분석을 더해 방향을 잡습니다' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '실행의 속도를 AI로 끌어올립니다' }
            ]
          }
         },
        { name: '이홍진', company: '다이소코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '저스트두잇 팀에 다시 돌아온 시즌입니다.',
            fourL: '2회차: "생각의 전개를 펼치는 방법". 앞으로 시도하고 싶은 것: "다음시간을 기대합니다!".',
            nextSeason: '이번 시즌 저스트두잇(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '실행력에 강점 분석을 더해 방향을 잡습니다' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '실행의 속도를 AI로 끌어올립니다' }
            ]
          }
         },
        { name: '유희경', company: '매일경제신문', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"평소 생각이 많고 행동력이 약해서 많은 아이디어를 사장하거나 산재시키는 편. 일단 올해는 하나라도 \'저스트두잇\' 해보고 행동력에 근육 붙이기"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "‘진‘을 직접 만들어 보았던 경험"라는 배움을 얻었습니다.',
            fourL: '1회차: "‘진‘을 직접 만들어 보았던 경험". 1회차: "확장된 생각을 자신만의 세계로 정의 내리는 경험".',
            nextSeason: '이번 시즌 저스트두잇(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '강점차별화', track: 'Enrichment 트랙', desc: '실행력에 강점 분석을 더해 방향을 잡습니다' },
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '실행의 속도를 AI로 끌어올립니다' }
            ]
          }
         },
      ]
    },
    {
      name: '전략가의일',
      partner: { name: '송진우', company: '우버 택시 코리아' },
      schedule: '목 19:30-22:00',
      dates: ['3/12', '3/26', '4/9', '4/23', '5/7', '5/21'],
      members: [
        { name: '강혜원', company: '바커케미칼코리아', reg: '첫등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에서 첫 시즌을 함께하고 있습니다. 세션을 통해 "호기심을 갖고 깊고 다양한 질문을 해보자. 혼자서도 일상생활에서 사고의 구조화를 통해 훈련과 체화가 가능하다. 중점과제 우선순위화는 20:80대 법칙에 의해..."라는 배움을 얻었습니다.',
            fourL: '2회차: "호기심을 갖고 깊고 다양한 질문을 해보자. 혼자서도 일상생활에서 사고의 구조화를 통해 훈련과 체화가 가능하다. 중점과제 우선순위화는 20:80대 법칙에 의해...". 앞으로 시도하고 싶은 것: "실제 업무에서 오늘 배운 7 step 프로세스 적용".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '김보정', company: '슈미트/똑똑', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"전략프레임워크는 잘 알지 못하는데 체계적인 전략이 필요할 때가 있어 답답한 와중에 너무나 적절한 팀이 있어 등록하게 되었습니다. 생각의 수준을 한 단계 끌어올리는 것이 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "에 대해서 공유해 주신 부분에서 생각할 거리가 많았습니다"라는 배움을 얻었습니다.',
            fourL: '1회차: "에 대해서 공유해 주신 부분에서 생각할 거리가 많았습니다". 2회차: "issue tree와 hypo tree로 문제를 구조화하는 방법을 배웠습니다". 앞으로 시도하고 싶은 것: "내가 회사에서 풀어야되는 주요 문제에 대해사 issue tree와 hypo tree 적용하기".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '김향주', company: '더퍼스트터치', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"&lt;전략가의 일&gt;을 통해서 전략가들은 어떤 방식으로 의사 결정을 하는지 배우고, 함께하는 분들의 다양한 관점을 경청하며 제 사고의 폭도 넓히는 것이 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "7스텝 문제 해결 과정을 알게된 점!"라는 배움을 얻었습니다.',
            fourL: '1회차: "7스텝 문제 해결 과정을 알게된 점!". 2회차: "아젠다를 미리 공표해서 주도권을 가지는 법". 앞으로 시도하고 싶은 것: "“3가지가 있는데요~!” 구조화해서 생각하기 ​".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '박명근', company: 'NVIDIA', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"몇 년전에 파트너님이 진행한 세미나에 참여한 적이 있었습니다. 전략 컨설팅 분야에서의 파트너님의 인사이트와 경험을 배우고 싶습니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "전략가의 역량은 가장 맞는 답을 찾는 것이 아니라 내 생각을 답으로 만드는 역량"라는 배움을 얻었습니다.',
            fourL: '1회차: "전략가의 역량은 가장 맞는 답을 찾는 것이 아니라 내 생각을 답으로 만드는 역량". 앞으로 시도하고 싶은 것: "문제 분석 방법에 대한 프레임워크/워크시트에 대한 이해/공부".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '박상연', company: '에피원스튜디오', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: '"스튜디오를 운영하면서 전략적으로 생각하는 힘이 필요하다고 느껴 참여하게 되었습니다. 다양한 분야에 계신 분들의 이야기를 들으며 시야를 넓히는 것이 목표입니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "우리가 생각하는 문제란?을 모두 꺼내놓고 다시 정의하는 것이 중요 (리더는 다 듣고 명확하게 판단하는 것이 중요), ‘크게 고려하지 않는다\'는 과감한 포기 ..."라는 배움을 얻었습니다.', fourL: '1회차: "우리가 생각하는 문제란?을 모두 꺼내놓고 다시 정의하는 것이 중요 (리더는 다 듣고 명확하게 판단하는 것이 중요), ‘크게 고려하지 않는다\'는 과감한 포기 ...".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '안정민', company: 'GS에너지', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에서 첫 시즌을 함께하고 있습니다. 세션을 통해 "결국은 본질(문제 정의)가 중요하다는 것. 사고의 과정에서 도움을 받기 위해 framework를 좋아하는 편인데, framework는 40~60%를 채우는데..."라는 배움을 얻었습니다.',
            fourL: '1회차: "결국은 본질(문제 정의)가 중요하다는 것. 사고의 과정에서 도움을 받기 위해 framework를 좋아하는 편인데, framework는 40~60%를 채우는데...". 앞으로 시도하고 싶은 것: "최근 담당하고 있는 AX Business 전략을 7step 문제 해결 기법 기반으로 접근 해보기, 7step 문제 해결 기법을 깊이 있게 ...".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '이정민', company: '매스프레소', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에서 첫 시즌을 함께하고 있습니다. 세션을 통해 "결국은 본질(문제 정의)가 중요하다는 것. 사고의 과정에서 도움을 받기 위해 framework를 좋아하는 편인데, framework는 40~60%를 채우는데..."라는 배움을 얻었습니다.',
            fourL: '1회차: "결국은 본질(문제 정의)가 중요하다는 것. 사고의 과정에서 도움을 받기 위해 framework를 좋아하는 편인데, framework는 40~60%를 채우는데...". 앞으로 시도하고 싶은 것: "최근 담당하고 있는 AX Business 전략을 7step 문제 해결 기법 기반으로 접근 해보기, 7step 문제 해결 기법을 깊이 있게 ...".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '이한별', company: 'LG에너지솔루션', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에서 첫 시즌을 함께하고 있습니다. 세션을 통해 "전략은 답을 찾는게 아니라 내 생각을 답으로 만드는 것."라는 배움을 얻었습니다.',
            fourL: '1회차: "전략은 답을 찾는게 아니라 내 생각을 답으로 만드는 것.". 앞으로 시도하고 싶은 것: "곧바로 답이 안나오는 문제를 마주했을때 문제를 재정의해보기".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '홍아람', company: 'Apex dynamic', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"좋은 insight과 성장을 갈망하는분들과 좋은 시너지 효과를 내며 성장하고싶습니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "MOCK meeting approach 그리고 말하는 전략. 3."라는 배움을 얻었습니다.',
            fourL: '2회차: "MOCK meeting approach 그리고 말하는 전략. 3.".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '김유일', company: '테크트로닉인더스트리즈코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에 다시 돌아온 시즌입니다. 세션을 통해 "어렵게 느껴졌던 전략이라는 단어가 조금은 친숙하게 느껴지기 시작했다. 문제정의의 중요성을 다시 한 번 실감."라는 배움을 얻었습니다.',
            fourL: '1회차: "어렵게 느껴졌던 전략이라는 단어가 조금은 친숙하게 느껴지기 시작했다. 문제정의의 중요성을 다시 한 번 실감.". 2회차: "문제정의 과정은 전략적 협상과 비슷한 과정이다". 앞으로 시도하고 싶은 것: "매일의 업무에 적용해 보기, 관련 서적 찾아서 읽어보기 -".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '김재연', company: '대한항공', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"회사 동기 추천으로 작년 여름에 경영브릿지를 한 시즌 들었고, 이번에 다시 참여하게 되었습니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "전략만큼이나 실행이 중요함. 빠르게 결정에 20, 실행에 80. 모든 조직원이 문제에 대해 이해하고 동일하게 정의하는 것이 중요. 리더는 무엇을 안할지 선택..."라는 배움을 얻었습니다.',
            fourL: '1회차: "전략만큼이나 실행이 중요함. 빠르게 결정에 20, 실행에 80. 모든 조직원이 문제에 대해 이해하고 동일하게 정의하는 것이 중요. 리더는 무엇을 안할지 선택...". 2회차: "8:2법칙을 잊지 않기. 중요한 것에 집중 &amp; 가지치기.". 앞으로 시도하고 싶은 것: "호기심의 중요성. 좋은 질문&amp;다양한 시각의 생각을 통해 좋은 인사이트를 얻을 수 있음. 구조화해서 말하고 생각하기 연습. 이를 통해...".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '박승표', company: '스케일업스쿼드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에 다시 돌아온 시즌입니다. 세션을 통해 "새로 배우거나, 다시 깨닫게 된 부분 / 전략은 뭔가 크거나 어마무시하다기 보다, 현상황에서 최적의 수를 찾아가는 과정일 수 있다. 이는 답이기 보다 과정이..."라는 배움을 얻었습니다.',
            fourL: '1회차: "새로 배우거나, 다시 깨닫게 된 부분 / 전략은 뭔가 크거나 어마무시하다기 보다, 현상황에서 최적의 수를 찾아가는 과정일 수 있다. 이는 답이기 보다 과정이...". 앞으로 시도하고 싶은 것: "오늘을 바탕으로 시도해보고 싶은 것 / 회사 내 문제정의에 공들이고 있지만 방향성을 설명해도 포지션이나 레벨에 따라 이해도가 다를 것으로 ...".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '이수림', company: '오뚜기', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '이은혁', company: '삼양홀딩스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"이제 기획을 전략에 대한 관점과 프레임을 배우고 싶습니다~~"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "책임은 실행자가 아닌, 결정권자! 언더독도 잘하는 거 하나쯤은! 그러니 전략을 통해 돌파구를 만들어 나가야 한다. 조직에서 롱런하기 위해 기대수준관리도 중요..."라는 배움을 얻었습니다.',
            fourL: '1회차: "책임은 실행자가 아닌, 결정권자! 언더독도 잘하는 거 하나쯤은! 그러니 전략을 통해 돌파구를 만들어 나가야 한다. 조직에서 롱런하기 위해 기대수준관리도 중요...". 2회차: "제한된 리소스에서 20:80 의 중요성. 모을수 있는 정보가 아닌 필요한 정보에 집중. Root cause.". 앞으로 시도하고 싶은 것: "Case 잡고 로직트리 연습해보기(제한된 시간 안에) ​ ​".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '이정은', company: '필더필', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에 다시 돌아온 시즌입니다. 세션을 통해 "전략이 잘 됐다, 잘못 됐다는 때에 따라서 보는 관점에 따라서 다를 수 있다. → 그래서 결국 정했으면 끝까지 해봐야 한다(?? 이건 아직 풀리지 않는 의문..)"라는 배움을 얻었습니다.',
            fourL: '1회차: "전략이 잘 됐다, 잘못 됐다는 때에 따라서 보는 관점에 따라서 다를 수 있다. → 그래서 결국 정했으면 끝까지 해봐야 한다(?? 이건 아직 풀리지 않는 의문..)". 2회차: "설득 프레임을 먼저 제시하는 습관을 들여야겠다". 앞으로 시도하고 싶은 것: "8020 기억하자... 바다를 끓이고 있는 듯 하다 ​ ​".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '장지웅', company: '삼성바이오로직스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '전략가의일 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
        { name: '조현국', company: '오뚜기', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"\'전략\' 이라는 단어에 대한 나만의 정의를 명확하게 하는 것"를 위해 다시 돌아온 시즌입니다. 세션을 통해 ". : 전략에도 과정이 중요함. 본인만의 관점을 위한 과정이 필요"라는 배움을 얻었습니다.',
            fourL: '1회차: ". : 전략에도 과정이 중요함. 본인만의 관점을 위한 과정이 필요". 2회차: ". : 7가지 전략 프로세스. 그 중 유난히 필요한 우선순위 정하기". 앞으로 시도하고 싶은 것: "내일 아침 팀 미팅 부터 생각을 구조화 해서 전달하기(당장 내일!) ​ ​".',
            nextSeason: '이번 시즌 전략가의일(Horizontal 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: '전략에 데이터 감각을 더합니다' },
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '전략을 경영 전체 관점으로 확장' }
            ]
          }
         },
      ]
    },
    {
      name: '팀오호츠크',
      partner: { name: '김재윤', company: 'HFK' },
      schedule: '일 10:30-13:00',
      dates: ['3/22', '4/5', '4/19', '5/3', '5/15', '5/31'],
      members: [
        { name: '정호준', company: '삼성전자', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '팀오호츠크 팀에서 첫 시즌을 함께하고 있습니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '김하나', company: 'HERE Technologies', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"• 자기 계발이 필요하다고 느껴질 때 어떻게 정보를 찾아보나요?(예. 네이버 블로그를 검색한다, 일단 교보문고로 향한다 등) 궁금한 정보 위주로 구글 서치합니다"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '박지원', company: 'LINE+', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"일만 하지 말고 투자공부를 해야겠다는 생각이 들었고 두 시즌을 쉬어 HFK가 그리웠습니다 :) <@U05MDV2E5BM> 주영님 제 추천에 답해주셔서 영광이에요:yellow_heart: 함께 많이 배우는 봄 보..."를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '신선아', company: '오아시스마켓', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"주식을 주변에서 하라고 하는데, 사실 관심이 잘 가지 않아서 관심을 갖고 공부하는 시간을 가져보고 싶습니다!"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '윤다혜', company: 'Emirates Shipping Line', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '팀오호츠크 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '이수연', company: '부산시립미술관', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '팀오호츠크 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
        { name: '이주영', company: '더플레이컴퍼니', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"어디에 저를 두는지가 참 중요하다고 생각해 선하고 건강한 분들이 있는 hfk에서 봄 시즌을 보내려고 합니다. (<@U08FZAW7DCH> 지원님, 추천해 주셔서 감사해요 :yellow_heart:) 팀오호츠크가..."를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 팀오호츠크(New Horizons 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: '경영브릿지', track: 'Vertical 트랙', desc: '글로벌 시각을 경영 전략으로 연결' },
              { name: '시니어탐구', track: 'New Horizons 트랙', desc: '특정 시장에 집중해서 딥다이브' }
            ]
          }
         },
      ]
    },
    {
      name: 'AI부사수',
      partner: { name: '이슬기', company: 'HFK' },
      schedule: '금 19:30-22:00',
      dates: ['3/13', '3/27', '4/10', '4/24', '5/8', '5/22'],
      members: [
        { name: '김준형', company: 'SK텔레콤', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: '"AI가 인간이 수시로 도와줘야 하는 도구를 서, 인간을 돕는 Agent로 임계점을 선 때라 생각합니다. 변화에 적응하고, 업무에 잘 활용함과 동시에 제 삶에 변화를 일으키고 싶어 지원하게 되었습니다"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "자동화 영역의 재정의, 가능한 영역의 범주 파악"라는 배움을 얻었습니다.',
            fourL: '1회차: "자동화 영역의 재정의, 가능한 영역의 범주 파악". 2회차: "VS code를 통해서 AI툴을 더 편하게 다룰 수 있게 됨 (제미나이 연결도 됨!) + 질문이 생긴다면, 클로드를 찾자..!".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '이다은', company: '머쉬룸컴퍼니(레디투킥)', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"◦ AI와 함께 일하고 있지만, 효율적으로 쓰지 못하고, 늘 겉핥기에서 끝나는 기분이에요. AI가 정확히 뭔지, AI의 어떤 점을 주도적으로, 똑똑하게 활용할 수 있는지 알고 싶어요"라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "세팅을 하며 하나하나 스스로 해결할 수 있다는 믿음이 생긴 것. 슬기님이 궁금한 게 있으면 AI에 물어보는 습관을 가지라고 하셨는데, 어떤 말인지 단번에 이해함."라는 배움을 얻었습니다.',
            fourL: '1회차: "사실 나는 기계치, 컴퓨터치(?) 인데 이번 계기로 느리지만 오래 동안 AI를 공부하고 싶다.". 2회차: "세팅을 하며 하나하나 스스로 해결할 수 있다는 믿음이 생긴 것. 슬기님이 궁금한 게 있으면 AI에 물어보는 습관을 가지라고 하셨는데, 어떤 말인지 단번에 이해함.". 앞으로 시도하고 싶은 것: "STAR 프레임 워크 디벨롭을 위해 클로드와 많이 이야기하고 물어보기. 그리고 내 일상과 실무에 어떤 걸 사용할지 깊이 고민해보기".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '강주현', company: 'NE능률', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"- 작년 강점차별화 팀에 있을 때만 해도 AI 활용에 대한 압박이 이렇게 크지 않았는데, 몇 달 사이에 모든 것이 바뀌었습니다. 아직 AI 도구를 겉핥기로 쓰고 있어서, 이번에 뭐라도 하나 제대로 알고 깊이 있..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드코드에서 말하는 에이전트, 스킬의 정체와 실제 사례를 보며 조금이나마 개념을 잡을 수 있었음"라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드코드에서 말하는 에이전트, 스킬의 정체와 실제 사례를 보며 조금이나마 개념을 잡을 수 있었음". 2회차: "클로드코드, VS Code, GitHub 등의 상관관계를 이해하고, 뭐든 클로드코드에 물어보면 해결된다는 사실을 깨달았어요(설마 했는데...).". 앞으로 시도하고 싶은 것: "최근 가장 고민거리인 데일리 뉴스클리핑 작업 자동화를 클로드코드와 함께 해결하고 싶습니다!\\".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '금가람', company: '우리밀', reg: '재등록', attendance: [false, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: 'AI부사수 팀에 다시 돌아온 시즌입니다. 세션을 통해 "막히면 끊임없이 클로드에게 물어보기. 나만의 스킬셋을 여러개 가져가야겠다."라는 배움을 얻었습니다.',
            fourL: '2회차: "막히면 끊임없이 클로드에게 물어보기. 나만의 스킬셋을 여러개 가져가야겠다.". 앞으로 시도하고 싶은 것: "실제 업무를 자동화할 수 있을 때까지. STAR 디벨롭 하겠습니다.".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '김경아', company: '(주)트립레이어', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: '"많은 부분의 일을, AI와 같이 하고 있습니다. 어떻게 하면 좀 더 효율적으로 사용할 수 있는지 배우고 싶습니다. 현재는 번역과 서칭, 교정 등의 업무를 주로 하고 있고, 정말 사수처럼 물어보기만 하고 ..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드와 오피디언은 처음 들어봤는데, 저도 설치해서 빨리 테스트해보고싶어요. 3."라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드와 오피디언은 처음 들어봤는데, 저도 설치해서 빨리 테스트해보고싶어요. 3.". 2회차: "혼자서 하기 힘든 초기 세팅들을 배워서 좋았습니다. 그리고 클로드에게 물어보기 &amp; 쪼기". 앞으로 시도하고 싶은 것: "STAR에 대해서 좀 더 명확하게 정리하고 가벼운 단계들을 2주마다 실현하고 싶습니다.".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '김지애', company: '경기도어린이박물관', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"효율적 workspace, 자동화 등"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드 코드 사용한 업무업자동화 실제"라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드 코드 사용법 입문". 2회차: "클로드 코드 사용한 업무업자동화 실제". 앞으로 시도하고 싶은 것: "잘 활용하기 위한 토대 쌓기 데이터, 각종 프로그램 설치와 연결".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '김지현', company: '몽베스트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null] },
        { name: '김화진', company: '현대해상', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI부사수 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '박경문', company: '금융감독원', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"일상생활 그리고 업무에 AI를 잘 활용하고 싶어요. 새로운 내용을 파악해야할 때 AI를 활용하면 처음에 감 잡기가 좋은 것 같아요. 그리고 여러 AI 활용 사례를 바탕으로 AI를 활용하는 폭을 넓히고 싶어요"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "요즘 ‘AI 에이전트‘라는 말이 자주 나오는데 스킬 셋을 모은게 클로드코드의 에이전트라고 설명해주셔서 에이전트 개념이 조금 더 친숙하게 다가왔습니다!"라는 배움을 얻었습니다.',
            fourL: '1회차: "요즘 ‘AI 에이전트‘라는 말이 자주 나오는데 스킬 셋을 모은게 클로드코드의 에이전트라고 설명해주셔서 에이전트 개념이 조금 더 친숙하게 다가왔습니다!". 앞으로 시도하고 싶은 것: "저만의 스킬셋을 만들어보고 싶어요!".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '박정연', company: 'TD7VII INC', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"회사의 운영업무를 좀 더 효율화해 업무에서 현타를 느끼는 지점들을 최대한 제거하고 싶습니다. 또한 현재 사수 없이 일하고있기 때문에, HFK에서 좋은 멘토 혹은 그냥 좋은 분들과 많이 연결되고 싶습니다:rela..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드 코드로 호환이 잘 되는 프로그램들 (슬랙, 옵시디언, 아임웹)"라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드 코드로 호환이 잘 되는 프로그램들 (슬랙, 옵시디언, 아임웹)". 앞으로 시도하고 싶은 것: "비자 업무 조금이라도 간소화/효율화 해보기 (제일먼저 개인서류 파일명 정리, 정리된 파일명 기반으로 서류 체크리스트 생성)".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '신상호', company: '(주)에어코드', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI부사수 팀에 다시 돌아온 시즌입니다. 세션을 통해 "STAR 프레임워크 영역으로 현행 업무를 각 영역별로 5가지에서 시작해 10가지로 다시 15가지까지 구분해 보니, 구성원들에게 무엇을 언제 assign할 지..."라는 배움을 얻었습니다.',
            fourL: '2회차: "STAR 프레임워크 영역으로 현행 업무를 각 영역별로 5가지에서 시작해 10가지로 다시 15가지까지 구분해 보니, 구성원들에게 무엇을 언제 assign할 지...".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '유효영', company: '퍼플식스스튜디오', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"AI를 제대로 활용하기 하던대로에 익숙해서 생각보다 일하는 방식 바꾸는 것이 쉽지 않아요"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드 코드의 실체(?)를 알게되니 반복적인 회사 업무에서 ai를 어떻게 활용할지 감이 잡히는 것 같아요."라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드 코드의 실체(?)를 알게되니 반복적인 회사 업무에서 ai를 어떻게 활용할지 감이 잡히는 것 같아요.". 2회차: "이해하지 못해도ㅠ 일단 해보는 것".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '이세림', company: 'SK텔레콤', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"작년 한해는 AI 키워드만으로 뜨거웠다면, 올해는 그 키워드가 “그래서 이걸 어떻게 잘 써서 생산성을 높일건데?”라는 질문으로 발전한 것 같습니다. 업의 영역에 한발 빨리 에이전트를 도입한 분들과 노하우를 공유..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "Agent로 완전한 자동화를 이루기는 현업/실무적으로 어려움. 반자동 스킬을 많이 만들고, 검토/검수 과정을 거치는 게 바람직함 (고민하고 있던 포인트였는데..."라는 배움을 얻었습니다.',
            fourL: '1회차: "Agent로 완전한 자동화를 이루기는 현업/실무적으로 어려움. 반자동 스킬을 많이 만들고, 검토/검수 과정을 거치는 게 바람직함 (고민하고 있던 포인트였는데...". 2회차: "미뤄왔던 프로그램 설치를 함께 해볼 수 있어서 좋았고, (시작이 반이다!) STAR 프레임워크를 집중해서 써보는 시간이 특히 좋았어요. 제가 실제로 노트북으...". 앞으로 시도하고 싶은 것: "토큰 부족 알림 꼭 보기!".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '이수정', company: '아웃사이트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"AI를 소극적으로 활용하고 있습니다. 부딪히는 만큼 얻을 수 있는 시장인데 혼자 부딪히다보니 정보에 한계를 느끼고 있어요. 교류하면서 다양한 ai 활용을 경험해보고 싶습니다"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "자동화로 ai를 쓸 수 있다는 전설같은 이야기만 듣고, 실제 어떻게 구현하는지는 몰랐는데 이번 강의를 통해 데이터 전처리 (.md)가 첫걸음이라는 것을 배웠..."라는 배움을 얻었습니다.',
            fourL: '1회차: "자동화로 ai를 쓸 수 있다는 전설같은 이야기만 듣고, 실제 어떻게 구현하는지는 몰랐는데 이번 강의를 통해 데이터 전처리 (.md)가 첫걸음이라는 것을 배웠...". 2회차: "ai는 상상하는 만큼 쓸 수 있는 거 같아요. STAR 라는 프레임워크를 통해 해야할 일의 기준점을 잡은 부분도 좋았습니다.". 앞으로 시도하고 싶은 것: "맥스 16만원 어치 고용비 회수할만큼 많이 쓰기".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '이지은', company: 'CJ제일제당', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"-얼마 전에 팀원들과 3일밤을 새서 자료를 만든 적이 있어요. 아주 기초적인 데이터 가공에만 이틀밤을 날렸는데, 이럴때 내가 원활하게 AI를 사용할 수 있었다면 팀원들이 밤 새서 일하지는 않았을텐데..라는 강렬..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "클로드코드랑 클로드랑의 차이(아이고야..) 옵시디언, 상호 연동할수 있는 것들의 플랫폼 연결성을 알게 되었다!"라는 배움을 얻었습니다.',
            fourL: '1회차: "클로드코드랑 클로드랑의 차이(아이고야..) 옵시디언, 상호 연동할수 있는 것들의 플랫폼 연결성을 알게 되었다!". 2회차: "캘린더 일정 반영 해달랬더니 시리한테 말는게 더 쉬울란 대답을 듣고 현타가 옴. 무엇이 더 자동화인가". 앞으로 시도하고 싶은 것: "일단 지금 목표는 회사 컴퓨터를 클로드코드로 최적화해서 오늘 분석한 star 바탕으로 작업 만들어보기. 2주간 도전".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '정나리', company: 'LVMH BEAUTY', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI부사수 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '허재영', company: '현대자동차', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"온 사방에서 AI 로 세상을 뒤집어 놓겠다 는데 제 삶은 아직 뒤집히지 않은 것 같았습니다. 확실한 변화를 실행해야 할 것 같아 등록했으니 이번 시즌에서 next step 을 발견할 수 있길!"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "에이전트를 내가 만드는 것이 어렵지 않구나. 다만 시간과 초기 노력이 필요할 뿐"라는 배움을 얻었습니다.',
            fourL: '1회차: "에이전트를 내가 만드는 것이 어렵지 않구나. 다만 시간과 초기 노력이 필요할 뿐". 2회차: "AI와 대화하는 것도 생각보다 말을 잘 듣지 않는 느낌? 이 친구가 찰떡같이 알아 듣게 하기 위한 나의 스킬이 더 필요한 것 같다 (사람보다 인정은 빠르지만...". 앞으로 시도하고 싶은 것: "회사일보다 내 개인적인 일을 더 빨리 해봐야지. 남편 일손 도와주기".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
        { name: '황인중', company: '금화 세무회계', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"업무 효율화 및 자동화"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "두루뭉실하게 알고 있던 것을 실제 어떻게 사용하고 있는지"라는 배움을 얻었습니다.',
            fourL: '1회차: "두루뭉실하게 알고 있던 것을 실제 어떻게 사용하고 있는지". 앞으로 시도하고 싶은 것: "업무에 어떤 부분에 사용하면 좋을지 생각을 해봐야겠습니다.".',
            nextSeason: '이번 시즌 AI부사수(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI핸즈온', track: 'Enrichment 트랙', desc: '기초를 보완하며 병행 수강' },
              { name: '넘버앤센스', track: 'Horizontal 트랙', desc: 'AI와 데이터 분석의 시너지를 만듭니다' }
            ]
          }
         },
      ]
    },
    {
      name: 'AI핸즈온',
      partner: { name: '이 림', company: '이미커피' },
      schedule: '토 10:30-13:00',
      dates: ['3/14', '3/28', '4/11', '4/25', '5/9', '5/30'],
      members: [
        { name: '김혜림', company: '카카오페이', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에서 첫 시즌을 함께하고 있습니다.',
            fourL: '1회차: "실제 적용 사례를 소개해주셔서 이해가 빨랐음". 2회차: "외부 API까지 활용 극대화".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '민세원', company: '(주)트레이', reg: '첫등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"업무에 AI 툴을 더 적극적으로 활용하고 싶지만 방향을 잡기가 쉽지 않았습니다. 다양한 분야의 사람들과 인사이트를 나누며 AI 활용 역량을 키우고, 특히 AI 에이전트나 업무 워크스페이스 같은 새로운 방식의 일..."라는 목표로 첫 시즌을 시작했습니다. 세션을 통해 "노션으로도 함께 연동해서 익숙한(?) 비주얼로 자료 확인하기"라는 배움을 얻었습니다.',
            fourL: '2회차: "노션으로도 함께 연동해서 익숙한(?) 비주얼로 자료 확인하기". 앞으로 시도하고 싶은 것: "새로운 스킬들 만들어보기!".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '김경아', company: '아이스크림아트', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null] },
        { name: '김정민', company: '아모레퍼시픽', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: '"클로드 코드 좀 더 잘 써보기"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '김준영', company: 'SKT', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, true, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다. 세션을 통해 "노션과의 연동 방식 및 스킬 생성"라는 배움을 얻었습니다.',
            fourL: '2회차: "노션과의 연동 방식 및 스킬 생성". 앞으로 시도하고 싶은 것: "워크스이스를 나만의 것으로 커스텀!".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '김효현', company: '나인바운드랩', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"작년 11월, HFK에서 주최한 AI 컨퍼런스에서 이림 님을 처음 뵈었습니다. 지난 시즌 수강생이었던 남편의 강력 추천으로 이번 ‘AI 핸즈온’을 신청하게 되었는데, 수강 신청 당일 오전에 티켓팅하듯 기다렸던 ..."를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '박윤승', company: '카카오페이', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '박재희', company: '이노크라스', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다.',
            fourL: '2회차: "자연어로도 가능하구나..!!".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '신승환', company: '위펀', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '신현주', company: '주한캐나다대사관', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"클로드 이해 및 활용"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '오지영', company: '버핏서울', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다. 세션을 통해 "에이전트 셋업하기. 이제 준비된 느낌! 가보자고"라는 배움을 얻었습니다.',
            fourL: '1회차: "구체적인 가능성을 확인". 2회차: "에이전트 셋업하기. 이제 준비된 느낌! 가보자고". 앞으로 시도하고 싶은 것: "중간중간 들으며 생각났던 아이디어 구체화 해보기!!!".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '이다혜', company: '롯데e커머스', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '이슬기', company: '쿠팡', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, null, null, null] },
        { name: '이정준', company: '메모리올', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"AI 이야기는 너무 많이 듣지만 실제로 활용을 잘 못하는 것 같아서, *업*무에 어떻게 활용해야 할지 배우고 체계적으로 정리해보고 싶습니다"를 위해 다시 돌아온 시즌입니다.',
            fourL: '1회차: "AI를 대하는 마인드셋". 앞으로 시도하고 싶은 것: "업무 뿐 아니라 일상에도 AI며들기".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '이파라', company: '-', reg: '재등록', attendance: [false, null, null, null, null, null], events: [null, true, null, null],
          report: {
            checkpoint: '"저의 일상 및 업무 속에서 무엇이 AI로 전환될 수 있을지를 탐구해보고 싶습니니다"를 위해 다시 돌아온 시즌입니다.',
            fourL: null,
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '전신애', company: '비아트리스코리아', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: '"지난 세미나만에서 눈이 번쩍 뜨여 나만의 ai 스킬을 한단계 업그레이드 시키고 싶어요. 결과적으로는 나만의 투자 비서 구축"를 위해 다시 돌아온 시즌입니다. 세션을 통해 "시스템 구축과 context 에 대한 관리"라는 배움을 얻었습니다.',
            fourL: '1회차: "시스템 구축과 context 에 대한 관리". 2회차: "나만의 워크 스페이스 세팅". 앞으로 시도하고 싶은 것: "다른 API들이 연동 되었을 때 또 어떻게 변화할지 궁금합니다.".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '정서연', company: 'CJ 올리브영', reg: '재등록', attendance: [true, null, null, null, null, null], events: [null, null, null, null],
          report: {
            checkpoint: 'AI핸즈온 팀에 다시 돌아온 시즌입니다. 세션을 통해 "새로운 워크프레임을 시작하는 첫 걸음"라는 배움을 얻었습니다.',
            fourL: '2회차: "새로운 워크프레임을 시작하는 첫 걸음". 앞으로 시도하고 싶은 것: "혼자서 3명분 일을 할수 있는 시스템 구축".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
        { name: '조혜진', company: '-', reg: '재등록', attendance: [true, null, null, null, null, null], events: [true, null, null, null],
          report: {
            checkpoint: '"ㄴ남들도 다하는 바이브 코딩! 저도 그맛을 느껴보고 싶었습니다. *• 자기 계발이 필요하다고 느껴질 때 어떻게 정보를 찾아보나요?(예. 네이버 블로그를 검색한다, 일단 교보문고로 향한다 등)* ㄴ서점, SNS,..."를 위해 다시 돌아온 시즌입니다. 세션을 통해 "노션 연동 / 데이터 분석 후 보고서 작성"라는 배움을 얻었습니다.',
            fourL: '2회차: "노션 연동 / 데이터 분석 후 보고서 작성". 앞으로 시도하고 싶은 것: "과거 누적 개인 데이터 분석/정리".',
            nextSeason: '이번 시즌 AI핸즈온(Enrichment 트랙)의 경험을 바탕으로, 다음 시즌에 도전해볼 팀을 제안합니다.',
            nextTeams: [
              { name: 'AI부사수', track: 'Enrichment 트랙', desc: '다음 단계로, 실전 활용과 자동화까지' },
              { name: '커리어기록', track: 'Realignment 트랙', desc: 'AI를 활용해 자기 경험을 콘텐츠로 만듭니다' }
            ]
          }
         },
      ]
    },
  ]
};
