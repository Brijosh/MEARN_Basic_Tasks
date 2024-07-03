weatherData=[
    {district:'Thrissur',weather:28},
    {district:'Palakad',weather:36},
    {district:'Kozhikode',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakad',weather:31},
    {district:'Kozhikode',weather:34}
]
output={};
weatherData.map(place=> place.district in output?(output[place.district]>place.weather?null:output[place.district]=place.weather):output[place.district]=place.weather)
console.log(output);

//sort the given output in descending order of temparature
console.log(Object.entries(output));
 console.log(Object.fromEntries(Object.entries(output).sort((a,b)=>b[1]-a[1])));