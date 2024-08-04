type BlogData = {
  id: number;
  name: string;
  detail: string;
  community_id: number;
  community: string;
  user_id: number;
  user_name: string;
  user_image: string;
  comment: string;
};

type PropsBlog = {
  blog: BlogData;
};

export default function Blog(prop: PropsBlog) {
  const blog: BlogData = prop.blog;
  return (
    <div className="px-5 py-4 border-b-2 border-grey-100">
      <div className="flex pb-3">
        <img
          className="object-cover h-12 w-12 rounded-full"
          src={blog.user_image}
        />
        <h1 className="text-grey-300 my-auto pl-3">{blog.user_name}</h1>
      </div>
      <span className="px-2 py-1 bg-surface rounded-lg text-grey text-sm">
        {blog.community}
      </span>
      <div id="content" className="my-3">
        <h1 className="text-black font-semibold text-lg">{blog.name}</h1>
        <p className="text-black">{blog.detail}</p>
      </div>
      <button className="text-grey-300">Comments</button>
    </div>
  );
}
