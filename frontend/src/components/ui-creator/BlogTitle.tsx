export const BlogTitle = ({ title }: { title: string }) => {
    return (
        <h3 className="text-primary text-3xl font-extrabold tracking-wide uppercase underline">
            {title}
        </h3>
    );
};
