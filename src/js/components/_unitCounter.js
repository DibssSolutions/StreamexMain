import Chart from 'chart.js';
import { LOAD_DATA } from '../utils.js'; 

const initLinearChart = () => {
  const chart = $('.js-linear-chart');
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
	              stacked: true,
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
  const play = () => {
    const unit = $('.js-unit');
    unit.each((i,el) => {
      const item = $(el);
      const data = + item
		  .find('[data-unit-cost]')
		  .data('unit-cost');
      const container = item.find('.js-unit-cost');
      let counter = { a: 0 };
			
      TweenMax.to(counter, 2, {
		 	a: data, 
		 	onUpdate() {
		 		container[0].innerHTML = counter.a.toFixed(2);
		 	},
		 	onComplete() {
		 		container[0].innerHTML = numberWithCommas(counter.a.toFixed(2));
		 	},
		 	ease: Power4.easeOut
      });
    });
    setTimeout(initLinearChart,100);
  };
  return { play };
})();

