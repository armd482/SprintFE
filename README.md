# SprintFE
코드잇 스프린트 4기 과제/프로젝트 기록용

<details>
  <summary>1주차 위클리페이퍼</summary>

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
  <summary>2주차 위클리페이퍼</summary>
  
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
