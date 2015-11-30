import React from 'react-native';
import CompanyRow from '../../components/company/CompanyRow';
import Request from '../../services/Request';
import { urls } from '../../configs/environment';

const {
  StyleSheet,
  Component,
  ListView,
  View,
  Text,
  TouchableHighlight,
  BackAndroid
} = React;

export default class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  componentDidMount() {
    this.props.actions.getAllCompanies();
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
    const companies = this.props.state.companies;
    const hasLoaded = companies.loaded;

    if (hasLoaded) {
      this.dataSource = this.dataSource.cloneWithRows(companies.companies);
    } else {
      return this.renderLoadingView();
    }

    return (
      <View style={{backgroundColor: '#eee', flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    )
  }
}
