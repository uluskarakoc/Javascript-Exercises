const container = document.getElementById("container");
const corsProxy = "https://corsproxy.io/?";
const apiUrl = "https://openwhyd.org/hot?format=json";

const fetchData = async () => {
  try {
    const response = await fetch(corsProxy + apiUrl);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const tracks = data.tracks;
    console.log(tracks);
    return tracks
  } catch (error) {
    console.error("warning", error);
  }
};

const trackList = document.createElement("ul");
container.appendChild(trackList);

const renderTracks = (tracks) => {
  tracks.forEach((track) => {
    const trackListElement = `
    <li>
    <a href='https://youtube.com/watch?v=${track.eId.slice(4)}' target="_blank">
    ${track.name}</a>
    </li>
    `;
    trackList.insertAdjacentHTML("beforeend",trackListElement)
  });
};

console.log(fetchData());
fetchData()
.then((tracks)=> renderTracks(tracks))
.catch((error)=> console.log(error))
.finally(()=>console.log("Done"))
