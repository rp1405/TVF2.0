import "./loader.css";
export default function Loader() {
  return (
    <div className="loader">
      <img className="loadingImage" src="../../assets/truckGif.gif"></img>
      <div className="loader-line"></div>
      <div>
        <h2>The site takes some time to load. Please be patient....</h2>
      </div>
    </div>
  );
}
