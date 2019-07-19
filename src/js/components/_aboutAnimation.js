export default (() => {
  const tl = new TimelineMax({ repeat: -1, yoyo: true, delay: 0.5, paused: true })
	  .to('.js-about-square-first', 0.5, {
	    alpha: 0
	  })
	  .to('.js-about-square-last', 0.5, {
	    alpha: 0
	  }, 0.3);
  const tlCoin = new TimelineMax({ paused: true })
    .set('.js-about-coin', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
    .from('.js-about-coin', 0.7, {
		  scale: 0,
		  yPercent: 50,
		  ease: Power0.easeNone
    }, 1)
    .to('.js-about-coin', 0.7, {
		  yPercent: 0,
		  scale: 1,
		  ease: Power0.easeNone
    }, 1);
  const tlCoinMove = new TimelineMax({ paused: true })
    .to('.js-about-coin', 1.05, {
		  yPercent: -25,
		  delay: 1.5,
		  repeat: -1,
		  yoyo: true,
		  ease: Power0.easeNone
    }, 0);


  const tlCloud = new TimelineMax({ paused: true })
    .set('.js-cloud', { transformOrigin:'50% 50%', scale: 0, xPercent: 50})
    .from('.js-cloud', 0.7, {
		  scale: 0,
		  yPercent: 90,
		  ease: Power0.easeNone
    }, 1)
    .to('.js-cloud', 0.7, {
		  yPercent: 0,
		  scale: 1,
		  ease: Power0.easeNone
    }, 1);
  const tlCloudMove = new TimelineMax({ paused: true })
	  .to('.js-cloud', 1.05, {
	    yPercent: 30,
	    delay: 1.5,
	    repeat: -1,
	    yoyo: true,
	    ease: Power0.easeNone
	  }, 0.7);
	  
  const play = () => {
    tl.play();
    tlCoin.play();
    tlCoinMove.play();
    setTimeout(() => {
    	tlCloud.play();
    	tlCloudMove.play();
    }, 3);
    
  };
  return { play };
})();

