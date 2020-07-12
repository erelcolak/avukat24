//CHART JS KODLARI
	var canvas = $('#myChart');
	var data = {
		labels: ['asdasd', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				fill: true,
				fullWidth: true,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				defaultFontStyle: 'normal',
				data: [65, 59, 80, 81, 56, 55, 80],
			}
		]
	};
	var myLineChart = Chart.Line(canvas,{
		data:data
	});

	$('.btn-refresh-graph').click(function(){
		myLineChart.data.datasets[0].data[7]= 60;
		myLineChart.data.labels[7]= 'Yeni Eklenen Etiket';
		myLineChart.update();
	});