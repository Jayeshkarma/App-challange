import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import PrimaryButton from './primaryButton';
import {UnderPrediction} from './underPrediction';
import SecondaryButton from './secondaryButton';

export const BottomSheet = ({type, text, iconName}) => {
  const refRBSheet = useRef();
  return (
    <>
       {type == 1 ? (
        <PrimaryButton
          onPress={() => refRBSheet.current.open()}
          text={text}
          iconName={iconName}
        />
      ) : (
        <SecondaryButton
          onPress={() => refRBSheet.current.open()}
          text={text}
          iconName={iconName}
        />
      )}
      <RBSheet
        ref={refRBSheet}
        dragFromTopOnly={true}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: '#0000004D',
          },
          container: {
            backgroundColor: '#fff',
            borderRadius: 20,
            minHeight: '55%',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <UnderPrediction text={text} />
      </RBSheet>
    </>
  );
};
