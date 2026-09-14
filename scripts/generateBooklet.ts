import fs from 'fs';
import path from 'path';
import { CHAPTERS_INDEX } from '../src/data/chaptersIndex';
import { HISTORICAL_ACTS_DATA } from '../src/data/historicalActsData';
import { SCHEDULES_DATA } from '../src/data/schedulesData';
import { MAGIC_89_PAIRS } from '../src/data/magic89Data';
import { POLITY_TERMS_DATA } from '../src/data/polityTermsData';
import { POLITY_TRICKS_DATA } from '../src/data/tricksData';
import { buildJudicialCases } from './buildJudicialCases';
import { buildQuestions182 } from './buildQuestionsBank';
import { buildAll395Articles } from './buildCompleteArticles';

function escapeHtml(str: string | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateBookletHtml(): string {
  const judicialCases = buildJudicialCases();
  const questions182 = buildQuestions182();
  const allArticles = buildAll395Articles();

  // Master 9 Core Sections Directory with Page Numbers (Bilingual with English 1st)
  const MASTER_SECTIONS_DIRECTORY = [
    {
      secId: 'sec-1',
      secNum: 'Section 1 (खंड 1)',
      titleEn: 'Master Table of Contents & Complete Page Directory',
      titleHi: 'प्रामाणिक विषय सूची एवं सम्पूर्ण पृष्ठ निर्देशिका',
      coverageEn: 'Complete 154-page compendium structure, 9 core sections, 22 constitutional parts directory & quick topic finder.',
      coverageHi: 'सम्पूर्ण 154 पृष्ठों की संरचना, 9 मुख्य अध्ययन खंड, संविधान के सभी 22 भागों का पृष्ठवार विवरण, विशेष अध्ययन मॉड्यूल एवं त्वरित विषय खोजक।',
      pageRange: 'PAGE NO. 2',
      badge: 'Index Directory'
    },
    {
      secId: 'sec-2',
      secNum: 'Section 2 (खंड 2)',
      titleEn: 'Constitutional Articles 1 to 395 Complete (Parts I to XXII)',
      titleHi: 'भारतीय संविधान के सभी 395+ अनुच्छेद (भाग 1 से 22 सम्पूर्ण)',
      coverageEn: 'Official English constitutional text, authentic Hindi commentary, detailed clause breakdowns, and high-yield exam takeaways for all 395 articles.',
      coverageHi: 'अनुच्छेद 1 से 395 तक प्रत्येक अनुच्छेद की प्रामाणिक हिंदी व्याख्या, आधिकारिक अंग्रेजी अनुवाद, उपखंड (Clauses) एवं हाई-यील्ड परीक्षा बिंदु।',
      pageRange: 'PAGE NO. 3 TO 88',
      badge: '395+ Articles'
    },
    {
      secId: 'sec-3',
      secNum: 'Section 3 (खंड 3)',
      titleEn: 'Constitutional Evolution: 18 Historical Acts (1773 to 1947)',
      titleHi: 'भारत का संवैधानिक विकास: 18 ऐतिहासिक अधिनियम (1773 - 1947)',
      coverageEn: 'Chronological legal analysis: Company rule (6 Acts) & Crown rule (12 Acts) from Regulating Act 1773 to Indian Independence Act 1947.',
      coverageHi: 'ईस्ट इंडिया कंपनी का शासन (1773 से 1853 तक के 6 चार्टर) एवं ब्रिटिश क्राउन का प्रत्यक्ष शासन (1858 से 1947 तक 12 भारत शासन/परिषद अधिनियम) की तुलनात्मक सारणी।',
      pageRange: 'PAGE NO. 89 TO 97',
      badge: '18 Acts'
    },
    {
      secId: 'sec-4',
      secNum: 'Section 4 (खंड 4)',
      titleEn: 'All 12 Schedules of the Indian Constitution (Detailed Legal Analysis)',
      titleHi: 'संविधान की सभी 12 अनुसूचियां (विस्तृत कानूनी विश्लेषण)',
      coverageEn: 'Complete breakdown of all 12 schedules, key amendments (1st, 52nd, 73rd, 74th), 22 official languages, and allocation of Rajya Sabha seats.',
      coverageHi: 'मूल संविधान की 8 अनुसूचियां + बाद में जोड़ी गई 4 अनुसूचियां (9वीं भू-सुधार, 10वीं दल-बदल, 11वीं पंचायतें 29 विषय, 12वीं नगरपालिकाएं 18 विषय) एवं 22 राजभाषाएं।',
      pageRange: 'PAGE NO. 98 TO 102',
      badge: '12 Schedules'
    },
    {
      secId: 'sec-5',
      secNum: 'Section 5 (खंड 5)',
      titleEn: 'Magic 89 & 90 Comparative Rules (30 Central vs State Pairs)',
      titleHi: 'जादुई ट्रिक: 89 एवं 90 का नियम (केंद्र व राज्य के 30 तुलनात्मक जोड़े)',
      coverageEn: '30 comparative pairs fully mapped: Add 89 for Union-State executive/legislative parallels; Add 90 for judiciary and financial parallels.',
      coverageHi: '+89 का नियम: मंत्रिपरिषद, संसद-विधानसभा, राष्ट्रपति-राज्यपाल के 17 जोड़े; +90 का नियम: सुप्रीम कोर्ट-हाईकोर्ट व वित्तीय प्रावधानों के 13 जोड़े।',
      pageRange: 'PAGE NO. 103 TO 105',
      badge: '30 Pairs'
    },
    {
      secId: 'sec-6',
      secNum: 'Section 6 (खंड 6)',
      titleEn: 'Constitutional Memory Tricks & Formulas (18+ Exam Mnemonics)',
      titleHi: 'संविधान स्मरण सूत्र एवं 18+ स्मार्ट ट्रिक्स (Mnemonics Bank)',
      coverageEn: 'Comprehensive mnemonics bank: Foreign sources (Akbar Aaj Phir), President 52-61 (Pakani Koka), VP 63-69 (Usra Nikas), Governor 153-159, 6 Fundamental Rights, 5 Writs.',
      coverageHi: 'अकबर आज फिर (विदेशी स्रोत), TEARS OF OLD PM, प्रारूप समिति, 3SDR, पकानि कोका (राष्ट्रपति), उसरा निकास (उपराष्ट्रपति), समस्त शोध (6 मूल अधिकार), 5 रिटें, आदि।',
      pageRange: 'PAGE NO. 106 TO 113',
      badge: '18+ Tricks'
    },
    {
      secId: 'sec-7',
      secNum: 'Section 7 (खंड 7)',
      titleEn: '45 Landmark Supreme Court Judgments (Bilingual Case Analysis)',
      titleHi: 'सर्वोच्च न्यायालय के 45 ऐतिहासिक लैंडमार्क वाद (Constitutional Cases)',
      coverageEn: '45 milestone constitutional cases with legal issues, constitutional bench rulings, basic structure doctrine, and exam takeaways in English & Hindi.',
      coverageHi: 'केशवानंद भारती (मूल ढांचा), मिनर्वा मिल्स, मेनका गांधी, पुट्टास्वामी (निजता), नवतेज जौहर, इंदिरा साहनी (आरक्षण सीमा), विशाखा गाइडलाइंस सहित 45 प्रमुख वाद।',
      pageRange: 'PAGE NO. 114 TO 122',
      badge: '45 Cases'
    },
    {
      secId: 'sec-8',
      secNum: 'Section 8 (खंड 8)',
      titleEn: 'Constitutional Terminology & New Criminal Laws 2024 (BNS, BNSS, BSA)',
      titleHi: 'संवैधानिक शब्दावली एवं नए आपराधिक कानून 2024 (Polity Terms & 2024 Laws)',
      coverageEn: '22 Parliamentary terms & procedures explained plus comprehensive comparative overview of India’s 3 new criminal justice codes enacted in 2024.',
      coverageHi: '22 संसदीय शब्दावलियां (शून्यकाल, गिलोटिन, सचेतक, लैम डक) + भारतीय न्याय संहिता (BNS), नागरिक सुरक्षा संहिता (BNSS) व भारतीय साक्ष्य अधिनियम (BSA) 2024।',
      pageRange: 'PAGE NO. 123 TO 126',
      badge: 'Terms & Laws'
    },
    {
      secId: 'sec-9',
      secNum: 'Section 9 (खंड 9)',
      titleEn: '182 Official Past Year Questions Bank (Bilingual with Explanations)',
      titleHi: 'विविध प्रश्नावली: विगत वर्षों के 182 परीक्षा प्रश्न (PYQ Practice Bank)',
      coverageEn: '182 authentic previous year questions (UPSI, Police, SSC, RO/ARO) with bilingual question stems, bilingual multiple-choice options, and thorough bilingual explanations.',
      coverageHi: 'UPSI, UP Police Constable, SSC CGL/CPO, RO/ARO एवं State PSCs के 182 विगत प्रश्न, द्विभाषी प्रश्न पत्र, 4 द्विभाषी विकल्प, सही उत्तर व गहन प्रामाणिक व्याख्या।',
      pageRange: 'PAGE NO. 127 TO 154',
      badge: '182 Questions'
    }
  ];

  // Detailed 22 Parts of Constitution Directory with exact page numbers (English 1st)
  const PARTS_DIRECTORY = [
    {
      partKey: 'Part I',
      nameEn: 'The Union and its Territory',
      nameHi: 'संघ एवं उसका राज्यक्षेत्र',
      articlesSpan: 'Articles 1 - 4 (अनुच्छेद 1 - 4)',
      pageRange: 'PAGE NO. 3',
      keyTopicsEn: 'India as Union of States (1), Admission/establishment of new states (2), Formation of new states & boundary/name alterations (3)',
      keyTopicsHi: 'भारत राज्यों का संघ (1), नए राज्यों का प्रवेश/स्थापना (2), नए राज्यों का निर्माण व सीमा/नाम परिवर्तन (3)'
    },
    {
      partKey: 'Part II',
      nameEn: 'Citizenship',
      nameHi: 'नागरिकता',
      articlesSpan: 'Articles 5 - 11 (अनुच्छेद 5 - 11)',
      pageRange: 'PAGE NO. 4',
      keyTopicsEn: 'Citizenship at commencement (5), Rights of migrants from Pakistan (6), Single citizenship, Citizenship Act 1955 & Parliament powers (11)',
      keyTopicsHi: 'संविधान प्रारंभ पर नागरिकता (5), पाकिस्तान से प्रवासन (6), एकल नागरिकता, नागरिकता अधिनियम 1955 व संसद की शक्ति (11)'
    },
    {
      partKey: 'Part III',
      nameEn: 'Fundamental Rights',
      nameHi: 'मूल अधिकार (मौलिक अधिकार)',
      articlesSpan: 'Articles 12 - 35 (अनुच्छेद 12 - 35)',
      pageRange: 'PAGE NO. 5 TO 11',
      keyTopicsEn: 'Definition of State (12), Judicial Review (13), Right to Equality (14-18), Right to Freedom (19-22), Anti-Exploitation (23-24), Freedom of Religion (25-28), Cultural/Educational (29-30), Constitutional Remedies & 5 Writs (32)',
      keyTopicsHi: 'राज्य की परिभाषा (12), विधि असंगत (13), समानता (14-18), स्वतंत्रता (19-22), शोषण विरुद्ध (23-24), धर्म की स्वतंत्रता (25-28), संस्कृति-शिक्षा (29-30), संवैधानिक उपचार व 5 रिटें (32)'
    },
    {
      partKey: 'Part IV',
      nameEn: 'Directive Principles of State Policy (DPSP)',
      nameHi: 'राज्य की नीति के निदेशक तत्व (DPSP)',
      articlesSpan: 'Articles 36 - 51 (अनुच्छेद 36 - 51)',
      pageRange: 'PAGE NO. 12 TO 15',
      keyTopicsEn: 'Welfare State (38), Equal Justice & Free Legal Aid (39A), Village Panchayats (40), Uniform Civil Code UCC (44), Early Childhood Care & Education (45), Promotion of International Peace (51)',
      keyTopicsHi: 'कल्याणकारी राज्य (38), समान न्याय व विधिक सहायता (39A), ग्राम पंचायतें (40), समान नागरिक संहिता UCC (44), 6 वर्ष से कम बाल शिक्षा (45), अंतरराष्ट्रीय शांति (51)'
    },
    {
      partKey: 'Part IVA',
      nameEn: 'Fundamental Duties',
      nameHi: 'मूल कर्तव्य (11 मौलिक कर्तव्य)',
      articlesSpan: 'Article 51A (अनुच्छेद 51A)',
      pageRange: 'PAGE NO. 16',
      keyTopicsEn: '10 Fundamental Duties added by 42nd Amendment 1976 (Swaran Singh Committee) + 11th Duty for child education (6-14 yrs) by 86th Amendment 2002',
      keyTopicsHi: '42वें संविधान संशोधन 1976 (स्वर्ण सिंह समिति) द्वारा जोड़े गए 10 कर्तव्य + 86वें संशोधन 2002 द्वारा 11वां शिक्षा कर्तव्य (6-14 वर्ष)'
    },
    {
      partKey: 'Part V',
      nameEn: 'The Union Government',
      nameHi: 'संघ सरकार (कार्यपालिका, संसद, सुप्रीम कोर्ट, CAG)',
      articlesSpan: 'Articles 52 - 151 (अनुच्छेद 52 - 151)',
      pageRange: 'PAGE NO. 17 TO 35',
      keyTopicsEn: 'President (52-62), Vice-President (63-71), Council of Ministers (74-75), Attorney General (76), Parliament (79-122), President Ordinance (123), Supreme Court (124-147), Comptroller & Auditor-General CAG (148-151)',
      keyTopicsHi: 'राष्ट्रपति (52-62), उपराष्ट्रपति (63-71), मंत्रिपरिषद (74-75), महान्यायवादी (76), संसद (79-122), राष्ट्रपति अध्यादेश (123), उच्चतम न्यायालय (124-147), नियंत्रक एवं महालेखापरीक्षक CAG (148-151)'
    },
    {
      partKey: 'Part VI',
      nameEn: 'The State Government',
      nameHi: 'राज्य सरकार (कार्यपालिका, विधानमंडल, हाईकोर्ट)',
      articlesSpan: 'Articles 152 - 237 (अनुच्छेद 152 - 237)',
      pageRange: 'PAGE NO. 36 TO 50',
      keyTopicsEn: 'Governor (153-162), Chief Minister & Council of Ministers (163-164), Advocate General (165), State Legislature (168-212), Governor Ordinance (213), High Courts (214-232), Subordinate Courts (233-237)',
      keyTopicsHi: 'राज्यपाल (153-162), मुख्यमंत्री व मंत्रिपरिषद (163-164), महाधिवक्ता (165), राज्य विधानमंडल (168-212), राज्यपाल अध्यादेश (213), उच्च न्यायालय (214-232), अधीनस्थ न्यायालय (233-237)'
    },
    {
      partKey: 'Part VII',
      nameEn: 'States in Part B of First Schedule (Repealed)',
      nameHi: 'प्रथम अनुसूची के भाग ख के राज्य (निरसित)',
      articlesSpan: 'Article 238 (Repealed)',
      pageRange: 'PAGE NO. 51',
      keyTopicsEn: 'Repealed by 7th Constitutional Amendment Act 1956 during Indian States Reorganisation',
      keyTopicsHi: '7वें संविधान संशोधन अधिनियम 1956 द्वारा भारतीय राज्य पुनर्गठन के समय पूर्णतः निरसित (Repealed)'
    },
    {
      partKey: 'Part VIII',
      nameEn: 'The Union Territories',
      nameHi: 'संघ राज्यक्षेत्र (केंद्र शासित प्रदेश)',
      articlesSpan: 'Articles 239 - 242 (अनुच्छेद 239 - 242)',
      pageRange: 'PAGE NO. 51',
      keyTopicsEn: 'Administration of Union Territories (239), Special provisions for Delhi (239AA - 69th Amendment), High Courts for UTs (241)',
      keyTopicsHi: 'केंद्र शासित प्रदेशों का प्रशासन (239), दिल्ली हेतु विशेष उपबंध (239AA - 69वां संशोधन), UTs हेतु उच्च न्यायालय (241)'
    },
    {
      partKey: 'Part IX',
      nameEn: 'The Panchayats, Municipalities & Co-operatives',
      nameHi: 'पंचायतें, नगरपालिकाएं व सहकारी समितियां (स्थानीय स्वशासन)',
      articlesSpan: 'Articles 243 - 243ZT (अनुच्छेद 243 - 243ZT)',
      pageRange: 'PAGE NO. 52 TO 54',
      keyTopicsEn: '73rd Amendment (Gram Sabha, 3-tier Panchayats, 29 subjects, 11th Schedule), 74th Amendment (Municipalities, Ward Committees, 18 subjects, 12th Schedule), 97th Amendment (Co-operative Societies)',
      keyTopicsHi: '73वां संशोधन (ग्राम सभा, त्रि-स्तरीय पंचायतें, 29 विषय, अनुसूची 11), 74वां संशोधन (नगरपालिकाएं, वार्ड समितियां, 18 विषय, अनुसूची 12), 97वां संशोधन (सहकारी समितियां)'
    },
    {
      partKey: 'Part X',
      nameEn: 'The Scheduled and Tribal Areas',
      nameHi: 'अनुसूचित और जनजाति क्षेत्र',
      articlesSpan: 'Articles 244 - 244A (अनुच्छेद 244 - 244A)',
      pageRange: 'PAGE NO. 55',
      keyTopicsEn: 'Administration of 5th & 6th Schedule areas, autonomous state creation in tribal areas of Assam (244-244A)',
      keyTopicsHi: '5वीं व 6वीं अनुसूची क्षेत्रों का प्रशासन, असम के कुछ क्षेत्रों से स्वायत्त राज्य का निर्माण'
    },
    {
      partKey: 'Part XI',
      nameEn: 'Relations between the Union and the States',
      nameHi: 'संघ और राज्यों के बीच संबंध (विधायी व प्रशासनिक)',
      articlesSpan: 'Articles 245 - 263 (अनुच्छेद 245 - 263)',
      pageRange: 'PAGE NO. 55 TO 58',
      keyTopicsEn: 'Distribution of legislative powers (245-255), Administrative relations (256-261), Inter-state water disputes adjudication (262), Establishment of Inter-State Council (263)',
      keyTopicsHi: 'विधायी शक्तियों का वितरण (245-255), प्रशासनिक संबंध (256-261), अंतर-राज्य जल विवाद अधिकरण (262), अंतर-राज्य परिषद की स्थापना (263)'
    },
    {
      partKey: 'Part XII',
      nameEn: 'Finance, Property, Contracts and Suits',
      nameHi: 'वित्त, संपत्ति, संविदाएं और वाद',
      articlesSpan: 'Articles 264 - 300A (अनुच्छेद 264 - 300A)',
      pageRange: 'PAGE NO. 59 TO 65',
      keyTopicsEn: 'Consolidated Fund of India (266), Contingency Fund (267), Finance Commission (280), Legal Right to Property (300A - 44th Amendment 1978)',
      keyTopicsHi: 'भारत की संचित निधि (266), आकस्मिकता निधि (267), वित्त आयोग (280), संपत्ति का विधिक अधिकार (300A - 44वां संशोधन 1978)'
    },
    {
      partKey: 'Part XIII',
      nameEn: 'Trade, Commerce and Intercourse within India',
      nameHi: 'भारत के राज्यक्षेत्र के भीतर व्यापार, वाणिज्य और समागम',
      articlesSpan: 'Articles 301 - 307 (अनुच्छेद 301 - 307)',
      pageRange: 'PAGE NO. 66',
      keyTopicsEn: 'Freedom of trade, commerce & intercourse throughout India (301), Power of Parliament to impose restrictions in public interest (302)',
      keyTopicsHi: 'व्यापार, वाणिज्य व समागम की स्वतंत्रता (301), संसद द्वारा लोकहित में प्रतिबंध अधिरोपित करने की शक्ति (302)'
    },
    {
      partKey: 'Part XIV',
      nameEn: 'Services under the Union and the States',
      nameHi: 'संघ और राज्यों के अधीन सेवाएं (लोक सेवा आयोग)',
      articlesSpan: 'Articles 308 - 323 (अनुच्छेद 308 - 323)',
      pageRange: 'PAGE NO. 67 TO 70',
      keyTopicsEn: 'All India Services (312), Union Public Service Commission (UPSC) & State PSCs establishment, functions and independence (315-323)',
      keyTopicsHi: 'अखिल भारतीय सेवाएं (312), संघ लोक सेवा आयोग (UPSC) व राज्य लोक सेवा आयोग (State PSCs) की स्थापना, कार्य व स्वतंत्रता (315-323)'
    },
    {
      partKey: 'Part XIVA',
      nameEn: 'Tribunals (Administrative Tribunals)',
      nameHi: 'अधिकरण (केंद्रीय प्रशासनिक अधिकरण - CAT व SAT)',
      articlesSpan: 'Articles 323A - 323B (अनुच्छेद 323A - 323B)',
      pageRange: 'PAGE NO. 71',
      keyTopicsEn: 'Administrative Tribunals for public services (323A) and Tribunals for other matters (323B) added by 42nd Amendment 1976',
      keyTopicsHi: '42वें संशोधन 1976 द्वारा जोड़े गए प्रशासनिक अधिकरण (323A) एवं अन्य विषयों हेतु अधिकरण (323B)'
    },
    {
      partKey: 'Part XV',
      nameEn: 'Elections (Election Commission of India)',
      nameHi: 'निर्वाचन (भारत निर्वाचन आयोग)',
      articlesSpan: 'Articles 324 - 329A (अनुच्छेद 324 - 329A)',
      pageRange: 'PAGE NO. 72 TO 73',
      keyTopicsEn: 'Superintendence, direction & control of Election Commission (324), Universal adult suffrage 18 yrs (326 - 61st Amendment 1988), Bar to interference by courts in electoral matters (329)',
      keyTopicsHi: 'चुनाव आयोग की अधीक्षण, निर्देशन व नियंत्रण शक्ति (324), वयस्क मताधिकार 18 वर्ष (326 - 61वां संशोधन 1988), न्यायालयों के हस्तक्षेप का वर्जन (329)'
    },
    {
      partKey: 'Part XVI',
      nameEn: 'Special Provisions Relating to Certain Classes',
      nameHi: 'कुछ वर्गों के संबंध में विशेष उपबंध (आरक्षण व आयोग)',
      articlesSpan: 'Articles 330 - 342A (अनुच्छेद 330 - 342A)',
      pageRange: 'PAGE NO. 74 TO 76',
      keyTopicsEn: 'SC/ST reservation in Lok Sabha (330) & State Assemblies (332), National Commission for Scheduled Castes (338), STs (338A), OBCs (338B)',
      keyTopicsHi: 'लोकसभा में SC/ST आरक्षण (330), विधानसभा में आरक्षण (332), राष्ट्रीय अनुसूचित जाति आयोग (338), राष्ट्रीय अनुसूचित जनजाति आयोग (338A), राष्ट्रीय पिछड़ा वर्ग आयोग (338B)'
    },
    {
      partKey: 'Part XVII',
      nameEn: 'Official Language of the Union & Judiciary',
      nameHi: 'राजभाषा (संघ, प्रादेशिक व न्यायपालिका की भाषा)',
      articlesSpan: 'Articles 343 - 351 (अनुच्छेद 343 - 351)',
      pageRange: 'PAGE NO. 77 TO 79',
      keyTopicsEn: 'Official language of Union is Hindi in Devanagari script (343), English language in Supreme Court & High Courts (348), Primary education in mother tongue (350A), Directives for development of Hindi (351)',
      keyTopicsHi: 'संघ की राजभाषा देवनागरी हिंदी व अंक अंतरराष्ट्रीय (343), सुप्रीम कोर्ट व हाईकोर्ट की भाषा अंग्रेजी (348), प्राथमिक स्तर पर मातृभाषा में शिक्षा (350A), हिंदी भाषा के विकास हेतु निर्देश (351)'
    },
    {
      partKey: 'Part XVIII',
      nameEn: 'Emergency Provisions',
      nameHi: 'आपात उपबंध (राष्ट्रीय, राष्ट्रपति शासन व वित्तीय आपातकाल)',
      articlesSpan: 'Articles 352 - 360 (अनुच्छेद 352 - 360)',
      pageRange: 'PAGE NO. 80 TO 82',
      keyTopicsEn: 'National Emergency for war/external aggression/armed rebellion (352), President’s Rule on failure of constitutional machinery in states (356), Financial Emergency (360), Suspension of Fundamental Rights (358-359)',
      keyTopicsHi: 'युद्ध/बाह्य आक्रमण/सशस्त्र विद्रोह पर राष्ट्रीय आपातकाल (352), राज्यों में संवैधानिक तंत्र की विफलता पर राष्ट्रपति शासन (356), वित्तीय आपातकाल (360), मूल अधिकारों का निलंबन (358-359)'
    },
    {
      partKey: 'Part XIX',
      nameEn: 'Miscellaneous Provisions & Protections',
      nameHi: 'प्रकीर्ण (Miscellaneous)',
      articlesSpan: 'Articles 361 - 367 (अनुच्छेद 361 - 367)',
      pageRange: 'PAGE NO. 83',
      keyTopicsEn: 'Protection & legal immunity of President and Governors from criminal prosecution (361), Recognition of treaties & agreements',
      keyTopicsHi: 'राष्ट्रपति व राज्यपालों को आपराधिक कार्यवाही से विधिक संरक्षण एवं विशेषाधिकार (361), भारतीय संधियों व समझौतों के उपबंध'
    },
    {
      partKey: 'Part XX',
      nameEn: 'Amendment of the Constitution',
      nameHi: 'संविधान का संशोधन',
      articlesSpan: 'Article 368 (अनुच्छेद 368)',
      pageRange: 'PAGE NO. 84',
      keyTopicsEn: 'Constituent power of Parliament to amend Constitution: Simple majority, Special majority (2/3 present & voting), and Special majority + ratification by at least half of State Legislatures',
      keyTopicsHi: 'संसद की संविधान संशोधन शक्ति एवं प्रक्रिया: साधारण बहुमत, विशेष बहुमत (2/3), तथा विशेष बहुमत + कम से कम आधे राज्य विधानमंडलों का अनुसमर्थन'
    },
    {
      partKey: 'Part XXI',
      nameEn: 'Temporary, Transitional and Special Provisions',
      nameHi: 'अस्थायी, संक्रमणशील और विशेष उपबंध',
      articlesSpan: 'Articles 369 - 392 (अनुच्छेद 369 - 392)',
      pageRange: 'PAGE NO. 85 TO 87',
      keyTopicsEn: 'Historical context of Article 370 (J&K), Special provisions for Maharashtra & Gujarat (371), Nagaland (371A), Assam (371B), Manipur (371C), Andhra Pradesh (371D), Sikkim (371F), Karnataka (371J)',
      keyTopicsHi: 'जम्मू-कश्मीर (370 का ऐतिहासिक संदर्भ), महाराष्ट्र-गुजरात (371), नागालैंड (371A), असम (371B), मणिपुर (371C), आंध्र प्रदेश (371D), सिक्किम (371F), कर्नाटक (371J)'
    },
    {
      partKey: 'Part XXII',
      nameEn: 'Short Title, Commencement, Authoritative Text in Hindi and Repeals',
      nameHi: 'संक्षिप्त नाम, प्रारंभ, हिंदी में प्राधिकृत पाठ और निरसन',
      articlesSpan: 'Articles 393 - 395 (अनुच्छेद 393 - 395)',
      pageRange: 'PAGE NO. 88',
      keyTopicsEn: 'Short title "The Constitution of India" (393), Commencement on 26 January 1950 (394), Authoritative text in Hindi language (394A - 58th Amendment 1987), Repeal of Indian Independence Act 1947 & GoI Act 1935 (395)',
      keyTopicsHi: 'संविधान का संक्षिप्त नाम "भारत का संविधान" (393), 26 जनवरी 1950 को प्रवर्तन (394), 58वें संशोधन 1987 द्वारा हिंदी में प्राधिकृत पाठ (394A), 1935 व 1947 अधिनियमों का निरसन (395)'
    }
  ];

  // Quick Topic & Mnemonics Finder (English 1st)
  const QUICK_TOPIC_FINDER = [
    {
      topicEn: '18 Historical Constitutional Acts: Chronological Comparative Table (1773 - 1947)',
      topicHi: '18 ऐतिहासिक अधिनियम: कालानुक्रमिक सारणी (1773 - 1947)',
      pageNo: 'PAGE NO. 91 TO 99',
      category: 'History (इतिहास)'
    },
    {
      topicEn: 'All 12 Schedules of Constitution: Detailed Legal Analysis & 22 Languages',
      topicHi: 'संविधान की सभी 12 अनुसूचियां (विस्तृत विश्लेषण व 22 भाषाएं)',
      pageNo: 'PAGE NO. 100 TO 104',
      category: 'Schedules (अनुसूचियां)'
    },
    {
      topicEn: 'Magic 89 Rule: 17 Central vs State Comparative Pairs (President/Governor, Parliament/Assembly)',
      topicHi: 'जादुई ट्रिक: 89 का नियम (राष्ट्रपति-राज्यपाल, संसद-विधानसभा के 17 जोड़े)',
      pageNo: 'PAGE NO. 105 TO 106',
      category: 'Magic Rule (जादुई नियम)'
    },
    {
      topicEn: 'Magic 90 Rule: 13 Central vs State Judiciary & Finance Comparative Pairs',
      topicHi: 'जादुई ट्रिक: 90 का नियम (सुप्रीम कोर्ट-हाईकोर्ट व वित्त के 13 जोड़े)',
      pageNo: 'PAGE NO. 107',
      category: 'Magic Rule (जादुई नियम)'
    },
    {
      topicEn: 'Trick 1: Foreign Sources Mnemonic Formula ("Akbar Aaj Phir Dakshin Africa Aaja")',
      topicHi: 'ट्रिक 1: संविधान के विदेशी स्रोत सूत्र ("अकबर आज फिर दक्षिण अफ्रीका आजा")',
      pageNo: 'PAGE NO. 108',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 2: 12 Constitutional Schedules Formula ("TEARS OF OLD PM")',
      topicHi: 'ट्रिक 2: 12 अनुसूचियां स्मरण सूत्र ("TEARS OF OLD PM")',
      pageNo: 'PAGE NO. 109',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 3 & 4: Constituent Assembly Committees & Drafting Committee 7 Members',
      topicHi: 'ट्रिक 3 व 4: संविधान सभा की समितियां व प्रारूप समिति के 7 सदस्य',
      pageNo: 'PAGE NO. 109',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 5: Preamble 5 Core Ideals ("3SDR - Sovereign, Socialist, Secular, Democratic, Republic")',
      topicHi: 'ट्रिक 5: प्रस्तावना के 5 आदर्श ("3SDR - Sovereign, Socialist, Secular, Democratic, Republic")',
      pageNo: 'PAGE NO. 110',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 6: President of India Articles 52 to 61 Formula ("Pakani Koka Duyo Dasham")',
      topicHi: 'ट्रिक 6: राष्ट्रपति के अनुच्छेद 52-61 सूत्र ("पकानि कोका दुयो दशम")',
      pageNo: 'PAGE NO. 111',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 7: Vice-President Articles 63 to 69 Formula ("Usra Nikas Shani")',
      topicHi: 'ट्रिक 7: उपराष्ट्रपति के अनुच्छेद 63-69 सूत्र ("उसरा निकास शनि")',
      pageNo: 'PAGE NO. 112',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 8: Governor of States Articles 153 to 159 Formula ("Rakani Kaya Sas")',
      topicHi: 'ट्रिक 8: राज्यपाल के अनुच्छेद 153-159 सूत्र ("राकानी काया सस")',
      pageNo: 'PAGE NO. 112',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 9 & 10: 6 Fundamental Rights ("Samast Shodh...") & 5 Writs Formula',
      topicHi: 'ट्रिक 9 व 10: 6 मूल अधिकार ("समस्त शोध...") एवं 5 रिटें ("बंदी पति परमेश्वर...")',
      pageNo: 'PAGE NO. 113',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 11: 6 States with Legislative Councils Formula ("TU BHI MAZAKAR")',
      topicHi: 'ट्रिक 11: विधान परिषद वाले 6 राज्य सूत्र ("तू भी मज़ा कर" - TU BHI MAZAKAR)',
      pageNo: 'PAGE NO. 114',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: 'Trick 12 & 13: Parliament (SARLA 79-81) & 3 Emergency Provisions (352-360)',
      topicHi: 'ट्रिक 12 व 13: संसद, राज्यसभा, लोकसभा ("सरला" 79-81) व आपातकाल (352-360)',
      pageNo: 'PAGE NO. 114 TO 115',
      category: 'Mnemonics (स्मरण सूत्र)'
    },
    {
      topicEn: '45 Landmark Supreme Court Judgments (Kesavananda, Minerva Mills, Menaka Gandhi, Puttaswamy)',
      topicHi: 'सुप्रीम कोर्ट के 45 ऐतिहासिक वाद (केशवानंद, मिनर्वा मिल्स, मेनका गांधी, पुट्टास्वामी)',
      pageNo: 'PAGE NO. 116 TO 124',
      category: 'Case Law (न्यायिक वाद)'
    },
    {
      topicEn: '22 Parliamentary Terms & Procedures (Zero Hour, Guillotine, Whip, Lame Duck Session)',
      topicHi: 'संसदीय शब्दावली (22 प्रमुख शब्द: शून्यकाल, गिलोटिन, सचेतक आदि)',
      pageNo: 'PAGE NO. 125 TO 126',
      category: 'Terms (शब्दावली)'
    },
    {
      topicEn: 'India’s New Criminal Laws 2024 (BNS, BNSS & BSA Complete Comparative Overview)',
      topicHi: 'भारत के नए आपराधिक कानून 2024 (BNS, BNSS व BSA संपूर्ण विवरण)',
      pageNo: 'PAGE NO. 127 TO 128',
      category: 'New Laws (नए कानून 2024)'
    },
    {
      topicEn: '182 Official Past Year Questions Bank (All 4 Options & Authentic Explanations)',
      topicHi: 'विगत वर्षों के 182 परीक्षा प्रश्न बैंक (चारों विकल्प व सम्पूर्ण प्रामाणिक व्याख्या)',
      pageNo: 'PAGE NO. 129 TO 156',
      category: 'Question Bank (प्रश्न बैंक)'
    }
  ];

  // Helper map for part lookup
  const partsMetaMap = new Map<string, typeof PARTS_DIRECTORY[0]>();
  PARTS_DIRECTORY.forEach((p) => {
    partsMetaMap.set(p.partKey, p);
  });

  // Group all 395+ articles by part
  const articlesByPart = new Map<string, typeof allArticles>();
  allArticles.forEach((art) => {
    const partKey = art.part || 'अन्य (Miscellaneous)';
    if (!articlesByPart.has(partKey)) {
      articlesByPart.set(partKey, []);
    }
    articlesByPart.get(partKey)!.push(art);
  });

  let html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GS By Durgesh Pandey Sir • Official Master Polity Compendium (Bilingual Dark Edition)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* =========================================================
       HIGH CONTRAST DARK THEME & BILINGUAL PRINT COMPENDIUM
       GS By Durgesh Pandey Sir - Official Classroom Repository
       ========================================================= */
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* WATERMARK ON SCREEN ONLY - Hidden in print to prevent Chromium GPU compositor crashes */
    .print-watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 44pt;
      font-family: 'Cinzel', serif;
      font-weight: 900;
      color: rgba(251, 191, 36, 0.04);
      text-shadow: 0 0 1px rgba(255, 255, 255, 0.02);
      text-align: center;
      white-space: nowrap;
      pointer-events: none;
      z-index: 99999;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 5px;
      text-transform: uppercase;
      user-select: none;
    }

    body {
      background-color: #060c18;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='550' height='380' viewBox='0 0 550 380'><text x='50%' y='50%' fill='rgba(251,191,36,0.025)' font-family='Cinzel, serif' font-size='22' font-weight='800' transform='rotate(-28 275 190)' text-anchor='middle'>GS By Durgesh Pandey Sir</text></svg>");
      background-repeat: repeat;
      background-attachment: fixed;
      color: #f8fafc;
      font-family: 'Outfit', 'Noto Sans Devanagari', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9.5pt;
      line-height: 1.5;
      margin: 0;
      padding: 16px;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .master-container,
    .booklet-container {
      max-width: 900px;
      margin: 0 auto;
      background: #060c18;
      color: #f8fafc;
    }

    /* Print action utility toolbar (Hidden on actual print) */
    .utility-toolbar,
    .action-buttons {
      position: sticky;
      top: 10px;
      z-index: 1000;
      background: #0c182d;
      color: #f8fafc;
      padding: 12px 18px;
      border-radius: 12px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
      border: 1.5px solid #f59e0b;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .utility-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .utility-title {
      font-family: 'Cinzel', serif;
      font-weight: 800;
      font-size: 12.5pt;
      color: #fbbf24;
    }

    .utility-subtitle {
      font-size: 8pt;
      color: #cbd5e1;
      margin-top: 3px;
      line-height: 1.4;
    }

    .utility-actions {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .btn-print {
      background: #f59e0b;
      color: #020617;
      border: none;
      font-weight: 800;
      font-size: 9.5pt;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .btn-print:hover {
      background: #d97706;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #1e3a66;
      color: #f8fafc;
      border: 1px solid #3b82f6;
      font-weight: 700;
      font-size: 9pt;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .btn-secondary:hover {
      background: #2563eb;
    }

    .btn-close {
      background: #11223e;
      color: #cbd5e1;
      border: 1px solid #1a3458;
      font-size: 9pt;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn-close:hover {
      background: #1e3a66;
      color: #ffffff;
    }

    /* Section Tabs Bar */
    .section-tabs-bar {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-top: 8px;
      border-top: 1px solid #1a3458;
      align-items: center;
      scrollbar-width: thin;
      scrollbar-color: #f59e0b #0c182d;
    }

    .tabs-label {
      font-size: 8pt;
      font-weight: bold;
      color: #fbbf24;
      white-space: nowrap;
      margin-right: 4px;
    }

    .tab-btn {
      background: #11223e;
      color: #cbd5e1;
      border: 1px solid #1a3458;
      font-size: 7.5pt;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }
    .tab-btn:hover {
      background: #1a3458;
      color: #ffffff;
      border-color: #f59e0b;
    }
    .tab-btn.active {
      background: #f59e0b;
      color: #020617;
      border-color: #fbbf24;
      font-weight: 800;
    }

    .page-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: rgba(245, 158, 11, 0.2);
      border: 1px solid #f59e0b;
      color: #fbbf24;
      font-size: 8pt;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Outfit', sans-serif;
      letter-spacing: 0.4px;
      white-space: nowrap;
    }

    .page-num-pill {
      background: #10213b;
      border: 1px solid #244675;
      color: #fbbf24;
      font-weight: 800;
      font-size: 8.5pt;
      padding: 3px 9px;
      border-radius: 4px;
      white-space: nowrap;
      text-align: center;
      display: inline-block;
      min-width: 68px;
    }

    .index-sub-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 16px;
      font-size: 8.5pt;
    }
    .index-sub-table th {
      background-color: #10213b;
      color: #fbbf24;
      font-weight: 700;
      padding: 6px 10px;
      border: 1px solid #1a3458;
      text-align: left;
    }
    .index-sub-table td {
      padding: 6px 10px;
      border: 1px solid #1a3458;
      vertical-align: middle;
    }
    .index-sub-table tr:nth-child(even) {
      background-color: #0b172a;
    }
    .index-sub-table tr:hover {
      background-color: #13243f;
    }

    .section-status-banner {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid #f59e0b;
      color: #fde68a;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 8pt;
      line-height: 1.4;
    }

    /* Booklet Header & Typography */
    .booklet-header {
      border-bottom: 3px solid #f59e0b;
      padding-bottom: 16px;
      margin-bottom: 24px;
      text-align: center;
    }

    .booklet-tag {
      display: inline-block;
      border: 1.5px solid #f59e0b;
      padding: 3px 12px;
      font-size: 8.5pt;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      margin-bottom: 8px;
      color: #fbbf24;
      border-radius: 4px;
      background: rgba(245, 158, 11, 0.15);
    }

    .booklet-title {
      font-family: 'Cinzel', serif;
      font-size: 22pt;
      font-weight: 800;
      margin: 6px 0;
      color: #fbbf24;
      text-shadow: 0 2px 6px rgba(0,0,0,0.7);
    }

    .booklet-subtitle {
      font-size: 12pt;
      font-weight: 700;
      color: #f1f5f9;
    }

    .section-banner {
      background: linear-gradient(135deg, #0e1e38 0%, #15294a 100%);
      border: 1.5px solid #f59e0b;
      color: #fbbf24;
      padding: 10px 16px;
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      margin: 28px 0 16px 0;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    }

    .card,
    .card-item {
      border: 1px solid #1a3458;
      border-radius: 6px;
      padding: 12px 14px;
      margin-bottom: 12px;
      background: #0d1b32;
      color: #f8fafc;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    }

    .card-title-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #1a3458;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }

    .card-title {
      font-size: 11pt;
      font-weight: 800;
      color: #fbbf24;
    }

    .badge-art {
      background: #152744;
      border: 1px solid #f59e0b;
      color: #fbbf24;
      font-family: monospace;
      font-size: 9pt;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      margin-right: 6px;
    }

    .badge-high-yield {
      border: 1px solid #f59e0b;
      background: rgba(245, 158, 11, 0.2);
      color: #fde68a;
      font-size: 7.5pt;
      font-weight: 800;
      padding: 2px 6px;
      text-transform: uppercase;
      white-space: nowrap;
      border-radius: 3px;
    }

    .text-hindi {
      font-weight: 500;
      color: #f1f5f9;
      margin-bottom: 5px;
      font-size: 9.2pt;
      line-height: 1.55;
      font-family: 'Noto Sans Devanagari', sans-serif;
    }

    .text-english {
      font-size: 8.5pt;
      color: #cbd5e1;
      border-top: 1px dashed #1a3458;
      padding-top: 4px;
      margin-top: 4px;
      font-style: normal;
      line-height: 1.45;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .hindi-text,
    .sub-hindi,
    [lang="hi"] {
      font-family: 'Noto Sans Devanagari', sans-serif;
      font-size: 8.8pt;
      line-height: 1.5;
    }

    /* Enhanced High-Contrast Data Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 8.5pt;
      background: #081324;
      border: 1.5px solid #1a3458;
    }
    th, td {
      border: 1px solid #1a3458;
      padding: 7px 9px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #12233d;
      font-weight: 800;
      color: #fbbf24;
      text-transform: uppercase;
      font-size: 8.5pt;
      letter-spacing: 0.5px;
    }
    td {
      background: #0d1b32;
      color: #f8fafc;
    }
    tr:nth-child(even) td {
      background: #091527;
    }

    .part-header {
      background: linear-gradient(90deg, #10213b 0%, #0c182c 100%);
      border-left: 5px solid #f59e0b;
      border-top: 1px solid #1a3458;
      border-right: 1px solid #1a3458;
      border-bottom: 1px solid #1a3458;
      color: #fbbf24;
      padding: 8px 12px;
      font-size: 10.5pt;
      font-weight: 800;
      margin: 20px 0 10px 0;
      border-radius: 0 6px 6px 0;
    }

    .deep-dive-box {
      background: #091527;
      border: 1px solid #f59e0b;
      border-radius: 6px;
      padding: 9px 13px;
      margin: 8px 0;
      color: #f8fafc;
      font-size: 9pt;
    }

    .option-box {
      padding: 6px 9px;
      border-radius: 4px;
      margin-bottom: 3px;
      font-size: 8.5pt;
      line-height: 1.4;
    }
    .option-correct {
      background: rgba(16, 185, 129, 0.18);
      border: 1.5px solid #10b981;
      color: #6ee7b7;
      font-weight: bold;
    }
    .option-normal {
      background: #091527;
      border: 1px solid #1a3458;
      color: #e2e8f0;
    }

    /* =========================================================
       EXPLICIT CSS PRINT COMMANDS: PERSISTENT DARK THEME
       ========================================================= */
    @media print {
      .accordion-content, .notes-wrapper, .chapter-section, .quiz-questions {
        display: block !important;
        height: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
        overflow: visible !important;
      }

      .accordion-body, .panel-hidden, [data-accordion-content], .answer-block, details > *:not(summary) {
        display: block !important;
        height: auto !important;
        max-height: none !important;
        visibility: visible !important;
        opacity: 1 !important;
        overflow: visible !important;
      }
      
      navbar, .search-box-container, .floating-toggle-btn, .action-buttons, footer {
        display: none !important;
      }

      .utility-toolbar, .no-print, .floating-btn, .youtube-btn, .instagram-btn {
        display: none !important;
      }

      /* Force deep dark backgrounds and gold/white text during printing */
      body, html, .master-container {
        background-color: #060c18 !important;
        color: #f8fafc !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .card, .card-item, td, tr {
        background-color: #0d1b32 !important;
        color: #f8fafc !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      th {
        background-color: #12233d !important;
        color: #fbbf24 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .section-banner {
        background-color: #10213b !important;
        color: #fbbf24 !important;
        border-color: #f59e0b !important;
        page-break-after: avoid;
        break-after: avoid;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .part-header {
        background-color: #10213b !important;
        color: #fbbf24 !important;
        border-left-color: #f59e0b !important;
        page-break-after: avoid;
        break-after: avoid;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .deep-dive-box {
        background-color: #0a172a !important;
        color: #f8fafc !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .option-correct {
        background-color: rgba(16, 185, 129, 0.25) !important;
        color: #6ee7b7 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .option-normal {
        background-color: #091527 !important;
        color: #e2e8f0 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      /* CRITICAL: Hide GPU-heavy transforms & UI elements in print to prevent Chromium/Windows spooler crash */
      .utility-toolbar, .no-print, .action-buttons, .section-tabs-bar, .section-status-banner, .print-watermark {
        display: none !important;
      }

      /* Remove all box-shadows, text-shadows, and filters across all 150 pages to eliminate Skia GPU blur overhead */
      *, *::before, *::after {
        box-shadow: none !important;
        text-shadow: none !important;
        filter: none !important;
      }

      /* Clean, lightweight print background */
      body {
        background-color: #060c18 !important;
        background-image: none !important;
        background-attachment: scroll !important;
        padding: 0 !important;
        margin: 0 !important;
        color: #f8fafc !important;
      }

      @page {
        size: A4 portrait;
        margin: 10mm 8mm 10mm 8mm;
      }

      /* Balanced page breaking without recursive backtrack loops */
      .card-item, .card {
        page-break-inside: avoid;
        break-inside: avoid-page;
      }

      .avoid-break {
        page-break-inside: avoid;
        break-inside: avoid-page;
      }

      .page-break {
        page-break-before: always;
        break-before: page;
      }
    }
  </style>
</head>
<body>

<!-- WATERMARK ON SCREEN ONLY - Hidden in print to prevent print spooler crash -->
<div class="print-watermark" aria-hidden="true">
  <span>GS By Durgesh Pandey Sir</span>
</div>

<div class="master-container booklet-container">
  <!-- PRINT / DOWNLOAD UTILITY TOOLBAR (Screen Only) -->
  <div class="utility-toolbar no-print">
    <div class="utility-top-row">
      <div>
        <div class="utility-title">GS By Durgesh Pandey Sir • Master Polity Compendium (Dark Edition)</div>
        <div class="utility-subtitle">
          💡 <strong>Windows Print Tip:</strong> In the destination dropdown, choose <strong>"Save as PDF"</strong> instead of "Microsoft Print to PDF" to avoid printer driver errors.
        </div>
      </div>
      <div class="utility-actions">
        <button id="btn-print-full" class="btn-print" onclick="printEntireBooklet()">
          🖨️ Print Entire Booklet
        </button>
        <button id="btn-print-active-sec" class="btn-print" onclick="printCurrentSection()" style="display:none; background:#10b981; color:#022c22;">
          📑 Print This Section Only
        </button>
        <button id="btn-save-html" class="btn-secondary" onclick="downloadOfflineHtml()">
          💾 Save Offline File (.html)
        </button>
        <button class="btn-close" onclick="window.close()">✕ Close</button>
      </div>
    </div>

    <!-- Section Filter Tabs Bar (English 1st) -->
    <div class="section-tabs-bar">
      <span class="tabs-label">⚡ Fast Section Print:</span>
      <button class="tab-btn active" data-sec="all" onclick="selectSection('all')">🌟 All Sections (Full Book • P. 1-154)</button>
      <button class="tab-btn" data-sec="sec-1" onclick="selectSection('sec-1')">📑 1. Master Index (P. 2)</button>
      <button class="tab-btn" data-sec="sec-2" onclick="selectSection('sec-2')">📜 2. Articles 1-395+ (P. 3-88)</button>
      <button class="tab-btn" data-sec="sec-3" onclick="selectSection('sec-3')">🏛️ 3. Historical Acts (P. 89-97)</button>
      <button class="tab-btn" data-sec="sec-4" onclick="selectSection('sec-4')">📋 4. 12 Schedules (P. 98-102)</button>
      <button class="tab-btn" data-sec="sec-5" onclick="selectSection('sec-5')">⚡ 5. Magic 89 Pairs (P. 103-105)</button>
      <button class="tab-btn" data-sec="sec-6" onclick="selectSection('sec-6')">💡 6. 18+ Mnemonics (P. 106-113)</button>
      <button class="tab-btn" data-sec="sec-7" onclick="selectSection('sec-7')">⚖️ 7. 45 Landmark Cases (P. 114-122)</button>
      <button class="tab-btn" data-sec="sec-8" onclick="selectSection('sec-8')">📚 8. Terms & Laws (P. 123-126)</button>
      <button class="tab-btn" data-sec="sec-9" onclick="selectSection('sec-9')">📝 9. 182 PYQ Bank (P. 127-154)</button>
    </div>
    <div id="section-status-banner" class="section-status-banner" style="display: none;"></div>
  </div>

  <!-- BOOKLET COVER / HEADER (BILINGUAL • ENGLISH 1ST) -->
  <header class="booklet-header avoid-break">
    <div class="booklet-tag">OFFICIAL COMPLETE CLASSROOM COMPENDIUM • BILINGUAL MASTER REPOSITORY</div>
    <h1 class="booklet-title">GS By Durgesh Pandey Sir</h1>
    <div class="booklet-subtitle" style="font-size: 14pt; color: #fbbf24; font-weight: 800; letter-spacing: 0.5px;">
      Indian Constitution & Polity • Complete Bilingual Master Compendium
    </div>
    <div style="font-size: 10pt; color: #cbd5e1; margin-top: 4px; font-weight: 600;">
      भारतीय संविधान एवं राजव्यवस्था • सम्पूर्ण प्रामाणिक द्विभाषी पाठ्यक्रम (English & Hindi)
    </div>
    <p style="font-size: 8.5pt; color: #f1f5f9; max-width: 820px; margin: 10px auto 0 auto; line-height: 1.6;">
      <strong>Comprehensive Examination Edition:</strong> Specially curated for UP Sub-Inspector (UPSI), UP Police Constable, SSC CGL/CPO, RO/ARO, and State Public Service Commission exams. This authoritative compendium incorporates the official 28-chapter syllabus, all 395 Articles across Parts I to XXII (Pages 3–88), 18 Historical Constitutional Acts (1773–1947), all 12 Schedules, 30 Magic 89/90 Comparative Pairs, 18+ High-Yield Mnemonics & Memory Formulas (Pages 106–113), 45 Landmark Supreme Court Judgments, Parliamentary Terminology & 2024 New Criminal Laws, and 182 Authentic Past Year Questions (PYQs) with exhaustive bilingual explanations.
    </p>
    <p style="font-size: 8pt; color: #94a3b8; max-width: 820px; margin: 6px auto 0 auto; line-height: 1.5;">
      विशेष रूप से उत्तर प्रदेश उप-निरीक्षक (UPSI), यूपी पुलिस कांस्टेबल, SSC CGL/CPO, RO/ARO एवं राज्य लोक सेवा आयोग परीक्षाओं हेतु संकलित। इस प्रमाणित दस्तावेज में 28 अध्यायों की आधिकारिक विषय सूची (अध्याय 1 से 28 सम्पूर्ण), सभी 395 अनुच्छेद (भाग 1 से 22), 1773 से 1947 तक 18 ऐतिहासिक अधिनियम, सभी 12 अनुसूचियां, केंद्र व राज्य के 30 तुलनात्मक मैजिक 89/90 जोड़े, 18+ संविधान स्मरण सूत्र एवं स्मार्ट ट्रिक्स (अकबर आज फिर, 3SDR, पकानि कोका, उसरा निकास, समस्त शोध), सुप्रीम कोर्ट के 45 लैंडमार्क वाद, परीक्षा शब्दावली तथा 182 आधिकारिक विगत वर्ष प्रश्न (PYQ) विस्तृत द्विभाषी व्याख्या सहित पूर्ण रूप से शामिल हैं।
    </p>
    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 12px; font-size: 8.5pt; font-weight: bold; color: #fbbf24; flex-wrap: wrap;">
      <span>📖 Articles 1 to 395 (Parts I-XXII) / अनुच्छेद 1-395</span> •
      <span>🏛️ 18 Historical Acts (1773-1947) / 18 ऐतिहासिक अधिनियम</span> •
      <span>📋 12 Schedules / 12 अनुसूचियां</span> •
      <span>⚡ 30 Magic 89/90 Pairs / 30 मैजिक जोड़े</span> •
      <span>💡 18+ Smart Mnemonics (P. 106-113) / 18+ ट्रिक्स</span> •
      <span>⚖️ 45 Landmark SC Cases / 45 लैंडमार्क वाद</span> •
      <span>📚 Terms & 2024 Laws / शब्दावली व 2024 कानून</span> •
      <span>📝 182 PYQ Question Bank / 182 विगत प्रश्न</span>
    </div>
  </header>

  <!-- SECTION 1: MASTER TABLE OF CONTENTS (IMAGE.PNG SPECIFICATION • DIRECT NAVIGATION & OVERVIEW) -->
  <section id="sec-1" class="booklet-section avoid-break" style="margin-bottom: 28px;">
    <div class="section-banner">
      <span>1. Master Table of Contents & Page Directory (प्रामाणिक विषय सूची एवं सम्पूर्ण पृष्ठ निर्देशिका)</span>
      <span class="page-badge">PAGE NO. 2</span>
    </div>

    <!-- DIRECT PAGE NAVIGATION HIGHLIGHT (USER DIRECTIVE - IMAGE.PNG SPECIFICATION) -->
    <div style="background: linear-gradient(135deg, #09172e 0%, #050d1a 100%); border: 2px solid #f59e0b; border-radius: 8px; padding: 12px 16px; margin: 10px 0 16px 0;">
      <div style="font-size: 8pt; font-weight: 800; color: #f59e0b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <span>⚡ DIRECT PAGE NAVIGATION INDEX • त्वरित पृष्ठ निर्देशिका</span>
        <span style="font-size: 7.5pt; color: #cbd5e1; font-weight: normal;">Bilingual / द्विभाषी</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 10px;">
        <div style="background: #071326; border: 1.5px solid #f59e0b; padding: 10px 14px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 11pt; font-weight: 900; color: #fbbf24; letter-spacing: 0.5px;">
              PART I TO XXII (ARTICLES 1 TO 395)
            </div>
            <div style="font-size: 8pt; color: #f8fafc; margin-top: 2px;">
              All 22 Constitutional Parts & Complete Articles (संविधान के सभी 22 भाग)
            </div>
          </div>
          <div style="text-align: right; margin-left: 12px;">
            <span style="background: #f59e0b; color: #020617; font-weight: 900; font-size: 10.5pt; padding: 5px 12px; border-radius: 4px; white-space: nowrap; font-family: monospace; display: inline-block;">
              PAGE NO. 3 TO 88
            </span>
          </div>
        </div>

        <div style="background: #071326; border: 1.5px solid #f59e0b; padding: 10px 14px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 11pt; font-weight: 900; color: #fbbf24; letter-spacing: 0.5px;">
              FOR MNEMONICS (18+ SMART TRICKS)
            </div>
            <div style="font-size: 8pt; color: #f8fafc; margin-top: 2px;">
              Constitutional Memory Formulas & Short Tricks (संविधान स्मरण सूत्र एवं 18+ ट्रिक्स)
            </div>
          </div>
          <div style="text-align: right; margin-left: 12px;">
            <span style="background: #f59e0b; color: #020617; font-weight: 900; font-size: 10.5pt; padding: 5px 12px; border-radius: 4px; white-space: nowrap; font-family: monospace; display: inline-block;">
              PAGE NO. 106 TO 113
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Executive Overview Strip (English 1st) -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; margin: 10px 0 16px 0;">
      <div style="background: #091527; border: 1px solid #1a3458; border-left: 3px solid #f59e0b; padding: 7px 10px; border-radius: 4px;">
        <div style="font-size: 7.5pt; color: #94a3b8; text-transform: uppercase;">Total Compendium Size / संकलन आकार</div>
        <div style="font-size: 11pt; font-weight: 800; color: #fbbf24;">154 Print Pages (मुद्रण पृष्ठ)</div>
        <div style="font-size: 7.5pt; color: #cbd5e1;">A4 Portrait Print-Ready Bilingual Edition</div>
      </div>
      <div style="background: #091527; border: 1px solid #1a3458; border-left: 3px solid #f59e0b; padding: 7px 10px; border-radius: 4px;">
        <div style="font-size: 7.5pt; color: #94a3b8; text-transform: uppercase;">Constitutional Articles / अनुच्छेद व भाग</div>
        <div style="font-size: 11pt; font-weight: 800; color: #fbbf24;">395+ Articles • 22 Parts (भाग 1-22)</div>
        <div style="font-size: 7.5pt; color: #cbd5e1;">18 Historical Acts • 12 Schedules (अनुसूचियां)</div>
      </div>
      <div style="background: #091527; border: 1px solid #1a3458; border-left: 3px solid #f59e0b; padding: 7px 10px; border-radius: 4px;">
        <div style="font-size: 7.5pt; color: #94a3b8; text-transform: uppercase;">Smart Exam Modules / स्मार्ट मॉड्यूल</div>
        <div style="font-size: 11pt; font-weight: 800; color: #fbbf24;">30 Magic Pairs • 18+ Mnemonics</div>
        <div style="font-size: 7.5pt; color: #cbd5e1;">45 SC Cases • 22 Terms & 2024 Laws</div>
      </div>
      <div style="background: #091527; border: 1px solid #1a3458; border-left: 3px solid #f59e0b; padding: 7px 10px; border-radius: 4px;">
        <div style="font-size: 7.5pt; color: #94a3b8; text-transform: uppercase;">Practice Bank / अभ्यास प्रश्न बैंक</div>
        <div style="font-size: 11pt; font-weight: 800; color: #fbbf24;">182 Past Year Questions (PYQs)</div>
        <div style="font-size: 7.5pt; color: #cbd5e1;">4 Bilingual Options with Complete Explanations</div>
      </div>
    </div>

  </section>

  <!-- SECTION 2: CONSTITUTIONAL ARTICLES 1 TO 395 (PARTS I TO XXII • BILINGUAL • ENGLISH 1ST) -->
  <section id="sec-2" class="booklet-section page-break">
    <div class="section-banner">
      <span>2. Constitutional Articles 1 to 395 Complete: Parts I to XXII (भारतीय संविधान के सभी अनुच्छेद: भाग 1 से 22)</span>
      <span class="page-badge">PAGE NO. 3 TO 88</span>
    </div>`;

  articlesByPart.forEach((articles, partName) => {
    // Lookup part metadata
    const partKeyMatch = partName.match(/^Part\s+[IVXLCDMA]+/i);
    const partKey = partKeyMatch ? partKeyMatch[0] : partName;
    const partMeta = partsMetaMap.get(partKey);

    const displayTitle = partMeta 
      ? `${escapeHtml(partKey)}: ${escapeHtml(partMeta.nameEn)}` 
      : escapeHtml(partName);
    const displaySub = partMeta 
      ? `${escapeHtml(partMeta.nameHi)} • ${escapeHtml(partMeta.articlesSpan)}` 
      : '';
    const pageBadgeText = partMeta 
      ? partMeta.pageRange 
      : '';

    html += `
    <div class="part-header avoid-break" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 10pt; font-weight: 800; color: #fbbf24;">${displayTitle}</div>
        ${displaySub ? `<div style="font-size: 8.8pt; color: #cbd5e1; font-weight: normal; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">${displaySub}</div>` : ''}
      </div>
      ${pageBadgeText ? `<span class="page-badge">${escapeHtml(pageBadgeText)}</span>` : ''}
    </div>`;

    articles.forEach((art) => {
      const artNum = art.articleNumber || art.number;
      html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title">
          <span class="badge-art">Article ${escapeHtml(artNum)}</span> 
          <strong>${escapeHtml(art.title.en)}</strong>
          <span style="font-size: 9.2pt; font-weight: normal; color: #fbbf24; margin-left: 6px; font-family: 'Noto Sans Devanagari', sans-serif;">[अनुच्छेद ${escapeHtml(artNum)}: ${escapeHtml(art.title.hi)}]</span>
        </span>
        ${art.isImportant ? '<span class="badge-high-yield">★ High Yield</span>' : ''}
      </div>
      <div class="text-english" style="border-top: none; padding-top: 0; margin-top: 4px; color: #f8fafc; font-size: 8.5pt;">
        <strong style="color: #60a5fa;">Official Constitutional Text (English):</strong> ${escapeHtml(art.description.en)}
      </div>
      <div class="text-hindi" style="border-top: 1px dashed #1a3458; padding-top: 4px; margin-top: 4px; color: #f1f5f9; font-size: 9.2pt;">
        <strong style="color: #fbbf24;">संवैधानिक मूल पाठ (हिंदी):</strong> ${escapeHtml(art.description.hi)}
      </div>`;

      if (art.clauseDetails && art.clauseDetails.length > 0) {
        html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1a3458;">
        <strong style="font-size: 8.5pt; color: #60a5fa;">Clauses & Sub-clauses (उपकंडीय विश्लेषण):</strong>
        <div style="margin-top: 4px; font-size: 8.5pt;">`;
        art.clauseDetails.forEach((c) => {
          html += `
          <div style="padding-left: 8px; border-left: 2px solid #3b82f6; margin-bottom: 4px; background: rgba(15, 39, 68, 0.5); padding: 4px 8px; border-radius: 0 4px 4px 0;">
            • <strong style="color: #f8fafc;">${escapeHtml(c.en || c.hi)}</strong>
            <div style="font-size: 8.8pt; color: #fde68a; padding-left: 6px; margin-top: 1px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(c.hi)}</div>
          </div>`;
        });
        html += `
        </div>
      </div>`;
      }

      html += `
    </div>`;
    });
  });

  html += `
  </section>

  <!-- SECTION 3: 18 HISTORICAL ACTS (1773 - 1947) BILINGUAL (ENGLISH 1ST) -->
  <section id="sec-3" class="booklet-section page-break">
    <div class="section-banner">
      <span>3. Constitutional Development of India (Historical Acts 1773–1947) • भारत का संवैधानिक विकास</span>
      <span class="page-badge">PAGE NO. 89 TO 97</span>
    </div>

    <!-- Comparative Overview Table of British Legal Acts -->
    <div class="avoid-break" style="margin-bottom: 16px;">
      <h3 style="color: #fbbf24; font-size: 10.5pt; margin-bottom: 6px;">📊 Chronological Comparative Table of British Constitutional Acts (ब्रिटिश कालीन संवैधानिक सुधार)</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 15%; text-align: center;">Act & Year (अधिनियम / वर्ष)</th>
            <th style="width: 26%;">Key Governance Structure (प्रमुख पद / ढांचा)</th>
            <th style="width: 35%;">Major Legislative & Administrative Reforms (प्रमुख सुधार)</th>
            <th style="width: 24%;">Constitutional Impact (संवैधानिक प्रभाव)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1773 Regulating Act</td>
            <td><strong>Governor General of Bengal</strong> - Warren Hastings<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">गवर्नर जनरल (बंगाल) - वॉरेन हेस्टिंग्स</span></td>
            <td>Supreme Court at Calcutta (1774), 4-Member Council<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">कलकत्ता में सुप्रीम कोर्ट (1774), 4 सदस्यीय परिषद</span></td>
            <td>Foundation of Centralized Judiciary<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">केंद्रीकृत न्यायपालिका की नींव</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1784 Pitt's India Act</td>
            <td><strong>Board of Control</strong> (6 members) & Court of Directors<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">बोर्ड ऑफ कंट्रोल (6 सदस्य) + कोर्ट ऑफ डायरेक्टर्स</span></td>
            <td>Dual Government System (Separation of Political & Commercial)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">द्वैध शासन (राजनीतिक व व्यापारिक कार्यों का पृथक्करण)</span></td>
            <td>Beginning of British Parliamentary Control<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">संसदीय नियंत्रण का आरंभ</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1813 Charter Act</td>
            <td>End of Company Trade Monopoly (except tea & China trade)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">कंपनी का व्यापारिक एकाधिकार समाप्त (चाय व चीन छोड़कर)</span></td>
            <td>₹1 Lakh Annual Grant for Education, Christian Missionaries<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">शिक्षा पर ₹1 लाख वार्षिक व्यय, ईसाई मिशनरियों को अनुमति</span></td>
            <td>Beginning of Modern Educational Policy<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">आधुनिक शिक्षा नीति का आरंभ</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1833 Charter Act</td>
            <td><strong>Governor General of India</strong> - Lord William Bentinck<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">भारत का गवर्नर जनरल - लॉर्ड विलियम बेंटिक</span></td>
            <td>Total Commercial End, 1st Law Commission under Macaulay<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">पूर्ण व्यापारिक समाप्ति, मैकाले की अध्यक्षता में प्रथम विधि आयोग</span></td>
            <td>Codification of Indian Laws (Foundation of IPC)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">विधि का संहिताकरण (IPC की नींव)</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1853 Charter Act</td>
            <td>Separation of Executive & Legislative Functions<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">कार्यपालिका व विधान परिषद का पृथक्करण</span></td>
            <td>Open Competition for Civil Services (Macaulay Committee 1854)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">सिविल सेवाओं हेतु खुली प्रतियोगिता (मैकाले समिति 1854)</span></td>
            <td>First Outline of Mini-Parliament<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">संसदीय व्यवस्था की पहली झलक</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1858 GoI Act</td>
            <td><strong>Secretary of State for India</strong> + Viceroy (Lord Canning)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">भारत सचिव (Secretary of State) + वायसराय (लॉर्ड कैनिंग)</span></td>
            <td>End of Company Rule, Direct Administration by British Crown<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">कंपनी शासन की समाप्ति, क्राउन का प्रत्यक्ष शासन</span></td>
            <td>Direct Imperial Accountability & Good Governance Act<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">उत्तरदायी शासन की दिशा में कदम</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1861 Councils Act</td>
            <td>Ordinance Promulgation Power to Viceroy (Life: 6 months)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">वायसराय को अध्यादेश जारी करने की शक्ति (अवधि: 6 माह)</span></td>
            <td>Portfolio System (Canning), Legislative Decentralization<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">कैनिंग की पोर्टफोलियो प्रणाली, विधायी विकेंद्रीकरण</span></td>
            <td>Direct Origin of Article 123 (Presidential Ordinance)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">अनुच्छेद 123 (अध्यादेश शक्ति का स्रोत)</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1892 Councils Act</td>
            <td>Introduction of Indirect Election Principle<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">अप्रत्यक्ष निर्वाचन पद्धति की शुरुआत</span></td>
            <td>Right to Discuss Annual Budget & Ask Questions (No Supplementary)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">बजट पर बहस व प्रश्न पूछने का सीमित अधिकार</span></td>
            <td>Parliamentary Financial Scrutiny Inception<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">संसदीय वित्तीय नियंत्रण का विकास</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1909 Morley-Minto</td>
            <td>Separate Communal Electorate for Muslims<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">मुसलमानों हेतु पृथक साम्प्रदायिक निर्वाचन</span></td>
            <td>Satyendra Prasad Sinha: 1st Indian in Viceroy Executive Council<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">सत्येंद्र प्रसाद सिन्हा वायसराय परिषद के प्रथम भारतीय</span></td>
            <td>Institutionalization of Communal Representation<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">साम्प्रदायिक विभाजन का बीजारोपण</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1919 Mont-Ford Act</td>
            <td>Dyarchy in Provinces (Reserved & Transferred Subjects)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">प्रांतों में द्वैध शासन (आरक्षित व हस्तांतरित विषय)</span></td>
            <td>Bicameral Central Legislature, Direct Elections, Voting for Women<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">केंद्र में द्विसदनीय विधायिका, प्रत्यक्ष चुनाव, महिला मताधिकार</span></td>
            <td>Establishment of Public Service Commission (1926/UPSC)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">लोक सेवा आयोग गठन (1926)</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1935 GoI Act</td>
            <td>All-India Federation, Provincial Autonomy, Dyarchy at Center<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">अखिल भारतीय संघ, प्रांतीय स्वायत्तता, केंद्र में द्वैध शासन</span></td>
            <td>Federal Court (1937), Reserve Bank of India (1935), 3 Lists<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">संघीय न्यायालय (1937), RBI (1935), 3 सूचियां</span></td>
            <td>Primary Blueprint of 1950 Indian Constitution (70%+ Content)<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">भारतीय संविधान का मुख्य आधार (70% ढांचा)</span></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1947 Independence</td>
            <td>Creation of Two Sovereign Dominions: India & Pakistan<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">भारत और पाकिस्तान दो संप्रभु राष्ट्र बने</span></td>
            <td>Abolition of Viceroy Post, Constituent Assemblies Sovereign<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">वायसराय पद समाप्त, संविधान सभाएं संप्रभु विधायिका बनीं</span></td>
            <td>Transfer of Complete Sovereignty & Freedom<br/><span style="font-size: 8.5pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">पूर्ण संप्रभुता एवं स्वतंत्रता</span></td>
          </tr>
        </tbody>
      </table>
    </div>`;

  HISTORICAL_ACTS_DATA.forEach((act) => {
    html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title">
          <span class="badge-art">${escapeHtml(String(act.year))}</span> 
          <strong>${escapeHtml(act.title.en)}</strong>
          <span style="font-size: 9.2pt; font-weight: normal; color: #fbbf24; margin-left: 6px; font-family: 'Noto Sans Devanagari', sans-serif;">[${escapeHtml(act.title.hi)}]</span>
        </span>
        <span class="badge-high-yield">Historical Act</span>
      </div>
      <div class="text-english" style="margin-top: 4px; color: #f8fafc; font-size: 8.5pt;">
        <strong style="color: #60a5fa;">Historical Context (English):</strong> ${escapeHtml(act.background.en)}
      </div>
      <div class="text-hindi" style="border-top: 1px dashed #1a3458; padding-top: 4px; margin-top: 4px; color: #f1f5f9; font-size: 9.2pt;">
        <strong style="color: #fbbf24;">ऐतिहासिक पृष्ठभूमि (हिंदी):</strong> ${escapeHtml(act.background.hi)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1a3458;">
        <strong style="font-size: 9pt; color: #60a5fa;">Key Constitutional Provisions & Reforms (प्रमुख प्रावधान):</strong>
        <ul style="margin: 4px 0 4px 18px; padding: 0; font-size: 9pt;">`;

    act.provisions.forEach((prov) => {
      html += `
          <li style="margin-bottom: 5px; color: #f8fafc;">
            <strong>${escapeHtml(prov.en || prov.hi)}</strong>
            <div style="font-size: 8.8pt; color: #cbd5e1; margin-top: 1px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(prov.hi)}</div>
          </li>`;
    });

    html += `
        </ul>
      </div>`;

    if (act.objectives && act.objectives.length > 0) {
      html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1a3458; font-size: 8.5pt;">
        <strong style="color: #60a5fa;">Key Exam Objectives & Pointers (उद्देश्य एवं परीक्षा बिंदु):</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 6px; margin-top: 4px;">`;
      act.objectives.forEach((obj) => {
        html += `
          <div style="background: #091527; border: 1px solid #1a3458; padding: 5px 8px; border-radius: 4px; color: #f8fafc;">
            ✓ <strong>${escapeHtml(obj.en || obj.hi)}</strong>
            <div style="font-size: 8.5pt; color: #cbd5e1; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(obj.hi)}</div>
          </div>`;
      });
      html += `
        </div>
      </div>`;
    }

    if (act.trickMnemonic) {
      html += `
      <div class="deep-dive-box">
        <strong style="color: #fbbf24;">⚡ Smart Mnemonic Trick (याद रखने का सूत्र):</strong> ${escapeHtml(act.trickMnemonic.en || act.trickMnemonic.hi)}
        <div style="font-size: 8.8pt; color: #cbd5e1; font-style: italic; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी ट्रिक: <strong>${escapeHtml(act.trickMnemonic.hi)}</strong></div>
      </div>`;
    }

    html += `
    </div>`;
  });

  html += `
  </section>

  <!-- SECTION 4: 12 SCHEDULES OF THE CONSTITUTION (BILINGUAL • ENGLISH 1ST) -->
  <section id="sec-4" class="booklet-section page-break">
    <div class="section-banner">
      <span>4. The 12 Schedules of the Constitution • संविधान की सभी 12 अनुसूचियां</span>
      <span class="page-badge">PAGE NO. 98 TO 102</span>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 10%; text-align: center;">Schedule (अनुसूची)</th>
          <th style="width: 25%;">Subject & Title (विषय / शीर्षक)</th>
          <th style="width: 50%;">Constitutional Provisions & Details (विस्तृत संवैधानिक प्रावधान)</th>
          <th style="width: 15%; text-align: center;">Related Articles (अनुच्छेद)</th>
        </tr>
      </thead>
      <tbody>`;

  SCHEDULES_DATA.forEach((sch) => {
    let detailsHtml = '';
    if (sch.description.en) {
      detailsHtml += `<div style="color: #f8fafc; font-size: 8.5pt;"><strong>English:</strong> ${escapeHtml(sch.description.en)}</div>`;
    }
    detailsHtml += `<div style="font-size: 8.8pt; color: #cbd5e1; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;"><strong>हिंदी:</strong> ${escapeHtml(sch.description.hi)}</div>`;

    if (sch.details && sch.details.length > 0) {
      detailsHtml += '<div style="margin-top: 4px; border-top: 1px dashed #1a3458; padding-top: 4px;">';
      sch.details.forEach((d) => {
        detailsHtml += `
          <div style="margin-bottom: 3px;">
            <div style="color: #f8fafc; font-size: 8.2pt;">• ${escapeHtml(d.en || d.hi)}</div>
            <div style="font-size: 8.5pt; color: #cbd5e1; padding-left: 8px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(d.hi)}</div>
          </div>`;
      });
      detailsHtml += '</div>';
    }

    html += `
        <tr>
          <td style="font-weight: bold; text-align: center; font-family: monospace; color: #fbbf24;">${sch.number}th Schedule</td>
          <td>
            <strong style="color: #f8fafc;">${escapeHtml(sch.title.en)}</strong>
            <br/><span style="font-size: 8.8pt; color: #fbbf24; font-family: 'Noto Sans Devanagari', sans-serif;">${escapeHtml(sch.title.hi)}</span>
          </td>
          <td>${detailsHtml}</td>
          <td style="font-family: monospace; text-align: center; font-size: 8pt; color: #fde68a;">${sch.relatedArticles ? escapeHtml(sch.relatedArticles.join(', ')) : ''}</td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>
  </section>

  <!-- SECTION 5: MAGIC 89 & 90 RULES (30 COMPARATIVE PAIRS • ENGLISH 1ST) -->
  <section id="sec-5" class="booklet-section page-break">
    <div class="section-banner">
      <span>5. Magic 89 & 90 Rules: 30 Comparative Pairs • जादुई ट्रिक: 89 एवं 90 का नियम</span>
      <span class="page-badge">PAGE NO. 103 TO 105</span>
    </div>

    <div class="deep-dive-box avoid-break">
      <strong style="font-size: 9.5pt; color: #fbbf24;">⚡ Golden Mathematical Law of Indian Constitution (जादुई गणितीय सूत्र):</strong>
      <div style="margin-top: 4px; line-height: 1.5; color: #f8fafc;">
        • <strong>Rule +89 (नियम +89):</strong> Add 89 to Central Articles <strong>72 to 111</strong> to immediately derive corresponding State Articles (e.g. Art. 72 Pardon + 89 = Art. 161 Governor's Pardon; Art. 76 Attorney General + 89 = Art. 165 Advocate General).<br/>
        • <strong>Rule +90 (नियम +90):</strong> Add 90 to Central Articles <strong>112 to 124</strong> to immediately derive corresponding State Articles (e.g. Art. 112 Union Budget + 90 = Art. 202 State Budget; Art. 123 Presidential Ordinance + 90 = Art. 213 Governor's Ordinance).
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 8%; text-align: center;">Pair #</th>
          <th style="width: 14%; text-align: center;">Union Article (केंद्र)</th>
          <th style="width: 32%;">Union Subject (संघीय विषय)</th>
          <th style="width: 14%; text-align: center;">State Article (राज्य)</th>
          <th style="width: 32%;">State Equivalent Subject (राज्य समकक्ष विषय)</th>
        </tr>
      </thead>
      <tbody>`;

  MAGIC_89_PAIRS.forEach((pair, idx) => {
    html += `
        <tr>
          <td style="text-align: center; font-weight: bold; color: #fbbf24;">#${idx + 1}</td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">Art. ${pair.centerArticle}</td>
          <td>
            <strong style="color: #f8fafc;">${escapeHtml(pair.centerSubject.en)}</strong>
            <br/><span style="font-size: 8.8pt; color: #fbbf24; font-family: 'Noto Sans Devanagari', sans-serif;">${escapeHtml(pair.centerSubject.hi)}</span>
          </td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">Art. ${pair.stateArticle}</td>
          <td>
            <strong style="color: #f8fafc;">${escapeHtml(pair.stateSubject.en)}</strong>
            <br/><span style="font-size: 8.8pt; color: #fbbf24; font-family: 'Noto Sans Devanagari', sans-serif;">${escapeHtml(pair.stateSubject.hi)}</span>
          </td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>
  </section>

  <!-- SECTION 6: CONSTITUTIONAL MEMORY TRICKS & MNEMONICS (18+ FORMULAS • ENGLISH 1ST) -->
  <section id="sec-6" class="booklet-section page-break">
    <div class="section-banner">
      <span>6. Constitutional Memory Tricks & 18+ Mnemonics • संविधान स्मरण सूत्र एवं 18+ स्मार्ट ट्रिक्स</span>
      <span class="page-badge">PAGE NO. 106 TO 113</span>
    </div>

    <!-- Quick Formula Summary Table -->
    <div class="deep-dive-box avoid-break">
      <strong style="font-size: 9.5pt; color: #fbbf24;">💡 18 High-Yield Polity Memory Tricks Bank (स्मरण सूत्र बैंक):</strong>
      <div style="margin-top: 4px; line-height: 1.5; color: #f8fafc;">
        Proven bilingual memory techniques to master Articles, Constitutional Sources, Reorganization of States, 6 Fundamental Rights, President & Governor sequences without rote memorization.
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 8%; text-align: center;">Mnemonic #</th>
          <th style="width: 32%;">Mnemonic Formula (स्मार्ट ट्रिक सूत्र)</th>
          <th style="width: 25%;">Target Constitutional Topic (लक्षित विषय)</th>
          <th style="width: 35%;">Context & Articles Span (संवैधानिक संदर्भ)</th>
        </tr>
      </thead>
      <tbody>`;

  POLITY_TRICKS_DATA.forEach((trick, idx) => {
    html += `
        <tr>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">#${trick.sectionNumber || idx + 1}</td>
          <td>
            <strong style="color: #f8fafc; background: rgba(245, 158, 11, 0.2); padding: 2px 6px; border-radius: 4px; border: 1px solid #f59e0b;">${escapeHtml(trick.englishTrick || trick.hindiTrick)}</strong>
            ${trick.englishTrick ? `<br/><span style="font-size: 8.8pt; color: #fbbf24; font-family: 'Noto Sans Devanagari', monospace; margin-top: 2px; display: inline-block;">हिंदी: ${escapeHtml(trick.hindiTrick)}</span>` : ''}
          </td>
          <td>
            <strong style="color: #fbbf24;">${escapeHtml(trick.title.en)}</strong>
            <br/><span style="font-size: 8.8pt; color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif;">${escapeHtml(trick.title.hi)}</span>
          </td>
          <td style="font-size: 8.2pt; color: #e2e8f0;">
            ${escapeHtml(trick.targetTopic.en || trick.targetTopic.hi)}
            <div style="font-size: 8.5pt; color: #cbd5e1; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(trick.targetTopic.hi)}</div>
          </td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>

    <!-- Detailed Cards for each Trick -->`;

  POLITY_TRICKS_DATA.forEach((trick, idx) => {
    html += `
    <div class="card-item avoid-break">
      <div class="card-title-row">
        <span class="card-title">
          <span class="badge-art">Trick #${trick.sectionNumber || idx + 1}</span> 
          <strong>${escapeHtml(trick.title.en)}</strong> 
          <span style="font-size: 9.2pt; font-weight: normal; color: #fbbf24; margin-left: 6px; font-family: 'Noto Sans Devanagari', sans-serif;">[${escapeHtml(trick.title.hi)}]</span>
        </span>
        <span class="badge-high-yield">Polity Trick</span>
      </div>
      
      <div class="deep-dive-box" style="margin: 6px 0;">
        ${trick.englishTrick ? `<div style="font-size: 9pt; color: #fde68a; font-family: monospace;">English Formula: <strong style="color: #f8fafc;">${escapeHtml(trick.englishTrick)}</strong></div>` : ''}
        <div style="font-size: 9.2pt; font-weight: bold; color: #fbbf24; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">
          हिंदी सूत्र (Hindi Formula): <span style="background: rgba(245, 158, 11, 0.25); color: #f8fafc; padding: 2px 8px; border-radius: 4px; border: 1px solid #f59e0b; font-family: 'Noto Sans Devanagari', monospace; font-size: 9.5pt;">${escapeHtml(trick.hindiTrick)}</span>
        </div>
        <div style="font-size: 8.5pt; color: #cbd5e1; margin-top: 3px;">
          <strong style="color: #f8fafc;">Target Subject:</strong> ${escapeHtml(trick.targetTopic.en)} <span style="font-family: 'Noto Sans Devanagari', sans-serif; font-size: 8.8pt;">(${escapeHtml(trick.targetTopic.hi)})</span>
        </div>
      </div>`;

    if (trick.breakdownHindi && trick.breakdownHindi.length > 0) {
      html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1a3458;">
        <strong style="font-size: 8.8pt; color: #60a5fa;">Letter-by-Letter Breakdown Table (अक्षरशः विश्लेषण सारणी):</strong>
        <table style="margin-top: 4px; font-size: 8.5pt;">
          <thead>
            <tr>
              <th style="width: 14%; text-align: center;">Letter / Syllable</th>
              <th style="width: 30%;">Associated Entity / Office (संबद्ध पद/राज्य)</th>
              <th style="width: 56%;">Constitutional Provision & Articles (संवैधानिक प्रावधान)</th>
            </tr>
          </thead>
          <tbody>`;
      trick.breakdownHindi.forEach((b) => {
        html += `
            <tr>
              <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">${escapeHtml(b.letter)}</td>
              <td><strong style="color: #f8fafc; font-family: 'Noto Sans Devanagari', sans-serif; font-size: 9pt;">${escapeHtml(b.word)}</strong></td>
              <td style="color: #cbd5e1; font-family: 'Noto Sans Devanagari', sans-serif; font-size: 8.8pt;">${escapeHtml(b.meaning)}</td>
            </tr>`;
      });
      html += `
          </tbody>
        </table>
      </div>`;
    }

    if (trick.specificProvisions && trick.specificProvisions.length > 0) {
      html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1a3458;">
        <strong style="font-size: 8.8pt; color: #60a5fa;">Specific Provisions & Sub-formulas (विशिष्ट उप-सूत्र एवं प्रावधान):</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 6px; margin-top: 4px;">`;
      trick.specificProvisions.forEach((sp) => {
        html += `
          <div style="background: #091527; border: 1px solid #1a3458; padding: 6px 8px; border-radius: 4px;">
            <div style="font-weight: bold; color: #fbbf24; font-size: 9pt;">
              ${escapeHtml(sp.entity)}: <span style="color: #f8fafc; background: rgba(245, 158, 11, 0.2); padding: 1px 5px; border-radius: 3px; font-family: 'Noto Sans Devanagari', monospace; font-size: 9.2pt;">${escapeHtml(sp.hindiTrick)}</span>
            </div>
            <div style="font-size: 8.5pt; color: #f8fafc; margin-top: 2px;">
              ${sp.provision.en ? `<div>${escapeHtml(sp.provision.en)}</div>` : ''}
              <div style="font-size: 8.5pt; color: #cbd5e1; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(sp.provision.hi)}</div>
            </div>
          </div>`;
      });
      html += `
        </div>
      </div>`;
    }

    if (trick.examTip) {
      html += `
      <div style="margin-top: 6px; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 8.5pt; color: #fde68a;">
        <strong style="color: #fbbf24;">🎯 Exam Pointers & Fast Tips:</strong> ${trick.examTip.en ? escapeHtml(trick.examTip.en) + ' • ' : ''}<span style="font-family: 'Noto Sans Devanagari', sans-serif; font-size: 8.8pt;">${escapeHtml(trick.examTip.hi)}</span>
      </div>`;
    }

    html += `
    </div>`;
  });

  html += `
  </section>

  <!-- SECTION 7: 45 LANDMARK JUDICIAL CASES (BILINGUAL • ENGLISH 1ST) -->
  <section id="sec-7" class="booklet-section page-break">
    <div class="section-banner">
      <span>7. 45 Landmark Supreme Court Judgments • सुप्रीम कोर्ट के 45 ऐतिहासिक वाद</span>
      <span class="page-badge">PAGE NO. 114 TO 122</span>
    </div>`;

  judicialCases.forEach((cs, idx) => {
    html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title"><span class="badge-art">Case #${idx + 1}</span> <strong>${escapeHtml(cs.caseName)} (${cs.year})</strong></span>
        <span class="badge-high-yield">${escapeHtml(cs.court)}</span>
      </div>
      <div style="font-size: 9pt; margin-bottom: 5px;">
        <strong style="color: #60a5fa;">Constitutional Subject:</strong> <span style="color: #f8fafc;">${escapeHtml(cs.subject.en)}</span> <span style="font-size: 8.8pt; color: #fbbf24; margin-left: 4px; font-family: 'Noto Sans Devanagari', sans-serif;">[${escapeHtml(cs.subject.hi)}]</span>
      </div>
      <div class="text-english" style="background: #091527; border-left: 3px solid #3b82f6; padding: 7px 10px; border-radius: 4px; font-size: 8.5pt;">
        <strong style="color: #60a5fa;">Historic SC Ruling Summary (English):</strong> ${escapeHtml(cs.rulingSummary.en)}
        <div class="text-hindi" style="margin-top: 4px; padding-top: 4px; border-top: 1px dashed #1a3458; color: #f1f5f9; font-size: 9.2pt; font-family: 'Noto Sans Devanagari', sans-serif;">
          <strong style="color: #fbbf24;">ऐतिहासिक अधिनिर्णय (हिंदी):</strong> ${escapeHtml(cs.rulingSummary.hi)}
        </div>
      </div>
      ${cs.constitutionalArticles && cs.constitutionalArticles.length > 0 ? `
      <div style="margin-top: 5px; font-size: 8pt; color: #94a3b8;">
        <strong style="color: #60a5fa;">Relevant Articles:</strong> <span style="font-family: monospace; color: #fde68a;">${escapeHtml(cs.constitutionalArticles.join(', '))}</span>
      </div>` : ''}
    </div>`;
  });

  html += `
  </section>

  <!-- SECTION 8: POLITY TERMINOLOGY & NEW 2024 LAWS (BILINGUAL • ENGLISH 1ST) -->
  <section id="sec-8" class="booklet-section page-break">
    <div class="section-banner">
      <span>8. Constitutional & Parliamentary Terminology & 2024 Criminal Laws • शब्दावली व नए कानून 2024</span>
      <span class="page-badge">PAGE NO. 123 TO 126</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 10px;">`;

  POLITY_TERMS_DATA.forEach((term) => {
    html += `
      <div class="card-item" style="margin-bottom: 0;">
        <div class="card-title-row">
          <span class="card-title"><strong>${escapeHtml(term.term)}</strong> <span style="font-size: 9.2pt; font-weight: normal; color: #fbbf24; margin-left: 4px; font-family: 'Noto Sans Devanagari', sans-serif;">[${escapeHtml(term.hindiTerm)}]</span></span>
        </div>
        <div class="text-english" style="font-size: 8.5pt; color: #f8fafc;">
          <strong style="color: #60a5fa;">Definition (English):</strong> ${escapeHtml(term.definition.en)}
        </div>
        <div class="text-hindi" style="font-size: 9.2pt; color: #f1f5f9; margin-top: 4px; border-top: 1px dashed #1a3458; padding-top: 4px; font-family: 'Noto Sans Devanagari', sans-serif;">
          <strong style="color: #fbbf24;">परिभाषा (हिंदी):</strong> ${escapeHtml(term.definition.hi)}
        </div>
        ${term.context ? `
        <div style="background: #091527; border: 1px solid #1a3458; padding: 4px 8px; font-size: 8.5pt; margin-top: 5px; border-radius: 3px; color: #cbd5e1;">
          <strong style="color: #60a5fa;">Context:</strong> ${escapeHtml(term.context.en || term.context.hi)}
          <div style="font-size: 8.5pt; color: #cbd5e1; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(term.context.hi)}</div>
        </div>` : ''}
      </div>`;
  });

  html += `
    </div>
  </section>

  <!-- SECTION 9: COMPLETE 182 PRACTICE QUESTIONS BANK (BILINGUAL • ENGLISH 1ST) -->
  <section id="sec-9" class="booklet-section page-break">
    <div class="section-banner">
      <span>9. 182 Authentic Past Year Practice Questions (PYQ Bank) • विगत वर्षों के 182 परीक्षा प्रश्न</span>
      <span class="page-badge">PAGE NO. 127 TO 154</span>
    </div>`;

  questions182.forEach((q, idx) => {
    const qNum = q.questionNumber || idx + 1;
    html += `
    <div class="card-item">
      <div style="font-weight: bold; font-size: 9.5pt; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: baseline;">
        <span style="color: #f8fafc;"><span style="color: #fbbf24;">Q.${qNum}.</span> ${escapeHtml(q.question.en)}</span>
        <span style="font-size: 7.5pt; font-weight: normal; color: #fbbf24; margin-left: 8px; white-space: nowrap; border: 1px solid #f59e0b; padding: 1px 6px; border-radius: 3px; background: rgba(245, 158, 11, 0.15);">${escapeHtml(q.examTag)}</span>
      </div>
      <div style="font-size: 9.2pt; color: #f1f5f9; margin-bottom: 6px; font-family: 'Noto Sans Devanagari', sans-serif;">
        <strong style="color: #fbbf24;">हिंदी:</strong> ${escapeHtml(q.question.hi)}
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 8.5pt; margin-bottom: 6px;">`;

    (['a', 'b', 'c', 'd'] as const).forEach((optKey) => {
      const isCorrect = q.correctAnswer === optKey;
      const opt = q.options[optKey];
      html += `
        <div class="option-box ${isCorrect ? 'option-correct' : 'option-normal'}">
          <strong>(${optKey.toUpperCase()})</strong> ${escapeHtml(opt.en || opt.hi)} ${isCorrect ? '✓' : ''}
          <div style="font-size: 8.5pt; color: ${isCorrect ? '#a7f3d0' : '#cbd5e1'}; margin-top: 2px; font-family: 'Noto Sans Devanagari', sans-serif;">हिंदी: ${escapeHtml(opt.hi)}</div>
        </div>`;
    });

    html += `
      </div>
      <div style="background: #091527; border-left: 3px solid #3b82f6; padding: 6px 10px; font-size: 8.5pt; border-radius: 0 4px 4px 0;">
        <strong style="color: #60a5fa;">Answer & Explanation (English):</strong> <span style="color: #f8fafc;">${escapeHtml(q.explanation.en || q.explanation.hi)}</span>
        <div style="font-size: 9pt; color: #f1f5f9; margin-top: 3px; border-top: 1px dashed #1a3458; padding-top: 3px; font-family: 'Noto Sans Devanagari', sans-serif;">
          <strong style="color: #fbbf24;">उत्तर एवं व्याख्या (हिंदी):</strong> ${escapeHtml(q.explanation.hi)}
        </div>
      </div>
    </div>`;
  });

  html += `
  </section>

  <!-- BOOKLET FOOTER (BILINGUAL) -->
  <footer style="border-top: 2px solid #f59e0b; margin-top: 36px; padding-top: 14px; text-align: center; font-size: 9pt; color: #cbd5e1;" class="avoid-break">
    <p style="font-weight: bold; color: #fbbf24; margin: 0; font-size: 10.5pt;">
      GS By Durgesh Pandey Sir • UPSI & State Police Official Master Polity Compendium
    </p>
    <p style="margin: 4px 0 0 0; color: #f8fafc; font-size: 8.5pt;">
      Complete Authentic Bilingual Syllabus • Key to Success: Consistent Practice & Standard Conceptual Clarity.
    </p>
    <p style="margin: 2px 0 0 0; color: #cbd5e1; font-size: 8.8pt; font-family: 'Noto Sans Devanagari', sans-serif;">
      सम्पूर्ण प्रामाणिक द्विभाषी पाठ्यक्रम • सफलता का एकमात्र सूत्र: निरंतर अभ्यास एवं प्रामाणिक अध्ययन।
    </p>
  </footer>
</div>

<script>
  let currentSection = 'all';

  function selectSection(secId) {
    currentSection = secId;
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
      if (t.getAttribute('data-sec') === secId) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    const sections = document.querySelectorAll('.booklet-section');
    const activePrintBtn = document.getElementById('btn-print-active-sec');
    const statusBanner = document.getElementById('section-status-banner');

    if (secId === 'all') {
      sections.forEach(s => s.style.display = '');
      if (activePrintBtn) activePrintBtn.style.display = 'none';
      if (statusBanner) statusBanner.style.display = 'none';
      if (window.location.hash) {
        try { history.replaceState(null, null, ' '); } catch (e) {}
      }
    } else {
      sections.forEach(s => {
        if (s.id === secId) {
          s.style.display = '';
          s.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          s.style.display = 'none';
        }
      });
      const activeTab = document.querySelector('.tab-btn[data-sec="' + secId + '"]');
      const secName = activeTab ? activeTab.innerText : 'Section';
      if (activePrintBtn) {
        activePrintBtn.style.display = 'inline-flex';
        activePrintBtn.innerText = '📑 Print ' + secName;
      }
      if (statusBanner) {
        statusBanner.style.display = 'block';
        statusBanner.innerHTML = 'Showing <strong>' + secName + '</strong> only. You can now save/print this module in 1-2 seconds with zero spooler lag! <button onclick="selectSection(\\'all\\')" style="background:none; border:none; color:#fbbf24; text-decoration:underline; cursor:pointer; font-weight:bold; margin-left:10px;">Show All Sections</button>';
      }
      try { history.replaceState(null, null, '#' + secId); } catch (e) {}
    }
  }

  function printEntireBooklet() {
    const btn = document.getElementById('btn-print-full');
    const origText = btn ? btn.innerHTML : '';
    if (btn) {
      btn.innerHTML = '⏳ Preparing 154-Page Preview...';
      btn.style.opacity = '0.8';
    }
    selectSection('all');
    // Allow browser reflow to fully settle across all 154 pages before invoking print spooler
    setTimeout(() => {
      if (btn) {
        btn.innerHTML = origText;
        btn.style.opacity = '1';
      }
      try {
        window.print();
      } catch (err) {
        alert('Print preview error: In the Chrome print window, switch Destination to "Save as PDF" instead of printer drivers, or use the fast section tabs above.');
      }
    }, 500);
  }

  function printCurrentSection() {
    const btn = document.getElementById('btn-print-active-sec');
    const origText = btn ? btn.innerHTML : '';
    if (btn) {
      btn.innerHTML = '⏳ Opening Print Dialog...';
    }
    setTimeout(() => {
      if (btn) btn.innerHTML = origText;
      window.print();
    }, 180);
  }

  function downloadOfflineHtml() {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GS_Durgesh_Pandey_Sir_Master_Polity_Booklet.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Handle URL hash on page load
  window.addEventListener('DOMContentLoaded', () => {
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    if (!hash) return;
    
    if (hash === 'sec-1' || hash === 'index') selectSection('sec-1');
    else if (hash === 'sec-2' || hash === 'articles') selectSection('sec-2');
    else if (hash === 'sec-3' || hash === 'acts' || hash === 'historical') selectSection('sec-3');
    else if (hash === 'sec-4' || hash === 'schedules') selectSection('sec-4');
    else if (hash === 'sec-5' || hash === 'magic89') selectSection('sec-5');
    else if (hash === 'sec-6' || hash === 'tricks') selectSection('sec-6');
    else if (hash === 'sec-7' || hash === 'cases') selectSection('sec-7');
    else if (hash === 'sec-8' || hash === 'terms') selectSection('sec-8');
    else if (hash === 'sec-9' || hash === 'questions' || hash === 'quiz') selectSection('sec-9');
  });
</script>

</body>
</html>`;

  return html;
}

// Generate file when executed directly
const outPath = path.resolve(process.cwd(), 'public/gs_booklet.html');
fs.writeFileSync(outPath, generateBookletHtml(), 'utf8');
const stats = fs.statSync(outPath);
console.log(`Successfully generated ${outPath}, size: ${(stats.size / 1024).toFixed(0)} KB`);
