var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connect("mongodb://localhost:27017/shopping");

var products = [
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/sku/10633/1/10633182_1GG.jpg',
    title: 'Jogo Pes 2016 - Ps4',
    description: 'Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.',
    price: 269
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg',
    title: 'Game Tom Clancys Ghost Recon Wildlands Ps4',
    description: 'Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.',
    price: 209
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg',
    title: 'Game Lego Star Wars: O Despertar Da Força - PS4',
    description: 'Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.',
    price: 169
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg',
    title: 'Game Mortal Kombat X - PS4',
    description: 'Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.',
    price: 79
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg',
    title: "Game - Uncharted 4: A Thief's End - PS4",
    description: "Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.",
    price: 108
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg',
    title: "Game - The Witcher 3: Wild Hunt - PS4",
    description: "Together With All The New Features Included In Pes 2016, The Football Series Will Have For The First Time The Dynamic Climate System. This new implementation will not only graphically improve the time effects in the game, but will also affect the gameplay itself, having an important role in the redesign of the master mode and the off-line games. In addition, the game features a new camera mode, New Commemoration Features. Title: Pes 16 Platform: Ps4 Developer: Konami Features: Genre: Sport Age Range: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio-English With Mauro Beting's Narration and Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals And Metropolitan Regions 0800-880-7669 Other Locations. Not All Features Are Available For All Game Platforms.",
    price: 99
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}