"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  Suspense,
} from "react";
import { Box, Drawer, styled, Avatar, CircularProgress } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { CategoryList, ProductList } from "@/app/lib/utills/categoryList";
import { addPost } from "@/app/actions/users/addPost";
import { is } from "immutable";
import { getProductsPost } from "@/app/lib/actions/getProductsPost";
import toast from "react-hot-toast";

// import { auth } from '@/auth'



const Butt = ({ text }) => {
  const [val, setval] = useState("Post");
  useEffect(() => {
    if (text)
      setval(
        <CircularProgress
          size={18}
          color="primary"
          className=" text-cyan-50 "
        />
      );
  }, []);
  return (
    <button
      id="post"
      type="submit"
      disabled
      className="px-4 py-1.5 rounded-full bg-indigo-600 text-white font-semibold disabled:bg-indigo-300"
    >
      {val}
    </button>
  );
};

const PostForm = memo(
  function Form(props) {
    const ref = useRef(null);
    const [data, setdata] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [sending, seIsSending] = useState(false);
    const { isOpen, toggle, height, avatar, userId, cat } = props;
    const MyDrawer = styled(Drawer)(({ theme }) => {
      return {
        height: height,
        boxShadow: theme.shadows[0],
      };
    });

  
    const handleChange = useCallback((e) => {
      const coutt = document.getElementById("pre");

      if (e.type === "change") {
        ref.current = e.target.value;
        coutt.innerText = `${ref.current.length}/400`;
        if (ref.current.length >= 400 ) {
          coutt.style.color = "red";
          document.getElementById("post").setAttribute("disabled", true);
        } else if (ref.current.length > 380) {
          coutt.style.color = "orange";
        } else if (ref.current.length === 0) {
          coutt.innerHTML = "";
          document.getElementById("post").toggleAttribute("disabled", true);
        } else  {
          coutt.style.color = "black";
          document.getElementById("post").toggleAttribute("disabled", false);
        }
      }
    }, []);

    const postHint = async (formd) => {
      const isCat = formd.get("category");
      console.log(isCat)
      if(isCat === null) return toast("Please link to a category");
    else  setTimeout(() => seIsSending(true), 1000);
     
      try {
        try {
          const r = await addPost(formd);
          return toast(r.message);
        } catch (r_1) {
          return toast(r_1.message);
        }
      } finally {
        seIsSending(false);
        toggle();
      }
    };

    useEffect(() => {
      const getProd = async () => {
        try {
          setIsLoading(true);
          const products = await getProductsPost(userId);

          if (Array.isArray(products.product)) setdata([...products.product]);
          else return;
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      getProd();
    }, []);

    //    console.log(session)
    return (
      <div>
        <MyDrawer
          anchor="bottom"
          open={isOpen}
          sx={{ bgcolor: "transparent" }}
          elevation={0}
          variant="temporary"
        >
          <Box
            sx={{ height: height - 50, bottom: 80, bgcolor: "transparent" }}
            className="p-4 space-y-8"
          >
            <form action={postHint} className="space-y-4">
              <div className="flex justify-between items-center">
                <CloseOutlined className="text-slate-900" onClick={toggle} />
                <Butt text={sending} />
                {/* <button id='post' type='submit' disabled  className='px-4 py-1.5 rounded-full bg-indigo-600 text-white font-semibold disabled:bg-indigo-300'>{val}</button> */}
              </div>
              <div className="flex space-x-1 items-start">
                <Avatar src={avatar || ""} className=" flex-shrink-0" />

                <div className="flex-grow  px-1 overflow-x-scroll no_border2 space-y-4">
                  <textarea
                    name="text"
                    maxLength={400}
                    minLength={10}
                    id="text"
                    autoFocus
                    aria-label="text area"
                    placeholder="Share a nugget on shopping"
                    rows={6}
                    className="w-full outline-none text-base p-2 placeholder:pl-2"
                    onChange={handleChange}
                  />

                  <div className={`space-y-2`}>
                    <span className="flex-col">
                      <span className="flex justify-between items-center">
                        <p className="font-semibold">Tag category</p>
                        <pre id="pre" className="text-[12px]"></pre>
                      </span>

                    
                      <CategoryList cat={cat} />
                    </span>
                    <span className="flex justify-between items-center">
                      <p className="font-semibold">Tag product</p>
                    </span>
                    <Suspense fallback={loading ? <p>loading....</p> : ""}>
                      <ProductList data={data} />
                    </Suspense>
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </MyDrawer>
      </div>
    );
  },
  (prev, next) => is(prev.cat, next.cat)
);

export default PostForm;
