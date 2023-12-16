import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import { textColor } from '../../../Root/RootValues';
import { textStyles } from '../../../Styles/TextStyle';
import { flextStyles } from '../../../Styles/FlexStyles';
import NewsCartVertical from '../../../components_tsx/Cart/NewsCartVertical';
import TopicsCart from '../../../components_tsx/Cart/TopicsCart';

const Explore = (props) => {
  const { navigation, route } = props;
  const { isDarkMode } = props;

  const colorText = isDarkMode ? textColor.darkmode : textColor.lightmode;

  return (
    <ScrollView style={{padding: 20}}>
      <Text style={[textStyles.displayMedium, textStyles.displayTextBold, { color: colorText.tilte }]}>Explore</Text>

      <View>
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween]}>
          <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>Topics</Text>
          <Text style={[textStyles.textSmall, { color: colorText.body }]}>See all</Text>



        </View>

        <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart]}>
          <TopicsCart
            topicTitle="Business"
            topicDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

            isDarkmode={isDarkMode}
          />

          <TopicsCart
            topicTitle="Business"
            topicDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            isDarkmode={isDarkMode}
          />
        </View>
      </View>

      <View>
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween]}>
          <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>Popular Topic</Text>
          {/* <Text style={[textStyles.textSmall, { color: colorText.body }]}>See all</Text> */}

        </View>

        <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart]}>
          <NewsCartVertical
            newsType='Europe'
            newsImage={require('../../../assets/images/trending1.png')}
            newsTitle="Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil"
            newsTime="4h ago"
            newsLogoAuthor={require('../../../assets/images/logoBBC.png')}
            newsAuthorName="BBC News"
          />

          <NewsCartVertical
            newsType='Europe'
            newsImage={require('../../../assets/images/trending1.png')}
            newsTitle="Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil"
            newsTime="4h ago"
            newsLogoAuthor={require('../../../assets/images/logoBBC.png')}
            newsAuthorName="BBC News"
          />

          <NewsCartVertical
            newsType='Europe'
            newsImage={require('../../../assets/images/trending1.png')}
            newsTitle="Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil"
            newsTime="4h ago"
            newsLogoAuthor={require('../../../assets/images/logoBBC.png')}
            newsAuthorName="BBC News"
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({})