class Home extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="SignUp"
          onPress={() => navigate('SignUp')}
        />
      );
    }
  }
  