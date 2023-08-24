import "./App.css";
import AllRoutes from "./routes/AllRoutes";
 
import SideNavigationbar from "./components/SideNavigationbar";
 

function App() {
  return (
    <>
    <div className="flex flex-col md:flex-row">
      {/* Left SideNavigation Bar */}
      <SideNavigationbar />

      <main className="w-full md:w-4/5 p-4">
        {/* All the Routes are here */}
        <AllRoutes />
      </main>
    </div>
    </>
  );
}

export default App;
