import fs from 'fs';
import path from 'path';
import { CHAPTERS_INDEX } from '../src/data/chaptersIndex';
import { HISTORICAL_ACTS_DATA } from '../src/data/historicalActsData';
import { SCHEDULES_DATA } from '../src/data/schedulesData';
import { MAGIC_89_PAIRS } from '../src/data/magic89Data';
import { POLITY_TERMS_DATA } from '../src/data/polityTermsData';
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
  <title>GS By Durgesh Pandey Sir • Official Master Polity Compendium</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* =========================================================
       EXPLICIT PRINT & SCREEN STYLING: DEEP NAVY & GOLD AESTHETIC
       ========================================================= */
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #0a192f;
      color: #ffffff;
      font-family: 'Noto Sans Devanagari', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9.5pt;
      line-height: 1.48;
      margin: 0;
      padding: 16px;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .master-container,
    .booklet-container {
      max-width: 880px;
      margin: 0 auto;
      background: #0a192f;
      color: #ffffff;
    }

    /* Print action utility toolbar (Hidden on actual print) */
    .utility-toolbar,
    .action-buttons {
      position: sticky;
      top: 10px;
      z-index: 1000;
      background: #0f2744;
      color: #ffffff;
      padding: 12px 18px;
      border-radius: 12px;
      margin-bottom: 24px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      border: 1.5px solid #f59e0b;
    }

    .utility-title {
      font-family: 'Cinzel', serif;
      font-weight: 800;
      font-size: 13pt;
      color: #fbbf24;
    }

    .utility-subtitle {
      font-size: 8.5pt;
      color: #cbd5e1;
      margin-top: 2px;
    }

    .btn-print {
      background: #f59e0b;
      color: #020617;
      border: none;
      font-weight: 800;
      font-size: 11pt;
      padding: 10px 22px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
      transition: all 0.2s ease;
    }
    .btn-print:hover {
      background: #d97706;
      transform: translateY(-1px);
    }

    .btn-close {
      background: transparent;
      color: #cbd5e1;
      border: 1px solid #475569;
      font-size: 10pt;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn-close:hover {
      background: #1e293b;
      color: #ffffff;
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
      background: rgba(245, 158, 11, 0.1);
    }

    .booklet-title {
      font-family: 'Cinzel', serif;
      font-size: 22pt;
      font-weight: 800;
      margin: 6px 0;
      color: #fbbf24;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .booklet-subtitle {
      font-size: 12pt;
      font-weight: 700;
      color: #f1f5f9;
    }

    .section-banner {
      background-color: #0f2744;
      border: 1.5px solid #f59e0b;
      color: #fbbf24;
      padding: 9px 14px;
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      margin: 26px 0 14px 0;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .card,
    .card-item {
      border: 1px solid #1e3a5f;
      border-radius: 6px;
      padding: 10px 12px;
      margin-bottom: 12px;
      background: #11243e;
      color: #ffffff;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }

    .card-title-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #1e3a5f;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }

    .card-title {
      font-size: 11pt;
      font-weight: 800;
      color: #fbbf24;
    }

    .badge-art {
      background: #0f2744;
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
      background: rgba(245, 158, 11, 0.18);
      color: #fde68a;
      font-size: 7.5pt;
      font-weight: 800;
      padding: 2px 6px;
      text-transform: uppercase;
      white-space: nowrap;
      border-radius: 3px;
    }

    .text-hindi {
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 5px;
      font-size: 9.5pt;
    }

    .text-english {
      font-size: 8.5pt;
      color: #cbd5e1;
      border-top: 1px dashed #224168;
      padding-top: 4px;
      margin-top: 4px;
      font-style: normal;
    }

    /* Enhanced Data Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 8.5pt;
      background: #0b1d36;
      border: 1.5px solid #1e3a5f;
    }
    th, td {
      border: 1px solid #1e3a5f;
      padding: 6px 8px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #0f2744;
      font-weight: 800;
      color: #fbbf24;
      text-transform: uppercase;
      font-size: 8.5pt;
      letter-spacing: 0.5px;
    }
    td {
      background: #11243e;
      color: #ffffff;
    }
    tr:nth-child(even) td {
      background: #0c1c33;
    }

    .part-header {
      background: #0f2744;
      border-left: 5px solid #f59e0b;
      color: #fbbf24;
      padding: 7px 10px;
      font-size: 10.5pt;
      font-weight: 800;
      margin: 18px 0 10px 0;
      border-radius: 0 4px 4px 0;
    }

    .deep-dive-box {
      background: #0f2744;
      border: 1px solid #f59e0b;
      border-radius: 6px;
      padding: 8px 12px;
      margin: 8px 0;
      color: #fde68a;
      font-size: 9pt;
    }

    .option-box {
      padding: 4px 8px;
      border-radius: 4px;
      margin-bottom: 2px;
      font-size: 8.5pt;
    }
    .option-correct {
      background: rgba(245, 158, 11, 0.22);
      border: 1px solid #f59e0b;
      color: #fbbf24;
      font-weight: bold;
    }
    .option-normal {
      background: #0c1c33;
      border: 1px solid #1e3a5f;
      color: #cbd5e1;
    }

    /* =========================================================
       EXPLICIT CSS PRINT COMMANDS
       ========================================================= */
    @media print {
      /* Force every accordion panel and notes container to be wide open */
      .accordion-content, .notes-wrapper, .chapter-section, .quiz-questions {
        display: block !important;
        height: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
        overflow: visible !important;
      }

      /* Also force all drawers, bodies and details open */
      .accordion-body, .panel-hidden, [data-accordion-content], .answer-block, details > *:not(summary) {
        display: block !important;
        height: auto !important;
        max-height: none !important;
        visibility: visible !important;
        opacity: 1 !important;
        overflow: visible !important;
      }
      
      /* Hide the web website UI elements so the PDF looks like a clean book */
      navbar, .search-box-container, .floating-toggle-btn, .action-buttons, footer {
        display: none !important;
      }

      .utility-toolbar, .no-print, .floating-btn {
        display: none !important;
      }

      /* Force the browser to render the deep navy backgrounds and gold colors */
      body, html, .master-container {
        background-color: #0a192f !important;
        color: #ffffff !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* Prevent headers, questions, and cards from awkwardly cutting in half across pages */
      .card, h2, h3, tr {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      .card-item, .avoid-break {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      .page-break {
        page-break-before: always !important;
        break-before: page !important;
      }

      body {
        padding: 0;
        margin: 0;
      }
    }
  </style>
</head>
<body>

<div class="master-container booklet-container">
  <!-- PRINT / DOWNLOAD UTILITY TOOLBAR (Screen Only) -->
  <div class="utility-toolbar no-print action-buttons">
    <div>
      <div class="utility-title">GS By Durgesh Pandey Sir • Master Polity Compendium</div>
      <div class="utility-subtitle">सम्पूर्ण अध्ययन सामग्री सेव करें • सभी 395+ अनुच्छेद, 18 ऐतिहासिक अधिनियम, 12 अनुसूचियां, 30 मैजिक जोड़े, 45 लैंडमार्क वाद, 22 शब्दावली व 182 प्रश्न बैंक</div>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button id="btn-download-pdf" class="btn-print" onclick="downloadPolityPDF()">
        🖨️ Download / Save PDF
      </button>
      <button class="btn-close" onclick="window.close()">✕ Close</button>
    </div>
  </div>

  <!-- BOOKLET COVER / HEADER -->
  <header class="booklet-header avoid-break">
    <div class="booklet-tag">OFFICIAL COMPLETE CLASSROOM COMPENDIUM • SAVE MASTER REPOSITORY</div>
    <h1 class="booklet-title">GS By Durgesh Pandey Sir</h1>
    <div class="booklet-subtitle">
      भारतीय संविधान एवं राजव्यवस्था • सम्पूर्ण प्रामाणिक पाठ्यक्रम
    </div>
    <p style="font-size: 8.5pt; color: #cbd5e1; max-width: 740px; margin: 10px auto 0 auto; line-height: 1.45;">
      विशेष रूप से उत्तर प्रदेश उप-निरीक्षक (UPSI), यूपी पुलिस कांस्टेबल, SSC CGL/CPO, RO/ARO एवं राज्य लोक सेवा आयोग परीक्षाओं हेतु संकलित। इस प्रमाणित दस्तावेज में 23 अध्यायों की विषय सूची, सभी 395 अनुच्छेद (भाग 1 से 22), 1773 से 1947 तक 18 ऐतिहासिक अधिनियम, सभी 12 अनुसूचियां, केंद्र व राज्य के 30 तुलनात्मक मैजिक 89/90 जोड़े, सुप्रीम कोर्ट के 45 लैंडमार्क वाद, परीक्षा शब्दावली तथा 182 आधिकारिक विगत वर्ष प्रश्न (PYQ) विस्तृत द्विभाषी व्याख्या सहित पूर्ण रूप से शामिल हैं।
    </p>
    <div style="display: flex; justify-content: center; gap: 12px; margin-top: 12px; font-size: 8.5pt; font-weight: bold; color: #fbbf24; flex-wrap: wrap;">
      <span>📖 395+ अनुच्छेद (भाग 1-22)</span> •
      <span>🏛️ 18 ऐतिहासिक अधिनियम</span> •
      <span>📋 12 अनुसूचियां</span> •
      <span>⚡ 30 मैजिक 89/90 जोड़े</span> •
      <span>⚖️ 45 लैंडमार्क वाद</span> •
      <span>📚 22 शब्दावली व 2024 कानून</span> •
      <span>📝 182 विगत प्रश्न बैंक</span>
    </div>
  </header>

  <!-- SECTION 1: MASTER TABLE OF CONTENTS (23 CHAPTERS) -->
  <section class="avoid-break" style="margin-bottom: 24px;">
    <div class="section-banner">
      <span>1. अध्याय अनुक्रमणिका एवं पृष्ठ विवरण (Master Table of Contents)</span>
      <span style="font-size: 8.5pt;">23 Complete Chapters</span>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 7%; text-align: center;">क्र.सं.</th>
          <th style="width: 32%;">अध्याय का नाम (Chapter Title)</th>
          <th style="width: 47%;">विस्तृत विषय-वस्तु (Coverage & Key Topics)</th>
          <th style="width: 14%; text-align: center;">पृष्ठ संख्या</th>
        </tr>
      </thead>
      <tbody>`;

  CHAPTERS_INDEX.forEach((ch, idx) => {
    const chNum = ch.chapterNumber || ch.number || idx + 1;
    html += `
        <tr>
          <td style="text-align: center; font-weight: bold; color: #fbbf24;">${chNum}</td>
          <td><strong style="color: #ffffff;">${escapeHtml(ch.title.hi)}</strong><br/><span style="font-size: 7.5pt; color: #94a3b8;">${escapeHtml(ch.title.en)}</span></td>
          <td>${escapeHtml(ch.description.hi)}</td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fde68a;">${escapeHtml(ch.pageRange)}</td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>
  </section>

  <!-- SECTION 2: CONSTITUTIONAL ARTICLES 1 TO 395 (COMPLETE PARTS 1 TO 22) -->
  <section class="page-break">
    <div class="section-banner">
      <span>2. भारतीय संविधान के सभी अनुच्छेद (Articles 1 to 395 Complete)</span>
      <span style="font-size: 8.5pt;">Parts I to XXII • High-Yield Notes</span>
    </div>`;

  articlesByPart.forEach((articles, partName) => {
    html += `
    <div class="part-header avoid-break">
      ${escapeHtml(partName)}
    </div>`;

    articles.forEach((art) => {
      const artNum = art.articleNumber || art.number;
      html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title"><span class="badge-art">अनुच्छेद ${escapeHtml(artNum)}</span> ${escapeHtml(art.title.hi)}</span>
        ${art.isImportant ? '<span class="badge-high-yield">★ High Yield</span>' : ''}
      </div>
      <div class="text-hindi">
        ${escapeHtml(art.description.hi)}
      </div>
      <div class="text-english">
        <strong>${escapeHtml(art.title.en)}:</strong> ${escapeHtml(art.description.en)}
      </div>`;

      if (art.clauseDetails && art.clauseDetails.length > 0) {
        html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1e3a5f;">
        <strong style="font-size: 8.5pt; color: #fbbf24;">उपकंडीय विश्लेषण (Clauses & Sub-clauses):</strong>
        <div style="margin-top: 4px; font-size: 8.5pt;">`;
        art.clauseDetails.forEach((c) => {
          html += `
          <div style="padding-left: 8px; border-left: 2px solid #f59e0b; margin-bottom: 4px; background: rgba(15, 39, 68, 0.4); padding: 3px 6px; border-radius: 0 4px 4px 0;">
            • <strong style="color: #ffffff;">${escapeHtml(c.hi)}</strong>
            ${c.en ? `<div style="font-size: 7.5pt; color: #94a3b8; padding-left: 6px;">${escapeHtml(c.en)}</div>` : ''}
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

  <!-- SECTION 3: 18 HISTORICAL ACTS (1773 - 1947) WITH TABLES & LEGAL DEEP-DIVES -->
  <section class="page-break">
    <div class="section-banner">
      <span>3. भारत का संवैधानिक विकास (Historical Acts 1773 - 1947)</span>
      <span style="font-size: 8.5pt;">Pages 14–31 • 18 Major Acts & Legal Deep Dives</span>
    </div>

    <!-- Comparative Overview Table of British Legal Acts -->
    <div class="avoid-break" style="margin-bottom: 16px;">
      <h3 style="color: #fbbf24; font-size: 10.5pt; margin-bottom: 6px;">📊 ब्रिटिश कालीन संवैधानिक सुधार: कालानुक्रमिक तुलनात्मक सारणी</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 12%; text-align: center;">अधिनियम / वर्ष</th>
            <th style="width: 25%;">प्रमुख संवैधानिक पद / ढांचा</th>
            <th style="width: 38%;">सर्वोच्च विधायी एवं प्रशासनिक बदलाव</th>
            <th style="width: 25%;">भारतीय संविधान पर प्रभाव</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1773 Regulating</td>
            <td>गवर्नर जनरल (बंगाल) - वॉरेन हेस्टिंग्स</td>
            <td>कलकत्ता में सुप्रीम कोर्ट (1774), 4 सदस्यीय परिषद</td>
            <td>केंद्रीकृत न्यायपालिका की नींव</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1784 Pitt's India</td>
            <td>बोर्ड ऑफ कंट्रोल (6 सदस्य) + कोर्ट ऑफ डायरेक्टर्स</td>
            <td>द्वैध शासन (राजनीतिक व व्यापारिक कार्यों का पृथक्करण)</td>
            <td>संसदीय नियंत्रण का आरंभ</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1813 Charter</td>
            <td>कंपनी का व्यापारिक एकाधिकार समाप्त (चाय व चीन छोड़कर)</td>
            <td>शिक्षा पर ₹1 लाख वार्षिक व्यय, ईसाई मिशनरियों को अनुमति</td>
            <td>आधुनिक शिक्षा नीति का आरंभ</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1833 Charter</td>
            <td>भारत का गवर्नर जनरल - लॉर्ड विलियम बेंटिक</td>
            <td>पूर्ण व्यापारिक समाप्ति, मैकाले की अध्यक्षता में प्रथम विधि आयोग</td>
            <td>विधि का संहिताकरण (IPC की नींव)</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1853 Charter</td>
            <td>कार्यपालिका व विधान परिषद का पृथक्करण</td>
            <td>सिविल सेवाओं हेतु खुली प्रतियोगिता (मैकाले समिति 1854)</td>
            <td>संसदीय व्यवस्था की पहली झलक</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1858 GoI Act</td>
            <td>भारत सचिव (Secretary of State) + वायसराय (लॉर्ड कैनिंग)</td>
            <td>कंपनी शासन की समाप्ति, क्राउन का प्रत्यक्ष शासन</td>
            <td>उत्तरदायी शासन की दिशा में कदम</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1861 Councils</td>
            <td>वायसराय को अध्यादेश जारी करने की शक्ति (Ordinance)</td>
            <td>कैनिंग की पोर्टफोलियो (विभागीय) प्रणाली, विकेंद्रीकरण</td>
            <td>अनुच्छेद 123 (अध्यादेश शक्ति)</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1892 Councils</td>
            <td>अप्रत्यक्ष निर्वाचन पद्धति की शुरुआत</td>
            <td>बजट पर बहस व प्रश्न पूछने का सीमित अधिकार (पूरक प्रश्न नहीं)</td>
            <td>संसदीय वित्तीय नियंत्रण</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1909 Morley-Minto</td>
            <td>मुसलमानों हेतु पृथक साम्प्रदायिक निर्वाचन (Separate Electorate)</td>
            <td>सत्येंद्र प्रसाद सिन्हा वायसराय की कार्यपालिका परिषद के प्रथम भारतीय</td>
            <td>साम्प्रदायिक विभाजन का बीजारोपण</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1919 Mont-Ford</td>
            <td>प्रांतों में द्वैध शासन (आरक्षित व हस्तांतरित विषय)</td>
            <td>केंद्र में द्विसदनीय विधायिका, महिलाओं को सीमित मताधिकार</td>
            <td>लोक सेवा आयोग गठन (1926)</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1935 GoI Act</td>
            <td>अखिल भारतीय संघ, प्रांतीय स्वायत्तता, केंद्र में द्वैध शासन</td>
            <td>संघीय न्यायालय (1937), RBI (1935), 3 सूचियां (संघ, प्रांतीय, समवर्ती)</td>
            <td>संविधान का मुख्य स्रोत (लगभग 70% ढांचा)</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #fbbf24; text-align: center;">1947 Independence</td>
            <td>भारत और पाकिस्तान दो संप्रभु राष्ट्र (Dominions)</td>
            <td>वायसराय पद समाप्त, संविधान सभाएं पूर्ण संप्रभु विधायिका बनीं</td>
            <td>पूर्ण संप्रभुता एवं आजादी</td>
          </tr>
        </tbody>
      </table>
    </div>`;

  HISTORICAL_ACTS_DATA.forEach((act) => {
    html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title"><span class="badge-art">${escapeHtml(String(act.year))}</span> ${escapeHtml(act.title.hi)}</span>
        <span class="badge-high-yield">Historical Act</span>
      </div>
      <div class="text-hindi">
        <strong>ऐतिहासिक पृष्ठभूमि:</strong> ${escapeHtml(act.background.hi)}
      </div>
      <div class="text-english">
        <strong>Context:</strong> ${escapeHtml(act.background.en)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1e3a5f;">
        <strong style="font-size: 9pt; color: #fbbf24;">प्रमुख संवैधानिक प्रावधान एवं विश्लेषण:</strong>
        <ul style="margin: 4px 0 4px 18px; padding: 0; font-size: 9pt;">`;

    act.provisions.forEach((prov) => {
      html += `
          <li style="margin-bottom: 4px; color: #ffffff;">
            <strong>${escapeHtml(prov.hi)}</strong>
            ${prov.en ? `<div style="font-size: 8pt; color: #94a3b8;">${escapeHtml(prov.en)}</div>` : ''}
          </li>`;
    });

    html += `
        </ul>
      </div>`;

    if (act.objectives && act.objectives.length > 0) {
      html += `
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid #1e3a5f; font-size: 8.5pt;">
        <strong style="color: #fbbf24;">उद्देश्य एवं परीक्षा बिंदु:</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 6px; margin-top: 4px;">`;
      act.objectives.forEach((obj) => {
        html += `
          <div style="background: #0f2744; border: 1px solid #1e3a5f; padding: 5px 8px; border-radius: 4px; color: #e2e8f0;">
            ✓ ${escapeHtml(obj.hi)}
          </div>`;
      });
      html += `
        </div>
      </div>`;
    }

    if (act.trickMnemonic) {
      html += `
      <div class="deep-dive-box">
        <strong>⚡ याद रखने की जादुई ट्रिक:</strong> ${escapeHtml(act.trickMnemonic.hi)}
        ${act.trickMnemonic.en ? `<div style="font-size: 8pt; color: #cbd5e1; font-style: italic; margin-top: 2px;">${escapeHtml(act.trickMnemonic.en)}</div>` : ''}
      </div>`;
    }

    html += `
    </div>`;
  });

  html += `
  </section>

  <!-- SECTION 4: 12 SCHEDULES OF THE CONSTITUTION -->
  <section class="page-break">
    <div class="section-banner">
      <span>4. संविधान की सभी 12 अनुसूचियां (12 Schedules of Constitution)</span>
      <span style="font-size: 8.5pt;">Pages 32–37 • Complete Schedule Analysis</span>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 10%; text-align: center;">अनुसूची</th>
          <th style="width: 25%;">विषय / प्रासंगिक शीर्षक</th>
          <th style="width: 50%;">विस्तृत परीक्षा बिंदु एवं संवैधानिक प्रावधान</th>
          <th style="width: 15%; text-align: center;">संबंधित अनुच्छेद</th>
        </tr>
      </thead>
      <tbody>`;

  SCHEDULES_DATA.forEach((sch) => {
    let detailsHtml = escapeHtml(sch.description.hi);
    if (sch.details && sch.details.length > 0) {
      detailsHtml += '<div style="margin-top: 4px; border-top: 1px dashed #224168; padding-top: 4px;">';
      sch.details.forEach((d) => {
        detailsHtml += `<div style="margin-bottom: 2px; color: #cbd5e1;">• ${escapeHtml(d.hi)}</div>`;
      });
      detailsHtml += '</div>';
    }

    html += `
        <tr>
          <td style="font-weight: bold; text-align: center; font-family: monospace; color: #fbbf24;">${sch.number}th</td>
          <td><strong style="color: #ffffff;">${escapeHtml(sch.title.hi)}</strong><br/><span style="font-size: 7.5pt; color: #94a3b8;">${escapeHtml(sch.title.en)}</span></td>
          <td>${detailsHtml}</td>
          <td style="font-family: monospace; text-align: center; font-size: 8pt; color: #fde68a;">${sch.relatedArticles ? escapeHtml(sch.relatedArticles.join(', ')) : ''}</td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>
  </section>

  <!-- SECTION 5: MAGIC 89 & 90 RULES (30 COMPARATIVE PAIRS FULLY MAPPED) -->
  <section class="page-break">
    <div class="section-banner">
      <span>5. जादुई ट्रिक: 89 एवं 90 का नियम (Magic 89/90 Comparative Pairs)</span>
      <span style="font-size: 8.5pt;">30 Comparative Pairs Fully Mapped</span>
    </div>

    <div class="deep-dive-box avoid-break">
      <strong style="font-size: 9.5pt;">⚡ जादुई गणितीय सूत्र (Golden Rule):</strong>
      <div style="margin-top: 4px; line-height: 1.5; color: #ffffff;">
        • <strong>नियम +89:</strong> केंद्र के अनुच्छेद <strong>72 से 111</strong> में <strong>89 जोड़ने</strong> पर राज्य के समकक्ष अनुच्छेद प्राप्त होते हैं (जैसे 72 + 89 = 161 क्षमादान; 76 + 89 = 165 महाधिवक्ता)।<br/>
        • <strong>नियम +90:</strong> केंद्र के अनुच्छेद <strong>112 से 124</strong> में <strong>90 जोड़ने</strong> पर राज्य के समकक्ष अनुच्छेद प्राप्त होते हैं (जैसे 112 + 90 = 202 बजट; 123 + 90 = 213 अध्यादेश)।
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 12%; text-align: center;">केंद्र अनुच्छेद</th>
          <th style="width: 33%;">केंद्रीय संस्था / पदाधिकारी / प्रावधान</th>
          <th style="width: 8%; text-align: center;">सूत्र</th>
          <th style="width: 12%; text-align: center;">राज्य अनुच्छेद</th>
          <th style="width: 35%;">राज्यीय समकक्ष पद / संस्था / प्रावधान</th>
        </tr>
      </thead>
      <tbody>`;

  MAGIC_89_PAIRS.forEach((pair) => {
    const diff = pair.stateArticle - pair.centerArticle;
    html += `
        <tr>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">Art. ${pair.centerArticle}</td>
          <td><strong style="color: #ffffff;">${escapeHtml(pair.centerSubject.hi)}</strong><br/><span style="font-size: 7.5pt; color: #94a3b8;">${escapeHtml(pair.centerSubject.en)}</span></td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #f59e0b;">+${diff}</td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; color: #fbbf24;">Art. ${pair.stateArticle}</td>
          <td><strong style="color: #ffffff;">${escapeHtml(pair.stateSubject.hi)}</strong><br/><span style="font-size: 7.5pt; color: #94a3b8;">${escapeHtml(pair.stateSubject.en)}</span></td>
        </tr>`;
  });

  html += `
      </tbody>
    </table>
  </section>

  <!-- SECTION 6: 45 LANDMARK JUDICIAL CASES -->
  <section class="page-break">
    <div class="section-banner">
      <span>6. सुप्रीम कोर्ट के 45 ऐतिहासिक वाद (45 Landmark Judicial Cases)</span>
      <span style="font-size: 8.5pt;">Supreme Court Constitutional Rulings</span>
    </div>`;

  judicialCases.forEach((cs, idx) => {
    html += `
    <div class="card-item">
      <div class="card-title-row">
        <span class="card-title"><span class="badge-art">#${idx + 1}</span> ${escapeHtml(cs.caseName)} (${cs.year})</span>
        <span class="badge-high-yield">${escapeHtml(cs.court)}</span>
      </div>
      <div style="font-size: 9pt; margin-bottom: 5px;">
        <strong style="color: #fbbf24;">संवैधानिक विषय:</strong> ${escapeHtml(cs.subject.hi)} <span style="font-size: 8pt; color: #94a3b8;">(${escapeHtml(cs.subject.en)})</span>
      </div>
      <div class="text-hindi" style="background: #0f2744; border-left: 3px solid #f59e0b; padding: 7px 10px; border-radius: 4px;">
        <strong style="color: #fbbf24;">ऐतिहासिक अधिनिर्णय (Ruling Summary):</strong> ${escapeHtml(cs.rulingSummary.hi)}
        <div class="text-english" style="margin-top: 4px; padding-top: 4px;">${escapeHtml(cs.rulingSummary.en)}</div>
      </div>
      ${cs.constitutionalArticles && cs.constitutionalArticles.length > 0 ? `
      <div style="margin-top: 5px; font-size: 8pt; color: #94a3b8;">
        <strong style="color: #fbbf24;">संबद्ध अनुच्छेद:</strong> <span style="font-family: monospace; color: #fde68a;">${escapeHtml(cs.constitutionalArticles.join(', '))}</span>
      </div>` : ''}
    </div>`;
  });

  html += `
  </section>

  <!-- SECTION 7: POLITY TERMINOLOGY & NEW 2024 LAWS -->
  <section class="page-break">
    <div class="section-banner">
      <span>7. संवैधानिक व संसदीय शब्दावली एवं नए कानून 2024 (Polity Terminology)</span>
      <span style="font-size: 8.5pt;">Key Terms, BNS, BNSS, BSA 2024</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 10px;">`;

  POLITY_TERMS_DATA.forEach((term) => {
    html += `
      <div class="card-item" style="margin-bottom: 0;">
        <div class="card-title-row">
          <span class="card-title">${escapeHtml(term.hindiTerm)} (${escapeHtml(term.term)})</span>
        </div>
        <div class="text-hindi" style="font-size: 9pt;">
          <strong style="color: #fbbf24;">परिभाषा:</strong> ${escapeHtml(term.definition.hi)}
        </div>
        <div class="text-english" style="font-size: 8pt;">
          ${escapeHtml(term.definition.en)}
        </div>
        ${term.context ? `
        <div style="background: #0f2744; border: 1px solid #1e3a5f; padding: 4px 8px; font-size: 8pt; margin-top: 5px; border-radius: 3px; color: #cbd5e1;">
          <strong style="color: #fbbf24;">संवैधानिक संदर्भ:</strong> ${escapeHtml(term.context.hi)}
        </div>` : ''}
      </div>`;
  });

  html += `
    </div>
  </section>

  <!-- SECTION 8: COMPLETE 182 PRACTICE QUESTIONS BANK -->
  <section class="page-break">
    <div class="section-banner">
      <span>8. विविध प्रश्नावली - विगत वर्षों के 182 परीक्षा प्रश्न (Question Bank 182 PYQs)</span>
      <span style="font-size: 8.5pt;">Official PYQs with Bilingual Explanations</span>
    </div>`;

  questions182.forEach((q, idx) => {
    const qNum = q.questionNumber || idx + 1;
    html += `
    <div class="card-item">
      <div style="font-weight: bold; font-size: 9.5pt; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: baseline;">
        <span style="color: #ffffff;"><span style="color: #fbbf24;">प्र. ${qNum}.</span> ${escapeHtml(q.question.hi)}</span>
        <span style="font-size: 7.5pt; font-weight: normal; color: #fbbf24; margin-left: 8px; white-space: nowrap; border: 1px solid #f59e0b; padding: 1px 6px; border-radius: 3px; background: rgba(245, 158, 11, 0.15);">${escapeHtml(q.examTag)}</span>
      </div>
      <div style="font-size: 8pt; color: #94a3b8; margin-bottom: 6px;">
        ${escapeHtml(q.question.en)}
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 8.5pt; margin-bottom: 6px;">`;

    (['a', 'b', 'c', 'd'] as const).forEach((optKey) => {
      const isCorrect = q.correctAnswer === optKey;
      const opt = q.options[optKey];
      html += `
        <div class="option-box ${isCorrect ? 'option-correct' : 'option-normal'}">
          (${optKey}) ${escapeHtml(opt.hi)} ${isCorrect ? '✓' : ''}
        </div>`;
    });

    html += `
      </div>
      <div style="background: #0f2744; border-left: 3px solid #f59e0b; padding: 6px 10px; font-size: 8.5pt; border-radius: 0 4px 4px 0;">
        <strong style="color: #fbbf24;">उत्तर एवं व्याख्या:</strong> ${escapeHtml(q.explanation.hi)}
        ${q.explanation.en ? `<div style="font-size: 8pt; color: #94a3b8; margin-top: 3px; font-style: italic;">${escapeHtml(q.explanation.en)}</div>` : ''}
      </div>
    </div>`;
  });

  html += `
  </section>

  <!-- BOOKLET FOOTER -->
  <footer style="border-top: 2px solid #f59e0b; margin-top: 36px; padding-top: 14px; text-align: center; font-size: 9pt; color: #94a3b8;" class="avoid-break">
    <p style="font-weight: bold; color: #fbbf24; margin: 0; font-size: 10pt;">
      GS By Durgesh Pandey Sir • UPSI & State Police Official Master Polity Compendium
    </p>
    <p style="margin: 4px 0 0 0; color: #cbd5e1;">
      सम्पूर्ण प्रामाणिक पाठ्यक्रम • सफलता का एकमात्र सूत्र: निरंतर अभ्यास एवं प्रामाणिक अध्ययन।
    </p>
  </footer>
</div>

<script>
  function downloadPolityPDF() {
    window.print();
  }
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
