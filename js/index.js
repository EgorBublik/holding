'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.top-btn'),
        tabsContent = document.querySelectorAll('.tabContent'),
        tabParent = document.querySelector('.top-btn-group'),
        pnlItem = document.querySelectorAll('.table-pnl-item'),
        pnlItemSpan = document.querySelectorAll('.table-pnl-item span'),
        hoursItem = document.querySelectorAll('.table-hours-item'),
        hoursItemSpan = document.querySelectorAll('.table-hours-item span');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        btns.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('top-btn')) {
            btns.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    function navChartGraph() {
        const labels = [
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '11:00',
            '22:00',
            '23:00',
            '0:00',
            '1:00',
            '2:00',
            '3:00',
            '4:00',
            '5:00',
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: [68.7, 68.4, 68.5, 69.6, 69, 69.15, 69.1, 68.5, 68.2, 69.9, 69.7, 70.15, 70.2, 70.1, 70.4, 70.3, 70.25, 71.4, 72.05, 71.8, 71.9, 72, 71.5, 71.5],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {

                    y: {
                        min: 68,
                        max: 73,
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    },
                }
            }
        };

        const navChart = new Chart(
            document.getElementById('navChart'),
            config
        );
    }

    navChartGraph();

    function plChartGraph() {
        const labels = [
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '11:00',
            '22:00',
            '23:00',
            '0:00',
            '1:00',
            '2:00',
            '3:00',
            '4:00',
            '5:00',
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
            '12:00'
        ];
        
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: ['#ff6e67', '#52b76a', '#52b76a', '#ff6e67', '#52b76a', '#ff6e67', '#ff6e67', '#ff6e67', '#52b76a', '#ff6e67', '#52b76a', '#52b76a', '#ff6e67', '#52b76a', '#52b76a', '#ff6e67', '#52b76a', '#52b76a', '#ff6e67', '#52b76a', '#52b76a', '#ff6e67'],
                borderColor: 'blue',
                data: [-30, 30, 100, -40, 10, -7, -50, -25, 145, -20, 45, 7, -8, 14, -5, -6, 90, 65, -25, 10, 15, -27],
            }]
        };
        

        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        min: -169,
                        max: 169,
                        ticks: {
                            stepSize: 50
                        },
                        grid: {
                            display: false
                        }
                    },
                    grid: {
                        display: false
                    },

                    x: {
                        grid: {
                            display: false
                        },
                    },
                }
            }
        };

        const plChart = new Chart(
            document.getElementById('plChart'),
            config
        );
    }
    plChartGraph();

    function yourBalanceChartGraph() {
        const labels = [
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '11:00',
            '22:00',
            '23:00',
            '0:00',
            '1:00',
            '2:00',
            '3:00',
            '4:00',
            '5:00',
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: [6140, 6090, 6110, 6230, 6160, 6170, 6175, 6100, 6070, 6245, 6240, 6260, 6265, 6255, 6280, 6270, 6265, 6370, 6440, 6410, 6420, 6430, 6370, 6368],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {

                    y: {
                        min: 6050,
                        max: 6450,
                        ticks: {
                            stepSize: 100
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    },
                }
            }
        };

        const navChart = new Chart(
            document.getElementById('yourBalanceChart'),
            config
        );
    }
    yourBalanceChartGraph();


    function tableColor(sel, val) {
        val.forEach((item, i) => {
            if (+item.innerHTML < 0) {
                sel[i].classList.add('negative');
            } else {
                sel[i].classList.add('positive');
            }
        });
    }
    tableColor(pnlItem, pnlItemSpan);
    tableColor(hoursItem, hoursItemSpan);

});