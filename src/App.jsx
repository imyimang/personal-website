import "./styles.css";
import facebookIcon from "./icon/fb.svg";
import instagramIcon from "./icon/ig.svg";
import githubIcon from "./icon/github.svg";

/*
function Test(){
  const [clicks, useClicks] = useState(0);
  const Handclick = () => {
    useClicks(clicks+1)
    console.log(clicks);
  }
  return(<>
  <button onClick = {Handclick}>點擊次數 : {clicks}</button>
  </>);
*/

function App() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <div className="title">This is yimang's website</div>
      <div className="container">

        <div className="box">
          <a
            href="https://www.facebook.com/profile.php?id=100056011625720"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>

          <a
            href="https://www.instagram.com/yimang__/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>

          <a
            href="https://github.com/imyimang"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={githubIcon} alt="Github Icon" />
          </a>

        </div>
      </div>
    </>
  );
}

export default App;
