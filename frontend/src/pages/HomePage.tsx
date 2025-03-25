import { Link } from "react-router-dom";
import { ArticlePreview } from "../components/blog/ArticlePreview";

export const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col gap-10">
                <h1 className="text-primary text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                    Articles
                </h1>
                <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:flex-wrap lg:gap-0 lg:gap-y-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                        <ArticlePreview key={index} />
                    ))}
                </div>
            </div>
            <aside className="flex flex-col items-end gap-10 lg:min-w-[100px]">
                <h2 className="text-primary text-end text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
                    Add
                </h2>
                <div className="flex w-full gap-5 lg:w-fit lg:flex-col">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <Link
                            key={index}
                            to="https://t.me/hellpes1111111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent h-[100px] w-[24%] rounded-2xl text-transparent transition-transform duration-300 hover:scale-105 hover:rotate-6 lg:h-[100px] lg:w-[100px]"
                        >
                            <img
                                src="/add.jpg"
                                alt="add"
                                className="rounded-3xl p-2"
                            />
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
};
