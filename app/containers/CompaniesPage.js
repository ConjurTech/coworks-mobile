import React from 'react-native';
import ProgressBar from 'ProgressBarAndroid';
import { mapDispatchToProps, connect } from '../Connector';
import CompanyRow from '../components/CompanyRow';
import Request from '../Request';
import { urls } from '../config/environment';

const {
  StyleSheet,
  Component,
  ListView,
  View,
  Text,
  TouchableHighlight,
  BackAndroid
} = React;

class CompaniesPage extends Component {
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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <ProgressBar styleAttr="Large" color="black" />
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
    const companies = this.props.companies;
    const hasLoaded = this.props.loaded;

    if (hasLoaded) {
      // This dataSource still doesn't know which copy is dirty or not right?
      // Need to find a way to inject individual elements not companies.toJS()
      this.dataSource = this.dataSource.cloneWithRows(companies.toJS());
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

mapStateToProps = ({companies}) => {
  return {
    companies: companies.get('companies'),
    loaded: companies.get('loaded')
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
