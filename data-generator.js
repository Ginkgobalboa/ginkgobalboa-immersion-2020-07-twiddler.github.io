/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.js.
 */

// Set up data structures
const streams = {
  home: [],
  users: {
    Julius_Caesar: [],
    Ovid: [],
    Virgil: [],
    Caligula: [],
  },
};
const users = Object.keys(streams.users);

// Utility function for adding tweets to our data structures
const addTweet = (newTweet) => {
  const username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// Utility function
const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Random tweet generator
const opening = ['tantum', '', '', '', '', 'quam ego a me', 'omnino', 'fere', 'in secretum', 'Ego heri', 'Caesar', 'eo sacerdos', 'gladiator', 'feci', 'exarsi', 'pugnavit', 'scripsi', 'sollicitudin', 'formari', 'celeritate uinci senserunt', 'creavi'];
const verbs = ['accepi rerum a tela', 'feci aliquid operari cum', 'explicuit', 'succrevit', 'aedificavit', 'inventa', 'expertus', 'ordinatur cursus', 'adiutus', 'fruendum', 'machinator', 'aedificavit', 'accepi minorum de', 'delegata', 'sollicitudin', 'formari', 'verat systematice', 'celeritate uinci senserunt', 'computandos'];
const objects = ['meam', 'tuam', 'meam', 'totum', 'hoc', 'quod', 'magnus', 'novam formam'];
const nouns = ['cattus', 'vinum', 'ratio', 'urbem', 'vermis', 'nubes', 'solanum tuberosum', 'pecunia', 'via vitae', 'religio', 'praesidio ratio', 'malum consilium', 'futurum', 'vita', 'equus', 'mens'];
const tags = ['#vitadescientia', '#ardenshomo', '#romaevitae', '#sedtantumscioquam', '#namipsum', '#meridieafricum', '#facerebeneinvita', '#odeusmeus', '#tutantumviverequondam', '#magia', '#eheu', '', '', '', ''];

const randomMessage = () => {
  return [
    randomElement(opening),
    randomElement(verbs),
    randomElement(objects),
    randomElement(nouns),
    randomElement(tags),
  ].join(' ');
};

// Generate random tweets on a random schedule
const generateRandomTweet = () => {
  const tweet = {
    user: randomElement(users),
    message: randomMessage(),
    created_at: new Date(),
  };
  addTweet(tweet);
};

for (let i = 0; i < 10; i++) {
  generateRandomTweet();
}

const scheduleNextTweet = () => {
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// Utility function for letting students add "write a tweet" functionality
// (NOTE: Not used by the rest of this file.)
const writeTweet = (message) => {
  const visitor = window.visitor;

  if (!visitor) {
    throw new Error('Set the global visitor property!');
  }

  const tweet = {
    user: visitor,
    message: message,
  };
  addTweet(tweet);
};
