import { JudicialVerdict } from '../types';

export const JUDICIAL_CASES_DATA: JudicialVerdict[] = [
  {
    "id": "case-1",
    "caseName": "ए.के. गोपालन बनाम मद्रास राज्य (A.K. Gopalan v. State of Madras)",
    "year": 1950,
    "court": "उच्चतम न्यायालय (Supreme Court of India - 6 जजों की पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश हीरालाल जे. कानिया (CJI H.J. Kania)",
    "subject": {
      "hi": "अनुच्छेद 21 का संकुचित अर्थ एवं \"विधि द्वारा स्थापित प्रक्रिया\" (Procedure Established by Law)",
      "en": "Narrow interpretation of Article 21 and \"Procedure Established by Law\""
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने अनुच्छेद 21 की संकीर्ण व्याख्या करते हुए कहा कि \"विधि द्वारा स्थापित प्रक्रिया\" का तात्पर्य विधायिका द्वारा पारित किसी भी वैध कानून से है। यदि विधायिका ने कानून बनाकर किसी व्यक्ति को व्यक्तिगत स्वतंत्रता से वंचित किया है, तो न्यायालय उसकी निष्पक्षता या प्राकृतिक न्याय की जांच नहीं कर सकता।",
      "en": "SC took a literal view: \"Procedure established by law\" meant procedure enacted by a competent legislature, regardless of whether it is just, fair or reasonable."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "अनुच्छेद 22"
    ]
  },
  {
    "id": "case-2",
    "caseName": "शंकरी प्रसाद बनाम भारत संघ (Shankari Prasad v. Union of India)",
    "year": 1951,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश पतंजलि शास्त्री",
    "subject": {
      "hi": "प्रथम संविधान संशोधन (1951) की वैधता एवं अनुच्छेद 368 की संविधानायी शक्ति",
      "en": "First Constitutional Amendment (1951) validity & Constituent power under Art 368"
    },
    "rulingSummary": {
      "hi": "न्यायालय ने माना कि अनुच्छेद 368 के अंतर्गत संसद की संविधान संशोधन शक्ति संविधानायी (Constituent) शक्ति है, जो अनुच्छेद 13(2) में उल्लिखित सामान्य ‘विधि’ की परिभाषा में नहीं आती। अतः संसद मौलिक अधिकारों में भी संशोधन कर सकती है।",
      "en": "SC held that amending power under Article 368 is constituent power, separate from ordinary legislative power under Article 13(2); Parliament can amend Fundamental Rights."
    },
    "constitutionalArticles": [
      "अनुच्छेद 13(2)",
      "अनुच्छेद 31A",
      "अनुच्छेद 31B",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-3",
    "caseName": "बेरुबारी यूनियन वाद (In Re Berubari Union Case)",
    "year": 1960,
    "court": "उच्चतम न्यायालय (संवैधानिक परामर्श पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश बी.पी. सिन्हा (राष्ट्रपति का अनुच्छेद 143 परामर्श)",
    "subject": {
      "hi": "भारतीय क्षेत्र का विदेशी राज्य को हस्तांतरण एवं प्रस्तावना की स्थिति",
      "en": "Cession of Indian territory to foreign state & Status of Preamble"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने स्पष्ट किया कि अनुच्छेद 3 संसद को केवल आंतरिक सीमाओं के पुनर्गठन की शक्ति देता है, विदेशी राज्य को क्षेत्र सौंपने की नहीं। विदेशी राज्य (पाकिस्तान) को बेरुबारी सौंपने हेतु अनुच्छेद 368 के तहत संविधान संशोधन आवश्यक है (9वां संशोधन 1960)। साथ ही, कोर्ट ने माना कि प्रस्तावना संविधान का भाग नहीं है।",
      "en": "Ceding national territory requires amendment under Art 368. SC also observed that Preamble is not an integral part of the Constitution (later reversed in Kesavananda)."
    },
    "constitutionalArticles": [
      "प्रस्तावना",
      "अनुच्छेद 1",
      "अनुच्छेद 3",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-4",
    "caseName": "सज्जन सिंह बनाम राजस्थान राज्य (Sajjan Singh v. State of Rajasthan)",
    "year": 1965,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश पी.बी. गजेंद्रगडकर",
    "subject": {
      "hi": "17वें संविधान संशोधन (1964) की वैधता एवं संसद की संशोधन शक्ति",
      "en": "Validity of 17th Constitutional Amendment (1964) & Amending Power"
    },
    "rulingSummary": {
      "hi": "शंकरी प्रसाद के फैसले की पुष्टि की गई कि संसद मौलिक अधिकारों में संशोधन कर सकती है। हालांकि जस्टिस हिदायतुल्ला और जस्टिस मुधोलकर ने असहमति जताते हुए पहली बार विचार रखा कि क्या संविधान की कुछ बुनियादी विशेषताएं संशोधन से परे हो सकती हैं।",
      "en": "Upheld Shankari Prasad judgment. Dissenting opinions by Justice Hidayatullah and Justice Mudholkar seeded the future Basic Structure Doctrine."
    },
    "constitutionalArticles": [
      "अनुच्छेद 13",
      "अनुच्छेद 31B",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-5",
    "caseName": "गोलकनाथ बनाम पंजाब राज्य (Golaknath v. State of Punjab)",
    "year": 1967,
    "court": "उच्चतम न्यायालय (11 जजों की पीठ - 6:5 बहुमत)",
    "benchOrJudge": "मुख्य न्यायाधीश के. सुब्बा राव (CJI K. Subba Rao)",
    "subject": {
      "hi": "मौलिक अधिकारों की अनुलंघनीयता एवं भविष्यलक्षी अधिनिर्णय का सिद्धांत (Prospective Overruling)",
      "en": "Inviolability of Fundamental Rights & Doctrine of Prospective Overruling"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने 6:5 के बहुमत से पूर्व निर्णयों को पलटते हुए कहा कि मौलिक अधिकार अलौकिक एवं अपरिवर्तनीय हैं। अनुच्छेद 368 केवल संशोधन की प्रक्रिया देता है, असीमित शक्ति नहीं। संविधान संशोधन भी अनुच्छेद 13(2) के तहत ‘विधि’ है, इसलिए संसद मौलिक अधिकारों को छीन या कम नहीं कर सकती।",
      "en": "11-judge bench ruled that Parliament cannot abridge or take away any Fundamental Right; Article 368 merely provides procedure and amendments are \"law\" under Art 13(2)."
    },
    "constitutionalArticles": [
      "अनुच्छेद 13(2)",
      "भाग 3",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-6",
    "caseName": "आर.सी. कूपर बनाम भारत संघ / बैंक राष्ट्रीयकरण वाद (R.C. Cooper v. UOI)",
    "year": 1970,
    "court": "उच्चतम न्यायालय (11 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश जे.सी. शाह",
    "subject": {
      "hi": "14 प्रमुख बैंकों का राष्ट्रीयकरण, संपत्ति का अधिकार एवं अध्यादेश जारी करने की शक्ति",
      "en": "Bank Nationalization, Right to Property and Ordinance-making power"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने 14 बैंकों के राष्ट्रीयकरण संबंधी अध्यादेश और अधिनियम को यह कहते हुए अमान्य किया कि मुआवजा क्षतिपूर्ति के वास्तविक सिद्धांतों पर आधारित नहीं था तथा अनुच्छेद 14 और 19(1)(f) का उल्लंघन हुआ। कोर्ट ने माना कि मौलिक अधिकार एक-दूसरे से स्वतंत्र द्वीप नहीं हैं बल्कि आपस में जुड़े हैं।",
      "en": "SC struck down the Bank Nationalization Act for illusory compensation, establishing the interrelationship and mutual dependence among Articles 14, 19, and 21."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 19(1)(f)",
      "अनुच्छेद 31",
      "अनुच्छेद 123"
    ]
  },
  {
    "id": "case-7",
    "caseName": "माधवराव सिंधिया बनाम भारत संघ / प्रिवी पर्स वाद (Madhav Rao Scindia v. UOI)",
    "year": 1970,
    "court": "उच्चतम न्यायालय (11 जजों की पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश जे.सी. शाह",
    "subject": {
      "hi": "पूर्व देशी रियासतों के राजाओं के प्रिवी पर्स एवं विशेषाधिकारों की समाप्ति",
      "en": "Abolition of Privy Purses & Privileges of former Rulers"
    },
    "rulingSummary": {
      "hi": "राष्ट्रपति द्वारा एक कार्यकारी आदेश के माध्यम से राजाओं की मान्यता और प्रिवी पर्स समाप्त करने को असंवैधानिक घोषित किया गया। कोर्ट ने कहा कि इसे केवल कार्यपालिका आदेश से नहीं छीना जा सकता (जिसके बाद संसद ने 26वां संविधान संशोधन 1971 पारित किया)।",
      "en": "SC declared Presidential order de-recognizing princes and terminating Privy Purses unconstitutional, holding that constitutional rights cannot be annulled by executive fiat."
    },
    "constitutionalArticles": [
      "अनुच्छेद 291",
      "अनुच्छेद 362",
      "अनुच्छेद 366(22)"
    ]
  },
  {
    "id": "case-8",
    "caseName": "केशवानंद भारती बनाम केरल राज्य (Kesavananda Bharati v. State of Kerala)",
    "year": 1973,
    "court": "उच्चतम न्यायालय (13 जजों की सर्वोच्च ऐतिहासिक पीठ - 7:6 बहुमत)",
    "benchOrJudge": "मुख्य न्यायाधीश एस.एम. सीकरी (24 अप्रैल 1973)",
    "subject": {
      "hi": "संविधान के मूल ढांचे का सिद्धांत (Basic Structure Doctrine)",
      "en": "Basic Structure Doctrine and Integral Status of Preamble"
    },
    "rulingSummary": {
      "hi": "सर्वोच्च न्यायालय के 730 पृष्ठों के ऐतिहासिक फैसले में निर्धारित हुआ: (1) गोलकनाथ वाद को पलटते हुए संसद को मौलिक अधिकारों सहित किसी भी भाग में संशोधन की शक्ति दी गई; (2) परंतु संसद संविधान के \"आधारभूत ढांचे\" (Basic Structure) को संशोधित, नष्ट या समाप्त नहीं कर सकती; (3) प्रस्तावना संविधान का अभिन्न अंग है और इसमें संशोधन हो सकता है।",
      "en": "Landmark 7:6 verdict: Parliament has power to amend any part of the Constitution including Part III, but cannot alter or destroy the \"Basic Structure\". Preamble is an integral part of the Constitution."
    },
    "constitutionalArticles": [
      "प्रस्तावना",
      "अनुच्छेद 13",
      "अनुच्छेद 31C",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-9",
    "caseName": "श्रीमती इंदिरा नेहरू गांधी बनाम राज नारायण (Indira Gandhi v. Raj Narain)",
    "year": 1975,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश ए.एन. रे",
    "subject": {
      "hi": "39वां संविधान संशोधन (1975), स्वतंत्र व निष्पक्ष चुनाव और न्यायिक समीक्षा",
      "en": "39th Constitutional Amendment, Free & Fair Elections, Judicial Review"
    },
    "rulingSummary": {
      "hi": "39वें संशोधन के अनुच्छेद 329A(4) को असंवैधानिक घोषित किया गया, जिसने प्रधानमंत्री और लोकसभा अध्यक्ष के चुनाव को न्यायिक समीक्षा से बाहर रखा था। कोर्ट ने घोषित किया कि ‘स्वतंत्र व निष्पक्ष चुनाव’ और ‘न्यायिक समीक्षा’ संविधान के मूल ढांचे का अभिन्न हिस्सा हैं।",
      "en": "SC applied Basic Structure doctrine to strike down Art 329A(4) inserted by 39th Amendment, ruling that Rule of Law, Judicial Review, and Free & Fair Elections form the Basic Structure."
    },
    "constitutionalArticles": [
      "अनुच्छेद 324",
      "अनुच्छेद 329A",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-10",
    "caseName": "ए.डी.एम. जबलपुर बनाम शिवकांत शुक्ला / बंदी प्रत्यक्षीकरण वाद (ADM Jabalpur v. Shivkant Shukla)",
    "year": 1976,
    "court": "उच्चतम न्यायालय (5 जजों की पीठ - 4:1 बहुमत)",
    "benchOrJudge": "जस्टिस एच.आर. खन्ना का ऐतिहासिक असहमति नोट (Dissent)",
    "subject": {
      "hi": "आपातकाल के दौरान अनुच्छेद 21 का निलंबन एवं बंदी प्रत्यक्षीकरण याचिका",
      "en": "Suspension of Article 21 during Emergency and Habeas Corpus"
    },
    "rulingSummary": {
      "hi": "4 जजों ने माना कि राष्ट्रीय आपातकाल (अनुच्छेद 359) में जीवन और व्यक्तिगत स्वतंत्रता (अनुच्छेद 21) के प्रवर्तन का अधिकार निलंबित रहता है। एकमात्र असहमत न्यायाधीश जस्टिस एच.आर. खन्ना ने कहा कि जीवन का अधिकार संविधान पूर्व और शाश्वत है। इस निर्णय को 44वें संशोधन 1978 द्वारा समाप्त कर दिया गया (अनुच्छेद 20 और 21 कभी निलंबित नहीं हो सकते) और पुट्टास्वामी वाद 2017 में इसे औपचारिक रूप से निरस्त किया गया।",
      "en": "Majority held right to approach court for Art 21 suspended during Emergency. Justice H.R. Khanna famously dissented. Later rectified by 44th Amendment 1978 and formally overruled in Puttaswamy 2017."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 226",
      "अनुच्छेद 359"
    ]
  },
  {
    "id": "case-11",
    "caseName": "मेनका गांधी बनाम भारत संघ (Maneka Gandhi v. Union of India)",
    "year": 1978,
    "court": "उच्चतम न्यायालय (7 जजों की संविधान पीठ)",
    "benchOrJudge": "जस्टिस पी.एन. भगवती (Justice P.N. Bhagwati)",
    "subject": {
      "hi": "अनुच्छेद 21 का स्वर्णिम त्रिभुज (Golden Triangle), विदेश यात्रा का अधिकार व निष्पक्ष प्रक्रिया",
      "en": "Golden Triangle (Arts 14, 19, 21), Right to Travel Abroad & Just, Fair and Reasonable Procedure"
    },
    "rulingSummary": {
      "hi": "गोपालन वाद की संकीर्ण व्याख्या को समाप्त करते हुए सुप्रीम कोर्ट ने कहा कि अनुच्छेद 21 में \"विधि द्वारा स्थापित प्रक्रिया\" मनमानी नहीं हो सकती; इसे न्यायसंगत, निष्पक्ष और उचित (Just, Fair and Reasonable) होना चाहिए। अनुच्छेद 14, 19 और 21 एक \"स्वर्णिम त्रिभुज\" का निर्माण करते हैं। विदेश यात्रा का अधिकार व्यक्तिगत स्वतंत्रता का हिस्सा है।",
      "en": "Overruled Gopalan: Procedure depriving liberty must not be arbitrary, but just, fair, and reasonable (Due Process). Formulated the Golden Triangle of Articles 14, 19, and 21."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 21"
    ]
  },
  {
    "id": "case-12",
    "caseName": "हुसैनआरा खातून बनाम गृह सचिव, बिहार राज्य (Hussainara Khatoon v. Home Secretary, Bihar)",
    "year": 1979,
    "court": "उच्चतम न्यायालय",
    "benchOrJudge": "जस्टिस पी.एन. भगवती",
    "subject": {
      "hi": "शीघ्र विचारण का अधिकार (Right to Speedy Trial) एवं विचाराधीन कैदियों की मुक्ति",
      "en": "Right to Speedy Trial and Liberation of Under-trial Prisoners (First PIL)"
    },
    "rulingSummary": {
      "hi": "भारत में पहली जनहित याचिका (PIL) के रूप में विख्यात। कोर्ट ने माना कि वर्षों से जेलों में बंद विचाराधीन कैदियों के लिए \"शीघ्र विचारण का अधिकार\" अनुच्छेद 21 के तहत एक मौलिक अधिकार है। 40,000 से अधिक विचाराधीन कैदियों की तत्काल रिहाई का आदेश दिया गया।",
      "en": "First major Public Interest Litigation (PIL) in India. Held that Right to Speedy Trial is a fundamental right implicit in Article 21; free legal aid is a constitutional duty."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 39A"
    ]
  },
  {
    "id": "case-13",
    "caseName": "मिनर्वा मिल्स बनाम भारत संघ (Minerva Mills v. Union of India)",
    "year": 1980,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.वी. चंद्रचूड़",
    "subject": {
      "hi": "42वां संविधान संशोधन (1976), संसद की असीमित संशोधन शक्ति का निरस्तीकरण",
      "en": "42nd Amendment, Balance between Fundamental Rights and DPSP as Basic Structure"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने 42वें संशोधन द्वारा जोड़े गए अनुच्छेद 368(4) और (5) को निरस्त कर दिया, जिसने संसद को असीमित संशोधन शक्ति दी थी। कोर्ट ने कहा कि \"सीमित संशोधन शक्ति स्वयं संविधान के मूल ढांचे का हिस्सा है।\" साथ ही कहा कि मूल अधिकार (भाग 3) और नीति निदेशक तत्व (भाग 4) के बीच संतुलन संविधान का आधारस्तंभ है।",
      "en": "Struck down clauses 4 and 5 of Art 368 inserted by 42nd Amendment. Limited amending power is itself a basic feature. Part III and Part IV are like two wheels of a chariot."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 19",
      "अनुच्छेद 31C",
      "अनुच्छेद 368(4)(5)"
    ]
  },
  {
    "id": "case-14",
    "caseName": "सुनील बत्रा बनाम दिल्ली प्रशासन (Sunil Batra v. Delhi Administration)",
    "year": 1980,
    "court": "उच्चतम न्यायालय",
    "benchOrJudge": "जस्टिस वी.आर. कृष्णा अय्यर (Justice V.R. Krishna Iyer)",
    "subject": {
      "hi": "कैदियों के मानवीय अधिकार, जेल यातना पर रोक एवं एकांत कारावास की सीमाएं",
      "en": "Prisoners’ Fundamental Rights, Protection against Torture & Solitary Confinement"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने कहा कि जेल की दीवारों के भीतर भी कैदियों के मौलिक अधिकार समाप्त नहीं होते। अमानवीय यातना, बेड़ियां और अवैध एकांत कारावास अनुच्छेद 14, 19 और 21 का उल्लंघन है। पत्र याचिका को बंदी प्रत्यक्षीकरण रिट मानकर स्वीकार किया गया।",
      "en": "SC affirmed prisoners retain fundamental rights inside prison; torture, bar fetters, and arbitrary solitary confinement violate Articles 14, 19, and 21."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 21",
      "अनुच्छेद 32"
    ]
  },
  {
    "id": "case-15",
    "caseName": "वामन राव बनाम भारत संघ (Waman Rao v. Union of India)",
    "year": 1981,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.वी. चंद्रचूड़",
    "subject": {
      "hi": "9वीं अनुसूची और मूल ढांचे के सिद्धांत की कट-ऑफ तारीख (24 अप्रैल 1973)",
      "en": "Cut-off date for 9th Schedule immunities and Basic Structure Doctrine"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने स्पष्ट व्यवस्था दी कि 24 अप्रैल 1973 (केशवानंद भारती निर्णय) से पूर्व 9वीं अनुसूची में शामिल किए गए कानून सुरक्षित रहेंगे। परंतु 24 अप्रैल 1973 के बाद 9वीं अनुसूची में डाले गए किसी भी कानून की इस आधार पर न्यायिक समीक्षा हो सकती है कि वह मूल ढांचे का उल्लंघन करता है या नहीं।",
      "en": "SC held that laws placed in the 9th Schedule after 24 April 1973 are open to judicial review if they damage or destroy the basic structure of the Constitution."
    },
    "constitutionalArticles": [
      "अनुच्छेद 31B",
      "9वीं अनुसूची",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-16",
    "caseName": "एस.पी. गुप्ता बनाम भारत संघ / प्रथम न्यायाधीश वाद (S.P. Gupta v. UOI)",
    "year": 1981,
    "court": "उच्चतम न्यायालय (7 जजों की संविधान पीठ)",
    "benchOrJudge": "जस्टिस पी.एन. भगवती",
    "subject": {
      "hi": "न्यायाधीशों की नियुक्ति, \"परामर्श\" (Consultation) का अर्थ एवं कार्यपालिका की प्रधानता",
      "en": "Judicial Appointments, Meaning of \"Consultation\" and Executive Primacy"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने निर्णय दिया कि अनुच्छेद 124(2) और 217(1) में \"परामर्श\" का अर्थ \"सहमति\" (Concurrence) नहीं है। न्यायाधीशों की नियुक्ति और स्थानांतरण में कार्यपालिका (राष्ट्रपति/सरकार) को प्रधानता प्राप्त है। इसी वाद ने जनहित याचिका (PIL) के लोकस स्टैंडाई (Locus Standi) नियमों को उदार बनाया।",
      "en": "First Judges Case: \"Consultation\" does not mean \"concurrence\"; executive had primacy in judicial appointments. Liberalized locus standi rule for PILs."
    },
    "constitutionalArticles": [
      "अनुच्छेद 124(2)",
      "अनुच्छेद 217",
      "अनुच्छेद 32"
    ]
  },
  {
    "id": "case-17",
    "caseName": "बंधुआ मुक्ति मोर्चा बनाम भारत संघ (Bandhua Mukti Morcha v. UOI)",
    "year": 1984,
    "court": "उच्चतम न्यायालय",
    "benchOrJudge": "जस्टिस पी.एन. भगवती",
    "subject": {
      "hi": "बंधुआ मजदूरी का उन्मूलन, अनुच्छेद 21 व 23 का संरक्षण एवं गरिमापूर्ण जीवन",
      "en": "Eradication of Bonded Labour, Protection under Articles 21 & 23, Life with Dignity"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने पत्थर खदानों में बंधुआ मजदूरों की मुक्ति हेतु निर्देश दिए। निर्णय दिया कि अनुच्छेद 21 केवल पशुवत अस्तित्व नहीं है बल्कि मानवीय गरिमा के साथ जीने का अधिकार है, जिसमें उचित पारिश्रमिक, स्वास्थ्य और शिक्षा शामिल हैं।",
      "en": "Enforced constitutional prohibition of bonded and forced labour under Article 23; ruled that Right to Life includes right to live with human dignity and basic necessities."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 23",
      "अनुच्छेद 32",
      "अनुच्छेद 42"
    ]
  },
  {
    "id": "case-18",
    "caseName": "मोहम्मद अहमद खान बनाम शाह बानो बेगम (Shah Bano Case)",
    "year": 1985,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.वी. चंद्रचूड़",
    "subject": {
      "hi": "मुस्लिम तलाकशुदा महिला का गुजारा भत्ता (CrPC धारा 125) एवं समान नागरिक संहिता (अनुच्छेद 44)",
      "en": "Maintenance for Divorced Muslim Woman under Sec 125 CrPC & Uniform Civil Code (Art 44)"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने माना कि दंड प्रक्रिया संहिता (CrPC) की धारा 125 एक धर्मनिरपेक्ष कानून है जो सभी धर्मों की तलाकशुदा महिलाओं पर समान रूप से लागू होता है। इद्दत अवधि के बाद भी यदि महिला अपना भरण-पोषण करने में असमर्थ है तो पूर्व पति गुजारा भत्ता देने हेतु बाध्य है। कोर्ट ने अनुच्छेद 44 (समान नागरिक संहिता) लागू करने का सुझाव दिया।",
      "en": "Section 125 CrPC applies to all citizens irrespective of religion. SC advocated the implementation of a Uniform Civil Code under Article 44."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 21",
      "अनुच्छेद 44",
      "CrPC धारा 125"
    ]
  },
  {
    "id": "case-19",
    "caseName": "ओल्गा टेलिस बनाम बॉम्बे नगर निगम / फुटपाथ निवासी वाद (Olga Tellis v. BMC)",
    "year": 1985,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.वी. चंद्रचूड़",
    "subject": {
      "hi": "आजीविका का अधिकार (Right to Livelihood) अनुच्छेद 21 का अभिन्न अंग",
      "en": "Right to Livelihood as an Inseparable Part of Right to Life under Article 21"
    },
    "rulingSummary": {
      "hi": "फुटपाथ और झुग्गी-झोपड़ी निवासियों के बेदखली मामले में कोर्ट ने व्यवस्था दी कि आजीविका का अधिकार जीवन के अधिकार (अनुच्छेद 21) का अनिवार्य घटक है, क्योंकि किसी व्यक्ति को उसकी आजीविका से वंचित करना उसे जीवन से वंचित करने के समान है। बेदखली से पूर्व पुनर्वास और सुनवाई आवश्यक है।",
      "en": "Right to life includes the right to livelihood. If the right to livelihood is not treated as part of the constitutional right to life, the easiest way of depriving a person of his life would be to deprive him of his means of livelihood."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(e)",
      "अनुच्छेद 21",
      "अनुच्छेद 39(a)"
    ]
  },
  {
    "id": "case-20",
    "caseName": "एम.सी. मेहता बनाम भारत संघ / ओलियम गैस रिसाव वाद (M.C. Mehta v. UOI)",
    "year": 1986,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश पी.एन. भगवती",
    "subject": {
      "hi": "पूर्ण दायित्व का सिद्धांत (Doctrine of Absolute Liability) एवं पर्यावरण संरक्षण",
      "en": "Doctrine of Absolute Liability & Environmental Jurisprudence"
    },
    "rulingSummary": {
      "hi": "श्रीराम फर्टिलाइजर्स से ओलियम गैस रिसाव के बाद, कोर्ट ने ब्रिटिश कालीन ‘कठोर दायित्व’ (Strict Liability) के अपवादों को खारिज करते हुए \"पूर्ण दायित्व\" (Absolute Liability) का नया सिद्धांत प्रतिपादित किया। खतरनाक उद्योगों को किसी भी क्षति के लिए बिना किसी अपवाद के पूर्ण मुआवजा देना होगा।",
      "en": "SC established the principle of Absolute Liability: hazardous enterprises have an absolute, non-delegable duty with no exceptions to compensate for harm caused."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 32",
      "अनुच्छेद 48A"
    ]
  },
  {
    "id": "case-21",
    "caseName": "इंद्रा साहनी बनाम भारत संघ / मंडल वाद (Indra Sawhney v. Union of India)",
    "year": 1992,
    "court": "उच्चतम न्यायालय (9 जजों की संविधान पीठ - 6:3 बहुमत)",
    "benchOrJudge": "मुख्य न्यायाधीश एम.एच. कानिया (CJI M.H. Kania)",
    "subject": {
      "hi": "ओबीसी को 27% आरक्षण, क्रीमी लेयर सिद्धांत एवं 50% आरक्षण की अधिकतम सीमा",
      "en": "27% OBC Reservation, Creamy Layer Exclusion & 50% Reservation Ceiling"
    },
    "rulingSummary": {
      "hi": "ऐतिहासिक निर्णय में कोर्ट ने व्यवस्था दी: (1) अनुच्छेद 16(4) के तहत अन्य पिछड़ा वर्ग (OBC) को 27% आरक्षण संवैधानिक रूप से वैध है; (2) सामाजिक व शैक्षणिक पिछड़ेपन की पहचान में जाति एक महत्वपूर्ण कारक हो सकती है; (3) सम्पन्न वर्ग को बाहर करने हेतु \"क्रीमी लेयर\" (Creamy Layer) का सिद्धांत लागू होगा; (4) कुल आरक्षण किसी भी सामान्य स्थिति में 50% से अधिक नहीं हो सकता; (5) पदोन्नति (Promotions) में आरक्षण लागू नहीं होगा।",
      "en": "Upheld 27% quota for OBCs subject to exclusion of the \"Creamy Layer\". Fixed a 50% ceiling on total reservations and barred reservations in promotions under Art 16(4)."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15(4)",
      "अनुच्छेद 16(4)",
      "अनुच्छेद 340"
    ]
  },
  {
    "id": "case-22",
    "caseName": "किहोटो होलोहन बनाम जाचिल्हू (Kihoto Hollohan v. Zachillhu)",
    "year": 1992,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "जस्टिस एम.एन. वेंकटचलैया",
    "subject": {
      "hi": "10वीं अनुसूची (दलबदल विरोधी कानून), विधानसभा अध्यक्ष का निर्णय एवं न्यायिक समीक्षा",
      "en": "Tenth Schedule (Anti-Defection Law), Speaker’s Powers & Scope of Judicial Review"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने 52वें संशोधन (10वीं अनुसूची) की वैधता को बरकरार रखा परंतु पैरा 7 को असंवैधानिक घोषित किया जो न्यायिक समीक्षा को रोकता था। कोर्ट ने माना कि दलबदल मामले में निर्णय लेते समय पीठासीन अधिकारी (अध्यक्ष/सभापति) एक ‘न्यायाधिकरण’ (Tribunal) के रूप में कार्य करता है, अतः उसके निर्णय की न्यायालय द्वारा न्यायिक समीक्षा की जा सकती है।",
      "en": "Upheld 10th Schedule but ruled that Speaker/Chairman acts as a tribunal when deciding disqualification petitions, making their final order subject to judicial review."
    },
    "constitutionalArticles": [
      "10वीं अनुसूची",
      "अनुच्छेद 102(2)",
      "अनुच्छेद 191(2)",
      "अनुच्छेद 136"
    ]
  },
  {
    "id": "case-23",
    "caseName": "सुप्रीम कोर्ट एडवोकेट्स-ऑन-रिकॉर्ड बनाम भारत संघ / द्वितीय न्यायाधीश वाद (Second Judges Case)",
    "year": 1993,
    "court": "उच्चतम न्यायालय (9 जजों की संविधान पीठ - 7:2 बहुमत)",
    "benchOrJudge": "जस्टिस जे.एस. वर्मा",
    "subject": {
      "hi": "कॉलेजियम प्रणाली (Collegium System) की स्थापना एवं सीजेआई की प्रधानता",
      "en": "Birth of Collegium System & Primacy of Chief Justice of India"
    },
    "rulingSummary": {
      "hi": "प्रथम न्यायाधीश वाद (1981) को पलटते हुए 9 जजों की पीठ ने निर्णय दिया कि अनुच्छेद 124(2) में \"परामर्श\" का वास्तविक अर्थ \"सहमति\" (Concurrence) है। न्यायपालिका की स्वतंत्रता बनाए रखने हेतु सीजेआई और दो वरिष्ठतम न्यायाधीशों के परामर्श से कॉलेजियम प्रणाली की नींव रखी गई। कार्यपालिका पर न्यायपालिका की प्रधानता स्थापित हुई।",
      "en": "Second Judges Case: \"Consultation\" means concurrence. Laid the foundation of the Collegium system giving primacy to CJI and two senior-most judges in judicial appointments."
    },
    "constitutionalArticles": [
      "अनुच्छेद 50",
      "अनुच्छेद 124(2)",
      "अनुच्छेद 217(1)"
    ]
  },
  {
    "id": "case-24",
    "caseName": "उन्नी कृष्णन बनाम आंध्र प्रदेश राज्य (Unni Krishnan v. State of A.P.)",
    "year": 1993,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "जस्टिस बी.पी. जीवन रेड्डी",
    "subject": {
      "hi": "शिक्षा का मौलिक अधिकार (Right to Education) एवं कैपिटेशन फीस पर रोक",
      "en": "Right to Education up to 14 years under Article 21"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने माना कि 14 वर्ष तक की आयु के बच्चों के लिए मुफ्त और अनिवार्य प्राथमिक शिक्षा प्राप्त करना अनुच्छेद 21 के तहत मौलिक अधिकार है। इसी निर्णय ने 86वें संविधान संशोधन 2002 और अनुच्छेद 21A को जोड़ने का मार्ग प्रशस्त किया।",
      "en": "Held that citizens have a fundamental right to free education until they complete 14 years of age, flowing directly from Article 21. Paved way for 86th Amendment & Art 21A."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 41",
      "अनुच्छेद 45",
      "अनुच्छेद 21A"
    ]
  },
  {
    "id": "case-25",
    "caseName": "एस.आर. बोम्मई बनाम भारत संघ (S.R. Bommai v. Union of India)",
    "year": 1994,
    "court": "उच्चतम न्यायालय (9 जजों की संविधान पीठ)",
    "benchOrJudge": "जस्टिस पी.बी. सावंत व जस्टिस के. रामास्वामी",
    "subject": {
      "hi": "अनुच्छेद 356 (राष्ट्रपति शासन) का दुरुपयोग रोकना, संघवाद व पंथनिरपेक्षता मूल ढांचा",
      "en": "Restricting abuse of Article 356 (President’s Rule), Federalism & Secularism as Basic Structure"
    },
    "rulingSummary": {
      "hi": "अनुच्छेद 356 के अंधाधुंध प्रयोग पर ऐतिहासिक अंकुश लगाया: (1) राष्ट्रपति शासन की उद्घोषणा सशर्त है और न्यायिक समीक्षा के अधीन है; (2) विधानसभा को तब तक भंग नहीं किया जा सकता जब तक संसद के दोनों सदन उद्घोषणा को मंजूरी न दे दें; (3) शक्ति परीक्षण (Floor Test) केवल सदन के पटल पर ही होगा, राजभवन में नहीं; (4) पंथनिरपेक्षता और संघवाद संविधान के आधारभूत ढांचे हैं।",
      "en": "Landmark curb on misuse of Art 356. Proclamation is subject to judicial review; Assembly cannot be dissolved prior to parliamentary ratification; Floor test in Assembly is mandatory."
    },
    "constitutionalArticles": [
      "अनुच्छेद 356",
      "अनुच्छेद 355",
      "अनुच्छेद 74(2)"
    ]
  },
  {
    "id": "case-26",
    "caseName": "वेल्लोर सिटिजन्स वेलफेयर फोरम बनाम भारत संघ (Vellore Citizens Forum v. UOI)",
    "year": 1996,
    "court": "उच्चतम न्यायालय",
    "benchOrJudge": "जस्टिस कुलदीप सिंह (Green Judge)",
    "subject": {
      "hi": "सतत विकास, सावधानी सिद्धांत (Precautionary Principle) व प्रदूषक भुगतान सिद्धांत (Polluter Pays)",
      "en": "Sustainable Development, Precautionary Principle & Polluter Pays Principle"
    },
    "rulingSummary": {
      "hi": "चमड़ा शोधक कारखानों से होने वाले प्रदूषण पर कोर्ट ने अंतरराष्ट्रीय पर्यावरण विधि के \"सावधानी सिद्धांत\" और \"प्रदूषक भुगतान सिद्धांत\" को भारतीय विधि और अनुच्छेद 21 का आवश्यक अंग घोषित किया।",
      "en": "SC integrated \"Precautionary Principle\" and \"Polluter Pays Principle\" into Indian environmental law under Article 21, establishing sustainable development jurisprudence."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 47",
      "अनुच्छेद 48A",
      "अनुच्छेद 51A(g)"
    ]
  },
  {
    "id": "case-27",
    "caseName": "डी.के. बासु बनाम पश्चिम बंगाल राज्य (D.K. Basu v. State of West Bengal)",
    "year": 1997,
    "court": "उच्चतम न्यायालय",
    "benchOrJudge": "जस्टिस के. आनंद व जस्टिस एस.बी. मजूमदार",
    "subject": {
      "hi": "गिरफ्तारी, हिरासत एवं पुलिस हिरासत में प्रताड़ना रोकने हेतु 11 मार्गदर्शक सिद्धांत",
      "en": "Guidelines on Arrest, Detention and Prevention of Custodial Torture"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने हिरासत में मौत और पुलिस अत्याचार को रोकने हेतु ऐतिहासिक 11 अनिवार्य दिशानिर्देश जारी किए: (1) पुलिसकर्मी वर्दी पर स्पष्ट नाम व पदनाम का बिल्ला पहनेंगे; (2) गिरफ्तारी मेमो (Arrest Memo) मौके पर तैयार होगा; (3) गिरफ्तार व्यक्ति के परिजन/मित्र को 8-12 घंटे में सूचना दी जाएगी; (4) प्रत्येक 48 घंटे में मेडिकल जांच कराई जाएगी। इन्हें बाद में CrPC की धारा 41A-41D में जोड़ा गया।",
      "en": "SC laid down 11 mandatory guidelines for arrest and detention to curb custodial violence and protect human rights under Articles 21 and 22, later incorporated into CrPC."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21",
      "अनुच्छेद 22",
      "CrPC धारा 41B, 41D, 50A"
    ]
  },
  {
    "id": "case-28",
    "caseName": "विशाखा बनाम राजस्थान राज्य (Vishaka v. State of Rajasthan)",
    "year": 1997,
    "court": "उच्चतम न्यायालय (3 जजों की पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश जे.एस. वर्मा",
    "subject": {
      "hi": "कार्यस्थल पर महिलाओं के यौन उत्पीड़न की रोकथाम एवं विशाखा दिशानिर्देश",
      "en": "Prevention of Sexual Harassment of Women at Workplace (Vishaka Guidelines)"
    },
    "rulingSummary": {
      "hi": "साथिन भंवरी देवी सामूहिक बलात्कार कांड के बाद, संसद द्वारा कानून बनाए जाने तक कोर्ट ने अनुच्छेद 14, 19 और 21 तथा अंतरराष्ट्रीय CEDAW कन्वेंशन के तहत कार्यस्थल पर यौन उत्पीड़न रोकने हेतु ऐतिहासिक \"विशाखा दिशानिर्देश\" जारी किए। प्रत्येक संस्थान में आंतरिक शिकायत समिति (ICC) का गठन अनिवार्य किया गया (जिसके आधार पर 2013 का POSH अधिनियम बना)।",
      "en": "Formulated binding Vishaka Guidelines against sexual harassment of working women until Parliament enacted legislation (POSH Act 2013), enforcing gender equality under Arts 14, 19, 21."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 19(1)(g)",
      "अनुच्छेद 21"
    ]
  },
  {
    "id": "case-29",
    "caseName": "विशेष परामर्श सं. 1 (1998) / तृतीय न्यायाधीश वाद (Third Judges Case)",
    "year": 1998,
    "court": "उच्चतम न्यायालय (9 जजों की संविधान पीठ)",
    "benchOrJudge": "अनुच्छेद 143 के तहत राष्ट्रपति संदर्भ",
    "subject": {
      "hi": "कॉलेजियम प्रणाली का विस्तार (सीजेआई + 4 वरिष्ठतम न्यायाधीश)",
      "en": "Expansion of Collegium System (CJI + 4 Senior-most Judges)"
    },
    "rulingSummary": {
      "hi": "राष्ट्रपति के संदर्भ का उत्तर देते हुए कोर्ट ने कॉलेजियम की संरचना को अंतिम रूप दिया: सुप्रीम कोर्ट के जजों की नियुक्ति में सीजेआई अपने 4 वरिष्ठतम सहयोगियों से परामर्श करेंगे। यदि 2 जज भी प्रतिकूल राय दें, तो सीजेआई सरकार को सिफारिश नहीं भेजेंगे। हाईकोर्ट के जजों हेतु सीजेआई + 2 वरिष्ठतम जज होंगे।",
      "en": "Third Judges Case: Structured the Collegium as CJI + 4 senior-most Supreme Court judges for apex court appointments, and CJI + 2 senior-most judges for High Court appointments."
    },
    "constitutionalArticles": [
      "अनुच्छेद 124(2)",
      "अनुच्छेद 143",
      "अनुच्छेद 217"
    ]
  },
  {
    "id": "case-30",
    "caseName": "एसोसिएशन फॉर डेमोक्रेटिक रिफॉर्म्स (ADR) बनाम भारत संघ (ADR Case)",
    "year": 2002,
    "court": "उच्चतम न्यायालय (3 जजों की पीठ)",
    "benchOrJudge": "जस्टिस एम.बी. शाह",
    "subject": {
      "hi": "मतदाताओं का सूचना का अधिकार, प्रत्याशियों की आपराधिक पृष्ठभूमि व संपत्ति का प्रकटीकरण",
      "en": "Voters’ Right to Information & Mandatory Disclosure of Candidates’ Assets and Criminal Records"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने व्यवस्था दी कि चुनाव लड़ रहे प्रत्येक उम्मीदवार को नामांकन पत्र के साथ अपनी संपत्ति, देनदारियों, शैक्षिक योग्यता और आपराधिक इतिहास का शपथपत्र (Affidavit) देना अनिवार्य है। मतदाताओं को यह जानने का अधिकार अनुच्छेद 19(1)(a) के तहत अभिव्यक्ति की स्वतंत्रता का भाग है।",
      "en": "Ruled that voters have a fundamental right under Article 19(1)(a) to know the criminal antecedents, assets, liabilities, and educational qualifications of contesting candidates."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 324",
      "जनप्रतिनिधित्व अधिनियम 1951"
    ]
  },
  {
    "id": "case-31",
    "caseName": "एम. नागराज बनाम भारत संघ (M. Nagaraj v. Union of India)",
    "year": 2006,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.के. सभरवाल",
    "subject": {
      "hi": "एससी/एसटी को पदोन्नति में आरक्षण (अनुच्छेद 16(4A) व 16(4B)) की वैधता",
      "en": "Validity of Reservations in Promotions for SCs and STs"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने 77वें, 81वें, 82वें और 85वें संशोधनों की वैधता बरकरार रखी परंतु राज्य सरकार पर तीन शर्तें लगाईं: (1) पिछड़ापन दर्शाने वाले मात्रात्मक आंकड़े (Quantifiable data); (2) सार्वजनिक सेवाओं में अपर्याप्त प्रतिनिधित्व; (3) अनुच्छेद 335 के तहत प्रशासनिक दक्षता पर प्रतिकूल प्रभाव न पड़ना।",
      "en": "Upheld constitutional amendments enabling reservation in promotion for SC/ST, but mandated state to show backwardness, inadequacy of representation, and overall administrative efficiency."
    },
    "constitutionalArticles": [
      "अनुच्छेद 16(4A)",
      "अनुच्छेद 16(4B)",
      "अनुच्छेद 335"
    ]
  },
  {
    "id": "case-32",
    "caseName": "आई.आर. कोएल्हो बनाम तमिलनाडु राज्य (I.R. Coelho v. State of Tamil Nadu)",
    "year": 2007,
    "court": "उच्चतम न्यायालय (9 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश वाई.के. सभरवाल",
    "subject": {
      "hi": "9वीं अनुसूची की संवैधानिक प्रतिरक्षा की सीमाएं एवं न्यायिक समीक्षा",
      "en": "Scope of 9th Schedule Immunity & Judicial Review of Post-1973 Laws"
    },
    "rulingSummary": {
      "hi": "सर्वसम्मत फैसले में 9 जजों की पीठ ने वामन राव (1981) के सिद्धांत की पुष्टि की: 24 अप्रैल 1973 के बाद 9वीं अनुसूची में शामिल कोई भी कानून न्यायिक समीक्षा से पूरी तरह सुरक्षित नहीं है। यदि वह कानून अनुच्छेद 14, 19 या 21 के मूल सिद्धांतों का उल्लंघन कर संविधान के मूल ढांचे को नष्ट करता है, तो उसे निरस्त किया जा सकता है।",
      "en": "9-judge bench ruled that all laws placed in 9th Schedule after 24 April 1973 are open to challenge if they violate the fundamental rights forming part of the basic structure."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "अनुच्छेद 31B",
      "9वीं अनुसूची"
    ]
  },
  {
    "id": "case-33",
    "caseName": "लिली थॉमस बनाम भारत संघ (Lily Thomas v. Union of India)",
    "year": 2013,
    "court": "उच्चतम न्यायालय (2 जजों की पीठ)",
    "benchOrJudge": "जस्टिस ए.के. पटनायक व जस्टिस एस.जे. मुखोपाध्याय",
    "subject": {
      "hi": "दोषसिद्ध सांसदों और विधायकों की तत्काल अयोग्यता (RPA धारा 8(4) निरस्त)",
      "en": "Immediate Disqualification of Convicted Lawmakers (Striking down Section 8(4) RPA)"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने जनप्रतिनिधित्व अधिनियम 1951 की धारा 8(4) को असंवैधानिक घोषित किया जो दोषी सांसदों/विधायकों को 3 माह की अपील अवधि तक अयोग्य होने से बचाती थी। फैसला दिया कि 2 वर्ष या अधिक की सजा होने पर सांसद/विधायक उसी क्षण अपनी सदस्यता खो देंगे।",
      "en": "Struck down Section 8(4) of Representation of People Act 1951 as unconstitutional; convicted MPs and MLAs stand immediately disqualified upon sentencing of 2+ years."
    },
    "constitutionalArticles": [
      "अनुच्छेद 102(1)(e)",
      "अनुच्छेद 191(1)(e)",
      "जनप्रतिनिधित्व अधिनियम धारा 8"
    ]
  },
  {
    "id": "case-34",
    "caseName": "पीपुल्स यूनियन फॉर सिविल लिबर्टीज (PUCL) बनाम भारत संघ (NOTA Case)",
    "year": 2013,
    "court": "उच्चतम न्यायालय (3 जजों की पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश पी. सथशिवम",
    "subject": {
      "hi": "ईवीएम में नोटा (None of the Above - NOTA) विकल्प का समावेश",
      "en": "Introduction of NOTA (None of the Above) Button on EVMs"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने चुनाव आयोग को निर्देश दिया कि इलेक्ट्रॉनिक वोटिंग मशीनों (EVM) और मतपत्रों में \"उपरोक्त में से कोई नहीं\" (NOTA) का विकल्प प्रदान किया जाए। नकारात्मक मतदान का अधिकार अनुच्छेद 19(1)(a) के तहत मतदाता की अभिव्यक्ति की स्वतंत्रता का हिस्सा है।",
      "en": "Directed Election Commission to provide NOTA button in EVMs, holding that the right to register a negative vote is an essential part of voters’ free expression under Article 19(1)(a)."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 324",
      "चुनाव संचालन नियम 1961"
    ]
  },
  {
    "id": "case-35",
    "caseName": "राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) बनाम भारत संघ (NALSA Case)",
    "year": 2014,
    "court": "उच्चतम न्यायालय (2 जजों की पीठ)",
    "benchOrJudge": "जस्टिस के.एस. राधाकृष्णन व जस्टिस ए.के. सीकरी",
    "subject": {
      "hi": "ट्रांसजेंडर व्यक्तियों को ‘तृतीय लिंग’ (Third Gender) के रूप में कानूनी मान्यता",
      "en": "Recognition of Transgender Persons as Third Gender"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने ट्रांसजेंडर व्यक्तियों को ‘तृतीय लिंग’ के रूप में मान्यता दी और घोषित किया कि लैंगिक पहचान का आत्म-निर्धारण (Self-identification) अनुच्छेद 14, 19, और 21 के तहत मौलिक अधिकार है। उन्हें सामाजिक व शैक्षणिक रूप से पिछड़ा वर्ग मानकर आरक्षण व कल्याणकारी योजनाएं देने का निर्देश दिया।",
      "en": "Recognized transgender individuals as \"Third Gender\" with full fundamental rights under Articles 14, 15, 16, 19, and 21; affirmed right to self-determination of gender."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 21"
    ]
  },
  {
    "id": "case-36",
    "caseName": "श्रेया सिंघल बनाम भारत संघ (Shreya Singhal v. Union of India)",
    "year": 2015,
    "court": "उच्चतम न्यायालय (2 जजों की पीठ)",
    "benchOrJudge": "जस्टिस जे. चेलामेश्वर व जस्टिस आर.एफ. नरीमन",
    "subject": {
      "hi": "आईटी एक्ट की धारा 66A निरस्त, इंटरनेट पर ऑनलाइन अभिव्यक्ति की स्वतंत्रता",
      "en": "Striking down Section 66A of Information Technology Act, Online Free Speech"
    },
    "rulingSummary": {
      "hi": "सूचना प्रौद्योगिकी अधिनियम 2000 की धारा 66A को असंवैधानिक घोषित किया गया जो इंटरनेट पर आपत्तिजनक पोस्ट हेतु 3 वर्ष तक की जेल का प्रावधान करती थी। कोर्ट ने माना कि यह धारा अस्पष्ट और अत्यधिक व्यापक है तथा अनुच्छेद 19(1)(a) के तहत वाक् व अभिव्यक्ति की स्वतंत्रता का खुला उल्लंघन करती है।",
      "en": "Struck down Section 66A of IT Act 2000 in its entirety as unconstitutionally vague and overbroad, violating the core right of online free speech under Article 19(1)(a)."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 19(2)",
      "आईटी एक्ट 2000 धारा 66A"
    ]
  },
  {
    "id": "case-37",
    "caseName": "सुप्रीम कोर्ट एडवोकेट्स-ऑन-रिकॉर्ड बनाम भारत संघ / NJAC वाद (Fourth Judges Case)",
    "year": 2015,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ - 4:1 बहुमत)",
    "benchOrJudge": "जस्टिस जे.एस. खेहर",
    "subject": {
      "hi": "99वां संविधान संशोधन (2014) और राष्ट्रीय न्यायिक नियुक्ति आयोग (NJAC) का निरस्तीकरण",
      "en": "Striking down 99th Constitutional Amendment and NJAC Act"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने 99वें संविधान संशोधन और NJAC कानून को असंवैधानिक घोषित करते हुए कॉलेजियम प्रणाली को पुनः बहाल किया। कोर्ट ने माना कि NJAC में विधि मंत्री और दो प्रतिष्ठित व्यक्तियों को शामिल करना न्यायपालिका की स्वतंत्रता (संविधान के मूल ढांचे) पर कुठाराघात है।",
      "en": "Declared 99th Constitutional Amendment and National Judicial Appointments Commission (NJAC) unconstitutional; affirmed that Judicial Independence is an unalterable basic feature."
    },
    "constitutionalArticles": [
      "अनुच्छेद 124(2)",
      "अनुच्छेद 124A-C",
      "अनुच्छेद 217",
      "अनुच्छेद 368"
    ]
  },
  {
    "id": "case-38",
    "caseName": "शायरा बानो बनाम भारत संघ / तीन तलाक वाद (Shayara Bano v. UOI)",
    "year": 2017,
    "court": "उच्चतम न्यायालय (5 जजों की बहु-धर्मीय संविधान पीठ - 3:2 बहुमत)",
    "benchOrJudge": "मुख्य न्यायाधीश जे.एस. खेहर",
    "subject": {
      "hi": "तीन तलाक (तलाक-ए-बिद्दत) को असंवैधानिक घोषित करना",
      "en": "Declaring Instant Triple Talaq (Talaq-e-Biddat) Unconstitutional"
    },
    "rulingSummary": {
      "hi": "5 जजों की पीठ ने 3:2 के बहुमत से एक साथ तीन तलाक (Talaq-e-Biddat) को अमान्य, गैर-कानूनी और असंवैधानिक घोषित किया। कोर्ट ने माना कि यह प्रथा कुरान के बुनियादी सिद्धांतों के विरुद्ध, मनमानी (Manifestly Arbitrary) है और मुस्लिम महिलाओं के अनुच्छेद 14 (समानता) और अनुच्छेद 21 (गरिमापूर्ण जीवन) का उल्लंघन करती है।",
      "en": "Declared instant triple talaq unconstitutional by 3:2 majority, holding it manifestly arbitrary and violative of Muslim women’s fundamental right to equality under Article 14."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 21",
      "अनुच्छेद 25"
    ]
  },
  {
    "id": "case-39",
    "caseName": "जस्टिस के.एस. पुट्टास्वामी बनाम भारत संघ / निजता का अधिकार वाद (Puttaswamy Case)",
    "year": 2017,
    "court": "उच्चतम न्यायालय (9 जजों की ऐतिहासिक सर्वसम्मत संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश जे.एस. खेहर (9-0 सर्वसम्मत)",
    "subject": {
      "hi": "निजता का अधिकार (Right to Privacy) अनुच्छेद 21 के तहत अंतर्निहित मौलिक अधिकार",
      "en": "Right to Privacy as an Inherent Fundamental Right under Article 21"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट के सभी 9 न्यायाधीशों ने सर्वसम्मति से एमपी शर्मा (1954) और खड़क सिंह (1962) के पुराने फैसलों को निरस्त करते हुए घोषित किया कि \"निजता का अधिकार\" (Right to Privacy) अनुच्छेद 21 के तहत जीवन और व्यक्तिगत स्वतंत्रता का अविभाज्य मौलिक अधिकार है। साथ ही एडीएम जबलपुर वाद (1976) को औपचारिक रूप से अमान्य करार दिया गया।",
      "en": "Unanimous 9-0 ruling holding Right to Privacy as a fundamental right protected under Article 21 and Part III; overruled M.P. Sharma, Kharak Singh, and formally buried ADM Jabalpur."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "भाग 3"
    ]
  },
  {
    "id": "case-40",
    "caseName": "नवतेज सिंह जौहर बनाम भारत संघ (Navtej Singh Johar v. Union of India)",
    "year": 2018,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ - सर्वसम्मत)",
    "benchOrJudge": "मुख्य न्यायाधीश दीपक मिश्रा",
    "subject": {
      "hi": "आईपीसी धारा 377 का आंशिक निरस्तीकरण एवं समलैंगिकता को अपराध की श्रेणी से बाहर करना",
      "en": "Decriminalization of Consensual Same-Sex Acts under Section 377 IPC"
    },
    "rulingSummary": {
      "hi": "कोर्ट ने सुरेश कुमार कौशल (2013) के फैसले को पलटते हुए आईपीसी की धारा 377 के उस हिस्से को असंवैधानिक घोषित किया जो वयस्कों के बीच सहमति से बनाए गए समलैंगिक संबंधों को अपराध मानता था। कोर्ट ने माना कि यौन रुझान (Sexual Orientation) निजता और गरिमा का हिस्सा है जो अनुच्छेद 14, 15, 19 और 21 द्वारा संरक्षित है।",
      "en": "Overruled Suresh Koushal (2013) to decriminalize consensual homosexual sex among adults, affirming that constitutional morality supersedes majoritarian social morality."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "IPC धारा 377"
    ]
  },
  {
    "id": "case-41",
    "caseName": "जोसेफ शाइन बनाम भारत संघ (Joseph Shine v. Union of India)",
    "year": 2018,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश दीपक मिश्रा",
    "subject": {
      "hi": "व्यभिचार (Adultery - IPC धारा 497) को अपराध मुक्त करना",
      "en": "Decriminalization of Adultery (Striking down Section 497 IPC)"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने 158 वर्ष पुरानी आईपीसी की धारा 497 और CrPC की धारा 198(2) को असंवैधानिक घोषित किया। कोर्ट ने कहा कि यह कानून महिलाओं को पति की निजी संपत्ति मानता है और उनके यौन स्वायत्तता व समानता (अनुच्छेद 14 व 21) का उल्लंघन करता है। व्यभिचार केवल विवाह विच्छेद (तलाक) का दीवानी आधार हो सकता है, आपराधिक कृत्य नहीं।",
      "en": "Struck down Section 497 IPC criminalizing adultery, ruling that it treated women as chattel of their husbands and violated Articles 14 and 21."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 21",
      "IPC धारा 497"
    ]
  },
  {
    "id": "case-42",
    "caseName": "इंडियन यंग लॉयर्स एसोसिएशन बनाम केरल राज्य / सबरीमाला वाद (Sabarimala Case)",
    "year": 2018,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ - 4:1 बहुमत)",
    "benchOrJudge": "मुख्य न्यायाधीश दीपक मिश्रा",
    "subject": {
      "hi": "सबरीमाला मंदिर में 10 से 50 वर्ष की महिलाओं के प्रवेश की अनुमति",
      "en": "Entry of Women of all ages into Sabarimala Temple"
    },
    "rulingSummary": {
      "hi": "4:1 के बहुमत से कोर्ट ने केरल हिंदू पूजा स्थल नियम के नियम 3(b) को असंवैधानिक घोषित किया जो 10 से 50 वर्ष की महिलाओं के प्रवेश को रोकता था। कोर्ट ने कहा कि मासिक धर्म के आधार पर महिलाओं पर प्रतिबंध लगाना अस्पृश्यता की प्रकृति का भेदभाव है और अनुच्छेद 14, 15, 21 व 25 का उल्लंघन है। (जस्टिस इंदु मल्होत्रा ने असहमति जताई)।",
      "en": "Ruled 4:1 that excluding women aged 10-50 from Sabarimala temple was discriminatory, violating women’s right to worship under Art 25 and equality under Art 14."
    },
    "constitutionalArticles": [
      "अनुच्छेद 14",
      "अनुच्छेद 15",
      "अनुच्छेद 17",
      "अनुच्छेद 21",
      "अनुच्छेद 25"
    ]
  },
  {
    "id": "case-43",
    "caseName": "कॉमन कॉज बनाम भारत संघ / इच्छा मृत्यु वाद (Common Cause v. UOI)",
    "year": 2018,
    "court": "उच्चतम न्यायालय (5 जजों की संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश दीपक मिश्रा",
    "subject": {
      "hi": "निष्क्रिय इच्छामृत्यु (Passive Euthanasia) और लिविंग विल (Living Will) को कानूनी मान्यता",
      "en": "Legalization of Passive Euthanasia & Living Will / Advance Medical Directives"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट ने गरिमापूर्ण मृत्यु (Dying with Dignity) को अनुच्छेद 21 के तहत जीवन के अधिकार का भाग माना। असाध्य रोग से पीड़ित और स्थायी रूप से कोमा में गए रोगियों के लिए जीवन रक्षक उपकरण हटाने (Passive Euthanasia) और भविष्य में चिकित्सा न लेने संबंधी \"लिविंग विल\" को वैध घोषित किया।",
      "en": "Held that Right to Die with Dignity is part of Article 21; legalized passive euthanasia and advance medical directives (Living Will) under strict safeguards."
    },
    "constitutionalArticles": [
      "अनुच्छेद 21"
    ]
  },
  {
    "id": "case-44",
    "caseName": "अनुराधा भसीन बनाम भारत संघ (Anuradha Bhasin v. Union of India)",
    "year": 2020,
    "court": "उच्चतम न्यायालय (3 जजों की पीठ)",
    "benchOrJudge": "जस्टिस एन.वी. रमना",
    "subject": {
      "hi": "इंटरनेट का अधिकार, अनुच्छेद 19(1)(a) एवं 19(1)(g) और इंटरनेट निलंबन की समीक्षा",
      "en": "Right to Internet Access under Article 19(1)(a) & Restrictions on Indefinite Internet Shutdowns"
    },
    "rulingSummary": {
      "hi": "जम्मू-कश्मीर में अनुच्छेद 370 हटने के बाद इंटरनेट पाबंदियों पर कोर्ट ने ऐतिहासिक फैसला दिया: इंटरनेट के माध्यम से अभिव्यक्ति की स्वतंत्रता (अनुच्छेद 19(1)(a)) और व्यापार/व्यवसाय करने का अधिकार (अनुच्छेद 19(1)(g)) संवैधानिक संरक्षण प्राप्त मौलिक अधिकार हैं। अनिश्चित काल के लिए इंटरनेट बंद करना अवैध और आनुपातिकता के सिद्धांत का उल्लंघन है।",
      "en": "SC declared freedom of speech and expression and the right to carry on trade/business through the internet as constitutionally protected under Arts 19(1)(a) & 19(1)(g)."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 19(1)(g)",
      "अनुच्छेद 19(2)",
      "टेलीकॉम सस्पेंशन रूल्स"
    ]
  },
  {
    "id": "case-45",
    "caseName": "एसोसिएशन फॉर डेमोक्रेटिक रिफॉर्म्स बनाम भारत संघ / चुनावी बॉन्ड वाद (Electoral Bonds Case)",
    "year": 2024,
    "court": "उच्चतम न्यायालय (5 जजों की सर्वसम्मत संविधान पीठ)",
    "benchOrJudge": "मुख्य न्यायाधीश डी.वाई. चंद्रचूड़ (15 फरवरी 2024)",
    "subject": {
      "hi": "चुनावी बॉन्ड योजना (Electoral Bonds Scheme 2018) का निरस्तीकरण",
      "en": "Striking down Electoral Bonds Scheme 2018 as Unconstitutional"
    },
    "rulingSummary": {
      "hi": "सुप्रीम कोर्ट की 5 जजों की संविधान पीठ ने सर्वसम्मति से चुनावी बॉन्ड योजना को असंवैधानिक घोषित कर निरस्त कर दिया। कोर्ट ने माना कि राजनीतिक दलों के वित्तपोषण में गुमनामी मतदाताओं के जानने के अधिकार (अनुच्छेद 19(1)(a)) का हनन करती है। भारतीय स्टेट बैंक (SBI) को सभी बॉन्ड के खरीददार और भुनाने वाली पार्टियों का विवरण चुनाव आयोग को सौंपने का निर्देश दिया गया।",
      "en": "Unanimously struck down the Electoral Bond Scheme as violative of the voters’ Right to Information under Article 19(1)(a), holding that political finance transparency is vital for democracy."
    },
    "constitutionalArticles": [
      "अनुच्छेद 19(1)(a)",
      "अनुच्छेद 14",
      "लोक प्रतिनिधित्व अधिनियम धारा 29C",
      "आयकर अधिनियम"
    ]
  }
];
