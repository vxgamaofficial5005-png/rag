/**
 * RAGNAROK: THE NEW WORLD — OFFICIAL PC / STEAM ACQUISITION PORTAL
 * Features:
 * 1. Automatic Browser Locale Detection & Persistent 5-Language i18n (EN, TH, ID, TW, CN)
 * 2. Interactive 7 Launch Classes Selector with Live Stats & Artwork Swap
 * 3. Media Fallback Guard (Graceful AAA Fantasy UI even if local assets/ are pending)
 * 4. Interactive World / 4-Season Weather Preview Toggle & Sticky Header HUD
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'ro_newworld_lang';

  /* ========================================================================
     1. OFFICIAL 5-LANGUAGE LOCALIZATION DATASET
     ======================================================================== */
  const translations = {
    en: {
      html_lang: 'en',
      hud_license: 'Official Gravity License',
      hud_free: 'Free-to-Play on Steam',
      hud_crossplay: 'Cross-Platform Sync',
      hud_server_status: 'Steam PC Client Ready • Global Launch',

      nav_world: 'World',
      nav_classes: '7 Classes',
      nav_reviews: 'Reviews',
      nav_howto: 'How to Play',
      nav_specs: 'PC Specs',
      nav_cta: 'Play on Steam',

      badge_license: 'The Brand New RO Sequel, Officially Licensed by Gravity',
      hero_headline: 'The First Seamless Open-World RO — Play Officially in HD on Steam!',
      hero_subheadline:
        "100% Authentic RO, 100% New Experience. Explore the vast world of RO's new chapter on PC through Steam with cross-platform connectivity.",
      cta_primary: 'Play Free on Steam — Start Your Adventure',
      hero_secondary_btn: '3-Step Login Guide',

      trust_free: 'Free-to-Play',
      trust_steam: 'Official Steam Release',
      trust_cross: 'Cross-Platform',

      hud_card_tag: 'STEAM PC EDITION',
      hud_card_title: 'Ready for First Login',
      hud_item1_title: 'Seamless Open World',
      hud_item1_sub: 'Zero loading screens across Midgard',
      hud_item2_title: '7 Launch Classes',
      hud_item2_sub: 'Classic builds & high-ASPD action',
      hud_item3_title: 'First Login Rewards',
      hud_item3_sub: 'Claim Novice gear at South Gate',
      steam_badge_sub: 'AVAILABLE NOW ON',
      steam_badge_free: 'FREE',

      pillars_eyebrow: 'NEXT-GEN MIDGARD EXPERIENCE',
      pillars_title: 'Why Ragnarok: The New World on Steam?',
      toggle_world: 'Open World',
      toggle_weather: '4-Season Weather',

      pillar1_tag: 'SEAMLESS WORLD',
      pillar1_heading: 'Seamless Open World & Dynamic Weather',
      feature_1:
        'RO x Seamless Open World — Experience the heartbeat of Midgard with a dynamic four-season weather system and random encounter quests.',

      pillar2_tag: '7 CLASSES • HIGH ASPD',
      pillar2_heading: '7 Launch Classes & Classic Builds Upgraded',
      feature_2:
        'Never Before in RO History: Launch with 7 Iconic Classes! Classic builds with fresh upgrades and exhilarating attack speed (ASPD).',

      pillar3_tag: 'SOUTH GATE REUNION',
      pillar3_heading: 'Nostalgia & Social Co-op Adventures',
      feature_3:
        'Welcome Home, Novices! Meet old friends at the South Gate and embark on a new adventure together.',

      classes_eyebrow: 'CHOOSE YOUR STARTING PATH',
      classes_title: 'Preview the 7 Launch Classes Before You Install',
      classes_subtitle:
        'Pick your favorite archetype, inspect its combat stats, and jump straight into Steam to create your Novice.',
      class_0_name: 'Swordsman',
      class_1_name: 'Mage',
      class_2_name: 'Archer',
      class_3_name: 'Acolyte',
      class_4_name: 'Thief',
      class_5_name: 'Merchant',
      class_6_name: 'Gunslinger',
      stat_atk: 'Attack',
      stat_def: 'Defense',
      stat_spd: 'ASPD / Mobility',
      stat_sup: 'Support / Utility',
      class_cta: 'Select This Class & Play on Steam',

      reviews_eyebrow: 'ADVENTURER REVIEWS',
      reviews_title: "The Next Chapter, Through Adventurers' Eyes",
      reviews_subtitle:
        'From a smooth Steam setup to familiar faces at South Gate, celebrate the moments that make Midgard feel like home.',
      reviews_trust_community: 'Steam community spirit',
      reviews_trust_pc: 'Lightweight PC adventures',
      reviews_trust_nostalgia: 'South Gate nostalgia',
      reviews_disclaimer: 'Illustrative adventurer quotes; not verified player or Steam reviews.',
      reviews_rating: '5 out of 5 stars',
      reviews_highlights: 'Community highlights',
      reviews_marquee_label: 'Adventurer review highlights',
      reviews_row_first: 'First review row',
      reviews_row_second: 'Second review row',
      reviews_badge: 'Adventurer',
      reviews_featured: 'Featured voice',
      reviews_quote_1: 'That South Gate reunion hit me right in the nostalgia. Feels like coming home, with a whole new world to explore.',
      reviews_quote_2: 'Steam made getting started simple. I was picking a class and planning my first build in no time.',
      reviews_quote_3: 'Runs nicely on my everyday PC, and the world feels great to explore between quests.',
      reviews_quote_4: 'Seven classes means seven reasons to start over. My party already has plans for our next login.',
      reviews_quote_5: 'Fast-paced fights and a world that keeps opening up. Sneaking off to explore is half the fun.',
      reviews_quote_6: 'My Merchant finally gets the spotlight. Love having a fresh world and familiar class vibes to dive into.',
      reviews_quote_7: 'Claiming that first-login gear and heading out from South Gate is such a good start to an adventure.',
      reviews_quote_8: 'The best part is getting the guild together again. Midgard adventures are better with friends.',

      roadmap_eyebrow: 'FAST-TRACK TO MIDGARD',
      roadmap_title: 'How to Enter Midgard in 3 Simple Steps',
      roadmap_subtitle:
        'Complete your installation and First Login in minutes to unlock your South Gate adventure.',
      roadmap_step1:
        '1. Access Official Steam Page — Click the button below to open Ragnarok: The New World on Steam.',
      roadmap_step2:
        '2. Free Download & Install — Install the official PC client with lightweight system requirements.',
      roadmap_step3:
        '3. Launch & Complete First Login — Log into the game, create your Novice, and claim your new-player start at the South Gate!',
      roadmap_kpi_tag: 'FIRST LOGIN BONUS READY',

      specs_eyebrow: 'OPTIMIZED FOR PC & STEAM',
      specs_title: 'PC System Requirements & Player Reassurance',
      specs_subtitle:
        'Engineered to run smoothly in crisp HD even on mid-range laptops and desktops.',
      spec_min_title: 'Minimum Requirements',
      spec_min_badge: '60 FPS Ready',
      spec_rec_title: 'Recommended Requirements',
      spec_rec_badge: 'HD Ultra / 120 FPS',
      spec_os: 'OS',
      spec_cpu: 'Processor',
      spec_ram: 'Memory',
      spec_gpu: 'Graphics',
      spec_storage: 'Storage',

      faq_title: 'Quick Launch FAQ',
      faq1_q: 'Is Ragnarok: The New World free on Steam?',
      faq1_a:
        'Yes! It is 100% Free-to-Play on Steam. Download the official client, log in with your account, and start playing immediately.',
      faq2_q: 'Is this an official Gravity licensed Ragnarok title?',
      faq2_a:
        'Yes. Published by Gravity Game Vision Limited and officially licensed by Gravity, ensuring authentic RO lore, music, and secure servers.',
      faq3_q: 'Can I sync my progress across platforms?',
      faq3_a:
        'Yes! Enjoy full cross-platform connectivity so your Steam PC adventures stay synced whenever and wherever you log in.',

      final_title: 'Meet Old Friends at the South Gate — Define Your Ragnarok: The New World!',
      final_desc:
        'Install for free on Steam now, complete your First Login, and step into the seamless Midgard open world.',
      footer: 'Independent promotional page. Game name and images belong to Gravity.',
      legal_nav: 'Legal',
      legal_privacy: 'Privacy Policy',
      legal_terms: 'Terms of Use',
      legal_cookies: 'Cookie Policy',
      legal_disclaimer: 'Disclaimer',
      legal_close: 'Close dialog',
      legal_privacy_title: 'Privacy Policy',
      legal_privacy_body:
        'This page does not provide accounts or forms and does not directly collect names, email addresses, or payment information. Your language choice may be stored locally in your browser.\n\nLinks to Steam and externally hosted media may be handled under those providers’ own privacy policies.',
      legal_terms_title: 'Terms of Use',
      legal_terms_body:
        'This independent promotional page is provided for general information. Game details, system requirements, availability, and offers may change; verify current information through official Gravity or Steam channels.\n\nUse external links at your discretion and follow the terms and policies of the sites they lead to.',
      legal_cookies_title: 'Cookie Policy',
      legal_cookies_body:
        'This page does not set advertising or analytics cookies. It may use your browser’s local storage to remember your selected language.\n\nEmbedded media, fonts, or linked services may use cookies or collect technical data under their own policies.',
      legal_disclaimer_title: 'Independent Promotional Disclaimer',
      legal_disclaimer_body:
        'This is an independent promotional page. It is not affiliated with, endorsed by, or sponsored by Gravity or Valve Corporation.\n\nRagnarok: The New World, related game names and imagery belong to Gravity and their respective rights holders. Steam and its logo are trademarks of Valve Corporation.'
    },

    th: {
      html_lang: 'th',
      hud_license: 'ลิขสิทธิ์แท้จาก Gravity',
      hud_free: 'เล่นฟรีบน Steam',
      hud_crossplay: 'ซิงค์ข้อมูลข้ามแพลตฟอร์ม',
      hud_server_status: 'พร้อมให้บริการบน Steam PC • เปิดตัวระดับโกลบอล',

      nav_world: 'โลกไร้รอยต่อ',
      nav_classes: '7 คลาส',
      nav_reviews: 'รีวิว',
      nav_howto: 'วิธีเข้าเล่น',
      nav_specs: 'สเปค PC',
      nav_cta: 'เล่นบน Steam',

      badge_license: 'RO ภาคต่อใหม่ล่าสุด ลิขสิทธิ์แท้จาก Gravity',
      hero_headline: 'RO Open World แผนที่ไร้รอยต่อครั้งแรก — เล่นบน Steam คมชัดระดับ HD ดื่มด่ำยิ่งกว่าเดิม!',
      hero_subheadline:
        'RO แท้ 100% พร้อมประสบการณ์ใหม่ 100% สัมผัสประสบการณ์ระดับเดียวกับเกม PC บน Steam เชื่อมต่อข้อมูลทุกแพลตฟอร์ม',
      cta_primary: 'มาร่วมเปิดบทใหม่ของ RO บน Steam ได้แล้ว',
      hero_secondary_btn: 'วิธีล็อกอิน 3 ขั้นตอน',

      trust_free: 'เล่นฟรี (Free-to-Play)',
      trust_steam: 'เปิดตัวทางการบน Steam',
      trust_cross: 'เชื่อมต่อทุกแพลตฟอร์ม',

      hud_card_tag: 'เวอร์ชัน STEAM PC',
      hud_card_title: 'พร้อมสำหรับล็อกอินครั้งแรก',
      hud_item1_title: 'Open World ไร้รอยต่อ',
      hud_item1_sub: 'สำรวจมิดการ์ดลื่นไหลไร้หน้าโหลด',
      hud_item2_title: 'เปิดพร้อม 7 คลาส',
      hud_item2_sub: 'สายคลาสสิกอัปเกรดใหม่ ความเร็วโจมตีสุดมันส์',
      hud_item3_title: 'รางวัลล็อกอินแรก',
      hud_item3_sub: 'รับไอเทมเริ่มต้นที่ประตูใต้ Prontera',
      steam_badge_sub: 'เล่นได้แล้ววันนี้บน',
      steam_badge_free: 'ฟรี',

      pillars_eyebrow: 'ประสบการณ์มิดการ์ดยุคใหม่',
      pillars_title: 'ทำไมต้องเล่น Ragnarok: The New World บน Steam?',
      toggle_world: 'แผนที่เปิดกว้าง',
      toggle_weather: 'สภาพอากาศ 4 ฤดู',

      pillar1_tag: 'OPEN WORLD ไร้รอยต่อ',
      pillar1_heading: 'แผนที่ไร้รอยต่อ & สภาพอากาศ 4 ฤดู',
      feature_1:
        'RO x Open World แบบไร้รอยต่อ — ระบบสภาพอากาศเปลี่ยนแปลงแบบเรียลไทม์ทั้งสี่ฤดู พร้อมภารกิจสุ่มสุดเซอร์ไพรส์',

      pillar2_tag: '7 คลาส • ASPD สุดมันส์',
      pillar2_heading: 'ครั้งแรกกับ 7 อาชีพหลักและสายคลาสสิกอัปเกรด',
      feature_2:
        'ครั้งแรกในประวัติศาสตร์ RO! เปิดให้เล่นพร้อม 7 Class สุดยิ่งใหญ่ อัปเกรดสายอาชีพคลาสสิกใหม่ทั้งหมด ความเร็วโจมตีสุดมันส์!',

      pillar3_tag: 'รวมพลประตูใต้',
      pillar3_heading: 'ความทรงจำที่หวนคืน & ผจญภัยร่วมกับสหาย',
      feature_3:
        'ยินดีต้อนรับเหล่า Novice กลับบ้าน! เหล่าสหายเก่า นัดรวมพลที่ประตูใต้ จับมือเพื่อนตะลุยโลกใหม่ด้วยกัน',

      classes_eyebrow: 'เลือกเส้นทางเริ่มต้นของคุณ',
      classes_title: 'สำรวจ 7 อาชีพหลักก่อนดาวน์โหลด',
      classes_subtitle:
        'เลือกสายอาชีพที่ใช่ ดูค่าพลังการต่อสู้ และเข้าสู่ Steam เพื่อสร้างตัวละคร Novice ได้ทันที',
      class_0_name: 'Swordsman',
      class_1_name: 'Mage',
      class_2_name: 'Archer',
      class_3_name: 'Acolyte',
      class_4_name: 'Thief',
      class_5_name: 'Merchant',
      class_6_name: 'Gunslinger',
      stat_atk: 'พลังโจมตี',
      stat_def: 'พลังป้องกัน',
      stat_spd: 'ความเร็ว ASPD',
      stat_sup: 'สนับสนุนปาร์ตี้',
      class_cta: 'เลือกอาชีพนี้และเล่นบน Steam',

      reviews_eyebrow: 'เสียงจากนักผจญภัย',
      reviews_title: 'บทใหม่ในมุมมองของเหล่านักผจญภัย',
      reviews_subtitle:
        'ตั้งแต่เริ่มเล่นบน Steam ได้ง่าย ไปจนถึงการพบเพื่อนเก่าที่ประตูใต้ มาร่วมฉลองช่วงเวลาที่ทำให้มิดการ์ดเหมือนบ้านอีกครั้ง',
      reviews_trust_community: 'คอมมูนิตี้ Steam',
      reviews_trust_pc: 'ผจญภัยบน PC สเปคเบา',
      reviews_trust_nostalgia: 'ความคิดถึงประตูใต้',
      reviews_disclaimer: 'ข้อความตัวอย่างจากมุมมองนักผจญภัย ไม่ใช่รีวิวผู้เล่นหรือรีวิว Steam ที่ยืนยันแล้ว',
      reviews_rating: '5 จาก 5 ดาว',
      reviews_highlights: 'ไฮไลต์จากคอมมูนิตี้',
      reviews_marquee_label: 'ไฮไลต์รีวิวนักผจญภัย',
      reviews_row_first: 'รีวิวนักผจญภัยแถวแรก',
      reviews_row_second: 'รีวิวนักผจญภัยแถวที่สอง',
      reviews_badge: 'นักผจญภัย',
      reviews_featured: 'เสียงแนะนำ',
      reviews_quote_1: 'การได้พบเพื่อนอีกครั้งที่ประตูใต้ทำให้คิดถึงวันเก่าๆ เหมือนได้กลับบ้านพร้อมโลกใหม่ให้สำรวจ',
      reviews_quote_2: 'เริ่มเล่นผ่าน Steam ง่ายมาก แป๊บเดียวก็เลือกคลาสและวางแผนบิลด์แรกได้แล้ว',
      reviews_quote_3: 'เล่นบน PC ทั่วไปของฉันได้ลื่นดี แถมยังมีโลกให้เดินสำรวจระหว่างทำเควสต์',
      reviews_quote_4: 'มีถึง 7 คลาส ก็มีเหตุผลให้เริ่มใหม่ได้ถึง 7 แบบ ปาร์ตี้ฉันวางแผนล็อกอินครั้งหน้าแล้ว',
      reviews_quote_5: 'การต่อสู้รวดเร็วและโลกก็เปิดกว้างขึ้นเรื่อยๆ แอบออกไปสำรวจก็สนุกไม่แพ้กัน',
      reviews_quote_6: 'ในที่สุด Merchant ก็ได้เฉิดฉาย โลกใหม่กับกลิ่นอายคลาสที่คุ้นเคยทำให้อยากออกผจญภัยเลย',
      reviews_quote_7: 'รับไอเทมล็อกอินแรกแล้วออกเดินทางจากประตูใต้ เป็นการเริ่มต้นที่ดีมาก',
      reviews_quote_8: 'สิ่งที่ดีที่สุดคือการได้รวมกิลด์กันอีกครั้ง ผจญภัยในมิดการ์ดกับเพื่อนสนุกกว่าเสมอ',

      roadmap_eyebrow: 'เข้าสู่มิดการ์ดอย่างรวดเร็ว',
      roadmap_title: 'วิธีเข้าสู่โลกมิดการ์ดง่ายๆ ใน 3 ขั้นตอน',
      roadmap_subtitle:
        'ติดตั้งและล็อกอินเข้าเกมครั้งแรกภายในไม่กี่นาที เพื่อเริ่มต้นการผจญภัยที่ประตูใต้',
      roadmap_step1:
        '1. เข้าสู่หน้า Steam ทางการ — คลิกปุ่มด้านล่างเพื่อเปิดหน้าเกม Ragnarok: The New World บน Steam',
      roadmap_step2:
        '2. ดาวน์โหลดและติดตั้งฟรี — ติดตั้งตัวเกม PC ทางการที่ปรับแต่งมาให้กินสเปคน้อย ลื่นไหลทุกเครื่อง',
      roadmap_step3:
        '3. เปิดเกมและล็อกอินครั้งแรก — ล็อกอินเข้าสู่เกม สร้างตัวละคร Novice และรับการต้อนรับที่ประตูใต้!',
      roadmap_kpi_tag: 'พร้อมรับโบนัสล็อกอินแรก',

      specs_eyebrow: 'ปรับแต่งเพื่อ PC และ STEAM',
      specs_title: 'ความต้องการระบบ PC และความมั่นใจสำหรับผู้เล่น',
      specs_subtitle:
        'ออกแบบให้เล่นคมชัดระดับ HD ได้อย่างลื่นไหลแม้บนโน้ตบุ๊กหรือพีซีระดับกลาง',
      spec_min_title: 'สเปคขั้นต่ำ',
      spec_min_badge: 'รองรับ 60 FPS',
      spec_rec_title: 'สเปคแนะนำ',
      spec_rec_badge: 'HD Ultra / 120 FPS',
      spec_os: 'ระบบปฏิบัติการ',
      spec_cpu: 'หน่วยประมวลผล',
      spec_ram: 'หน่วยความจำ',
      spec_gpu: 'การ์ดจอ',
      spec_storage: 'พื้นที่จัดเก็บ',

      faq_title: 'คำถามที่พบบ่อยก่อนเข้าเล่น',
      faq1_q: 'Ragnarok: The New World บน Steam เล่นฟรีจริงหรือไม่?',
      faq1_a:
        'จริง! ตัวเกมเปิดให้เล่นฟรี 100% บน Steam ดาวน์โหลดตัวเกมทางการ ล็อกอินบัญชี และเริ่มผจญภัยได้ทันที',
      faq2_q: 'เกมนี้เป็นลิขสิทธิ์แท้จาก Gravity หรือไม่?',
      faq2_a:
        'ใช่ จัดจำหน่ายโดย Gravity Game Vision Limited และได้รับลิขสิทธิ์แท้จาก Gravity มั่นใจได้ทั้งเรื่องราว ดนตรี และเซิร์ฟเวอร์ที่ปลอดภัย',
      faq3_q: 'สามารถเชื่อมต่อข้อมูลข้ามแพลตฟอร์มได้ไหม?',
      faq3_a:
        'ได้! เชื่อมต่อข้อมูลทุกแพลตฟอร์มอย่างสมบูรณ์ ให้คุณสนุกต่อบน Steam PC ได้อย่างต่อเนื่องไร้สะดุด',

      final_title: 'นัดรวมพลสหายเก่าที่ประตูใต้ — ร่วมนิยาม Ragnarok: The New World ในแบบคุณ!',
      final_desc:
        'ติดตั้งฟรีบน Steam ตอนนี้ ล็อกอินเข้าเกมครั้งแรก และก้าวเข้าสู่โลก Open World ไร้รอยต่อของมิดการ์ด',
      footer: 'เว็บไซต์โปรโมตอิสระ ชื่อเกมและภาพเป็นสิทธิ์ของ Gravity',
      legal_nav: 'ข้อมูลทางกฎหมาย',
      legal_privacy: 'นโยบายความเป็นส่วนตัว',
      legal_terms: 'เงื่อนไขการใช้งาน',
      legal_cookies: 'นโยบายคุกกี้',
      legal_disclaimer: 'ข้อสงวนสิทธิ์',
      legal_close: 'ปิดหน้าต่าง',
      legal_privacy_title: 'นโยบายความเป็นส่วนตัว',
      legal_privacy_body:
        'เว็บไซต์นี้ไม่มีระบบบัญชีหรือแบบฟอร์ม และไม่ได้เก็บชื่อ อีเมล หรือข้อมูลการชำระเงินโดยตรง ตัวเลือกภาษาของคุณอาจถูกจัดเก็บไว้ในเบราว์เซอร์\n\nลิงก์ไปยัง Steam และสื่อจากภายนอกอาจอยู่ภายใต้นโยบายความเป็นส่วนตัวของผู้ให้บริการเหล่านั้น',
      legal_terms_title: 'เงื่อนไขการใช้งาน',
      legal_terms_body:
        'เว็บไซต์โปรโมตอิสระนี้จัดทำขึ้นเพื่อให้ข้อมูลทั่วไป รายละเอียดเกม ความต้องการระบบ การให้บริการ และข้อเสนออาจเปลี่ยนแปลงได้ โปรดตรวจสอบข้อมูลล่าสุดจากช่องทางทางการของ Gravity หรือ Steam\n\nการเปิดลิงก์ภายนอกเป็นดุลยพินิจของคุณ และควรปฏิบัติตามข้อกำหนดของเว็บไซต์ปลายทาง',
      legal_cookies_title: 'นโยบายคุกกี้',
      legal_cookies_body:
        'เว็บไซต์นี้ไม่ได้ใช้คุกกี้เพื่อโฆษณาหรือวิเคราะห์ข้อมูล แต่อาจใช้พื้นที่จัดเก็บข้อมูลในเบราว์เซอร์เพื่อจดจำภาษาที่คุณเลือก\n\nสื่อ ฟอนต์ หรือลิงก์บริการภายนอกอาจใช้คุกกี้หรือเก็บข้อมูลทางเทคนิคตามนโยบายของผู้ให้บริการนั้น',
      legal_disclaimer_title: 'ข้อสงวนสิทธิ์สำหรับเว็บไซต์โปรโมตอิสระ',
      legal_disclaimer_body:
        'เว็บไซต์นี้เป็นสื่อโปรโมตอิสระ ไม่ได้เกี่ยวข้อง ได้รับการรับรอง หรือได้รับการสนับสนุนจาก Gravity หรือ Valve Corporation\n\nRagnarok: The New World ชื่อเกมและภาพที่เกี่ยวข้องเป็นสิทธิ์ของ Gravity และเจ้าของสิทธิ์ที่เกี่ยวข้อง Steam และโลโก้เป็นเครื่องหมายการค้าของ Valve Corporation'
    },

    id: {
      html_lang: 'id',
      hud_license: 'Lisensi Resmi Gravity',
      hud_free: 'Gratis di Steam',
      hud_crossplay: 'Sinkronisasi Lintas Platform',
      hud_server_status: 'Klien PC Steam Siap • Peluncuran Global',

      nav_world: 'Dunia',
      nav_classes: '7 Class',
      nav_reviews: 'Ulasan',
      nav_howto: 'Cara Main',
      nav_specs: 'Spek PC',
      nav_cta: 'Main di Steam',

      badge_license: 'Lisensi Resmi dari Gravity, Sekuel Terbaru RO',
      hero_headline: 'RO Open World Tanpa Batas Pertama — Main di Steam dengan Kualitas Tinggi, Makin Imersif!',
      hero_subheadline:
        '100% RO Asli, 100% Pengalaman Baru. Babak baru RO di open world, pengalaman selevel Steam dengan konektivitas lintas platform.',
      cta_primary: 'Mulai Petualangan Baru RO di Steam',
      hero_secondary_btn: 'Panduan Login 3 Langkah',

      trust_free: 'Gratis Dimainkan',
      trust_steam: 'Rilis Resmi Steam',
      trust_cross: 'Lintas Platform',

      hud_card_tag: 'EDISI STEAM PC',
      hud_card_title: 'Siap untuk Login Pertama',
      hud_item1_title: 'Open World Tanpa Batas',
      hud_item1_sub: 'Jelajahi Midgard tanpa loading layar',
      hud_item2_title: '7 Class Saat Peluncuran',
      hud_item2_sub: 'Build klasik dengan ASPD super cepat',
      hud_item3_title: 'Hadiah Login Pertama',
      hud_item3_sub: 'Klaim perlengkapan Novice di Gerbang Selatan',
      steam_badge_sub: 'TERSEDIA SEKARANG DI',
      steam_badge_free: 'GRATIS',

      pillars_eyebrow: 'PENGALAMAN MIDGARD GENERASI BARU',
      pillars_title: 'Mengapa Main Ragnarok: The New World di Steam?',
      toggle_world: 'Open World',
      toggle_weather: 'Cuaca 4 Musim',

      pillar1_tag: 'OPEN WORLD TANPA BATAS',
      pillar1_heading: 'Open World Tanpa Batas & Cuaca Dinamis',
      feature_1:
        'RO x Open World Tanpa Batas — Sistem cuaca dinamis empat musim & quest petualangan acak yang imersif.',

      pillar2_tag: '7 CLASS • ASPD SERU',
      pillar2_heading: '7 Class Rilis & Build Klasik Terbaru',
      feature_2:
        'Pertama Kali dalam Sejarah RO! Hadir dengan 7 Class, Build Klasik dengan Level Up Terbaru & ASPD Super Seru!',

      pillar3_tag: 'REUNI GERBANG SELATAN',
      pillar3_heading: 'Nostalgia & Petualangan Co-op Bersama',
      feature_3:
        'Novice, Selamat Datang di Rumah! Teman Lama Janjian di Gerbang Selatan, Jelajahi Dunia Baru Bersama Teman!',

      classes_eyebrow: 'PILIH JALAN PETUALANGANMU',
      classes_title: 'Pratinjau 7 Class Sebelum Mengunduh',
      classes_subtitle:
        'Pilih arketipe favoritmu, lihat statistik tempurnya, dan langsung masuk ke Steam untuk membuat Novice pertamamu.',
      class_0_name: 'Swordsman',
      class_1_name: 'Mage',
      class_2_name: 'Archer',
      class_3_name: 'Acolyte',
      class_4_name: 'Thief',
      class_5_name: 'Merchant',
      class_6_name: 'Gunslinger',
      stat_atk: 'Serangan',
      stat_def: 'Pertahanan',
      stat_spd: 'ASPD / Mobilitas',
      stat_sup: 'Support / Utilitas',
      class_cta: 'Pilih Class Ini & Main di Steam',

      reviews_eyebrow: 'SUARA PETUALANG',
      reviews_title: 'Babak Baru dari Sudut Pandang Petualang',
      reviews_subtitle:
        'Dari memulai lewat Steam dengan mudah hingga bertemu wajah lama di Gerbang Selatan, rayakan momen yang membuat Midgard terasa seperti rumah.',
      reviews_trust_community: 'Semangat komunitas Steam',
      reviews_trust_pc: 'Petualangan PC ringan',
      reviews_trust_nostalgia: 'Nostalgia Gerbang Selatan',
      reviews_disclaimer: 'Kutipan ilustratif petualang; bukan ulasan pemain atau Steam terverifikasi.',
      reviews_rating: '5 dari 5 bintang',
      reviews_highlights: 'Sorotan komunitas',
      reviews_marquee_label: 'Sorotan ulasan petualang',
      reviews_row_first: 'Baris ulasan petualang pertama',
      reviews_row_second: 'Baris ulasan petualang kedua',
      reviews_badge: 'Petualang',
      reviews_featured: 'Suara pilihan',
      reviews_quote_1: 'Bertemu lagi di Gerbang Selatan bikin nostalgia. Rasanya seperti pulang, dengan dunia baru untuk dijelajahi.',
      reviews_quote_2: 'Memulai lewat Steam itu mudah. Sebentar saja sudah memilih class dan merencanakan build pertama.',
      reviews_quote_3: 'Jalan lancar di PC harian saya, dan dunia ini seru dijelajahi di sela-sela quest.',
      reviews_quote_4: 'Tujuh class berarti tujuh alasan untuk memulai lagi. Party-ku sudah punya rencana untuk login berikutnya.',
      reviews_quote_5: 'Pertarungannya cepat dan dunianya terus terbuka. Menyelinap pergi untuk menjelajah juga seru.',
      reviews_quote_6: 'Akhirnya Merchant mendapat sorotan. Dunia baru dengan nuansa class yang akrab bikin ingin langsung berpetualang.',
      reviews_quote_7: 'Klaim bonus login pertama lalu berangkat dari Gerbang Selatan adalah awal petualangan yang asyik.',
      reviews_quote_8: 'Bagian terbaiknya adalah berkumpul lagi dengan guild. Petualangan Midgard lebih seru bersama teman.',

      roadmap_eyebrow: 'JALUR CEPAT KE MIDGARD',
      roadmap_title: 'Cara Masuk ke Midgard dalam 3 Langkah Mudah',
      roadmap_subtitle:
        'Selesaikan instalasi dan Login Pertama dalam hitungan menit untuk memulai petualangan di Gerbang Selatan.',
      roadmap_step1:
        '1. Buka Halaman Resmi Steam — Klik tombol di bawah untuk membuka Ragnarok: The New World di Steam.',
      roadmap_step2:
        '2. Unduh & Instal Gratis — Instal klien PC resmi dengan kebutuhan sistem yang ringan.',
      roadmap_step3:
        '3. Jalankan & Selesaikan Login Pertama — Login ke dalam game, buat Novice kamu, dan mulai petualangan di Gerbang Selatan!',
      roadmap_kpi_tag: 'BONUS LOGIN PERTAMA SIAP',

      specs_eyebrow: 'DIOPTIMALKAN UNTUK PC & STEAM',
      specs_title: 'Spesifikasi PC & Jaminan Kenyamanan Pemain',
      specs_subtitle:
        'Dirancang agar berjalan mulus dalam kualitas HD bahkan di laptop dan PC kelas menengah.',
      spec_min_title: 'Spesifikasi Minimum',
      spec_min_badge: 'Siap 60 FPS',
      spec_rec_title: 'Spesifikasi Rekomendasi',
      spec_rec_badge: 'HD Ultra / 120 FPS',
      spec_os: 'OS',
      spec_cpu: 'Prosesor',
      spec_ram: 'Memori',
      spec_gpu: 'Grafis',
      spec_storage: 'Penyimpanan',

      faq_title: 'FAQ Peluncuran Cepat',
      faq1_q: 'Apakah Ragnarok: The New World gratis di Steam?',
      faq1_a:
        'Ya! Game ini 100% Free-to-Play di Steam. Unduh klien resmi, login dengan akunmu, dan langsung bermain.',
      faq2_q: 'Apakah ini judul Ragnarok berlisensi resmi Gravity?',
      faq2_a:
        'Ya. Diterbitkan oleh Gravity Game Vision Limited dan berlisensi resmi dari Gravity, menjamin lore RO autentik, musik klasik, dan server yang aman.',
      faq3_q: 'Bisakah saya menyinkronkan progres lintas platform?',
      faq3_a:
        'Ya! Nikmati konektivitas lintas platform penuh sehingga petualangan PC Steam kamu tetap tersinkronisasi kapan saja.',

      final_title: 'Temui Teman Lama di Gerbang Selatan — Tentukan Ragnarok: The New World Versimu!',
      final_desc:
        'Instal gratis di Steam sekarang, selesaikan Login Pertama kamu, dan masuki dunia terbuka Midgard tanpa batas.',
      footer: 'Halaman promosi independen. Nama game dan gambar adalah milik Gravity.',
      legal_nav: 'Informasi Hukum',
      legal_privacy: 'Kebijakan Privasi',
      legal_terms: 'Ketentuan Penggunaan',
      legal_cookies: 'Kebijakan Cookie',
      legal_disclaimer: 'Penafian',
      legal_close: 'Tutup dialog',
      legal_privacy_title: 'Kebijakan Privasi',
      legal_privacy_body:
        'Halaman ini tidak menyediakan akun atau formulir dan tidak mengumpulkan nama, alamat email, atau informasi pembayaran secara langsung. Pilihan bahasa Anda dapat disimpan secara lokal di browser.\n\nTautan ke Steam dan media yang di-host pihak luar dapat tunduk pada kebijakan privasi penyedia tersebut.',
      legal_terms_title: 'Ketentuan Penggunaan',
      legal_terms_body:
        'Halaman promosi independen ini disediakan untuk informasi umum. Detail game, persyaratan sistem, ketersediaan, dan penawaran dapat berubah; periksa informasi terbaru melalui kanal resmi Gravity atau Steam.\n\nGunakan tautan eksternal atas kebijaksanaan Anda dan ikuti ketentuan serta kebijakan situs tujuan.',
      legal_cookies_title: 'Kebijakan Cookie',
      legal_cookies_body:
        'Halaman ini tidak menggunakan cookie iklan atau analitik. Penyimpanan lokal browser dapat digunakan untuk mengingat bahasa pilihan Anda.\n\nMedia, font, atau layanan tertaut dari pihak luar dapat menggunakan cookie atau mengumpulkan data teknis sesuai kebijakan mereka sendiri.',
      legal_disclaimer_title: 'Penafian Promosi Independen',
      legal_disclaimer_body:
        'Ini adalah halaman promosi independen. Halaman ini tidak berafiliasi dengan, didukung, atau disponsori oleh Gravity maupun Valve Corporation.\n\nRagnarok: The New World, nama game terkait, dan gambar adalah milik Gravity serta pemegang hak masing-masing. Steam dan logonya adalah merek dagang Valve Corporation.'
    },

    tw: {
      html_lang: 'zh-Hant',
      hud_license: 'Gravity 原廠正版授權',
      hud_free: 'Steam 免費暢玩',
      hud_crossplay: '多端互通同步',
      hud_server_status: 'Steam PC 端遊已就緒 • 全球同步上線',

      nav_world: '無縫大世界',
      nav_classes: '7大職業',
      nav_reviews: '玩家評價',
      nav_howto: '登入指南',
      nav_specs: 'PC 配備',
      nav_cta: '前往 Steam 遊玩',

      badge_license: 'Gravity原廠正版授權，RO全新續作',
      hero_headline: '首款無縫地圖大世界RO — Steam 高清暢玩更沉浸！',
      hero_subheadline:
        '100%原味RO，100%全新體驗。大世界 RO 新篇，Steam 端遊級體驗，多端互通暢玩無阻。',
      cta_primary: '來 Steam 開啟 RO 新篇章',
      hero_secondary_btn: '3步驟首次登入指南',

      trust_free: '免費下載暢玩',
      trust_steam: 'Steam 官方發行',
      trust_cross: '多端跨平台互通',

      hud_card_tag: 'STEAM PC 旗艦版',
      hud_card_title: '準備完成首次登入',
      hud_item1_title: '無縫大世界探索',
      hud_item1_sub: '橫跨米德加爾特零讀取切換',
      hud_item2_title: '首發 7 大職業',
      hud_item2_sub: '經典流派升級與超爽攻速體驗',
      hud_item3_title: '首次登入好禮',
      hud_item3_sub: '於普隆德拉南門開啟初心者冒險',
      steam_badge_sub: '立即免費下載於',
      steam_badge_free: '免費',

      pillars_eyebrow: '次世代米德加爾特體驗',
      pillars_title: '為什麼選擇在 Steam 暢玩《Ragnarok: The New World》？',
      toggle_world: '無縫大世界',
      toggle_weather: '四季動態天氣',

      pillar1_tag: '無縫大世界',
      pillar1_heading: '無縫地圖與四季動態天氣',
      feature_1:
        'RO x 無縫大世界 — 四季天氣變換與隨機奇遇任務，感受會呼吸的RO大世界。',

      pillar2_tag: '首發7大職業 • 超爽攻速',
      pillar2_heading: '7大職業齊發，經典流派全新升級',
      feature_2:
        'RO歷史第一次！首發7大職業，經典流派全新升級，無縫地圖、互動解謎、超爽攻速！',

      pillar3_tag: '老友相約南門見',
      pillar3_heading: '初心重聚，與夥伴共闖新世界',
      feature_3:
        '初心者，歡迎回家！老友相約南門見，與夥伴共闖新世界！',

      classes_eyebrow: '選擇你的冒險起點',
      classes_title: '下載前搶先預覽首發 7 大職業',
      classes_subtitle:
        '挑選你喜愛的職業流派，查看戰鬥數值，立即前往 Steam 創建你的初心者角色。',
      class_0_name: '劍士 Swordsman',
      class_1_name: '法師 Mage',
      class_2_name: '弓箭手 Archer',
      class_3_name: '服事 Acolyte',
      class_4_name: '盜賊 Thief',
      class_5_name: '商人 Merchant',
      class_6_name: '神槍手 Gunslinger',
      stat_atk: '攻擊能力',
      stat_def: '防禦生存',
      stat_spd: '攻速 / 機動',
      stat_sup: '輔助 / 戰術',
      class_cta: '選擇此職業並前往 Steam 遊玩',

      reviews_eyebrow: '冒險者心得',
      reviews_title: '從冒險者的視角，展開全新篇章',
      reviews_subtitle:
        '從 Steam 輕鬆啟程，到南門與老友重逢，一起回味讓米德加爾特再次像家的每個瞬間。',
      reviews_trust_community: 'Steam 社群熱情',
      reviews_trust_pc: '輕量 PC 冒險',
      reviews_trust_nostalgia: '南門懷舊時光',
      reviews_disclaimer: '冒險者情境示例，並非經驗證的玩家或 Steam 評論。',
      reviews_rating: '滿分 5 顆星',
      reviews_highlights: '社群亮點',
      reviews_marquee_label: '冒險者心得精選',
      reviews_row_first: '第一排冒險者心得',
      reviews_row_second: '第二排冒險者心得',
      reviews_badge: '冒險者',
      reviews_featured: '精選心得',
      reviews_quote_1: '在南門重逢真的勾起滿滿回憶。像是回到家，還有全新的世界等著探索。',
      reviews_quote_2: '透過 Steam 開始遊玩很簡單，沒多久就選好職業並規劃第一套配點。',
      reviews_quote_3: '在我的日常 PC 上跑得很順，任務之間探索世界也很愜意。',
      reviews_quote_4: '七種職業就是七個重新出發的理由。隊友們已經約好下次登入了。',
      reviews_quote_5: '戰鬥節奏明快，世界也不斷拓展。偷偷跑去探索也是樂趣之一。',
      reviews_quote_6: 'Merchant 終於有機會大展身手！熟悉的職業風格加上全新世界，讓人好想出發冒險。',
      reviews_quote_7: '領取首次登入獎勵，再從南門出發，真是很棒的冒險開端。',
      reviews_quote_8: '最棒的就是和公會夥伴再次相聚。與朋友一起冒險總是更有趣。',

      roadmap_eyebrow: '快速踏入米德加爾特',
      roadmap_title: '簡單 3 步驟，完成首次登入進入新世界',
      roadmap_subtitle:
        '只需幾分鐘完成安裝與首次登入，即可與老友在普隆德拉南門重聚。',
      roadmap_step1:
        '1. 前往官方 Steam 頁面 — 點擊下方按鈕開啟 Steam 上的《Ragnarok: The New World》。',
      roadmap_step2:
        '2. 免費下載與安裝 — 安裝輕量化優化的官方 PC 客戶端，流暢運行無負擔。',
      roadmap_step3:
        '3. 啟動遊戲並完成首次登入 — 登入帳號創建你的初心者，於南門領取開局冒險祝福！',
      roadmap_kpi_tag: '首次登入冒險禮遇已備妥',

      specs_eyebrow: '專為 PC 與 STEAM 優化',
      specs_title: 'PC 系統配備需求與玩家安心保證',
      specs_subtitle:
        '經過深度效能調校，即使主流筆電與桌機也能以高清畫質流暢運作。',
      spec_min_title: '最低配備需求',
      spec_min_badge: '流暢 60 FPS',
      spec_rec_title: '建議配備需求',
      spec_rec_badge: '高清極致 / 120 FPS',
      spec_os: '作業系統',
      spec_cpu: '處理器',
      spec_ram: '記憶體',
      spec_gpu: '顯示卡',
      spec_storage: '儲存空間',

      faq_title: '上線常見問題 FAQ',
      faq1_q: '《Ragnarok: The New World》在 Steam 上是免費遊玩的嗎？',
      faq1_a:
        '是的！本作為 Steam 100% 免費遊玩（Free-to-Play），下載官方客戶端並登入即可立即展開冒險。',
      faq2_q: '這是 Gravity 原廠正版授權的 RO 續作嗎？',
      faq2_a:
        '是的。由 Gravity Game Vision Limited 發行並獲 Gravity 原廠正版授權，保留最原汁原味的 RO 世界觀、經典配樂與穩定安全的伺服器環境。',
      faq3_q: '不同裝置間可以互通進度嗎？',
      faq3_a:
        '可以！支援多端互通同步，讓你在 Steam PC 上的冒險進度隨時隨地無縫接軌。',

      final_title: '老友相約南門見 — 親手定義你的《Ragnarok: The New World》！',
      final_desc:
        '立即於 Steam 免費安裝並完成首次登入，踏入無縫連接的米德加爾特大世界。',
      footer: '獨立宣傳頁面。遊戲名稱與圖片均屬 Gravity 所有。',
      legal_nav: '法律資訊',
      legal_privacy: '隱私權政策',
      legal_terms: '使用條款',
      legal_cookies: 'Cookie 政策',
      legal_disclaimer: '免責聲明',
      legal_close: '關閉視窗',
      legal_privacy_title: '隱私權政策',
      legal_privacy_body:
        '本頁不提供帳號或表單，也不會直接蒐集姓名、電子郵件或付款資訊。你選擇的語言可能會儲存在瀏覽器本機。\n\nSteam 連結與外部託管媒體可能受各服務提供者自身的隱私權政策規範。',
      legal_terms_title: '使用條款',
      legal_terms_body:
        '本獨立宣傳頁面僅提供一般資訊。遊戲內容、系統需求、供應狀況與優惠可能變動，請透過 Gravity 或 Steam 官方管道確認最新資訊。\n\n外部連結由你自行決定是否使用，並請遵守連結網站的條款與政策。',
      legal_cookies_title: 'Cookie 政策',
      legal_cookies_body:
        '本頁不會設定廣告或分析用 Cookie；瀏覽器本機儲存空間可能用於記住你選擇的語言。\n\n嵌入媒體、字型或外部連結服務可能依其自身政策使用 Cookie 或蒐集技術資料。',
      legal_disclaimer_title: '獨立宣傳頁面免責聲明',
      legal_disclaimer_body:
        '本頁為獨立宣傳頁面，與 Gravity 或 Valve Corporation 無隸屬、背書或贊助關係。\n\nRagnarok: The New World、相關遊戲名稱與圖片均屬 Gravity 及各權利人所有。Steam 與其標誌為 Valve Corporation 的商標。'
    },

    cn: {
      html_lang: 'zh-Hans',
      hud_license: 'Gravity 原厂正版授权',
      hud_free: 'Steam 免费畅玩',
      hud_crossplay: '多端互通同步',
      hud_server_status: 'Steam PC 端游已就绪 • 全球同步上线',

      nav_world: '无缝大世界',
      nav_classes: '7大职业',
      nav_reviews: '玩家评价',
      nav_howto: '登录指南',
      nav_specs: 'PC 配置',
      nav_cta: '前往 Steam 游玩',

      badge_license: 'Gravity原厂正版授权，RO全新续作',
      hero_headline: '首款无缝地图大世界RO — Steam 高清畅玩更沉浸！',
      hero_subheadline:
        '100%原味RO，100%全新体验。大世界 RO 新篇，Steam 端游级体验，多端互通畅玩无阻。',
      cta_primary: '来 Steam 开启 RO 新篇章',
      hero_secondary_btn: '3步首次登录指南',

      trust_free: '免费下载畅玩',
      trust_steam: 'Steam 官方发行',
      trust_cross: '多端跨平台互通',

      hud_card_tag: 'STEAM PC 旗舰版',
      hud_card_title: '准备完成首次登录',
      hud_item1_title: '无缝大世界探索',
      hud_item1_sub: '横跨米德加尔特零加载切换',
      hud_item2_title: '首发 7 大职业',
      hud_item2_sub: '经典流派升级与超爽攻速体验',
      hud_item3_title: '首次登录好礼',
      hud_item3_sub: '在普隆德拉南门开启初心者冒险',
      steam_badge_sub: '立即免费下载于',
      steam_badge_free: '免费',

      pillars_eyebrow: '次世代米德加尔特体验',
      pillars_title: '为什么选择在 Steam 畅玩《Ragnarok: The New World》？',
      toggle_world: '无缝大世界',
      toggle_weather: '四季动态天气',

      pillar1_tag: '无缝大世界',
      pillar1_heading: '无缝地图与四季动态天气',
      feature_1:
        'RO x 无缝大世界 — 四季天气变换与随机奇遇任务，感受会呼吸的RO大世界。',

      pillar2_tag: '首发7大职业 • 超爽攻速',
      pillar2_heading: '7大职业齐发，经典流派全新升级',
      feature_2:
        'RO历史第一次！首发7大职业，经典流派全新升级，无缝地图、互动解谜、超爽攻速！',

      pillar3_tag: '老友相约南门见',
      pillar3_heading: '初心重聚，与伙伴共闯新世界',
      feature_3:
        '初心者，欢迎回家！老友相约南门见，与伙伴共闯新世界！',

      classes_eyebrow: '选择你的冒险起点',
      classes_title: '下载前抢先预览首发 7 大职业',
      classes_subtitle:
        '挑选你喜爱的职业流派，查看战斗属性，立即前往 Steam 创建你的初心者角色。',
      class_0_name: '剑士 Swordsman',
      class_1_name: '法师 Mage',
      class_2_name: '弓箭手 Archer',
      class_3_name: '服事 Acolyte',
      class_4_name: '盗贼 Thief',
      class_5_name: '商人 Merchant',
      class_6_name: '神枪手 Gunslinger',
      stat_atk: '攻击能力',
      stat_def: '防御生存',
      stat_spd: '攻速 / 机动',
      stat_sup: '辅助 / 战术',
      class_cta: '选择此职业并前往 Steam 游玩',

      reviews_eyebrow: '冒险者心得',
      reviews_title: '从冒险者的视角，开启全新篇章',
      reviews_subtitle:
        '从 Steam 轻松启程，到南门与老友重逢，一起回味让米德加尔特再次像家的每个瞬间。',
      reviews_trust_community: 'Steam 社区热情',
      reviews_trust_pc: '轻量 PC 冒险',
      reviews_trust_nostalgia: '南门怀旧时光',
      reviews_disclaimer: '冒险者情境示例，并非经验证的玩家或 Steam 评论。',
      reviews_rating: '满分 5 颗星',
      reviews_highlights: '社区亮点',
      reviews_marquee_label: '冒险者心得精选',
      reviews_row_first: '第一排冒险者心得',
      reviews_row_second: '第二排冒险者心得',
      reviews_badge: '冒险者',
      reviews_featured: '精选心得',
      reviews_quote_1: '在南门重逢真的勾起满满回忆。像是回到家，还有全新的世界等着探索。',
      reviews_quote_2: '通过 Steam 开始游戏很简单，没多久就选好职业并规划第一套配点。',
      reviews_quote_3: '在我的日常 PC 上运行很流畅，任务之间探索世界也很惬意。',
      reviews_quote_4: '七种职业就是七个重新出发的理由。队友们已经约好下次登录了。',
      reviews_quote_5: '战斗节奏明快，世界也不断拓展。偷偷跑去探索也是乐趣之一。',
      reviews_quote_6: 'Merchant 终于有机会大展身手！熟悉的职业风格加上全新世界，让人好想出发冒险。',
      reviews_quote_7: '领取首次登录奖励，再从南门出发，真是很棒的冒险开端。',
      reviews_quote_8: '最棒的就是和公会伙伴再次相聚。与朋友一起冒险总是更有趣。',

      roadmap_eyebrow: '快速踏入米德加尔特',
      roadmap_title: '简单 3 步，完成首次登录进入新世界',
      roadmap_subtitle:
        '只需几分钟完成安装与首次登录，即可与老友在普隆德拉南门重聚。',
      roadmap_step1:
        '1. 前往官方 Steam 页面 — 点击下方按钮打开 Steam 上的《Ragnarok: The New World》。',
      roadmap_step2:
        '2. 免费下载与安装 — 安装轻量化优化的官方 PC 客户端，流畅运行无负担。',
      roadmap_step3:
        '3. 启动游戏并完成首次登录 — 登录账号创建你的初心者，在南门领取开局冒险祝福！',
      roadmap_kpi_tag: '首次登录冒险礼遇已就绪',

      specs_eyebrow: '专为 PC 与 STEAM 优化',
      specs_title: 'PC 系统配置要求与玩家安心保障',
      specs_subtitle:
        '经过深度性能调校，即使主流笔记本与台式机也能以高清画质流畅运行。',
      spec_min_title: '最低配置要求',
      spec_min_badge: '流畅 60 FPS',
      spec_rec_title: '推荐配置要求',
      spec_rec_badge: '高清极致 / 120 FPS',
      spec_os: '操作系统',
      spec_cpu: '处理器',
      spec_ram: '内存',
      spec_gpu: '显卡',
      spec_storage: '存储空间',

      faq_title: '上线常见问题 FAQ',
      faq1_q: '《Ragnarok: The New World》在 Steam 上是免费游玩的吗？',
      faq1_a:
        '是的！本作为 Steam 100% 免费游玩（Free-to-Play），下载官方客户端并登录即可立即开启冒险。',
      faq2_q: '这是 Gravity 原厂正版授权的 RO 续作吗？',
      faq2_a:
        '是的。由 Gravity Game Vision Limited 发行并获 Gravity 原厂正版授权，保留原汁原味的 RO 世界观、经典配乐与安全稳定的服务器环境。',
      faq3_q: '不同设备之间可以互通进度吗？',
      faq3_a:
        '可以！支持多端互通同步，让你在 Steam PC 上的冒险进度随时随地无缝衔接。',

      final_title: '老友相约南门见 — 亲手定义你的《Ragnarok: The New World》！',
      final_desc:
        '立即在 Steam 免费安装并完成首次登录，踏入无缝连接的米德加尔特大世界。',
      footer: '独立宣传页面。游戏名称与图片均归 Gravity 所有。',
      legal_nav: '法律信息',
      legal_privacy: '隐私政策',
      legal_terms: '使用条款',
      legal_cookies: 'Cookie 政策',
      legal_disclaimer: '免责声明',
      legal_close: '关闭窗口',
      legal_privacy_title: '隐私政策',
      legal_privacy_body:
        '本页面不提供账户或表单，也不会直接收集姓名、电子邮件或付款信息。你选择的语言可能会保存在浏览器本地。\n\nSteam 链接与外部托管媒体可能受各服务提供方自身隐私政策约束。',
      legal_terms_title: '使用条款',
      legal_terms_body:
        '本独立宣传页面仅提供一般信息。游戏内容、系统要求、可用情况和优惠可能变化，请通过 Gravity 或 Steam 官方渠道确认最新信息。\n\n外部链接由你自行决定是否使用，并请遵守目标网站的条款与政策。',
      legal_cookies_title: 'Cookie 政策',
      legal_cookies_body:
        '本页面不会设置广告或分析类 Cookie；浏览器本地存储可能用于记住你选择的语言。\n\n嵌入媒体、字体或外部链接服务可能按照其自身政策使用 Cookie 或收集技术数据。',
      legal_disclaimer_title: '独立宣传页面免责声明',
      legal_disclaimer_body:
        '本页面为独立宣传页面，与 Gravity 或 Valve Corporation 不存在隶属、背书或赞助关系。\n\nRagnarok: The New World、相关游戏名称及图片均归 Gravity 和各权利人所有。Steam 及其标志是 Valve Corporation 的商标。'
    }
  };

  /* ========================================================================
     2. 7 LAUNCH CLASSES INTERACTIVE DATA (MULTI-LANGUAGE)
     ======================================================================== */
  const classesData = [
    {
      id: 1,
      image: 'https://abres.octlib.com/site/sea_official/webp/m-swordman-3031dbd1.webp',
      glyph: 'I',
      aura: 'radial-gradient(circle at 50% 50%, rgba(245, 196, 81, 0.25), transparent 65%)',
      stats: { atk: 88, def: 92, spd: 72, sup: 60 },
      locales: {
        en: {
          name: 'Swordsman',
          role: 'Frontline Vanguard / Tank',
          weapon: 'Weapon: Greatsword & Shield',
          desc: 'Master of melee dominance and unbreakable defense. Lead guild raids with sweeping AoE slashes and high-vitality endurance.'
        },
        th: {
          name: 'Swordsman',
          role: 'แนวหน้า / แทงก์',
          weapon: 'อาวุธ: ดาบใหญ่และโล่',
          desc: 'เจ้าแห่งการต่อสู้ระยะประชิดและพลังป้องกันอันแข็งแกร่ง นำทัพกิลด์ด้วยท่าฟันกวาดวงกว้างและความอึดระดับแนวหน้า'
        },
        id: {
          name: 'Swordsman',
          role: 'Garda Depan / Tank',
          weapon: 'Senjata: Greatsword & Perisai',
          desc: 'Ahli pertarungan jarak dekat dengan pertahanan tak tergoyahkan. Pimpin raid guild dengan tebasan AoE dan ketahanan tinggi.'
        },
        tw: {
          name: '劍士 Swordsman',
          role: '前線先鋒 / 坦克',
          weapon: '武器：雙手巨劍與盾牌',
          desc: '近戰主宰與鋼鐵防線的化身。以大範圍橫掃斬擊與強大生命力，帶領公會團隊突破強敵。'
        },
        cn: {
          name: '剑士 Swordsman',
          role: '前线先锋 / 坦克',
          weapon: '武器：双手巨剑与盾牌',
          desc: '近战主宰与钢铁防线的化身。以大范围横扫斩击与强大生命力，带领公会团队突破强敌。'
        }
      }
    },
    {
      id: 2,
      image: 'https://abres.octlib.com/site/sea_official/webp/mage-513e3bee.webp',
      glyph: 'II',
      aura: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.28), transparent 65%)',
      stats: { atk: 96, def: 46, spd: 68, sup: 74 },
      locales: {
        en: {
          name: 'Mage',
          role: 'Elemental Burst / AoE DPS',
          weapon: 'Weapon: Arcane Staff & Grimoire',
          desc: 'Command Fire, Ice, and Lightning in seamless open-world battles. Shatter enemy formations with devastating elemental storms.'
        },
        th: {
          name: 'Mage',
          role: 'จอมเวทธาตุ / ดาเมจวงกว้าง',
          weapon: 'อาวุธ: คทาเวทและตำรา',
          desc: 'ควบคุมพลังไฟ น้ำแข็ง และสายฟ้าในสนามรบไร้รอยต่อ ทำลายล้างศัตรูเป็นกลุ่มด้วยพายุเวทมนตร์สุดอลังการ'
        },
        id: {
          name: 'Mage',
          role: 'Burst Elemental / AoE DPS',
          weapon: 'Senjata: Tongkat Sihir & Grimoire',
          desc: 'Kendalikan Api, Es, dan Petir di pertempuran open-world. Hancurkan formasi musuh dengan badai sihir yang dahsyat.'
        },
        tw: {
          name: '法師 Mage',
          role: '元素爆發 / 範圍輸出',
          weapon: '武器：奧術法杖與魔導書',
          desc: '在無縫大世界戰場駕馭火、冰、雷元素之力，以毀滅性元素風暴瞬間瓦解敵陣。'
        },
        cn: {
          name: '法师 Mage',
          role: '元素爆发 / 范围输出',
          weapon: '武器：奥术法杖与魔导书',
          desc: '在无缝大世界战场驾驭火、冰、雷元素之力，以毁灭性元素风暴瞬间瓦解敌阵。'
        }
      }
    },
    {
      id: 3,
      image: 'https://abres.octlib.com/site/sea_official/webp/m-archer-19dba72f.webp',
      glyph: 'III',
      aura: 'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.26), transparent 65%)',
      stats: { atk: 89, def: 54, spd: 95, sup: 62 },
      locales: {
        en: {
          name: 'Archer',
          role: 'Long-Range Marksman / High ASPD',
          weapon: 'Weapon: Composite Bow & Quiver',
          desc: 'Unleash rapid-fire arrow volleys with upgraded ASPD builds. Kite MVP bosses effortlessly across dynamic Midgard terrain.'
        },
        th: {
          name: 'Archer',
          role: 'พลธนูระยะไกล / ASPD สูง',
          weapon: 'อาวุธ: ธนูคอมโพสิต',
          desc: 'รัวศรความเร็วสูงด้วยสาย ASPD อัปเกรดใหม่ ยิงพลิ้วหลบหลีก MVP ได้อย่างคล่องตัวทั่วภูมิประเทศมิดการ์ด'
        },
        id: {
          name: 'Archer',
          role: 'Penembak Jarak Jauh / ASPD Tinggi',
          weapon: 'Senjata: Busur Komposit',
          desc: 'Lepaskan rentetan panah super cepat dengan build ASPD terbaru. Hadapi boss MVP dengan mobilitas tinggi di medan Midgard.'
        },
        tw: {
          name: '弓箭手 Archer',
          role: '遠程神射 / 極限攻速',
          weapon: '武器：複合長弓',
          desc: '憑藉升級版高攻速流派傾瀉疾風箭雨，靈活走位輕鬆風箏各大 MVP 首領。'
        },
        cn: {
          name: '弓箭手 Archer',
          role: '远程神射 / 极限攻速',
          weapon: '武器：复合长弓',
          desc: '凭借升级版高攻速流派倾泻疾风箭雨，灵活走位轻松风筝各大 MVP 首领。'
        }
      }
    },
    {
      id: 4,
      image: 'https://abres.octlib.com/site/sea_official/webp/m-acolyte-6881c6bf.webp',
      glyph: 'IV',
      aura: 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.28), transparent 65%)',
      stats: { atk: 64, def: 78, spd: 70, sup: 98 },
      locales: {
        en: {
          name: 'Acolyte',
          role: 'Holy Healer / Party Buffer',
          weapon: 'Weapon: Sacred Mace & Rod',
          desc: 'The indispensable heart of every party. Empower allies with classic Blessing and Heal buffs or smite undead forces.'
        },
        th: {
          name: 'Acolyte',
          role: 'ผู้เยียวยา / บัฟปาร์ตี้',
          weapon: 'อาวุธ: คทาศักดิ์สิทธิ์และกระบอง',
          desc: 'หัวใจสำคัญของทุกปาร์ตี้ เสริมพลังเพื่อนร่วมทีมด้วยบัฟ Blessing และ Heal หรือปราบเหล่าอันเดดด้วยพลังศักดิ์สิทธิ์'
        },
        id: {
          name: 'Acolyte',
          role: 'Healer Suci / Buffer Tim',
          weapon: 'Senjata: Mace & Tongkat Suci',
          desc: 'Jantung dari setiap party. Perkuat rekan tim dengan buff klasik Blessing & Heal, atau basmi pasukan undead.'
        },
        tw: {
          name: '服事 Acolyte',
          role: '神聖治癒 / 團隊增益',
          weapon: '武器：聖殿權杖與鈍器',
          desc: '每支冒險隊伍不可或缺的核心。以經典神聖祝福與治癒守護夥伴，或揮舞聖光懲戒不死魔物。'
        },
        cn: {
          name: '服事 Acolyte',
          role: '神圣治疗 / 团队增益',
          weapon: '武器：圣殿权杖与钝器',
          desc: '每支冒险队伍不可或缺的核心。以经典神圣祝福与治疗守护伙伴，或挥舞圣光惩戒不死魔物。'
        }
      }
    },
    {
      id: 5,
      image: 'https://abres.octlib.com/site/sea_official/webp/m-thief-32b75858.webp',
      glyph: 'V',
      aura: 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.25), transparent 65%)',
      stats: { atk: 92, def: 58, spd: 98, sup: 55 },
      locales: {
        en: {
          name: 'Thief',
          role: 'Critical Assassin / Evasion Striker',
          weapon: 'Weapon: Twin Daggers & Katar',
          desc: 'Strike from the shadows with blistering ASPD and lethal critical chains while dodging incoming boss attacks.'
        },
        th: {
          name: 'Thief',
          role: 'นักฆ่าคริติคอล / หลบหลีกสูง',
          weapon: 'อาวุธ: มีดคู่และกาตาร์',
          desc: 'จู่โจมจากเงามืดด้วยความเร็วโจมตีระดับสายฟ้าและคริติคอลต่อเนื่อง พร้อมค่าหลบหลีกที่รับมือบอสได้อย่างเฉียบคม'
        },
        id: {
          name: 'Thief',
          role: 'Assassin Kritikal / Penghindar',
          weapon: 'Senjata: Belati Kembar & Katar',
          desc: 'Serang dari bayangan dengan ASPD kilat dan kombo kritikal mematikan sambil menghindari serangan boss.'
        },
        tw: {
          name: '盜賊 Thief',
          role: '暴擊刺客 / 高閃避突襲',
          weapon: '武器：雙持短劍與拳刃',
          desc: '自暗影中以極致攻速與致命暴擊連段瞬殺目標，高閃避身法從容閃過首領重擊。'
        },
        cn: {
          name: '盗贼 Thief',
          role: '暴击刺客 / 高闪避突袭',
          weapon: '武器：双持短剑与拳刃',
          desc: '自暗影中以极致攻速与致命暴击连段瞬杀目标，高闪避身法从容闪过首领重击。'
        }
      }
    },
    {
      id: 6,
      image: 'https://abres.octlib.com/site/sea_official/webp/merchant-7931e0e6.webp',
      glyph: 'VI',
      aura: 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.26), transparent 65%)',
      stats: { atk: 84, def: 78, spd: 74, sup: 86 },
      locales: {
        en: {
          name: 'Merchant',
          role: 'Battle Crafter / Zeny Tactician',
          weapon: 'Weapon: Heavy Axe & Battle Cart',
          desc: 'Crush enemies with Mammonite strikes and Battle Cart charges while mastering Midgard trade, forging, and economy.'
        },
        th: {
          name: 'Merchant',
          role: 'นักสู้สายตีบวก / เจ้าแห่งการค้า',
          weapon: 'อาวุธ: ขวานหนักและรถเข็นคู่ใจ',
          desc: 'บดขยี้ศัตรูด้วย Mammonite และท่าพุ่งชนรถเข็น พร้อมครองตลาดการค้าและระบบตีบวกแห่งมิดการ์ด'
        },
        id: {
          name: 'Merchant',
          role: 'Petarung & Ahli Ekonomi',
          weapon: 'Senjata: Kapak Berat & Gerobak Tempur',
          desc: 'Hancurkan musuh dengan Mammonite dan serbuan Gerobak Tempur sambil menguasai perdagangan serta crafting di Midgard.'
        },
        tw: {
          name: '商人 Merchant',
          role: '重裝鍛造 / 經濟戰術師',
          weapon: '武器：重型戰斧與戰鬥手推車',
          desc: '以金錢攻擊與手推車衝鋒重創敵人，同時掌握米德加爾特的鍛造、精煉與貿易脈動。'
        },
        cn: {
          name: '商人 Merchant',
          role: '重装锻造 / 经济战术师',
          weapon: '武器：重型战斧与战斗手推车',
          desc: '以金钱攻击与手推车冲锋重创敌人，同时掌握米德加尔特的锻造、精炼与贸易脉动。'
        }
      }
    },
    {
      id: 7,
      image: 'https://abres.octlib.com/site/sea_official/webp/m-gunslinger-e1beb2fd.webp',
      glyph: 'VII',
      aura: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.3), transparent 65%)',
      stats: { atk: 94, def: 52, spd: 96, sup: 66 },
      locales: {
        en: {
          name: 'Gunslinger',
          role: 'Special 7th Launch Class / Dual-Pistol DPS',
          weapon: 'Weapon: Twin Pistols & Rifle',
          desc: 'Making history as part of RO’s 7-class launch! Unload high-ASPD bullet barrages and stylish ranged combos.'
        },
        th: {
          name: 'Gunslinger',
          role: 'คลาสที่ 7 สุดพิเศษ / ปืนคู่',
          weapon: 'อาวุธ: ปืนคู่และไรเฟิล',
          desc: 'สร้างประวัติศาสตร์เปิดตัวพร้อม 7 คลาส! ระดมยิงกระสุนความเร็วสูงและคอมโบระยะไกลสุดเท่'
        },
        id: {
          name: 'Gunslinger',
          role: 'Class ke-7 Spesial / Pistol Kembar',
          weapon: 'Senjata: Pistol Kembar & Rifle',
          desc: 'Mencetak sejarah dalam peluncuran 7 Class! Tembakkan rentetan peluru ASPD tinggi dengan gaya bertarung modern.'
        },
        tw: {
          name: '神槍手 Gunslinger',
          role: '首發第7特殊職業 / 雙槍連射',
          weapon: '武器：雙持手槍與長管步槍',
          desc: '創下 RO 歷史首度 7 大職業齊發里程碑！以超高攻速傾瀉炙熱彈幕與華麗遠程連擊。'
        },
        cn: {
          name: '神枪手 Gunslinger',
          role: '首发第7特殊职业 / 双枪连射',
          weapon: '武器：双持手枪与长管步枪',
          desc: '创下 RO 历史首度 7 大职业齐发里程碑！以超高攻速倾泻炙热弹幕与华丽远程连击。'
        }
      }
    }
  ];

  /* ========================================================================
     3. STATE & DOM REFERENCES
     ======================================================================== */
  let currentLang = 'en';
  let activeClassIndex = 0;

  const langButtons = document.querySelectorAll('.lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n], [data-i18n-aria-label]');
  const classCards = document.querySelectorAll('.class-card');

  /* ========================================================================
     4. BROWSER LANGUAGE DETECTION & i18n APPLICATION
     ======================================================================== */
  function mapLocaleToLang(locale) {
    if (!locale || typeof locale !== 'string') return null;
    const normalized = locale.toLowerCase().trim();

    if (
      normalized.startsWith('zh-tw') ||
      normalized.startsWith('zh-hk') ||
      normalized.startsWith('zh-hant')
    ) {
      return 'tw';
    }
    if (normalized.startsWith('zh')) {
      return 'cn';
    }
    if (normalized.startsWith('th')) {
      return 'th';
    }
    if (normalized.startsWith('id')) {
      return 'id';
    }
    if (normalized.startsWith('en')) {
      return 'en';
    }
    return null;
  }

  function detectInitialLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (_) {
      // Ignore storage access errors in restricted modes
    }

    const browserLocales =
      Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || 'en'];

    for (let i = 0; i < browserLocales.length; i++) {
      const mapped = mapLocaleToLang(browserLocales[i]);
      if (mapped) return mapped;
    }

    return 'en';
  }

  function applyLanguage(langCode, persistChoice) {
    const validLang = translations[langCode] ? langCode : 'en';
    currentLang = validLang;
    const dict = translations[validLang];

    document.documentElement.setAttribute('lang', dict.html_lang || validLang);

    i18nElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }

      const ariaLabelKey = el.getAttribute('data-i18n-aria-label');
      if (ariaLabelKey && Object.prototype.hasOwnProperty.call(dict, ariaLabelKey)) {
        el.setAttribute('aria-label', dict[ariaLabelKey]);
      }
    });

    langButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-lang') === validLang;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    if (persistChoice) {
      try {
        localStorage.setItem(STORAGE_KEY, validLang);
      } catch (_) {
        // Ignore storage errors
      }
    }

    updateCardsLanguage(validLang);
  }

  /* ========================================================================
     5. 7 CLASSES INTERACTIVE ACCORDION
     ======================================================================== */
  function activateClassCard(index, animateBars = true) {
    const safeIndex = index >= 0 && index < classesData.length ? index : 0;
    activeClassIndex = safeIndex;

    const cards = document.querySelectorAll('.class-card');
    cards.forEach((card, idx) => {
      const isActive = idx === safeIndex;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-expanded', isActive ? 'true' : 'false');

      if (isActive && animateBars) {
        const statBars = card.querySelectorAll('.stat-fill');
        statBars.forEach((bar) => {
          const target = bar.getAttribute('data-stat-target') || '0';
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = target + '%';
          }, 220);
        });
      }
    });
  }

  function updateCardsLanguage(langCode) {
    const validLang = translations[langCode] ? langCode : 'en';
    const cards = document.querySelectorAll('.class-card');

    cards.forEach((card, idx) => {
      if (idx >= classesData.length) return;
      const item = classesData[idx];
      const localized = item.locales[validLang] || item.locales.en;

      const collapsedName = card.querySelector('.card-collapsed-name');
      const roleTxt = card.querySelector('.card-role-txt');
      const weaponTxt = card.querySelector('.card-weapon-txt');
      const titleTxt = card.querySelector('.card-title-txt');
      const descTxt = card.querySelector('.card-desc-txt');

      if (collapsedName) collapsedName.textContent = localized.name;
      if (roleTxt) roleTxt.textContent = localized.role;
      if (weaponTxt) weaponTxt.textContent = localized.weapon;
      if (titleTxt) titleTxt.textContent = localized.name;
      if (descTxt) descTxt.textContent = localized.desc;
    });
  }

  /* ========================================================================
     6. MEDIA FALLBACK GUARD (NO BROKEN IMAGE ICONS)
     ======================================================================== */
  function attachImageFallbackHandlers() {
    const allImages = document.querySelectorAll('img');
    allImages.forEach((img) => {
      img.addEventListener('error', function () {
        img.classList.add('is-missing');
      });
      img.addEventListener('load', function () {
        img.classList.remove('is-missing');
      });
      if (img.complete && img.naturalWidth === 0 && img.src) {
        img.classList.add('is-missing');
      }
    });
  }

  /* ========================================================================
     7. UI INTERACTIONS (HEADER SCROLL, MOBILE DRAWER, SHOWCASE SCROLL)
     ======================================================================== */
  function initUIInteractions() {
    const header = document.getElementById('site-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    // Scroll state for sticky header
    window.addEventListener(
      'scroll',
      () => {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.scrollY > 24);
      },
      { passive: true }
    );

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // --- Sticky Horizontal-Scroll Showcase ---
    const showcaseWrapper = document.querySelector('.showcase-wrapper');
    const showcaseTrack = document.querySelector('.showcase-track');
    const showcaseSlides = document.querySelectorAll('.showcase-slide');
    const showcaseNavItems = document.querySelectorAll('.showcase-nav-item');
    const SLIDE_COUNT = showcaseSlides.length;
    let currentShowcaseIndex = 0;

    function setActiveSlide(index) {
      if (index === currentShowcaseIndex) return;
      currentShowcaseIndex = index;

      // Move the track
      if (showcaseTrack) {
        showcaseTrack.style.transform = 'translateX(-' + (index * 100) + 'vw)';
      }

      // Update active states on slides
      showcaseSlides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
      });

      // Update nav items
      showcaseNavItems.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
      });
    }

    // Force-set initial active state
    if (showcaseSlides.length > 0) {
      showcaseSlides[0].classList.add('is-active');
    }

    if (showcaseWrapper && showcaseTrack && SLIDE_COUNT > 0) {
      // Check if we're on mobile (no sticky behavior)
      function isMobile() {
        return window.innerWidth <= 960;
      }

      // Scroll-driven slide switching
      window.addEventListener(
        'scroll',
        () => {
          if (isMobile()) return;

          const rect = showcaseWrapper.getBoundingClientRect();
          const scrollableDistance = showcaseWrapper.offsetHeight - window.innerHeight;

          if (scrollableDistance <= 0) return;

          // Only process when the wrapper is in the viewport pinning range
          if (rect.top > 0 || rect.bottom < window.innerHeight) return;

          const progress = Math.abs(rect.top) / scrollableDistance;
          const clampedProgress = Math.max(0, Math.min(1, progress));
          const rawIndex = clampedProgress * SLIDE_COUNT;
          const activeIndex = Math.min(Math.floor(rawIndex), SLIDE_COUNT - 1);

          setActiveSlide(activeIndex);
        },
        { passive: true }
      );

      // Nav item click → scroll window to that slide's position
      showcaseNavItems.forEach((item) => {
        item.addEventListener('click', () => {
          const slideIdx = parseInt(item.getAttribute('data-showcase-slide'), 10);
          if (isNaN(slideIdx) || slideIdx < 0 || slideIdx >= SLIDE_COUNT) return;

          const scrollableDistance = showcaseWrapper.offsetHeight - window.innerHeight;
          const wrapperTop = showcaseWrapper.getBoundingClientRect().top + window.scrollY;
          const targetScroll = wrapperTop + (slideIdx / SLIDE_COUNT) * scrollableDistance;

          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        });
      });
    }

    // Language Switcher Buttons
    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        applyLanguage(selectedLang, true);
      });
    });

    // 7 Classes Accordion Cards
    const cards = document.querySelectorAll('.class-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-class-index'), 10);
        if (idx !== activeClassIndex) {
          activateClassCard(idx, true);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-class-index'), 10);
          activateClassCard(idx, true);
        }
      });
    });
  }

  /* ========================================================================
     7b. HOW TO PLAY ROADMAP DYNAMIC INTERACTIONS & ATMOSPHERE
     ======================================================================== */
  function initRoadmapInteractions() {
    const roadmapSection = document.getElementById('roadmap');
    if (!roadmapSection) return;

    // 1. Staggered Scroll-Reveal Observer
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              roadmapSection.classList.add('is-revealed');
              revealObserver.unobserve(roadmapSection);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealObserver.observe(roadmapSection);
    } else {
      roadmapSection.classList.add('is-revealed');
    }

    // Safety fallback: reveal after 1.8s regardless of scroll position
    setTimeout(() => {
      if (!roadmapSection.classList.contains('is-revealed')) {
        roadmapSection.classList.add('is-revealed');
      }
    }, 1800);

    // 2. Interactive Quest Auto-Cycling & Step Hover
    const stepCards = roadmapSection.querySelectorAll('.step-card');
    if (stepCards.length > 0) {
      let currentStep = 0;
      let cycleTimer = null;
      let isPaused = false;

      function setQuestStep(idx) {
        stepCards.forEach((card, i) => {
          card.classList.toggle('is-quest-active', i === idx);
        });
        currentStep = idx;
      }

      function startQuestCycle() {
        if (cycleTimer) clearInterval(cycleTimer);
        cycleTimer = setInterval(() => {
          if (!isPaused) {
            const next = (currentStep + 1) % stepCards.length;
            setQuestStep(next);
          }
        }, 3400);
      }

      setQuestStep(0);
      startQuestCycle();

      stepCards.forEach((card, idx) => {
        card.addEventListener('mouseenter', () => {
          isPaused = true;
          setQuestStep(idx);
        });

        card.addEventListener('mouseleave', () => {
          isPaused = false;
        });

        card.addEventListener('click', () => {
          setQuestStep(idx);
        });
      });
    }

    // 3. Ambient Sparks Particle Canvas
    initRoadmapParticles(roadmapSection);
  }

  function initReviewReveal() {
    const reviewsSection = document.getElementById('reviews');
    if (!reviewsSection) return;

    if (!('IntersectionObserver' in window)) {
      reviewsSection.classList.add('is-revealed');
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reviewsSection.classList.add('is-revealed');
            revealObserver.unobserve(reviewsSection);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealObserver.observe(reviewsSection);
  }

  function initSpecsInteractions() {
    const specsSection = document.getElementById('specs');
    if (!specsSection) return;

    const revealSpecs = () => specsSection.classList.add('is-revealed');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealSpecs();
              revealObserver.unobserve(specsSection);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealObserver.observe(specsSection);
    } else {
      revealSpecs();
    }

    specsSection.querySelectorAll('.spec-card, .faq-panel').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse') return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--pointer-x');
        card.style.removeProperty('--pointer-y');
      });
    });

    const faqItems = specsSection.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const button = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer-grid');
      if (!button || !answer) return;

      button.addEventListener('click', () => {
        const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
        faqItems.forEach((faqItem) => {
          const faqButton = faqItem.querySelector('.faq-question');
          const faqAnswer = faqItem.querySelector('.faq-answer-grid');
          if (!faqButton || !faqAnswer) return;

          const isOpen = faqItem === item && shouldOpen;
          faqItem.classList.toggle('is-open', isOpen);
          faqButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          faqAnswer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        });
      });
    });
  }

  function initLegalModals() {
    const modal = document.getElementById('legal-modal');
    const dialog = modal && modal.querySelector('.legal-dialog');
    if (!modal || !dialog) return;

    const legalButtons = document.querySelectorAll('.legal [data-legal]');
    const documents = Array.from(modal.querySelectorAll('[data-legal-content]'));
    const closeButtons = modal.querySelectorAll('[data-legal-close]');
    const closeButton = modal.querySelector('.legal-close');
    let lastFocusedElement = null;
    let closeTimer = null;
    let focusTimer = null;

    function openLegalDocument(type, opener) {
      const activeDocument = documents.find((doc) => doc.getAttribute('data-legal-content') === type);
      if (!activeDocument) return;

      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      if (focusTimer) {
        clearTimeout(focusTimer);
        focusTimer = null;
      }

      documents.forEach((doc) => {
        doc.hidden = doc !== activeDocument;
      });

      const title = activeDocument.querySelector('h2');
      if (title && title.id) {
        dialog.setAttribute('aria-labelledby', title.id);
      }

      lastFocusedElement = opener;
      modal.hidden = false;
      document.body.classList.add('legal-modal-open');
      requestAnimationFrame(() => {
        if (modal.hidden) return;
        modal.classList.add('is-open');
        requestAnimationFrame(() => {
          if (modal.hidden || !modal.classList.contains('is-open')) return;
          closeButton.focus();
          focusTimer = window.setTimeout(() => {
            if (
              !modal.hidden &&
              modal.classList.contains('is-open') &&
              (document.activeElement === opener || document.activeElement === document.body)
            ) {
              closeButton.focus();
            }
            focusTimer = null;
          }, 190);
        });
      });
    }

    function closeLegalDocument() {
      if (modal.hidden || !modal.classList.contains('is-open')) return;
      modal.classList.remove('is-open');
      if (focusTimer) {
        clearTimeout(focusTimer);
        focusTimer = null;
      }

      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        if (modal.classList.contains('is-open')) return;
        modal.hidden = true;
        document.body.classList.remove('legal-modal-open');
        if (lastFocusedElement) lastFocusedElement.focus();
        lastFocusedElement = null;
        closeTimer = null;
      }, 180);
    }

    legalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        openLegalDocument(button.getAttribute('data-legal'), button);
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', closeLegalDocument);
    });

    document.addEventListener('keydown', (event) => {
      if (modal.hidden || !modal.classList.contains('is-open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeLegalDocument();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = dialog.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  function initFinalCta() {
    const section = document.querySelector('.final-cta-section');
    if (!section) return;

    const reveal = () => section.classList.add('is-revealed');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              revealObserver.unobserve(section);
            }
          });
        },
        { threshold: 0.18 }
      );
      revealObserver.observe(section);
    } else {
      reveal();
    }

    const video = section.querySelector('.final-cta-video');
    if (!video) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncVideoMotion() {
      if (motionPreference.matches) {
        video.pause();
        video.removeAttribute('autoplay');
      } else {
        video.setAttribute('autoplay', '');
        const playAttempt = video.play();
        if (playAttempt && typeof playAttempt.catch === 'function') {
          playAttempt.catch(() => video.pause());
        }
      }
    }

    syncVideoMotion();
    if (typeof motionPreference.addEventListener === 'function') {
      motionPreference.addEventListener('change', syncVideoMotion);
    } else if (typeof motionPreference.addListener === 'function') {
      motionPreference.addListener(syncVideoMotion);
    }
  }

  function initRoadmapParticles(section) {
    const canvas = document.getElementById('roadmap-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    let animId = null;
    let isVisible = false;
    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.width = section.offsetWidth;
      height = canvas.height = section.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const colors = [
      'rgba(56, 189, 248, ',   // cyan
      'rgba(245, 196, 81, ',   // gold
      'rgba(255, 224, 130, '   // bright gold
    ];

    const PARTICLE_COUNT = 24;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.8,
        vy: -(Math.random() * 0.45 + 0.25),
        vx: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function renderParticles() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx;
        p.alpha += p.pulseSpeed;

        if (p.alpha > p.baseAlpha + 0.25 || p.alpha < p.baseAlpha - 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.colorPrefix + Math.max(0, Math.min(1, p.alpha)) + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.colorPrefix + '0.8)';
        ctx.fill();
      }

      animId = requestAnimationFrame(renderParticles);
    }

    // Only animate when section is intersecting
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible) {
              cancelAnimationFrame(animId);
              animId = requestAnimationFrame(renderParticles);
            } else {
              cancelAnimationFrame(animId);
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(section);
    } else {
      isVisible = true;
      animId = requestAnimationFrame(renderParticles);
    }
  }

  /* ========================================================================
     8. INITIALIZE ON DOMCONTENTLOADED
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    attachImageFallbackHandlers();
    initUIInteractions();
    initRoadmapInteractions();
    initReviewReveal();
    initSpecsInteractions();
    initLegalModals();
    initFinalCta();
    const detectedLang = detectInitialLanguage();
    applyLanguage(detectedLang, false);
    activateClassCard(0, true);
  });
})();