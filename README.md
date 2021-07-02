# Bug in JIT mode in CRA: new classes do not work after hot reload

Copy this markup to App.js after npm start. 
      <div className="bg-gray-50">50</div>
      <div className="bg-gray-100">100</div>
      <div className="bg-gray-200">200</div>
      <div className="bg-gray-300">300</div>
      <div className="bg-gray-400">400</div>
      <div className="bg-gray-500">500</div>

      <hr/>

      <div className="hover:bg-gray-50">hover 50</div>
      <div className="hover:bg-gray-100">hover 100</div>
      <div className="hover:bg-gray-200">hover 200</div>
      <div className="hover:bg-gray-300">hover 300</div>
      <div className="hover:bg-gray-400">hover 400</div>
      <div className="hover:bg-gray-500">hover 500</div>
