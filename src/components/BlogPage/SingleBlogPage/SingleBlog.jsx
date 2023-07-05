import React, { useEffect } from "react";
import './SingleBlog.scss';
import NavBar from "../../NavBar/NavBar";

const SingleBlog = ( {blog_id} ) => {
    useEffect(() => {
        console.log(blog_id)
    }, [blog_id]);
    return(
        <>
            <NavBar/>
            <section className="single-blog-page">
                <div className="single-blog">
                    <h1>The overlooked benefits of real Christmas trees - Dr.RIkesh Wagle</h1>
                    <div className="image">
                        <img src={require('../../../assets/Img/The Power of Darkness (1).png')} alt="" />
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quisquam voluptatibus nam facere totam tempore laudantium, odio ad numquam? Illo cupiditate perspiciatis laudantium, vitae ipsa incidunt aliquam magnam in quam et qui facere expedita necessitatibus vero sint aperiam laborum quidem excepturi labore id. Ea totam repellat velit laboriosam nam vel error quia dolorum illum quis, odit ducimus quae eligendi officia. Temporibus est quasi unde omnis illum vel tenetur animi ab doloremque, mollitia, assumenda et voluptate. Impedit ex tempore, maiores quae consectetur ea ullam quis eligendi expedita, nam eos in repellendus doloremque atque consequuntur sequi exercitationem natus delectus aspernatur est! Amet?
                    </p>
                </div>

                <div className="other-blogs">
                    <h2>Other Blogs</h2>
                    <div className="blog">
                        <div className="image">
                            <img src={require('../../../assets/Img/sunflower.jpg')} alt="" />
                        </div>
                        <h4>The overlooked benefits of real Christmas tree - Dr. Suyog Shakya</h4>
                        <button>Read More</button>
                    </div>

                    <div className="blog">
                        <div className="image">
                            <img src={require('../../../assets/Img/sunflower.jpg')} alt="" />
                        </div>
                        <h4>The overlooked benefits of real Christmas tree - Dr. Suyog Shakya</h4>
                        <button>Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog;