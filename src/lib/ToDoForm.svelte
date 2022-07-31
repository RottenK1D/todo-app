<script>
	import { addTodo } from '../stores/todoStore';
	let todo;
	const handleSubmit = () => {
		addTodo(todo);
		todo = '';
	};
</script>

<form class="my-10" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col ">
		<label for="todo" />
		<input
			bind:value={todo}
			type="text"
			name="todo"
			placeholder="Try me out!"
			class="appearance-none shadow-sm border border-gray-100 focus:outline-none focus:border-gray-400 rounded-sm p-2 w-[300px] mb-1"
		/>
		<button
			class="shadow-sm border rounded-sm bg-green-300 hover:bg-green-400 p-2 w-[300px] text-gray-600 font-semibold"
			>add</button
		>
	</div>
</form>
