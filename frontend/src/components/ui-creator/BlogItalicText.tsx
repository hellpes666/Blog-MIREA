export const BlogItalicText = ({ text }: { text: string }) => {
    return (
        <i className="text-secondary cursor-copy font-medium select-all">
            {text}
        </i>
    );
};
