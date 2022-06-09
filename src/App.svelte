<script>
	import Navbar from './components/Navbar.svelte';
	import Demo from './components/Demo.svelte';
	import { Router, Route } from "svelte-navigator";
</script>

<main>
	<Router>
	<Navbar />

	<Route path="about" component={Demo} />
	</Router>
</main>

<style>

</style>