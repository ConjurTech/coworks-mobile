import React from 'react-native';
import CompanyRow from '../../components/company/CompanyRow';
import Request from '../../services/Request'

const {
  StyleSheet,
  Component,
  ListView,
  View,
  Text,
  TouchableHighlight,
  BackAndroid
} = React;

const REQUEST_URL = 'http://coworks.conjur.tech/companies';

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
    Request.get(REQUEST_URL)
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.companies),
        loaded: true,
      });
    })
    .done();
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

  renderRow(company) {
    return (
      <CompanyRow
        name = {company.name}
        favourite = {true}
        logo = {company.logo}
        />
    )
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{backgroundColor: '#eee', flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    )
  }
}
