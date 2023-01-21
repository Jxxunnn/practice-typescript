# CRUD using TypeScript / React

- npm install vite@latest
- typescript / react

## 사용자 입력 처리하기

- 한 줄 입력 처리
- 여러 줄 입력 처리
- 선택 박스 입력 처리
- 사용자 입력 데이터 핸들링

## DOM 조작하기

- 일기 저장 버튼을 클릭했을 때 작성자와 일기가 정상적으로 입력되었는지 확인하고 아니라면 focus하기

## 리스트 렌더링하기

- 배열을 이용하여 List 렌더링 해보고 개별적인 컴포넌트로 만들어보기

## 리스트 데이터 추가하기

- 배열을 이용한 List에 아이템을 동적으로 추가해보기
- React처럼 생각하기

## 리스트 데이터 삭제하기

## 리스트 데이터 수정하기

- 배열을 이용한 List에 아이템을 동적으로 수정해보기
- 조건부 렌더링

## Lifecycle 제어하기

- mounting
- updating
- unmounting

## API 호출하기 using jasonplaceholder

- useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터의 초기값으로 이용하기

<!-- {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  } -->

## 최적화 1 - 연산 결과 재사용 using useMemo

- 현재 일기 데이터를 분석하는 함수를 제작하고 해당 함수가 일기 데이터의 길이가 변화하지 않을 때 값을 다시 계산하지 않도록 하기

`Memoization`
이미 계산 해 본 연산 결과를 기억해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억해두었던 데이터를 반환시키게 하는 방법.

ex) 컴포넌트 내부에서 계산해야하는 값이 for문을 100000번 돌 때

```js
const getDiaryAnalysis = useMemo(() => {
  console.log("일기 분석 시작");
  const goodCount = data.filter((it) => +it.emotion >= 3).length;
  const badCount = data.length - goodCount;
  const goodRatio = (goodCount / data.length) * 100;
  return [goodCount, badCount, goodRatio];
}, [data.length]);

const [goodCount, badCount, goodRatio] = getDiaryAnalysis;
```

-> useMemo는 값을 반환한다.

## 최적화 2 - 컴포넌트 재 사용 using React.memo

- 함수 컴포넌트에게 업데이트 조건을 건다.
- 성능 이슈가 생긴다면 전역상태관리를 쓰거나 React.memo 처리를 하거나 컴포넌트 합성을 적절하게 이용하자.
- 객체는 isEqul 함수로 props 비교를 해주어야 한다.

```js
const CounterB = ({ obj: { count } }: { obj: { count: number } }) => {
  useEffect(() => {
    console.log(`Counter B Update - count: ${count}`);
  });
  return <div>{count}</div>;
};

const areEqual = (
  prevProps: {
    obj: { count: number },
  },
  nextProps: {
    obj: { count: number },
  }
) => {
  return prevProps.obj.count === nextProps.obj.count ? true : false;
};

const MemoizedCounterC = React.memo(CounterB, areEqual);
```

```js
export default React.memo(DiaryEditor);
```

## 최적화 3 - 컴포넌트 & 함수 재사용하기 using useCallback

- 무한스크롤 or 어마무시한 애니메이션 등으로 인해 렉이 걸리는 현상 등 최적화가 필요한 순간에 사용.
- 디바운스 & 쓰로틀링에 필요
- useCallback은 참조 동일성을 보장함.

### setState 함수형 업데이트

```js
const onCreate: onCreateType = useCallback((author, content, emotion) => {
  const created_date = new Date().getTime();
  const newItem = {
    id: dataId.current,
    author,
    content,
    emotion,
    created_date,
  };
  dataId.current += 1;
  setData((prev) => [{ ...newItem }, ...prev]);
}, []);
```

함수가 컴포넌트가 재생성될 때 다시 생성되는 이유는 현재 state값을 참조하기 위해서이다. useCallback을 사용할 때 setState 콜백함수를 사용해주자!
항상 최신의 state를 인자를 통해 참조할 수 있게 되면서 의존성 배열을 비울 수 있게 해준다.

```js
setValue((prev) => prev + 1);
// ①-1 : C = B + 1 => 1
// ①-2 : C 를 B 에 저장

setValue((prev) => prev + 1);
// ②-1 : C = B + 1 => 2
// ②-2 : C 를 B 에 저장

setValue((prev) => prev + 1);
// ③-1 : C = B + 1 => 3
// ③-2 : C 를 B 에 저장
```

함수현 업데이트는 이렇게 업데이트된 값을 저장하기 때문에 여러번의 업데이트가 적용되어 다음 렌더링에 사용된다.

## 최적화 후기

- 무조건 렌더링을 줄인다 === 성능향상인 것은 아니다.
- 성능의 대부분은 복잡한 애니메이션이나 비동기 요청.
- props 비교연산같은 부분이 더 헤비해질 수 있음.
- props가 아예 없다면 사용한다해서 나쁠 건 없을 듯.
- 최적화가 필요없는 상황에서 미리 최적화하면 코드 복잡도 UP
- 참조 동일성을 보장해서 불필요한 렌더링을 줄이자 -> O
- 함수 생성비용이나 연산비용을 줄여야지 -> 99% 확률로 X
- 공식문서를 좀 더 보자고!

**_ 버벅거리는 모습이 보이면 최적화 hook을 적용하면 최적화가 될 까를 고민하자 _**

## 컴포넌트에서 복잡한 상태변화 로직을 분리하자 - useReducer

- onCreate 데이터 생성 상태 변화 로직,
- onEdit 데이터 수정 상태 변화 로직,
- onRemove 데이터 삭제 상태 변화 로직

-> 상태 변화 처리 함수
