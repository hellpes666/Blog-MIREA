export const HomePage = () => {
    return (
        <div className="flex w-full gap-15">
            <div className="flex flex-1 flex-col gap-10">
                <h1 className="text-primary text-xl font-bold sm:text-2xl lg:text-4xl">
                    Articles
                </h1>
                <div className="flex flex-col items-start gap-5 md:flex-row">
                    <div>
                        <header className="bg-secondary text-secondary-content text-md rounded-t-xl px-5 py-5 font-bold sm:text-lg lg:text-2xl">
                            You Don't know JS
                        </header>
                        <hr />
                        <main className="bg-accent text-secondary-content text-md rounded-b-xl px-5 py-10 font-medium text-pretty">
                            The worldwide best selling You Don't Know JS book
                            series is back for a 2nd edition: You Don't Know JS
                            Yet. All 6 books are brand new, rewritten to cover
                            all sides of JS for 2020 and beyond. You'll still
                            get in-depth coverage of the core language, applied
                            in useful code organization patterns for your
                            programs. And of course, through Kyle's unique
                            perspective and conversational tone, explore
                            passionate, reasoned debate of the most common
                            questions developers face. Scope & Closures, the
                            second book in the new edition series, dives deep
                            into how and why to organize variables into
                            different buckets of scope, limiting scope
                            over-exposure and improving code maintainability. On
                            top of lexical scope, closure empowers functions
                            with memory, preserving variables across calls.
                            Modules leverage scope and closures to encapsulate
                            data and behavior. In Scope & Closures, you'll dig
                            into: Nesting lexical scopes with functions and
                            blocks, to limit scope exposure of variables
                            Functions remembering variables through closure
                            Modules, one of the most important code organization
                            patterns in programming
                        </main>
                    </div>
                    <div>
                        <header className="bg-secondary text-secondary-content text-md rounded-t-xl px-5 py-5 font-bold sm:text-lg lg:text-2xl">
                            You Don't know JS
                        </header>
                        <hr />
                        <main className="bg-accent text-secondary-content text-md rounded-b-xl px-5 py-10 font-medium text-pretty">
                            The worldwide best selling You Don't Know JS book
                            series is back for a 2nd edition: You Don't Know JS
                            Yet. All 6 books are brand new, rewritten to cover
                            all sides of JS for 2020 and beyond. You'll still
                            get in-depth coverage of the core language, applied
                            in useful code organization patterns for your
                            programs. And of course, through Kyle's unique
                            perspective and conversational tone, explore
                            passionate, reasoned debate of the most common
                            questions developers face. Scope & Closures, the
                            second book in the new edition series, dives deep
                            into how and why to organize variables into
                            different buckets of scope, limiting scope
                            over-exposure and improving code maintainability. On
                            top of lexical scope, closure empowers functions
                            with memory, preserving variables across calls.
                            Modules leverage scope and closures to encapsulate
                            data and behavior. In Scope & Closures, you'll dig
                            into: Nesting lexical scopes with functions and
                            blocks, to limit scope exposure of variables
                            Functions remembering variables through closure
                            Modules, one of the most important code organization
                            patterns in programming
                        </main>
                    </div>
                </div>
            </div>
            <aside className="flex min-w-[200px] flex-col gap-10">
                <h2 className="text-primary text-lg font-bold sm:text-xl lg:text-3xl">
                    Add
                </h2>
                <div className="bg-accent h-[200px] rounded-2xl text-transparent md:h-[100px]">
                    1
                </div>
                <div className="bg-accent h-[200px] rounded-2xl text-transparent md:h-[100px]">
                    1
                </div>
                <div className="bg-accent h-[200px] rounded-2xl text-transparent md:h-[100px]">
                    1
                </div>
                <div className="bg-accent h-[200px] rounded-2xl text-transparent md:h-[100px]">
                    1
                </div>
            </aside>
        </div>
    );
};
