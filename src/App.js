
function App() {
  return (
    <div className="App">
      <h1 className="bg-gray-100 hover:bg-gray-50">
        I have classes on start. bg-* classes added after hot reload won't get added to DOM.
      </h1>

      <p>After start copy markup from README here, styles won't get applied.</p>
    </div>
  );
}

export default App;
