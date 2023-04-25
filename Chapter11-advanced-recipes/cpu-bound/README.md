## 11-4 CPU 바운드 작업 실행

이벤트 루프에 제어권을 반환하지 않고 cpu를 잡고있는 작업

해결

- setImmediate
  - subsetSumDefer.js
- 외부 프로세스 사용
- 작업자 스레드 사용
