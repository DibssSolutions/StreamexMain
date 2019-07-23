import Chart from 'chart.js';
import { LOAD_DATA } from '../utils.js'; 

const initLinearChart = (trigger) => {
  const chart = trigger.find('.js-linear-chart');
  chart.each( (i, el) => {
	  let data;
	  let chartLinear;
	  const ctx = $(el);
	  const dataPath = $(el).data('json');
	  LOAD_DATA({
	    path: dataPath,
	    callback: object => {
	      data = object[0];
	      const options = {
	        type: 'line',
	        data: data,
	        duration: 2000,
	        easing: 'easeOutBounce',
	        options: {
	          responsive: true,
	          scaleStepWidth: 200,
	          legend: {
	            display: false
	          },
	          layout: {
	            padding: {
	              top: 2
	            }
	          },
	          tooltips: {
	            enabled: false
	          },
	          responsive: true,
	          scales: {
	            xAxes: [{
	              stacked: false,
	              gridLines: {
	                display: false
	              },
	              ticks: {
	                fontSize: 0,
	              }
	            }],
	            yAxes: [{
	              gridLines: {
	                display: false,
	              },
	              ticks: {
	                fontSize: 0,
	              }
	            }]
	          }
	        }
	      };
	      chartLinear = new Chart(ctx, options);
	    }
	  });
  });
};
Chart.defaults.global.animation.duration = 2300;

export default (() => {
  function numberWithCommas(x) {
	    let parts = x.toString().split('.');
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	    return parts.join('.');
  }
  const play = (trigger) => {
    const countParent = trigger.find('.js-count-parent');
    const chart = trigger.find('.js-linear-chart');
    if (countParent.length) {
	    countParent.each((i,el) => {
	      const item = $(el);
	      const data = + item
			  .find('[data-count-value]')
			  .data('count-value');
	      const container = item.find('.js-count-container');
	      const duration = +item.data('count-duration') || 2;
	      const toFixed = +item.data('count-to-fixed') || 0;
	      let counter = { a: 0 };
				
	      TweenMax.to(counter, duration, {
			 	a: data, 
			 	onUpdate() {
			 		container[0].innerHTML = counter.a.toFixed(toFixed);
			 	},
			 	onComplete() {
			 		container[0].innerHTML = numberWithCommas(counter.a.toFixed(toFixed));
			 	},
			 	ease: Power4.easeOut
	      });
	    });
    }
    if (chart.length) setTimeout(() => {initLinearChart(trigger);},100);
  };
  return { play };
})();

