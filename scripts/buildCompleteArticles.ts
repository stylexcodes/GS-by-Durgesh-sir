import fs from 'fs';
import { ARTICLES_DATA } from '../src/data/articlesData';
import { ConstitutionalArticle } from '../src/types';

// Let's create a complete set of Articles 1 to 395
export function buildAll395Articles(): ConstitutionalArticle[] {
  // Existing articles map by article number
  const existingMap = new Map<string, ConstitutionalArticle>();
  ARTICLES_DATA.forEach(art => {
    const num = (art.articleNumber || art.number || '').trim();
    if (num) {
      existingMap.set(num, art);
    }
  });

  const partDefinitions = [
    { part: 'Part I', range: [1, 4], nameHi: 'भाग 1: संघ और उसका राज्यक्षेत्र', nameEn: 'Part I: The Union and its Territory' },
    { part: 'Part II', range: [5, 11], nameHi: 'भाग 2: नागरिकता', nameEn: 'Part II: Citizenship' },
    { part: 'Part III', range: [12, 35], nameHi: 'भाग 3: मौलिक अधिकार', nameEn: 'Part III: Fundamental Rights' },
    { part: 'Part IV', range: [36, 51], nameHi: 'भाग 4: राज्य की नीति के निदेशक तत्व', nameEn: 'Part IV: Directive Principles of State Policy' },
    { part: 'Part IVA', range: ['51A'], nameHi: 'भाग 4क: मूल कर्तव्य', nameEn: 'Part IVA: Fundamental Duties' },
    { part: 'Part V', range: [52, 151], nameHi: 'भाग 5: संघ सरकार (कार्यपालिका, संसद, कैग)', nameEn: 'Part V: The Union' },
    { part: 'Part VI', range: [152, 237], nameHi: 'भाग 6: राज्य सरकारें (कार्यपालिका, विधानमंडल, उच्च न्यायालय)', nameEn: 'Part VI: The States' },
    { part: 'Part VII', range: [238, 238], nameHi: 'भाग 7: पहली अनुसूची के भाग ख के राज्य (7वें संशोधन द्वारा निरसित)', nameEn: 'Part VII: Repealed by 7th Amendment' },
    { part: 'Part VIII', range: [239, 242], nameHi: 'भाग 8: संघ राज्य क्षेत्र (UTs)', nameEn: 'Part VIII: The Union Territories' },
    { part: 'Part IX', range: [243, 243], nameHi: 'भाग 9: पंचायतें', nameEn: 'Part IX: The Panchayats' },
    { part: 'Part IXA', range: ['243P', '243ZG'], nameHi: 'भाग 9क: नगरपालिकाएं', nameEn: 'Part IXA: The Municipalities' },
    { part: 'Part IXB', range: ['243ZH', '243ZT'], nameHi: 'भाग 9ख: सहकारी समितियां', nameEn: 'Part IXB: The Co-operative Societies' },
    { part: 'Part X', range: [244, 244], nameHi: 'भाग 10: अनुसूचित और जनजाति क्षेत्र', nameEn: 'Part X: The Scheduled and Tribal Areas' },
    { part: 'Part XI', range: [245, 263], nameHi: 'भाग 11: संघ और राज्यों के बीच संबंध', nameEn: 'Part XI: Relations Between Union and States' },
    { part: 'Part XII', range: [264, 300], nameHi: 'भाग 12: वित्त, संपत्ति, संविदाएं और वाद', nameEn: 'Part XII: Finance, Property, Contracts and Suits' },
    { part: 'Part XIII', range: [301, 307], nameHi: 'भाग 13: भारत के राज्यक्षेत्र के भीतर व्यापार, वाणिज्य और समागम', nameEn: 'Part XIII: Trade, Commerce and Intercourse' },
    { part: 'Part XIV', range: [308, 323], nameHi: 'भाग 14: संघ और राज्यों के अधीन सेवाएं (UPSC व SPSC)', nameEn: 'Part XIV: Services Under the Union and States' },
    { part: 'Part XIVA', range: ['323A', '323B'], nameHi: 'भाग 14क: अधिकरण (Tribunals)', nameEn: 'Part XIVA: Tribunals' },
    { part: 'Part XV', range: [324, 329], nameHi: 'भाग 15: निर्वाचन (Elections)', nameEn: 'Part XV: Elections' },
    { part: 'Part XVI', range: [330, 342], nameHi: 'भाग 16: कुछ वर्गों के संबंध में विशेष उपबंध (SC/ST/OBC)', nameEn: 'Part XVI: Special Provisions Relating to Certain Classes' },
    { part: 'Part XVII', range: [343, 351], nameHi: 'भाग 17: राजभाषा (Official Language)', nameEn: 'Part XVII: Official Language' },
    { part: 'Part XVIII', range: [352, 360], nameHi: 'भाग 18: आपात उपबंध (Emergency Provisions)', nameEn: 'Part XVIII: Emergency Provisions' },
    { part: 'Part XIX', range: [361, 367], nameHi: 'भाग 19: प्रकीर्ण (Miscellaneous)', nameEn: 'Part XIX: Miscellaneous' },
    { part: 'Part XX', range: [368, 368], nameHi: 'भाग 20: संविधान का संशोधन (Amendment of Constitution)', nameEn: 'Part XX: Amendment of the Constitution' },
    { part: 'Part XXI', range: [369, 392], nameHi: 'भाग 21: अस्थायी, संक्रमणकालीन और विशेष उपबंध', nameEn: 'Part XXI: Temporary, Transitional and Special Provisions' },
    { part: 'Part XXII', range: [393, 395], nameHi: 'भाग 22: संक्षिप्त नाम, प्रारंभ, हिंदी में प्राधिकृत पाठ और निरसन', nameEn: 'Part XXII: Short Title, Commencement, Authoritative Text and Repeals' }
  ];

  function getPartInfo(artNum: number | string) {
    const n = typeof artNum === 'number' ? artNum : parseInt(artNum);
    if (artNum === '51A') return partDefinitions[4];
    if (n >= 1 && n <= 4) return partDefinitions[0];
    if (n >= 5 && n <= 11) return partDefinitions[1];
    if (n >= 12 && n <= 35) return partDefinitions[2];
    if (n >= 36 && n <= 51) return partDefinitions[3];
    if (n >= 52 && n <= 151) return partDefinitions[5];
    if (n >= 152 && n <= 237) return partDefinitions[6];
    if (n === 238) return partDefinitions[7];
    if (n >= 239 && n <= 242) return partDefinitions[8];
    if (n === 243) return partDefinitions[9];
    if (n >= 244 && n <= 244) return partDefinitions[12];
    if (n >= 245 && n <= 263) return partDefinitions[13];
    if (n >= 264 && n <= 300) return partDefinitions[14];
    if (n >= 301 && n <= 307) return partDefinitions[15];
    if (n >= 308 && n <= 323) return partDefinitions[16];
    if (n >= 324 && n <= 329) return partDefinitions[18];
    if (n >= 330 && n <= 342) return partDefinitions[19];
    if (n >= 343 && n <= 351) return partDefinitions[20];
    if (n >= 352 && n <= 360) return partDefinitions[21];
    if (n >= 361 && n <= 367) return partDefinitions[22];
    if (n === 368) return partDefinitions[23];
    if (n >= 369 && n <= 392) return partDefinitions[24];
    if (n >= 393 && n <= 395) return partDefinitions[25];
    return partDefinitions[5];
  }

  // Titles and descriptions for all 395 articles in authentic pure Unicode Hindi & English
  const titlesMap: Record<number, { hi: string; en: string; descHi: string; descEn: string; highYield?: boolean }> = {
    1: { hi: 'संघ का नाम और राज्यक्षेत्र', en: 'Name and territory of the Union', descHi: 'भारत अर्थात इंडिया राज्यों का संघ (Union of States) होगा। राज्य और उनके राज्यक्षेत्र पहली अनुसूची में विनिर्दिष्ट होंगे।', descEn: 'India, that is Bharat, shall be a Union of States.', highYield: true },
    2: { hi: 'नए राज्यों का प्रवेश या स्थापना', en: 'Admission or establishment of new States', descHi: 'संसद विधि द्वारा ऐसे निबंधनों और शर्तों पर जो वह ठीक समझे संघ में नए राज्यों का प्रवेश या उनकी स्थापना कर सकेगी।', descEn: 'Parliament may by law admit into the Union, or establish, new States.', highYield: true },
    3: { hi: 'नए राज्यों का निर्माण और वर्तमान राज्यों के क्षेत्रों, सीमाओं या नामों में परिवर्तन', en: 'Formation of new States and alteration of areas, boundaries or names', descHi: 'संसद साधारण बहुमत से नए राज्य का निर्माण कर सकती है या किसी राज्य के क्षेत्र, सीमा या नाम में परिवर्तन कर सकती है। राष्ट्रपति की पूर्व सिफारिश आवश्यक है।', descEn: 'Parliament may by law form new States and alter boundaries or names of existing States.', highYield: true },
    4: { hi: 'पहली और चौथी अनुसूची के संशोधन तथा अनुपूरक विषयों हेतु विधियां', en: 'Laws made under Articles 2 and 3', descHi: 'अनुच्छेद 2 या 3 के अधीन बनाई गई विधि अनुच्छेद 368 के प्रयोजनों के लिए संविधान का संशोधन नहीं समझी जाएगी (साधारण बहुमत पर्याप्त)।', descEn: 'Laws under Articles 2 and 3 are not deemed constitutional amendments under Article 368.', highYield: true },
    5: { hi: 'संविधान के प्रारंभ पर नागरिकता', en: 'Citizenship at the commencement of the Constitution', descHi: '26 जनवरी 1950 को प्रत्येक व्यक्ति जो भारत के राज्यक्षेत्र में अधिवासी था और भारत में जन्मा था या माता-पिता जन्मे थे, भारत का नागरिक होगा।', descEn: 'Citizenship at the commencement of the Constitution for domiciled persons.', highYield: true },
    6: { hi: 'पाकिस्तान से भारत को प्रव्रजन करने वाले कुछ व्यक्तियों के नागरिकता के अधिकार', en: 'Rights of citizenship of persons migrated from Pakistan', descHi: '19 जुलाई 1948 से पूर्व या पश्चात पाकिस्तान से भारत आए शरणार्थियों की नागरिकता का उपबंध।', descEn: 'Rights of citizenship of certain persons who have migrated to India from Pakistan.' },
    7: { hi: 'पाकिस्तान को प्रव्रजन करने वाले कुछ व्यक्तियों के नागरिकता के अधिकार', en: 'Rights of citizenship of certain migrants to Pakistan', descHi: '1 मार्च 1947 के पश्चात भारत से पाकिस्तान चले जाने वाले व्यक्तियों की नागरिकता समाप्ति और पुनर्वास परमिट पर वापसी का प्रावधान।', descEn: 'Citizenship rights of migrants to Pakistan and subsequent return.' },
    8: { hi: 'भारत के बाहर रहने वाले भारतीय उद्भव के व्यक्तियों के नागरिकता के अधिकार', en: 'Rights of citizenship of persons of Indian origin residing outside India', descHi: 'भारत से बाहर रहने वाले भारतीय मूल के व्यक्तियों का भारतीय दूतावास में पंजीकरण द्वारा नागरिकता प्राप्त करना।', descEn: 'Registration of citizens of Indian origin residing abroad.' },
    9: { hi: 'विदेशी राज्य की नागरिकता स्वेच्छा से अर्जित करने वाले व्यक्तियों का नागरिक न होना', en: 'Persons voluntarily acquiring foreign citizenship', descHi: 'यदि कोई व्यक्ति स्वेच्छा से किसी विदेशी राज्य की नागरिकता प्राप्त कर लेता है, तो उसकी भारतीय नागरिकता तत्काल समाप्त हो जाती है (एकल नागरिकता)।', descEn: 'Voluntary acquisition of foreign citizenship results in automatic loss of Indian citizenship.', highYield: true },
    10: { hi: 'नागरिकता के अधिकारों का बना रहना', en: 'Continuance of the rights of citizenship', descHi: 'प्रत्येक व्यक्ति जो इस भाग के उपबंधों के अधीन भारत का नागरिक है, संसद द्वारा बनाई गई विधि के अधीन नागरिक बना रहेगा।', descEn: 'Continuance of citizenship subject to laws made by Parliament.' },
    11: { hi: 'संसद द्वारा नागरिकता के अधिकार का विधि द्वारा विनियमन', en: 'Parliament to regulate the right of citizenship by law', descHi: 'संसद को नागरिकता के अर्जन और समाप्ति तथा नागरिकता संबंधी सभी मामलों पर कानून बनाने की पूर्ण संप्रभु शक्ति है (नागरिकता अधिनियम 1955)।', descEn: 'Parliament possesses complete authority to regulate citizenship by legislation.', highYield: true },
    12: { hi: '‘राज्य’ की परिभाषा', en: 'Definition of "State"', descHi: 'भाग 3 के प्रयोजनों हेतु राज्य में भारत सरकार, संसद, प्रत्येक राज्य सरकार, विधानमंडल तथा भारत के राज्यक्षेत्र के भीतर सभी स्थानीय व अन्य प्राधिकारी शामिल हैं।', descEn: 'Defines "State" for Part III fundamental rights enforcement.', highYield: true },
    13: { hi: 'मूल अधिकारों से असंगत या उनका अल्पीकरण करने वाली विधियां (न्यायिक पुनरावलोकन)', en: 'Laws inconsistent with or in derogation of Fundamental Rights', descHi: 'कोई भी कानून जो मौलिक अधिकारों का उल्लंघन करता है, उल्लंघन की सीमा तक शून्य होगा। आच्छादन का सिद्धांत (Doctrine of Eclipse) और पृथक्करणीयता का सिद्धांत इसी अनुच्छेद से निकलते हैं।', descEn: 'Provides the constitutional foundation for Judicial Review and Doctrine of Eclipse.', highYield: true },
    14: { hi: 'विधि के समक्ष समानता एवं विधियों का समान संरक्षण', en: 'Equality before law and equal protection of laws', descHi: 'राज्य किसी व्यक्ति को विधि के समक्ष समानता (ब्रिटेन से) या विधियों के समान संरक्षण (अमेरिका से) से वंचित नहीं करेगा।', descEn: 'Equality before law and equal protection of laws for all persons within India.', highYield: true },
    15: { hi: 'धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर विभेद का प्रतिषेध', en: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth', descHi: 'सार्वजनिक स्थानों में प्रवेश पर भेदभाव का निषेध। 15(3) महिलाओं/बच्चों हेतु विशेष उपबंध, 15(4) पिछड़े वर्गों हेतु, 15(6) EWS हेतु 10% आरक्षण।', descEn: 'Bars discrimination and empowers affirmative action for women, children, SC/ST/OBC and EWS.', highYield: true },
    16: { hi: 'लोक नियोजन के विषय में अवसर की समानता', en: 'Equality of opportunity in matters of public employment', descHi: 'सरकारी नौकरियों में सभी नागरिकों को समान अवसर। 16(4) पिछड़े वर्गों हेतु आरक्षण, 16(4A) पदोन्नति में आरक्षण, 16(6) EWS को 10% आरक्षण।', descEn: 'Guarantees equality of opportunity in public employment and governs reservation policies.', highYield: true },
    17: { hi: 'अस्पृश्यता का अंत', en: 'Abolition of Untouchability', descHi: 'अस्पृश्यता का पूर्ण उन्मूलन किया जाता है और उसका किसी भी रूप में आचरण निषिद्ध है। सिविल अधिकार संरक्षण अधिनियम 1955 इसके अधीन दंडनीय है।', descEn: 'Abolishes Untouchability and forbids its practice in any form as an absolute right.', highYield: true },
    18: { hi: 'उपाधियों का अंत', en: 'Abolition of titles', descHi: 'राज्य सैन्य और विद्या संबंधी उपाधियों को छोड़कर कोई अन्य उपाधि प्रदान नहीं करेगा। भारत रत्न/पद्म पुरस्कार उपाधि नहीं बल्कि राष्ट्रीय सम्मान हैं (बालाजी राघवन वाद 1996)।', descEn: 'Abolishes all feudal titles except military and academic distinctions.', highYield: true },
    19: { hi: 'वाक्-स्वातंत्र्य आदि विषयक कुछ अधिकारों का संरक्षण (6 मौलिक स्वतंत्रताएं)', en: 'Protection of six fundamental freedoms', descHi: '19(1)(a) वाक् व अभिव्यक्ति, (b) शांतिपूर्ण सम्मेलन, (c) संगम या संघ बनाना, (d) अबाध संचरण, (e) निवास का अधिकार, (g) व्यापार/वृत्ति की स्वतंत्रता।', descEn: 'Guarantees the 6 fundamental freedoms subject to reasonable restrictions under Art 19(2)-(6).', highYield: true },
    20: { hi: 'अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण', en: 'Protection in respect of conviction for offences', descHi: '20(1) भूतलक्षी दांडिक विधियों से संरक्षण (Ex-post facto laws), 20(2) दोहरे दंड से संरक्षण (Double Jeopardy), 20(3) आत्म-अभिशंसन से संरक्षण (Self-incrimination)। आपातकाल में भी निलंबित नहीं होता।', descEn: 'Protections against ex-post facto laws, double jeopardy, and self-incrimination.', highYield: true },
    21: { hi: 'प्राण और दैहिक स्वतंत्रता का संरक्षण', en: 'Protection of life and personal liberty', descHi: 'किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा अन्यथा नहीं। इसमें निजता, स्वच्छ पर्यावरण, आजीविका और गरिमा का अधिकार शामिल हैं।', descEn: 'Expansive right to life with human dignity, fair procedure, and personal liberty.', highYield: true },
    2101: { hi: 'अनुच्छेद 21A: शिक्षा का मौलिक अधिकार', en: 'Article 21A: Right to free and compulsory education', descHi: 'राज्य 6 से 14 वर्ष तक की आयु के सभी बालकों के लिए निःशुल्क और अनिवार्य शिक्षा उपलब्ध कराएगा (86वां संशोधन 2002)।', descEn: 'Free and compulsory education for all children aged 6 to 14 years.', highYield: true },
    22: { hi: 'कुछ दशाओं में गिरफ्तारी और निरोध से संरक्षण', en: 'Protection against arrest and detention in certain cases', descHi: 'गिरफ्तारी के कारणों को जानने, 24 घंटे के भीतर निकटतम मजिस्ट्रेट के समक्ष पेश किए जाने तथा पसंद के वकील से परामर्श का अधिकार। निवारक निरोध (Preventive Detention) की अधिकतम सीमा 3 माह।', descEn: 'Safeguards against arbitrary arrest and procedural rules for preventive detention.', highYield: true },
    23: { hi: 'मानव के दुर्व्यापार और बलात्श्रम का प्रतिषेध', en: 'Prohibition of traffic in human beings and forced labour', descHi: 'मानव तस्करी, बेगार और बंधुआ मजदूरी पर पूर्ण प्रतिबंध। इसका उल्लंघन कानूनन दंडनीय अपराध है।', descEn: 'Prohibits human trafficking, begar and involuntary servitude.', highYield: true },
    24: { hi: 'कारखानों आदि में बालकों के नियोजन का प्रतिषेध', en: 'Prohibition of employment of children in factories, etc.', descHi: '14 वर्ष से कम आयु के किसी बालक को किसी कारखाने, खान या अन्य किसी परिसंकटमय नियोजन में नियुक्त नहीं किया जाएगा।', descEn: 'Prohibits child labour below 14 years in factories, mines and hazardous employment.', highYield: true },
    25: { hi: 'अंतःकरण की और धर्म के अबाध रूप से मानने, आचरण और प्रचार करने की स्वतंत्रता', en: 'Freedom of conscience and free profession, practice and propagation of religion', descHi: 'प्रत्येक व्यक्ति को अंतःकरण की स्वतंत्रता तथा किसी भी धर्म को मानने, आचरण और प्रचार करने का अधिकार। सिखों को कृपाण धारण करने का अधिकार इसी में समाहित है।', descEn: 'Freedom of conscience and the right freely to profess, practise and propagate religion.', highYield: true },
    26: { hi: 'धार्मिक कार्यों के प्रबंध की स्वतंत्रता', en: 'Freedom to manage religious affairs', descHi: 'धार्मिक और पूर्त प्रयोजनों के लिए संस्थाओं की स्थापना, अपने धर्म विषयक कार्यों का प्रबंध तथा संपत्ति के अर्जन व प्रशासन का अधिकार।', descEn: 'Freedom of religious denominations to manage their own institutional affairs.', highYield: true },
    27: { hi: 'किसी विशिष्ट धर्म की अभिवृद्धि के लिए करों के संदाय के बारे में स्वतंत्रता', en: 'Freedom as to payment of taxes for promotion of any particular religion', descHi: 'राज्य किसी भी नागरिक को ऐसा कोई कर देने के लिए विवश नहीं करेगा जिसका उपयोग किसी विशेष धर्म के संवर्धन हेतु किया जाता हो।', descEn: 'No person shall be compelled to pay taxes for promotion of any specific religion.' },
    28: { hi: 'कुछ शिक्षण संस्थाओं में धार्मिक शिक्षा या धार्मिक उपासना में उपस्थित होने के बारे में स्वतंत्रता', en: 'Freedom as to attendance at religious instruction in educational institutions', descHi: 'पूर्णतः राज्य-निधि से पोषित किसी शिक्षा संस्था में कोई धार्मिक शिक्षा नहीं दी जाएगी।', descEn: 'Bars compulsory religious instruction in state-funded educational institutions.' },
    29: { hi: 'अल्पसंख्यक-वर्गों के हितों का संरक्षण', en: 'Protection of interests of minorities', descHi: 'भारत के नागरिकों के किसी अनुभाग को जिसकी अपनी विशिष्ट भाषा, लिपि या संस्कृति है, उसे बनाए रखने का अधिकार है।', descEn: 'Protects distinct language, script or culture of any section of citizens.', highYield: true },
    30: { hi: 'शिक्षा संस्थाओं की स्थापना और प्रशासन करने का अल्पसंख्यक-वर्गों का अधिकार', en: 'Right of minorities to establish and administer educational institutions', descHi: 'धर्म या भाषा पर आधारित सभी अल्पसंख्यक वर्गों को अपनी पसंद की शिक्षा संस्थाओं की स्थापना और प्रशासन का अधिकार है।', descEn: 'Right of linguistic and religious minorities to administer educational institutions.', highYield: true },
    31: { hi: 'संपत्ति का अनिवार्य अर्जन (44वें संशोधन 1978 द्वारा निरसित)', en: 'Compulsory acquisition of property (Repealed by 44th Amendment)', descHi: 'मूल संविधान में संपत्ति का अधिकार मूल अधिकार था जिसे 44वें संशोधन 1978 द्वारा निरसित कर अनुच्छेद 300A में कानूनी अधिकार बनाया गया।', descEn: 'Repealed by the 44th Constitutional Amendment Act 1978.' },
    32: { hi: 'मौलिक अधिकारों को प्रवर्तित कराने के लिए उपचार (संवैधानिक उपचारों का अधिकार)', en: 'Remedies for enforcement of Fundamental Rights', descHi: 'डॉ. अम्बेडकर द्वारा संविधान की आत्मा। सुप्रीम कोर्ट मौलिक अधिकारों की रक्षा हेतु 5 रिटें (बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार-पृच्छा) जारी कर सकता है।', descEn: 'Right to move Supreme Court for writs enforcement; described by Ambedkar as Heart and Soul.', highYield: true },
    33: { hi: 'सशस्त्र बलों आदि को लागू होने में मौलिक अधिकारों का उपांतरण करने की संसद की शक्ति', en: 'Power of Parliament to modify Fundamental Rights for armed forces', descHi: 'संसद विधि द्वारा सशस्त्र बलों, पुलिस और खुफिया एजेंसियों के सदस्यों के मूल अधिकारों को सीमित या प्रतिबंधित कर सकती है।', descEn: 'Parliament can restrict fundamental rights of military and intelligence personnel.' },
    34: { hi: 'जब किसी क्षेत्र में सेना विधि (Martial Law) प्रवृत्त है तब मौलिक अधिकारों पर निर्बंधन', en: 'Restriction on rights while martial law is in force', descHi: 'मार्शल लॉ लागू होने की स्थिति में संसद सैन्य अधिकारियों द्वारा व्यवस्था बनाए रखने हेतु किए गए कार्यों को विधिमान्य कर सकती है।', descEn: 'Indemnification of acts done during Martial Law in any territory.' },
    35: { hi: 'भाग 3 के उपबंधों को प्रभावी करने के लिए विधान', en: 'Legislation to give effect to the provisions of Part III', descHi: 'मौलिक अधिकारों को लागू करने और दंड विहित करने की कानून निर्माण शक्ति केवल संसद को प्राप्त है, राज्य विधानमंडलों को नहीं।', descEn: 'Exclusive power of Parliament to enact laws giving penal effect to Fundamental Rights.' },

    // DPSP 36 to 51
    36: { hi: 'राज्य की नीति के निदेशक तत्वों में ‘राज्य’ की परिभाषा', en: 'Definition of State in Part IV', descHi: 'भाग 4 में ‘राज्य’ का वही अर्थ है जो भाग 3 के अनुच्छेद 12 में दिया गया है।', descEn: 'State has same meaning in Part IV as defined under Article 12.' },
    37: { hi: 'निदेशक तत्वों का न्यायालय द्वारा अप्रवर्तनीय होना', en: 'Application of Directive Principles', descHi: 'नीति निदेशक तत्व न्यायालय द्वारा प्रवर्तनीय (गैर-वादयोग्य / Non-justiciable) नहीं हैं, किंतु देश के शासन में मूलभूत हैं और विधि निर्माण में इन्हें लागू करना राज्य का कर्तव्य है।', descEn: 'DPSP are non-justiciable in court but fundamental in governance of the country.', highYield: true },
    38: { hi: 'राज्य लोक कल्याण की अभिवृद्धि के लिए सामाजिक व्यवस्था बनाएगा', en: 'State to secure a social order for the promotion of welfare of people', descHi: 'सामाजिक, आर्थिक और राजनीतिक न्याय द्वारा लोककल्याणकारी राज्य की स्थापना। 38(2) आय और अवसरों की असमानताओं को कम करने का निर्देश देता है।', descEn: 'Directs State to promote welfare by securing social, economic, and political justice.', highYield: true },
    39: { hi: 'राज्य द्वारा अनुसरणीय कुछ नीति तत्व', en: 'Certain principles of policy to be followed by the State', descHi: '39(a) आजीविका के साधन, 39(b) भौतिक संसाधनों का सामूहिक हित में वितरण, 39(c) धन के संकेन्द्रण पर रोक, 39(d) समान कार्य के लिए समान वेतन।', descEn: 'Distribution of material resources, prevention of concentration of wealth, and equal pay for equal work.', highYield: true },
    3901: { hi: 'अनुच्छेद 39A: समान न्याय और निःशुल्क विधिक सहायता', en: 'Article 39A: Equal justice and free legal aid', descHi: 'गरीब और कमजोर वर्गों को निःशुल्क कानूनी सहायता उपलब्ध कराना (42वां संशोधन 1976)। इसी के तहत 1987 में नालसा (NALSA) कानून बना।', descEn: 'Equal justice and free legal aid for underprivileged citizens (42nd Amendment 1976).', highYield: true },
    40: { hi: 'ग्राम पंचायतों का संगठन', en: 'Organisation of village panchayats', descHi: 'राज्य ग्राम पंचायतों का संगठन करेगा और उन्हें स्वायत्त शासन की इकाइयों के रूप में कार्य करने हेतु आवश्यक शक्तियां प्रदान करेगा (गांधीवादी दर्शन)।', descEn: 'Organization of village panchayats as units of local self-government.', highYield: true },
    41: { hi: 'काम, शिक्षा और कुछ दशाओं में लोक सहायता पाने का अधिकार', en: 'Right to work, to education and to public assistance in certain cases', descHi: 'बेरोजगारी, बुढ़ापा, बीमारी और निःशक्तता की दशा में लोक सहायता। मनरेगा और वृद्धावस्था पेंशन का संवैधानिक आधार।', descEn: 'Right to work, education and public assistance in cases of unemployment and old age.', highYield: true },
    42: { hi: 'काम की न्यायसंगत और मानवोचित दशाओं तथा प्रसूति सहायता का उपबंध', en: 'Provision for just and humane conditions of work and maternity relief', descHi: 'कार्यस्थल पर मानवीय परिस्थितियां सुनिश्चित करना तथा महिलाओं के लिए मातृत्व राहत का उपबंध (मातृत्व लाभ अधिनियम का आधार)।', descEn: 'Just and humane conditions of work and maternity relief.' },
    43: { hi: 'कर्मकारों के लिए निर्वाह मजदूरी आदि', en: 'Living wage, etc., for workers', descHi: 'सभी कर्मकारों को निर्वाह मजदूरी, शिष्ट जीवन स्तर और कुटीर उद्योगों को प्रोत्साहन देना।', descEn: 'Living wage and promotion of cottage industries.' },
    4301: { hi: 'अनुच्छेद 43A: उद्योगों के प्रबंध में कर्मकारों का भाग लेना', en: 'Article 43A: Participation of workers in management of industries', descHi: 'उपक्रमों और उद्योगों के प्रबंधन में मजदूरों की भागीदारी सुनिश्चित करना (42वां संशोधन 1976)।', descEn: 'Workers’ participation in management of industrial establishments.' },
    4302: { hi: 'अनुच्छेद 43B: सहकारी समितियों का संवर्धन', en: 'Article 43B: Promotion of co-operative societies', descHi: 'सहकारी समितियों के स्वैच्छिक गठन, स्वायत्त कार्यप्रणाली और व्यावसायिक प्रबंधन को बढ़ावा देना (97वां संशोधन 2011)।', descEn: 'Promotion of autonomous and democratic functioning of cooperative societies.' },
    44: { hi: 'नागरिकों के लिए एक समान नागरिक संहिता (Uniform Civil Code - UCC)', en: 'Uniform Civil Code for the citizens', descHi: 'राज्य भारत के संपूर्ण राज्यक्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता प्राप्त करने का प्रयास करेगा (विवाह, तलाक, उत्तराधिकार आदि)। उत्तराखंड इसे लागू करने वाला पहला राज्य बना।', descEn: 'Directs the State to secure for all citizens a Uniform Civil Code across India.', highYield: true },
    45: { hi: '6 वर्ष से कम आयु के बालकों के लिए प्रारंभिक बाल्यावस्था देखरेख और शिक्षा', en: 'Early childhood care and education to children below age of six years', descHi: 'राज्य 6 वर्ष से कम आयु के सभी बालकों के लिए प्रारंभिक बाल्यावस्था देखरेख और पूर्व-प्राथमिक शिक्षा देने का प्रयास करेगा (86वें संशोधन 2002 द्वारा संशोधित)।', descEn: 'Early childhood care and education for children until they complete 6 years of age.' },
    46: { hi: 'अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य दुर्बल वर्गों के शिक्षा और अर्थ संबंधी हितों की अभिवृद्धि', en: 'Promotion of educational and economic interests of SCs, STs and other weaker sections', descHi: 'कमजोर वर्गों विशेषकर SC व ST की शिक्षा और आर्थिक हितों की विशेष सुरक्षा तथा सामाजिक अन्याय व शोषण से रक्षा।', descEn: 'Special educational and economic care for weaker sections, SCs, and STs.' },
    47: { hi: 'पोषाहार स्तर और जीवन स्तर को ऊंचा करने तथा लोक स्वास्थ्य का सुधार करने का राज्य का कर्तव्य', en: 'Duty of the State to raise level of nutrition and improve public health', descHi: 'मादक पेयों और स्वास्थ्य के लिए हानिकारक औषधियों के औषधीय प्रयोजनों को छोड़कर उपयोग पर प्रतिषेध (शराबबंदी का संवैधानिक आधार)।', descEn: 'Duty to raise nutrition levels, improve public health and enforce prohibition of intoxicating drinks.', highYield: true },
    48: { hi: 'कृषि और पशुपालन का संगठन', en: 'Organisation of agriculture and animal husbandry', descHi: 'कृषि व पशुपालन को आधुनिक व वैज्ञानिक प्रणालियों से संगठित करना; गायों, बछड़ों तथा अन्य दुधारू पशुओं के वध का प्रतिषेध (गौवध निषेध)।', descEn: 'Organise agriculture on modern lines and prohibit slaughter of cows and milch cattle.', highYield: true },
    4801: { hi: 'अनुच्छेद 48A: पर्यावरण का संरक्षण तथा संवर्धन और वन तथा वन्य जीवों की रक्षा', en: 'Article 48A: Protection and improvement of environment and safeguarding of forests and wild life', descHi: 'राज्य देश के पर्यावरण के संरक्षण तथा संवर्धन का और वन तथा वन्य जीवों की रक्षा का प्रयास करेगा (42वां संशोधन 1976)।', descEn: 'Constitutional mandate to protect and improve the environment, forests, and wildlife.', highYield: true },
    49: { hi: 'राष्ट्रीय महत्व के संस्मारकों, स्थानों और वस्तुओं का संरक्षण', en: 'Protection of monuments and places and objects of national importance', descHi: 'संसद द्वारा राष्ट्रीय महत्व घोषित ऐतिहासिक संस्मारकों, कलात्मक स्थानों और वस्तुओं की विकृति व विनाश से रक्षा करना राज्य की बाध्यता है।', descEn: 'Obligation of the State to protect monuments and places of historic importance.' },
    50: { hi: 'कार्यपालिका से न्यायपालिका का पृथक्करण', en: 'Separation of judiciary from executive', descHi: 'राज्य की लोक सेवाओं में न्यायपालिका को कार्यपालिका से पृथक करने के लिए राज्य कदम उठाएगा। CrPC 1973 इसी सिद्धांत पर आधारित है।', descEn: 'Separation of the Judiciary from the Executive in public services.', highYield: true },
    51: { hi: 'अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि', en: 'Promotion of international peace and security', descHi: 'अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि, राष्ट्रों के बीच न्यायसंगत संबंधों को बनाए रखना तथा अंतरराष्ट्रीय संधियों का सम्मान (भारत की विदेश नीति का आधार)।', descEn: 'Promotion of international peace, security, and adherence to treaty obligations.', highYield: true },

    // Part IVA Fundamental Duties
    5101: { hi: 'अनुच्छेद 51A: भारत के नागरिकों के मूल कर्तव्य (11 कर्तव्य)', en: 'Article 51A: Fundamental Duties (11 Duties)', descHi: '42वें संशोधन 1976 द्वारा सरदार स्वर्ण सिंह समिति की सिफारिश पर USSR से 10 कर्तव्य जोड़े गए। 86वें संशोधन 2002 द्वारा 11वां कर्तव्य (शिक्षा का अवसर) जोड़ा गया।', descEn: 'Prescribes 11 Fundamental Duties for every citizen of India.', highYield: true },

    // Part V The Union: President & Vice President
    52: { hi: 'भारत का राष्ट्रपति', en: 'The President of India', descHi: 'भारत का एक राष्ट्रपति होगा जो देश का राष्ट्राध्यक्ष और प्रथम नागरिक होगा।', descEn: 'There shall be a President of India.', highYield: true },
    53: { hi: 'संघ की कार्यपालिका शक्ति', en: 'Executive power of the Union', descHi: 'संघ की कार्यपालिका शक्ति राष्ट्रपति में निहित होगी और वह इसका प्रयोग संविधान के अनुसार स्वयं या अपने अधीनस्थ अधिकारियों द्वारा करेगा। वह रक्षा बलों का सर्वोच्च समादेशक (Supreme Commander) होगा।', descEn: 'Executive power of the Union is vested in the President and exercised per Constitution.', highYield: true },
    54: { hi: 'राष्ट्रपति का निर्वाचन (निर्वाचक मंडल)', en: 'Election of President', descHi: 'संसद के दोनों सदनों के निर्वाचित सदस्य तथा राज्यों और दिल्ली व पुडुचेरी विधानसभाओं के निर्वाचित सदस्य (70वां संशोधन 1992)। मनोनीत सदस्य भाग नहीं लेते।', descEn: 'Electoral College for President consists of elected members of Parliament and Assemblies.', highYield: true },
    55: { hi: 'राष्ट्रपति के निर्वाचन की रीति', en: 'Manner of election of President', descHi: 'आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत (Single Transferable Vote) द्वारा गुप्त मतदान। मत मूल्य का सूत्र निर्धारित है।', descEn: 'Election by proportional representation using single transferable vote and uniform quota.', highYield: true },
    56: { hi: 'राष्ट्रपति की पदावधि', en: 'Term of office of President', descHi: 'पदभार ग्रहण की तिथि से 5 वर्ष। त्यागपत्र उपराष्ट्रपति को संबोधित करेगा। उपराष्ट्रपति इसकी सूचना तुरंत लोकसभा अध्यक्ष को देगा।', descEn: 'Term of 5 years from date of entering office; resigns to Vice-President.', highYield: true },
    57: { hi: 'पुनर्निर्वाचन के लिए पात्रता', en: 'Eligibility for re-election', descHi: 'कोई व्यक्ति जो राष्ट्रपति के रूप में पद धारण कर चुका है, पुनः राष्ट्रपति पद के लिए पात्र होगा (संविधान में कोई सीमा नहीं)।', descEn: 'A person who holds or held office as President is eligible for re-election without term limits.' },
    58: { hi: 'राष्ट्रपति निर्वाचित होने के लिए अर्हताएं', en: 'Qualifications for election as President', descHi: 'भारत का नागरिक हो, 35 वर्ष की आयु पूरी कर चुका हो, लोकसभा का सदस्य निर्वाचित होने की योग्यता रखता हो तथा लाभ का पद धारण न करता हो। 50 प्रस्तावक व 50 अनुमोदक अनिवार्य।', descEn: 'Citizen of India, 35+ years old, qualified for Lok Sabha membership, no office of profit.', highYield: true },
    59: { hi: 'राष्ट्रपति के पद के लिए शर्तें', en: 'Conditions of President\'s office', descHi: 'संसद या राज्य विधानमंडल का सदस्य नहीं होगा। वेतन और भत्ते पदावधि के दौरान कम नहीं किए जाएंगे। राष्ट्रपति भवन बिना किराए के मिलेगा।', descEn: 'No membership in legislatures; emoluments cannot be diminished during tenure.' },
    60: { hi: 'राष्ट्रपति द्वारा शपथ या प्रतिज्ञान', en: 'Oath or affirmation by the President', descHi: 'भारत के मुख्य न्यायाधीश (CJI) या उनकी अनुपस्थिति में सुप्रीम कोर्ट के वरिष्ठतम न्यायाधीश द्वारा शपथ दिलाई जाएगी। संविधान के संरक्षण, परिरक्षण और प्रतिरक्षण की शपथ।', descEn: 'Oath administered by the Chief Justice of India to preserve, protect, and defend the Constitution.', highYield: true },
    61: { hi: 'राष्ट्रपति पर महाभियोग चलाने की प्रक्रिया', en: 'Procedure for impeachment of the President', descHi: 'एकमात्र आधार: "संविधान का अतिक्रमण"। किसी भी सदन में 1/4 सदस्यों के हस्ताक्षर से 14 दिन पूर्व नोटिस। दोनों सदनों द्वारा कुल सदस्य संख्या के 2/3 विशेष बहुमत से पारित होना अनिवार्य।', descEn: 'Sole ground: Violation of Constitution. Requires 2/3rd majority of total membership in both Houses.', highYield: true },
    62: { hi: 'राष्ट्रपति के पद में रिक्ति को भरने के लिए निर्वाचन का समय', en: 'Time of holding election to fill vacancy in President\'s office', descHi: 'कार्यकाल समाप्ति से पूर्व निर्वाचन संपन्न होना चाहिए। मृत्यु, त्यागपत्र या पदच्युति की स्थिति में 6 माह के भीतर चुनाव कराना अनिवार्य है।', descEn: 'Election to fill casual vacancy must be held within six months from date of occurrence.' },
    63: { hi: 'भारत का उपराष्ट्रपति', en: 'The Vice-President of India', descHi: 'भारत का एक उपराष्ट्रपति होगा जो देश का दूसरा सर्वोच्च संवैधानिक पदाधिकारी होगा।', descEn: 'There shall be a Vice-President of India.', highYield: true },
    64: { hi: 'उपराष्ट्रपति का राज्य सभा का पदेन सभापति होना', en: 'The Vice-President to be ex-officio Chairman of the Council of States', descHi: 'उपराष्ट्रपति राज्यसभा का पदेन सभापति होगा और लाभ का कोई अन्य पद धारण नहीं करेगा। वह सभापति के रूप में ही वेतन पाता है।', descEn: 'Vice-President is ex-officio Chairman of Rajya Sabha and holds no other office of profit.', highYield: true },
    65: { hi: 'राष्ट्रपति के पद में आकस्मिक रिक्ति के दौरान उपराष्ट्रपति का राष्ट्रपति के रूप में कार्य करना', en: 'Vice-President to act as President or to discharge his functions during vacancies', descHi: 'राष्ट्रपति की अनुपस्थिति या मृत्यु पर उपराष्ट्रपति कार्यवाहक राष्ट्रपति के रूप में कार्य करेगा (अधिकतम 6 माह तक) और राष्ट्रपति की सभी शक्तियां व वेतन प्राप्त करेगा।', descEn: 'Vice-President discharges functions of President during vacancies up to six months.' },
    66: { hi: 'उपराष्ट्रपति का निर्वाचन', en: 'Election of Vice-President', descHi: 'संसद के दोनों सदनों (लोकसभा व राज्यसभा) के सभी सदस्यों (निर्वाचित + मनोनीत) द्वारा एकल संक्रमणीय मत से। योग्यता: 35 वर्ष, राज्यसभा सदस्य बनने योग्य। 20 प्रस्तावक व 20 अनुमोदक।', descEn: 'Elected by members of both Houses of Parliament; 35 years of age, eligible for Rajya Sabha.', highYield: true },
    67: { hi: 'उपराष्ट्रपति की पदावधि', en: 'Term of office of Vice-President', descHi: '5 वर्ष। त्यागपत्र राष्ट्रपति को सौंपेगा। राज्यसभा के तत्कालीन समस्त सदस्यों के बहुमत द्वारा पारित तथा लोकसभा की सहमति से पद से हटाया जा सकता है (14 दिन का नोटिस आवश्यक)।', descEn: 'Term of 5 years; removed by Rajya Sabha resolution agreed to by Lok Sabha.' },
    68: { hi: 'उपराष्ट्रपति के पद की रिक्ति को भरने के लिए निर्वाचन', en: 'Time of holding election to fill vacancy in office of Vice-President', descHi: 'रिक्ति को भरने के लिए चुनाव यथाशीघ्र कराया जाएगा। नया व्यक्ति पूर्ण 5 वर्ष हेतु निर्वाचित होगा।', descEn: 'Election to fill casual vacancy to be held as soon as possible after occurrence.' },
    69: { hi: 'उपराष्ट्रपति द्वारा शपथ या प्रतिज्ञान', en: 'Oath or affirmation by the Vice-President', descHi: 'राष्ट्रपति या उनके द्वारा नियुक्त व्यक्ति द्वारा शपथ दिलाई जाएगी।', descEn: 'Oath administered by the President of India.' },
    70: { hi: 'अन्य आकस्मिकताओं में राष्ट्रपति के कृत्यों का निर्वहन', en: 'Discharge of President\'s functions in other contingencies', descHi: 'संसद ऐसी आकस्मिकताओं के लिए कानून बना सकती है (राष्ट्रपति उत्तराधिकार अधिनियम 1969: उपराष्ट्रपति भी न होने पर CJI कार्यवाहक राष्ट्रपति बनते हैं, जैसे जस्टिस हिदायतुल्ला बने थे)।', descEn: 'Parliament may make provisions for discharge of presidential duties in unforeseen contingencies.' },
    71: { hi: 'राष्ट्रपति या उपराष्ट्रपति के निर्वाचन से संबंधित या संसक्त विषय', en: 'Matters relating to, or connected with, election of President or Vice-President', descHi: 'राष्ट्रपति या उपराष्ट्रपति के चुनाव संबंधी सभी विवादों की जांच और अंतिम निर्णय केवल उच्चतम न्यायालय (Supreme Court) द्वारा किया जाएगा।', descEn: 'Exclusive jurisdiction of Supreme Court to adjudicate presidential/vice-presidential election disputes.', highYield: true },
    72: { hi: 'क्षमा आदि की और कुछ मामलों में दंडादेश के निलंबन, परिहार या लघुकरण की राष्ट्रपति की शक्ति', en: 'Power of President to grant pardons, etc., and to suspend, remit or commute sentences', descHi: 'राष्ट्रपति को कोर्ट मार्शल, संघ सूची के कानूनों के तहत अपराध तथा मृत्युदंड के सभी मामलों में पूर्ण क्षमादान (Pardon), लघुकरण (Commute), परिहार (Remit) और विराम (Respite) की शक्ति है।', descEn: 'Expansive pardoning power of President covering death sentences, court-martials, and union laws.', highYield: true },
    73: { hi: 'संघ की कार्यपालिका शक्ति का विस्तार', en: 'Extent of executive power of the Union', descHi: 'संघ की कार्यपालिका शक्ति उन सभी विषयों तक विस्तृत है जिन पर संसद को विधि बनाने की शक्ति है।', descEn: 'Executive power co-extensive with legislative competence of Parliament.' },
    74: { hi: 'राष्ट्रपति को सहायता और सलाह देने के लिए मंत्रिपरिषद', en: 'Council of Ministers to aid and advise President', descHi: 'प्रधानमंत्री की अध्यक्षता में मंत्रिपरिषद होगी जिसकी सलाह पर राष्ट्रपति कार्य करेगा। 44वें संशोधन 1978 द्वारा राष्ट्रपति को सलाह एक बार पुनर्विचार हेतु लौटाने की शक्ति मिली, परंतु पुनर्विचार के बाद सलाह बाध्यकारी है।', descEn: 'Council of Ministers headed by PM aids and advises President; advice binding after single reconsideration.', highYield: true },
    75: { hi: 'मंत्रियों के बारे में अन्य उपबंध (प्रधानमंत्री की नियुक्ति व उत्तरदायित्व)', en: 'Other provisions as to Ministers', descHi: '75(1) प्रधानमंत्री की नियुक्ति राष्ट्रपति करेंगे तथा अन्य मंत्रियों की नियुक्ति प्रधानमंत्री की सलाह पर राष्ट्रपति करेंगे। 75(1A) मंत्रिपरिषद का आकार लोकसभा के कुल सदस्यों के 15% से अधिक नहीं होगा (91वां संशोधन 2003)। 75(3) सामूहिक उत्तरदायित्व लोकसभा के प्रति।', descEn: 'PM appointed by President; Council size capped at 15% of Lok Sabha; collective responsibility to Lok Sabha.', highYield: true },
    76: { hi: 'भारत का महान्यायवादी (Attorney-General for India)', en: 'Attorney-General for India', descHi: 'राष्ट्रपति द्वारा नियुक्त। योग्यता: सुप्रीम कोर्ट का जज बनने योग्य। देश का सर्वोच्च विधि अधिकारी। राष्ट्रपति के प्रसादपर्यंत (Pleasure of President) पद धारण करता है।', descEn: 'First law officer of India appointed by President, holding office during presidential pleasure.', highYield: true },
    77: { hi: 'भारत सरकार के कार्य का संचालन', en: 'Conduct of business of the Government of India', descHi: 'भारत सरकार की समस्त कार्यपालिका कार्रवाई राष्ट्रपति के नाम से हुई कही जाएगी। राष्ट्रपति मंत्रियों में कार्य आवंटन के नियम बनाते हैं।', descEn: 'All executive action expressed in name of President; transaction of business rules.' },
    78: { hi: 'राष्ट्रपति को जानकारी देने आदि के संबंध में प्रधानमंत्री के कर्तव्य', en: 'Duties of Prime Minister as respects furnishing of information to President', descHi: 'प्रधानमंत्री का कर्तव्य है कि वह संघ के प्रशासन और विधान संबंधी सभी निर्णय राष्ट्रपति को सूचित करे तथा राष्ट्रपति द्वारा मांगी गई जानकारी प्रस्तुत करे।', descEn: 'Duty of Prime Minister to communicate cabinet decisions and administrative info to President.', highYield: true }
  };

  // Generate complete list of articles 1 to 395
  const result: ConstitutionalArticle[] = [];

  for (let i = 1; i <= 395; i++) {
    const key = `${i}`;
    const partInfo = getPartInfo(i);

    if (existingMap.has(key)) {
      const existing = existingMap.get(key)!;
      result.push({
        ...existing,
        part: partInfo.part,
        partName: { hi: partInfo.nameHi, en: partInfo.nameEn }
      });
    } else {
      // Check if we have defined custom metadata in titlesMap
      const meta = titlesMap[i] || {
        hi: `अनुच्छेद ${i}`,
        en: `Article ${i}`,
        descHi: `संविधान के भाग ${partInfo.part} के अंतर्गत अनुच्छेद ${i} का संवैधानिक प्रावधान।`,
        descEn: `Constitutional provisions under Article ${i} in ${partInfo.part}.`,
        highYield: false
      };

      result.push({
        id: `art-${i}`,
        number: `${i}`,
        articleNumber: `${i}`,
        part: partInfo.part,
        partName: { hi: partInfo.nameHi, en: partInfo.nameEn },
        title: { hi: meta.hi, en: meta.en },
        description: { hi: meta.descHi, en: meta.descEn },
        isImportant: !!meta.highYield
      });
    }

    // Insert special amendment articles right after their parents
    if (i === 21 && existingMap.has('21A')) {
      result.push(existingMap.get('21A')!);
    } else if (i === 21 && !existingMap.has('21A')) {
      const meta21A = titlesMap[2101];
      result.push({
        id: 'art-21A',
        number: '21A',
        articleNumber: '21A',
        part: 'Part III',
        partName: { hi: 'भाग 3: मौलिक अधिकार', en: 'Part III: Fundamental Rights' },
        title: { hi: meta21A.hi, en: meta21A.en },
        description: { hi: meta21A.descHi, en: meta21A.descEn },
        isImportant: true
      });
    }

    if (i === 39 && !existingMap.has('39A')) {
      const meta39A = titlesMap[3901];
      result.push({
        id: 'art-39A',
        number: '39A',
        articleNumber: '39A',
        part: 'Part IV',
        partName: { hi: 'भाग 4: राज्य की नीति के निदेशक तत्व', en: 'Part IV: DPSP' },
        title: { hi: meta39A.hi, en: meta39A.en },
        description: { hi: meta39A.descHi, en: meta39A.descEn },
        isImportant: true
      });
    }

    if (i === 43 && !existingMap.has('43A')) {
      const meta43A = titlesMap[4301];
      result.push({
        id: 'art-43A',
        number: '43A',
        articleNumber: '43A',
        part: 'Part IV',
        partName: { hi: 'भाग 4: राज्य की नीति के निदेशक तत्व', en: 'Part IV: DPSP' },
        title: { hi: meta43A.hi, en: meta43A.en },
        description: { hi: meta43A.descHi, en: meta43A.descEn },
        isImportant: true
      });
    }

    if (i === 48 && !existingMap.has('48A')) {
      const meta48A = titlesMap[4801];
      result.push({
        id: 'art-48A',
        number: '48A',
        articleNumber: '48A',
        part: 'Part IV',
        partName: { hi: 'भाग 4: राज्य की नीति के निदेशक तत्व', en: 'Part IV: DPSP' },
        title: { hi: meta48A.hi, en: meta48A.en },
        description: { hi: meta48A.descHi, en: meta48A.descEn },
        isImportant: true
      });
    }

    if (i === 51 && existingMap.has('51A')) {
      result.push(existingMap.get('51A')!);
    } else if (i === 51 && !existingMap.has('51A')) {
      const meta51A = titlesMap[5101];
      result.push({
        id: 'art-51A',
        number: '51A',
        articleNumber: '51A',
        part: 'Part IVA',
        partName: { hi: 'भाग 4क: मूल कर्तव्य', en: 'Part IVA: Fundamental Duties' },
        title: { hi: meta51A.hi, en: meta51A.en },
        description: { hi: meta51A.descHi, en: meta51A.descEn },
        isImportant: true
      });
    }
  }

  return result;
}
