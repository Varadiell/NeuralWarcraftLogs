const brain = require('brain');

const net = new brain.NeuralNetwork();

const params = {
  'errorThresh' : 0.0001, // error threshold to reach
  'iterations' : 1000000, // maximum training iterations 1000000
  'log' : true,           // console.log() progress periodically
  'logPeriod' : 100000,   // number of iterations between logging
  'learningRate' : 0.3    // learning rate
};

// Données (Druide Heal - Top 20 Maiden MM)
const data = [
  {'input' : {'intell' : 0.65131, 'crit' : 0.03651, 'haste' : 0.12364, 'mastery' : 0.09129, 'versa' : 0.02432}, 'output' : {'hps' : 0.1769588, 'over' : 0.2804}},
  {'input' : {'intell' : 0.61140, 'crit' : 0.06476, 'haste' : 0.08009, 'mastery' : 0.14290, 'versa' : 0.03011}, 'output' : {'hps' : 0.1702236, 'over' : 0.1757}},
  {'input' : {'intell' : 0.58165, 'crit' : 0.05637, 'haste' : 0.08303, 'mastery' : 0.10019, 'versa' : 0.05042}, 'output' : {'hps' : 0.1699620, 'over' : 0.1543}},
  {'input' : {'intell' : 0.67822, 'crit' : 0.03561, 'haste' : 0.11318, 'mastery' : 0.09789, 'versa' : 0.03775}, 'output' : {'hps' : 0.1646133, 'over' : 0.1812}},
  {'input' : {'intell' : 0.59413, 'crit' : 0.09704, 'haste' : 0.03958, 'mastery' : 0.09619, 'versa' : 0.05027}, 'output' : {'hps' : 0.1645938, 'over' : 0.2508}},
  {'input' : {'intell' : 0.64002, 'crit' : 0.06416, 'haste' : 0.06600, 'mastery' : 0.10293, 'versa' : 0.03651}, 'output' : {'hps' : 0.1633139, 'over' : 0.2273}},
  {'input' : {'intell' : 0.63005, 'crit' : 0.06037, 'haste' : 0.06921, 'mastery' : 0.10174, 'versa' : 0.04633}, 'output' : {'hps' : 0.1599339, 'over' : 0.2925}},
  {'input' : {'intell' : 0.63098, 'crit' : 0.06662, 'haste' : 0.07344, 'mastery' : 0.09806, 'versa' : 0.03876}, 'output' : {'hps' : 0.1594528, 'over' : 0.2823}},
  {'input' : {'intell' : 0.64351, 'crit' : 0.08124, 'haste' : 0.09851, 'mastery' : 0.07487, 'versa' : 0.02119}, 'output' : {'hps' : 0.1592555, 'over' : 0.1979}},
  {'input' : {'intell' : 0.62724, 'crit' : 0.08329, 'haste' : 0.09784, 'mastery' : 0.07587, 'versa' : 0.02299}, 'output' : {'hps' : 0.1585980, 'over' : 0.1437}},
  {'input' : {'intell' : 0.61981, 'crit' : 0.06267, 'haste' : 0.11733, 'mastery' : 0.08236, 'versa' : 0.01114}, 'output' : {'hps' : 0.1579359, 'over' : 0.2633}},
  {'input' : {'intell' : 0.64215, 'crit' : 0.07876, 'haste' : 0.11089, 'mastery' : 0.05525, 'versa' : 0.03729}, 'output' : {'hps' : 0.1578016, 'over' : 0.2179}},
  {'input' : {'intell' : 0.65033, 'crit' : 0.04322, 'haste' : 0.10251, 'mastery' : 0.12320, 'versa' : 0.01509}, 'output' : {'hps' : 0.1562903, 'over' : 0.1407}},
  {'input' : {'intell' : 0.59653, 'crit' : 0.07012, 'haste' : 0.09087, 'mastery' : 0.08889, 'versa' : 0.03478}, 'output' : {'hps' : 0.1558936, 'over' : 0.1623}},
  {'input' : {'intell' : 0.61404, 'crit' : 0.06288, 'haste' : 0.08092, 'mastery' : 0.09403, 'versa' : 0.03425}, 'output' : {'hps' : 0.1558447, 'over' : 0.2259}},
  {'input' : {'intell' : 0.59621, 'crit' : 0.06131, 'haste' : 0.09328, 'mastery' : 0.10397, 'versa' : 0.02353}, 'output' : {'hps' : 0.1556381, 'over' : 0.2104}},
  {'input' : {'intell' : 0.55768, 'crit' : 0.04035, 'haste' : 0.09356, 'mastery' : 0.10574, 'versa' : 0.04385}, 'output' : {'hps' : 0.1545192, 'over' : 0.1768}},
  {'input' : {'intell' : 0.57958, 'crit' : 0.06048, 'haste' : 0.09266, 'mastery' : 0.09949, 'versa' : 0.04804}, 'output' : {'hps' : 0.1537918, 'over' : 0.1408}},
  {'input' : {'intell' : 0.63819, 'crit' : 0.07380, 'haste' : 0.09903, 'mastery' : 0.06173, 'versa' : 0.03743}, 'output' : {'hps' : 0.1536389, 'over' : 0.2159}},
  {'input' : {'intell' : 0.63192, 'crit' : 0.04679, 'haste' : 0.09538, 'mastery' : 0.10326, 'versa' : 0.03397}, 'output' : {'hps' : 0.1536181, 'over' : 0.3446}}
];

