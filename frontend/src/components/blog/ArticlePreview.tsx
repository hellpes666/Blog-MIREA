import { Link } from "react-router-dom";

export const ArticlePreview = () => {
    return (
        <Link
            to={`/article/:id`}
            className="border-neutral-content rounded-xl border-1 lg:max-w-[24%]"
        >
            <header className="bg-neutral text-neutral-content text-md rounded-t-xl px-5 py-5 font-bold sm:text-lg lg:text-2xl">
                You Don't know JS
            </header>
            <hr />
            <main className="bg-neutral text-neutral-content text-md rounded-b-xl px-5 py-5 font-medium text-wrap">
                The worldwide best selling You Don't Know JS book series is back
                for a 2nd edition: You Don't Know JS Yet. All 6 books are brand
                new, rewritten to cover all sides of JS for 2020 and beyond.
            </main>
        </Link>
    );
};
