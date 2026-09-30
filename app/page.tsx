'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DATA = {
  bride: 'OMAR',
  groom: 'SARAH',
  brideFamily: 'AL-KHATIB',
  groomFamily: 'AL-FAYEZ',
  date: '12 · 12 · 2026',
  time: '8:00 PM',
  location: 'Wedding Venue',
  music: '/omar-sarah-wedding/music/our-wedding.mp3',
  heroImage: '/omar-sarah-wedding/images/our-wedding/hero.jpg',
  storyImage: '/omar-sarah-wedding/images/our-wedding/story.jpg',
  celebrationImage: '/omar-sarah-wedding/images/our-wedding/celebration.jpg',
  moment1: '/omar-sarah-wedding/images/our-wedding/moment-1.jpg',
  moment2: '/omar-sarah-wedding/images/our-wedding/moment-2.jpg',
  moment3: '/omar-sarah-wedding/images/our-wedding/moment-3.jpg',
  finalImage: '/omar-sarah-wedding/images/our-wedding/final.jpg',
};

function Ornament() {
  return <div className="ornament"><span /><b>✦</b><span /></div>;
}

export default function OurWeddingPage() {
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [activeMoment, setActiveMoment] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(DATA.music);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.72;
      }
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return playMusic();
    if (audioRef.current.paused) return playMusic();
    audioRef.current.pause();
    setPlaying(false);
  };

  const enter = async () => {
    await playMusic();
    setEntered(true);
    window.setTimeout(() => {
      document.getElementById('wedding-story')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 150);
  };

  useEffect(() => {
    const stop = () => {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
      setPlaying(false);
    };
    window.addEventListener('pagehide', stop);
    window.addEventListener('beforeunload', stop);
    return () => {
      window.removeEventListener('pagehide', stop);
      window.removeEventListener('beforeunload', stop);
      stop();
    };
  }, []);

  useEffect(() => {
    const target = new Date('2026-12-12T20:00:00+03:00').getTime();

    const updateCountdown = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="page">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.section
            className="entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="entry-image" />
            <div className="entry-overlay" />
            <motion.div
              className="entry-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25 }}
            >
              <p className="entry-eyebrow">A DAY TO REMEMBER</p>
              <h1>OUR WEDDING</h1>
              <p className="entry-arabic">بدايةُ عمرٍ يجمعنا</p>
              <Ornament />
              <motion.button
                type="button"
                className="enter-button"
                onClick={enter}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                ENTER THE WEDDING
              </motion.button>
              <p className="entry-date">{DATA.date}</p>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            className="website"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <motion.button
              type="button"
              className={`music ${playing ? 'playing' : ''}`}
              onClick={toggleMusic}
              aria-label={playing ? 'Pause music' : 'Play music'}
            >
              {playing ? 'Ⅱ' : '♪'}
            </motion.button>

            <section id="wedding-story" className="hero-section">
              <div className="hero-image" style={{ backgroundImage: `url(${DATA.heroImage})` }} />
              <div className="hero-overlay" />
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.25 }}
              >
                <p className="eyebrow">OUR WEDDING</p>
                <h2>{DATA.bride}<span>&</span>{DATA.groom}</h2>
                <p className="arabic">حكاية بدأت بحب… وتكمل بعمرٍ كامل</p>
                <Ornament />
                <p className="date">{DATA.date}</p>
                <p className="scroll">SCROLL DOWN ↓</p>
              </motion.div>
            </section>

            <section className="paper story-section">
              <div className="copy">
                <p className="eyebrow">OUR STORY</p>
                <h2>Two hearts.<br />One forever.</h2>
                <p className="arabic">ومن هنا بدأت الحكاية.</p>
                <Ornament />
                <p className="body">
                  يومٌ نحتفل فيه بالحب، وبكل اللحظات التي أوصلتنا إلى هذه البداية الجديدة.
                  <br />
                  اليوم نكتب فصلًا جديدًا… معًا.
                </p>
              </div>
              <div className="photo" style={{ backgroundImage: `url(${DATA.storyImage})` }} />
            </section>

            <section className="families-section">
              <div className="families-inner">
                <p className="eyebrow">THE FAMILIES</p>
                <h2>Two families.<br />One beautiful beginning.</h2>
                <p className="arabic">فرحتنا تجمع عائلتين في بداية حكاية جديدة.</p>
                <Ornament />

                <div className="families-grid">
                  <div className="family-card">
                    <span>THE BRIDE'S FAMILY</span>
                    <strong>{DATA.brideFamily}</strong>
                  </div>

                  <div className="family-card">
                    <span>THE GROOM'S FAMILY</span>
                    <strong>{DATA.groomFamily}</strong>
                  </div>
                </div>
              </div>
            </section>

            <section className="countdown-section">
              <div className="countdown-inner">
                <p className="eyebrow">COUNTDOWN</p>
                <h2>Until our<br />beautiful day.</h2>
                <p className="arabic">نعدّ الأيام حتى نلتقي ونحتفل معًا.</p>
                <Ornament />

                <div className="countdown-grid">
                  <div className="countdown-item">
                    <strong>{String(timeLeft.days).padStart(2, '0')}</strong>
                    <span>DAYS</span>
                  </div>
                  <div className="countdown-item">
                    <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
                    <span>HOURS</span>
                  </div>
                  <div className="countdown-item">
                    <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
                    <span>MINUTES</span>
                  </div>
                  <div className="countdown-item">
                    <strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>
                    <span>SECONDS</span>
                  </div>
                </div>

                <p className="countdown-date">{DATA.date} · {DATA.time}</p>
              </div>
            </section>

            <section className="cream celebration-section">
              <div className="center">
                <p className="eyebrow">THE CELEBRATION</p>
                <h2>A BEAUTIFUL<br />BEGINNING</h2>
                <p className="arabic">نلتقي لنحتفل، ونفرح بمن نحب.</p>
                <Ornament />
              </div>
              <div className="wide-photo" style={{ backgroundImage: `url(${DATA.celebrationImage})` }} />
            </section>

            <section className="paper moments-section">
              <div className="center">
                <p className="eyebrow">OUR MOMENTS</p>
                <h2>Little moments.<br />Forever memories.</h2>
                <p className="arabic">تفاصيل صغيرة… وذكريات لا تنتهي.</p>
              </div>
              <div className="gallery desktop-gallery">
                <div className="gallery-photo tall" style={{ backgroundImage: `url(${DATA.moment1})` }} />
                <div className="gallery-photo" style={{ backgroundImage: `url(${DATA.moment2})` }} />
                <div className="gallery-photo" style={{ backgroundImage: `url(${DATA.moment3})` }} />
              </div>

              <div className="mobile-gallery">
                <div className="mobile-gallery-main">
                  <div
                    className="mobile-gallery-image"
                    style={{
                      backgroundImage: `url(${
                        [DATA.moment1, DATA.moment2, DATA.moment3][activeMoment]
                      })`,
                    }}
                  />

                  <button
                    type="button"
                    className="gallery-arrow gallery-arrow-left"
                    aria-label="Previous moment"
                    onClick={() =>
                      setActiveMoment((activeMoment - 1 + 3) % 3)
                    }
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="gallery-arrow gallery-arrow-right"
                    aria-label="Next moment"
                    onClick={() => setActiveMoment((activeMoment + 1) % 3)}
                  >
                    ›
                  </button>
                </div>

                <div className="mobile-thumbnails">
                  {[DATA.moment1, DATA.moment2, DATA.moment3].map(
                    (image, index) => (
                      <button
                        type="button"
                        key={image}
                        className={`mobile-thumbnail ${
                          activeMoment === index ? "active" : ""
                        }`}
                        onClick={() => setActiveMoment(index)}
                        aria-label={`Show moment ${index + 1}`}
                      >
                        <span
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      </button>
                    )
                  )}
                </div>

                <div className="mobile-gallery-dots">
                  {[0, 1, 2].map((index) => (
                    <button
                      type="button"
                      key={index}
                      className={activeMoment === index ? "active" : ""}
                      onClick={() => setActiveMoment(index)}
                      aria-label={`Go to moment ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="location-section">
              <div className="location-inner">
                <p className="eyebrow">THE DAY</p>
                <h2>Join us<br />for our wedding.</h2>
                <p className="arabic">وجودكم يجعل فرحتنا أجمل.</p>
                <Ornament />
                <div className="details">
                  <div><span>DATE</span><strong>{DATA.date}</strong></div>
                  <div><span>TIME</span><strong>{DATA.time}</strong></div>
                  <div><span>LOCATION</span><strong>{DATA.location}</strong></div>
                </div>
                <a className="location-button" href="https://maps.app.goo.gl/anXaSFxJjEM3Ufi28?g_st=iw" target="_blank" rel="noopener noreferrer">OPEN LOCATION</a>
              </div>
            </section>

            <section className="final-section">
              <div className="final-image" style={{ backgroundImage: `url(${DATA.finalImage})` }} />
              <div className="final-overlay" />
              <div className="final-content">
                <p className="eyebrow">FOREVER STARTS HERE</p>
                <h2>OUR WEDDING</h2>
                <p className="arabic">وما بين قلبين… تبدأ أجمل الحكايات.</p>
                <Ornament />
                <p className="final-names">{DATA.bride} & {DATA.groom}</p>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f3eee5; color: #33271f; font-family: 'Cormorant Garamond', serif; }
        button { font: inherit; }
        .page { min-height: 100vh; overflow: hidden; background: #f3eee5; }
        .entry { position: fixed; inset: 0; z-index: 9999; display: grid; place-items: center; overflow: hidden; background: #1d1713; color: #f8f2e8; }
        .entry-image { position: absolute; inset: 0; background: linear-gradient(rgba(22,16,12,.45),rgba(22,16,12,.7)), url('/omar-sarah-wedding/images/our-wedding/hero.jpg') center/cover no-repeat; transform: scale(1.04); }
        .entry-overlay { position: absolute; inset: 0; background: radial-gradient(circle at center, transparent 0%, rgba(20,13,9,.38) 55%, rgba(12,8,6,.75) 100%); }
        .entry-content { position: relative; z-index: 2; width: min(90%,900px); text-align: center; }
        .entry-eyebrow,.eyebrow { margin: 0 0 20px; font-size: 12px; letter-spacing: .28em; text-transform: uppercase; }
        .entry h1 { margin: 0; font-size: clamp(52px,10vw,125px); line-height: .86; font-weight: 500; letter-spacing: .04em; }
        .entry-arabic,.arabic { margin: 24px 0 0; font-family: 'Amiri',serif; font-size: clamp(21px,3vw,30px); }
        .ornament { display: flex; align-items: center; justify-content: center; gap: 12px; margin: 28px auto; width: min(260px,60%); }
        .ornament span { height: 1px; flex: 1; background: currentColor; opacity: .42; }
        .ornament b { font-size: 13px; font-weight: 400; }
        .enter-button { margin-top: 18px; border: 1px solid rgba(248,242,232,.65); background: rgba(248,242,232,.06); color: #f8f2e8; padding: 16px 30px; letter-spacing: .18em; font-size: 12px; cursor: pointer; backdrop-filter: blur(10px); transition: background .3s ease; }
        .enter-button:hover { background: rgba(248,242,232,.15); }
        .entry-date { margin: 25px 0 0; font-size: 13px; letter-spacing: .22em; }
        .website { width: 100%; }
        .music { position: fixed; left: 28px; bottom: 24px; z-index: 1000; width: 48px; height: 48px; border: 1px solid rgba(70,53,41,.35); border-radius: 50%; background: rgba(243,238,229,.84); color: #33271f; cursor: pointer; backdrop-filter: blur(12px); font-size: 20px; }
        .music.playing { animation: pulse 1.8s ease-in-out infinite; }
        @keyframes pulse { 50% { transform: scale(1.06); } }
        .hero-section { position: relative; min-height: 100svh; display: grid; place-items: center; overflow: hidden; color: #f8f2e8; }
        .hero-image,.hero-overlay,.final-image,.final-overlay { position: absolute; inset: 0; }
        .hero-image,.final-image { background-position: center; background-size: cover; }
        .hero-overlay,.final-overlay { background: linear-gradient(rgba(22,15,11,.35),rgba(22,15,11,.7)); }
        .hero-content,.final-content { position: relative; z-index: 2; width: min(90%,900px); text-align: center; }
        .hero-content h2 { margin: 0; font-size: clamp(52px,9vw,112px); line-height: .84; font-weight: 500; text-transform: uppercase; }
        .hero-content h2 span { display: block; margin: 10px 0; font-size: .32em; font-style: italic; }
        .date { margin: 20px 0; font-size: 13px; letter-spacing: .24em; }
        .scroll { margin-top: 60px; font-size: 10px; letter-spacing: .25em; }
        .paper,.cream { background: #f3eee5; }
        .story-section { min-height: 100svh; display: grid; grid-template-columns: 1fr 1fr; }
        .copy { display: flex; align-items: center; padding: 9vw; }
        .copy h2,.center h2,.location-inner h2 { margin: 0; font-size: clamp(45px,6vw,82px); line-height: .9; font-weight: 500; }
        .body { max-width: 480px; margin: 0; font-size: 19px; line-height: 1.7; }
        .photo,.wide-photo { background-position: center; background-size: cover; min-height: 650px; }
        .families-section {
          min-height: 75svh;
          display: grid;
          place-items: center;
          padding: 10vw 7vw;
          background: #f3eee5;
          text-align: center;
        }

        .families-inner {
          width: min(100%, 1000px);
        }

        .families-inner h2 {
          margin: 0;
          font-size: clamp(46px, 6.5vw, 82px);
          line-height: .9;
          font-weight: 500;
        }

        .families-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 900px;
          margin: 55px auto 0;
        }

        .family-card {
          min-height: 190px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 30px;
          border: 1px solid rgba(51,39,31,.18);
          background: rgba(255,255,255,.18);
        }

        .family-card span {
          font-size: 10px;
          letter-spacing: .2em;
        }

        .family-card strong {
          font-size: clamp(25px, 3vw, 36px);
          font-weight: 500;
        }

        .countdown-section {
          min-height: 85svh;
          display: grid;
          place-items: center;
          padding: 10vw 7vw;
          background: #e6ded1;
          text-align: center;
        }

        .countdown-inner {
          width: min(100%, 1000px);
        }

        .countdown-inner h2 {
          margin: 0;
          font-size: clamp(48px, 7vw, 88px);
          line-height: .9;
          font-weight: 500;
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin: 60px auto 25px;
          border: 1px solid rgba(51,39,31,.18);
          max-width: 900px;
        }

        .countdown-item {
          min-height: 145px;
          padding: 25px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-right: 1px solid rgba(51,39,31,.18);
        }

        .countdown-item:last-child {
          border-right: 0;
        }

        .countdown-item strong {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1;
          font-weight: 500;
        }

        .countdown-item span {
          font-size: 10px;
          letter-spacing: .2em;
        }

        .countdown-date {
          margin: 25px 0 0;
          font-size: 12px;
          letter-spacing: .18em;
        }

        .celebration-section,.moments-section { padding: 11vw 7vw; }
        .center { text-align: center; max-width: 900px; margin: 0 auto; }
        .wide-photo { margin-top: 70px; height: 72vh; min-height: 450px; }
        .gallery { display: grid; grid-template-columns: 1.1fr .9fr .9fr; gap: 18px; max-width: 1250px; margin: 70px auto 0; }
        .gallery-photo { height: 460px; background-position: center; background-size: cover; }
        .gallery-photo.tall { height: 620px; }

        .mobile-gallery {
          display: none;
        }

        .location-section { min-height: 100svh; display: grid; place-items: center; padding: 10vw 7vw; background: #e6ded1; }
        .location-inner { width: min(100%,850px); text-align: center; }
        .details { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; margin: 60px 0 35px; border: 1px solid rgba(51,39,31,.18); }
        .details div { min-height: 120px; padding: 25px 15px; display: flex; flex-direction: column; justify-content: center; gap: 9px; border-right: 1px solid rgba(51,39,31,.18); }
        .details div:last-child { border-right: 0; }
        .details span { font-size: 10px; letter-spacing: .2em; }
        .details strong { font-size: 18px; font-weight: 500; }
        .location-button { border: 1px solid #33271f; background: transparent; padding: 15px 28px; letter-spacing: .16em; font-size: 11px; cursor: pointer; }
        .final-section { position: relative; min-height: 100svh; display: grid; place-items: center; overflow: hidden; color: #f8f2e8; }
        .final-content h2 { margin: 0; font-size: clamp(55px,10vw,125px); line-height: .86; font-weight: 500; }
        .final-names { margin-top: 35px; font-size: 19px; letter-spacing: .12em; }
        @media (max-width:800px) {
          .entry h1 {
            font-size: clamp(52px, 10vw, 125px);
          }

          .entry-arabic {
            font-size: clamp(21px, 3vw, 30px);
          }

          .countdown-section {
            width: 100%;
            min-height: 85svh;
            padding: 12vw 18px;
            overflow: hidden;
          }

          .countdown-inner {
            width: 100%;
            max-width: none;
          }

          .countdown-inner h2 {
            font-size: clamp(44px, 12vw, 64px);
            line-height: .88;
          }

          .countdown-inner .arabic {
            font-size: clamp(20px, 5.5vw, 27px);
            white-space: nowrap;
          }

          .countdown-grid {
            width: 100%;
            max-width: none;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            margin: 52px 0 24px;
            overflow: hidden;
          }

          .countdown-item {
            min-width: 0;
            min-height: 145px;
            padding: 18px 4px;
            gap: 9px;
            overflow: hidden;
          }

          .countdown-item strong {
            font-size: clamp(30px, 8.5vw, 46px);
            line-height: 1;
            white-space: nowrap;
          }

          .countdown-item span {
            font-size: 8px;
            letter-spacing: .16em;
            white-space: nowrap;
          }

          .countdown-date {
            font-size: 10px;
            letter-spacing: .14em;
            white-space: nowrap;
          }

          .desktop-gallery {
            display: none;
          }

          .mobile-gallery {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 55px auto 0;
          }

          .mobile-gallery-main {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1.08;
            overflow: hidden;
            border-radius: 10px;
            background: #d9d0c4;
          }

          .mobile-gallery-image {
            position: absolute;
            inset: 0;
            background-position: center;
            background-size: cover;
            transition: background-image .35s ease;
          }

          .gallery-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 48px;
            border: 0;
            border-radius: 50%;
            background: rgba(243,238,229,.92);
            color: #33271f;
            font-size: 34px;
            line-height: 1;
            display: grid;
            place-items: center;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0,0,0,.08);
          }

          .gallery-arrow-left {
            left: 12px;
          }

          .gallery-arrow-right {
            right: 12px;
          }

          .mobile-thumbnails {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 16px;
          }

          .mobile-thumbnail {
            padding: 3px;
            border: 1px solid transparent;
            border-radius: 8px;
            background: transparent;
            cursor: pointer;
          }

          .mobile-thumbnail.active {
            border-color: #b58a46;
          }

          .mobile-thumbnail span {
            display: block;
            width: 100%;
            aspect-ratio: 1.45 / 1;
            border-radius: 6px;
            background-position: center;
            background-size: cover;
          }

          .mobile-gallery-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
          }

          .mobile-gallery-dots button {
            width: 9px;
            height: 9px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background: rgba(51,39,31,.18);
            cursor: pointer;
          }

          .mobile-gallery-dots button.active {
            width: 10px;
            height: 10px;
            background: #b58a46;
          }


          /* Mobile-only OUR STORY layout */
          .story-section {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            min-height: auto !important;
            overflow: hidden !important;
          }

          .story-section .copy {
            width: 100% !important;
            min-height: auto !important;
            height: auto !important;
            padding: 95px 24px 70px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }

          .story-section .copy > * {
            width: 100% !important;
            max-width: 620px !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .story-section .copy .eyebrow {
            margin: 0 0 26px !important;
            font-size: 11px !important;
            letter-spacing: .28em !important;
          }

          .story-section .copy h2 {
            margin: 0 !important;
            font-size: clamp(48px, 14vw, 70px) !important;
            line-height: .88 !important;
            font-weight: 500 !important;
          }

          .story-section .copy .arabic {
            margin: 28px auto 0 !important;
            font-size: clamp(22px, 6vw, 30px) !important;
            line-height: 1.5 !important;
            direction: rtl !important;
          }

          .story-section .copy .ornament {
            margin: 30px auto !important;
            width: min(240px, 70%) !important;
          }

          .story-section .copy .body {
            margin: 0 auto !important;
            max-width: 540px !important;
            font-size: 17px !important;
            line-height: 1.9 !important;
          }

          .story-section .photo {
            display: block !important;
            width: 100% !important;
            height: 72svh !important;
            min-height: 430px !important;
            background-position: center !important;
            background-size: cover !important;
          }

          .music {
            left: 18px;
            bottom: 18px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </main>
  );
}