net.train(data, params);

let totalPrimStat = 0;
for(let i = 0; i < data.length; i++){
  totalPrimStat += (data[i].input.intell) * 100000;
}
totalPrimStat = Math.floor(totalPrimStat / data.length);
console.info('TotalPrimStat : ' + totalPrimStat);

let totalStat = 0;
for(let i = 0; i < data.length; i++){
  totalStat += (data[i].input.crit + data[i].input.haste + data[i].input.mastery + data[i].input.versa) * 100000;
}
totalStat = Math.floor(totalStat / data.length);
console.info('TotalStat : ' + totalStat);




// SIMULATOR

const nbTests = 10000;
const results = [];

function randomFromInterval(min, max){
  return Math.random() * (max - min) + min;
}

for(let i = 0; i < nbTests; i++){
  let remaining = totalStat;
  const critRatio = randomFromInterval(totalStat / 35, totalStat / 2);
  remaining -= critRatio;
  const hasteRatio = randomFromInterval(totalStat / 35, Math.min(totalStat / 2, remaining - totalStat / 35 * 2));
  remaining -= hasteRatio;
  const masteryRatio = randomFromInterval(
    Math.max(totalStat / 35, remaining / 2 - totalStat / 35),
    Math.min(totalStat / 2, remaining - totalStat / 35)
  );
  remaining -= masteryRatio;
  const versaRatio = remaining;
  const totalRatio = critRatio + hasteRatio + masteryRatio + versaRatio;
  const crit = totalStat * critRatio / totalRatio / 100000;
  const haste = totalStat * hasteRatio / totalRatio / 100000;
  const mastery = totalStat * masteryRatio / totalRatio / 100000;
  const versa = totalStat * versaRatio / totalRatio / 100000;
  const input = {'intell' : 0.62074, 'crit' : crit, 'haste' : haste, 'mastery' : mastery, 'versa' : versa};
  const output = net.run(input);
  results.push({input, output});
}

results.sort(function(a, b){
  return b.output.hps - a.output.hps;
});

for(let i = 0; i < 5; i++) {
  console.info('======================');
  console.info('Rank : ' + (i + 1));
  console.info('Hps : ' + results[i].output.hps * 10000000);
  console.info('Over% : ' + results[i].output.over * 100);
  console.info('--------');
  console.info('Crit : ' + results[i].input.crit * 100000);
  console.info('Haste : ' + results[i].input.haste * 100000);
  console.info('Mastery : ' + results[i].input.mastery * 100000);
  console.info('Versa : ' + results[i].input.versa * 100000);
}
