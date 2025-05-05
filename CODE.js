/**
 * Generates a random LifeWave patch protocol and displays it on the page.
 */
function generatePatchProtocol() {
    const patchCombos = [
      "X39 + Aeon",
      "X39 + Energy Enhancer",
      "X49 + X39",
      "Aeon + Glutathione",
      "X39 + IceWave",
      "Alavida + Aeon",
      "X39 + Carnosine",
      "X49 + SP6 Complete",
      "X39 + Silent Nights",
      "X39 + Nirvana",
      "Contact Mel to personalize your package https://lifewave.com/2971014"
    ];
  
    const randomIndex = Math.floor(Math.random() * patchCombos.length);
    const selectedCombo = patchCombos[randomIndex];
  
    document.getElementById("patchResult").innerHTML = `<strong>💡 Suggested Protocol:</strong> ${selectedCombo}`;
  }
  