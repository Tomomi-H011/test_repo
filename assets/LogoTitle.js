// assets/LogoTitle.js for clickable Header Logo

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';


export default function LogoTitle() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        source={require('./assets/img/Ivy-Tech-Non-Apparel-Storefront_Header-Logo-202442416254-2944938049-1.png')}
        style={{ width: 40 }}
      />
    </TouchableOpacity>
  );
}