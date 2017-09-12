import $ from "jquery";
import './blocks/hiWebpack/hiWebpack.css';
import './blocks/common/common.css';
import hiWebpeck from './blocks/hiWebpack/hiWebpack';

(function () {
    let $body;

    //Caching Selectors
    $(document).ready(function () {
        $body = $('body');
    });

    $(document).ready(function () {
        hiWebpeck($body);
    });
})();
