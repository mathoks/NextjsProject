import React from "react";
import { Avatar } from "@mui/material";
import { getPost } from "../lib/actions/getPosts";
import { TimeDifference } from "../lib/utills/Timestamp";
import { LinkOutlined, TagOutlined } from "@mui/icons-material";
import Link from "next/link";

const Post = async () => {
  const data = await getPost();

  if (!Array.isArray(data) || data.length === 0) return <p>no post yet</p>;
  const PostList = () =>
    data?.map(
      ({
        text,
        author: {
          store: { businessName, id: ids },
        },
        products,
        id,
        categorys,
        createdAt,
      }) => {
        return (
          <section key={id} className="flex space-x-2 mb-8">
            <Avatar className=" flex-grow-0" />
            <div className="flex flex-col space-y-2 bg-blue-50 rounded-md p-2 flex-grow">
              <div className="flex justify-end">
                <Link
                  href={`/store/${businessName}/${ids}`}
                  className=" underline text-blue-400 hover:text-blue-500"
                >
                  {businessName}
                </Link>
              </div>
              {Array.isArray(categorys) && categorys.length > 0 ? (
                <>
                  <span className="flex">
                    {" "}
                    <TagOutlined /> <p>tagged categories </p>
                  </span>
                  <ul className="overflow-x-scroll flex space-x-2 py-2 w-[70vw] pl-2">
                    {categorys.map(({ category: { name } }, ids) => (
                      <li
                        key={ids}
                        className="ring-1 rounded-full px-2.5 py-0.5 shadow bg-white text-nowrap  text-blue-500 text-center text-sm"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
              <>
                <p className="text-slate-600 first-letter:capitalize first-line:font-semibold pl-2">
                  {text}
                </p>
              </>
              <>
                {Array.isArray(products) && products.length > 0 ? (
                  <>
                    <span className="flex pl-2">
                      {" "}
                      <LinkOutlined className="text-blue-400" />{" "}
                      <p>tagged products </p>
                    </span>
                    <ul className="overflow-x-scroll flex space-x-2 py-2 w-[70vw] pl-2">
                      {products?.map(
                        ({ product: { name, storeId }, productId }, ids) => (
                          <Link
                            key={ids}
                            className="ring-1 rounded-full px-2.5 py-0.5 shadow bg-white  text-blue-500 text-center text-sm"
                            href={`/store/${storeId}/product/${productId}`}
                          >
                            {name}
                          </Link>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </>
              <TimeDifference timestamp={createdAt} />
            </div>
          </section>
        );
      }
    );
  return <PostList />;
};

export default Post;
