import Parallax from '../components/Parallax';

const desktopSplash = require('../images/splash_desktop.jpg');
const mobileSplash = require('../images/splash_mobile.jpg');

const Page = () => {
    return (
        <div>
            <Parallax uniqueId="splash-mobile" />
        </div>
    )
};

export default Page;