import { DoublyLinkedList } from './DoublyLinkedList.mjs';

const list = new DoublyLinkedList();

console.log('===== 이중 연결 리스트 테스트 시작 =====');

// 1. 삽입 테스트
console.log('\n1. 삽입 (Insert)');
list.insertAtFront(1);
list.insertAtBack(3);
list.insertAt(1, 2); // [1, 2, 3]
list.insertAt(0, 0); // [0, 1, 2, 3]
list.insertAt(4, 4); // [0, 1, 2, 3, 4]
list.printAll();
// 예상 출력: [0, 1, 2, 3, 4]

// 2. 조회 테스트
console.log('\n2. 조회 (Get & IndexOf)');
console.log(`Index 2의 값: ${list.get(2)}`); // 2
console.log(`데이터 3의 인덱스: ${list.indexOf(3)}`); // 3
console.log(`데이터 5의 인덱스 (없음): ${list.indexOf(5)}`); // -1
console.log(`리스트 길이: ${list.length}`); // 5

// 3. 삭제 테스트
console.log('\n3. 삭제 (Remove)');
console.log(`removeAt(2) 삭제된 값: ${list.removeAt(2)}`); // 2 삭제 -> [0, 1, 3, 4]
list.printAll();
console.log(`removeFront() 삭제된 값: ${list.removeFront()}`); // 0 삭제 -> [1, 3, 4]
list.printAll();
console.log(`removeBack() 삭제된 값: ${list.removeBack()}`); // 4 삭제 -> [1, 3]
list.printAll();

// 4. 초기화 및 빈 리스트 확인
console.log('\n4. 초기화 (Clear & Empty Check)');
list.clear();
list.printAll(); // []
console.log(`리스트가 비었는가?: ${list.isEmpty()}`); // true

console.log('\n===== 테스트 종료 =====');
