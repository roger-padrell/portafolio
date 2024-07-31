var dt;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => dt = json);