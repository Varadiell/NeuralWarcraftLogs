const brain = require('brain');
const net = new brain.NeuralNetwork();



exports.simulate = function(data){

  const params = {
    'errorThresh' : 0.001, // error threshold to reach
    'iterations' : 300000, // maximum training iterations 1000000
    'log' : true,           // console.log() progress periodically
    'logPeriod' : 50000,   // number of iterations between logging
    'learningRate' : 0.5    // learning rate
  };

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

  const nbTests = 100000;
  const results = [];

  function randomFromInterval(min, max){
    return Math.random() * (max - min) + min;
  }

  for(let i = 0; i < nbTests; i++){
    let remaining = totalStat;
    const critRatio = randomFromInterval(totalStat / 15, totalStat / 2);
    remaining -= critRatio;
    const hasteRatio = randomFromInterval(totalStat / 15, Math.min(totalStat / 2, remaining - totalStat / 15 * 2));
    remaining -= hasteRatio;
    const masteryRatio = randomFromInterval(
      Math.max(totalStat / 15, remaining / 2 - totalStat / 15),
      Math.min(totalStat / 2, remaining - totalStat / 15)
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
    return b.output.hps * (1 + b.output.over * 0.33) - a.output.hps * (1 + a.output.over * 0.33);
  });

  for(let i = 0; i < 5; i++) {
    console.info('======================');
    console.info('Rank : ' + (i + 1));
    console.info('Hps : ' + Math.floor(results[i].output.hps * 10000000));
    console.info('Over% : ' + results[i].output.over * 100);
    console.info('--------');
    console.info('Crit : ' + Math.floor(results[i].input.crit * 100000));
    console.info('Haste : ' + Math.floor(results[i].input.haste * 100000));
    console.info('Mastery : ' + Math.floor(results[i].input.mastery * 100000));
    console.info('Versa : ' + Math.floor(results[i].input.versa * 100000));
  }


};
