const apps = {
    'shimberg': {
        title: 'Shimberg Center',
        style: {
            color: '#ffffff',
            backgroundColor: '#023366'
        },
        logo: 'cards/shimberg.png',
        demoURL: 'http://shimberg.ufl.edu/',
        infoURLName: 'shimberg',
        githubURL: 'N/A',
        techList: ["node", "webpack", "express", "es6", "babel", "jquery", "bootstrap"],
        screenshot: 'screenshots/shimberg.png',
        description: "The Shimberg Center website provides info about the Shimberg center as well as Florida housing data they have created and gathered. This is the 3rd project I delivered for the Shimberg Center.",
        why: "The site was in dire need of an update: I removed unnecessary files and redundancy from the codebase, I made the site fully responsive on all screen sizes, I standardized the routing, and I added minification, bundling, and compression to speed up the page load times.",
        coolFeature: "The original About Page had a timeline that listed significant points in time for the Shimberg Center. I thought the timeline was a cool idea, so I gave it a major refresh: I added some color, I cleaned up the UI, and it's now responsive on all screen sizes (try viewing it on different screen sizes, the whole layout of it changes!).",
        date: 'July 2019'
    },
    'colorgrid': {
        title: 'Color Grid',
        style: {
            color: '#ffffff',
            backgroundColor: '#eeba3f'
        },
        logo: 'cards/colorgrid.png',
        demoURL: 'https://jaketripp.github.io/color-grid/',
        infoURLName: 'colorgrid',
        githubURL: 'https://github.com/jaketripp/color-grid',
        techList: ['react', 'node', 'webpack', 'babel', 'es6', 'sass', 'javascript', 'css-3', 'html-5'],
        screenshot: 'screenshots/colorgrid.png',
        description: "Create a matrix of colors by choosing four colors and then splitting up the distance between them.",
        why: "One day I had a realization: if colors can be represented as numbers, then the color between two colors is just the average of the two colors. I thought a cool way to visualize this would be to split the distance between colors using a slider. Taking this realization further, I then decided to make a color matrix using four colors. As you split the distance into more and more colors, it starts to look like a color gradient - conceptually, this is like an integral taken between two colors.",
        coolFeature: "I think this is some of my best design work - sleek and visually pleasing. Another cool thing is, instead of having four separate color pickers, I have one color picker that controls the color that you tap - less bloat in the code and conceptually kind of cool to think about.",
        date: 'July 2019'
    },
    'quickcopy': {
        title: 'Quick Copy',
        style: {
            color: '#ffffff',
            backgroundColor: '#2979ff'
        },
        logo: 'cards/quickcopy.png',
        demoURL: 'https://jaketripp.github.io/quick-copy/',
        infoURLName: 'quickcopy',
        githubURL: 'https://github.com/jaketripp/quick-copy',
        techList: ['react', 'node', 'webpack', 'babel', 'es6', 'sass', 'material-ui', 'javascript', 'css-3', 'html-5'],
        screenshot: 'screenshots/quickcopy.png',
        description: "Ever have to copy a lot of lines individually to other places? Ever think you pressed CMD+C to find out you, in fact, did not? Ever lose your place and forget what you just copied? Cut out half the work with Quick Copy. Paste in a blob of text and it creates blocks that copy their content to your clipboard when clicked and then disappear!",
        why: "I had run into the annoying scenario too many times where I had to copy and paste a lot of hard-to-distinguish things (think serial numbers, long URLs, etc) and thought that there had to be a better way.",
        coolFeature: "I realize Quick Copy is a pretty niche application - you might never need it - but the handful of times I've had a need for it it has been an absolute joy to use. One feature I really like is the fact that I allow the user to decide what to split the data by. This was also my first time working with Service Workers - try accessing the app with no internet to see what I mean!",
        date: 'June 2019'
    },
    'clearinghouse': {
        title: 'Florida Housing Data Clearinghouse',
        style: {
            color: '#ffffff',
            backgroundColor: '#105f84'
        },
        logo: 'cards/clearinghouse.png',
        demoURL: 'http://flhousingdata.shimberg.ufl.edu/',
        infoURLName: 'clearinghouse',
        githubURL: 'N/A',
        techList: ["node", "webpack", "express", "es6", "babel", "jquery", "bootstrap", "mocha", "chai", "selenium"],
        screenshot: 'screenshots/clearinghouse.png',
        description: "Florida Housing Data Clearinghouse, the 2nd web app I delivered for the Shimberg Center, provides considerable data on Florida's housing.",
        why: "The site needed new features and a new infrastructure to support them. I removed unnecessary features, added new features, and improved the user experience and interface.",
        coolFeature: "The Assisted Housing Inventory is the most complex part of our web app. It produces a large table that can be filtered by various criteria. We wanted to make the URLs dynamic so that a user could share a link where the filters would automatically be applied. My approach was to add the filters to the URL when the form was submitted, and then parse the URL and automatically fill the form in accordingly (to keep the table and the currently applied filters in sync).",
        date: 'June 2018'
    },
    'elderdata': {
        title: 'Elder Data',
        style: {
            color: '#ffffff',
            backgroundColor: '#45a3cf'
        },
        logo: 'cards/elderdata.jpg',
        demoURL: 'http://elderdata.shimberg.ufl.edu/',
        infoURLName: 'elderdata',
        githubURL: 'N/A',
        techList: ["node", "webpack", "express", "es6", "babel", "jquery", "bootstrap", "mocha", "chai", "selenium"],
        screenshot: 'screenshots/elderdata.png',
        description: "Housing Florida’s Older Adults: By the Numbers (referred to as Elder Data by my team and I) is the 1st web app I worked on with the Shimberg Center. The app provides data on housing the elderly in Florida.",
        why: "We remade the existing site (most of which was written in Perl). Since we were such a small team, I was the lead developer - which was a really cool experience.",
        coolFeature: "Two requirements of the site were to have an autocomplete input field and a clickable map for the various counties in Florida. I had an idea to wire them together so that as you type in the autocomplete, the results list that matches your search also highlights the corresponding places on the map. I used JavaScript's MutationObserver API to accomplish this. Another requirement was that the site had to be 508 compliant, which was a challenge initially. But I'm proud of the fact that the app we made is accessible to all. One final thing I'm proud of is I learned and set up Webpack entirely on my own to minify, bundle, and compress assets - which led to an enormous page speed boost.",
        date: 'February 2018'
    },
    'distillr': {
        title: 'Distillr',
        style: {
            color: '#ffffff',
            backgroundColor: '#8fce47'
        },
        logo: 'cards/distillr.png',
        demoURL: 'http://jaketripp-distillr.herokuapp.com/',
        infoURLName: 'distillr',
        githubURL: 'https://github.com/jaketripp/via',
        techList: ['react', 'node', 'webpack', 'express', 'es6', 'babel', "momentjs"],
        screenshot: 'screenshots/distillr.png',
        description: "Distillr helps you get where you want using a VIA bus. It takes in some info like your current address (or any address in San Antonio), the amount of money you are willing to spend, start and end times, and a search word. It then returns a list of options of places you could go, with their Yelp ratings, expected cost, estimated time, listed phone numbers, and most importantly a dynamic bus route that will take you to VIA's web app with all of the necessary info already populated.",
        why: "My friend and teammate, Kia, told me about the VIA 2018 Codeathon and it sounded like a great opportunity to participate in. We had been wanting to work together because we thought our skillsets would compliment each other. It also sounded more satisfying and convenient because the problems were local problems. It’s 2018, we make more decisions every single day than arguably any other time in history. Decisions are hard, and time is precious.  Distillr makes decision making easy.",
        coolFeature: "Kia and I worked fast and went from not even an idea to a deployed product in one weekend. He worked on the backend of Distillr, while I worked on the frontend using React. I take pride in the fact that I think Distillr has a really clean interface and an intuitive user experience.",
        date: 'February 2018'
    },
    'musicmaster': {
        title: 'Music Master',
        style: {
            color: '#ffffff',
            backgroundColor: '#2c5b61'
        },
        logo: 'cards/music-master.jpg',
        demoURL: 'https://jaketripp-music-master.herokuapp.com/',
        infoURLName: 'musicmaster',
        githubURL: 'https://github.com/jaketripp/music-master',
        techList: ['react', 'node', 'webpack', 'express', 'es6', 'oauth', 'babel', 'sass', 'bootstrap'],
        screenshot: 'screenshots/musicmaster.png',
        description: "Sign in with your Spotify account to play popular songs by your favorite artists.",
        why: "I was initially building a more simple version of this app while following David Katz's Udemy course. I love music and I am a Spotify user and it seemed like a good project to learn more about React.",
        coolFeature: "When David Katz made his course, Spotify didn't require authentication for their API. Then, Spotify changed their API to require authentication, so I needed to learn about OAuth and try to implement it all on my own. For my first time handling OAuth by myself, I'm very proud of the result.",
        date: 'January 2018'
    },
    'expensify': {
        title: 'Expensify',
        style: {
            color: '#ffffff',
            backgroundColor: '#1890c0'
        },
        logo: 'cards/expensify.jpg',
        demoURL: 'https://jaketripp-expensify.herokuapp.com/',
        infoURLName: 'expensify',
        githubURL: 'https://github.com/jaketripp/expensify',
        techList: ['react', 'redux', 'react-router', 'node', 'webpack', 'jest', 'express', 'es6', 'firebase', 'babel', 'sass'],
        screenshot: 'screenshots/expensify.jpg',
        description: "Keep track of your expenses with this powerful and intuitive app!",
        why: "I made the bulk of this app as the capstone project of Andrew Mead's Udemy course. It used all of the things we learned in the course, and then I added some features of my own.",
        coolFeature: "As a user, I really enjoy when I can sign up for something using another account, so I went ahead and leveraged Firebase to handle the authentication for Google, Facebook, Twitter, and GitHub. I also added a confirmation modal for when the user tries to delete an expense. Finally, I added the user's picture and name, which I think brings the user a sense of familiarity and belonging.",
        date: 'December 2017'
    },
    'hairbyfrancisco': {
        title: 'Hair by Francisco',
        style: {
            color: '#ffffff',
            backgroundColor: '#7D5DB2'
        },
        logo: 'cards/hf.png',
        demoURL: 'https://jaketripp.github.io/hairByFrancisco/',
        infoURLName: 'hairbyfrancisco',
        githubURL: 'https://github.com/jaketripp/hairByFrancisco/',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: 'screenshots/hairbyfrancisco.jpg',
        description: "Francisco Mejia is a passionate, local hairstylist. Clients of Francisco love his creative vision, his ability to give people the perfect haircut/style/color, his attention to detail, and his friendly personality.",
        why: "Francisco is my barber and his website didn't show off his skills very well. I also wanted to add real work to my résumé.",
        coolFeature: "I wanted people to really get a sense of Francisco's work and skills, so I knew I would need a lot of pictures. However, with all of those pictures the page started loading really slow. I opted for a cool solution: progressive loading. Basically, load in extremely tiny sized versions of the pictures and have a blur effect, and as the user scrolls, dynamically load in the real image and remove the blur effect. Quick to load and an enjoyable experience.",
        date: 'October 2017'
    },
    'asoftoday': {
        title: 'As of Today',
        style: {
            color: '#ffffff',
            backgroundColor: '#184860'
        },
        logo: 'cards/asoftoday.jpg',
        demoURL: 'https://jaketripp.github.io/asoftoday/',
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery', 'modernizr'],
        screenshot: 'screenshots/asoftoday.png',
        description: "As of Today provides a helpful way to track the statistics of a life after habitual addiction.",
        why: "My mom was addicted to Diet Coke for most of her adult life. She tried multiple times to quit - all unsuccessful. She usually drank six Diet Cokes a day. Partly with the help of As of Today, she successfully quit on February 23, 2017. That's a lot of Diet Cokes! Now, she has lower cholesterol and blood pressure, healthier body weight and dental hygiene, more balanced emotional health, and less pain. I want that for everyone.",
        coolFeature: "When I made As of Today, I was new to databases. And I also wanted to respect people's privacy, because addiction is a very personal thing. So I opted to use localStorage to store some simple info in the user's browser and have the site update on refresh.",
        date: 'July 2017'
    },
    'sacc': {
        title: 'SA Coding Challenge',
        style: {
            color: '#ffffff',
            backgroundColor: '#181818'
        },
        logo: 'cards/sacc.jpg',
        demoURL: 'http://sacodingchallenge.com',
        infoURLName: 'sacc',
        githubURL: 'https://github.com/sacodingchallenge/sacodingchallenge',
        techList: ['node', 'express', 'momentjs', 'html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: 'screenshots/sacc.png',
        description: "The San Antonio Coding Challenge is a meetup group that holds a monthly coding competition in San Antonio.",
        why: "Gene Carangal, the founder of the meetup, is a really great guy and I really enjoy attending this meetup. Gene noticed that I was looking for work to boost my résumé, and the website needed a lot of work, and the rest is history.",
        coolFeature: "This was one of my first Node.js apps where I did almost everything entirely on my own, which was a big milestone for me. I also chose to use EJS templating, which really helped cut the time for development.",
        date: "October 2017"
    },
    'chat': {
        title: 'Chat',
        style: {
            color: '#ffffff',
            backgroundColor: '#276b82'
        },
        logo: 'cards/chat.jpg',
        demoURL: 'http://jaketripp-chat-app.herokuapp.com/',
        infoURLName: 'chat',
        githubURL: 'https://github.com/jaketripp/node-chat-app',
        techList: ['node', 'express', 'momentjs', 'socketio', 'html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: 'screenshots/chat.png',
        description: "Pick a username, pick a chatroom from a list (or create your own), and tell your friends to join!",
        why: "I built this app while following Andrew Mead's Udemy course on Node.js.",
        coolFeature: "I added the feature of being able to see a list of currently open chatrooms. This was also my first project using web sockets with Socket.IO.",
        date: "November 2017"
    },
    'yelpcamp': {
        title: 'YelpCamp',
        style: {
            color: '#ffffff',
            backgroundColor: '#265a88'
        },
        logo: 'cards/yelpcamp.jpg',
        demoURL: 'https://jaketripp-yelp-camp.herokuapp.com/',
        infoURLName: 'yelpcamp',
        githubURL: 'https://github.com/jaketripp/yelpcamp',
        techList: ['node', 'mongodb', 'express', 'passport', 'html-5', 'css-3', 'javascript', 'bootstrap'],
        screenshot: 'screenshots/yelpcamp.png',
        description: "View hand-picked campgrounds from all over the world! Sign up to add your own campgrounds or leave comments on other campgrounds.",
        why: "I built this app while following Colt Steele's Web Dev Bootcamp Udemy course. This was the final and most complex project of the course.",
        coolFeature: "This was my first exposure to authentication (in this instance using Passport.js). At the time, this was also the most advanced work I'd done with databases (in this instance, MongoDB).",
        date: "May 2017"
    },
    'calculator': {
        title: 'Calculator',
        style: {
            color: '#ffffff',
            backgroundColor: '#1890d8'
        },
        logo: 'cards/calculator.png',
        demoURL: 'https://jaketripp.github.io/calculator/',
        infoURLName: 'calculator',
        githubURL: 'https://github.com/jaketripp/calculator/',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: 'screenshots/calculator.png',
        description: "Four function calculator.",
        why: "This was a project from freeCodeCamp's Advanced Front End Development Projects. I'm a huge math geek, and it seemed like a great introductory challenge for getting accustomed to working with state.",
        coolFeature: "I created this project before I knew anything about React. Maintaining the state of what the user is seeing and the state of the calculations and keeping them separate and updated proved quite challenging. I carefully created the user interface based on memories of four function calculators from my childhood (just look at that font!).",
        date: "September 2017"
    },
    'seasonal': {
        title: 'Seasonal',
        style: {
            color: '#ffffff',
            backgroundColor: '#D4493D'
        },
        logo: 'cards/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
        techList: ['html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: 'screenshots/seasonal.png',
        description: "A comprehensive tool to aid with picking out fresh fruit. Seasonal is one of my very first projects, and it was the first project where I used Git and GitHub. I researched all of the information myself. ",
        why: "I was really fed up with two things: 1) going to the grocery store and only picking the fruit I was familiar with and 2) not knowing whether fruit was ripe or not.",
        coolFeature: "Seasonal tells you what fruit is in season based on the month, what signs to look for that signify ripeness, the health benefits of the fruit (with links), and more! ",
        date: "Jan 2017"
    },
    'tictactoe': {
        title: 'Tic Tac Toe',
        style: {
            color: '#ffffff',
            backgroundColor: '#00A717'
        },
        logo: 'cards/tictactoe.png',
        demoURL: 'https://jaketripp.github.io/tictactoe/',
        infoURLName: 'tictactoe',
        githubURL: 'https://github.com/jaketripp/tictactoe/',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: 'screenshots/tictactoe.png',
        description: "Play Tic Tac Toe against a formidable opponent.",
        why: "This was a project from freeCodeCamp's Advanced Front End Development Projects. Tic tac toe is a simple game, and so I wanted to see if writing a bot was equally simple. It was not.",
        coolFeature: "I had to think very algorithmically. I had to maintain state so that the bot would know which move is probably a good one. I ranked the best moves. At the time, I tried to implement the infamous minimax algorithm but it proved too complex for me, although I may take a stab at it at a later date. While not unbeatable, my bot has beat most people I've shown it to.",
        date: "September 2017"
    },
    'colorconversion': {
        title: 'Color Conversion',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#A81890'
        },
        logo: 'cards/color.jpg',
        demoURL: 'https://jaketripp.github.io/Color-Conversion/',
        infoURLName: 'colorconversion',
        githubURL: 'https://github.com/jaketripp/Color-Conversion/',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: 'screenshots/colorconversion.png',
        description: "Convert hexadecimal to RGB and see live color changes.",
        why: "I was learning about how colors are represented on the web using hexadecimal numbers or RGB. I figured there was a way to convert, and I was right. I thought making a converter would be a good challenge and help me train myself to be able to see a hexadecimal number and roughly guess the color.",
        coolFeature: "I added a lot of little things that make the user experience more enjoyable: the inputs only allow valid characters, the inputs auto tab, it has a CSS animation on the background so you can watch as the colors change, etc.",
        date: "January 2018"
    },
    'kokolunchbox': {
        title: 'Koko Lunchbox',
        style: {
            color: '#ffffff',
            backgroundColor: '#c00030'
        },
        logo: 'cards/koko.png',
        demoURL: 'https://jaketripp.github.io/Koko-Lunchbox/',
        infoURLName: 'kokolunchbox',
        githubURL: 'https://github.com/jaketripp/Koko-Lunchbox',
        techList: ['html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: 'screenshots/kokolunchbox.png',
        description: "Koko Lunchbox in Provo, Utah delivers a fresh, fast and clean approach to Korean cuisine.",
        why: "I used to work for Koko Lunchbox when my close friend was the owner/chef/manager. I love eating Korean food and wanted to learn how to cook it. I moved away and was learning web developement on the side, and wanted to make my friend a website and surprise her with it, but she told me she had sold the restaurant and it was under new management. Unfortunately, the site never went live and remained just a personal project, but I'm still quite proud of it and the talent I gained in cooking Korean cuisine.",
        coolFeature: "For being one of my very first projects, I'm quite proud of this website. I went for an interface of pastel colors on a chalkboard texture background - this is because the restaurant's menu was written with chalk on a chalkboard. This was also my first experience in working with the Google Maps API, which makes finding the restaurant convenient.",
        date: "January 2017"
    }
};

module.exports = { apps };