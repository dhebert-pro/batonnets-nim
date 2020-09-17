import React from 'react';
import GenerationList from 'src/GenerationList';

const App = () => (
	<div className="App">
		<header>
			<h1>Le jeu des bâtonnets</h1>
		</header>
		<section>
			<form>
            Nombre de générations :
				<input type="number" name="nb-generations" />
				<input type="submit" value="Simuler" />
			</form>
			<GenerationList />
		</section>
	</div>
);

export default App;
