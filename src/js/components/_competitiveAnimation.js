export default (() => {
  const tlBitcoin = new TimelineMax({ paused: true })
	  .set('.js-competitive-bitcoin', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
	  .from('.js-competitive-bitcoin', 0.7, {
		  scale: 0,
		  yPercent: 90,
		  ease: Power0.easeNone
	  }, 1)
	  .to('.js-competitive-bitcoin', 0.7, {
		  yPercent: 0,
		  scale: 1,
		  ease: Power0.easeNone
	  }, 1);
  const tlBitcoinMove = new TimelineMax({ repeat: -1, yoyo: true, paused: true })
	  .to('.js-competitive-bitcoin', 1.05, {
		  yPercent: 50,
		  delay: 1.5,
		  repeat: -1,
		  yoyo: true,
		  ease: Power0.easeNone
	  }, 0);


  const tlRipple = new TimelineMax({ paused: true })
	  .set('.js-competitive-ripple', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
	  .from('.js-competitive-ripple', 0.7, {
		  scale: 0,
		  yPercent: 90,
		  ease: Power0.easeNone
	  }, 1.5)
	  .to('.js-competitive-ripple', 0.7, {
		  yPercent: 0,
		  scale: 1,
		  ease: Power0.easeNone
	  }, 1.5);
  const tlRippleMove = new TimelineMax({ repeat: -1, yoyo: true, paused: true })
	  .to('.js-competitive-ripple', 1.05, {
	    yPercent: -35,
	    delay: 1.5,
	    repeat: -1,
	    yoyo: true,
	    ease: Power0.easeNone
	  }, 0.4);

  const tlEthereum = new TimelineMax({ paused: true })
	  .set('.js-competitive-ethereum', { transformOrigin:'50% 50%', scale: 0, xPercent: 50 })
	  .from('.js-competitive-ethereum', 0.7, {
		  scale: 0,
		  yPercent: 90,
		  ease: Power0.easeNone
	  }, 2.5)
	  .to('.js-competitive-ethereum', 0.7, {
		  yPercent: 0,
		  scale: 1,
		  ease: Power0.easeNone
	  }, 2.5);
  const tlEthereumMove = new TimelineMax({ repeat: -1, yoyo: true, paused: true })
	  .to('.js-competitive-ethereum', 1.05, {
	    yPercent: -25,
	    delay: 1.5,
	    repeat: -1,
	    yoyo: true,
	    ease: Power0.easeNone
	  }, 1.7);
	
  const play = () => {
    tlBitcoin.play();
    tlBitcoinMove.play();
    setTimeout(() => {
    	tlRipple.play();
    	tlRippleMove.play();
    }, 1.4);
    setTimeout(() => {
    	tlEthereum.play();
    	tlEthereumMove.play();
    }, 2.4);
    
  };
  return { play };
})();

