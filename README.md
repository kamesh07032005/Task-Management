# Task Management App

A modern, responsive task management application built with React that helps users organize and track their daily tasks efficiently.

## Features

- Create, edit, and delete tasks
- Set task priorities (High, Medium, Low)
- Set due dates for tasks
- Mark tasks as completed
- Filter tasks by status and priority
- Sort tasks by due date and priority
- Dark/Light mode toggle
- Responsive design
- Smooth animations
- Persistent storage using localStorage

## Live Demo

Visit the live application: [Task Management App](https://yourusername.github.io/task-management-app)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Deployment

To deploy the application to GitHub Pages:

1. Update the `package.json` file:

   ```json
   {
     "homepage": "https://yourusername.github.io/task-management-app"
     // ... other configurations
   }
   ```

2. Install GitHub Pages package:

   ```bash
   npm install --save gh-pages
   ```

3. Add deployment scripts to `package.json`:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
       // ... other scripts
     }
   }
   ```

4. Deploy the application:
   ```bash
   npm run deploy
   ```

The application will be deployed to the GitHub Pages URL specified in your homepage.

## Usage

1. **Adding a Task**

   - Enter task title in the input field
   - Select priority level
   - Set due date
   - Click "Add Task" button

2. **Managing Tasks**

   - Click the checkbox to mark a task as complete
   - Use the edit button to modify task details
   - Use the delete button to remove tasks

3. **Filtering and Sorting**

   - Use the filter dropdown to show All/Active/Completed tasks
   - Use the sort dropdown to arrange tasks by due date or priority

4. **Theme Toggle**
   - Click the theme toggle switch in the header to switch between light and dark modes

## Technologies Used

- React
- CSS3
- Local Storage API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
