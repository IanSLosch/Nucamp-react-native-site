// import { useState } from 'react';
import { FlatList } from 'react-native';
// import { Avatar, ListItem } from 'react-native-elements';
// changing ListItem to Tile
// import { CAMPSITES } from '../shared/campsites';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const DirectoryScreen = ({ navigation }) => {
  // const [campsites, setCampsites] = useState(CAMPSITES);
  // replaced with redux state from store
  const campsites = useSelector((state) => state.campsites)

  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <Tile 
        title={campsite.name}
        caption={campsite.description}
        featured
        onPress={() =>
        navigation.navigate('CampsiteInfo', { campsite })
      }
      imageSrc={{ uri: baseUrl + campsite.image}}
      />
      // removed in favor of Tile component when switching to redux
      // <ListItem
      //     onPress={() =>
      //         navigation.navigate('CampsiteInfo', { campsite })
      //     }
      // >
      //     <Avatar source={{ uri: baseUrl + campsite.image }} rounded />
      //     <ListItem.Content>
      //         <ListItem.Title>{campsite.name}</ListItem.Title>
      //         <ListItem.Subtitle>
      //             {campsite.description}
      //         </ListItem.Subtitle>
      //     </ListItem.Content>
      // </ListItem>
        );
  };
  return (
    <FlatList
      data={campsites.campsitesArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;