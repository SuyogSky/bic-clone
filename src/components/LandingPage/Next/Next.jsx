import React from "react";
import './Next.scss';
const Next = () => {
    return(
        <section className="next-section">
            <div className="next-step">
                <div className="next-heading">
                    <h2>What's Your Next Step?</h2>
                </div>

                <div className="next-content">
                    <button>Request Information</button>
                    <button>Virtual Visit</button>
                    <button>Apply Now</button>
                </div>
            </div>
        </section>
    )
}

export default Next;