import React from "react";
import { Avatar } from "@mui/material";
import { getPost } from "../lib/actions/getPosts";
import { TimeDifference } from "../lib/utills/Timestamp";
import { EditNoteOutlined, LinkOutlined, TagOutlined } from "@mui/icons-material";
import Link from "next/link";
import { auth } from "@/auth";

const Post = async () => {
  const data = await getPost();
  const session = await auth()
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
                    <TagOutlined fontSize="small" /> <p>tagged categories </p>
                  </span>
                  <ul className="overflow-x-scroll flex space-x-2 py-2 w-[70vw] pl-2">
                    {categorys.map(({ category: { name } }, ids) => (
                      <li
                        key={ids}
                        className="ring-1 rounded-full px-2.5 py-0.5 shadow bg-white text-nowrap w-fit text-blue-500 text-center text-sm"
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
                    <span className="flex pl-2 justify-between">
                      {" "}
                     <div className="flex space-x-1">
                     <LinkOutlined className="text-blue-400" />{" "}
                     <p>tagged products </p>
                     </div>      
                    </span>
                    <ul className="overflow-x-scroll flex space-x-2 py-2 w-[70vw] pl-2 text-nowrap ">
                      {products?.map(
                        ({ product: { name, storeId }, productId }, ids) => (
                          <Link
                            key={ids}
                            className="ring-1 rounded-full px-2.5 py-0.5 shadow bg-white w-fit text-blue-500 text-center text-sm"
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
              <div className="flex justify-between pl-2">
             {session?.user?.id === ids ? (<button className="flex space-x-1">
                     <EditNoteOutlined className="text-blue-400" />{" "}
                     <p>Edit </p>
                     </button>) : null }
                     <TimeDifference timestamp={createdAt} />
              </div>
             
            </div>
          </section>
        );
      }
    );
  return <PostList />;
  
};

export default Post;
