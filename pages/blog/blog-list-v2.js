import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import BlogListV2 from "../../components/blog-meu-pages/blog-list-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog List V2" />
      <BlogListV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
