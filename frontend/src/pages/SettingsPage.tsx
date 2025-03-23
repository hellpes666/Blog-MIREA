import { User } from "lucide-react";
import { BLOG_LIST_ITEMS, THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import {
    BlogBoldText,
    BlogHorizontalDashedLine,
    BlogHorizontalLine,
    BlogItalicText,
    BlogLinkText,
    BlogList,
    BlogTitle,
} from "../components/ui-creator";

export const SettingsPage = () => {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className="container mx-auto h-screen max-w-5xl px-4">
            <div className="space-y-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">Theme</h2>
                    <p className="text-base-content/70 text-sm">
                        Choose a theme for your chat interface
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
                    {THEMES.map((t) => (
                        <button
                            key={t}
                            className={`group flex flex-col items-center gap-0.5 rounded-lg p-2 transition-colors ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"} `}
                            onClick={() => setTheme(t)}
                        >
                            <div
                                className="relative h-8 w-full overflow-hidden rounded-md"
                                data-theme={t}
                            >
                                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                                    <div className="bg-primary rounded" />
                                    <div className="bg-secondary rounded" />
                                    <div className="bg-accent rounded" />
                                    <div className="bg-neutral rounded" />
                                </div>
                            </div>
                            <span className="w-full truncate text-center text-[11px] font-medium">
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>
                <h3 className="mb-3 text-lg font-semibold">
                    Preview an Article
                </h3>
                <div className="border-base-300 bg-base-100 overflow-hidden rounded-xl border shadow-lg">
                    <div className="bg-base-200 p-4">
                        <div className="mx-auto max-w-lg">
                            <div className="bg-base-100 overflow-hidden rounded-xl shadow-sm">
                                {/* Article Header */}
                                <div className="border-base-300 bg-base-100 border-b px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full font-medium">
                                            <User />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">
                                                Hellpes
                                            </h3>
                                            <p className="text-base-content/70 text-xs">
                                                Online
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-base-100 max-h-[270px] min-h-[200px] space-y-4 overflow-y-auto p-4">
                                    <BlogTitle title="OWASP Top Ten" />
                                    <div className="">
                                        <BlogBoldText text="OWASP" />{" "}
                                        <BlogItalicText
                                            text="(Open Web Application Security
                                            Project)"
                                        />{" "}
                                        — открытый проект по безопасности
                                        веб-приложений, созданный и
                                        поддерживаемый некоммерческой
                                        организацией OWASP Foundation.
                                        <BlogHorizontalLine />
                                        Эксперты организации каждые 3–4 года
                                        обновляют{" "}
                                        <BlogBoldText text="OWASP Top Ten" /> —
                                        список критических уязвимостей
                                        веб-приложений. Он помогает
                                        разработчикам и специалистам по
                                        информационной безопасности создавать и
                                        поддерживать безопасные сайты и
                                        приложения.
                                        <br />
                                        <br />
                                        <BlogLinkText
                                            link="https://owasp.org/www-project-top-ten/"
                                            text="В последней редакции"
                                        />{" "}
                                        OWASP Top Ten названы следующие
                                        уязвимости:
                                        <BlogList listItems={BLOG_LIST_ITEMS} />
                                        <BlogHorizontalDashedLine />
                                        Познакомимся с каждым видом уязвимостей
                                        и разберёмся, как их можно устранить.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
