import './App.css'
import './landing.css'

/** Figma 내보내기 PNG — `FIGMA_TOKEN=... node scripts/fetch-figma-assets.mjs` 로 교체 가능 */
const figmaAssets = {
  heroRectangle: '/figma/hero-rectangle.png',
  heroFlower: '/figma/hero-flower.png',
  compareImage: '/figma/compare-image.png',
  conceptsLeft: '/figma/concepts-decor-left.png',
  conceptsRight: '/figma/concepts-decor-right.png',
  iocHero: '/figma/ioc-hero.png',
} as const

function CardArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  )
}

export type Concept = {
  id: string
  nav: string
  href: string
  cardTitle: string
  cardSummary: string
  pageTitle: string
  kicker: string
  lead: string
  sections: Array<{ title: string; body: string }>
}

export const concepts: Concept[] = [
  {
    id: 'ioc',
    nav: 'IoC',
    href: '/ioc.html',
    cardTitle: 'IoC(Inversion of Control)',
    cardSummary:
      'IoC는 객체의 생성과 관리에 대한 제어권을 개발자가 아니라 스프링 컨테이너가 담당하는 개념이다.',
    pageTitle: 'Inversion of Control',
    kicker: '으앗~ 내 제어권이~!! 제어의 역전',
    lead:
      'IoC(Inversion of Control)는 제어의 역전을 의미하는 개념으로, 객체의 생성과 관리에 대한 제어권이 개발자가 아닌 프레임워크에게 넘어가는 구조입니다.',
    sections: [
      {
        title: '개념',
        body: '일반적인 프로그램에서는 개발자가 직접 객체를 생성하고 관리하지만, 스프링에서는 이러한 작업을 스프링 컨테이너가 대신 관리합니다.',
      },
      {
        title: '기존 방식과의 차이',
        body: '기존 방식에서는 개발자가 필요한 객체를 직접 생성하여 사용합니다. 하지만 IoC가 적용된 환경에서는 객체 생성과 관리가 스프링 컨테이너에 의해 이루어지며, 개발자는 객체의 사용에만 집중하면 됩니다.',
      },
      {
        title: 'IoC in Spring',
        body: '스프링에서는 ApplicationContext와 같은 컨테이너가 IoC를 담당합니다. 컨테이너는 애플리케이션 실행 시 필요한 객체를 생성하고 관리하며, 객체 간의 의존 관계도 함께 설정해 줍니다.',
      },
      {
        title: '장점',
        body: 'IoC를 사용하면 객체 간 결합도가 낮아지고 코드의 재사용성이 높아집니다. 또한 객체 관리가 프레임워크에 의해 이루어지기 때문에 유지보수가 쉬워지고 확장성이 향상됩니다.',
      },
    ],
  },
  {
    id: 'di',
    nav: 'DI',
    href: '/di.html',
    cardTitle: 'DI(Dependency Injection)',
    cardSummary:
      'DI는 객체가 필요한 다른 객체를 직접 생성하지 않고 외부에서 주입받도록 하는 방식이다.',
    pageTitle: 'Dependency Injection',
    kicker: '의존성 주입',
    lead:
      'DI(Dependency Injection)는 의존성 주입을 의미하는 개념으로, 객체가 필요로 하는 다른 객체를 직접 생성하지 않고 외부에서 전달받는 방식입니다.',
    sections: [
      {
        title: '개념',
        body: '이를 통해 객체 간의 의존 관계를 코드 내부가 아닌 외부에서 설정할 수 있습니다.',
      },
      {
        title: '기존 방식과의 차이',
        body: '기존 방식에서는 객체가 필요한 다른 객체를 직접 생성하여 사용합니다. 하지만 DI를 사용하면 필요한 객체를 외부에서 주입받기 때문에 객체 간의 결합도가 낮아지고 코드의 구조가 더 유연해집니다.',
      },
      {
        title: 'DI in Spring',
        body: '스프링에서는 IoC 컨테이너가 객체를 생성한 뒤 필요한 의존 객체를 자동으로 주입합니다. 이러한 방식은 주로 생성자 주입, 필드 주입, 세터 주입과 같은 방법으로 이루어집니다.',
      },
      {
        title: '장점',
        body: 'DI를 사용하면 객체 간 결합도가 낮아지고 테스트가 쉬워집니다. 또한 구현체를 쉽게 교체할 수 있어 코드의 유지보수성과 확장성이 향상됩니다.',
      },
    ],
  },
  {
    id: 'aop',
    nav: 'AOP',
    href: '/aop.html',
    cardTitle: 'AOP(Aspect Oriented Programming)',
    cardSummary:
      'AOP는 로그, 보안, 트랜잭션 같은 공통 기능을 핵심 로직과 분리하여 관리하는 프로그래밍 방식이다.',
    pageTitle: 'Aspect Oriented Programming',
    kicker: '관점 지향 프로그래밍',
    lead:
      'AOP(Aspect Oriented Programming)는 관점 지향 프로그래밍을 의미하는 개념으로, 프로그램에서 공통적으로 사용되는 기능을 핵심 로직과 분리하여 관리하는 방식입니다.',
    sections: [
      {
        title: '개념',
        body: '이를 통해 코드의 중복을 줄이고 핵심 기능에 집중할 수 있도록 합니다.',
      },
      {
        title: '공통 기능과 핵심 로직',
        body: '프로그램을 개발하다 보면 여러 기능에서 반복적으로 사용되는 코드가 존재합니다. 예를 들어 로그 처리, 보안 처리, 트랜잭션 관리, 예외 처리 등이 있습니다. 이러한 기능을 핵심 비즈니스 로직과 분리하여 별도의 모듈로 관리하는 것이 AOP의 특징입니다.',
      },
      {
        title: 'AOP in Spring',
        body: '스프링에서는 AOP를 통해 특정 메서드 실행 전이나 후에 원하는 기능을 자동으로 실행할 수 있습니다. 이를 통해 공통 기능을 한 곳에서 관리할 수 있으며, 코드의 구조를 더 깔끔하게 유지할 수 있습니다.',
      },
      {
        title: '장점',
        body: 'AOP를 사용하면 반복되는 공통 코드를 줄일 수 있으며 코드의 가독성과 유지보수성이 향상됩니다. 또한 핵심 로직과 공통 기능이 분리되기 때문에 프로그램의 구조를 보다 체계적으로 관리할 수 있습니다.',
      },
    ],
  },
  {
    id: 'mvc',
    nav: 'Spring MVC',
    href: '/mvc.html',
    cardTitle: 'MVC(Model-View-Controller)',
    cardSummary:
      'MVC(Model-View-Controller)는 애플리케이션을 Model, View, Controller로 역할을 나누어 구조적으로 개발하는 아키텍처 패턴이다.',
    pageTitle: 'Spring MVC',
    kicker: '모델-뷰-컨트롤러',
    lead:
      'MVC(Model-View-Controller)는 애플리케이션을 Model, View, Controller의 세 가지 역할로 나누어 개발하는 아키텍처 패턴입니다.',
    sections: [
      {
        title: '개념',
        body: '각 구성 요소가 서로 다른 역할을 담당하여 프로그램의 구조를 체계적으로 관리할 수 있도록 합니다.',
      },
      {
        title: '구성요소',
        body: 'Model은 애플리케이션의 데이터와 비즈니스 로직을 담당하는 부분입니다. View는 사용자에게 보여지는 화면을 담당하며, Controller는 사용자의 요청을 받아 처리하고 Model과 View를 연결하는 역할을 합니다.',
      },
      {
        title: '동작과정',
        body: '사용자가 웹에서 요청을 보내면 Controller가 해당 요청을 받아 처리합니다. 이후 필요한 데이터를 Model에서 가져오거나 처리한 뒤 View에 전달하고, View는 최종 결과를 사용자에게 화면으로 보여주는 방식으로 동작합니다.',
      },
      {
        title: '장점',
        body: 'MVC 구조를 사용하면 각 구성 요소의 역할이 명확하게 분리되어 코드의 가독성이 높아지고 유지보수가 쉬워집니다. 또한 기능을 수정하거나 확장할 때 다른 부분에 영향을 줄 가능성이 줄어듭니다.',
      },
    ],
  },
]

