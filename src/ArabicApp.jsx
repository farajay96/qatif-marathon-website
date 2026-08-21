import './App.css'

function ArabicApp() {
  const whatsappNumber = '966553882226'

  const whatsappMessage = encodeURIComponent(
    'السلام عليكم، لدي استفسار عن ماراثون القطيف.'
  )

  const baseUrl = import.meta.env.BASE_URL

  return (
    <main className="site arabic-site">

      {/* NAVIGATION */}
      <nav className="navbar">

        <div className="nav-logo">

          <img
            src={`${baseUrl}qatif-marathon-logo.png`}
            alt="ماراثون القطيف"
          />

          <span>
            QATIF MARATHON
          </span>

        </div>

        <div className="nav-links">

          <a href="#race">
            الفعالية
          </a>

          <a href="#about">
            عن الماراثون
          </a>

          <a href="#distances">
            المسافات
          </a>

          <a
            href="https://www.instagram.com/qatifmarathon/"
            target="_blank"
            rel="noreferrer"
          >
            إنستغرام
          </a>

          <a href="#contact">
            تواصل معنا
          </a>

        </div>

        <a
          className="language"
          href={baseUrl}
        >
          English
        </a>

      </nav>


      {/* HERO */}
      <section
        id="race"
        className="hero"
      >

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
            فعالية جري مقترحة متعددة المسافات في القطيف.
            <br />
            الموعد المقترح: ديسمبر 2026.
          </p>

          <p className="hero-status">
            ماراثون القطيف فعالية مقترحة قيد التطوير وتخضع
            للموافقات والتنسيق اللازم. يتضمن المقترح
            ماراثوناً كاملاً لمسافة 42.195 كم، ونصف ماراثون
            لمسافة 21.1 كم، بالإضافة إلى مسافتي 10 كم و5 كم.
            والتاريخ المقترح للفعالية قيد الدراسة حالياً.
            سيتم الإعلان عن تفاصيل السباق الرسمية والتسجيل
            بعد اعتماد الفعالية وتأكيدها.
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
              href="#distances"
            >
              المسافات المقترحة ←
            </a>

          </div>

        </div>


        {/* HERO LOGO */}
        <div className="hero-logo">

          <img
            src={`${baseUrl}qatif-marathon-logo.png`}
            alt="Qatif Marathon"
          />

        </div>


        {/* HERO INFORMATION */}
        <div className="hero-bottom">

          <div>

            <strong>
              ديسمبر 2026
            </strong>

            <span>
              الشهر المقترح
            </span>

          </div>

          <div>

            <strong>
              42.195 كم
            </strong>

            <span>
              ماراثون
            </span>

          </div>

          <div>

            <strong>
              التاريخ قيد الدراسة
            </strong>

            <span>
              الفعالية المقترحة
            </span>

          </div>

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
            ماراثون القطيف هو فعالية جري مقترحة متعددة
            المسافات على الطرق، يجري تطويرها بهدف جمع
            العدائين وإبراز القطيف كوجهة للرياضة والحركة
            والمجتمع.
          </p>

          <p>
            يتضمن المقترح أربع مسافات:
            ماراثون كامل لمسافة 42.195 كم،
            ونصف ماراثون لمسافة 21.1 كم،
            بالإضافة إلى 10 كم و5 كم.
          </p>

          <p>
            من المقترح إقامة الفعالية خلال شهر ديسمبر
            2026، بينما لا يزال التاريخ المحدد قيد الدراسة.
            وتخضع الفعالية حالياً للتطوير واستكمال
            الموافقات والتنسيق والاستعدادات اللازمة.
            سيتم الإعلان عن التفاصيل الرسمية والتسجيل
            بعد تأكيدها واعتمادها.
          </p>

        </div>

      </section>


      {/* PROPOSED DISTANCES */}
      <section
        id="distances"
        className="updates"
      >

        <div>

          <p className="eyebrow">
            المسافات المقترحة
          </p>

          <h2>
            أربع مسافات.
            <br />
            فعالية واحدة.
          </h2>

        </div>

        <div className="update-list">

          <div className="update-item">

            <span>
              01
            </span>

            <strong>
              الماراثون
            </strong>

            <p>
              ماراثون كامل لمسافة 42.195 كم.
            </p>

          </div>

          <div className="update-item">

            <span>
              02
            </span>

            <strong>
              نصف الماراثون
            </strong>

            <p>
              نصف ماراثون لمسافة 21.1 كم.
            </p>

          </div>

          <div className="update-item">

            <span>
              03
            </span>

            <strong>
              10 كم و5 كم
            </strong>

            <p>
              مسافات أقصر تتيح المشاركة لشريحة أوسع
              من العدائين.
            </p>

          </div>

        </div>

      </section>


      {/* WHAT'S NEXT */}
      <section className="updates">

        <div>

          <p className="eyebrow">
            ما القادم؟
          </p>

          <h2>
            نبني الفعالية
            <br />
            خطوة بخطوة.
          </h2>

        </div>

        <div className="update-list">

          <div className="update-item">

            <span>
              01
            </span>

            <strong>
              الموافقات
            </strong>

            <p>
              استكمال الموافقات اللازمة واعتماد
              الفعالية والتنسيق مع الجهات ذات العلاقة.
            </p>

          </div>

          <div className="update-item">

            <span>
              02
            </span>

            <strong>
              تخطيط الفعالية
            </strong>

            <p>
              تطوير المسارات وعمليات السباق ومتطلبات
              السلامة وغيرها من متطلبات الفعالية.
            </p>

          </div>

          <div className="update-item">

            <span>
              03
            </span>

            <strong>
              التسجيل الرسمي
            </strong>

            <p>
              سيتم الإعلان عن التسجيل الرسمي ومعلومات
              المشاركين بعد اعتماد الفعالية وتأكيدها.
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
          مع تطور الحدث وتأكيد الشراكات.
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
            إذا كنت مهتماً بالفعالية المقترحة أو بالشراكات
            المحتملة، أو ترغب في معرفة المزيد عن
            ماراثون القطيف، تواصل معنا.
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
            src={`${baseUrl}qatif-marathon-logo.png`}
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
            ديسمبر 2026
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