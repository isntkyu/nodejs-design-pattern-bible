## 메시징과 통합 패턴

### 메시지 유형

메시지는 서로 다른 소프트웨어 컴포넌트를 연결하는 수단.

- 명령 메시지

직렬화된 명령 객체.  
RPC 시스템, rest API(http) 등.

- 이벤트 메시지

웹소켓.  
시스템의 모든 노드를 동일한 페이지에 머물 수 있게 함.

- 문서 메시지

DB 쿼리 결과 전송.

---

#### 비동기 메시징, 큐 및 스트림

*데이터 스트림*, 즉 로그는 메시지가 도착할 때 해당 기록에 액세스할 수 있는 데이터구조.  
메시지가 검색되거나 처리될 때 제거되지 않음.  
하나 이상의 소비자가 스트림을 공유 가능.

브로커 대신 피어투피어를 사용하는 이유가 있다면,
- 브로커는 단일 장애 지점
- 확장시 브로커 확장없이 노드만 확장하면 됨.
- 통신 대기 시간 단축

---

### 13-2 발행/구독 패턴

옵저버패턴  

---

#### 13-2-3

zeroMQ 를 사용한 P2P(peer to peer) 아키텍처 구현(브로커 redis 제거)

---

#### 13-2-4 큐를 통한 안전한 메시지 전달

- 최대 한 번: 실행 후 삭제
- 적어도 한 번: 중복 발생 가능
- 정확히 한 번: 한 번만 수신. (영구 구독자 패턴)

*AMQP*

개방형 표준 프로토콜. (rabbitMQ)

- 큐
  - 푸시/풀
  - 영구: 브로커가 시작되면 큐가 자동 생성. 내용보존은 아님. 지속성으로 표시된 메시지만 저장복원
  - 독점: 하나이 특정 가입자 연결에만 바인딩. 연갈이 닫히면 삭제
  - 자동삭제: 마지막 구독자가 연결을 끊을 떄 대기열 삭제
- 익스체인지: 메시지가 게시됨.
- 바인딩: 익스체인지에서 도착하는 메시지를 필터링

---

#### 13-2-5 스트림을 통한 안정적인 메시징

레디스 스트림

스트림은 순서가 지저오디고 추가 전용인 영구적 데이터 구조(log)
큐와 달리 소비될 때 자동으로 삭제되지 않습니다. 데이터 저장소와 더 비슷함.

> 메시지를 일괄 처리하거나 과거 메시지의 상관관계를 찾아야 할 수도 있는 순차적인 데이터 처리에 용이

아파치 카프카. 키네시스.

간단하게는 레디스 스트림.


---

## 13-3 작업 배포 패턴

원격 작업자 사용하기.

작업 분산 메시징 패턴.

경쟁소비자, 팬아웃배포, 벤틸레이터 패턴이라고 함.

핵심 키워드: 단방향 비동기 통신

생산자 구현: n항 트리 + BFS