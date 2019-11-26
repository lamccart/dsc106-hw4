Highcharts.chart('bubbleChart', {
    chart: {
        type: 'packedbubble',
        height: '35%'
    },
    title: {
        text: 'Steve Carell: Master of Comedy and Drama'
    },
    subtitle: {
      	text: 'Genres of Movies in Which Steve Carell Acted'
    },
    legend: {
    		enabled: false
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>Occurances:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '5%',
            maxSize: '400%',
            zMin: 0,
            zMax: 500,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.04
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 300
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Animation',
        data: [{
            value: 9
        }]
    }, {
        name: 'Adventure',
        data: [{
            value: 8
        }]
    }, {
        name: 'Comedy',
        data: [{
            value: 44
        }]
    }, {
        name: 'Family',
        data: [{
            value: 13
        }]
    }, {
        name: 'Drama',
        data: [{
            value: 21
        }]
    }, {
        name: 'Biography',
        data: [{
            value: 7
        }]
    }, {
        name: 'Fantasy',
        data: [{
            value: 9
        }]
    }, {
        name: 'Romance',
        data: [{
            value: 13
        }]
    }, {
        name: 'Sci-Fi',
        data: [{
            value: 6
        }]
    }, {
        name: 'Short',
        data: [{
            value: 6
        }]
    }]
});

Highcharts.chart('wordCloud', {
    series: [{
        type: 'wordcloud',
        data: 
        	[{
                name: 'husband wife relationship', 
                weight: 18
            }, {
                name: 'father son relationship',
                weight: 15
            }, {
                name: 'father daughter relationship', 
                weight: 12
            }, {
                name: 'family relationships', 
                weight: 8
            },  {
                name: 'new york city', 
                weight: 8
            }, {
                name: 'girl', 
                weight: 7
            }, {
                name: 'brother sister relationship', 
                weight: 7
            }, {
                name: 'black comedy', 
                weight: 6
            }, {
                name: 'sex scene', 
                weight: 6
            }, {
                name: 'neighbor', 
                weight: 6
            }, {
                name: 'brother sister relationship', 
                weight: 7
            }, {
                name: 'wedding', 
                weight: 6
            }, {
                name: '20th century', 
                weight: 6
            }, {
                name: 'what happened to epilogue', 
                weight: 6
            }, {
                name: 'marriage', 
                weight: 6
            }, {
                name: 'break up', 
                weight: 6
            }, {
                name: 'sister sister relationship', 
                weight: 6
            }, {
                name: 'f rated', 
                weight: 6
            }, {
                name: 'interview', 
                weight: 5
            }, {
                name: 'wilhelm scream', 
                weight: 5
            }, {
                name: 'teenage boy', 
                weight: 5
            }, {
                name: 'drinking', 
                weight: 5
            }, {
                name: 'lawyer', 
                weight: 5
            }, {
                name: 'computer', 
                weight: 5
            }],
        name: 'Occurrences',
        height: '100%'
    }],
    title: {
        text: 'Familial Relationships in Movies with Steve Carell'
    },
    subtitle: {
        text: 'Frequency of Keywords for Movies in Which Steve Carell Acted'
    }
});

Highcharts.chart('timelineChart', {
    chart: {
        type: 'timeline',
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: 'Ups and Downs of Profitable Years for Steve Carell'
    },
    subtitle: {
        text: 'Net Profit of All Movies Steve Carell Acted in By Year'
    },
    series: [{
        data: [{
            name: '2003',
            label: '<b>Net Profit:</b> $403.6 million',
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $403.6 million this year.'
        }, {
            name: '2004',
            label: '<b>Net Profit:</b> $64.6 million',
            color: '#C1FFC1',
            description: 'Movies with Steve Carell profited $64.6 million this year.'
        }, {
            name: '2005',
            label: '<b>Net Profit:</b> $197.8 million',
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $197.8 million this year.'
        }, {
            name: '2006',
            label: '<b>Net Profit:</b> $348.5 million',
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $348.5 million this year.'
        }, {
            name: '2007',
            label: '<b>Net Profit:</b> $41.4 million',
            color: '#C1FFC1',
            description: 'Movies with Steve Carell profited $41.4 million this year.'
        }, {
            name: '2008',
            label: '<b>Net Profit:</b> $362.8 million',
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $362.8 million this year.'
        }, {
            name: '2010',
            label: '<b>Net Profit:</b> $571.4 million', 
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $571.4 million this year.'
        }, {
            name: '2011',
            label: '<b>Net Profit:</b> $92.9 million',
            color: '#C1FFC1',
            description: 'Movies with Steve Carell profited $92.9 million this year.'
        }, {
            name: '2012',
            label: '<b>Net Profit:</b> $84.3 million',
            color: '#C1FFC1',
            description: 'Movies with Steve Carell profited $84.3 million this year.'
        }, {
            name: '2013',
            label: '<b>Net Profit:</b> $1017.7 million',
            color: '#137B13',
            description: 'Movies with Steve Carell profited $1017.7 million this year.'
        }, {
            name: '2014',
            label: '<b>Net Profit:</b> $314.7 million',
            color: '#5BC85B',
            description: 'Movies with Steve Carell profited $314.7 million this year.'
        }, {
            name: '2015',
            label: '<b>Net Profit:</b> $1194.9 million',
            color: '#137B13',
            description: 'Movies with Steve Carell profited $1194.9 million this year.'
        }, {
            name: '2016',
            label: '<b>Net Profit:</b> $4.3 million',
            color: '#C1FFC1',
            description: 'Movies with Steve Carell profited $4.3 million this year.'
        }, {
            name: '2017',
            label: '<b>Net Profit:</b> $954.8 million',
            color: '#137B13',
            description: 'Movies with Steve Carell profited $4.3 million this year.'
        }, {
            name: '2018',
            label: '<b>Net Profit:</b> -$19.2 million',
            color: '#FFC1C1',
            description: 'Movies with Steve Carell profited -$19.2 million this year.'
        }]
    }]
});
