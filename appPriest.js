const simulator = require('./simulator');

// Données (Prêtre Discipline - Top 30 Maiden MM)
const data = [
  {'input' : {'intell' : 0.60839, 'crit' : 0.07728, 'haste' : 0.09831, 'mastery' : 0.08589, 'versa' : 0.03456}, 'output' : {'hps' : 0.1803433, 'over' : 0.4070}},
  {'input' : {'intell' : 0.64474, 'crit' : 0.09454, 'haste' : 0.09872, 'mastery' : 0.04537, 'versa' : 0.02973}, 'output' : {'hps' : 0.1680128, 'over' : 0.3213}},
  {'input' : {'intell' : 0.60180, 'crit' : 0.06717, 'haste' : 0.11926, 'mastery' : 0.10676, 'versa' : 0.00607}, 'output' : {'hps' : 0.1667807, 'over' : 0.2261}},
  {'input' : {'intell' : 0.59944, 'crit' : 0.06560, 'haste' : 0.11366, 'mastery' : 0.07279, 'versa' : 0.03105}, 'output' : {'hps' : 0.1656843, 'over' : 0.3741}},
  {'input' : {'intell' : 0.63879, 'crit' : 0.08193, 'haste' : 0.10209, 'mastery' : 0.08306, 'versa' : 0.03180}, 'output' : {'hps' : 0.1631354, 'over' : 0.3901}},
  {'input' : {'intell' : 0.61203, 'crit' : 0.09959, 'haste' : 0.08899, 'mastery' : 0.09042, 'versa' : 0.01725}, 'output' : {'hps' : 0.1631029, 'over' : 0.4909}},
  {'input' : {'intell' : 0.64798, 'crit' : 0.04897, 'haste' : 0.13222, 'mastery' : 0.06864, 'versa' : 0.04578}, 'output' : {'hps' : 0.1618201, 'over' : 0.4341}},
  {'input' : {'intell' : 0.66382, 'crit' : 0.05891, 'haste' : 0.12185, 'mastery' : 0.07637, 'versa' : 0.01359}, 'output' : {'hps' : 0.1612062, 'over' : 0.2934}},
  {'input' : {'intell' : 0.61496, 'crit' : 0.06376, 'haste' : 0.12755, 'mastery' : 0.06245, 'versa' : 0.03679}, 'output' : {'hps' : 0.1596468, 'over' : 0.3047}},
  {'input' : {'intell' : 0.65734, 'crit' : 0.06671, 'haste' : 0.11454, 'mastery' : 0.06766, 'versa' : 0.03162}, 'output' : {'hps' : 0.1581866, 'over' : 0.2973}},
  {'input' : {'intell' : 0.62253, 'crit' : 0.08440, 'haste' : 0.09747, 'mastery' : 0.06429, 'versa' : 0.04770}, 'output' : {'hps' : 0.1560283, 'over' : 0.3310}},
  {'input' : {'intell' : 0.61894, 'crit' : 0.06920, 'haste' : 0.10369, 'mastery' : 0.08793, 'versa' : 0.03770}, 'output' : {'hps' : 0.1549151, 'over' : 0.3237}},
  {'input' : {'intell' : 0.59212, 'crit' : 0.10978, 'haste' : 0.11405, 'mastery' : 0.04883, 'versa' : 0.01877}, 'output' : {'hps' : 0.1542302, 'over' : 0.3259}},
  {'input' : {'intell' : 0.64765, 'crit' : 0.08218, 'haste' : 0.10913, 'mastery' : 0.09170, 'versa' : 0.01104}, 'output' : {'hps' : 0.1540629, 'over' : 0.3723}},
  {'input' : {'intell' : 0.59061, 'crit' : 0.08076, 'haste' : 0.09280, 'mastery' : 0.09615, 'versa' : 0.02204}, 'output' : {'hps' : 0.1538826, 'over' : 0.2456}},
  {'input' : {'intell' : 0.62627, 'crit' : 0.05538, 'haste' : 0.11137, 'mastery' : 0.06623, 'versa' : 0.02916}, 'output' : {'hps' : 0.1529397, 'over' : 0.3495}},
  {'input' : {'intell' : 0.61412, 'crit' : 0.07487, 'haste' : 0.08859, 'mastery' : 0.09111, 'versa' : 0.03807}, 'output' : {'hps' : 0.1527184, 'over' : 0.4101}},
  {'input' : {'intell' : 0.58408, 'crit' : 0.06375, 'haste' : 0.10187, 'mastery' : 0.10100, 'versa' : 0.01789}, 'output' : {'hps' : 0.1527155, 'over' : 0.4101}},
  {'input' : {'intell' : 0.59214, 'crit' : 0.04894, 'haste' : 0.11512, 'mastery' : 0.08691, 'versa' : 0.03542}, 'output' : {'hps' : 0.1524701, 'over' : 0.4735}},
  {'input' : {'intell' : 0.66833, 'crit' : 0.10137, 'haste' : 0.11187, 'mastery' : 0.07406, 'versa' : 0.01881}, 'output' : {'hps' : 0.1515608, 'over' : 0.3090}},
  {'input' : {'intell' : 0.71698, 'crit' : 0.10669, 'haste' : 0.10355, 'mastery' : 0.04576, 'versa' : 0.01877}, 'output' : {'hps' : 0.1511522, 'over' : 0.2971}},
  {'input' : {'intell' : 0.64897, 'crit' : 0.06291, 'haste' : 0.13479, 'mastery' : 0.04256, 'versa' : 0.03409}, 'output' : {'hps' : 0.1494063, 'over' : 0.3924}},
  {'input' : {'intell' : 0.59997, 'crit' : 0.04751, 'haste' : 0.12324, 'mastery' : 0.09646, 'versa' : 0.01577}, 'output' : {'hps' : 0.1485848, 'over' : 0.3960}},
  {'input' : {'intell' : 0.58655, 'crit' : 0.08858, 'haste' : 0.11158, 'mastery' : 0.08998, 'versa' : 0.01049}, 'output' : {'hps' : 0.1479056, 'over' : 0.4697}},
  {'input' : {'intell' : 0.61249, 'crit' : 0.11591, 'haste' : 0.06397, 'mastery' : 0.06959, 'versa' : 0.05158}, 'output' : {'hps' : 0.1476535, 'over' : 0.3583}},
  {'input' : {'intell' : 0.59273, 'crit' : 0.04498, 'haste' : 0.13354, 'mastery' : 0.08616, 'versa' : 0.02000}, 'output' : {'hps' : 0.1471687, 'over' : 0.4195}},
  {'input' : {'intell' : 0.58518, 'crit' : 0.08202, 'haste' : 0.12936, 'mastery' : 0.05907, 'versa' : 0.02387}, 'output' : {'hps' : 0.1461462, 'over' : 0.3442}},
  {'input' : {'intell' : 0.65220, 'crit' : 0.07967, 'haste' : 0.10126, 'mastery' : 0.07456, 'versa' : 0.02596}, 'output' : {'hps' : 0.1453435, 'over' : 0.3567}},
  {'input' : {'intell' : 0.58496, 'crit' : 0.05477, 'haste' : 0.10955, 'mastery' : 0.08022, 'versa' : 0.02733}, 'output' : {'hps' : 0.1452537, 'over' : 0.3416}},
  {'input' : {'intell' : 0.61617, 'crit' : 0.07168, 'haste' : 0.12742, 'mastery' : 0.07526, 'versa' : 0.01379}, 'output' : {'hps' : 0.1449277, 'over' : 0.3423}}
];

simulator.simulate(data);
