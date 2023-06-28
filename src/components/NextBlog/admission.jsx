import React from "react";
import "./admission.css";

const Admission = () => {

    return (
        <>

            <div class="desc">
                <div class="column1">
                    <div class="Heading">
                        <h2>The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                    </div>
                    <div class="description">
                        <div className="change">
                        <img src={require("../assets/Img/aa.jpg")} alt="nghd" />
                        </div>

                        <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard
                            response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this
                            question as a simplistic solution. As I am, so is my child: that’s my simple mantra for parents and
                            teachers. Most researches support this sure shot formula as what we adults do, shouts louder than words.
                            Let’s reflect upon some basic concerns.</p>
                        <p>We require children to listen to us, but how many of us listen to their spoken and unspoken needs or
                            anguish? Forget children, how many of us listen to anyone else with our full being? We insist that
                            children must eat healthy. However, when children are young and impressionable, we introduce them to
                            chocolate, chips and sugared drinks. Not only that, we also give these out as rewards, indirectly
                            reinforcing the concept that these foods are well-earned treats. Why don’t we consider giving a carrot
                            or an apple as a treat? We say today’s generation is hooked to their gadgets but many of us find it
                            virtually impossible to survive without our daily gizmo fix. We consider their behavior bratty and
                            impolite but how many of us talk respectfully and kindly to our elders, our support staff or the
                            physically and mentally challenged?</p>
                        <p>We rue the fact that children are unconnected to trees, ants and the bees but our leisure time
                            activities consist chiefly of walking through the mall and catching the latest Friday release. When was
                            the last time you walked on the beach or visited a nature reserve? We complain that children fib and
                            fight but they find us lying through our teeth, holding grudges and plotting revenge on all and sundry.
                            We often nag our children to do their work on time, yet do they find us organized and efficient at all
                            times? We want children to read and grow in knowledge; are books merely part of our home. </p>
                    </div>

                </div>
                <div class="column2">
                    <div class="first">
                        <div class="title">
                            <span>Recent Posts</span>
                        </div>
                        <br />
                        <div class="sideimages">
                            <img src={require("../assets/Img/aa.jpg")} alt="nghd" />                                </div>
                        <div class="Heading2">
                            <h2 class="sidetext">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                            <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard
                                response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this
                                question...</p>
                        </div>
                        <button>Read more</button>
                    </div>
                    <br />
                    <div class="second">
                        <div class="sideimages">
                            <img src={require("../assets/Img/aa.jpg")} alt="nghd" />
                        </div>
                        <div class="Heading2">
                            <h2 class="sidetext">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h2>
                            <p>A common refrain that I hear from parents and teachers is, ‘children don’t listen to us.’ And my standard
                                response is, ‘do you model the expected behavior?’ Most people mistake the wisdom contained in this
                                question...</p>
                        </div>
                        <button>Read more</button>
                    </div>
                </div>
            </div>

        </>
    );


}
export default Admission;

