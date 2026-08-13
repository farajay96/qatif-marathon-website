import './App.css'

function App() {
  const whatsappNumber = '966553882226'

  const whatsappMessage = encodeURIComponent(
    'Hello, I have a question about Qatif Marathon.'
  )

  const baseUrl = import.meta.env.BASE_URL

  return (
    <main className="site">

      {/* NAVIGATION */}
      <nav className="navbar">

        <div className="nav-logo">
          <img
            src={`${baseUrl}qatif-marathon-logo.png`}
            alt="Qatif Marathon"
          />

          <span>QATIF MARATHON</span>
        </div>

        <div className="nav-links">

          <a href="#race">
            The Event
          </a>

          <a href="#community">
            Community Run
          </a>

          <a href="#about">
            About
          </a>

          <a
            href="https://www.instagram.com/qatifmarathon/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <a
          className="language"
          href={`${baseUrl}ar`}
        >
          العربية
        </a>

      </nav>


      {/* HERO */}
      <section
        id="race"
        className="hero"
      >

        <div className="hero-content">

          <p className="eyebrow">
            QATIF • EASTERN PROVINCE • SAUDI ARABIA
          </p>

          <h1>
            QATIF
            <br />
            MARATHON.
          </h1>

          <p className="hero-text">
            A new running experience in Qatif.
            <br />
            December 5, 2026.
          </p>

          <p className="hero-status">
            The event is currently being developed.
            Official race details, distances and registration
            will be announced once confirmed.
          </p>

          <div className="hero-actions">

            <a
              className="primary-button"
              href="https://forms.gle/eG2oocS4xShrFeMJ6"
              target="_blank"
              rel="noreferrer"
            >
              Register Your Interest
            </a>

            <a
              className="secondary-button"
              href="#community"
            >
              Community Run →
            </a>

          </div>

        </div>


        {/* HERO LOGO */}
        <div className="hero-logo">

          <img
            src={`${baseUrl}qatif-marathon-logo.png`}
            alt=""
          />

        </div>


        {/* HERO INFORMATION */}
        <div className="hero-bottom">

          <div>
            <strong>
              05.12.2026
            </strong>

            <span>
              TARGET DATE
            </span>
          </div>

          <div>
            <strong>
              QATIF
            </strong>

            <span>
              EASTERN PROVINCE
            </span>
          </div>

          <div>
            <strong>
              COMING SOON
            </strong>

            <span>
              OFFICIAL DETAILS
            </span>
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
            COMMUNITY RUN
          </p>

          <h2>
            We start
            <br />
            with the community.
          </h2>

          <p>
            A community run has been announced
            for December 5, 2026 for people who want to
            come together and run a full{' '}
            <strong>
              42.195 km MARATHON
            </strong>{' '}
            in Qatif.
          </p>

          <p>
            This community run is not currently an organized
            race or official event. It is an opportunity for
            runners to come together and run at their own risk.
          </p>


          {/* WARNING */}
          <div className="community-warning">

            <div className="warning-icon">
              !
            </div>

            <div>

              <strong>
                Important
              </strong>

              <span>
                Participation in the community run is at the
                participant's own risk. There is currently no
                official race registration or organized race
                services.
              </span>

            </div>

          </div>


          {/* COMMUNITY CTA */}
          <a
            className="community-button"
            href="https://forms.gle/eG2oocS4xShrFeMJ6"
            target="_blank"
            rel="noreferrer"
          >
            Register Your Interest →
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
            THE EVENT
          </p>

          <h2>
            Qatif.
            <br />
            Made to Move.
          </h2>

        </div>


        <div className="about-text">

          <p>
            Qatif Marathon is a community road-running event
            being developed to bring runners together and
            showcase Qatif as a destination for sport, movement
            and community.
          </p>

          <p>
            The event is currently being developed and the
            necessary approvals and preparations are underway.
            Official race details will be announced once
            confirmed.
          </p>

        </div>

      </section>


      {/* WHAT'S NEXT */}
      <section className="updates">

        <div>

          <p className="eyebrow">
            WHAT'S NEXT
          </p>

          <h2>
            Official details
            <br />
            will come later.
          </h2>

        </div>


        <div className="update-list">

          <div className="update-item">

            <span>
              01
            </span>

            <strong>
              Authorization
            </strong>

            <p>
              Completing the necessary approvals and
              authorization for the event.
            </p>

          </div>


          <div className="update-item">

            <span>
              02
            </span>

            <strong>
              Race Details
            </strong>

            <p>
              Distances, course information and race-day
              details will be announced once confirmed.
            </p>

          </div>


          <div className="update-item">

            <span>
              03
            </span>

            <strong>
              Registration
            </strong>

            <p>
              Official registration and participant
              information will be released later.
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
          PARTNERS
        </p>

        <h2>
          Built with the community.
        </h2>

        <p className="partners-text">
          Official partners and sponsors will be announced
          as the event develops.
        </p>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-content">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Have a question?
          </h2>

          <p>
            Interested in the community run, want to collaborate,
            or simply want to know more about Qatif Marathon?
            Get in touch.
          </p>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-main">

          <img
            src={`${baseUrl}qatif-marathon-logo.png`}
            alt="Qatif Marathon"
          />

          <p>
            Qatif Marathon 2026
          </p>

        </div>


        <div className="footer-contact">

          <span>
            HAVE A QUESTION?
          </span>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp →
          </a>

        </div>


        <div className="footer-right">

          <p>
            December 5, 2026
          </p>

          <p>
            © 2026 Qatif Marathon. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  )
}

export default App