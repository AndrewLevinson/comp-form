// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */

var reverb = new Tone.JCReverb(0.75).connect(Tone.Master);
var delay = new Tone.FeedbackDelay(0.7);
var autoWah = new Tone.AutoWah(50, 6, -30);
var dist = new Tone.Distortion(1);
var synth = new Tone.DuoSynth().chain(delay, reverb, autoWah, dist);
autoWah.Q.value = 6;

Tone.Transport.bpm.value = 185;

const melody = [
  ["E4", "4n."],
  ["D4", "8n"],
  ["C4", "4n"],
  ["D4", "4n"],

  ["E4", "4n"],
  ["E4", "4n"],
  ["E4", "4n"],

  ["rest", "4n"],

  ["D4", "4n"],
  ["D4", "4n"],
  ["D4", "4n"],

  ["rest", "4n"],

  ["E4", "4n"],
  ["G4", "4n"],
  ["G4", "4n"],

  ["rest", "4n"],

  ["E4", "4n."],
  ["D4", "8n"],
  ["C4", "4n"],
  ["D4", "4n"],

  ["E4", "4n"],
  ["E4", "4n"],
  ["E4", "4n"],
  ["E4", "4n"],
  ["D4", "4n"],
  ["D4", "4n"],
  ["E4", "4n"],
  ["D4", "4n"],
  ["C4", "4n"]
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
