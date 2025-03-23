import { Link } from "react-router-dom";

export const BlogLinkText = ({
    link,
    text,
}: {
    link: string;
    text: string;
}) => {
    return (
        <Link
            to={link}
            className="text-primary cursor-pointer italic underline"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    );
};
