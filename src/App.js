import './App.css';

function App() {

  let names = []
  for (let i = 0; i<10000; i++) {
    names.push("리액트 무료 강의!! 지금 신청하면 1+1")
    names.push("장소 : 태평양")
  }
  const list = names.map(name =>
      <h1 style={{textShadow: "-3px 0px white, 0px 3px white, 3px 0px white, 0px -3px white"}}>
        {name}
      </h1>)
  return (
      <div className="App" style={{backgroundImage: 'url(/assets/rainbow.gif)'}}>
        {list}
      </div>
  );
}

export default App;