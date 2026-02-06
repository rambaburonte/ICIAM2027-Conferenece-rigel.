import React, { useEffect } from 'react';
import heroBg from './assets/hero-bg.jpg';
import './css/vendorc619.css';
import './css/mainc09f.css';
import './css/devstyles43e1.css';

interface StatisticItem {
  value: number;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  target?: string;
  ariaLabel: string;
}

interface SocialLink {
  url: string;
  label: string;
  icon: React.ReactNode;
}

interface FooterContact {
  title: string;
  email: string;
}

/**
 * Americas LNG Summit & Exhibition - Main Landing Page Component
 * A fully-functional React component converted from HTML template
 * Features: Header, Banner, Statistics, Two-Column Content, Footer
 */
const AmericasLNGSummit: React.FC = () => {
  // Load Google Maps API on component mount
  useEffect(() => {
    const loadGoogleMapsAPI = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBd8DJQdb77Nn63sqpAM0Orj3aIJCUTkQE&callback=initMap';
        script.async = true;
        script.defer = true;
        
        (window as any).initMap = () => {
          console.log('Google Maps API loaded');
        };
        
        script.onerror = () => {
          console.error('Failed to load Google Maps API');
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    loadGoogleMapsAPI();
  }, []);

  // Navigation links for header
  const navLinks: NavLink[] = [
    { href: 'index.html', label: 'Home', ariaLabel: 'home' },
    { href: 'exhibition/index.html', label: 'EXHIBITION', ariaLabel: 'EXHIBITION' },
    { href: 'sponsorship/sponsorship-opportunities/index.html', label: 'SPONSORSHIP', ariaLabel: 'SPONSORSHIP' },
    { href: 'javascript:Void(0)', label: 'CONFERENCES', ariaLabel: 'CONFERENCES' },
    { href: 'call-for-papers/index.html', label: 'CALL FOR PAPERS', ariaLabel: 'CALL FOR PAPERS' },
    { href: 'americas-lng-awards/index.html', label: 'AMERICAS LNG AWARDS', ariaLabel: 'AMERICAS LNG AWARDS' },
    { href: 'conferences/americas-lng-golf-tournament/index.html', label: 'GOLF TOURNAMENT', ariaLabel: 'GOLF TOURNAMENT' },
    { href: 'plan-your-visit/venue/index.html', label: 'PLAN YOUR VISIT', ariaLabel: 'PLAN YOUR VISIT' },
    { href: 'media-center/2025-photo-gallery/index.html', label: 'MEDIA CENTER', ariaLabel: 'MEDIA CENTER' },
  ];

  // Banner statistics
  const statistics: StatisticItem[] = [
    { value: 5000, label: 'Attendees' },
    { value: 300, label: 'Exhibitors' },
    { value: 150, label: 'Speakers' },
    { value: 40, label: 'Conference Sessions' },
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      url: 'https://www.facebook.com/people/Americas-LNG-Summit-Exhibition/61579621898944/?mibextid=wwXIfr',
      label: 'Follow us on Facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10.619" height="23.006" viewBox="0 0 10.619 23.006">
          <path d="M1554.639,6133.647h4.632v-11.6h3.232l.345-3.884h-3.577v-2.213c0-.915.184-1.277,1.07-1.277h2.507v-4.031h-3.208c-3.447,0-5,1.518-5,4.424v3.1h-2.41v3.932h2.41Z" transform="translate(-1552.229 -6110.641)" fill="#fff" />
        </svg>
      ),
    },
    {
      url: 'https://twitter.com/AmericasGas',
      label: 'Follow us on Twitter',
      icon: (
        <svg height="1em" viewBox="0 0 512 512">
          <path fill="#fff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
    },
    {
      url: 'https://www.linkedin.com/company/americas-lng-gas/',
      label: 'Follow us on LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.077" height="19.086" viewBox="0 0 19.077 19.086">
          <g transform="translate(-1776.531 -6111.539)">
            <rect width="3.939" height="12.724" transform="translate(1776.909 6117.901)" fill="#fff" />
            <path d="M1778.86,6116.235a2.348,2.348,0,1,0-2.329-2.348A2.339,2.339,0,0,0,1778.86,6116.235Z" fill="#fff" />
            <path d="M1787.144,6123.946c0-1.789.823-2.854,2.4-2.854,1.448,0,2.144,1.023,2.144,2.854v6.679h3.92v-8.056c0-3.408-1.932-5.056-4.63-5.056a4.435,4.435,0,0,0-3.834,2.1V6117.9h-3.778v12.724h3.778Z" fill="#fff" />
          </g>
        </svg>
      ),
    },
    {
      url: 'https://www.youtube.com/channel/UColSwAl55Qam-waYgCAmybw',
      label: 'Follow us on YouTube',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="21.271" height="14.986" viewBox="0 0 21.271 14.986">
          <g transform="translate(-1718.434 -6114.651)">
            <path d="M1739.257,6117a2.69,2.69,0,0,0-1.885-1.9c-1.656-.447-8.3-.447-8.3-.447s-6.647,0-8.315.447a2.671,2.671,0,0,0-1.885,1.9,28.584,28.584,0,0,0-.435,5.149,27.827,27.827,0,0,0,.447,5.148,2.693,2.693,0,0,0,1.885,1.9c1.656.447,8.3.447,8.3.447s6.647,0,8.315-.447a2.671,2.671,0,0,0,1.886-1.9,28.583,28.583,0,0,0,.435-5.148A27.777,27.777,0,0,0,1739.257,6117Zm-12.363,8.315v-6.333l5.559,3.167Z" fill="#fff" />
          </g>
        </svg>
      ),
    },
  ];

  // Footer contacts
  const footerContacts: FooterContact[] = [
    { title: 'Speaking and conference', email: 'info@americaslngsummit.com' },
    { title: 'Attending and group bookings', email: 'delegates@americaslngsummit.com' },
    { title: 'General inquiries', email: 'info@americaslngsummit.com' },
    { title: 'Sponsorship and exhibition', email: 'sales@americaslngsummit.com' },
    { title: 'Marketing and partnerships', email: 'marketing@americaslngsummit.com' },
  ];

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N6GC5CW"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>

      {/* Header */}
      <header className="header main_header">
        <div className="header__container">
          {/* Logo Section */}
          <div className="header__top-logo">
            <a href="index.html" aria-label="Home">
              <img
                src="media/ad2dux3m/lng-americas-logo-no-date_colour-gradient-solid-colour-text.html"
                alt="Americas 2025 LNG Awards Project"
              />
            </a>
            <h6>
              October 13-15, 2026
              <br />
              Lake Charles, USA
            </h6>
          </div>

          {/* Header CTA - Desktop */}
          <div className="header__top-cta desktop-only">
            <div className="btn-theme-3 header_cta">
              <a
                href="forms/download-event-brochure/index.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EVENT BROCHURE"
              >
                EVENT BROCHURE
              </a>
            </div>
            <div className="btn-theme-4 header_cta">
              <a href="forms/book-your-booth/index.html" aria-label="BOOK YOUR BOOTH">
                BOOK YOUR BOOTH
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="header__menu">
            {/* Header CTA - Mobile */}
            <div className="header__top-cta mobile-only">
              <div className="btn-theme-3 header_cta">
                <a
                  href="forms/download-event-brochure/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EVENT BROCHURE"
                >
                  EVENT BROCHURE
                </a>
              </div>
              <div className="btn-theme-4 header_cta">
                <a href="forms/book-your-booth/index.html" aria-label="BOOK YOUR BOOTH">
                  BOOK YOUR BOOTH
                </a>
              </div>
            </div>

            {/* Navigation List */}
            <ul className="header__menu-list">
              <li tabIndex={0}>
                <a href="index.html" aria-label="home">
                  <span className="home">
                    <svg height="18px" viewBox="0 0 512 512" width="16px" xmlns="http://www.w3.org/2000/svg">
                      <path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" />
                    </svg>
                  </span>
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.ariaLabel} className="first-level">
                  <span className="bg__after" />
                  <a
                    className=""
                    href={link.href}
                    target={link.target || '_self'}
                    aria-label={link.ariaLabel}
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="hamburger-icon">
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <main>
        {/* Social Icons Section */}
        <section className="social-icons__wrapper">
          <div className="social-icons--inner">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section className="component__banner banner">
          <div className="swiper banner__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide banner__slider-slide">
                <div className="banner__bg-wrap">
                  <img
                    src={heroBg}
                    className="banner__bg"
                    alt="Americas LNG Home Page Banner"
                  />
                </div>
                <div className="container banner__container">
                  <div className="banner__content">
                    <div className="banner__content-text">
                      <div className="animated__text">
                        <h1>
                          International Conference on 
                          <br />
                          Advanced Materials Science and  Engineering
                          <br />
                         
                        </h1>
                      </div>
                      <div className="btn-wrap">
                        <div className="btn-theme-3">
                          <a href="forms/del-reg/delegate-registration/index.html" className="button__primary">
                            BOOK YOUR DELEGATE PASS
                          </a>
                        </div>
                        <div className="btn-theme-5">
                          <a href="forms/visitor-registration/index.html" className="button__primary">
                            BOOK YOUR EXHIBITION VISITOR PASS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Banner Statistics */}
                  <div className="statistics banner__statistics">
                    <div className="statistics__col-wrap">
                      <div className="swiper statistics-slider__swiper1">
                        <div className="swiper-wrapper">
                          {statistics.map((stat) => (
                            <div key={stat.label} className="swiper-slide">
                              <div className="statistics__col">
                                <h4>
                                  <span className="counter" data-target={stat.value}>
                                    0
                                  </span>
                                  <span>+</span>
                                </h4>
                                <p>{stat.label}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="umb-block-grid" style={{ '--umb-block-grid--grid-columns': '12' } as React.CSSProperties}>
          <div className="umb-block-grid__layout-container">
            {/* Two Column Section */}
            <div
              className="umb-block-grid__layout-item"
              style={{ '--umb-block-grid--item-column-span': '12', '--umb-block-grid--item-row-span': '1' } as React.CSSProperties}
            >
              <div>
                <div className="umb-block-grid__area-container">
                  <div
                    className="umb-block-grid__area"
                    style={{ '--umb-block-grid--grid-columns': '12', '--umb-block-grid--area-column-span': '12', '--umb-block-grid--area-row-span': '1' } as React.CSSProperties}
                  >
                    <div className="umb-block-grid__layout-container">
                      <div
                        className="umb-block-grid__layout-item"
                        style={{ '--umb-block-grid--item-column-span': '12', '--umb-block-grid--item-row-span': '1' } as React.CSSProperties}
                      >
                        <section className="two-col-block">
                          <div className="container">
                            <div className="two-col-wrapper">
                              <div className="two-col-content">
                                <h2>Building global energy security, fueling domestic growth</h2>
                                <p>
                                  The 22nd Americas LNG Summit & Exhibition returns to Lake Charles, USA, on October 13–15, 2026,
                                  bringing together energy leaders to explore the importance of LNG for economic growth, energy security
                                  and the global energy transition. Drawing on more than two decades' pedigree as a valued meeting place
                                  for industry leaders, this year's summit takes place at a time of much anticipated growth and investment
                                  in the sector, particularly following major shifts in US LNG policy.
                                </p>
                                <p>
                                  As the world's largest LNG supplier, the US plays a crucial role in fostering bilateral partnerships,
                                  supporting emerging economies, and advancing sustainable growth. The event will take place in Lake Charles,
                                  Louisiana - the epicenter of US LNG, and a vibrant hub of manufacturing expertise.
                                </p>
                                <p>
                                  The international exhibition will feature over 300 leading regional and international companies, providing
                                  a key platform to connect with existing and planned LNG and gas projects, alongside the supporting LNG
                                  value chain.
                                </p>

                                {/* Content Statistics */}
                                <div className="statistics">
                                  <div className="statistics__col-wrap">
                                    <div className="swiper statistics-slider__swiper1">
                                      <div className="swiper-wrapper">
                                        {statistics.map((stat) => (
                                          <div key={`content-${stat.label}`} className="swiper-slide">
                                            <div className="statistics__col">
                                              <h4>
                                                <span className="counter" data-target={stat.value}>
                                                  0
                                                </span>
                                                <span>+</span>
                                              </h4>
                                              <p>{stat.label}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Content CTA Buttons */}
                                <div className="btn-wrap">
                                  <div className="btn-theme-4">
                                    <a href="forms/download-event-brochure/index.html" target="_blank" rel="noopener noreferrer">
                                      EVENT BROCHURE
                                    </a>
                                  </div>
                                  <div className="btn-theme-4">
                                    <a href="forms/book-your-booth/index.html" target="_blank" rel="noopener noreferrer">
                                      BOOK YOUR BOOTH
                                    </a>
                                  </div>
                                  <div className="btn-theme-4">
                                    <a href="forms/del-reg/delegate-registration/index.html" target="_blank" rel="noopener noreferrer">
                                      BOOK A DELEGATE PASS
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Video Media */}
                              <div className="two-col-media">
                                <div
                                  id="player"
                                  className="js-youtube-player"
                                  data-plyr-provider="youtube"
                                  data-plyr-embed-id="O6kdfCwAoQU"
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>

                      {/* Mayor Quote Section */}
                      <div className="umb-block-grid__layout-item">
                        <section className="floor__plan">
                          <div className="container">
                            <div className="common-head">
                              <img
                                src="media/mnlj4oti/americas26-mayor-quote-1280x5002dc0.html?rmode=max&width=1538&height=600"
                                alt="Mayor Quote"
                                width={1538}
                                height={600}
                              />
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* --- Begin: Additional Main Content Sections from HTML --- */}
                      {/* Card Blocks Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <section className="image-text-card-block three-col-image-card enable-background">
                          <div className="container">
                            {/* TODO: Map and render card blocks with hover content here */}
                            <div className="card-blocks-placeholder">Card blocks go here</div>
                          </div>
                        </section>
                      </div>

                      {/* Full Width Header Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <div className="full-width-header theme-3">
                          <div className="container">
                            {/* TODO: Add full width header content here */}
                            <div className="full-width-header-placeholder">Full width header content</div>
                          </div>
                        </div>
                      </div>

                      {/* Logo Listing Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <section className="logo__listing-module layout-2">
                          {/* TODO: Map and render logo listings here */}
                          <div className="logo-listing-placeholder">Logo listing goes here</div>
                        </section>
                      </div>

                      {/* Text CTA Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <section className="component__text-cta align-center" style={{ background: 'url(images/wave-background-1.html)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="component__text-cta-wrapper">
                            {/* TODO: Add text CTA content here */}
                            <div className="text-cta-placeholder">Text CTA content</div>
                          </div>
                        </section>
                      </div>

                      {/* Another Full Width Header Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <div className="full-width-header theme-3">
                          <div className="container">
                            {/* TODO: Add another full width header content here */}
                            <div className="full-width-header-placeholder">Another full width header content</div>
                          </div>
                        </div>
                      </div>

                      {/* Floor Plan Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <section className="floor__plan">
                          <div className="container">
                            <div className="common-head">
                              <img src="media/reqpbnmj/americas-26-floorplan.html" alt="Floor Plan" />
                            </div>
                          </div>
                        </section>
                      </div>

                      {/* Company Slider Section (Placeholder) */}
                      <div className="umb-block-grid__layout-item">
                        <section className="company-slider__wrapper layout-two">
                          <div className="container">
                            {/* TODO: Add company slider content here */}
                            <div className="company-slider-placeholder">Company slider content</div>
                          </div>
                        </section>
                      </div>
                      {/* --- End: Additional Main Content Sections from HTML --- */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            {/* Footer Block 1: Timings & Location */}
            <div className="footer-block-1">
              <div className="footer-timings">
                <h5 className="footer-heading">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 24 24' } as React.CSSProperties} xmlSpace="preserve">
                    <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2 V18z M17,18h-2v-2h2V18z" />
                  </svg>
                  EXHIBITION TIMINGS
                </h5>
                <div className="footer-content">
                  <p>
                    October 14, 2026: 10:00 AM-6:00 PM
                    <br />
                    October 15, 2026: 9:00 AM-5:30 PM
                  </p>
                </div>
              </div>

              <div className="footer-venue">
                <h5 className="footer-heading">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' } as React.CSSProperties} xmlSpace="preserve">
                    <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333S208.948,85.333,256,85.333S341.333,123.615,341.333,170.667S303.052,256,256,256z" />
                  </svg>
                  LOCATION
                </h5>
                <div className="footer-content">
                  <p>Event Center, Lake Charles, USA</p>
                </div>
              </div>
            </div>

            {/* Footer Block 2: Quick Links */}
            <div className="footer-block-2">
              <h5 className="footer-heading">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 162.656 162.656" style={{ enableBackground: 'new 0 0 162.656 162.656' } as React.CSSProperties} xmlSpace="preserve">
                  <g>
                    <path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z" />
                    <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z" />
                  </g>
                </svg>
                QUICK LINKS
              </h5>
              <div className="footer_list">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="exhibition/about-the-exhibition/index.html" title="About The Exhibition">
                      About the exhibition
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer noopener"
                      href="conferences/strategic-conference/about-the-strategic-conference/index.html"
                      target="_blank"
                      title="About The Strategic Conference"
                    >
                      About the Strategic Conference
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer noopener"
                      href="conferences/technical-conference/about-the-technical-conference/index.html"
                      target="_blank"
                      title="About The Technical Conference"
                    >
                      About the Technical Conference
                    </a>
                  </li>
                  <li>
                    <a href="contact-us-now/contact-us/index.html" title="REGISTER YOUR INTEREST">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="footer-socialmedia">
                <h5 className="footer-heading">
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 13.15 12.79">
                    <g id="Layer_1-2">
                      <g>
                        <path
                          className="cls-1"
                          d="m11.4,10.8c.35-.17.88-.41,1.02-.81.14-.39-.1-.8-.17-1.19.38-.1.81-.36.88-.93.08-.62-.37-.89-.84-1.16.1-.09.17-.16.25-.21.38-.28.58-.66.4-1.12-.17-.45-.53-.65-1.02-.64-1.33.03-2.66,0-3.99,0,.23-1.53.69-3.13-.58-4.37-.38-.37-1.08-.61-1.18.04-.14.85.38,1.86,0,2.7-.4.88-.88,1.53-1.37,2.37-.24.42-.58.79-.85,1.19-.08.12-.14.29-.14.44-.01,1.44-.01,2.87,0,4.31,0,.13.04.32.13.39.46.35.94.63,1.57.62,1.54-.02,3.08.01,4.62,0,.96,0,1.96-.56,1.28-1.64"
                        />
                        <path
                          className="cls-1"
                          d="m2.5,12.79H.62c-.34,0-.62-.28-.62-.62v-5.45c0-.34.28-.62.62-.62h1.88c.34,0,.62.28.62.62v5.45c0,.34-.28.62-.62.62"
                        />
                      </g>
                    </g>
                  </svg>
                  FOLLOW US
                </h5>
                <ul>
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Block 3: Contact */}
            <div className="footer-block-3">
              <h5 className="footer-heading">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-at-sign"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                </svg>
                CONTACT US
              </h5>
              <div className="footer-content-row">
                {footerContacts.map((contact) => (
                  <div key={contact.email} className="footer-content-text">
                    <p>{contact.title}</p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-links">
              <a
                href="https://www.dmgevents.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.dmgevents.com/website-terms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Terms and Conditions"
              >
                Terms & Conditions
              </a>
              <a
                href="https://www.dmgevents.com/cookies-policy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Cookie Policy"
              >
                Cookie Policy
              </a>
              <a
                href="https://www.dmgevents.com/visitor-terms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitor Terms"
              >
                Visitor Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* DMG Footer */}
      <div className="dmgfooter">
        <div className="container">
          <div className="dmgfooter__row">
            <div className="dmgfooter__col">
              <div className="dmgfooter__col-logo">
                <div className="dmgfooter__col-logo-icon">
                  <a href="https://www.dmgevents.com/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/dmglogo.html" alt="dmg-logo" />
                    <span>
                      <img src="images/dmg-footer/Tail-icon-footer.html" alt="Tail-icon-footer" />
                    </span>
                  </a>
                </div>
                <p>
                  dmg events is an international exhibition and conference organiser, publisher and information provider to the
                  Energy, Construction, Plastics, Coatings, Manufacturing, Transport, Design and Hospitality industries.
                </p>
              </div>
              <div className="dmgfooter__col-member">
                <p>Member of</p>
                <div className="dmgfooter__col-images">
                  <a href="https://www.ufi.org/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/ufi.html" alt="ufi-member" />
                  </a>
                  <a href="https://www.siso.org/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/siso.html" alt="siso" />
                  </a>
                  <a href="https://www.aaxo.co.za/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/aaxo.html" alt="aaxo" />
                  </a>
                  <a href="https://www.aeo.org.uk/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/aeo.html" alt="aeo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="dmgfooter__col dmgfooter__col-icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/dmgeventsglobal/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/fb.html" alt="fb" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/dmgeventsglobal?mx=2" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/twitter.html" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/dmgevents/" target="_blank" rel="noopener noreferrer">
                    <img src="images/dmg-footer/linkedin.html" alt="linked in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dmgfooter__row-links">
            <ul>
              <li>
                <a href="https://www.dmgevents.com/cookies-policy/" target="_blank" rel="noopener noreferrer">
                  Cookies Preferences
                </a>
              </li>
              <li>
                <a href="https://www.dmgevents.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://www.dmgevents.com/website-terms/" target="_blank" rel="noopener noreferrer">
                  Website Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmericasLNGSummit;
