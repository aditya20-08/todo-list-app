// Todo List App - JavaScript Logic
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.sortBy = 'date';
        this.storageKey = 'todoList_tasks';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Add Todo
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        // Sort buttons
        document.getElementById('sortByDate').addEventListener('click', () => {
            this.sortBy = 'date';
            this.render();
        });

        document.getElementById('sortByPriority').addEventListener('click', () => {
            this.sortBy = 'priority';
            this.render();
        });

        // Action buttons
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('exportData').addEventListener('click', () => this.exportData());
        document.getElementById('clearAll').addEventListener('click', () => this.clearAllTodos());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const priority = document.getElementById('prioritySelect').value;
        const category = document.getElementById('categorySelect').value;

        if (input.value.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: input.value.trim(),
            completed: false,
            priority: priority,
            category: category,
            createdAt: new Date().toISOString(),
            dueDate: null
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.render();

        // Clear input and reset to default priority
        input.value = '';
        document.getElementById('prioritySelect').value = 'medium';
        input.focus();
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.saveToStorage();
            this.render();
        }
    }

    toggleComplete(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt('Edit your task:', todo.text);
        if (newText !== null && newText.trim() !== '') {
            todo.text = newText.trim();
            this.saveToStorage();
            this.render();
        }
    }

    clearCompleted() {
        const count = this.todos.filter(t => t.completed).length;
        if (count === 0) {
            alert('No completed tasks to clear!');
            return;
        }

        if (confirm(`Clear ${count} completed task(s)?`)) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveToStorage();
            this.render();
        }
    }

    clearAllTodos() {
        if (this.todos.length === 0) {
            alert('No tasks to clear!');
            return;
        }

        if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone!')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
        }
    }

    exportData() {
        if (this.todos.length === 0) {
            alert('No tasks to export!');
            return;
        }

        const dataStr = JSON.stringify(this.todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `todo-list-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert('Tasks exported successfully!');
    }

    getFilteredTodos() {
        let filtered = this.todos;

        if (this.currentFilter === 'active') {
            filtered = filtered.filter(todo => !todo.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(todo => todo.completed);
        }

        return filtered;
    }

    getSortedTodos(todos) {
        const sorted = [...todos];

        if (this.sortBy === 'priority') {
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        } else {
            sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return sorted;
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
        document.getElementById('completionRate').textContent = completionRate + '%';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today at ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday at ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }
    }

    render() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.getFilteredTodos();
        const sortedTodos = this.getSortedTodos(filteredTodos);

        this.updateStats();

        if (sortedTodos.length === 0) {
            todoList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <p>${this.currentFilter === 'all' ? 'No tasks yet. Add one to get started!' : 'No ' + this.currentFilter + ' tasks.'}</p>
                </div>
            `;
            return;
        }

        todoList.innerHTML = sortedTodos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''} ${todo.priority}-priority">
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    ${todo.completed ? 'checked' : ''} 
                    onchange="app.toggleComplete(${todo.id})"
                >
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-meta">
                        <span class="priority-badge priority-${todo.priority}">
                            <i class="fas fa-flag"></i> ${todo.priority}
                        </span>
                        <span class="category-badge">${todo.category}</span>
                        <span class="todo-date">
                            <i class="fas fa-clock"></i> ${this.formatDate(todo.createdAt)}
                        </span>
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="action-btn edit-btn" onclick="app.editTodo(${todo.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="app.deleteTodo(${todo.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
            console.log('✅ Data saved to local storage');
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('Unable to save data. Your browser may have limited storage.');
        }
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                this.todos = JSON.parse(stored);
                console.log('✅ Data loaded from local storage:', this.todos.length, 'tasks');
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            this.todos = [];
        }
    }

    // Clear storage (for testing)
    clearStorage() {
        localStorage.removeItem(this.storageKey);
        console.log('🗑️ Local storage cleared');
    }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
    console.log('📝 Todo App Initialized Successfully!');
    console.log('💾 Local Storage Key:', app.storageKey);
    console.log('📊 Total Tasks:', app.todos.length);
});
