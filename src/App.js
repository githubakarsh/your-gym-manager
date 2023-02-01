import { AppRouter } from "./router/AppRouter";
import { TopNavigation } from './components/navigation/top/TopNavigation';

function App() {
  return (
    <div>
      <header><TopNavigation /></header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
