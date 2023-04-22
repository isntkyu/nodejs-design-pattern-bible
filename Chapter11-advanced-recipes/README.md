## 11-1 비동기적으로 초기화된 컴포넌트의 문제

1. 문제상황

DB 서버와의 연결 및 핸드쉐이크가 성공적으로 완료된 후에만 API 요청을 수락해야한다.
따라서 초기화가 완료될 떄까지 쿼리 등 기타 명령이 불가능.

**로컬초기화 확인**
API 호출하는 함수에 전에 모듈이 초기화에 성공했는지 확인하는 조건을 넣음.

```js
if (!db.connected) {
  await once(db, 'connected)
}
```

코드의 부담이 사용자가 아닌 라이브러리 공급자에 있다.

**지연 시작**
초기화 함수가 완료되면 .then()=> 코드실행
비동기 초기화되어야하는 컴포넌트를 미리 알아야 한다는 단점
해결책은 모든 서비스가 초기화될 것을 기다리고 앱 시작. 그러나 상당한 지연

---

세 번째 대안

### 사전 초기화 큐

초기화 함수부터 쿼리 실행함수를 차례로 큐에 넣고 선입선출 실행.

초기화가 되었는지 확인안해도됨.

초기화 완료/비완료 상태를 관리하며,
함수들은 초기화 상태에 대한 걱정 없이 본인 자체의 로직구현만 신경쓰기.

큐에 추가하는 역할을 하는 모듈을 따로 구현.

---

## 11-1-3 실전에서

방금 소개한 패턴은 mongoose에서 사용중.
몽구스는 디비 커넥션을 기다릴 필요가 없다.
이는 DX(개발자 경험)을 제공하려는 API의 필수사항이다.
이외의 postgreSQL등 다양한 데이터베이스 드라이버에서 사용됨.