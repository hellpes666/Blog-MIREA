import { Routes, Route, Link } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { ArticleCreatorPage, HomePage, SettingsPage } from "./pages";
import { FilePen, Settings } from "lucide-react";

function App() {
    const { theme } = useThemeStore();

    return (
        <div
            className="flex h-full w-full flex-col gap-12 overflow-hidden px-6 py-6 sm:px-12 lg:px-24"
            data-theme={theme}
        >
            <header className="flex items-center justify-between">
                <Link
                    className="ring-primary relative text-2xl font-black"
                    to="/"
                >
                    Blog
                </Link>
                <div className="flex items-center gap-2">
                    <div className="rounded-2xl">
                        <Link
                            to="/article-creator"
                            className={`btn btn-sm gap-2 transition-colors`}
                        >
                            <FilePen className="h-4 w-4" />
                            <span className="hidden sm:inline">
                                Create an Article
                            </span>
                        </Link>
                    </div>
                    <div className="rounded-2xl">
                        <Link
                            to={"/settings"}
                            className={`btn btn-sm gap-2 transition-colors`}
                        >
                            <Settings className="h-4 w-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route
                        path="/article-creator"
                        element={<ArticleCreatorPage />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
