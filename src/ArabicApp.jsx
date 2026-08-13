import './App.css'

function ArabicApp() {
  const whatsappNumber = '966553882226'
  const whatsappMessage = encodeURIComponent(
    'السلام عليكم، لدي استفسار عن ماراثون القطيف.'
  )

  return (
    <main className="site arabic-site">

      {/* NAVIGATION */}
      <nav className="navbar">

        <div className="nav-logo">
          <img
            src="/qatif-marathon-logo.png"
            alt="ماراثون القطيف"
          />
          <span>QATIF MARATHON</span>
        </div>

        <div className="nav-links">
          <a href="#race">الفعالية</a>
          <a href="#community">الجري المجتمعي</a>
          <a href="#about">عن الماراثون</a>
          <a href="https://www.instagram.com/qatifmarathon/" target="_blank" rel="noreferrer">
            إنستغرام
          </a>
          <a href="#contact">تواصل معنا</a>
        </div>

        <a className="language" href="/">
          English
        </a>

      </nav>


      {/* HERO */}
      <section id="race" className="hero">

        {/* RIGHT SIDE — MAIN MESSAGE */}
        <div className="hero-content">

          <p className="eyebrow">
            القطيف • المنطقة الشرقية • المملكة العربية السعودية
          </p>

          <h1>
            ماراثون
            <br />
            القطيف.
          </h1>

          <p className="hero-text">
            ماراثون القطيف قادم.
            <br />
            نعمل حالياً على بناء الحدث واستكمال إجراءاته.
          </p>

          <p className="hero-status">
            سيتم الإعلان عن تفاصيل السباق الرسمية والمسافات
            والتسجيل عند تأكيدها.
          </p>

          <div className="hero-actions">

            <a
              className="primary-button"
              href="https://forms.gle/eG2oocS4xShrFeMJ6"
              target="_blank"
              rel="noreferrer"
            >
              سجل اهتمامك
            </a>

            <a
              className="secondary-button"
              href="#community"
            >
              الجري المجتمعي ←
            </a>

          </div>

        </div>


        {/* LEFT SIDE — LOGO */}
        <div className="hero-logo">
          <img
            src="/qatif-marathon-logo.png"
            alt="Qatif Marathon"
          />
        </div>


        {/* BOTTOM INFORMATION */}
        <div className="hero-bottom">

          <div>
            <strong>05.12.2026</strong>
            <span>التاريخ المستهدف</span>
          </div>

          <div>
            <strong>القطيف</strong>
            <span>المنطقة الشرقية</span>
          </div>

          <div>
            <strong>قريباً</strong>
            <span>التفاصيل الرسمية</span>
          </div>

        </div>

      </section>


      {/* COMMUNITY RUN */}
      <section
        id="community"
        className="community"
      >

        <div className="community-content">

          <p className="eyebrow">
            الجري المجتمعي
          </p>

          <h2>
            نبدأ من المجتمع.
          </h2>

          <p>
            تم الإعلان عن <strong>جري مجتمعي</strong> في
            5 ديسمبر 2026 للأشخاص الراغبين في الاجتماع
            والجري معاً في القطيف.
          </p>

          <p>
            هذا الجري المجتمعي ليس سباقاً منظماً أو فعالية
            رسمية حتى الآن، ولا يمثل بديلاً عن ماراثون
            القطيف الرسمي.
          </p>

          <div className="community-warning">

            <div className="warning-icon">
              !
            </div>

            <div>
              <strong>
                تنبيه مهم
              </strong>

              <span>
                المشاركة في الجري المجتمعي تكون على مسؤولية
                المشارك الخاصة. لا توجد حالياً خدمات تنظيمية
                أو تسجيل رسمي للسباق.
              </span>
            </div>

          </div>

          <a
            className="community-button"
            href="https://forms.gle/eG2oocS4xShrFeMJ6"
            target="_blank"
            rel="noreferrer"
          >
            سجل اهتمامك بالجري ←
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="about"
      >

        <div>

          <p className="eyebrow">
            عن الفعالية
          </p>

          <h2>
            القطيف.
            <br />
            مدينة للحركة.
          </h2>

        </div>

        <div className="about-text">

          <p>
            ماراثون القطيف هو مشروع لفعالية جري على الطرق
            تهدف إلى جمع العدائين والمجتمع وإبراز القطيف
            كوجهة للرياضة والحركة والمجتمع.
          </p>

          <p>
            يتم حالياً العمل على تطوير الحدث واستكمال
            الإجراءات اللازمة. سيتم الإعلان عن التفاصيل
            الرسمية عند تأكيدها.
          </p>

        </div>

      </section>


      {/* WHAT'S NEXT */}
      <section className="updates">

        <div>

          <p className="eyebrow">
            ما القادم؟
          </p>

          <h2>
            التفاصيل الرسمية
            <br />
            ستأتي لاحقاً.
          </h2>

        </div>

        <div className="update-list">

          <div className="update-item">
            <span>01</span>

            <strong>
              الاعتماد
            </strong>

            <p>
              استكمال إجراءات اعتماد الفعالية والموافقات
              اللازمة.
            </p>
          </div>

          <div className="update-item">
            <span>02</span>

            <strong>
              تفاصيل السباق
            </strong>

            <p>
              سيتم الإعلان عن المسافات والمسارات ومعلومات
              يوم السباق بعد تأكيدها.
            </p>
          </div>

          <div className="update-item">
            <span>03</span>

            <strong>
              التسجيل
            </strong>

            <p>
              سيتم الإعلان عن فتح التسجيل الرسمي
              ومعلومات المشاركين لاحقاً.
            </p>
          </div>

        </div>

      </section>


      {/* PARTNERS */}
      <section
        id="partners"
        className="partners"
      >

        <p className="eyebrow">
          شركاؤنا
        </p>

        <h2>
          نبنيه مع المجتمع.
        </h2>

        <p className="partners-text">
          سيتم الإعلان عن الشركاء والرعاة الرسميين
          مع تطور الحدث.
        </p>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-content">

          <p className="eyebrow">
            تواصل معنا
          </p>

          <h2>
            لديك سؤال؟
          </h2>

          <p>
            إذا كنت مهتماً بالجري المجتمعي، أو ترغب في
            التعاون، أو تريد معرفة المزيد عن ماراثون القطيف،
            تواصل معنا.
          </p>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            تواصل عبر واتساب ←
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-main">

          <img
            src="/qatif-marathon-logo.png"
            alt="ماراثون القطيف"
          />

          <p>
            ماراثون القطيف 2026
          </p>

        </div>


        <div className="footer-contact">

          <span>
            لديك سؤال؟
          </span>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            تواصل عبر واتساب ←
          </a>

        </div>


        <div className="footer-right">

          <p>
            5 ديسمبر 2026
          </p>

          <p>
            © 2026 ماراثون القطيف. جميع الحقوق محفوظة.
          </p>

        </div>

      </footer>

    </main>
  )
}

export default ArabicApp