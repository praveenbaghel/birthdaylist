import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
	// create a state variable here
    const [birth, setBirth] = useState(data);

	// this should clear all records
	function clearAllRecords() {
        setBirth([]);
    }
	return (
		<main>
			<section className="container">
				{/* change this to state variable data */}
				<h3>{birth.length} birthdays today</h3>
				<List people={birth} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default App
