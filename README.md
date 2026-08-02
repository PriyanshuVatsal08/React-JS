# React-JS
All about Reactjs theory and project

# How to make Reactjs project
1.npm create vite@latest my-react-app
2.cd my-react-app
3.npm install
4.npm run dev


# How to install Tailwind CSS
1.npm install tailwindcss @tailwindcss/vite
2.Open vite.config.js and replace it with:
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'
      import tailwindcss from '@tailwindcss/vite'

      export default defineConfig({
          plugins: [
          react(),
          tailwindcss(),
          ],
      })   

3.Open:src/index.css
    Delete everything and add:
    
    @import "tailwindcss";



# Icon website Lucide Icons

1. npm install lucide-react
   
2.  import { Search } from "lucide-react";

    function App() {
        return <Search size={24} />;
    }