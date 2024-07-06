const apiEndpoint = "http://localhost:8080/randomSong";
const display = document.querySelector('#display-data');

const getData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    console.log(data);
    return data;
}

const displayLyrics = async () => {
    const payload = await getData();
    console.log(payload);

    let dataDisplay = payload.map((object) => {
        console.log(object);
        const { name, lyrics } = object;

        return `
        <div class="container">
            <p>Name: </p><p>${name}</p>
            <p>Lyrics:</p><p>${lyrics}</p> 
        </div>`
    });

    display.innerHTML = dataDisplay;
}

displayLyrics();
