import heavy from './heavyDuty.jpg';
import ag from './AG.jpg';
import dieGrinder from './dieGrinder.jpg';
import grinder from './grinder.jpg';
import vertical from './vertical.jpg';
import bench from './bench.jpg';
import niddle from './3niddle.jpeg';
import sandR from './3sand.png';
import rivet from './rivetbuster.jpeg';
import hoist from './hoist.jpg';
import wrench from './impactwrench.jpg';
import paving from './paving.jpg';

export const assets = {
  heavy,
  ag,
  dieGrinder,
  grinder,
  vertical,
  bench,
  sandR,
  niddle,
  rivet,
  hoist,
  wrench,
  paving,
};

export const items = [
  {
    _id: 'aaaaa',
    name: 'Air Sander',
    description: 'High-performance air sander designed for precision surface preparation and finishing, ideal for professional applications.',
    price: '200',
    image: assets.heavy,
    category: 'grinder',
  },
  {
    _id: 'bbbbb',
    name: 'Heavy Duty Grinder',
    description: 'A robust and powerful grinder engineered for heavy-duty tasks, offering durability and efficiency in industrial grinding.',
    price: '300',
    image: assets.ag,
    category: 'grinder',
  },
  {
    _id: 'ccccc',
    name: 'Die Grinder',
    description: 'Compact yet powerful die grinder, perfect for intricate metalworking and polishing applications, delivering high precision.',
    price: '250',
    image: assets.dieGrinder,
    category: 'grinder',
  },
  {
    _id: 'ddddd',
    name: 'Bench Rammers',
    description: 'Reliable and efficient bench rammers ideal for compacting materials, suitable for industrial applications requiring heavy impact.',
    price: '150',
    image: assets.bench,
    category: 'rammers',
  },
  {
    _id: 'eeee',
    name: 'Vertical Grinder & Sander',
    description: 'Versatile vertical grinder and sander for both grinding and sanding tasks, ensuring optimal performance across various materials.',
    price: '220',
    image: assets.vertical,
    category: 'grinder',
  },
  {
    _id: 'fffff',
    name: 'Sand Rammer',
    description: 'Industrial-grade sand rammer designed for compacting sand molds, offering durability and precision for foundry applications.',
    price: '180',
    image: assets.sandR,
    category: 'rammers',
  },
  {
    _id: 'ggggg',
    name: 'Rivet Buster',
    description: 'High-impact rivet buster built for heavy-duty demolition and metalwork, delivering exceptional power and control.',
    price: '270',
    image: assets.rivet,
    category: 'driller',
  },
  {
    _id: 'ggggg1',
    name: 'Hoists',
    description: 'Heavy-duty hoists designed for lifting and moving heavy loads safely and efficiently in industrial environments.',
    price: '270',
    image: assets.hoist,
    category: 'driller',
  },
  {
    _id: 'ggggg2',
    name: 'Impact Wrench',
    description: 'Powerful impact wrench designed for high-torque applications, perfect for automotive and industrial maintenance tasks.',
    price: '270',
    image: assets.wrench,
    category: 'impact wrench',
  },
  {
    _id: 'fffff1',
    name: 'Niddle Rammers',
    description: 'Precision niddle rammers ideal for confined space applications, delivering efficient compaction in hard-to-reach areas.',
    price: '180',
    image: assets.niddle,
    category: 'rammers',
  },
  {
    _id: 'fffff2',
    name: 'Paving Breaker',
    description: 'Durable paving breaker designed for breaking concrete and asphalt, delivering high-impact performance for tough jobs.',
    price: '180',
    image: assets.paving,
    category: 'impact wrench',
  },
];
