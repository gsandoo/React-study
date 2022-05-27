import React , {useState , useRef , useEffect} from "react";
import img1 from '../images/001.jpg';
import img2 from '../images/002.jpg';
import img3 from '../images/003.jpg';
import img4 from '../images/004.jpg';
import SliderImg from "./SliderImg";
import styled from 'styled-components';
import axios from "axios";



const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

 
     


  




  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };




  useEffect(() => {
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]); // 슬라이드 이동

  return (
    <>
    <div id="move_items" >
        <div className="best_product">BEST PRODUCT</div>
        <div className="move_number">
            <h3 onClick={PrevSlide}>Prev</h3>
            <h3 onClick={NextSlide}>Next</h3>
        </div>
    </div>
    <Container>
      <SliderContainer ref={slideRef}>
        <SliderImg img={img1} />
        <SliderImg img={img2} />
        <SliderImg img={img3} />
        <SliderImg img={img4} />

        <SliderImg img={img1} />
        <SliderImg img={img2} />
        <SliderImg img={img3} />
        <SliderImg img={img4} />
        
        <SliderImg img={img1} />
        <SliderImg img={img2} />
        <SliderImg img={img3} />
        <SliderImg img={img4} />
      </SliderContainer>
    </Container>
    </>
  );
}
const Container = styled.div`
  position: absolute;
  top: 115%;
  width: 100vw;
  margin: auto;
  height: auto;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
