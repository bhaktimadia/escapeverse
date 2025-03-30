import { InfiniteMenu } from "@/components";

export const BlogsPage = async () => {
    const items = [
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'EscapeVerse',
            description: ''
        },
        {
            image: 'https://picsum.photos/400/400?grayscale',
            link: 'https://google.com/',
            title: 'Escape Room',
            description: ''
        },
        {
            image: 'https://picsum.photos/500/500?grayscale',
            link: 'https://google.com/',
            title: 'Lost In Space',
            description: ''
        },
        {
            image: 'https://picsum.photos/600/600?grayscale',
            link: 'https://google.com/',
            title: 'The Lost Realm',
            description: ''
        }
    ];


    return (
        <div >
            <div style={{ height: '680px', position: 'relative' }}>
                <InfiniteMenu items={items} />
            </div>
            <div className="my-10 px-24 font-bold text-3xl"> 
                Blog Page
            </div>
        </div>
    );
};
export default BlogsPage;