## 11-2 비동기식 요청 일괄 처리 및 캐싱
<img width="617" alt="스크린샷 2023-04-20 오후 11 06 56" src="https://user-images.githubusercontent.com/114394976/233391912-6b020df8-258b-44c0-837a-adbf0c0361c4.png">

### 응답 속도

#### 한 요청

> Server started
> Processing query: ?product=book
> totalSales() took: 548ms}
> Processing query:
> totalSales() took: 439ms}

#### LocalTest

> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> 200 { product: 'book', sum: 1012558 }
> All completed in: 6858ms
