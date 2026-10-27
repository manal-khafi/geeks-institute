const form = document.getElementById("libform");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");
const storySpan = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

let currentValues = null;
let currentStoryIndex = 0;

const stories = [
    (n, a, p, v, pl) => `One day, ${p} decided to go to ${pl} with a very ${a} ${n}. They started to ${v} all night long!`,
    (n, a, p, v, pl) => `In ${pl}, ${p} found a ${a} ${n} trying to ${v} like nobody was watching.`,
    (n, a, p, v, pl) => `The ${a} ${n} in ${pl} made ${p} want to ${v} immediately!`
];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const noun = nounInput.value.trim();
    const adjective = adjectiveInput.value.trim();
    const person = personInput.value.trim();
    const verb = verbInput.value.trim();
    const place = placeInput.value.trim();

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        return;
    }

    currentValues = { noun, adjective, person, verb, place };
    currentStoryIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[currentStoryIndex](noun, adjective, person, verb, place);
});

shuffleButton.addEventListener("click", function() {
    if (!currentValues) return;
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * stories.length);
    } while (newIndex === currentStoryIndex && stories.length > 1);
    
    currentStoryIndex = newIndex;
    storySpan.textContent = stories[currentStoryIndex](
        currentValues.noun,
        currentValues.adjective,
        currentValues.person,
        currentValues.verb,
        currentValues.place
    );
});