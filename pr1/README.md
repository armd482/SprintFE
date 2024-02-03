# SprintFE
코드잇 스프린트 4기 과제/프로젝트 기록용

### part1
https://linkbrary-armd482-week6.netlify.app/

<details>
  <summary>1주차 위클리 페이퍼</summary>

  ## CSS의 Cascading에 대해 설명해 주세요.<br>
  <b>CSS</b>는 <b>Cascading Style Sheet</b>의 약자로, 계층을 가진 스타일시트이다.<br>
  여기서 계층이란 스타일시트의 적용방식이 정해진 <b>우선순위 규칙</b>들에 의해 적용이 된다는 의미이다.<br>
  즉 같은 요소에 여러 다른 스타일이 중복되어 적용될 때, 우선순위가 높은 스타일시트만 적용되는 것이다.<br>
  정해진 규칙에는 다음과 같이 3개가 있다.<br>
  <ul>
    <li>중요도</li>
    <li>명시도</li>
    <li>코드순서</li>
  </ul>
  <br>
  <h3>중요도</h3>
  중요도는 <b>스타일이 선언된 위치</b>에 따라서 우선순위를 매기는 규칙이다.<br>
  스타일시트를 적용하는 위치는 크게 <b>브라우저</b>, <b>제작자</b>, <b>사용자</b>로 나눌 수 있다.<br>
  여기서 브라우저, 제작자, 사용자는 다음과 같은 의미를 갖고 있다.<br>
  <ul>
    <li>브라우저(browser): 크롬, 사파리 등 각 브라우저가 갖고 있는 기본 스타일</li>
    <li>제작자(author): css파일과 같이 웹 문서를 개발한 개발자가 설정한 스타일</li>
    <li>사용자(user): 해당 웹 페이지를 사용하는 사용자의 브라우저, os 상에서 설정한 옵션</li>
  </ul>
  <br>
  여기서 우선순위는 <b>사용자 > 제작자 > 브라우저</b>순으로 적용된다.<br>
  <br>
  <h3>명시도</h3>
  명시도는 셀렉터가 <b>가리키는 것이 명확</b>할수록 우선순위를 높게 주는 것을 의미한다.<br>
  명시도에서는 <b>인라인 > id > class > 태그</b>순으로 우선순위를 갖게 된다.<br>
  <ul>
    <li>인라인 - 하나의 태그 내에서만 적용가능 따라서 높은 우선순위를 갖는다</li>
    <li>id - 문서 내에서 하나만 적용가능 따라서 비교적 높은 우선순위를 갖는다</li>
    <li>class - 문서 내에서 여러번 적용가능 따라서 비교적 낮은 우선순위를 갖는다</li>
    <li>태그 - 모든 문서에서 적용가능 따라서 가장 낮은 우선순위를 갖는다.</li>
  </ul>
  <br>
  <h3>코드 순서</h3>
  코드 순서는 소스의 코드 작성 순서에 따라 우선순위를 높게 주는 것을 의미한다.<br>
  코드 순서는 <b>나중에 작성한 스타일</b>이 우선적으로 적용된다.
