

function App() {

  const submitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch (`http://localhost:3001/?tracking=${data.tracking}`)
      .then(response => response.json())
      .then (console.log)
      .catch (console.error);

    console.log('O Burgues Opressor quer ver onde esta a encomenda',data);
  };

  return (
    <div className="container">
      <h1>Rastreio do Burguês Opressor</h1>
      <form onSubmit = {submitHandler}  >
        <div className="form-group">
          <input type="text" name= "tracking" className="form-control"/>
          </div> 
          <button type="submit"  className= "btn btn-primary">Rastrear</button> 
      </form> 
    </div>
  );
}

export default App;