function Header({
  overlay = false,
  activeId,
}: {
  overlay?: boolean
  activeId?: Concept['id']
}) {
  return (
    <header className={overlay ? 'topbar topbar--overlay' : 'topbar'}>
      <div className="topbar-inner">
        <a className="brand" href="/">
          <span className="brand-title">{'What\u2019sTheSpring'}</span>
        </a>
        <nav className="topnav" aria-label="주요 개념">
          {concepts.map((concept) => (
            <a
              key={concept.id}
              className={
                activeId === concept.id ? 'topnav-link topnav-link--active' : 'topnav-link'
              }
              href={concept.href}
              aria-current={activeId === concept.id ? 'page' : undefined}
            >
              {concept.nav}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

const INTRO_COPY = `Spring Framework는 Java 기반의 오픈소스 애플리케이션 프레임워크로
대규모 웹 애플리케이션을 효율적으로 개발하기 위해 만들어졌습니다.

객체 지향 프로그래밍을 기반으로 하며 IoC, DI, AOP 같은 핵심 개념을 통해
유지보수와 확장이 쉬운 구조를 제공합니다.`

export function LandingPage() {
  return (
    <div className="page-shell">
      {/* 메인에서는 헤더를 오버레이로 띄워 배경 그래픽이 비치도록 유지 */}
      <Header overlay />
      <main className="figma-main">
        <section className="figma-hero" id="home">
          <div className="figma-hero__bg" aria-hidden>
            <img
              className="figma-hero__rect"
              src={figmaAssets.heroRectangle}
              alt=""
            />
            <img
              className="figma-hero__flower"
              src={figmaAssets.heroFlower}
              alt=""
            />
          </div>
          <div className="figma-hero__inner">
            <p className="figma-hero__line">What&apos;s the</p>
            <h1 className="figma-hero__spring" aria-label="Spring">
              <span className="figma-hero__spring-char figma-hero__spring-char--s">S</span>
              <span className="figma-hero__spring-char figma-hero__spring-char--p">p</span>
              <span className="figma-hero__spring-char figma-hero__spring-char--r">r</span>
              <span className="figma-hero__spring-char figma-hero__spring-char--i">i</span>
              <span className="figma-hero__spring-char figma-hero__spring-char--n">n</span>
              <span className="figma-hero__spring-char figma-hero__spring-char--g">g</span>
            </h1>
            <p className="figma-hero__sub">
              나에게도 봄이올까{'\n'}SpringBoot Framework A to Z
            </p>
          </div>
        </section>

        <section className="figma-intro">
          <div className="figma-intro__inner">
            <h2>Spring?</h2>
            <p>{INTRO_COPY}</p>
          </div>
        </section>

        <section className="figma-compare">
          <div className="figma-compare__inner">
            <div className="figma-compare__image-wrap" aria-hidden>
              <img src={figmaAssets.compareImage} alt="" />
            </div>
            <h2 className="figma-compare__title">Spring vs SpringBoot</h2>
            <div className="figma-compare__body">
              <p>
                Spring Boot는 기존 Spring Framework를 더 쉽고 빠르게 사용할 수 있도록 만든
                도구이다. 기존 Spring은 애플리케이션을 개발할 때
                <br />
                설정 파일 작성, 서버 설정 등 초기 환경 구성이 비교적 복잡한 편입니다.
              </p>
              <p>
                Spring Boot는 이러한 과정을 <strong>단순화</strong>하기 위해{' '}
                <strong>자동 설정과 내장 서버를 제공</strong>한다. 이를 통해 별도의 복잡한
                설정 없이도 바로 애플리케이션을 실행할 수 있어
                <br />
                Spring보다 더 빠르고 편리하게 개발할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="figma-concepts">
          <img
            className="figma-concepts__decor figma-concepts__decor--left"
            src={figmaAssets.conceptsLeft}
            alt=""
            aria-hidden
          />
          <img
            className="figma-concepts__decor figma-concepts__decor--right"
            src={figmaAssets.conceptsRight}
            alt=""
            aria-hidden
          />
          <div className="figma-concepts__inner">
            <h2 className="figma-concepts__title">핵심 개념</h2>
            <div className="figma-card-list">
              {concepts.map((concept) => (
                <a
                  className="figma-card"
                  key={concept.id}
                  href={concept.href}
                  aria-label={`${concept.cardTitle} 상세 페이지 이동`}
                >
                  <div>
                    <h3 className="figma-card__title">{concept.cardTitle}</h3>
                    <p className="figma-card__summary">{concept.cardSummary}</p>
                  </div>
                  <span className="figma-card__cta">
                    자세히 알아보기
                    <CardArrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export function DetailPage({ concept }: { concept: Concept }) {
  const conceptIndex = concepts.findIndex((item) => item.id === concept.id)

  return (
    <div className="page-shell">
      <Header activeId={concept.id} />
      <main>
        <section className="detail-page">
          <div className="detail-page-inner">
            <article className="detail-panel detail-panel-single">
              <div className="detail-hero">
                <div className="detail-eyebrow">{concept.nav}</div>
                <h2>{concept.pageTitle}</h2>
                <p className="detail-kicker">{concept.kicker}</p>
                <p className="detail-lead">{concept.lead}</p>
              </div>

              {concept.id === 'mvc' ? (
                <div className="mvc-diagram" aria-hidden="true">
                  <span className="mvc-model">Model</span>
                  <span className="mvc-spring">Spring</span>
                  <span className="mvc-view">View</span>
                  <span className="mvc-controller">Controller</span>
                </div>
              ) : (
                <div className={`detail-orb detail-orb-${conceptIndex + 1}`} aria-hidden="true" />
              )}

              <div className="detail-sections">
                {concept.sections.map((section) => (
                  <section className="detail-block" key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export function IocPage() {
  return (
    <div className="page-shell ioc-page-shell">
      {/* IoC 페이지도 헤더 뒤로 장식 이미지가 비치도록 동일한 오버레이 헤더 사용 */}
      <Header overlay activeId="ioc" />
      <main className="ioc-page">
        <section className="ioc-hero">
          <img className="ioc-hero__art" src={figmaAssets.iocHero} alt="" aria-hidden />
          <div className="ioc-hero__inner">
            <h1 className="ioc-hero__title">
              <span>Inversion</span>
              <span>of</span>
              <span>Control</span>
            </h1>
            <p className="ioc-hero__kicker">
              으앗~ 내 제어권이~!!
              <br />
              제어의 역전
            </p>
          </div>
        </section>

        <section className="ioc-section ioc-section--concept">
          <div className="ioc-section__inner">
            <h2 className="ioc-section__title ioc-section__title--light">개념</h2>
            <p className="ioc-section__body ioc-section__body--light">
              IoC(Inversion of Control)는 제어의 역전을 의미하는 개념으로, 객체의 생성과
              관리에 대한 제어권이 개발자가 아닌 프레임워크에게 넘어가는 구조입니다.
              일반적인 프로그램에서는 개발자가 직접 객체를 생성하고 관리하지만,
              스프링에서는 이러한 작업을 스프링 컨테이너가 대신 관리합니다.
            </p>
          </div>
        </section>

        <section className="ioc-section ioc-section--right">
          <div className="ioc-section__inner">
            <h2 className="ioc-section__title ioc-section__title--right">기존 방식과의 차이</h2>
            <p className="ioc-section__body ioc-section__body--right">
              기존 방식에서는 개발자가 필요한 객체를 직접 생성하여 사용합니다. 하지만
              IoC가 적용된 환경에서는 객체 생성과 관리가 스프링 컨테이너에 의해
              이루어지며, 개발자는 객체의 사용에만 집중하면 됩니다. 이러한 방식은
              코드의 구조를 더 유연하게 만들어 줍니다.
            </p>
          </div>
        </section>

        <section className="ioc-section">
          <div className="ioc-section__inner">
            <h2 className="ioc-section__title">IoC in Spring</h2>
            <p className="ioc-section__body">
              스프링에서는 ApplicationContext와 같은 컨테이너가 IoC를 담당합니다.
              컨테이너는 애플리케이션 실행 시 필요한 객체를 생성하고 관리하며, 객체 간의
              의존 관계도 함께 설정해 줍니다.
            </p>
          </div>
        </section>

        <section className="ioc-section ioc-section--last">
          <div className="ioc-section__inner">
            <h2 className="ioc-section__title">장점</h2>
            <p className="ioc-section__body">
              IoC를 사용하면 객체 간 결합도가 낮아지고 코드의 재사용성이 높아집니다.
              또한 객체 관리가 프레임워크에 의해 이루어지기 때문에 유지보수가 쉬워지고
              확장성이 향상되는 장점이 있습니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
