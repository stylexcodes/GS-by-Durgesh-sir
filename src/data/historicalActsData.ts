import { HistoricalAct } from '../types';

export const HISTORICAL_ACTS_DATA: HistoricalAct[] = [
  {
    id: 'regulating-act-1773',
    year: 1773,
    title: {
      hi: 'रेग्युलेटिंग एक्ट - 1773 (Regulating Act, 1773)',
      en: 'The Regulating Act of 1773'
    },
    background: {
      hi: 'ईस्ट इंडिया कंपनी की स्थापना सितंबर 1599 में 217 व्यापारियों द्वारा हुई। 31 दिसंबर 1600 को महारानी एलिजाबेथ प्रथम ने 15 वर्ष का व्यापारिक अधिकार दिया। कंपनी में व्याप्त भ्रष्टाचार और वित्तीय संकट की जांच हेतु ब्रिटिश पीएम लॉर्ड नॉर्थ ने 26 जनवरी 1772 को प्रवर समिति गठित की, जिसकी रिपोर्ट पर यह एक्ट बना।',
      en: 'East India Company was formed in Sept 1599. Queen Elizabeth I granted a 15-year charter on 31 Dec 1600. Due to rampant corruption and financial crisis, British PM Lord North constituted a Select Committee on 26 Jan 1772, leading to this Act.'
    },
    objectives: [
      {
        hi: 'कंपनी में व्याप्त दोषों (भ्रष्टाचार, कुप्रशासन, अनुशासनहीनता) को दूर करना।',
        en: 'Eliminate defects within the Company (corruption, maladministration, indiscipline).'
      },
      {
        hi: 'कंपनी की गतिविधियों को ब्रिटिश संसद की प्रत्यक्ष निगरानी में लाना।',
        en: 'Bring the East India Company under parliamentary supervision and accountability.'
      }
    ],
    provisions: [
      {
        hi: 'यह अधिनियम 1774 में लागू हुआ। कंपनी को 20 वर्ष तक व्यापार करने का अधिकार मिला।',
        en: 'Enforced in 1774. Extended the Company trade rights in India for 20 years.'
      },
      {
        hi: 'बंगाल के गवर्नर को तीनों प्रेसीडेंसियों (बंगाल, मद्रास, बम्बई) का ‘गवर्नर जनरल’ बनाया गया। वॉरेन हेस्टिंग्स बंगाल का प्रथम गवर्नर जनरल बना।',
        en: 'Designated the Governor of Bengal as "Governor-General of Bengal". Warren Hastings became the first Governor-General.'
      },
      {
        hi: 'मद्रास और बम्बई प्रेसीडेंसी को बंगाल प्रेसीडेंसी के अधीन कर दिया गया (केंद्रीकरण की शुरुआत)।',
        en: 'Subordinated Bombay and Madras presidencies to Bengal (beginning of centralization).'
      },
      {
        hi: 'गवर्नर जनरल की सहायता हेतु 4 सदस्यीय प्रशासक मंडल बना (फिलिप फ्रांसिस, क्लेवरिंग, मानसन, वारवेल - ट्रिक: फ्रांसीसी बोले कल मानसून बदलेगा)। कार्यकाल 5 वर्ष, कोरम 3 सदस्य, निर्णय बहुमत से।',
        en: '4-member executive council to assist Governor-General: Philip Francis, Clavering, Monson, and Barwell.'
      },
      {
        hi: 'कलकत्ता में 1774 में सुप्रीम कोर्ट की स्थापना हुई। मुख्य न्यायाधीश: सर एलिजा इम्पे; अन्य 3 न्यायाधीश: चैम्बर्स, लिमेस्टर, हाइड (ट्रिक: HCL)।',
        en: 'Established Supreme Court at Fort William (Calcutta) in 1774 with Sir Elijah Impey as CJ and Chambers, Lemaitre, Hyde (HCL).'
      },
      {
        hi: 'कंपनी के कर्मचारियों को किसी भी प्रकार का निजी व्यापार करने तथा भारतीयों से उपहार/रिश्वत लेने पर पूर्ण प्रतिबंध लगा।',
        en: 'Prohibited servants of the Company from engaging in private trade or accepting presents/bribes.'
      }
    ],
    notes: [
      {
        hi: 'वॉरेन हेस्टिंग्स पर ब्रिटेन लौटने पर एडमंड बर्क ने महाभियोग चलाया। आधार: रूहेला युद्ध, नंद कुमार को फांसी (न्यायिक हत्या), बनारस के राजा चेतसिंह से दुर्व्यवहार, अवध की बेगमों से धन वसूली, रिश्वतखोरी।',
        en: 'Warren Hastings was later impeached in British Parliament by Edmund Burke for the Rohilla war, judicial murder of Nand Kumar, and extortion.'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: तेरे सुप्रीम जनरल डायरेक्ट व्यापार नहीं करते (1773 Act -> सुप्रीम कोर्ट, जनरल पद, कोर्ट ऑफ डायरेक्टर्स, निजी व्यापार पर प्रतिबंध)',
      en: 'Mnemonic: 1773 Act -> Supreme Court, Governor General, Court of Directors, Private trade banned'
    }
  },
  {
    id: 'settlement-act-1781',
    year: 1781,
    title: {
      hi: 'संशोधन अधिनियम / सेटलमेंट एक्ट - 1781 (Act of Settlement, 1781)',
      en: 'The Act of Settlement of 1781'
    },
    background: {
      hi: '1773 के एक्ट की कमियों तथा गवर्नर जनरल इन काउंसिल और सुप्रीम कोर्ट के मध्य क्षेत्राधिकार टकराव को सुलझाने हेतु पारित।',
      en: 'Enacted to remedy defects of 1773 Act and delineate jurisdictional boundary between Supreme Court and Governor-General in Council.'
    },
    objectives: [
      {
        hi: 'कंपनी के अधिकारियों के शासकीय कार्यों को सुप्रीम कोर्ट के क्षेत्राधिकार से मुक्त करना।',
        en: 'Exempt official actions of Company servants from Supreme Court jurisdiction.'
      }
    ],
    provisions: [
      {
        hi: 'कंपनी के अधिकारी अपने शासकीय कार्यों के लिए सुप्रीम कोर्ट के प्रति उत्तरदायी नहीं होंगे।',
        en: 'Governor-General and council immune from Supreme Court jurisdiction for official acts.'
      },
      {
        hi: 'गवर्नर जनरल व उसकी परिषद द्वारा बनाए गए कानूनों को सुप्रीम कोर्ट में पंजीकृत कराना आवश्यक नहीं रहा।',
        en: 'Regulations made by Governor-General in Council no longer required registration with Supreme Court.'
      },
      {
        hi: 'राजस्व प्रशासन तथा राजस्व वसूली से संबंधित मामले सुप्रीम कोर्ट के अधिकार क्षेत्र से बाहर कर दिए गए।',
        en: 'Matters concerning revenue collection excluded from Supreme Court jurisdiction.'
      }
    ]
  },
  {
    id: 'pitts-india-act-1784',
    year: 1784,
    title: {
      hi: 'पिट्स इण्डिया एक्ट - 1784 (Pitt’s India Act, 1784)',
      en: 'Pitt’s India Act of 1784'
    },
    background: {
      hi: 'ब्रिटिश प्रधानमंत्री विलियम पिट (कनिष्ठ) द्वारा लाया गया। लॉर्ड नॉर्थ और फॉक्स की मिलीजुली सरकार इसी भारतीय विधेयक के गिरने के कारण गिरी थी (भारतीय मामले पर ब्रिटिश सरकार गिरने की एकमात्र घटना)।',
      en: 'Introduced by PM William Pitt the Younger after the coalition of North and Fox collapsed over Fox’s India Bill.'
    },
    objectives: [
      {
        hi: 'कंपनी के व्यापारिक और राजनीतिक कार्यों का स्पष्ट पृथक्करण करना।',
        en: 'Establish dual control separating commercial operations from political governance.'
      }
    ],
    provisions: [
      {
        hi: 'कंपनी के कार्यों का द्वैध शासन (Dual System): व्यापारिक मामले ‘कोर्ट ऑफ डायरेक्टर्स’ के पास रहे, जबकि राजनीतिक, सैन्य व राजस्व मामलों हेतु 6 सदस्यीय ‘बोर्ड ऑफ कंट्रोल’ (Board of Control) बना जिसके सदस्य ब्रिटिश क्राउन द्वारा नियुक्त होते थे।',
        en: 'Dual system: Court of Directors retained commercial functions; new 6-member Board of Control oversaw civil, military, and revenue affairs.'
      },
      {
        hi: 'गवर्नर जनरल की परिषद के सदस्यों की संख्या 4 से घटाकर 3 कर दी गई ताकि निर्णय लेना आसान हो।',
        en: 'Governor-General’s Executive Council reduced from 4 to 3 members.'
      },
      {
        hi: 'भारत में कंपनी के अधीन क्षेत्रों को पहली बार ‘भारत में ब्रिटिश संपत्ति’ (British Possessions in India) कहा गया।',
        en: 'Company territories in India for the first time officially designated as "British possessions in India".'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: राजनीति के चोर पिटेंगे कन्ट्रोल करो (राजनीति और व्यापार अलग, 1784 का Act, पिट्स इंडिया एक्ट, Board of Control की स्थापना)',
      en: 'Mnemonic: Politics controlled by Board of Control under 1784 Pitt’s Act'
    }
  },
  {
    id: 'act-of-1786',
    year: 1786,
    title: {
      hi: '1786 का अधिनियम (Act of 1786)',
      en: 'The Act of 1786'
    },
    background: {
      hi: 'लॉर्ड कार्नवालिस को भारत का गवर्नर जनरल बनाने हेतु लाया गया। कार्नवालिस ने पद स्वीकार करने हेतु दो शर्तें रखी थीं।',
      en: 'Enacted specifically to satisfy conditions laid down by Lord Cornwallis to accept Governor-Generalship.'
    },
    objectives: [
      {
        hi: 'गवर्नर जनरल को मुख्य सेनापति (कमांडर-इन-चीफ) की शक्ति और काउंसिल के निर्णय को रद्द करने का विशेषाधिकार देना।',
        en: 'Vest Commander-in-Chief powers in Governor-General and allow him to override Council decisions.'
      }
    ],
    provisions: [
      {
        hi: 'गवर्नर जनरल में मुख्य सेनापति (Commander-in-Chief) की शक्तियां भी निहित कर दी गईं।',
        en: 'Governor-General granted office of Commander-in-Chief.'
      },
      {
        hi: 'विशेष परिस्थितियों में गवर्नर जनरल को अपनी काउंसिल के निर्णयों को रद्द करने (Veto) का अधिकार मिला।',
        en: 'Empowered Governor-General to override Council decisions on matters of safety and tranquility.'
      }
    ]
  },
  {
    id: 'charter-act-1793',
    year: 1793,
    title: {
      hi: 'चार्टर एक्ट - 1793 (Charter Act, 1793)',
      en: 'The Charter Act of 1793'
    },
    background: {
      hi: 'कंपनी के व्यापारिक विशेषाधिकारों के नवीनीकरण हेतु पारित।',
      en: 'Renewed Company trade charter for 20 years.'
    },
    objectives: [
      {
        hi: 'कंपनी के एकाधिकार को अगले 20 वर्षों तक बढ़ाना।',
        en: 'Extend Company trade monopoly for two decades.'
      }
    ],
    provisions: [
      {
        hi: 'कंपनी के व्यापारिक एकाधिकार को 20 वर्षों के लिए बढ़ाया गया।',
        en: 'Extended Company commercial monopoly for another 20 years.'
      },
      {
        hi: 'बोर्ड ऑफ कंट्रोल के सदस्यों और कर्मचारियों का वेतन भारतीय राजस्व से देने की व्यवस्था की गई (जो 1919 तक जारी रही)।',
        en: 'Salaries of Board of Control members charged upon Indian revenues (continued till 1919).'
      },
      {
        hi: 'कानूनों और विनियमों की व्याख्या का अधिकार अदालतों को सौंपा गया (न्यायिक व्याख्या की शुरुआत)।',
        en: 'Empowered courts to interpret statutory regulations.'
      }
    ]
  },
  {
    id: 'charter-act-1813',
    year: 1813,
    title: {
      hi: 'चार्टर एक्ट - 1813 (Charter Act, 1813)',
      en: 'The Charter Act of 1813'
    },
    background: {
      hi: 'ब्रिटेन में औद्योगिक क्रांति और नेपोलियन की महाद्वीपीय व्यवस्था के कारण ब्रिटिश व्यापारियों ने भारतीय व्यापार खोलने की मांग की।',
      en: 'Industrial Revolution in Britain and Continental System pushed British merchants to demand open Indian markets.'
    },
    objectives: [
      {
        hi: 'भारतीय व्यापार को मुक्त करना तथा ईसाई मिशनरियों को प्रवेश देना।',
        en: 'Open Indian commerce and permit Christian missionaries.'
      }
    ],
    provisions: [
      {
        hi: 'कंपनी का व्यापारिक एकाधिकार समाप्त कर दिया गया, किंतु चीन के साथ व्यापार और चाय के व्यापार (Tea & China trade) पर एकाधिकार बना रहा।',
        en: 'Abolished Company trade monopoly in India, preserving monopoly only over tea and trade with China.'
      },
      {
        hi: 'ईसाई मिशनरियों को भारत में धर्म प्रचार करने और बसने की अनुमति दी गई।',
        en: 'Permitted Christian missionaries to propagate religion and preach in India.'
      },
      {
        hi: 'भारतीयों की शिक्षा, साहित्य और विज्ञान के प्रसार के लिए प्रतिवर्ष ₹1,00,000 (एक लाख रुपये) खर्च करने का प्रावधान किया गया।',
        en: 'Allotted ₹1,00,000 annually for revival of literature and promotion of education and science in India.'
      },
      {
        hi: 'कंपनी को अगले 20 वर्षों के लिए भारतीय प्रदेशों और राजस्व पर नियंत्रण का अधिकार दिया गया।',
        en: 'Reaffirmed Crown sovereignty over British territories in India.'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: तेरे व्यापार के धर्म में एक लाख लगा दिए (1813 एक्ट -> व्यापारिक एकाधिकार समाप्त चाय/चीन छोड़कर, धर्म का प्रचार, 1 लाख शिक्षा कोष)',
      en: 'Mnemonic: 1813 -> Trade monopoly ended, Missionaries, ₹1 Lakh education fund'
    }
  },
  {
    id: 'charter-act-1833',
    year: 1833,
    title: {
      hi: 'चार्टर एक्ट - 1833 (Charter Act, 1833) - भारत का पहला संवैधानिक दस्तावेज',
      en: 'The Charter Act of 1833 (Saint Helena Act)'
    },
    background: {
      hi: 'भारत में केंद्रीकृत शासन व्यवस्था की पराकाष्ठा। कंपनी को शुद्ध प्रशासनिक निकाय बनाया गया।',
      en: 'Pinnacle of British legislative centralization in India. Ended commercial role of the Company.'
    },
    objectives: [
      {
        hi: 'भारत में संपूर्ण केंद्रीकृत व्यवस्था स्थापित करना और विधि संहिताकरण।',
        en: 'Centralize legislative powers and codify Indian laws.'
      }
    ],
    provisions: [
      {
        hi: 'बंगाल के गवर्नर जनरल को ‘भारत का गवर्नर जनरल’ बना दिया गया। लॉर्ड विलियम बेंटिंक भारत का प्रथम गवर्नर जनरल बना।',
        en: 'Designated Governor-General of Bengal as "Governor-General of India". Lord William Bentinck became the first.'
      },
      {
        hi: 'कंपनी के सभी व्यापारिक अधिकार (चाय और चीन सहित) पूरी तरह समाप्त कर दिए गए। कंपनी विशुद्ध रूप से प्रशासनिक निकाय बन गई।',
        en: 'Completely ended Company commercial monopoly, including tea and China. EIC became a purely administrative entity.'
      },
      {
        hi: 'मद्रास और बम्बई के गवर्नरों से कानून बनाने की शक्ति छीन ली गई; पूरे देश के लिए कानून बनाने का अधिकार भारत के गवर्नर जनरल को मिला।',
        en: 'Deprived Governors of Bombay and Madras of lawmaking powers; centralized lawmaking in Governor-General in Council.'
      },
      {
        hi: 'गवर्नर जनरल की परिषद में चौथे अस्थायी सदस्य के रूप में ‘विधि सदस्य’ (Law Member) की नियुक्ति हुई। लॉर्ड मैकाले प्रथम विधि सदस्य बना।',
        en: 'Added a fourth temporary "Law Member" to Governor-General’s Council (Lord Macaulay was the first).'
      },
      {
        hi: 'भारतीय कानूनों को संहिताबद्ध करने हेतु मैकाले की अध्यक्षता में 1834 में प्रथम ‘विधि आयोग’ (Law Commission) गठित हुआ (IPC का जनक)।',
        en: 'First Law Commission formed under Macaulay in 1834 to codify Indian laws (gave birth to IPC).'
      },
      {
        hi: 'भारत में दास प्रथा को गैरकानूनी घोषित करने का निर्देश दिया गया, जिसे 1843 में एक्ट-V द्वारा लॉर्ड एलनबरो के समय समाप्त किया गया।',
        en: 'Directed abolition of slavery in India, formally banned by Act V of 1843 under Lord Ellenborough.'
      },
      {
        hi: 'धारा 87: धर्म, मूलवंश, जाति, रंग के आधार पर किसी भारतीय को कंपनी की सेवा से अयोग्य नहीं ठहराया जाएगा।',
        en: 'Section 87 declared no Indian barred from holding office under Company due to religion, caste, or color.'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: बेटा दास गवर्नर General को चाय की सर्विस दो (विलियम बेंटिक प्रथम गवर्नर जनरल, दास प्रथा का अंत, भारत का GG पद, चाय एकाधिकार समाप्त, सिविल सर्विस की नींव)',
      en: 'Mnemonic: Bentinck first GG of India, Slavery abolished, Tea monopoly ended, Civil Service base'
    }
  },
  {
    id: 'charter-act-1853',
    year: 1853,
    title: {
      hi: 'चार्टर एक्ट - 1853 (Charter Act, 1853) - अंतिम चार्टर एक्ट',
      en: 'The Charter Act of 1853'
    },
    background: {
      hi: 'ईस्ट इंडिया कंपनी के लिए ब्रिटिश संसद द्वारा जारी अंतिम चार्टर अधिनियम।',
      en: 'The last of the Charter Acts passed by the British Parliament between 1793 and 1853.'
    },
    objectives: [
      {
        hi: 'विधायी और कार्यपालक कार्यों को अलग करना तथा सिविल सेवा खुली प्रतियोगिता।',
        en: 'Separate legislative and executive functions and introduce open competition for ICS.'
      }
    ],
    provisions: [
      {
        hi: 'गवर्नर जनरल की परिषद के विधायी और प्रशासनिक कार्यों को पहली बार अलग किया गया।',
        en: 'First time separated legislative and executive functions of Governor-General’s Council.'
      },
      {
        hi: '12 सदस्यीय ‘अखिल भारतीय विधान परिषद’ (Indian Legislative Council / छोटी संसद) का गठन हुआ।',
        en: 'Created 12-member Indian Legislative Council functioning as a "mini-parliament".'
      },
      {
        hi: 'सिविल सेवकों की भर्ती के लिए खुली प्रतियोगी परीक्षा (Open Competitive Examination) की व्यवस्था शुरू हुई (मैकाले समिति 1854 गठित)।',
        en: 'Introduced open competition for civil services selection (Macaulay Committee appointed in 1854).'
      },
      {
        hi: 'कोर्ट ऑफ डायरेक्टर्स के सदस्यों की संख्या 24 से घटाकर 18 कर दी गई (जिसमें 6 सदस्य क्राउन द्वारा मनोनीत होते थे)।',
        en: 'Reduced Court of Directors from 24 to 18 members, 6 of whom were Crown-nominated.'
      },
      {
        hi: 'विधि सदस्य को गवर्नर जनरल की परिषद का पूर्ण व स्थायी सदस्य बना दिया गया।',
        en: 'Law member made a permanent and full member of the Executive Council.'
      }
    ]
  },
  {
    id: 'government-of-india-act-1858',
    year: 1858,
    title: {
      hi: 'भारत सरकार अधिनियम - 1858 (Government of India Act, 1858)',
      en: 'The Government of India Act, 1858 (Act for the Better Government of India)'
    },
    background: {
      hi: '1857 के प्रथम स्वतंत्रता संग्राम (क्रांति) का प्रत्यक्ष परिणाम। ब्रिटिश संसद ने ईस्ट इंडिया कंपनी के शासन को समाप्त कर शासन सीधे ब्रिटिश क्राउन (महारानी विक्टोरिया) के हाथों में सौंप दिया।',
      en: 'Direct consequence of the 1857 Revolt. Liquidated East India Company rule and transferred power directly to the British Crown.'
    },
    objectives: [
      {
        hi: 'कंपनी का शासन समाप्त कर क्राउन का प्रत्यक्ष शासन स्थापित करना।',
        en: 'Transfer governance to British Crown and streamline administrative accountability.'
      }
    ],
    provisions: [
      {
        hi: 'कंपनी का शासन समाप्त; भारत का शासन सीधे ब्रिटिश क्राउन के अधीन आ गया।',
        en: 'Abolished Company rule; India to be governed in the name of Her Majesty Queen Victoria.'
      },
      {
        hi: 'गवर्नर जनरल का पदनाम बदलकर ‘वायसराय’ (Viceroy) किया गया (क्राउन का प्रत्यक्ष प्रतिनिधि)। लॉर्ड कैनिंग भारत का प्रथम वायसराय बना।',
        en: 'Governor-General designated as Viceroy of India (Crown’s direct representative). Lord Canning became the first Viceroy.'
      },
      {
        hi: 'बोर्ड ऑफ कंट्रोल तथा कोर्ट ऑफ डायरेक्टर्स को समाप्त कर द्वैध शासन का अंत किया गया।',
        en: 'Abolished Board of Control and Court of Directors, ending the system of double government.'
      },
      {
        hi: 'एक नया पद ‘भारत राज्य सचिव’ (Secretary of State for India) सृजित हुआ (ब्रिटिश कैबिनेट का सदस्य) और उसकी सहायता हेतु 15 सदस्यीय ‘भारत परिषद’ (India Council) बनाई गई।',
        en: 'Created Secretary of State for India assisted by a 15-member Council of India.'
      },
      {
        hi: 'महारानी विक्टोरिया की घोषणा 1 नवंबर 1858 को लॉर्ड कैनिंग द्वारा इलाहाबाद के मिंटो पार्क दरबार में पढ़ी गई (लॉर्ड डर्बी द्वारा तैयार)। दादाभाई नौरोजी ने इसे ‘भारतीय जनता का मैग्नाकार्टा’ कहा।',
        en: 'Queen Victoria’s Proclamation read at Allahabad Durbar on 1 Nov 1858 by Canning; hailed by Dadabhai Naoroji as the Magna Carta of the people of India.'
      }
    ]
  },
  {
    id: 'indian-councils-act-1861',
    year: 1861,
    title: {
      hi: 'भारत परिषद अधिनियम - 1861 (Indian Councils Act, 1861)',
      en: 'The Indian Councils Act of 1861'
    },
    background: {
      hi: '1857 की क्रांति के बाद अंग्रेजों ने भारतीयों को कानून निर्माण में शामिल करने का निर्णय लिया। चार्ल्स वुड द्वारा प्रस्तुत।',
      en: 'Enacted to associate Indians with lawmaking following the 1857 rebellion. Introduced portfolio system.'
    },
    objectives: [
      {
        hi: 'विधि निर्माण में भारतीयों को सहयोग देना तथा विधायी शक्तियों का विकेंद्रीकरण।',
        en: 'Associate Indians in legislative councils and initiate legislative decentralization.'
      }
    ],
    provisions: [
      {
        hi: 'लॉर्ड कैनिंग द्वारा शुरू की गई ‘विभागीय प्रणाली’ (Portfolio System) को वैधानिक मान्यता मिली (मंत्रिमंडलीय व्यवस्था की शुरुआत)।',
        en: 'Granted statutory recognition to the Portfolio System introduced by Lord Canning in 1859.'
      },
      {
        hi: 'वायसराय को आपातकाल में बिना काउंसिल की सहमति के 6 माह की अवधि हेतु अध्यादेश (Ordinance) जारी करने की शक्ति मिली।',
        en: 'Empowered Viceroy to issue Ordinances during emergencies without council concurrence, valid for 6 months.'
      },
      {
        hi: 'मद्रास और बम्बई प्रेसीडेंसियों को पुनः कानून बनाने की शक्ति देकर विधायी विकेंद्रीकरण (Decentralization) की नींव रखी गई।',
        en: 'Restored legislative powers to Bombay and Madras presidencies, reversing the centralizing trend since 1773.'
      },
      {
        hi: '1862 में लॉर्ड कैनिंग ने 3 भारतीयों को विधान परिषद में मनोनीत किया: बनारस के राजा, पटियाला के महाराजा, और सर दिनकर राव।',
        en: 'In 1862, Canning nominated 3 Indians to Legislative Council: Raja of Benaras, Maharaja of Patiala, and Sir Dinkar Rao.'
      },
      {
        hi: '1862 में कलकत्ता, बम्बई और मद्रास में उच्च न्यायालयों की स्थापना का आधार बना (1866 में इलाहाबाद हाईकोर्ट)।',
        en: 'Paved way for establishment of High Courts in Calcutta, Bombay, and Madras in 1862, and Allahabad in 1866.'
      },
      {
        hi: 'लॉर्ड कैनिंग ने 1860 में भारतीय दंड संहिता (IPC) पर हस्ताक्षर किए जो 1 जनवरी 1862 को लागू हुई (जनक: लॉर्ड मैकाले)।',
        en: 'Indian Penal Code (IPC) drafted by Macaulay received assent in 1860 and came into force on 1 Jan 1862.'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: मंत्रि एक साथ अध्यादेश जारी करेंगे (मंत्रिमंडलीय पोर्टफोलियो व्यवस्था, 1861 का अधिनियम, वायसराय का अध्यादेश जारी करने की शक्ति)',
      en: 'Mnemonic: 1861 Act -> Portfolio system & Viceroy’s Ordinance power'
    }
  },
  {
    id: 'indian-councils-act-1892',
    year: 1892,
    title: {
      hi: 'भारत परिषद अधिनियम - 1892 (Indian Councils Act, 1892)',
      en: 'The Indian Councils Act of 1892'
    },
    background: {
      hi: '1885 में भारतीय राष्ट्रीय कांग्रेस की स्थापना के बाद विधान परिषदों के विस्तार और वित्तीय अधिकारों की मांग के दबाव में लॉर्ड डफरिन के प्रयासों से आया।',
      en: 'Enacted under pressure from the Indian National Congress (founded 1885) for expanding representative councils and financial scrutiny.'
    },
    objectives: [
      {
        hi: 'विधान परिषदों के सदस्यों को बजट पर चर्चा और प्रश्न पूछने का अधिकार देना।',
        en: 'Grant councils power to discuss budget and address questions to the executive.'
      }
    ],
    provisions: [
      {
        hi: 'सर्वप्रथम अप्रत्यक्ष चुनाव पद्धति (Indirect Election) की शुरुआत हुई (यद्यपि ‘चुनाव’ शब्द का प्रयोग नहीं किया गया)।',
        en: 'Introduced indirect election principle for non-official members of central and provincial councils.'
      },
      {
        hi: 'विधान परिषद के सदस्यों को वार्षिक बजट पर बहस करने तथा सार्वजनिक हित के मामलों पर 6 दिन की पूर्व सूचना देकर प्रश्न पूछने का अधिकार मिला।',
        en: 'Members given right to discuss annual budget and ask questions on public matters with 6 days prior notice.'
      },
      {
        hi: 'किंतु पूरक प्रश्न (Supplementary Questions) पूछने तथा बजट पर मतदान करने का अधिकार नहीं दिया गया।',
        en: 'Members still barred from asking supplementary questions or voting on the budget.'
      },
      {
        hi: 'केंद्रीय विधान परिषद के गैर-सरकारी सदस्यों की संख्या बढ़ाकर न्यूनतम 10 और अधिकतम 16 कर दी गई।',
        en: 'Increased non-official members in Central Legislative Council to between 10 and 16.'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: चुनावी बजट बनवा लो (निर्वाचन की शुरुआत, बजट पर बहस, 1892 का अधिनियम)',
      en: 'Mnemonic: 1892 Act -> Indirect elections & Budget discussion'
    }
  },
  {
    id: 'morley-minto-reforms-1909',
    year: 1909,
    title: {
      hi: 'भारत शासन अधिनियम 1909 / मार्ले-मिण्टो सुधार (Morley-Minto Reforms, 1909)',
      en: 'The Indian Councils Act of 1909 (Morley-Minto Reforms)'
    },
    background: {
      hi: 'भारत सचिव जॉन मार्ले और वायसराय लॉर्ड मिण्टो द्वारा तैयार। 1906 में मुस्लिम लीग की स्थापना के बाद फूट डालो और राज करो नीति के तहत लाया गया।',
      en: 'Framed by Secretary of State John Morley and Viceroy Lord Minto. Infamous for introducing separate communal electorates.'
    },
    objectives: [
      {
        hi: 'उदारवादियों को संतुष्ट करना तथा मुसलमानों को अलग प्रतिनिधित्व देकर राष्ट्रीय आंदोलन में फूट डालना।',
        en: 'Appease moderates while driving a wedge in the national movement through communal electorates.'
      }
    ],
    provisions: [
      {
        hi: 'सांप्रदायिक प्रतिनिधित्व का जनक: मुसलमानों के लिए पृथक निर्वाचक मंडल (Separate Electorate) का प्रावधान किया गया। लॉर्ड मिण्टो को ‘सांप्रदायिक निर्वाचन का जनक’ कहा जाता है। (मिण्टो ने मार्ले को लिखा: "हम नाग के दांत बो रहे हैं, जिसकी फसल बहुत कड़वी होगी")।',
        en: 'Introduced separate electorates for Muslims. Lord Minto hailed as the "Father of Communal Electorates".'
      },
      {
        hi: 'केंद्रीय विधान परिषद में सदस्यों की संख्या 16 से बढ़ाकर 60 कर दी गई।',
        en: 'Increased size of Central Legislative Council from 16 to 60 members.'
      },
      {
        hi: 'सदस्यों को बजट पर पूरक प्रश्न (Supplementary Questions) पूछने तथा जनहित के प्रस्ताव लाने का अधिकार मिला।',
        en: 'Members permitted to ask supplementary questions and move resolutions on the budget.'
      },
      {
        hi: 'वायसराय की कार्यपालिका परिषद में प्रथम भारतीय सदस्य: सत्येंद्र प्रसाद सिन्हा (S.P. Sinha) विधि सदस्य के रूप में नियुक्त हुए।',
        en: 'Satyendra Prasad Sinha became the first Indian appointed to Viceroy’s Executive Council (as Law Member).'
      }
    ],
    notes: [
      {
        hi: 'पं. जवाहरलाल नेहरू: "मार्ले-मिण्टो सुधारों ने भारत का विभाजन करा दिया।" के.एम. मुंशी: "इन्होंने उभरते हुए प्रजातंत्र की हत्या कर दी।"',
        en: 'Jawaharlal Nehru noted: "It threw up divisions that led to partition." K.M. Munshi observed: "It killed burgeoning democracy."'
      }
    ]
  },
  {
    id: 'montagu-chelmsford-reforms-1919',
    year: 1919,
    title: {
      hi: 'भारत शासन अधिनियम 1919 / मांटेग्यू-चेम्सफोर्ड सुधार (Montagu-Chelmsford Reforms, 1919)',
      en: 'The Government of India Act of 1919 (Montagu-Chelmsford Reforms)'
    },
    background: {
      hi: '20 अगस्त 1917 की मांटेग्यू घोषणा (अगस्त घोषणा) पर आधारित जिसमें भारत में क्रमिक रूप से उत्तरदायी सरकार की स्थापना का लक्ष्य घोषित किया गया था। यह अधिनियम 1921 में लागू हुआ।',
      en: 'Based on Montagu Declaration of 20 Aug 1917 promising progressive realization of responsible government. Enforced in 1921.'
    },
    objectives: [
      {
        hi: 'प्रांतों में द्वैध शासन लागू करना तथा केंद्र में द्विसदनीय विधायिका की स्थापना।',
        en: 'Introduce Dyarchy in provinces and establish a bicameral central legislature.'
      }
    ],
    provisions: [
      {
        hi: 'प्रांतों में द्वैध शासन (Dyarchy in Provinces): 1 अप्रैल 1921 से लागू। जनक: सर लियोनेल कर्टिस (Lionel Curtis)। प्रांतीय विषयों को दो भागों में बांटा गया: 1. आरक्षित विषय (Reserved - पुलिस, जेल, न्याय, वित्त, सिंचाई - गवर्नर अपनी परिषद से चलाता था), 2. हस्तांतरित विषय (Transferred - शिक्षा, स्वास्थ्य, कृषि, स्थानीय स्वशासन - भारतीय मंत्रियों को दिए गए)।',
        en: 'Introduced Dyarchy in provinces (1921-1937) designed by Sir Lionel Curtis. Subjects split into Reserved (Governor & Council) and Transferred (Ministers).'
      },
      {
        hi: 'केंद्र में द्विसदनीय व्यवस्था (Bicameralism): भारतीय विधान परिषद के स्थान पर राज्य परिषद (Council of State - 60 सदस्य) और केंद्रीय विधानसभा (Legislative Assembly - 144 सदस्य) का गठन हुआ।',
        en: 'Introduced bicameral legislature at Centre: Council of State (Upper House) and Legislative Assembly (Lower House).'
      },
      {
        hi: 'प्रत्यक्ष चुनाव प्रणाली (Direct Elections) की पहली बार शुरुआत हुई तथा संपत्ति, कर या शिक्षा के आधार पर सीमित मताधिकार दिया गया।',
        en: 'Introduced direct elections for majority of seats, with franchise restricted by property, tax, or education.'
      },
      {
        hi: 'सांप्रदायिक निर्वाचन का विस्तार: सिखों, भारतीय ईसाइयों, आंग्ल-भारतीयों और यूरोपियों के लिए भी पृथक निर्वाचक मंडल लागू किए गए।',
        en: 'Extended communal electorates to Sikhs, Indian Christians, Anglo-Indians, and Europeans.'
      },
      {
        hi: 'केंद्रीय बजट को राज्य बजट से अलग कर दिया गया और राज्य विधानसभाओं को अपना बजट स्वयं बनाने का अधिकार मिला।',
        en: 'Separated provincial budgets from Central budget for the first time.'
      },
      {
        hi: 'लंदन में भारत के उच्चायुक्त (High Commissioner for India) का पद सृजित किया गया।',
        en: 'Created office of High Commissioner for India in London.'
      },
      {
        hi: 'ली आयोग (1923-24) की सिफारिश पर 1926 में लोक सेवा आयोग (Central Public Service Commission) का गठन हुआ।',
        en: 'Provided for establishment of a Public Service Commission (constituted in 1926 under Lee Commission).'
      },
      {
        hi: '10 वर्ष बाद इस अधिनियम की समीक्षा हेतु एक वैधानिक आयोग का प्रावधान (जिसके तहत 1927 में साइमन कमीशन का गठन हुआ)।',
        en: 'Mandated appointment of a statutory commission after 10 years (led to Simon Commission in 1927).'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: हाय माँ उन दो महिलाओं से उत्तर देना सीखो (हाई कमिश्नर, मांटेग्यू-चेम्सफोर्ड, 1919 एक्ट, द्विसदनीय, महिलाओं को वोट, आंशिक उत्तरदायी, द्वैध शासन, सिखों को पृथक निर्वाचन)',
      en: 'Mnemonic: 1919 -> High Commissioner, Dyarchy, Bicameralism, Voting for women, Sikh separate electorates'
    }
  },
  {
    id: 'government-of-india-act-1935',
    year: 1935,
    title: {
      hi: 'भारत शासन अधिनियम - 1935 (Government of India Act, 1935)',
      en: 'The Government of India Act of 1935'
    },
    background: {
      hi: 'भारतीय संविधान का सबसे बड़ा स्रोत (संविधान के लगभग 75% अनुच्छेद / 200+ अनुच्छेद इसी से प्रेरित)। यह साइमन कमीशन रिपोर्ट, नेहरू रिपोर्ट 1928, तीनों गोलमेज सम्मेलनों (1930-32) और श्वेत पत्र (1933) के आधार पर तैयार हुआ। इसमें 14 भाग, 321 अनुच्छेद और 10 अनुसूचियां थीं। यह अप्रैल 1937 में लागू हुआ।',
      en: 'Largest source of Indian Constitution (~75% of text). Based on Simon Report, Nehru Report, 3 Round Table Conferences, and 1933 White Paper. Contained 321 sections and 10 schedules.'
    },
    objectives: [
      {
        hi: 'अखिल भारतीय संघ की स्थापना, प्रांतीय स्वायत्तता तथा केंद्र में द्वैध शासन।',
        en: 'Establish All-India Federation, Provincial Autonomy, and Federal Dyarchy.'
      }
    ],
    provisions: [
      {
        hi: 'अखिल भारतीय संघ (All India Federation): 11 ब्रिटिश प्रांतों, 6 चीफ कमिश्नरी क्षेत्रों और देसी रियासतों से मिलकर बनना था (रियासतों के शामिल न होने से कभी अस्तित्व में नहीं आया)।',
        en: 'Proposed All-India Federation of British provinces and princely states (never materialized due to princely abstention).'
      },
      {
        hi: 'प्रांतीय स्वायत्तता (Provincial Autonomy): प्रांतों से द्वैध शासन समाप्त कर उन्हें पूर्ण स्वायत्तता दी गई और जिम्मेदार सरकार बनी (1937 से 1939 तक लागू रही)।',
        en: 'Abolished provincial dyarchy and introduced Provincial Autonomy with responsible ministries.'
      },
      {
        hi: 'केंद्र में द्वैध शासन (Dyarchy at Centre): केंद्रीय विषयों को आरक्षित (रक्षा, विदेश, धार्मिक, जनजाति) और हस्तांतरित में बांटा गया।',
        en: 'Introduced dyarchy at the Centre with subjects divided into Reserved and Transferred.'
      },
      {
        hi: 'शक्तियों का त्रिपक्षीय विभाजन: 1. संघ सूची (59 विषय), 2. राज्य सूची (54 विषय), 3. समवर्ती सूची (36 विषय)। अवशिष्ट शक्तियां (Residuary Powers) वायसराय को सौंपी गईं।',
        en: 'Divided powers into 3 Lists: Federal (59), Provincial (54), Concurrent (36). Residuary powers vested in Viceroy.'
      },
      {
        hi: 'संघीय न्यायालय (Federal Court): 1 अक्टूबर 1937 को दिल्ली में स्थापित (1 मुख्य न्यायाधीश सर मौरिस ग्वेयर + 6 अन्य न्यायाधीश)। अंतिम अपीलीय अदालत प्रिवी काउंसिल थी।',
        en: 'Established Federal Court in Delhi on 1 Oct 1937 (CJI Sir Maurice Gwyer); appeals lay to Privy Council.'
      },
      {
        hi: 'भारतीय रिजर्व बैंक (RBI): देश की मुद्रा और साख नियंत्रण हेतु 1 अप्रैल 1935 को स्थापना (1 जनवरी 1949 को राष्ट्रीयकरण; प्रथम गवर्नर सर ओसबोर्न स्मिथ)।',
        en: 'Established Reserve Bank of India on 1 April 1935 to control currency and credit (nationalized 1 Jan 1949).'
      },
      {
        hi: '11 राज्यों में से 6 प्रांतों में द्विसदनीय व्यवस्था (Bicameralism): बंगाल, बम्बई, मद्रास, बिहार, संयुक्त प्रांत (UP) और असम में विधानसभा व विधान परिषद बनी।',
        en: 'Introduced bicameral legislatures in 6 out of 11 provinces: Bengal, Bombay, Madras, Bihar, UP, and Assam.'
      },
      {
        hi: 'बर्मा (म्यांमार) को भारत से अलग किया गया तथा सिंध और उड़ीसा दो नए प्रांत बनाए गए।',
        en: 'Separated Burma from India and carved out Orissa and Sindh as separate provinces.'
      },
      {
        hi: 'सांप्रदायिक प्रतिनिधित्व का विस्तार: दलित जातियों (SC), महिलाओं और मजदूर वर्ग को अलग निर्वाचक मंडल दिया गया। लगभग 10% जनसंख्या को मताधिकार मिला।',
        en: 'Extended communal electorates to Depressed Classes (Scheduled Castes), women, and labor.'
      }
    ],
    notes: [
      {
        hi: 'पंडित जवाहरलाल नेहरू ने इस अधिनियम को "अनेक ब्रेकों वाली इंजन रहित गाड़ी" (A machine with strong brakes but no engine) तथा "दासता का नया अधिकार पत्र" कहा। मोहम्मद अली जिन्ना ने इसे "सड़ा हुआ, मौलिक रूप से खराब और अस्वीकार्य" बताया।',
        en: 'Nehru described it as "a machine with strong brakes but no engine" and "a charter of bondage". Jinnah called it thoroughly rotten.'
      }
    ]
  },
  {
    id: 'indian-independence-act-1947',
    year: 1947,
    title: {
      hi: 'भारतीय स्वतंत्रता अधिनियम - 1947 (Indian Independence Act, 1947)',
      en: 'The Indian Independence Act of 1947'
    },
    background: {
      hi: 'ब्रिटिश प्रधानमंत्री क्लीमेंट एटली की 20 फरवरी 1947 की घोषणा (जून 1948 से पहले सत्ता सौंपने की) तथा लॉर्ड माउंटबेटन की 3 जून 1947 की विभाजन योजना (माउंटबेटन योजना) पर आधारित। 4 जुलाई 1947 को ब्रिटिश संसद में पेश हुआ और 18 जुलाई 1947 को शाही स्वीकृति मिली।',
      en: 'Based on PM Clement Attlee’s Feb 1947 declaration and Mountbatten Plan of 3 June 1947. Passed British Parliament on 18 July 1947.'
    },
    objectives: [
      {
        hi: 'भारत का विभाजन कर दो स्वतंत्र अधिराज्य (Dominions) बनाना तथा संविधान सभाओं को संप्रभुता सौंपना।',
        en: 'Partition British India into two independent Dominions: India and Pakistan, transferring sovereign power.'
      }
    ],
    provisions: [
      {
        hi: '15 अगस्त 1947 को दो संप्रभु अधिराज्यों (Dominions) - भारत और पाकिस्तान की स्थापना हुई (पाकिस्तान 14 अगस्त को स्वतंत्र हुआ)।',
        en: 'Created two independent dominions, India and Pakistan, with effect from 15 August 1947.'
      },
      {
        hi: 'ब्रिटिश क्राउन का भारत पर से संप्रभुता और नियंत्रण पूर्णतः समाप्त हो गया तथा ‘भारत का सम्राट’ उपाधि समाप्त हुई।',
        en: 'Lapsed British suzerainty over Indian States and deleted title "Emperor of India" from Royal style.'
      },
      {
        hi: 'दोनों अधिराज्यों की संविधान सभाओं को अपने-अपने देश का संविधान बनाने और किसी भी ब्रिटिश कानून को रद्द करने की पूर्ण संप्रभु शक्ति मिली।',
        en: 'Conferred sovereign powers on Constituent Assemblies to frame constitutions and repeal British acts.'
      },
      {
        hi: 'जब तक नया संविधान नहीं बन जाता, तब तक दोनों देशों का शासन भारत शासन अधिनियम 1935 के अनुसार चलाया जाएगा (संविधान सभा विधायिका के रूप में भी कार्य करेगी)।',
        en: 'Both dominions governed under amended Government of India Act 1935 until their new constitutions took effect.'
      },
      {
        hi: 'भारत राज्य सचिव (Secretary of State for India) का पद समाप्त कर दिया गया और उसके कार्य राष्ट्रमंडल मामलों के सचिव को सौंपे गए।',
        en: 'Abolished office of Secretary of State for India; transferred functions to Commonwealth Secretary.'
      },
      {
        hi: 'देसी रियासतों को भारत या पाकिस्तान में शामिल होने अथवा स्वतंत्र रहने की पूरी छूट दी गई।',
        en: 'Granted princely states the freedom to accede to either dominion or remain independent.'
      },
      {
        hi: 'लॉर्ड माउंटबेटन स्वतंत्र भारत के प्रथम गवर्नर जनरल बने और पं. जवाहरलाल नेहरू प्रथम प्रधानमंत्री बने। पाकिस्तान के प्रथम गवर्नर जनरल मोहम्मद अली जिन्ना तथा प्रधानमंत्री लियाकत अली बने।',
        en: 'Lord Mountbatten became first Governor-General of independent India, and Jawaharlal Nehru became PM. Jinnah became GG of Pakistan.'
      }
    ]
  },
  {
    id: 'simon-commission-nehru-report',
    year: 1927,
    title: {
      hi: 'साइमन कमीशन (1927) एवं नेहरू रिपोर्ट (1928)',
      en: 'Simon Commission (1927) & Nehru Report (1928)'
    },
    background: {
      hi: '1919 के अधिनियम की समीक्षा हेतु 10 वर्ष पूर्व ही नवंबर 1927 में सर जॉन साइमन की अध्यक्षता में 7 सदस्यीय आयोग गठित हुआ। सभी सदस्य ब्रिटिश संसद के श्वेत होने के कारण इसे ‘श्वेत कमीशन’ (White Commission) कहा गया और भारत में "साइमन गो बैक" के नारों से बहिष्कार हुआ। लाहौर में लाठीचार्ज से लाला लाजपत राय शहीद हुए।',
      en: 'Constituted in Nov 1927 under Sir John Simon to review the 1919 Act. Boycotted across India as the "White Commission" since all 7 members were British. Lala Lajpat Rai was martyred following a brutal police lathi-charge in Lahore.'
    },
    objectives: [
      {
        hi: 'भारत में उत्तरदायी शासन की प्रगति का मूल्यांकन करना और नए संविधान की रूपरेखा तय करना।',
        en: 'Assess constitutional readiness for responsible self-government in India.'
      },
      {
        hi: 'भारतीयों द्वारा संविधान निर्माण की चुनौती स्वीकार करना (नेहरू रिपोर्ट 1928)।',
        en: 'Draft an indigenous constitutional blueprint in response to Lord Birkenhead’s challenge.'
      }
    ],
    provisions: [
      {
        hi: 'साइमन कमीशन की सिफारिशें (मई 1930 रिपोर्ट): प्रांतों में द्वैध शासन समाप्त कर पूर्ण उत्तरदायी शासन, केंद्र में अखिल भारतीय संघ की स्थापना, सांप्रदायिक निर्वाचन जारी रखना तथा बर्मा को भारत से अलग करना।',
        en: 'Simon Commission Recommendations (1930): Abolition of provincial dyarchy, setting up of an All-India Federation, retention of communal electorates, and separation of Burma.'
      },
      {
        hi: 'नेहरू रिपोर्ट (28 अगस्त 1928): भारत सचिव लॉर्ड बर्कनहेड की चुनौती पर पं. मोतीलाल नेहरू की अध्यक्षता में 9 सदस्यीय समिति द्वारा तैयार "भारत का पहला ब्लूप्रिंट"। प्रमुख मांगें: भारत को अधिराज्य (Dominion Status), 19 मौलिक अधिकार, केंद्र में द्विसदनीय पूर्ण उत्तरदायी संसद, पृथक निर्वाचन की जगह संयुक्त निर्वाचन तथा अवशिष्ट शक्तियां केंद्र को।',
        en: 'Nehru Report (1928): Chaired by Motilal Nehru. Demanded Dominion Status, 19 Fundamental Rights, adult suffrage, joint electorates, and residuary powers to the Centre.'
      },
      {
        hi: 'जिन्ना की 14 सूत्रीय मांगें (मार्च 1929): नेहरू रिपोर्ट के विरोध में मोहम्मद अली जिन्ना ने पृथक निर्वाचन और केंद्रीय असेंबली में मुसलमानों हेतु 1/3 सीटों की मांग रखी।',
        en: 'Jinnah’s 14 Points (1929): Countered Nehru Report demanding separate electorates, 1/3 Muslim representation in central legislature, and residuary powers to provinces.'
      },
      {
        hi: 'कम्यूनल अवार्ड (16 अगस्त 1932) व पूना पैक्ट (24 सितंबर 1932): ब्रिटिश पीएम रैमसे मैकडोनाल्ड ने दलितों को पृथक निर्वाचक दिया। गांधीजी के यरवदा जेल आमरण अनशन के बाद डॉ. बी.आर. अंबेडकर और गांधीजी के प्रतिनिधियों के बीच पूना पैक्ट हुआ; पृथक निर्वाचन समाप्त कर केंद्रीय असेंबली में दलितों हेतु 18% तथा प्रांतीय विधानमंडलों में 71 से बढ़ाकर 147 आरक्षित सीटें दी गईं।',
        en: 'Communal Award & Poona Pact (1932): Ramsay MacDonald’s separate electorates for Depressed Classes was replaced by the Poona Pact between Ambedkar and Gandhi, abandoning separate electorates in return for 147 reserved provincial seats (up from 71).'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: साइमन ने सात गोरे भेजे, मोती ने 19 अधिकार मांगे, पूना में बाबा-बापू का 147 पर समझौता हुआ',
      en: 'Mnemonic: Simon (7 all-white members), Nehru Report (19 Fundamental Rights), Poona Pact (147 reserved seats)'
    }
  },
  {
    id: 'cabinet-mission-1946',
    year: 1946,
    title: {
      hi: 'कैबिनेट मिशन योजना - 1946 (Cabinet Mission Plan, 1946)',
      en: 'The Cabinet Mission Plan of 1946'
    },
    background: {
      hi: 'द्वितीय विश्व युद्ध के बाद ब्रिटेन में लेबर पार्टी की सरकार बनी और पीएम क्लीमेंट एटली ने 15 मार्च 1946 को भारतीयों के आत्मनिर्णय और स्वतंत्रता के अधिकार को मान्यता दी। 24 मार्च 1946 को ब्रिटिश कैबिनेट के 3 वरिष्ठ मंत्रियों का दल दिल्ली पहुंचा।',
      en: 'Following WWII, British PM Clement Attlee announced on 15 March 1946 that India had the right to self-determination. A high-powered 3-member mission arrived in Delhi on 24 March 1946.'
    },
    objectives: [
      {
        hi: 'भारतीय संविधान सभा का गठन करना तथा अंतरिम सरकार की स्थापना सुनिश्चित करना।',
        en: 'Formulate machinery for Constituent Assembly and establish an interim executive government.'
      }
    ],
    provisions: [
      {
        hi: 'तीन सदस्यीय कैबिनेट मिशन: 1. लॉर्ड पैथिक लॉरेंस (भारत सचिव - अध्यक्ष), 2. सर स्टेफोर्ड क्रिप्स (व्यापार बोर्ड अध्यक्ष), 3. ए.वी. अलेक्जेंडर (नौसेना प्रमुख)। (ट्रिक: काल - CAL / K-A-L: क्रिप्स, अलेक्जेंडर, लॉरेंस)।',
        en: '3-Member Mission: Lord Pethick-Lawrence (Chairman), Sir Stafford Cripps, and A.V. Alexander.'
      },
      {
        hi: 'संविधान सभा की कुल 389 सीटें निर्धारित की गईं: 292 ब्रिटिश प्रांतों से, 93 देसी रियासतों से, और 4 चीफ कमिश्नरी क्षेत्रों से (दिल्ली, अजमेर-मेरवाड़ा, कुर्ग, ब्रिटिश बलूचिस्तान - ट्रिक: ABCD)। प्रति 10 लाख की जनसंख्या पर 1 सीट का अनुपात रखा गया।',
        en: '389 Total Seats: 292 from Provinces, 93 from Princely States, and 4 from Chief Commissioner provinces (Delhi, Ajmer-Merwara, Coorg, British Baluchistan). Ratio: 1 seat per 1 million population.'
      },
      {
        hi: 'अप्रत्यक्ष निर्वाचन: प्रांतीय विधानसभाओं के सदस्यों द्वारा एकल संक्रमणीय मत प्रणाली के माध्यम से आनुपातिक प्रतिनिधित्व द्वारा अप्रत्यक्ष चुनाव हुआ। रियासतों के सदस्य राजाओं द्वारा मनोनीत किए गए।',
        en: 'Indirect election by provincial legislative assemblies using proportional representation by single transferable vote.'
      },
      {
        hi: 'मुस्लिम लीग की अलग पाकिस्तान की मांग को कैबिनेट मिशन ने स्पष्ट रूप से खारिज कर दिया।',
        en: 'Categorically rejected the Muslim League’s demand for a sovereign separate State of Pakistan.'
      },
      {
        hi: 'अंतरिम सरकार का गठन: 2 सितंबर 1946 को पं. जवाहरलाल नेहरू के नेतृत्व में 14 सदस्यीय अंतरिम मंत्रिमंडल ने शपथ ली (26 अक्टूबर 1946 को मुस्लिम लीग के 5 सदस्य भी शामिल हुए जिनमें लियाकत अली वित्त मंत्री बने)।',
        en: 'Interim Government sworn in on 2 Sept 1946 under Nehru (Muslim League joined on 26 Oct 1946 with Liaquat Ali Khan as Finance Minister).'
      }
    ],
    trickMnemonic: {
      hi: 'ट्रिक: मिशन आया काल (CAL - Cripps, Alexander, Lawrence) बनके, 389 सीटें बांटी ABCD (Ajmer, Baluchistan, Coorg, Delhi) कमिश्नरी में',
      en: 'Mnemonic: CAL (Cripps, Alexander, Lawrence) & ABCD Chief Commissioner Provinces'
    }
  },
  {
    id: 'sources-of-constitution',
    year: 1950,
    title: {
      hi: 'भारतीय संविधान के विदेशी स्रोत एवं प्रभाव (Sources of the Constitution)',
      en: 'Major Sources of the Indian Constitution'
    },
    background: {
      hi: 'डॉ. बी.आर. अंबेडकर एवं प्रारूप समिति ने लगभग 60 देशों के संविधानों का गहन अध्ययन कर भारतीय परिस्थितियों के अनुरूप सर्वोत्तम उपबंधों का समावेश किया। डॉ. अंबेडकर ने कहा था: "संविधान निर्माण में दुनिया के सभी ज्ञात संविधानों को छाना गया है।"',
      en: 'The Drafting Committee under Dr. B.R. Ambedkar scrutinized around 60 global constitutions to distill the finest constitutional features suited for India.'
    },
    objectives: [
      {
        hi: 'संसदीय लोकतंत्र, विधि का शासन, मौलिक अधिकार और संघवाद का संतुलित समन्वय करना।',
        en: 'Synthesize parliamentary democracy, rule of law, fundamental rights, and federalism.'
      }
    ],
    provisions: [
      {
        hi: 'भारत शासन अधिनियम 1935 (सबसे बड़ा स्रोत - 75% सामग्री / 200+ अनुच्छेद): संघीय तंत्र, राज्यपाल का कार्यालय, न्यायपालिका का ढांचा, लोक सेवा आयोग, आपातकालीन प्रशासनिक उपबंध और 3 विधायी सूचियां।',
        en: 'Government of India Act 1935 (Largest source, ~75% content): Federal scheme, Office of Governor, Judiciary structure, PSCs, Emergency administrative details, 3 Legislative Lists.'
      },
      {
        hi: 'ब्रिटेन (UK): संसदीय शासन प्रणाली, विधि का शासन (Rule of Law - A.V. Dicey), एकल नागरिकता, द्विसदनीय विधायिका, विधायी प्रक्रिया, मंत्रिमंडलीय प्रणाली, परमाधिकार रिटें (Writs), संसदीय विशेषाधिकार। (ट्रिक: एक विकास बर्तन - एकल नागरिकता, विधि का शासन, कानून निर्माण, संसदीय व्यवस्था, द्विसदन)।',
        en: 'United Kingdom: Parliamentary system, Rule of Law, Single Citizenship, Bicameralism, Legislative procedure, Cabinet system, Prerogative Writs, Parliamentary privileges.'
      },
      {
        hi: 'संयुक्त राज्य अमेरिका (USA): उद्देशिका/प्रस्तावना का विचार, मौलिक अधिकार (भाग 3), स्वतंत्र न्यायपालिका, न्यायिक पुनरावलोकन (Judicial Review), राष्ट्रपति पर महाभियोग (Art 61), उपराष्ट्रपति का पद, सुप्रीम कोर्ट व हाई कोर्ट के न्यायाधीशों को पद से हटाने की विधि। (ट्रिक: अन्याय की पुनः उपमा लो - अधिकार, न्यायपालिका, पुनरावलोकन, उपराष्ट्रपति, महाभियोग)।',
        en: 'United States: Preamble idea, Fundamental Rights (Part III), Judicial Independence, Judicial Review, Impeachment of President (Art 61), Vice-President office, Removal of SC/HC Judges.'
      },
      {
        hi: 'आयरलैंड: राज्य के नीति निदेशक तत्व (DPSP - भाग 4), राष्ट्रपति की निर्वाचन पद्धति (Art 55), राज्यसभा में साहित्य, कला, विज्ञान व समाज सेवा के 12 सदस्यों का मनोनयन। (ट्रिक: आयरलैंड की नीति से 12 सदस्य आए)।',
        en: 'Ireland: Directive Principles of State Policy (Part IV), Method of Presidential Election (Art 55), Nomination of 12 members to Rajya Sabha by President.'
      },
      {
        hi: 'कनाडा: सशक्त केंद्र के साथ संघीय व्यवस्था, अवशिष्ट शक्तियां केंद्र के पास (Art 248), राज्यपालों की केंद्र द्वारा नियुक्ति, सुप्रीम कोर्ट का परामर्शदात्री क्षेत्राधिकार (Art 143)।',
        en: 'Canada: Federation with strong Centre, Residuary powers with Centre (Art 248), Appointment of State Governors by Centre, Advisory jurisdiction of Supreme Court (Art 143).'
      },
      {
        hi: 'ऑस्ट्रेलिया: समवर्ती सूची (Concurrent List), प्रस्तावना की भाषा, संसद के दोनों सदनों की संयुक्त बैठक (Art 108), व्यापार, वाणिज्य और समागम की स्वतंत्रता (Art 301)।',
        en: 'Australia: Concurrent List, Language of Preamble, Joint sitting of Parliament (Art 108), Freedom of trade and commerce.'
      },
      {
        hi: 'जर्मनी (वाइमर संविधान): आपातकाल के समय राष्ट्रपति की मौलिक अधिकारों के निलंबन संबंधी शक्तियां (Art 358 व 359)।',
        en: 'Germany (Weimar): Suspension of Fundamental Rights during Emergency (Arts 358 & 359).'
      },
      {
        hi: 'सोवियत संघ / रूस (USSR): मौलिक कर्तव्य (Art 51A - स्वर्ण सिंह समिति), प्रस्तावना में सामाजिक, आर्थिक और राजनीतिक न्याय के आदर्श, पंचवर्षीय योजनाएं।',
        en: 'Soviet Union (USSR): Fundamental Duties (Art 51A), Ideals of Justice (social, economic, political) in Preamble.'
      },
      {
        hi: 'दक्षिण अफ्रीका: संविधान संशोधन की प्रक्रिया (Art 368), राज्यसभा के सदस्यों का निर्वाचन। (ट्रिक: आज दक्षिण अफ्रीका से संशोधन करा लो)।',
        en: 'South Africa: Procedure for Constitutional Amendment (Art 368), Election of Rajya Sabha members.'
      },
      {
        hi: 'फ्रांस: गणतंत्रात्मक व्यवस्था (Republic), प्रस्तावना में स्वतंत्रता, समानता और बंधुत्व (Liberty, Equality, Fraternity) के आदर्श।',
        en: 'France: Republican character, Ideals of Liberty, Equality, and Fraternity in Preamble.'
      },
      {
        hi: 'जापान: विधि द्वारा स्थापित प्रक्रिया (Procedure Established by Law - Art 21)।',
        en: 'Japan: Procedure Established by Law (Article 21).'
      }
    ],
    trickMnemonic: {
      hi: 'मास्टर ट्रिक: "अकबर आज फिर दक्षिण अफ्रीका आजा" -> अ(अमेरिका), क(कनाडा), ब(ब्रिटेन), र(रूस), आ(आयरलैंड), ज(जर्मनी), फि(फ्रांस), दक्षिण अफ्रीका, आ(ऑस्ट्रेलिया), जा(जापान)',
      en: 'Master Mnemonic: AKBAR AAJ PHIR DAKSHIN AFRICA AAJA -> America, Canada, Britain, Russia, Ireland, Germany, France, South Africa, Australia, Japan'
    }
  }
];
