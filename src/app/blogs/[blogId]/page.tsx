const BlogsDetailPage = async ({ params }: any) => {
    const blogId = params.blogId;
    console.log("blog params", params);
    console.log("blogId",blogId);
    return <div>Blog detail Page</div>;
};

export default BlogsDetailPage;