/**
 * Generates a random choice link from a list of pages and displays it in the HTML.
 */
function melsrandomwebpage() {
    // Define an array of strings — each is a link to one of your pages or an external site
    const patchCombos = [
        "LIFEWAVE OPTIONS", // web link to my LifeWave table
        "MY MEME", // weblink to  meme project
        "WHAT I'VE BEEN DOING", // weblink to my UAT boards page
        "MY GAME", // weblink to my game
        "PALINDROME", // weblink to my palindrome checker
        "https://lifewave.com/2971014", // External Lifewave site
        "http://frequencypatchesinfo.com", // External info site
        "CONTACT ME FOR MORE INFO ABOUT LIFEWAVE OR JUST TO SAY HELLO https://www.instagram.com/mylissaht/" // Text message with a link
    ];

    // Generate a random index between 0 and the last index in the array
    const randomIndex = Math.floor(Math.random() * patchCombos.length);

    // Store the randomly selected item from the array
    const selectedCombo = patchCombos[randomIndex];

    // Display the selected link/message inside the <div> with id="webpageresult"
    document.getElementById("webpageresult").innerHTML = `<strong>visit:</strong> ${selectedCombo}`;
}
