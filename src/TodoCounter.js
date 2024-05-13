import './TodoCounter.css'

function TodoCounter( { total, completed } ) {
    return (
      <h1 className='TodoCounter'>
        Haz completa <span> {completed} </span> 
        de <span> {total} </span> TODOS
      </h1>
  
    );
  }

export {TodoCounter};  