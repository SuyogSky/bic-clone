import React, { useState } from "react";
import './AddBlog.scss'
import NavBar from "../../NavBar/NavBar";
import { AiOutlineCloudUpload } from 'react-icons/ai'
const AddBlog = () => {
    const [writerImage, setWriterImage] = useState(null)

    return(
        <>
            <NavBar/>
            <section className="add-blog">
                <form action="">
                    <div className="writer-info">
                        <h2>Writer's Information</h2>
                        <div className="writer-image">
                            <label htmlFor="writer-image">
                                {writerImage?<img src={writerImage} alt="" />:''}
                                <div className="dim">
                                    <AiOutlineCloudUpload/>
                                    <p>Upload Image</p>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="writer-image"
                                id="writer-image"
                                onChange={(e) => {
                                    // setWriterImage(e.target.files[0]);
                                    setWriterImage(URL.createObjectURL(e.target.files[0]));
                                    console.log(writerImage)
                                }}
                            />
                        </div>
                        <label htmlFor="writer-image">
                            <p>Upload Writer Image</p>
                        </label>

                        <div className="writer-name">
                            <label htmlFor="writer-name"></label>
                            <input type="text" name="writer-name" id="writer-name" placeholder="Writer's Name"/>
                        </div>
                    </div>

                    <div className="blog-contents">
                        <div className="thumbnail">
                            <label htmlFor="thumbnail"></label>
                            <input type="file" name="thumbnail" id="thumbnail"/>
                        </div>

                        <div className="heading">
                            <label htmlFor="heading"></label>
                            <input type="text" name="heading" id="heading"/>
                        </div>

                        <div className="content">
                            <label htmlFor="content"></label>
                            <textarea name="content" id="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddBlog