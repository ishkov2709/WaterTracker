import { useEffect } from "react"
import Icon from "components/common/Icon"
import { color } from "styles/colors"
import {
  WaterRatioPanelContainer,
  WaterRangeHeader,
  WaterRangeContainer,
  WaterRange,
  MarksContainer,
  LeftMark,
  RightMark,
  Mark,
  AddWaterButton,
} from './WaterRatioPanel.styled';
import { useSelector } from "react-redux";
import { selectTotalTodayDailyWater } from "store/waterData/selectors";
import TodayListModal from "components/TodayListModal/TodayListModal";
import { ModalContext } from "components/common/ModalProvider/ModalProvider";
import { useContext } from "react";

const WaterRatioPanel = () => {
  //const [rangeWaterPercentage, setRangeWaterPercentage] = useState([30]);
  const toggleModal = useContext(ModalContext);

  const rangeWaterPercentage = useSelector(selectTotalTodayDailyWater);
  
  const handleClickAdd = () => {
     toggleModal(<TodayListModal/>)
    }

  useEffect(() => {
    const ele = document.querySelector('#mark');
    if (ele) {
      let newVal = Number(((rangeWaterPercentage - 0) * 100) / (100 - 0));
      newVal = (newVal >= 100) ? 100 : newVal;
      ele.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }, [rangeWaterPercentage]);

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${rangeWaterPercentage}%`
    };
  };

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
            type="range"
            maxValue={100}
            minValue={0}
            value={rangeWaterPercentage}
            readOnly={true}
            style={getBackgroundSize()}
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          <Mark id="mark">{`${rangeWaterPercentage}%`}</Mark>
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton onClick={handleClickAdd}>
        <Icon name="add" stroke={color.primary.white} /> Add Water
      </AddWaterButton >
    </WaterRatioPanelContainer>
  );
};

export default WaterRatioPanel;
