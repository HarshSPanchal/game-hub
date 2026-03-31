# Game Hub 🎮
A modern, responsive video game discovery web application built with **React**, **TypeScript**, and **Chakra UI v3**. This project is a functional clone of RAWG, allowing users to browse, search, and filter games from a massive database.

## 🚀 Features
* **Dark & Light Mode**: Seamless theme switching using Chakra UI's color mode system.
* **Dynamic Filtering**: 
    * Filter games by **Genre** via the sidebar.
    * Filter games by **Platform** (PC, Xbox, PlayStation, etc.) using a custom dropdown menu.
* **Advanced Sorting**: Order games by relevance, date added, name, release date, popularity, or average rating.
* **Real-time Search**: Instant search functionality to find specific titles across the entire database.
* **Responsive Design**: A flexible grid layout that adapts from mobile to desktop.
* **Performance Optimized**: 
    * Custom image cropping utility to fetch smaller images from the API for faster load times.
    * **Loading Skeletons** to provide a smooth user experience while data is fetching.
    * **Infinite Scroll/Pagination ready** architecture.

## 🛠️ Tech Stack
| Tool | Purpose |
| :--- | :--- |
| **React 18** | UI Library |
| **TypeScript** | Type Safety |
| **Chakra UI v3** | Component Styling & Theming |
| **Axios** | API Fetching |
| **React Icons** | Iconography |
| **RAWG API** | Video Game Database |

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/game-hub.git
    cd game-hub
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up your API Key**:
    * Go to [RAWG.io](https://rawg.io/apidocs) and generate an API key.
    * Create a `.env` file in the root directory (or update your `api-client.ts`):

    ```env
    VITE_RAWG_API_KEY=your_api_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

## 📂 Project Structure
* `src/components`: Reusable UI components (NavBar, GameCard, GenreList, etc.).
* `src/hooks`: Custom React hooks for fetching data (`useGames`, `useGenres`, `usePlatforms`).
* `src/services`: API client configuration and utility functions (image cropping).
* `src/components/ui`: Chakra UI v3 snippets and theme providers.

## 📖 Lessons Learned
* Implementing **Multipart Components** in Chakra UI v3 (using `.Root`, `.Body`, and `.Item` notation).
* Managing complex state across multiple filters using a **GameQuery** object.
* Handling asynchronous data fetching and error states with custom hooks and Axios.
* Optimizing network requests by implementing an **AbortController** for cleanup.

> [!NOTE]
> This project was built as part of a deep dive into modern React development patterns and the latest version of the Chakra UI design system.
