import './PromotionArea.css'
export default function PromotionArea(){
    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <div className="col col-md-5 offset-1 mt-5">
                <h1 className="PromoAreaTitle">Who will help you</h1>
                
                    <img src="./Images/collection_1.jpg" className="tutor_1 " />
                
                     <div className="tutor_1_text">
                     <hr className="line" />
                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem a nisi voluptas perspiciatis cupiditate provident.</p>
                     </div>
                 </div>
            <div className="col col-md-5 mt-5">
                <img src="./Images/collection_2.jpg" className="tutor_2" />
                <div className="tutor_2_text">
                <hr className="line" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem a nisi voluptas perspiciatis cupiditate provident.</p>
                </div>
            </div>

        </div>

    </div>
    )
}