</details>
<details>
  <summary>2주차 위클리 페이퍼</summary>
  
  ## 시맨틱 태그를 사용하면 좋은 점을 설명해주세요<br>
  ### 시맨틱 태그 정의<br>
  시맨틱 태그는 포함된 내부 태그들이 특정한 의미를 갖고 있는 태그를 뜻하며, 다음과 같은 태그들이 존재한다<br>
  <ul>
    <li>header: 문서의 맨 윗부분으로 페이지의 제목과 같은 소개 내용을 포함</li>
    <li>footer: 문서의 맨 끝부분으로 저작권 정보, 연락처, 사이트맵, 관련 링크들을 포함</li>
    <li>nav: 내비게이션 링크 모음을 의미하는 태그</li>
    <li>main: 메인 내용을 포함. 문서 내이서 유일하게 존재해야함</li>
    <li>section: 문서의 독립적인 일부분을 의미하는 태그. 주로 제목이 포함된 것이 일반적</li>
    <li>article: 그 자체로 의미가 있는 웹사이트의 부분이며, 독립적으로 재사용되도록 의도된 태그</li>
    <li>aside: 간접적으로 문서와 관련된 내용을 나타내는 태그로 사이드바, 콜아웃 상자로 사용된다 </li>
  </ul>
  
  ### 시맨틱 태그의 이점 <br>
  <b>1. 접근성 향상</b><br>
  시맨틱 태그를 사용하면 화면 판독기, 키보드 또는 음성 명령과 같은 보조 기술에게 유용한 정보와 단서를 제공할 수 있다.<br>
  이를 통해서 신체적, 인지적 장애가 있는 사람들을 포함하여 모든 사람에게 다양한 섹션을 명확하게 정의하고 웹 전체의 일관성을 <br>
  유지함으로써 쉽게 웹 사이트를 접근할 수 있게 된다.<br>
  <br>
  <b>2. SEO(검색엔진최적화) 향상</b><br>
  시맨틱 태그를 이용함으로써 검색엔진이 웹 페이지를 좀 더 명확하게 파악, 분석할 수 있어서 시맨틱 태그를 사용하지 않는<br>
  다른 페이지와 비교했을 때, 더 높은 검색 우선순위에 포함된다. 또한 이용자들의 입장에서 원하는 내용을 더 쉽게 찾을 수 있게 된다.<br>
  <br>
  <b>3. 코드 생산성 향상</b><br>
  시맨틱 태그를 이용하면, 개발자의 입장에서 더 쉽고 빠르게 코드를 이해할 수 있어서 수정해야 하는 부분을 찾기 더 쉬워진다.<br>
  또한 코드를 재사용하기에 용이해서 생산적인 측면에서도 유리하다.<br>
  <br>
  <br>

  ## Position의 속성들과 각각의 특징을 설명해주세요.<br>
  Position은 html에서 해당 요소를 어떠한 방식으로 배치할 지 정의하는 속성으로, position 속성에는 다음과 같은 것들이 있다.<br>
  <ul>
    <li>static</li>
    <li>relative</li>
    <li>absolute</li>
    <li>fixed</li>
    <li>sticky</li>
  </ul>
  
