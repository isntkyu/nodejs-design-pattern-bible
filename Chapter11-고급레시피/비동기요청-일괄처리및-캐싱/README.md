## 11-2 비동기식 요청 일괄 처리 및 캐싱

![image](https://user-images.githubusercontent.com/56504493/227983856-cb649b6d-e0e8-45ac-9c67-33bd60915170.png)

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
