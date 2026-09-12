import { JudicialVerdict } from '../types';

export const JUDICIAL_CASES_DATA: JudicialVerdict[] = [
  {
    id: 'case-1',
    caseName: 'शंकरी प्रसाद बनाम भारत संघ (Shankari Prasad v. Union of India)',
    year: 1951,
    court: 'उच्चतम न्यायालय (Supreme Court of India)',
    subject: {
      hi: 'संसद की संविधान संशोधन शक्ति एवं प्रथम संविधान संशोधन (1951) की वैधता',
      en: 'Parliament’s amending power and validity of First Constitutional Amendment (1951)'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने निर्धारित किया कि अनुच्छेद 368 के तहत संसद की संविधान संशोधन शक्ति विधायी शक्ति न होकर ‘संविधानायी शक्ति’ (Constituent power) है। संसद अनुच्छेद 368 का प्रयोग करके भाग 3 के किसी भी मूल अधिकार में संशोधन कर सकती है।',
      en: 'Supreme Court held that amending power under Art 368 is constituent power, distinct from ordinary legislative power; Parliament can amend any Fundamental Right.'
    },
    constitutionalArticles: ['अनुच्छेद 13(2)', 'अनुच्छेद 368']
  },
  {
    id: 'case-2',
    caseName: 'गोलकनाथ बनाम पंजाब राज्य (Golaknath v. State of Punjab)',
    year: 1967,
    court: 'उच्चतम न्यायालय (Supreme Court of India - 11 जजों की पीठ)',
    benchOrJudge: 'मुख्य न्यायाधीश के. सुब्बा राव (CJI K. Subba Rao)',
    subject: {
      hi: 'मौलिक अधिकारों में संशोधन पर रोक (भविष्यलक्षी अधिनिर्णय)',
      en: 'Bar on amending Fundamental Rights (Doctrine of Prospective Overruling)'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट की 11 न्यायाधीशों की पीठ ने 6:5 के बहुमत से शंकरी प्रसाद और सज्जन सिंह निर्णयों को पलटते हुए निर्णय दिया कि अनुच्छेद 368 केवल संशोधन की प्रक्रिया बताता है, संशोधन की असीमित शक्ति नहीं। संविधान संशोधन भी अनुच्छेद 13(2) के तहत ‘विधि’ है, अतः संसद मौलिक अधिकारों को न तो छीन सकती है और न ही सीमित कर सकती है।',
      en: '11-judge bench ruled 6:5 that constitutional amendments under Art 368 are "law" under Art 13(2); hence Parliament cannot abridge or take away Fundamental Rights.'
    },
    constitutionalArticles: ['अनुच्छेद 13(2)', 'अनुच्छेद 368']
  },
  {
    id: 'case-3',
    caseName: 'केशवानंद भारती बनाम केरल राज्य (Kesavananda Bharati v. State of Kerala)',
    year: 1973,
    court: 'उच्चतम न्यायालय (13 जजों की सबसे बड़ी संवैधानिक पीठ)',
    benchOrJudge: 'मुख्य न्यायाधीश एस.एम. सीकरी (CJI S.M. Sikri) - 24 अप्रैल 1973',
    subject: {
      hi: 'संविधान के मूल ढांचे का सिद्धांत (Basic Structure Doctrine)',
      en: 'Basic Structure Doctrine and Scope of Article 368'
    },
    rulingSummary: {
      hi: 'भारत के न्यायिक इतिहास की सबसे बड़ी 13 जजों की पीठ ने 7:6 के बहुमत से ऐतिहासिक निर्णय दिया: संसद संविधान के किसी भी भाग (मूल अधिकारों सहित) में संशोधन कर सकती है, परंतु वह संविधान के ‘आधारभूत ढांचे’ (Basic Structure) को नष्ट या विकृत नहीं कर सकती। इसी वाद में माना गया कि प्रस्तावना संविधान का अभिन्न अंग है।',
      en: 'Largest 13-judge bench established the Basic Structure Doctrine: Parliament can amend any part of the Constitution under Art 368, but cannot alter its basic structure. Preamble is an integral part of the Constitution.'
    },
    constitutionalArticles: ['प्रस्तावना', 'अनुच्छेद 13', 'अनुच्छेद 368']
  },
  {
    id: 'case-4',
    caseName: 'मेनका गांधी बनाम भारत संघ (Maneka Gandhi v. Union of India)',
    year: 1978,
    court: 'उच्चतम न्यायालय',
    benchOrJudge: 'जस्टिस पी.एन. भगवती (Justice P.N. Bhagwati)',
    subject: {
      hi: 'अनुच्छेद 21 का व्यापक विस्तार, विदेश भ्रमण का अधिकार एवं विधि की सम्यक प्रक्रिया',
      en: 'Expansive interpretation of Article 21, Right to Travel Abroad & Due Process of Law'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने पासपोर्ट जब्त किए जाने के मामले में निर्णय दिया कि अनुच्छेद 21 में ‘विधि द्वारा स्थापित प्रक्रिया’ केवल मनमानी नहीं होनी चाहिए, बल्कि वह न्यायसंगत, निष्पक्ष और युक्तियुक्त (Just, Fair and Reasonable - अमेरिकी Due Process of Law) होनी चाहिए। विदेश भ्रमण करना अनुच्छेद 21 का मूल अधिकार है। अनुच्छेद 14, 19 और 21 परस्पर संबंधित हैं (स्वर्ण त्रिकोण - Golden Triangle)।',
      en: 'Established that "procedure established by law" under Art 21 must be just, fair, and reasonable. Right to travel abroad is part of personal liberty.'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 19', 'अनुच्छेद 21']
  },
  {
    id: 'case-5',
    caseName: 'हुस्नआरा खातून बनाम बिहार राज्य (Hussainara Khatoon v. State of Bihar)',
    year: 1979,
    court: 'उच्चतम न्यायालय',
    subject: {
      hi: 'त्वरित विचारण का अधिकार (Right to Speedy Trial) एवं विचाराधीन कैदियों की मुक्ति',
      en: 'Right to Speedy Trial and release of undertrial prisoners'
    },
    rulingSummary: {
      hi: 'भारत में जनहित याचिका (PIL) का पहला मील का पत्थर वाद। सुप्रीम कोर्ट ने निर्णय दिया कि त्वरित न्याय (Speedy Trial) अनुच्छेद 21 के तहत प्राण और दैहिक स्वतंत्रता का मौलिक अधिकार है। इस याचिका के कारण बिहार की जेलों से 40,000 से अधिक विचाराधीन कैदियों को रिहा किया गया।',
      en: 'Recognized Right to Speedy Trial as a fundamental right under Article 21. Led to the historic release of over 40,000 undertrial prisoners.'
    },
    constitutionalArticles: ['अनुच्छेद 21', 'अनुच्छेद 32']
  },
  {
    id: 'case-6',
    caseName: 'मिनर्वा मिल्स बनाम भारत संघ (Minerva Mills v. Union of India)',
    year: 1980,
    court: 'उच्चतम न्यायालय',
    subject: {
      hi: 'मूल अधिकार एवं नीति निदेशक तत्वों में संतुलन तथा न्यायिक समीक्षा',
      en: 'Harmonious balance between Fundamental Rights and DPSPs'
    },
    rulingSummary: {
      hi: '42वें संविधान संशोधन द्वारा अनुच्छेद 368 में जोड़े गए खंड (4) और (5) को असंवैधानिक घोषित किया गया। न्यायालय ने कहा कि भारतीय संविधान मूल अधिकारों और नीति निदेशक तत्वों के बीच संतुलन की नींव पर टिका हुआ है; न्यायिक समीक्षा (Judicial Review) संविधान का मूल ढांचा है।',
      en: 'Invalidated parts of 42nd Amendment. Held that Indian Constitution is founded on the bedrock of balance between Parts III and IV; Judicial Review is basic structure.'
    },
    constitutionalArticles: ['अनुच्छेद 13', 'अनुच्छेद 368', 'भाग III व IV']
  },
  {
    id: 'case-7',
    caseName: 'इन्दिरा साहनी बनाम भारत संघ (Indra Sawhney v. Union of India - मंडल वाद)',
    year: 1992,
    court: 'उच्चतम न्यायालय (9 जजों की संविधान पीठ)',
    subject: {
      hi: 'ओबीसी को 27% आरक्षण, 50% की अधिकतम सीमा तथा क्रीमीलेयर',
      en: '27% OBC Reservation, 50% Ceiling, and Creamy Layer exclusion'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने अन्य पिछड़ा वर्ग (OBC) को 27% आरक्षण को वैध ठहराया। प्रमुख सिद्धांत: 1. आरक्षण कुल 50% से अधिक नहीं होना चाहिए, 2. क्रीमीलेयर (सम्पन्न वर्ग) को आरक्षण के दायरे से बाहर रखा जाए, 3. पदोन्नति में आरक्षण अनुचित है (बाद में संसद ने 77वें व 85वें संशोधन द्वारा SC/ST हेतु पदोन्नति आरक्षण बहाल किया)।',
      en: 'Upheld 27% OBC reservation subject to 50% ceiling and exclusion of the creamy layer. Promoted Ramanandan Committee for identification.'
    },
    constitutionalArticles: ['अनुच्छेद 16(4)', 'अनुच्छेद 340']
  },
  {
    id: 'case-8',
    caseName: 'विशाखा बनाम राजस्थान राज्य (Vishaka v. State of Rajasthan)',
    year: 1997,
    court: 'उच्चतम न्यायालय',
    benchOrJudge: 'सीजेआई जे.एस. वर्मा (CJI J.S. Verma)',
    subject: {
      hi: 'कार्यस्थल पर महिलाओं के यौन उत्पीड़न के विरुद्ध विशाखा दिशानिर्देश',
      en: 'Vishaka Guidelines on Sexual Harassment of Women at Workplace'
    },
    rulingSummary: {
      hi: 'कार्यस्थल पर कामकाजी महिलाओं के यौन उत्पीड़न को रोकने के लिए सुप्रीम कोर्ट ने ऐतिहासिक ‘विशाखा दिशानिर्देश’ (Vishaka Guidelines) जारी किए। यह निर्देश तब तक कानून की तरह लागू रहे जब तक संसद ने 2013 में कार्यस्थल पर महिलाओं का यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम नहीं बना दिया।',
      en: 'Laid down binding Vishaka guidelines against sexual harassment at workplaces under Articles 14, 19, and 21 until POSH Act 2013 was enacted.'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 19(1)(g)', 'अनुच्छेद 21']
  },
  {
    id: 'case-9',
    caseName: 'के.एस. पुट्टास्वामी बनाम भारत संघ (K.S. Puttaswamy v. Union of India)',
    year: 2017,
    court: 'उच्चतम न्यायालय (9 जजों की संविधान पीठ)',
    benchOrJudge: 'सीजेआई जे.एस. खेहर व जस्टिस डी.वाई. चंद्रचूड़',
    subject: {
      hi: 'निजता का अधिकार (Right to Privacy) मौलिक अधिकार घोषित',
      en: 'Right to Privacy recognized as a Fundamental Right under Article 21'
    },
    rulingSummary: {
      hi: '9 जजों की संविधान पीठ ने सर्वसम्मति से निर्णय दिया कि ‘निजता का अधिकार’ (Right to Privacy) संविधान के अनुच्छेद 21 के तहत जीवन और व्यक्तिगत स्वतंत्रता का आंतरिक व मौलिक अधिकार है। खड़क सिंह (1962) और एम.पी. शर्मा (1954) के पूर्व निर्णयों को निरस्त किया।',
      en: 'Unanimously declared the Right to Privacy an intrinsic fundamental right protected under Article 21 and the freedoms guaranteed by Part III.'
    },
    constitutionalArticles: ['अनुच्छेद 21', 'भाग III']
  },
  {
    id: 'case-10',
    caseName: 'शायरा बानो बनाम भारत संघ (Shayara Bano v. Union of India)',
    year: 2017,
    court: 'उच्चतम न्यायालय (5 जजों की संवैधानिक पीठ)',
    subject: {
      hi: 'तीन तलाक (तलाक-ए-बिद्दत) को असंवैधानिक घोषित करना',
      en: 'Triple Talaq (Talaq-e-Biddat) declared unconstitutional'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने 3:2 के बहुमत से मुस्लिम समुदाय में प्रचलित एक साथ तीन बार तलाक (तलाक-ए-बिद्दत / Instant Triple Talaq) को मनमाना, गैर-इस्लामिक तथा अनुच्छेद 14 (समानता का अधिकार) का उल्लंघन मानते हुए शून्य व असंवैधानिक घोषित किया। इसके पश्चात संसद ने 2019 में मुस्लिम महिला (विवाह अधिकार संरक्षण) अधिनियम पारित किया।',
      en: 'Set aside the practice of instantaneous Triple Talaq (Talaq-e-Biddat) as unconstitutional, arbitrary, and violative of Article 14.'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 21', 'अनुच्छेद 25']
  },
  {
    id: 'case-11',
    caseName: 'नवतेज सिंह जोहर बनाम भारत संघ (Navtej Singh Johar v. Union of India)',
    year: 2018,
    court: 'उच्चतम न्यायालय (5 जजों की संविधान पीठ)',
    benchOrJudge: 'सीजेआई दीपक मिश्रा (CJI Dipak Misra)',
    subject: {
      hi: 'आईपीसी धारा 377 को आंशिक रूप से असंवैधानिक घोषित करना (समलैंगिकता अपराधमुक्त)',
      en: 'Decriminalization of consensual adult homosexual acts under Section 377 IPC'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट की संविधान पीठ ने सर्वसम्मति से भारतीय दंड संहिता (IPC) की धारा 377 के उस भाग को असंवैधानिक घोषित किया जो वयस्कों के बीच सहमति से बनाए गए समलैंगिक संबंधों को अपराध मानता था। कोर्ट ने कहा कि यौन अभिरुचि (Sexual orientation) गरिमा और निजता का अनिवार्य अंग है।',
      en: 'Unanimously read down Section 377 of the IPC, decriminalizing consensual private sexual acts between adults of same sex.'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 15', 'अनुच्छेद 19', 'अनुच्छेद 21']
  },
  {
    id: 'case-12',
    caseName: 'जोसेफ शाइन बनाम भारत संघ (Joseph Shine v. Union of India)',
    year: 2018,
    court: 'उच्चतम न्यायालय',
    benchOrJudge: 'सीजेआई दीपक मिश्रा व जस्टिस डी.वाई. चंद्रचूड़',
    subject: {
      hi: 'व्यभिचार (Adultery - IPC 497) को अपराध की श्रेणी से बाहर करना',
      en: 'Decriminalization of Adultery (Section 497 IPC struck down)'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने 158 वर्ष पुरानी आईपीसी की धारा 497 (व्यभिचार) को असंवैधानिक करार देते हुए रद्द किया। अदालत ने कहा: "महिला अपने पति की संपत्ति या जागीर नहीं है।" व्यभिचार केवल विवाह विच्छेद (तलाक) का सिविल आधार हो सकता है, आपराधिक कृत्य नहीं।',
      en: 'Struck down Section 497 of IPC regarding adultery as archaic, patriarchal, and violative of Articles 14 and 21. "Husband is not the master of wife."'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 21']
  },
  {
    id: 'case-13',
    caseName: 'अनुराधा भसीन बनाम भारत संघ (Anuradha Bhasin v. Union of India)',
    year: 2020,
    court: 'उच्चतम न्यायालय',
    subject: {
      hi: 'इंटरनेट की स्वतंत्रता एवं अनुच्छेद 19(1)(a) के तहत मूल अधिकार',
      en: 'Freedom of Speech via Internet as a Fundamental Right under Art 19(1)(a)'
    },
    rulingSummary: {
      hi: 'जम्मू-कश्मीर में इंटरनेट पाबंदियों के मामले में सुप्रीम कोर्ट ने व्यवस्था दी कि इंटरनेट के माध्यम से अपने विचार व्यक्त करना तथा व्यापार-व्यवसाय करना संविधान के अनुच्छेद 19(1)(a) और 19(1)(g) के तहत मौलिक अधिकार है। इंटरनेट को अनिश्चितकाल के लिए बंद नहीं किया जा सकता।',
      en: 'Held that freedom of speech and expression and freedom to practice any profession over the medium of internet is constitutionally protected under Art 19.'
    },
    constitutionalArticles: ['अनुच्छेद 19(1)(a)', 'अनुच्छेद 19(1)(g)']
  },
  {
    id: 'case-14',
    caseName: 'विनीता शर्मा बनाम राकेश शर्मा (Vineeta Sharma v. Rakesh Sharma)',
    year: 2020,
    court: 'उच्चतम न्यायालय (3 जजों की पीठ)',
    benchOrJudge: 'जस्टिस अरुण मिश्रा',
    subject: {
      hi: 'हिंदू उत्तराधिकार (संशोधन) अधिनियम 2005 के तहत बेटियों का पैतृक संपत्ति में समान अधिकार',
      en: 'Coparcenary rights of daughters in ancestral property'
    },
    rulingSummary: {
      hi: 'सुप्रीम कोर्ट ने स्पष्ट किया कि बेटियों को बेटों के समान जन्म से ही पैतृक संपत्ति में सह-दायिक (Coparcener) का पूर्ण अधिकार प्राप्त है। यह अधिकार इस बात पर निर्भर नहीं करता कि 9 सितंबर 2005 (संशोधन लागू होने की तिथि) पर पिता जीवित थे या नहीं।',
      en: 'Ruled that daughters have equal coparcenary rights by birth in Hindu Undivided Family property irrespective of whether father was alive on 9 Sept 2005.'
    },
    constitutionalArticles: ['अनुच्छेद 14', 'अनुच्छेद 15']
  },
  {
    id: 'case-15',
    caseName: 'परमवीर सिंह सैनी बनाम बलजीत सिंह (Paramvir Singh Saini v. Baljeet Singh)',
    year: 2020,
    court: 'उच्चतम न्यायालय',
    subject: {
      hi: 'देश के सभी पुलिस थानों और जांच एजेंसियों के कार्यालयों में सीसीटीवी कैमरे लगाना अनिवार्य',
      en: 'Mandatory installation of CCTV cameras in all police stations and agency offices'
    },
    rulingSummary: {
      hi: 'हिरासत में यातना और मानव अधिकारों के हनन को रोकने के लिए सुप्रीम कोर्ट ने आदेश दिया कि केंद्र व राज्य सरकारें सभी पुलिस थानों के प्रवेश द्वार, हवालात, कॉरिडोर, तथा सीबीआई, एनआईए, ईडी के कार्यालयों में नाइट विजन और ऑडियो रिकॉर्डिंग वाले सीसीटीवी कैमरे अनिवार्य रूप से लगाएं।',
      en: 'Directed mandatory installation of functional CCTV cameras with audio recording across all police stations to curb custodial torture.'
    },
    constitutionalArticles: ['अनुच्छेद 21']
  }
];
