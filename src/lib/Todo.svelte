<script>
	import { deleteTodo, toggleTodoCompleted } from '../stores/todoStore.js';
	export let todo;
</script>

<li class="w-full justify-center flex">
	<div class="w-[300px] flex place-content-between items-center">
		<div class="flex items-center ">
			<input
				class="checkbox checkbox-secondary mr-4"
				name="complete"
				type="checkbox"
				checked={todo.completed}
				on:change={() => toggleTodoCompleted(todo.id)}
			/>
			<span>{todo.text}</span>
		</div>

		<button
			on:click={() => deleteTodo(todo.id)}
			class="shadow-sm border rounded-sm bg-rose-300 hover:bg-rose-400 p-2 text-gray-600 font-semibold"
			>remove</button
		>
	</div>
</li>
