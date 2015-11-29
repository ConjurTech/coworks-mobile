import React from 'react-native';
import CompanyRow from '../../components/company/CompanyRow.js';

const {
  StyleSheet,
  Component,
  ListView,
  View,
  Text,
  TouchableHighlight,
  BackAndroid
} = React;

const mockStore = {}

export default class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state.loaded = false;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(()=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([
          {
            name: '1',
            logo_url: 'http://test.com'
          }, {
            name: '2',
            logo_url: 'http://test.com'
          }
        ]),
        loaded: true
      });
    }, 0);
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading......
        </Text>
      </View>
    );
  }

  renderRow(object) {
    return (
      <CompanyRow
        name = {object.name}
        favourite = {true}
        logo_url = {object.logo_url}
        />
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    )
  }
}
