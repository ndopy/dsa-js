# 덱 (Deque)

## 개념
- **Deque**는 **Double-Ended Queue**의 줄임말로, 양쪽 끝(Front, Rear)에서 데이터의 삽입과 삭제가 모두 가능한 자료구조이다.
- 스택(Stack)과 큐(Queue)의 특성을 모두 가지고 있어, 스택처럼 사용할 수도 있고 큐처럼 사용할 수도 있다.
- 이 구현체에서는 이전에 구현한 **이중 연결 리스트(Doubly Linked List)** 를 내부 저장소로 활용하여 구현하였다.

<br/>

## 추상자료형 ADT
| 프로퍼티 / 메서드 | 시간 복잡도 | 설명 |
| --- | --- | --- |
| `addFirst(data)` | $O(1)$ | 덱의 맨 앞(Front)에 데이터를 추가한다. |
| `addLast(data)` | $O(1)$ | 덱의 맨 뒤(Rear)에 데이터를 추가한다. |
| `removeFirst()` | $O(1)$ | 덱의 맨 앞(Front)에 있는 데이터를 꺼내고(삭제하고) 반환한다. |
| `removeLast()` | $O(1)$ | 덱의 맨 뒤(Rear)에 있는 데이터를 꺼내고(삭제하고) 반환한다. |
| `peekFirst()` | $O(1)$ | 덱의 맨 앞(Front)에 있는 데이터를 반환하되, 삭제하지는 않는다. |
| `peekLast()` | $O(1)$ | 덱의 맨 뒤(Rear)에 있는 데이터를 반환하되, 삭제하지는 않는다. |
| `isEmpty()` | $O(1)$ | 덱이 비어있는지 여부를 반환한다. |
| `size` | $O(1)$ | 현재 덱에 저장된 데이터의 개수를 반환한다. (Getter로 구현) |
| `printAll()` | - | 덱에 저장된 모든 데이터를 출력한다. |

<br/>

## 핵심 로직

### 연결 리스트 활용 (Adapter Pattern)
- 데이터를 직접 관리하는 대신, `DoublyLinkedList` 인스턴스를 생성하여 내부 저장소로 사용한다.
- 덱의 기능들을 연결 리스트의 메서드로 연결(위임)하여 구현한다.

### 메서드 매핑
- **Front 연산**: `addFirst` ↔ `insertAtFront`, `removeFirst` ↔ `removeFront`
- **Rear 연산**: `addLast` ↔ `insertAtBack`, `removeLast` ↔ `removeBack`

<br/>

## 주의사항

### 빈 덱에서의 연산
- `peekFirst()`, `peekLast()`: 덱이 비어있을 경우 `null`을 반환하도록 안전하게 처리한다.
- `removeFirst()`, `removeLast()`: 내부 연결 리스트의 제거 메서드를 호출하므로, 빈 덱에서 호출 시 에러가 발생한다.