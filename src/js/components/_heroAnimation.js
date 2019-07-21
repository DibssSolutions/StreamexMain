export default (() => {
  const play = () => {
    // oxygen
    var tlOxygenCenter = new TimelineMax({repeat: -1, ease: Power0.easeNone });
    tlOxygenCenter
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-center="right-bottom"]', 0.9, { yPercent: 3800, xPercent: -750, autoAlpha: 1 })
          .to('[data-oxygen-center="right-bottom"]', 0.9, { yPercent: -2000, xPercent: 0, autoAlpha: 0 });
      }, 0.1 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-center="right-middle"]', 0.9, { yPercent: 5800, xPercent: -850, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-center="right-middle"]', 0.9, { yPercent: -2200, xPercent: 0, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.45 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-center="left-top"]', 0.9, { yPercent: 6700, xPercent: 70, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-center="left-top"]', 0.9, { yPercent: -1200, xPercent: 0, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.2 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-center="left-middle"]', 0.9, { yPercent: 4200, xPercent: 550, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-center="left-middle"]', 0.9, { yPercent: -2200, xPercent: 0, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.7 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-center="left-bottom"]', 0.9, { yPercent: 3200, xPercent: 410, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-center="left-bottom"]', 0.9, { yPercent: -2300, xPercent: 0, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.6 )
      .repeatDelay(0.3);

    var tlOxygenRight = new TimelineMax({repeat: -1, ease: Power0.easeNone });
    tlOxygenRight
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="1"]', 0.9, { yPercent: 400, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="1"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="2"]', 0.9, { yPercent: 200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="2"]', 0.9, { yPercent: -3700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.6 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="3"]', 0.9, { yPercent: 1200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="3"]', 0.9, { yPercent: -2000, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.2 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="4"]', 0.9, { yPercent: 1200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="4"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="5"]', 0.9, { yPercent: 1800, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="5"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.4 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="6"]', 0.9, { yPercent: 3000, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="6"]', 0.9, { yPercent: -1400, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.6 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="7"]', 0.9, { yPercent: 3600, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="7"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.6 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="8"]', 0.9, { yPercent: 3200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="8"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.2 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-right="9"]', 0.9, { yPercent: 100, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-right="9"]', 0.9, { yPercent: -2000, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.3 )
      .repeatDelay(0.3);

    var tlOxygenLeft = new TimelineMax({repeat: -1, ease: Power0.easeNone });
    tlOxygenLeft
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="1"]', 0.9, { yPercent: 400, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="1"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="2"]', 0.9, { yPercent: 200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="2"]', 0.9, { yPercent: -3700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.2 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="3"]', 0.9, { yPercent: 1200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="3"]', 0.9, { yPercent: -2000, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.5 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="4"]', 0.9, { yPercent: 1200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="4"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="5"]', 0.9, { yPercent: 1800, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="5"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.4 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="6"]', 0.9, { yPercent: 3000, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="6"]', 0.9, { yPercent: -1400, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.1 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="7"]', 0.9, { yPercent: 3600, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="7"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.3 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="8"]', 0.9, { yPercent: 3200, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="8"]', 0.9, { yPercent: -1700, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.2 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="9"]', 0.9, { yPercent: 100, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="9"]', 0.9, { yPercent: -2000, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.3 )
      .add(() => {
        new TimelineMax()
          .from('[data-oxygen-left="10"]', 0.9, { yPercent: 100, autoAlpha: 1, ease: Power0.easeNone })
          .to('[data-oxygen-left="10"]', 0.9, { yPercent: -2000, autoAlpha: 0, ease: Power0.easeNone });
      }, 0.3 )
      .repeatDelay(0.3);


    // coins
    new TimelineMax()
      .set('[data-coin="waterfall"]', { transformOrigin:'50% 50%', rotation: -10 })
      .set('[data-coin="ripple"]', { transformOrigin:'50% 50%', rotation: -15 })
      .set('[data-coin="ethereum"]', { transformOrigin:'50% 50%' });
    new TimelineMax()
      .to('[data-coin="waterfall"]', 1.5, {
        rotation: 10,
        yPercent: -55,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      }, 0.5)
      .to('[data-coin="ripple"]', 1, {
        rotation: 15,
        yPercent: -40,
        delay: 1,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      }, 0.2)
      .to('[data-coin="ethereum"]', 2, {
        rotation: 360,
        delay: 3,
        repeat: -1,
        ease: Power0.easeNone
      }, 0)
      .to('[data-coin="ethereum-group"]', 1.5, {
        yPercent: -35,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      }, 0)
      .to('.js-hero-coin-top-left', 1.5, {
        yPercent: -55,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      }, 0)
      .to('.js-hero-coin-bottom-right', 1.5, {
        yPercent: -55,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      }, 0.3);

    setTimeout(() => {
      new TimelineMax()
        .set(['.js-hero-coin-bottom', '.js-hero-coin-bottom-left'], { transformOrigin:'50% 50%', scale: 0, xPercent: 35 })
        .from('.js-hero-coin-bottom', 0.7, {
          scale: 0,
          yPercent: 50,
          ease: Power0.easeNone
        }, 0)
        .to('.js-hero-coin-bottom', 0.7, {
          yPercent: 20,
          scale: 1,
          ease: Power0.easeNone
        }, 0)
        .to('.js-hero-coin-bottom', 1.05, {
          yPercent: -25,
          delay: 1.5,
          repeat: -1,
          yoyo: true,
          ease: Power0.easeNone
        }, 0.5)
        .from('.js-hero-coin-bottom-left', 0.7, {
          scale: 0,
          yPercent: 75,
          ease: Power0.easeNone
        }, 1)
        .to('.js-hero-coin-bottom-left', 0.7, {
          yPercent: 50,
          scale: 1,
          ease: Power0.easeNone
        }, 1)
        .to('.js-hero-coin-bottom-left', 1.05, {
          yPercent: 10,
          delay: 1.5,
          repeat: -1,
          yoyo: true,
          ease: Power0.easeNone
        }, 1.4);

    }, 800 );

    setTimeout(() => {
      new TimelineMax({ repeat: -1 })
        .set('.js-man', { transformOrigin:'50% 50%' })
        .to('.js-man', 2, {
          yPercent: 275,
          rotation: 720,
          ease: Power0.easeNone
        })
        .to('.js-man', 0, {
          yPercent: -500,
          ease: Power0.easeNone
        }, 2)
        .to('.js-man', 3, {
          yPercent: 0,
          ease: Power0.easeNone
        }, 2.1)
        .repeatDelay(2);
    }, 2000);

  };
  return { play };
})();
