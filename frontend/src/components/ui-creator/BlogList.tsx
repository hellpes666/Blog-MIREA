import { v4 as uuid } from "uuid";
import { BlogListItem } from "./BlogListItem";
export const BlogList = ({ listItems }: { listItems: string[] }) => {
    return (
        <ul className="list-disc py-2 pl-5">
            {listItems.map((listItem) => (
                <BlogListItem key={uuid()} text={listItem} />
            ))}
        </ul>
    );
};
