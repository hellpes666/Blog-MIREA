export const BlogListItem = ({ text }: { text: string }) => {
    return (
        <li className="text-accent cursor-copy italic select-all">{text}</li>
    );
};