<b>static</b><br>
static은 position의 기본적인 상태로, 모든 태그들이 오른쪽 또는 아래 방향으로 html 문서 상에서 원래 있어야하는 위치에 배치된다.<br>
따라서 top, left, bottom, right의 속성이 모두 무시된다.<br>
<br>
<b>relative</b><br>
relative는 기존 static의 상태에서 원래 위치에서 상대적으로 벗어나게 배치된다.<br>
상대적으로 배치되기 때문에 top, left, bottom, right 속성이 적용되지만, 다른 요소들에게는 영향을 주지 않는다.<br>
<br>
<b>Absolute</b><br>
absolute는 자신이 아닌 상위 요소 중 position 속성 값이 static이 아닌 요소를 기준으로 원래 위치에서 벗어나 독립적으로 배치된다<br>
이때 상위 요소의 position 속성 값이 전부 static인 경우 최상위 요소를 기준으로 배치된다.<br>
따라서 position이 relative인 상위요소를 기준으로 top, left, bottom, right 속성이 적용되고, 다른 요소들의 위치도 영향을 미친다.<br>
<br>
<b>fixed</b><br>
fixed는 viewport를 기준으로 특정 부분에 고정되어 움직이지 않도록 배치된다.<br>
따라서 top, left, bottom, right의 기준이 사용자의 화면을 기준으로 적용되고 글의 흐름에서 완전히 벗어나기 때문에 다른 요소들의 위치에 영향을 미치지 않는다.<br>
<br>
<b>sticky</b><br>
sticky는 원래의 위치에 배치되었다가, 스크롤을 통해서 정해진 위치를 벗어나면 fixed처럼 특정 부분에 고정되어 배치된다.<br>
sticky의 경우 top, left, bottom, right 중 적어도 하나의 속성 값을 설정해야 하며, 해당 값을 기준으로 fixed로 변경된다.
</details>
<details>
  <summary>3주차 위클리 페이퍼</summary>
  
  ## Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.
  ### Git merge
  git에서 merge는 branch를 다른 branch로 합치는 과정으로, merge의 기본 단위는 브랜치이며, 커밋 단위로 합치기가 불가능하다.<br>
  merge 방식에는 다음과 같이 나뉜다.
  <ul>
    <li>Merge</li>
    <li>Squash</li>
    <li>Rebase</li>
  </ul>
  
  #### Merge
  
  ```bash
    $ git checkout main
    $ git merge branch
  ```
  가장 일반적인 merge방식으로, branch의 커밋 상태에 따라서 두 가지로 진행된다.
  
  ##### Fast-Forward Merge
  분기된 branch에서 기존 branch로 병합을 시도할 때, 기존 branch가 따로 커밋한 경우가 없을 경우, 기존 branch가 그대로 분기된 branch로 이동하는 방식이다. 특이점이라면 단순 이동이기 때문에 커밋이 발생하지 않으며 충돌 또한 발생하지 않는다.<br>
  ![image](https://github.com/armd482/SprintFE/assets/89967066/bb994a96-4b4b-40c5-b3d7-03fa2e182ac2)

  ##### 3-Way(Recursive) Merge
  Fast-Forward와는 다르게 기존 branch에서 새로운 커밋이 생겼으며, 이 상태에서 분기된 branch와 병합할 경우 기존 branch와 분기된 branch가 합쳐지는 과정에서 충돌이 발생한다. 충돌을 해결한 후에는 기존 branch에 새로운 merge commit이 발생한다.<br>
  ![image](https://github.com/armd482/SprintFE/assets/89967066/0b25e775-e34a-4630-8a45-2cfa2162f9db)

  
  #### Squash
  ```bash
    $ git checkout main
    $ git merge --squash branch
  ```
  Squash는 merge에 squash 옵션을 추면 실행되며, 분기된 branch의 모든 커밋을 하나로 합친 후에 기존 branch의 분기 이후의 커밋에 이어서 추가되는 방식으로 분기된 brahcn는 이후 제거된다.<br>
  ![image](https://github.com/armd482/SprintFE/assets/89967066/0ff9668c-0866-499e-934a-48f6bcddeaee)

  #### Rebase
  ```bash
    $ git checkout branch
    $ git rebase main
    $ git checkout main
    $ git merge branch
  ```
  Rebase는 분기된 branch에 있는 모든 커밋을 복사하여 그대로 기존 branch의 커밋에 이어서 추가되는 방식이다. 마찬가지로 분기된 branch는 제거된다. Squash와의 차이라면 Squash는 분기된 커밋을 하나의 커밋으로 합쳐서 추가되는 반면에 Rebase는 분기된 branch 커밋이 그대로 추가된다는 점이다. 마지막에 merge되는 방식은 Fast-Forward 방식가 동일하다.<br>
  ![image](https://github.com/armd482/SprintFE/assets/89967066/81d1eb79-bea2-4b70-ad9b-fdead263cf15)
  <br>
  <br>
  ## Git Flow 브랜치 전략에 대해 설명해 주세요.
  Git Flow는 <b>Main 브랜치</b>, <b>Develop 브랜치</b>, <b>Supporting 브랜치</b>로 구분되며 Supporting 브랜치에서 <b>Feature 브랜치</b>, <b>Release 브랜치</b>, <b>Hotfix 브랜치</b>로 구분하여 관리하는 전략으로 프로젝트의 <b>브랜치를 효과적으로 관리하기 위한 워크플로우</b>이다.

  ### Main 브랜치
  Main 브랜치는 <b>출시 가능한 프로덕션 코드</b>를 모아두는 브랜치이다. Main 브랜치는 프로젝트 시작 시 생성되며 개발 프로세스 전반에 결쳐 유지된다. 배포된 각 버전을 Tag를 이용해 표시해둔다.

  ### Develop 브랜치
  Develop 브랜치는 <b>다음 버전 개발을 위한 코드</b>를 모아두는 브랜치이다. 개발이 완료되면 Main 브랜치로 merge된다.
  
  ### Feature 브랜치
  Feature 브랜치는 <b>하나의 기능을 개발하기 위한 브랜치</b>이다. Develop 브랜치에서 생성하며, 기능이 개발 완료되면 다시 Develo 브랜치로 merge된다. Merge할 때 주의점은 히스토리가 특정 기능 단위로 묶이기 위해서 Fast-Forward로 merge하지 않고 Merge 커밋을 생성하여 merge를 해주어   야 한다.

  ### Release 브랜치
  Release 브랜치는 <b>소프트웨어 배포를 준비하기 위한 브랜치</b>이다. Develop 브랜치에서 생성하며, 버전 이름 등의 <b>소소한 데이터를 수정</b>하거나 <b>배포전 사소한 버그를 수정</b>하기 위해 사용된다. 배포 준비가 완료되면 Main과 Develop 브랜치에 둘다 merge한다. 이때 Main 브랜치에서는 태그를 이용하여 버전을 표시한다.

  ### Hotfix 브랜치
  Hotfix 브랜치는 <b>이미 배포된 버전에 문제가 발생했을 때를 위한 브랜치</b>이다. Main 브랜치에서 생성하며, 문제가 해결되면 Main과 Develop 브랜치에 둘 다 merge한다.
</details>
<details>
  <summary>4주차 위클리 페이퍼</summary>

  ## 자바스크립트에서 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)에 대해 설명해주세요.
  
  ### 데이터 타입
  자바 스크립트에는 다음과 같이 두가지 형태의 데이터 타입으로 나눌 수 있다.
  <ul>
    <li>기본형 데이터</li>
    <li>참조형 데이터</li>
  </ul>
  기본형 데이터는 Number, String, Boolean, Undefined, Null, Symbol로 총 6개이며, 이를 제외한 나머지 즉 객체를 참조형 데이터로 분류한다.<br>
  기본형 데이터와 참조형 데이터의 가장 큰 차이점은 메모리 할당에 있다.<br>
  기본형 데이터의 경우 해당 값 자체가 메모리에 할당되지만, 참조형 데이터는 해당 데이터를 가리키는 주소 값이 할당된다.<br>
  따라서 참조형 데이터를 복사할 때, 값 자체를 복사할 지 아니면 참조값을 복사할 지로 나눌 수 있다.

  ### 얕은 복사(Shallow Copy)
  얕은 복사는 <b>객체의 참조값을 복사</b>하는 것으로 다음과 같이 단순히 동등연산자를 이용하여 구현할 수 있다.
  
  ```javascript
  const data = {name: "aaa", age: 30}
  const data2 = data1;
  ```
  이때 data2의 name을 접근하면 기존 data데이터에서 name의 값을 가리키는 주소값을 그대로 받게 된다.<br>
  만약 아래와 같이 얕은 복사를 한 data2를 수정할 경우 data1은 어떤 식으로 표시될까?<br>
  
  ```javascript
  data2.name = "bbb";
  console.log(data2); // {name: "bbb", age: 30}
  console.log(data);  // {name: "bbb", age: 30}
  ```
  data의 값이 data2의 값과 동일하게 변경되었다<br>
  이는 기존 data과 data2가 동일하게 name의 "aaa"값을 가리킨 상태에서 data2의 name값을 변경하면, 주소 값이 아닌 name의 값을 변경한다.<br>
  이렇게되면 기존 data객체가 가리킨 name도 주소는 동일하지만 name의 값이 변경된 상태이므로, 변경된 name을 그대로 가리키게 된다.<br>
  즉 얕은 복사는 <b>하나의 데이터를 공유</b>하는 것이다.<br>

  ### 깊은 복사(Deep Copy)
  깊은 복사는 <b>객체의 값 자체를 복사</b>하는 것으로 얕은 복사와 달리 기존 데이터와의 참조가 완전히 끊어진 객체이다.<br>
  깊은 복사는 다음과 같은 방법으로 구현할 수 있다.<br>

  #### Object.assign()
  Object.assign()는 객체들의 열거 가능한(iterable) 속성을 복사하여 대상 객체에 같은 값으로 붙여넣는 메서드이다.<br>
  괄호 안에는 복사하려는 객체를 넣으면 되고, 여러 객체를 넣을 수 있다.<br>
  ```javascript
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = Object.assign(target, source);

  console.log(target); // { a: 1, b: 4, c: 5 }
  ```

  #### 전개 연산자
  전개 연산자는 반복 가능한 객체에 대해서 객체를 하나씩 펼쳐서 리턴한다.<br>
  배열의 경우 [...data]로, 객체의 경우 {...data}로 함수의 경우 func(...data)로 구현할 수 있다<br>
  ```javascript
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = {...target, ...source};

  console.log(target); //{ a: 1, b: 4, c: 5 }
  ```

  #### 재귀 함수
  재귀 함수를 이용하여 객체에 들어있는 원시 값을 하나씩 복사하여 구현할 수 있다.<br>
  ```javascript
  const copyObjectDeep = function (target){
    let result = {};
    if(typeof target === 'object' && target !== null){
    	for( var prop in target){
      	result[prop] = copyObjectDeep(target[prop]);
    	}
    }
    else{
    	  result = target
    }
    return result;
  };
  ```
  
  #### JSON.parse && JSON.stringify
  JSON은 JavaScript Object Notation의 약자로 데이터를 문자열 기반의 텍스트를 사용하여 데이터를 저장하고 전송하는 개방형 표준 파일 형식이다.<br>
  JSON은 객체와 동일하게 키-값 구조로 되어있으나, 타입은 String이다.<br>
  JSON.parse메소드는 json을 객체로 변환시키는 함수이며, JSON.stringify()는 객체를 json문자열로 변환하는 메소드이다.<br>
  이때 JSON.stringify()를 사용하면, 원본 객체와의 참조가 끊어진다.<br>
  하지만 위 방식은 함수의 경우 사용할 수 없다.<br>

  ```javascript
  const target = { a: 1, b: 2 };

  cost returnTarget = JSON.parse(JSON.stringify(target));

  console.log(target); //{ a: 1, b: 2 }
  ```

#### lodash 라이브러리 함수
lodash라이브러리를 이용하여 구현가능하다.<br>
lodash는 재귀함수를 이용하여 재귀적으로 값을 복사하는 방식을 이용하고 있다.<br>
```javascript
  import_from 'lodash'
  const target = { a: 1, b: 2 };

  cost returnTarget = _.cloneDeep(target);

  console.log(target); //{ a: 1, b: 2 }
  ```

깊은 복사의 경우 두 객체의 값만 동일할 뿐 참조 값이 아예 다르므로, 두 객체를 단순히 같은지 출력하면 False로 나온다.<br>
반면 얕은 복사는 두 객체의 참조값이 동일하기 때문에, true로 나온다.

```javascript
const data = {a: 1, b: 2};
const shallowData = data;
const deepData = {...data};

console.log(deepData === data); // false
console.log(shallowData === data); // true
```
<br>

## var, let, const 를 중복 선언 허용, 스코프, 호이스팅 관점에서 서로 비교해 주세요.
자바스크립트에서 변수를 선언할 때 var, let, const로 변수를 선언할 수 있다.<br>
var ES6 이전부터 사용하던 방식였으며, ES6부터 let과 const가 등장하였다.<br>
let과 const는 기존 var에서 변수 재할당(값 교체)을 기준으로 구분하였다<br>
let의 경우 변수 재할당이 가능한 반면, const는 재할당이 불가능하다.

```javascript
let l = 'first';
console.log(l);

l = 'second';
console.log(l); // second;

const l = 'first';
console.log(l); // first

l = 'second';
console.log(l); // Uncaught TypeError: Assignment to constant variable.
```

### 중복 선언 허용
중복 선언은 변수를 같은 이름으로 다시 선언하는 것을 의미한다.<br> 
var의 경우 중복선언이 가능하였다.<br>
하지만 이렇게 되면 해당 이름의 변수가 어디에서 어떻게 사용될지 파악하기 힘들고, 값이 덮어씌어지므로 중간에 실수로 값이 바뀔 수도 있다.<br>
이를 보완하기 위해서 let과 const는 중복 선언이 되지 않는다.

```javascript
var v = 'first';
console.log(v); // first

var v = 'second'
console.log(v); // second


let l = 'first';
console.log(l); // first

let l = 'second';
console.log(l); // Uncaught SyntaxError: Identifier 'l' has already been declared

const l = 'first';
console.log(l); // first

const l = 'second';
console.log(l); // Uncaught SyntaxError: Identifier 'c' has already been declared
```

### 스코프
스코프는 선언한 변수의 유효범위를 의미한다.<br>
var과 let 그리고 const 모두 함수 내에서 선언할 경우, 함수 밖에서는 그 변수를 불러올 수 없다.<br>
즉 세 변수 선언 방식이 모두 함수레벨의 스코프를 갖고 있다.<br>
하지만 let과 const는 if문, for문 while문 등 블록 내에서 선언할 경우, 블록 밖에서 그 변수를 불러올 수 없다<br>
즉 let과 const는 블록레벨의 스코프를 갖고 있다.

```javascript
function a() {
  var v = 1;
  let l = 2;
  const c = 3;
}

console.log(v, l, c) // ReferencError: v, l, c are not defined

if(true) {
  var va = 1;
  let le = 2;
  const co = 3; 
}

console.log(va, le, co) // 1, ReferencError: l, c are not defined
```

### 호이스팅
호이스팅은 스코프 안에서 선언한 변수 대해서 해당 변수 선언을 위로 끌어 올려서 유효 범위 최상단에 선언되도록 하는 의미이다.<br>
var, const, let 모두 호이스팅이 발생하나, let과 const는 var과 다르게 호이스팅이 발생한다.<br>
<br>
var의 경우 선언되기 이전에 해당 변수에 접근한 후, 변수를 선언할 경우 아래와 같이 문제 없이 코드가 실행된다.
```javascript
console.log(v); // undefined
var v = 1;
console.log(v) //1
```
반면 let이나 const의 경우 선언되기 이전에 해당 변수를 불러올 경우 에러가 발생한다.
```javascript
console.log(l); // ReferenceError: Cannot access 'l' before initialization
let l = 2;
console.log(l) // 2
```
하지만 다음과 같은 코드를 통해서 호이스팅이 발생하는 것을 알 수 있다.
```javascrit
function a() {
  return l
}
let l = 1;
console.log(a()) // 1
```
이는 TDZ에 영향을 받기 때문인데,<br>
TDZ는 Temporal Death Zon으로 값을 할당하기 전에는 사용할 수 없는 공간이다.
변수의 생성 과정은 다음과 같다.
<ol>
  <li>선언 - 스코프와 변수 객체가 생성되고 스코프가 변수 객체를 참조한다</li>
  <li>초기화 - 변수 객체 값을 위한 공간을 메모리에 할당되고, 이때의 값은 undefined다.</li>
  <li>할당 - 변수 객체에 값을 할당한다.</li>
</ol>
var은 선언과 동시에 초기화가 이뤄지지만, let은 선언만 될 뿐 초기화가 되지 않는다. 반면 const는 선언과 동시에 초기화와 할당이 된다.<br>
따라서 let의 경우 선언만 할 경우 TDZ에 들어가게 되고, 결과적으로 선언은 되었지만 초기화가 이뤄지지 않아서 메모리에 할당이 안된 상태이다.<br>
즉 var, let, const 모두 호이스팅은 이뤄지나, let의 경우 단순 선언만 할 경우 에러가 발생하는 반면 var은 초기화가 이뤄져 undefined 값으로 정상작동한다.<br>
</details>
<details>
  <summary>5주차 위클리 페이퍼</summary>
  
  ## 이벤트 버블링, 캡처링, 위임에 대해 설명해주세요.
  ### 이벤트 흐름
  html에서의 이벤트 흐름은 다음과 같이 순서대로 3단계로 이뤄진다.<br
  <ol>
    <li>캡처링 단계: 이벤트가 상위 요소에서 하위 요소로 전파되는 단계</li>
    <li>타깃 단계: 이벤트가 지정한 실제 타깃에 전달되는 단계</li>
    <li>버블링 단계: 이벤트가 하위 요소에서 상위 요소로 전파되는 단계</li>
  </ol>
  html은 계층적 구조이기 때문에 이벤트가 요소에 발생할 경우, 연쇄적 반응이 발생한다.<br>
  이벤트 전파 방향에 따라서 버블링과 캡처링으로 구분한다.<br>

  ### 이벤트 캡처링
  이벤트 캡처링은 한 요소에서 이벤트가 발생하면 최상단인 window객체에서 <b>자식 요소로 해당 이벤트가 전달</b>된다.<br>
  최종적으로 해당 요소를 만날 때까지 반복한다.<br>
  이벤트 캡처링은 Default가 발생되지 안도록 되어있으며, 이벤트를 등록할 때, 3번째 매개변수로 true를 전달하면 발동된다.<br>
  
  ### 이벤트 버블링
  이벤트 버블링은 한 요소에서 이벤트가 발생하면 이어서 <b>부모 요소로 해당 이벤트가 전달</b>된다.<br>
  최종적으로 가장 최상단의 조상요소인 window객체를 만날 때까지 반복한다.<br>
  이벤트 버블링은 Default가 발생되도록 되어있어서, 별 다른 설정 없이는 무조건 일어난다.<br>
  <b>e.stopDefault()</b>를 통해서 전파를 막을 수 있다. 하지만 html에서는 추천하는 방식은 아니다.<br>

  ### 이벤트 위임
  이벤트 위임은 이벤터 캡처링과 버블링을 활용하여, <br>
  각각의 요소에 이벤트를 하나씩 할당하는 것이 아닌 요소의 <b>공통 조상에 이벤트 핸들러 하나만 할당</b>하는 방식이다.<br>
  이를 통해서 메모리 측면에서 효율적으로 관리가 가능하며, 유지보수 측면에서 장점이 있다.<br>
  if문으로 target과 currentTarget을 통해서 이벤트를 등록한 조상 요소와 현재 요소를 구분하여 동작하려는 요소를 지정할 수 있다.<br>
  <br>

  ## HTTP 메소드에 대해 설명해주세요.
  ### HTTP 메소드
  HTTP 메소드는 클라이언트-서버 구조에서 요청과 응답이 이루어지는 방식을 의미한다.<br>
  일반적으로 서버가 수행해야할 동작을 지정하여 요청을 보내는 방식이다.<br>
  주로 사용하는 HTTP 메소드에는 다음과 같이 5가지 종류가 있다.<br>
  <ul>
    <li>GET: 데이터 조회</li>
    <li>POST: 데이터 추가</li>
    <li>PUT: 데이터 수정/생성</li>
    <li>DELETE: 데이터 삭제</li>
    <li>PATCH: 데이터 부분 수정</li>
  </ul>
  또한 메서드의 종류에 따라 다음과 같은 속성을 특징으로 구분할 수 있다.
  <ul>
    <li>안전: 데이터 변경이 일어나지 않는 속성</li>
    <li>멱등: 몇 번을 호출하든 최종적인 결과는 똑같은 속성</li>
    <li>캐시 가능: 응답 결과 리소스를 캐시해서 사용하는 속성</li>
    <li>요청의 본문 존재 여부: 요청시 데이터를 Message Body에 담아 보내는지에 대한 속성</li>
  </ul>

  ### GET 메소드
  GET 메소드는 리소스를 읽거나 검색할 때 사용하는 메소드로 일반적으로 요청할 때 Body값과 Content-type값이 비워져있다.<br>
  따라서 데이터를 단순히 읽는 요청이므로, 데이터 변경이 일어나지 않은 안전성과 멱등성을 갖고 있다.<br>
  GET 메소드는 캐싱이 가능하여 같은 데이터를 여러번 조회할 경우 저장한 값을 사용하여 조회속도가 더 빨라진다.<br>

  ### POST 메소드
  POST 메소드는 새로운 리소스를 생성할 때 사용하는 메소드로 요청할 때 Body값과 Content-type값을 작성해야 한다.Body값에는 새로 넣을 데이터의 정보를 입력한다.<br>
  따라서 서버에서 요청받은 데이터가 추가되므로 데이터 변경이 발생하므로 안전성과 멱등성을 갖고 있지 않다.<br>
  POST 메소드는 일반적으로 캐싱이 불가능하다.<br>

  ### PUT 메소드
  PUT 메소드는 일반적으로 기존 리소스를 수정할 때 사용하며, 요청할 때 Body값과 Content-type값을 작성해야 한다.<br>
  Body값은 마찬가지로 기존 데이터의 정보와 수정한 데이터를 함께 넣어야 한다.<br>
  PUT 메소드는 기존 데이터를 삭제 후 새로 등록하는 것과 같기 때문에 데이터 변경이 발생하고, 안전성은 없지만 전체 리소스의 자원량은 차이가 없기 때문에 멱등성을 갖고 있다.<br>
  또한 PUT 메소드 역시 일반적으로 캐싱이 불가능하다.<br>

  ### DELETE 메소드
  DELETE 메소드는 지정한 리소스를 삭제할 때 사용하며, 요청할 때 Body값과 Content-type값이 필요가 없다.<br>
  기존 데이터를 삭제하는 메소드이므로 안전성이 없으며, 지정한 리소스가 없으면 동작하지 않기 때문에 멱등성을 갖고 있다.<br>
  또한 DELETE 메소드 역시 일반적으로 캐싱이 불가능하다.<br>

  ### PATCH
  PATCH 메소드는 기존 리소스를 수정할 때 사용되는데, PUT 메소드와의 차이점은 PATCH는 부분적으로 수정이 가능하기 때문에, 삭제와 추가 과정이 없다.<br>
  요청할 때 Body값과 Content-type값을 작성해야하며, 변경할 부분 데이터만 작성하면 된다.<br>
  따라서 리소스 수정이 발생하므로 안전성은 없으며 멱등성을 갖고 있다.<br>
</details>
<details>
  <summary>6주차 위클리 페이퍼</summary>
  
  ## 다음 예시의 코드를 실행할 때, 콘솔에 출력될 값과 그 이유를 설명해 주세요.
  ```javascript
  let num = 1;

  // 2번
  setTimeout(() => {
    num = 2;
  }, 0);
  
  // 3번
  num = 3;
  
  // 4번
  console.log(num);
  ```
결론부터 말하면, 콘솔에 3이 찍힐 것이다.<br>
자바스크립트는 싱글 스레드 언어로, 일반적으로는 코드의 흐름대로 구동된다.<br>
하지만 setTimeOUT과 같이 비동기 함수가 있을 경우의 상황은 다르다.<br>
비동기함수가 있을 경우에는, 비동기 함수가 끝날 때까지 대기하는 것이 아닌 비동기 함수를 요청만 하고 아래의 코드를 실행한 후에, 비동기함수가 끝나면 결과를 받는다.<br>
즉 코드에서는 num의 값이 1에 할당되고, 이후 setTimeOut 함수를 만난 후에, 비동기방식으로 동작하기 때문에 3번 코드에 의해 num 값이 3으로 재할당되고, num값인 3이 출력된다.<br>
이후 setTimeOut함수의 결과 값으로 num값이 2로 재할당된다.<br>
즉 <b>출력은 3이 되지만 최종적으로 num의 값은 2로 할당</b>되어 있다.<br>

## 리액트에서 Virtual DOM이 무엇인지, 이를 사용하는 이유는 무엇인지 설명해 주세요.
### DOM
HTML, XML 문서의 콘텐츠 및 구조, 그리고 스타일 요소를 구조화 시켜 표현하여 JavaScript와 같은 프로그래밍 언어가 해당 문서에 접근하여 읽고 조작할 수 있도록 API를 제공하는 일종의 <b>웹 페이지의 인터페이스</b>이다.<br>

### Virtual DOM
웹의 복잡도가 증가했고, 자연습럽게 DOM의 조작도 빈번하게 발생하면서, DOM 조작으로 인해서 불필요하게 많은 브라우저의 렌더링이 발생하게 되었다.<br>
이를 해결하기 위해서 Virtual DOM이 탄생했다.<br>
Virtual DOM은 변경해야 하는 DOM에 대해서 직접적으로 DOM을 수정하지 않고 Virtual DOM에 변경 사항들을 모아두었다가 한번에 DOM에 보내어 불필요한 렌더링이 발생하지 않도록 하는 하나의 <b>가상 레이어</b>이다.<br>
즉 변경 사항들을 메모리에 저장하고 한번에 DOM에 동기화하는 일종의 프로그래밍 기법이다.<br>

### 사용하는 이유
앞선 등장 이유와 마찬가지로 불필요한 렌더링을 방지하기 위해서 사용한다.<br>
렌더링에는 reflow, repaint 연산이 필요한데, reflow는 문서에서 요소의 위치와 크기등의 형상을 다시 계산하는 작업이며, repaint는 레이아웃에 영향을 주지 않는 요소 변경, 즉 스타일 속성의 변경을 화면에 다시 크리는 작업이다.<br>
두 작업은 컴퓨팅 작업이 많이 필요한 연산으로 결과적으로 렌더링이 여러 번 발생하는 것은 많은 자원이 소모된다.<br>
Virtual DOM은 이러한 렌더링 연산 횟수를 감소시키기 위해 사용된다.<br>
하지만 일반적으로 Virtual DOM의 속도는 일반 DOM의 속도보다 느리다. 따라서 구조가 복잡한 경우에만 효율적이며, 구조가 단순한 경우에는 오히려 성능 저하를 불러올 수 있다.<br>

</details>
