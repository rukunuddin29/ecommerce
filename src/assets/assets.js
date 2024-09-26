import heavy from './heavyDuty.jpg';
import ag from './AG.jpg'
import dieGrinder from './dieGrinder.jpg'
import grinder from './grinder.jpg'
import vertical from './vertical.jpg'
import bench from './bench.jpg'
import niddle from './3niddle.jpeg'
import sandR from './3sand.png'
import rivet from './rivetbuster.jpeg'
import hoist from './hoist.jpg'
import wrench from './impactwrench.jpg'
import paving from './paving.jpg'

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
  paving
}

export const items = [
  {
    _id: "aaaaa",
    name: "Air Sander",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "200",
    image: assets.heavy,
    category: "grinder", // Changed to "grinder"
  },
  {
    _id: "bbbbb",
    name: "Heavy Duty Grinder ",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "300",
    image: assets.ag,
   category: "grinder", // Changed to match "driller" category in Contact component
  },
  {
    _id: "ccccc",
    name: "Die Grinder ",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    price: "250",
    image: assets.dieGrinder,
    category: "grinder", 
  },
  {
    _id: "ddddd",
    name: "Bench Rammers",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    price: "150",
    image: assets.bench,
    category: "rammers", // Changed to match "rammers" category in Contact component
  },
  // Repeat the process for other items, aligning their categories
  {
    _id: "eeee",
    name: "Vertical Grinder & Sander",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
    price: "220",
    image:assets.vertical,
    category: "grinder", // Example updated category
  },
  {
    _id: "fffff",
    name: "Sand Rammer",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    price: "180",
    image:assets.sandR,
    category: "rammers", // Example updated category
  },
  {
    _id: "ggggg",
    name: "Rivet Buster",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    price: "270",
    image: assets.rivet,
    category: "driller", // Example updated category
  },
  {
    _id: "ggggg1",
    name:"Hoists",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    price: "270",
    image: assets.hoist,
    category: "driller", // Example updated category
  },
    {
    _id: "ggggg2",
    name: "Impact Wrench",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    price: "270",
    image: assets.wrench,
    category: "impact wrench", // Example updated category
  },
  // Continue updating the rest of the items
  {
    _id: "fffff",
    name: "Niddle Rammers",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    price: "180",
    image:assets.niddle,
    category: "rammers", // Example updated category
  },
  {
    _id: "fffff",
    name: "Paving Break",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    price: "180",
    image: assets.paving,
    category: "impact wrench", // Example updated category
  },
];
