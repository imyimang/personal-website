import "./styles.css";
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "./Title";

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
    <Title/>
  <div className="mt-8"> {/* 調整不重疊的間距 */}
    <ExperienceBox />
  </div>
  <div className="mt-8"> {/* 調整不重疊的間距 */}
    <SocialBox />
  </div>
    </>
  );
}

export default App;
