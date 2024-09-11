import React from "react";
import { Avatar,  Chip } from "@mui/material";
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
            <div className="flex flex-col space-y-2  rounded-md py-2 flex-grow">
              
                <Link
                  href={`/store/${businessName}/${ids}`}
                  className=" underline text-[#481869] hover:text-blue-500 px-2"
                >
                  {businessName}
                </Link>
            
              {Array.isArray(categorys) && categorys.length > 0 ? (          
                  <ul className="overflow-x-scroll flex space-x-2 py-2 px-2 w-[80vw]">
                    {categorys.map(({ category: { name } }, ids) => (
                      <li
                        key={ids}
                        className="ring-1 ring-[#8841b8] rounded-full px-2.5 py-0.5 shadow bg-white text-nowrap w-fit text-[#481869] text-center text-sm"
                      >
                        <TagOutlined fontSize="inherit"  />{name}
                      </li> 
                      
              ))}
                  </ul>
              ) : (
                ""
              )}
              <>
                <p className="text-slate-600 first-letter:capitalize first-line:font-semibold pl-2">
                  {text}
                </p>
              </>
              
                {Array.isArray(products) && products.length > 0 ? (                 
                    <ul className="overflow-x-scroll flex space-x-2 py-2  pl-2 text-nowrap ">
                      {products?.map(
                        ({ product: { name, storeId }, productId }, ids) => (
                          <Link
                            key={ids}
                            className="ring-1 ring-[#8841b8] rounded-full px-2.5 py-0.5 shadow bg-white w-fit text-[#481869] text-center text-sm"
                            href={`/store/${storeId}/product/${productId}`}
                          >
                            <LinkOutlined className="text-[#481869] font-medium" />{name}
                          </Link>
                        )
                      )}
                    </ul>
                ) : (
                  ""
                )}
              {session?.user?.id === ids ? (<div className="flex justify-between pl-2">
             <button className="flex space-x-1">
                     <EditNoteOutlined className="text-blue-400" />{" "}
                     <p>Edit</p>
                     </button> 
                     <TimeDifference  timestamp={createdAt} />
              </div>) : <TimeDifference timestamp={createdAt} />}
            </div>
          </section>
        );
      }
    );
  return <PostList />;
  
};

export default Post;
