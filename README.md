# node.js 비동기 학습

## 1) 비동기 다이어그램

![diagram](./img/syncasync.drawio.png)

### 결론

- 동기 함수: 직접 처리
- 비동기 함수: 처리를 요청, 마무리는 콜백 함수로!

## 2) 실습 코드
### 1. sync vs async
- [sync](./sync.js)
- [longSync](./longSync.js)
- [async](./async.js)

### 2. 이상한 async
- [asyncStrange](./asyncStrange.js)
- [asyncWithLongSync](./asyncWithLongSync.js)

### 3. async의 순차 처리
- [asyncInOrder1](./asyncInOrder1.js)
- [asyncInOrder1WithLongSync](./asyncInOrder1WithLongSync.js)
- [asyncInOrder2](./asyncInOrder2.js)
- [asyncInOrder2WithLongSync](./asyncInOrder2WithLongSync.js)

### 4. async의 순차 처리 현실적인 예시
- [asyncFileIo](./asyncFileIo.js)
- [asyncFileIoInOrder](./asyncFileIoInOrder.js)

### 5. 콜백 지옥과 해결 방법
- [callbackHell](./callbackHell.js)
- [promise](./promise.js)
- [promiseAsyncAwait](./promiseAsyncAwait.js)
