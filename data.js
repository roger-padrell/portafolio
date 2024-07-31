async function getData(){
    const response = await fetch("https://roger-padrell.github.io/portafolio/data.json");
    return await response.json();
}