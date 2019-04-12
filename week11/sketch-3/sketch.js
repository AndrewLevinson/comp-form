// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

injectInterface();
document.getElementById("title").textContent = generateTitle();
document.getElementById("subtitle").textContent = generateSubtitle();
document.getElementById("content").textContent = generateContent();

function generateTitle() {
  var name_prefixes = [
    "King",
    "Queen",
    "Professor",
    "Madam",
    "Mister",
    "Sir",
    "Lady",
    "Doctor"
  ];
  var primary_nouns = [
    "Oak",
    "Cotton",
    "Stone",
    "Moon",
    "Sun",
    "Star",
    "Knife",
    "Clock",
    "Midnight",
    "Forgetful",
    "Careful",
    "Chestnut",
    "Crab",
    "Sky",
    "Fox",
    "Hound",
    "Tree"
  ];
  var adjectives = [
    "Lost",
    "Three",
    "Two",
    "Forgotten",
    "Fallen",
    "Pack of",
    "Valiant",
    "Golden",
    "Many",
    "Merry",
    "Clever",
    "Wonderful",
    "Sullen",
    "Angry",
    "Little",
    "Cowardly",
    "Silver",
    "Last",
    "Jolly",
    "Festive",
    "Gleeful",
    "Enchanted",
    "Wise",
    "Wistful",
    "Dark",
    "Untold"
  ];
  var secondary_nouns = [
    "Riddles",
    "Parables",
    "Fables",
    "Predicaments",
    "Trials",
    "Words",
    "Promises",
    "Lies",
    "Pests",
    "Beasts",
    "Trolls",
    "Shades",
    "Shadows",
    "Woods",
    "Lands",
    "Forests",
    "Brothers",
    "Sisters",
    "Children",
    "Days",
    "Nights",
    "Years",
    "Hours"
  ];

  var name_prefix = sample(name_prefixes);
  var primary_noun = sample(primary_nouns);
  var adjective = sample(adjectives);
  var secondary_noun = sample(secondary_nouns);

  var title = "";
  if (Math.random() < 0.5) {
    title = `${name_prefix} ${primary_noun} and the ${adjective} ${secondary_noun}`;
  } else {
    title = `The ${adjective} ${secondary_noun} of ${name_prefix} ${primary_noun}`;
  }

  return title;
}

function generateSubtitle() {
  var story_adjectives = [
    "Lost",
    "Forgotten",
    "Merry",
    "Clever",
    "Wonderful",
    "Sullen",
    "Little",
    "Cowardly",
    "Jolly",
    "Festive",
    "Gleeful",
    "Enchanted",
    "Wise",
    "Wistful",
    "Dark",
    "Untold",
    "Secret"
  ];
  var story_formats = [
    "Tale",
    "Novel",
    "Book in Three Parts",
    "Song",
    "Short Story",
    "Legend",
    "Mystery",
    "Comedy",
    "Musical",
    "Production",
    "Lesson"
  ];

  var adjective = sample(story_adjectives);
  var format = sample(story_formats);
  var subtitle = `A  ${adjective}  ${format}`;

  return subtitle;
}

function generateContent() {
  var story_adjectives = [
    "Lost",
    "Forgotten",
    "Merry",
    "Clever",
    "Wonderful",
    "Sullen",
    "Little",
    "Cowardly",
    "Jolly",
    "Festive",
    "Gleeful",
    "Enchanted",
    "Wise",
    "Wistful",
    "Dark",
    "Untold",
    "Secret"
  ];
  var story_formats = [
    "Tale",
    "Novel",
    "Book in Three Parts",
    "Song",
    "Short Story",
    "Legend",
    "Mystery",
    "Comedy",
    "Musical",
    "Production",
    "Lesson"
  ];
  var primary_nouns = [
    "Oak",
    "Cotton",
    "Stone",
    "Moon",
    "Sun",
    "Star",
    "Knife",
    "Clock",
    "Midnight",
    "Forgetful",
    "Careful",
    "Chestnut",
    "Crab",
    "Sky",
    "Fox",
    "Hound",
    "Tree"
  ];

  var ing = [
    "jazzing",
    "fuzzing",
    "warping",
    "jamming",
    "faxing",
    "returning",
    "undoing",
    "contemplating",
    "eloping",
    "hyping",
    "promoting"
  ];

  var verb = [
    "boogie",
    "trip",
    "explode",
    "splatter",
    "turn up",
    "balance",
    "cajole",
    "imprison",
    "schedule",
    "berate"
  ];

  var noun_sample = [
    "blood rage",
    "fool",
    "factory reset",
    "corn cake",
    "coffee pot",
    "brethren",
    "national security",
    "sound barrier",
    "Ford Model T",
    "mad cow disease",
    "newt",
    "smooshed face french bulldog"
  ];

  var adjective = sample(story_adjectives);
  var format = sample(story_formats);
  var names = sample(primary_nouns);
  var verbing = sample(ing);
  var verb = sample(verb);
  var noun = sample(noun_sample);

  var content = `Once up on a time a  ${adjective.toLowerCase()} ${names.toLowerCase()} decided to ${verb} a ${format.toLowerCase()} but ended up ${verbing} a ${noun} instead...so now this story is officially over. Goodbye.`;

  return content;
}

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function injectInterface() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
<style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900');
		body {
			text-align: center;
      font-family: 'Playfair Display', serif;
      background-color: #3d3d3d;
      color: #fff;
      text-align: left;
		}
		.wrap {
			display: table;
			padding: 40px;
			margin: 50px auto;
			text-align: left;
		}
		#title {
			font-size: 50px;
			font-weight: bold;
			text-transform: uppercase;
			line-height: .9em;
		}
		#subtitle {
			margin-top: .75em;
			font-weight: 300;
			font-size: 25px;
      font-weight: normal;
      opacity: 0.75;
    }
    
    #content {
      font-size: 18px;
      font-weight: normal;
      margin-top: 40px;
      opacity: 0.9;
    }

	</style>
	<div class="wrap">
  <div id="subtitle">Subtitle</div>
		<div id="title">Title</div>
		<div id="content">Content</div>
	</div>
`
  );
}
