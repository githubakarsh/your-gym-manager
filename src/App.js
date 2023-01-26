import { AppRouter } from "./router/AppRouter";
import { TopNavigation } from './components/navigation/top/TopNavigation';

function App() {
  return (
    <div>
      <header><TopNavigation /></header>
      <main>
        <AppRouter />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
