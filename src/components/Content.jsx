import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
function Content() {
  return (
    <div className="content-container">
      <div className="flex-wrapper w-screen flex flex-row justify-center">
        <FirstColumn />
        <SecondColumn />
      </div>
    </div>
  );
}

export default Content;
