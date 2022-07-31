<script>
	import ToDoForm from '../lib/ToDoForm.svelte';
	import { todos } from '../stores/todoStore.js';
	import Todo from '../lib/Todo.svelte';
</script>

<main class="font-mono flex flex-col  w-full items-center">
	<h1 class="text-2xl font-bold  text-gray-900 my-6">Todo App</h1>
	<ToDoForm />
	{#each $todos as todo}
		<Todo {todo} index={todo.id} />
	{/each}
</main>
