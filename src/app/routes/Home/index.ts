import loadable from '@loadable/component';


export default loadable(() => import(/* webpackPreload: true */ './Home.ui'));
