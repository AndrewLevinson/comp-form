// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */

var reverb = new Tone.JCReverb(0.65).connect(Tone.Master);
var delay = new Tone.FeedbackDelay(0.22);
var synth = new Tone.Synth().chain(delay, reverb);

Tone.Transport.bpm.value = 200;

const melody = [
  ["d4", "8n."],
  ["rest", "4n"],
  ["f4", "4n"],
  ["rest", "8n"],
  ["d4", "4n"],
  ["d4", "8n"],
  ["g4", "4n"],
  ["d4", "4n"],
  ["c#4", "4n"],

  ["d4", "8n"],
  ["rest", "4n."],
  ["a4", "8n"],
  ["rest", "8n."],
  ["d4", "4n"],
  ["d4", "8n"],
  ["a#4", "4n"],
  ["a4", "4n"],
  ["f4", "4n"],
  ["d4", "4n"],
  ["a4", "4n"],
  ["d3", "4n"],
  ["d4", "4n"],
  // ["c4", "4n"],
  ["c4", "4n"],
  ["a3", "4n"],
  ["e4", "4n"],
  ["d4", "4n"],

  ["rest", "1n"],
  ["rest", "4n"],
  // ["rest", "4n"],
  // ["rest", "4n"],
  ["c4", "8n"],
  ["a3", "4n"],
  ["g3", "4n"],
  ["e3", "4n"]
];

window.onmousedown = e => {
  // Play the melody!

  let t = Tone.now();

  for (const note of melody) {
    console.log(note);
    if (note[0] !== "rest") {
      // synth.triggerAttackRelease(note[0], note[1]), t);
      synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    }
    t += Tone.Time(note[1]);
  }
};

console.log("click for music!");
