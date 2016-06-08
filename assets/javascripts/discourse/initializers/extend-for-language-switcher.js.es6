import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  api.onPageChange(() => {
    console.log('the page has changed');
  });
  
  api.decorateWidget('header-icons:before', function(helper) {
    const currentUser = api.getCurrentUser(),
      headerState = helper.widget.parentWidget.state;
    let contents = [];
    
    contents.push(helper.attach('header-dropdown', {
      title: 'user.select_locale', 
      icon: 'globe',
      iconId: 'toggle-locale-menu'
    }));
    return contents;
  });
}

export default {
  name: 'extend-for-language-switcher',
  initialize() {
    withPluginApi('0.1', api => initializePlugin(api));
  }
}