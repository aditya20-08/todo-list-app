# 📝 TaskMaster - Todo List App

A modern, feature-rich todo list application with **local storage functionality**. Stay organized and productive with an elegant interface and powerful task management features.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Quickly add new tasks with intuitive input
- 🏷️ **Priority Levels** - Set tasks as High, Medium, or Low priority
- 📂 **Categories** - Organize tasks by Work, Personal, Shopping, Health, or General
- ✔️ **Mark Complete** - Check off completed tasks
- ✏️ **Edit Tasks** - Modify task text anytime
- 🗑️ **Delete Tasks** - Remove individual tasks
- 💾 **Local Storage** - All data automatically saved to your browser

### Advanced Features
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Sort Options** - Sort by Date or Priority
- 📈 **Statistics Dashboard** - Track total, completed, and pending tasks
- 📉 **Completion Rate** - Visual progress indicator
- 🎯 **Bulk Actions** - Clear all completed tasks or reset everything
- 💾 **Export Data** - Download your tasks as JSON file
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## 🎨 Interface Highlights

- **Modern UI** - Beautiful gradient design with smooth animations
- **Real-time Updates** - Instant feedback on all actions
- **Visual Indicators** - Color-coded priorities and category badges
- **Timestamps** - See when each task was created
- **Empty States** - Helpful messages when no tasks exist

## 📦 Installation

### Method 1: Direct Download
1. Clone the repository:
```bash
git clone https://github.com/aditya20-08/todo-list-app.git
cd todo-list-app
```

2. Open `index.html` in your web browser:
   - Double-click `index.html` file, OR
   - Right-click → Open with → Browser, OR
   - Drag and drop into your browser

### Method 2: Live Server (Recommended)
If you have VS Code:
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## 🚀 Usage

### Adding a Task
1. Type your task in the input field
2. Select priority level (High/Medium/Low)
3. Choose a category (Work/Personal/Shopping/Health/General)
4. Click "Add Task" or press Enter

### Managing Tasks
- **Complete Task**: Click the checkbox next to the task
- **Edit Task**: Click the edit button (pencil icon)
- **Delete Task**: Click the delete button (trash icon)

### Filtering & Sorting
- **Filter**: Use All/Active/Completed buttons to view specific tasks
- **Sort**: Click "Date" or "Priority" to change sort order

### Bulk Actions
- **Clear Completed**: Remove all completed tasks at once
- **Export Data**: Download tasks as JSON file for backup
- **Clear All**: Delete all tasks (use with caution!)

## 💾 Local Storage

All your tasks are automatically saved to your browser's local storage:
- **Storage Key**: `todoList_tasks`
- **Capacity**: Usually 5-10MB per website
- **Persistence**: Data remains even after closing the browser
- **Clearing**: Clear browser cache/cookies will reset the app

### Export & Backup
Download your tasks as a JSON file:
1. Click "Export" button
2. File will be named `todo-list-YYYY-MM-DD.json`
3. Save in your desired location

## 🎯 Priority System

| Priority | Color | Use Case |
|----------|-------|----------|
| 🔴 High | Red | Urgent, time-sensitive tasks |
| 🟡 Medium | Yellow | Normal, regular tasks |
| 🟢 Low | Green | Can be done anytime |

## 📁 Categories

- **Work**: Professional and work-related tasks
- **Personal**: Personal errands and goals
- **Shopping**: Shopping lists and items to buy
- **Health**: Health, fitness, and wellness tasks
- **General**: Miscellaneous tasks

## 🛠️ Project Structure

```
todo-list-app/
├── index.html       # HTML structure
├── styles.css       # Styling and layout
├── app.js           # JavaScript functionality
├── README.md        # Documentation
└── .gitignore       # Git ignore file
```

### File Details

**index.html** (4.8 KB)
- Semantic HTML5 structure
- FontAwesome icons integration
- Responsive meta tags

**styles.css** (9.2 KB)
- CSS Grid and Flexbox layouts
- Gradient backgrounds
- Animations and transitions
- Mobile-first responsive design
- Dark mode ready variables

**app.js** (10.3 KB)
- TodoApp class with methods
- Local storage management
- Event listeners
- Filtering and sorting logic
- Data export functionality

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Secondary */
    --success-color: #10b981;      /* Success/Low priority */
    --danger-color: #ef4444;       /* Danger/High priority */
    --warning-color: #f59e0b;      /* Warning/Medium priority */
}
```

### Change Font
Replace the font-family in `styles.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Add More Categories
Edit the category select in `index.html` and update colors in `styles.css`.

## 🔐 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Statistics Dashboard

The app automatically tracks:
- **Total Tasks**: All tasks in the system
- **Completed**: Tasks marked as done
- **Pending**: Tasks still to be done
- **Completion Rate**: Percentage of completed tasks

## ⚠️ Important Notes

### Data Safety
- Tasks are stored **locally in your browser**
- Data is **NOT** synced to any server
- Clearing browser data will delete your tasks
- **Always export important tasks** as backup

### Local Storage Limits
- Each website gets 5-10MB of storage (browser-dependent)
- Approximately can store 10,000+ typical tasks
- Exceeded? Consider exporting and archiving old tasks

### Performance
- App remains responsive with 500+ tasks
- Recommend archiving/deleting old tasks periodically
- No backend server needed

## 🐛 Troubleshooting

### Tasks Not Saving?
1. Check if localStorage is enabled in your browser
2. Ensure you have sufficient storage space
3. Try clearing browser cache and reloading
4. Check browser console for errors (F12)

### App Not Loading?
1. Verify all three files (index.html, styles.css, app.js) are in the same folder
2. Try opening in a different browser
3. Check browser console for JavaScript errors
4. Ensure JavaScript is enabled

### Lost Tasks?
1. Check if browser cache was cleared
2. Try exporting data or checking localStorage in DevTools
3. Unfortunately, if cleared, data cannot be recovered
4. Always maintain regular backups!

## 🚀 Future Enhancements

Potential features for future versions:
- ☁️ Cloud sync across devices
- 🔔 Notifications and reminders
- 📅 Calendar integration
- 🔄 Recurring tasks
- 🏷️ Custom tags
- 🌙 Dark mode toggle
- 🌐 Multiple languages
- 📱 Native mobile apps
- 🔐 User accounts and authentication

## 💡 Tips & Tricks

1. **Keyboard Shortcut**: Press Enter to add task instead of clicking button
2. **Quick Filter**: Click filter buttons to switch between views instantly
3. **Drag & Drop**: (Future feature) Reorder tasks by dragging
4. **Batch Operations**: Export data regularly for backups
5. **Clear Cache Safely**: Export before clearing browser data
6. **Mobile Use**: Install as PWA on mobile for app-like experience

## 🤝 Contributing

Want to improve this app? Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Aditya** - Created this TaskMaster Todo List App

## 🙏 Credits

- **Icons**: [Font Awesome](https://fontawesome.com/) - Free icon library
- **Inspiration**: Modern productivity applications
- **Design**: Modern UI/UX principles

## 📞 Support & Feedback

If you encounter any issues or have suggestions:
1. Check the troubleshooting section above
2. Review browser console (F12) for error messages
3. Try clearing cache and reloading
4. Check GitHub Issues page

## 🎯 Roadmap

### Version 1.1 (Next)
- [ ] Dark mode theme
- [ ] Custom categories
- [ ] Task notes/descriptions

### Version 1.2
- [ ] Due dates functionality
- [ ] Task reminders
- [ ] Recurring tasks

### Version 2.0
- [ ] Cloud synchronization
- [ ] Multi-device support
- [ ] Collaborative lists

---

**Made with ❤️ for productivity lovers**

⭐ If you find this helpful, please star the repository!

**Happy Task Managing! 🚀**
