# Contributing to TaskMaster Todo List App

Thank you for considering contributing to TaskMaster! We welcome contributions from everyone. This guide will help you get started.

## Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Git and GitHub account
- A text editor (VS Code recommended)
- A modern web browser

### Setting Up Your Development Environment

1. **Fork the repository**
   - Click the "Fork" button on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/todo-list-app.git
   cd todo-list-app
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Edit the relevant files
   - Test thoroughly in your browser

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Brief description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch and describe your changes

## Types of Contributions

### 🐛 Bug Reports
Found a bug? Please report it!

1. Check existing issues first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### 💡 Feature Requests
Have an idea? We'd love to hear it!

1. Check existing issues first
2. Create a new issue with:
   - Clear title and description
   - Why this feature would be useful
   - How it should work
   - Any additional context

### 📝 Documentation
Help improve our documentation!

1. Fix typos and unclear explanations
2. Add examples or tutorials
3. Improve code comments
4. Update outdated information

### 🎨 Code Improvements
- Optimize existing code
- Refactor for better maintainability
- Improve performance
- Add error handling
- Add comments to complex logic

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Proper indentation (2 spaces)
- Descriptive IDs and classes
- Accessible form labels

### CSS
- Use CSS variables for colors
- Mobile-first approach
- Meaningful class names
- Proper documentation for complex rules
- Follow existing naming conventions

### JavaScript
- Use ES6+ features
- Clear variable and function names
- Add comments for complex logic
- Follow DRY principle
- Use meaningful commit messages

### Commit Messages
```
type: Brief description (50 chars max)

Optional longer description explaining the changes
- Point 1
- Point 2
- Point 3

Fixes #123 (if applicable)
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting changes
- `refactor:` Code restructuring
- `perf:` Performance improvements
- `chore:` Maintenance tasks
- `test:` Adding or updating tests

## Testing Your Changes

Before submitting a PR:

1. **Functionality Testing**
   - Add a new task
   - Edit a task
   - Delete a task
   - Complete a task
   - Filter and sort tasks
   - Export data
   - Check local storage persistence

2. **Browser Testing**
   - Chrome/Edge
   - Firefox
   - Safari
   - Mobile browsers

3. **Responsive Design**
   - Desktop (1920px, 1366px)
   - Tablet (768px, 1024px)
   - Mobile (375px, 414px)

4. **Edge Cases**
   - Empty input
   - Very long task text
   - Many tasks (100+)
   - Clearing data
   - Browser without localStorage support

## Pull Request Process

1. **Before submitting:**
   - Update README if needed
   - Add comments to complex code
   - Test thoroughly
   - Ensure no console errors

2. **PR Description should include:**
   - What problem does this solve?
   - How does it work?
   - Related issues (#123)
   - Screenshots if UI changes
   - Testing performed

3. **Expect feedback:**
   - Be open to suggestions
   - Respond to questions
   - Make requested changes
   - Re-test after modifications

4. **After approval:**
   - Your PR will be merged
   - You'll be credited
   - Your contribution helps everyone!

## Project Structure

```
todo-list-app/
├── index.html          # UI structure
├── styles.css          # Styling
├── app.js              # Logic
├── README.md           # Documentation
├── CONTRIBUTING.md     # This file
├── package.json        # Project metadata
└── .gitignore          # Git ignore rules
```

## Common Issues & Solutions

### Changes not reflecting in browser
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Close and reopen browser

### Local storage issues
- Check browser console (F12)
- Ensure JavaScript is enabled
- Try incognito/private mode
- Check storage quota

### Git conflicts
```bash
git fetch origin
git rebase origin/main
# Resolve conflicts in your editor
git add .
git rebase --continue
```

## Feature Development Guide

### Adding a New Feature

1. **Plan it out**
   - Create an issue first
   - Discuss with maintainers
   - Get approval

2. **Create a feature branch**
   ```bash
   git checkout -b feature/awesome-feature
   ```

3. **Implement the feature**
   - Write clean, documented code
   - Follow coding standards
   - Test thoroughly

4. **Update documentation**
   - README.md
   - Code comments
   - Inline documentation

5. **Submit PR with clear description**

### Example: Adding Dark Mode

1. Update CSS with dark theme variables
2. Add toggle button to HTML
3. Add JavaScript to handle theme switching
4. Store preference in localStorage
5. Update README with instructions
6. Test on multiple browsers

## Recognized Contributors

Contributors will be recognized in:
- README.md contributors section
- GitHub's contributor graph
- Release notes

## Questions?

- Open an issue for discussion
- Check existing issues for answers
- Look at code comments and documentation

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Git Guide](https://guides.github.com/)

---

**Thank you for contributing to TaskMaster! 🎉**

Your efforts help make this project better for everyone.

Happy coding! 🚀
