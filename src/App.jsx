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

          <span>
            QATIF MARATHON
          </span>

        </div>

        <div className="nav-links">

          <a href="#race">
            The Event
          </a>

          <a href="#about">
            About
          </a>

          <a href="#distances">
            Distances
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
            A proposed multi-distance road-running event in Qatif.
            <br />
            Target date: December 5, 2026.
          </p>

          <p className="hero-status">
            Qatif Marathon is currently a proposed event under
            development and subject to the necessary approvals
            and coordination. The proposal includes a full
            42.195 km marathon, a 21.1 km half marathon,
            10 km and 5 km distances. Official race details
            and registration will be announced once the event
            is approved and confirmed.
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
              href="#distances"
            >
              Proposed Distances →
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
              42.195 KM
            </strong>

            <span>
              MARATHON
            </span>

          </div>

          <div>

            <strong>
              IN DEVELOPMENT
            </strong>

            <span>
              SUBJECT TO APPROVAL
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
            Qatif Marathon is a proposed multi-distance
            road-running event being developed to bring
            runners together and showcase Qatif as a
            destination for sport, movement and community.
          </p>

          <p>
            The proposal includes four race distances:
            a full 42.195 km marathon, a 21.1 km half
            marathon, 10 km and 5 km.
          </p>

          <p>
            The target date for the proposed event is
            December 5, 2026. The event is currently
            under development, with the necessary
            approvals, coordination and preparations
            being pursued. Official details and registration
            will be announced once confirmed.
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
            PROPOSED DISTANCES
          </p>

          <h2>
            Four distances.
            <br />
            One event.
          </h2>

        </div>

        <div className="update-list">

          <div className="update-item">

            <span>
              01
            </span>

            <strong>
              Marathon
            </strong>

            <p>
              42.195 km full-distance marathon.
            </p>

          </div>

          <div className="update-item">

            <span>
              02
            </span>

            <strong>
              Half Marathon
            </strong>

            <p>
              21.1 km half marathon.
            </p>

          </div>

          <div className="update-item">

            <span>
              03
            </span>

            <strong>
              10 KM & 5 KM
            </strong>

            <p>
              Shorter distances designed to make the
              proposed event accessible to a wider range
              of runners.
            </p>

          </div>

        </div>

      </section>


      {/* WHAT'S NEXT */}
      <section className="updates">

        <div>

          <p className="eyebrow">
            WHAT'S NEXT
          </p>

          <h2>
            Building the event
            <br />
            step by step.
          </h2>

        </div>

        <div className="update-list">

          <div className="update-item">

            <span>
              01
            </span>

            <strong>
              Approvals
            </strong>

            <p>
              Completing the necessary approvals and
              authorization for the proposed event.
            </p>

          </div>

          <div className="update-item">

            <span>
              02
            </span>

            <strong>
              Event Planning
            </strong>

            <p>
              Developing the course, race operations,
              safety and other event requirements.
            </p>

          </div>

          <div className="update-item">

            <span>
              03
            </span>

            <strong>
              Official Registration
            </strong>

            <p>
              Official registration and participant
              information will be released once the
              event is approved and confirmed.
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
          as the event develops and partnerships are confirmed.
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
            Interested in the proposed event, potential
            partnerships, or simply want to know more about
            Qatif Marathon?
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