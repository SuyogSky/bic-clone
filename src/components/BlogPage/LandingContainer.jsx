import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Image from "../../assets/BlogCoverImage/firstblog.png";
import "../BlogPage/LandingContainer.scss";
const BlogMain = () => {
  const navigate = useNavigate();
  const [a, b] = useState(true);
  let i = [
    {
      post_id: "1",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan",
      view: 10
    },
    {
      post_id: "2",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "3",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "4",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "1",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "2",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "3",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "4",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "1",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "2",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "3",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "4",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    }, {
      post_id: "1",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "2",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },
    {
      post_id: "3",
      title: "This is the title of blog",
      description:
        "This is the description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Ishan", view: 10

    },
    {
      post_id: "4",
      title: "This is thesecond title of blog",
      description:
        "This is the second description i am okay description will used in various sense This beacuse i love you i hate nothing to do it is the important thingso",
      image: Image,
      writer_image: "path of writer image",
      writer_name: "Aaryan", view: 10

    },


  ];
  return (
    <>
      <div className="maincontainer">
        <div className="content">
          <h1>Writer Corner's</h1>
          <h4>Stories from the community powering the internet's visual</h4>
          <div className="mainblog">
            {i.map((element) => {
              let shortdesc = element['description'].slice(1, 100);
              return (
                <div className="blog-container">
                  <div className="coverimage">
                    <img src={element["image"]} alt="image of blog" />
                  </div>
                  <div className="heading">
                    <h1>{element["title"]}</h1>
                  </div>
                  <h5>{shortdesc}  ...</h5>
                  <div className="aboutwriter">
                    <img src={element["image"]} alt="" width="40px" />
                    <span>{element['writer_name']}</span>
                    <p>Views: {element['view']}</p>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
