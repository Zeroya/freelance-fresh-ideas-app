import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ideas from './components/Ideas';
import SlideList from './components/SlideList';
import Completed from './components/Completed';
import Achievments from './components/Achievments';

function App() {

  const [changeItem, setChangeItem] = useState(7);
  const [ideas, setIdeas] = useState([]);
  const [slideIdeas, setslideIdeas] = useState([]);
  const [completedIdeas, setcompletedIdeas] = useState([]);
  const [achievments, setAchievments] = useState([]);

  return (
    <div className="App">
      <Ideas ideas={ideas} setIdeas={setIdeas} slideIdeas={slideIdeas} setslideIdeas={setslideIdeas} changeItem={changeItem} setChangeItem={setChangeItem} />
      <SlideList slideIdeas={slideIdeas} setslideIdeas={setslideIdeas} completedIdeas={completedIdeas} setcompletedIdeas={setcompletedIdeas} achievments={achievments} setAchievments={setAchievments} />
      <Achievments achievments={achievments} />
      <Completed completedIdeas={completedIdeas} setcompletedIdeas={setcompletedIdeas}/>
    </div>
  );
}

export default App;
