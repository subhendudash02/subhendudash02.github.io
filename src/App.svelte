<script>
	import Navbar from './components/Navbar.svelte';
	import Demo from './components/Demo.svelte';
	import Work from './components/Work.svelte';
	import { Router, Route } from "svelte-navigator";
</script>

<main>
	<Router>
	<Navbar />

	<Route path="about" component={Demo} />
	<Route path="work" component={Work} />
	</Router>
</main>

<style>

</style>