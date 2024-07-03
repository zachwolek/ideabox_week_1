import { useState, useEffect } from 'react';
import './App.css';
import Ideas from './Ideas';
import Form from './Form';

function App() {
//   const dummyIdeas = [
//     { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
//     { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
//     { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
// ]

useEffect(() => {
  fetch(`http://localhost:3001/api/v1/ideas`)
  .then(response => response.json())
  .then(data => setIdeas(data))
  .catch(error => console.log("ERROR!"))
}, [])

  const [ideas, setIdeas] = useState([])

  function addIdea (newIdea){
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/> 
      {ideas.length ? <p>We have {ideas.length} ideas!</p> : <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;