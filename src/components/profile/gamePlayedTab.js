import {View, FlatList} from 'react-native';
import BadgeCard from '../common/badgeCard';
import { onlineGamesData } from '../../data/gamePalyed';

export const GamePlayedTab = () => {
  const renderProductItem = ({item}) => (
    <BadgeCard
      item={item}
      onIncrement={() => handleIncrement(item)}
      onDecrement={() => handleDecrement(item)}
    />
  );
  return (
    <View style={{paddingVertical: 20, backgroundColor: '#F6F3FA'}}>
      <FlatList
        data={onlineGamesData}
        style={{
          flex: 1,
        }}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </View>
  );
};
