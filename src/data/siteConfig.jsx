import { 
    MdOutlineBrandingWatermark, 
    MdOutlineWeb, 
    MdOutlineInsights 
} from "react-icons/md";
import { FiMessageCircle, FiFeather, FiTarget } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

export const siteConfig = {
  cs: {
    title: "Aetheria Studio",
    desc_short: "Tvoříme značky, které dýchají.",
    desc_long: "Jsme butikové studio zaměřené na branding a funkční webdesign. Proměňujeme nápady v digitální zážitky a konzistentní vizuální příběhy, které vaši klienti milují.",
    
    philosophy: {
      title: "Věříme v sílu promyšleného minimalismu a úzké spolupráce.",
      text: "V Aetheria Design Studio odmítáme masovou produkci. Každému projektu se věnujeme s butikovou péčí – od prvního náčrtu až po finální kód. Naším cílem není jen navrhnout logo nebo web, ale uchopit podstatu vaší značky a přetavit ji v ucelený, funkční a nadčasový vizuální systém. Transparentnost, důraz na detail a hluboké porozumění klientovi jsou pilíře, na kterých stavíme každý náš digitální příběh."
    },

    approach: {
      title: "Proč Aetheria?",
      items: [
        {
          id: "understanding",
          number: "01",
          title: "Porozumění",
          icon: <FiMessageCircle />,
          text: "Nejdřív nasloucháme. Detailní analýza cílů a podstaty vaší značky.",
        },
        {
          id: "aesthetics",
          number: "02",
          title: "Estetika s duší",
          icon: <FiFeather />,
          text: "Propojujeme čistý minimalismus s emocí, která rezonuje s vaším publikem."
        },
        {
          id: "precision",
          number: "03",
          title: "Precizní realizace",
          icon: <FiTarget />,
          text: "Od prvního pixelu po finální spuštění. Každý detail má svůj účel."
        }
      ]
    },

    services: [
        {
            id: "branding",
            title: "Branding",
            desc_short: "Vytvoříme silnou, konzistentní vizuální identitu od loga po paletu, která rezonuje s vaším příběhem.",
            desc_long: "Stavíme komplexní vizuální identity, které vyprávějí váš jedinečný příběh. To zahrnuje profesionální návrh loga, výběr typografie a strategickou paletu barev. Naším cílem je zajistit, aby vaše značka působila konzistentně a zapamatovatelně na všech digitálních i fyzických platformách a zanechala v zákaznících silný dojem.",
            icon: <MdOutlineBrandingWatermark />
        },
        {
            id: "webdesign",
            title: "Webdesign",
            desc_short: "Navrhujeme a vyvíjíme weby, které nejsou jen krásné, ale především funkční a přehledné.",
            desc_long: "Vytváříme vysoce výkonné webové stránky, které spojují estetiku s technickou precizností. S využitím moderních frameworků jako React zajišťujeme, že váš web bude bleskově rychlý, responzivní a optimalizovaný pro vyhledávače. Od drátěných modelů až po poslední řádek kódu se soustředíme na doručení uživatelského zážitku, který mění návštěvníky v zákazníky.",
            icon: <MdOutlineWeb />
        },
        {
            id: "strategy",
            title: "Digitální strategie",
            desc_short: "Design bez strategie je jen dekorace. Pomáháme nastavit cestu vašeho zákazníka tak, aby web nebyl jen vizitkou, ale výkonným prodejním nástrojem.",
            desc_long: "Design bez strategie je jen dekorace. Analyzujeme váš trh, konkurenci i cílovou skupinu, abychom naplánovali efektivní cestu zákazníka. Nastavujeme jasné cíle a KPI, aby vaše digitální prezentace nebyla jen vizitkou, ale výkonným nástrojem pro růst a automatizaci prodeje.",
            icon: <MdOutlineInsights />
        },
        {
            id: "consultation",
            title: "Konzultace",
            desc_short: "Začínáme dialogem. Poskytujeme expertní vhled a strategické vedení pro váš projekt ještě před prvními návrhy.",
            desc_long: "Každý úspěšný projekt začíná hlubokým pochopením vaší vize. Poskytujeme expertní vhled a strategické vedení ještě předtím, než se pohne první pixel. Ať už ladíte stávající produkt nebo rozjíždíte nový projekt, naše konzultace pomohou ujasnit cíle, minimalizovat rizika a nastavit cestu k dlouhodobému úspěchu.",
            icon: <FaRegCommentDots />
        }
    ],

    clients_title: "Naši klienti",
    clients: [
        {
            name: "Klára Novotná",
            job: "Zakladatelka Luna Jewelry",
            text: "Spolupráce s Aetheria Studio pro nás byla naprosto zásadní. Dokázali přetavit naši vizi do vizuální identity, která je jemná, a přesto neuvěřitelně silná. Naše nová značka teď konečně dýchá."
        },
        {
            name: "Marek Svoboda",
            job: "CEO ve SkyLimit Tech",
            text: "Hledali jsme někoho, kdo rozumí modernímu webu a zároveň má cit pro detail. Výsledek předčil naše očekávání – web je rychlý, intuitivní a vizuálně naprosto čistý."
        },
        {
            name: "Elena Jung",
            job: "Art Director, Seoul Gallery",
            text: "Aetheria Studio má vzácnou schopnost naslouchat a pochopit podstatu projektu. Jejich cit pro typografii a barvy je výjimečný a přesahuje kulturní hranice."
        },
        {
            name: "David Konečný",
            job: "Zakladatel Form & Space",
            text: "Jako architekt si potrpím na geometrii a čistotu. Aetheria Studio tyto principy přeneslo do mého webu s naprostou lehkostí. Výsledek je funkční umělecké dílo."
        },
        {
            name: "Anna Blažková",
            job: "Majitelka Bistro Soul",
            text: "Potřebovali jsme branding, který lidem napoví, jak naše jídlo chutná – čerstvě a poctivě. Barevná paleta, kterou pro nás studio vyvinulo, funguje v interiéru i na sociálních sítích skvěle."
        },
        {
            name: "Tomáš Hrubý",
            job: "Produktový manažer, Flow State",
            text: "Jejich smysl pro UX a jemné animace je na jiné úrovni. Web není jen statická stránka, ale plynulý zážitek, který naše uživatele baví."
        },
        {
            name: "Linda Wong",
            job: "Instruktorka jógy",
            text: "Moje značka musí vyzařovat klid. Aetheria vytvořila vizuální identitu, která mě přesně definuje. Spolupráce byla velmi osobní a profesionální."
        },
        {
            name: "Petr Čech",
            job: "Fotograf",
            text: "Hledal jsem portfolio, které nebude křičet, ale nechá vyniknout mé fotky. Minimalismus v podání Aetheria Studio je přesně to, co jsem roky hledal."
        }
    ]
  },

  en: {
    title: "Aetheria Studio",
    desc_short: "We create brands that breathe.",
    desc_long: "We are a boutique studio focused on branding and functional web design. We turn ideas into digital experiences and consistent visual stories your clients love.",
    
    philosophy: {
      title: "We believe in the power of thoughtful minimalism and close collaboration.",
      text: "At Aetheria Design Studio, we reject mass production. We approach every project with boutique care – from the first sketch to the final code. Our goal is not just to design a logo or a website, but to capture the essence of your brand and transform it into a cohesive, functional, and timeless visual system."
    },

    approach: {
      title: "Why Aetheria?",
      items: [
        {
          id: "understanding",
          number: "01",
          title: "Understanding",
          icon: <FiMessageCircle />,
          text: "First, we listen. Detailed analysis of goals and the essence of your brand.",
        },
        {
          id: "aesthetics",
          number: "02",
          title: "Aesthetics with Soul",
          icon: <FiFeather />,
          text: "We combine clean minimalism with an emotion that resonates with your audience."
        },
        {
          id: "precision",
          number: "03",
          title: "Precise Execution",
          icon: <FiTarget />,
          text: "From the first pixel to the final launch. Every detail has its purpose."
        }
      ]
    },

    services: [
        {
            id: "branding",
            title: "Branding",
            desc_short: "We create a strong, consistent visual identity from logo to palette that resonates with your story.",
            desc_long: "We build comprehensive visual identities that tell your unique story. This includes professional logo design, custom typography, and a strategic color palette. Our goal is to ensure your brand remains consistent and memorable across all physical and digital touchpoints, creating a lasting impression on your audience.",
            icon: <MdOutlineBrandingWatermark />
        },
        {
            id: "webdesign",
            title: "Web Design",
            desc_short: "We design and develop websites that are not only beautiful but, above all, functional and clear.",
            desc_long: "We create high-performance websites that blend aesthetics with technical precision. Using modern frameworks like React and Next.js, we ensure your site is lightning-fast, fully responsive, and SEO-optimized. From wireframes to the final line of code, we focus on delivering a seamless user experience that converts visitors into customers.",
            icon: <MdOutlineWeb />
        },
        {
            id: "strategy",
            title: "Digital Strategy",
            desc_short: "Design without strategy is just decoration. We help set your customer's journey so the web isn't just a business card.",
            desc_long: "Design without strategy is just decoration. We analyze your market, competitors, and target audience to map out an effective customer journey. We set clear goals and KPIs to ensure your digital presence isn't just a business card, but a powerful engine for growth and sales automation.",
            icon: <MdOutlineInsights />
        },
        {
            id: "consultation",
            title: "Consultation",
            desc_short: "We start with a dialogue. We provide expert insight and strategic guidance for your project.",
            desc_long: "Every successful project starts with a deep dive into your vision. We provide expert insights and strategic guidance before a single pixel is moved. Whether you're refining an existing product or launching a new venture, our consultations help clarify your goals, minimize risks, and set a roadmap for long-term success.",
            icon: <FaRegCommentDots />
        }
    ],

    clients_title: "Our clients",
    clients: [
        {
            name: "Klára Novotná",
            job: "Founder of Luna Jewelry",
            text: "The collaboration with Aetheria Studio was absolutely crucial for us. They managed to transform our vision into a visual identity that is delicate yet incredibly strong."
        },
        {
            name: "Marek Svoboda",
            job: "CEO at SkyLimit Tech",
            text: "We were looking for someone who understands the modern web and has an eye for detail. The result exceeded our expectations – the web is fast and clean."
        },
        {
            name: "Elena Jung",
            job: "Art Director, Seoul Gallery",
            text: "Aetheria Studio has a rare ability to listen and understand the essence of a project. Their sense of typography and color is exceptional."
        },
        {
            name: "David Konečný",
            job: "Founder of Form & Space",
            text: "As an architect, I value geometry and clarity. Aetheria Studio brought these principles to my website with total ease. The result is a functional piece of art."
        },
        {
            name: "Anna Blažková",
            job: "Owner of Bistro Soul",
            text: "We needed branding that tells people how our food tastes – fresh and honest. The color palette developed by the studio works perfectly in our interior and on social media."
        },
        {
            name: "Tomáš Hrubý",
            job: "Product Manager at Flow State",
            text: "Their sense of UX and subtle animations is on another level. The website isn't just a static page, but a fluid experience that our users enjoy."
        },
        {
            name: "Linda Wong",
            job: "Yoga Instructor",
            text: "My brand needs to radiate calm. Aetheria created a visual identity that defines me perfectly. The collaboration was very personal and professional."
        },
        {
            name: "Petr Čech",
            job: "Photographer",
            text: "I was looking for a portfolio that doesn't scream but lets my photos stand out. The minimalism provided by Aetheria Studio is exactly what I've been looking for."
        }
    ]
  },

  ko: {
    title: "에테리아 스튜디오",
    desc_short: "숨을 쉬는 브랜드, 우리가 만듭니다.",
    desc_long: "우리는 브랜딩과 기능적인 웹 디자인에 집중하는 부티크 스튜디오입니다. 아이디어를 디지털 경험과 일관된 시각적 스토리로 변화시켜 고객의 마음을 사로잡습니다.",
    
    philosophy: {
      title: "우리는 사려 깊은 미니멀리즘과 긴밀한 협업의 힘을 믿습니다.",
      text: "에테리아 디자인 스튜디오는 대량 생산을 지양합니다. 우리는 첫 스케치부터 최종 코드에 이르기까지 부티크만의 세심한 관리로 모든 프로젝트에 임합니다. 우리의 목표는 단순한 로고나 웹사이트 디자인이 아니라, 브랜드의 본질을 파악하여 일관되고 기능적이며 유행을 타지 않는 시각적 시스템으로 만드는 것입니다."
    },

    approach: {
      title: "왜 에테리아인가?",
      items: [
        {
          id: "understanding",
          number: "01",
          title: "이해",
          icon: <FiMessageCircle />,
          text: "우리는 먼저 경청합니다. 목표와 브랜드 본질에 대한 세밀한 분석을 진행합니다.",
        },
        {
          id: "aesthetics",
          number: "02",
          title: "영혼을 담은 미학",
          icon: <FiFeather />,
          text: "깔끔한 미니멀리즘과 대중의 공감을 불러일으키는 감성을 결합합니다."
        },
        {
          id: "precision",
          number: "03",
          title: "정교한 실행",
          icon: <FiTarget />,
          text: "첫 픽셀부터 최종 런칭까지, 모든 디테일에는 목적이 있습니다."
        }
      ]
    },

    services: [
        {
            id: "branding",
            title: "브랜딩",
            desc_short: "로고부터 팔레트까지 당신의 이야기에 공명하는 강력하고 일관된 시각적 아이덴티티를 만듭니다.",
            desc_long: "우리는 당신만의 고유한 이야기를 담은 종합적인 시각적 정체성을 구축합니다. 전문적인 로고 디자인, 맞춤형 타이포그래피, 전략적인 컬러 팔레트를 포함하여, 브랜드가 모든 온·오프라인 접점에서 일관되고 기억에 남을 수 있도록 돕습니다. 당신의 브랜드가 고객에게 깊은 인상을 남길 수 있도록 가치를 시각화합니다.",
            icon: <MdOutlineBrandingWatermark />
        },
        {
            id: "webdesign",
            title: "웹 디자인",
            desc_short: "아름다울 뿐만 아니라 무엇보다 기능적이고 명확한 웹사이트를 설계하고 개발합니다.",
            desc_long: "미학적 아름다움과 기술적 정밀함이 조화를 이룬 고성능 웹사이트를 제작합니다. React와 같은 최신 프레임워크를 사용하여 속도가 빠르고, 모든 기기에 최적화된 반응형 웹을 구현합니다. 와이어프레임부터 최종 코드까지, 방문자를 실제 고객으로 전환시키는 완벽한 사용자 경험(UX)을 제공하는 데 집중합니다.",
            icon: <MdOutlineWeb />
        },
        {
            id: "strategy",
            title: "디지털 전략",
            desc_short: "전략 없는 디자인은 장식일 뿐입니다. 웹이 단순한 명함이 되지 않도록 고객 여정을 설정해 드립니다.",
            desc_long: "전략 없는 디자인은 단순한 장식에 불과합니다. 우리는 시장, 경쟁사 및 타겟 고객을 분석하여 효과적인 고객 여정을 설계합니다. 명확한 목표와 핵심 성과 지표(KPI)를 설정하여, 당신의 디지털 채널이 단순한 홍보 수단을 넘어 강력한 성장과 매출 자동화의 엔진이 되도록 만듭니다.",
            icon: <MdOutlineInsights />
        },
        {
            id: "consultation",
            title: "컨설팅",
            desc_short: "대화로 시작합니다. 프로젝트의 첫 디자인 전 전문가의 통찰과 전략적 가이드를 제공합니다.",
            desc_long: "모든 성공적인 프로젝트는 당신의 비전을 깊이 이해하는 것에서 시작됩니다. 본격적인 기획 단계 전, 전문가의 통찰력과 전략적 가이드를 제공합니다. 기존 제품을 개선하든 새로운 사업을 시작하든, 우리의 컨설팅은 목표를 명확히 하고 리스크를 최소화하며 장기적인 성공을 위한 로드맵을 제시합니다.",
            icon: <FaRegCommentDots />
        }
    ],

    clients_title: "저희 고객들",
    clients: [
        {
            name: "Klára Novotná",
            job: "Luna Jewelry 창립자",
            text: "에테리아 스튜디오와의 협업은 우리에게 매우 결정적이었습니다. 그들은 우리의 비전을 섬세하면서도 강렬한 시각적 정체성으로 변화시켰습니다."
        },
        {
            name: "Marek Svoboda",
            job: "SkyLimit Tech 대표",
            text: "우리는 현대적인 웹을 이해하면서 디테일에 강한 전문가를 찾고 있었습니다. 결과는 기대 이상이었으며 웹사이트는 빠르고 깔끔합니다."
        },
        {
            name: "Elena Jung",
            job: "서울 갤러리 아트 디렉터",
            text: "에테리아 스튜디오는 프로젝트의 본질을 듣고 이해하는 흔치 않은 능력을 갖추고 있습니다. 타이포그래피와 색감에 대한 그들의 감각은 독보적입니다."
        },
        {
            name: "David Konečný",
            job: "Form & Space 창립자",
            text: "건축가로서 저는 기하학적 구조와 명확성을 중요하게 생각합니다. 에테리아 스튜디오는 이러한 원칙을 놀라운 가벼움으로 제 웹사이트에 녹여냈습니다. 결과물은 기능적인 예술 작품 그 자체입니다."
        },
        {
            name: "Anna Blažková",
            job: "Bistro Soul 대표",
            text: "우리 음식이 얼마나 신선하고 정직한지 알려줄 수 있는 브랜딩이 필요했습니다. 스튜디오에서 개발한 컬러 팔레트는 인테리어와 SNS 모두에서 완벽하게 어우러집니다."
        },
        {
            name: "Tomáš Hrubý",
            job: "Flow State 제품 매니저",
            text: "UX에 대한 그들의 감각과 섬세한 애니메이션은 차원이 다릅니다. 웹사이트는 단순한 페이지가 아니라 사용자가 즐길 수 있는 유동적인 경험을 제공합니다."
        },
        {
            name: "Linda Wong",
            job: "요가 강사",
            text: "제 브랜드는 평온함을 뿜어내야 합니다. 에테리아는 저를 완벽하게 정의하는 시각적 정체성을 만들어주었습니다. 협업 과정은 매우 개인적이면서도 전문적이었습니다."
        },
        {
            name: "Petr Čech",
            job: "사진작가",
            text: "화려하기보다 사진을 돋보이게 해줄 포트폴리오를 찾고 있었습니다. 에테리아 스튜디오의 미니멀리즘은 제가 수년간 찾던 바로 그 스타일입니다."
        }
    ]
  }
};
