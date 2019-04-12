injectInterface();
const input = document.querySelector("input");
const log = document.getElementById("values");
const result = document.getElementById("returnResult");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
  result.textContent = permutation(" ", log.textContent);
}

//string permutation from stack overflow example but modified
// https://stackoverflow.com/questions/5232295/is-there-any-pre-built-method-for-finding-all-permutations-of-a-given-string-in-j
function permutation(start, string) {
  if (string.length === 1) {
    return [start + string];
  } else {
    const returnResult = [];
    for (let i = 0; i < string.length; i++) {
      let result = permutation(
        string[i],
        string.substr(0, i) + string.substr(i + 1)
      );
      for (let j = 0; j < result.length; j++) {
        returnResult.push(start + result[j]);
      }
    }
    // remove dups
    let returnResultFilter = [...new Set(returnResult)];
    return returnResultFilter;
  }
}

function injectInterface() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
<style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900');
		body {
      font-family: 'Playfair Display', serif;
      background-color: #3d3d3d;
      color: #fff;
      text-align: left;
		}
		.wrap {
      background-color: #3d3d3d;
      width: 80%;
			padding: 30px;
			margin: 0 auto;
			text-align: left;
		}
    
    #returnResult {
      font-size: 18px;
      font-weight: normal;
      opacity: 0.9;
    }

    input {
      border-radius: 4px;
      border: 1px solid gray;
      font: inherit;
    }
    p {
      margin-top: 10px;
    }

    span {
      border-bottom: 1px dashed #fff;
    }

    #header {
      margin-top: 40px;
      opacity: 0.7;
    }
    h3{
      margin-bottom: 16px;
    }

	</style>
  <div class="wrap">
  <h3>Enter a single word to see every possible anagram</h3>
  <input placeholder=" Enter anagram text" name="name"/> <span id="values"></span>

  <p id="header">See all the possible anagrams below</p>
  <p id="returnResult"></p>
	</div>
`
  );
}
