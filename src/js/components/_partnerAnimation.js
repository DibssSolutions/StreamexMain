export default (() => {
  const tlCoinLeft = new TimelineMax({ paused: true })
	    .set('.js-parther-coin-left', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
	    .from('.js-parther-coin-left', 0.7, {
			  scale: 0,
			  yPercent: 50,
			  ease: Power0.easeNone
	    }, 1)
	    .to('.js-parther-coin-left', 0.7, {
			  yPercent: 0,
			  scale: 1,
			  ease: Power0.easeNone
	    }, 1);
  const tlCoinLeftMove = new TimelineMax({ paused: true })
	    .to('.js-parther-coin-left', 1.05, {
			  yPercent: -25,
			  delay: 1.5,
			  repeat: -1,
			  yoyo: true,
			  ease: Power0.easeNone
	    }, 0);


  const tlCoinRight = new TimelineMax({ paused: true })
	    .set('.js-parther-coin-right', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
	    .from('.js-parther-coin-right', 0.7, {
			  scale: 0,
			  yPercent: 50,
			  ease: Power0.easeNone
	    }, 1)
	    .to('.js-parther-coin-right', 0.7, {
			  yPercent: 0,
			  scale: 1,
			  ease: Power0.easeNone
	    }, 1);
  const tlCoinRightMove = new TimelineMax({ paused: true })
	    .to('.js-parther-coin-right', 1.05, {
			  yPercent: -25,
			  delay: 1.5,
			  repeat: -1,
			  yoyo: true,
			  ease: Power0.easeNone
	    }, 0);
  const tlBtn = new TimelineMax({ paused: true, repeat: -1 })
    .to('.js-partner-btn', 0.7, {
      scale: 1,
      ease: Power0.easeNone
    })
    .to('.js-partner-btn', 0.5, {
      scale: 0.8,
      ease: Power0.easeNone
    }, 2)
    .to('.js-partner-btn', 0.7, {
      scale: 1,
      ease: Power0.easeNone
    }, 4);
	  
  const play = () => {
    tlCoinLeft.play();
    tlCoinLeftMove.play();
    tlBtn.play();
    setTimeout(() => {
      tlCoinRight.play();
      tlCoinRightMove.play();
    }, 3);
		
  };
  return { play };
})();

