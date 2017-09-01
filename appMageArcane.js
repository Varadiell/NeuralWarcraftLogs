const simulator = require('./simulator');

// Données (Mage Arcane - Top 30 Harjatan MM)
const data = [
  {'input' : {'intell' : 0.65631, 'crit' : 0.10086, 'haste' : 0.09287, 'mastery' : 0.03937, 'versa' : 0.07942}, 'output' : {'hps' : 0.2380983, 'over' : 0}},
  {'input' : {'intell' : 0.68500, 'crit' : 0.11605, 'haste' : 0.06330, 'mastery' : 0.03078, 'versa' : 0.05659}, 'output' : {'hps' : 0.2371036, 'over' : 0}},
  {'input' : {'intell' : 0.65503, 'crit' : 0.11007, 'haste' : 0.08141, 'mastery' : 0.03781, 'versa' : 0.06365}, 'output' : {'hps' : 0.2339901, 'over' : 0}},
  {'input' : {'intell' : 0.66749, 'crit' : 0.06980, 'haste' : 0.09553, 'mastery' : 0.03346, 'versa' : 0.07454}, 'output' : {'hps' : 0.2313775, 'over' : 0}},
  {'input' : {'intell' : 0.64461, 'crit' : 0.07993, 'haste' : 0.09133, 'mastery' : 0.05263, 'versa' : 0.06821}, 'output' : {'hps' : 0.2188973, 'over' : 0}},
  {'input' : {'intell' : 0.65111, 'crit' : 0.10205, 'haste' : 0.06843, 'mastery' : 0.05579, 'versa' : 0.06189}, 'output' : {'hps' : 0.2158064, 'over' : 0}},
  {'input' : {'intell' : 0.74566, 'crit' : 0.08689, 'haste' : 0.05726, 'mastery' : 0.05356, 'versa' : 0.06349}, 'output' : {'hps' : 0.2075369, 'over' : 0}},
  {'input' : {'intell' : 0.63175, 'crit' : 0.07381, 'haste' : 0.11154, 'mastery' : 0.03478, 'versa' : 0.06933}, 'output' : {'hps' : 0.2067915, 'over' : 0}},
  {'input' : {'intell' : 0.72728, 'crit' : 0.08859, 'haste' : 0.09037, 'mastery' : 0.06082, 'versa' : 0.03779}, 'output' : {'hps' : 0.2033186, 'over' : 0}},
  {'input' : {'intell' : 0.76568, 'crit' : 0.09421, 'haste' : 0.08426, 'mastery' : 0.04223, 'versa' : 0.05721}, 'output' : {'hps' : 0.2031731, 'over' : 0}},
  {'input' : {'intell' : 0.65299, 'crit' : 0.09347, 'haste' : 0.10811, 'mastery' : 0.02505, 'versa' : 0.05715}, 'output' : {'hps' : 0.2018623, 'over' : 0}},
  {'input' : {'intell' : 0.59414, 'crit' : 0.07722, 'haste' : 0.09801, 'mastery' : 0.05616, 'versa' : 0.06329}, 'output' : {'hps' : 0.2009709, 'over' : 0}},
  {'input' : {'intell' : 0.65489, 'crit' : 0.09189, 'haste' : 0.08220, 'mastery' : 0.04583, 'versa' : 0.06928}, 'output' : {'hps' : 0.2007366, 'over' : 0}},
  {'input' : {'intell' : 0.63160, 'crit' : 0.08995, 'haste' : 0.08932, 'mastery' : 0.07124, 'versa' : 0.03750}, 'output' : {'hps' : 0.2005173, 'over' : 0}},
  {'input' : {'intell' : 0.60688, 'crit' : 0.10680, 'haste' : 0.10987, 'mastery' : 0.03441, 'versa' : 0.04146}, 'output' : {'hps' : 0.1999640, 'over' : 0}},
  {'input' : {'intell' : 0.66385, 'crit' : 0.08340, 'haste' : 0.09106, 'mastery' : 0.04068, 'versa' : 0.04839}, 'output' : {'hps' : 0.1982136, 'over' : 0}},
  {'input' : {'intell' : 0.65598, 'crit' : 0.06435, 'haste' : 0.08954, 'mastery' : 0.04537, 'versa' : 0.08445}, 'output' : {'hps' : 0.1968137, 'over' : 0}},
  {'input' : {'intell' : 0.63854, 'crit' : 0.09696, 'haste' : 0.09458, 'mastery' : 0.03799, 'versa' : 0.05219}, 'output' : {'hps' : 0.1956119, 'over' : 0}},
  {'input' : {'intell' : 0.66257, 'crit' : 0.11549, 'haste' : 0.07082, 'mastery' : 0.02121, 'versa' : 0.06604}, 'output' : {'hps' : 0.1947945, 'over' : 0}},
  {'input' : {'intell' : 0.66807, 'crit' : 0.09388, 'haste' : 0.10398, 'mastery' : 0.02649, 'versa' : 0.05322}, 'output' : {'hps' : 0.1944152, 'over' : 0}},
  {'input' : {'intell' : 0.66604, 'crit' : 0.11364, 'haste' : 0.09254, 'mastery' : 0.05316, 'versa' : 0.01890}, 'output' : {'hps' : 0.1940186, 'over' : 0}},
  {'input' : {'intell' : 0.65772, 'crit' : 0.09086, 'haste' : 0.09640, 'mastery' : 0.03952, 'versa' : 0.04750}, 'output' : {'hps' : 0.1940074, 'over' : 0}},
  {'input' : {'intell' : 0.63660, 'crit' : 0.11775, 'haste' : 0.10484, 'mastery' : 0.03877, 'versa' : 0.02431}, 'output' : {'hps' : 0.1939632, 'over' : 0}},
  {'input' : {'intell' : 0.73623, 'crit' : 0.06813, 'haste' : 0.10585, 'mastery' : 0.04939, 'versa' : 0.06802}, 'output' : {'hps' : 0.1928642, 'over' : 0}},
  {'input' : {'intell' : 0.66838, 'crit' : 0.08569, 'haste' : 0.07466, 'mastery' : 0.05496, 'versa' : 0.06514}, 'output' : {'hps' : 0.1923468, 'over' : 0}},
  {'input' : {'intell' : 0.66348, 'crit' : 0.11111, 'haste' : 0.06593, 'mastery' : 0.03675, 'versa' : 0.05490}, 'output' : {'hps' : 0.1916793, 'over' : 0}},
  {'input' : {'intell' : 0.64601, 'crit' : 0.10013, 'haste' : 0.06769, 'mastery' : 0.03529, 'versa' : 0.05337}, 'output' : {'hps' : 0.1913826, 'over' : 0}},
  {'input' : {'intell' : 0.62190, 'crit' : 0.06692, 'haste' : 0.08721, 'mastery' : 0.04607, 'versa' : 0.08324}, 'output' : {'hps' : 0.1900522, 'over' : 0}},
  {'input' : {'intell' : 0.59137, 'crit' : 0.08543, 'haste' : 0.09611, 'mastery' : 0.07136, 'versa' : 0.04093}, 'output' : {'hps' : 0.1893289, 'over' : 0}},
  {'input' : {'intell' : 0.64167, 'crit' : 0.08969, 'haste' : 0.10748, 'mastery' : 0.06037, 'versa' : 0.02939}, 'output' : {'hps' : 0.1891330, 'over' : 0}}
];

simulator.simulate(data);
