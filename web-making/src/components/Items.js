import React from "react";
import Header from "./Header";

function Items(){
    return(
        <>
            <div id="about_header">
                <div>
                    <Header/>
                </div>
            </div>
            <div id="items_main">
                <div className="pictures">
                    <img src="https://ecudemo184661.cafe24.com/add/images/detail.jpg" alt="items_image" />
                </div>
                <div id="information">
                    <div className="top">
                        <div className="name">
                            Modern Trench Coat , Black <br/>
                            <span className="remove">130,000원</span>
                            <span className="real_price">120,000원</span>
                        </div>
                        <p className="definition">
                        Even basic clothes are more trendy and stylish when the designer touches <br/>them.
                        </p>
                    </div>
                    <div className="details">
                        <div className="detail">
                            <span className="tab">소비자가</span>
                            <span className="remove_detail tab_result">130,000원</span>
                        </div>
                        <div className="detail">
                            <span className="blue tab">판매가</span>
                            <span className="blue tab_result">120,000원</span>
                        </div>
                        <div className="detail">
                            <span className="tab">국내 / 해외배송</span>
                            <span className="tab_result">국내배송</span>
                        </div>
                        <div className="detail">
                            <span className="tab">배송방법</span>
                            <span className="tab_result">택배</span>
                        </div>
                        <div className="detail">
                            <span className="tab">배송비</span>
                            <span className="tab_result">2,500원 (50,000원 이상 구매 시 무료)</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div>색상</div>
                        <select name="colors" id="colors">
                            <option value="options" id="options"> - [필수] 옵션을 선택해 주세요 - </option>
                            <option value="line">------------</option>
                            <option value="beige">베이지</option>
                            <option value="blue">블루</option>
                            <option value="black">블랙</option>
                        </select>
                        <div>사이즈</div>
                        <select name="size" id="size">
                            <option value="options" id="options"> - [필수] 옵션을 선택해 주세요 - </option>
                            <option value="line">------------</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>    
                    </div>
                    <div className="below">
                        <div className="total"> TOTAL PRICE : 120,000 </div>
                        <button className="buy">BUY NOW</button>
                        <div className="cart">
                            <button className="add"> ADD TO CART</button>
                            <button className="wish">WISH LIST</button>
                        </div>
                        <div className="service">
                            <div className="bold">DETAILS</div>
                            <div className="gray">PAYMENT INFO</div>
                            <div className="gray">DELIVERY</div>
                            <div className="gray">EXCHANGE</div>
                        </div>
                        <p className="definition">
                            Please provide a brief description of the item. Neat composition can<br/> effectively highlight text. The fix is ​​not harder than you think. You can <br/> easily manage it in admin.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Items;

