import React, { useState } from 'react'
import "../../assets/css/main.css"
import "../../assets/sass/main.scss"
function App() {
	const [showContent, setShowContent] = useState(false);

	const toggleContent = () => {
		setShowContent(!showContent);	
	};

  return (
	<div class="is-preload">

		<div id="main">

			<section id="one">
				<header class="major">
					<h2>안녕하세요 신입 백엔드 개발자 김상훈입니다.</h2>
				</header>
				<p>저는 부사관으로 복무하며 통신장비와 서버 유지보수 경험을 통해 하드웨어와 소프트웨어에 대해 관심을 갖게 되었습니다.<br/>
				이 경험은 전공인 컴퓨터소프트웨어공학에 대한 흥미를 발견하게된 계기가 되었습니다.<br/><br/>
				전역 후 복학하여 학교 수업을 따라가며 코딩에 대한 흥미를 키웠습니다.<br/>
				처음에는 기본 개념을 몰라 수업을 듣는데 어려움이 있었지만 겨울방학동안 유니티와 C#을 통해 함수, 객체, 다형성, 추상화 등 기본 개념을 학습했습니다.<br/>
				</p>
				{!showContent && (
					<ul class="actions">
					<li><button class="button" onClick={toggleContent}>더 보기</button></li>
					</ul>
				)}
				{showContent && (
					<p>
					개강한 뒤 팀프로젝트로 졸업작품을 시작하여 Spring, Git 등 여러 기술과 협업을 경험하게 되었습니다.<br/>
					처음에는 여러 개발 도구들이 익숙하지 않았지만, 매주 회의를 통해 부족한 부분을 파악하고 이를 적극적으로 학습하여 프로젝트에 기여할 수 있었습니다.<br/>
					특히, 크롤링 봇 개발 과정에서 Python을 사용한 경험은 매우 흥미로웠고, 이를 통해 새로운 기술에 대한 적응력과 문제 해결 능력을 키울 수 있었습니다.<br/><br/>

					팀 프로젝트를 진행하며 개발 일정 수립, 인력 분배 등 프로젝트 기획과 커뮤니케이션의 중요성을 깊이 깨달았습니다.<br/>
					가장 힘들었던 순간은, 커뮤니케이션의 부족으로 프로젝트 진행에 어려움이 있었을 때 였습니다.<br/>
					크롤링 봇 개발 중 일부 팀원들이 맡은 업무를 시간 내에 완수하지 못했습니다.<br/>

					이 상황에서 저는 직접 추가적인 개발 작업을 맡아 팀원들의 작업 부담을 줄이거나 발생한 문제에대해 함께 고민하여
					해결책을 제공함으로써 프로젝트를 기한 내에 성공적으로 마무리할 수 있었습니다.<br/><br/>

					일정 관리와 커뮤니케이션 부족으로 인한 어려움을 경험하며, 이를 해결하기 위해 팀원들과의 커뮤니케이션과 문제가 발생했을때 
					원인을 분석하고 단계적으로 해결해나가는 방법을 배웠습니다.<br/>
					또한 이 과정에서 저는 Spring Boot에서 사용자의 요청을 처리하는 백엔드에 큰 흥미를 갖게되었습니다.<br/><br/>

					앞으로 백엔드 개발 분야에서 지속적인 학습을 통해 최신 웹 개발 트렌드를 따라가고자 합니다.<br/>
					열린 마음으로 새로운 도전을 받아들이고 성장해나가며 개발자란 직업에 도전하고 싶습니다.<br/><br/>


					읽어주셔서 감사합니다
					</p>
				)}
			</section>

			<section id="two">
				<h2>Portfolio</h2>
				<div class="row">
					<article class="col-6 col-12-xsmall work-item">
						<a href="https://github.com/boomup249/Graduation_Project" class="image fit thumb"><img src={require('../../assets/images/fulls/01.png')} alt="" /></a>
						<h3>Loco(졸업작품)</h3>
						<p>사이트별 할인게임 가격 비교, 신작게임 정보 확인, 게시판 기능</p>
					</article>
					<article class="col-6 col-12-xsmall work-item">
						<a href="https://github.com/Joognuoy/BlogProject" class="image fit thumb"><img src={require('../../assets/images/fulls/02.png')} alt="" /></a>
						<h3>간단한 게시판(블로그)</h3>
						<p>Spring으로 구현한 간단한 게시판</p>
					</article>
				</div>
			</section>

		</div>
	</div>
  );
}

export default App;
