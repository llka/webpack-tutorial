import $ from "jquery";
import _ from 'lodash';

export default function hiWebpack(selector) {
    let block = document.createElement('div');
    let element = block.appendChild(document.createElement('div'));
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hiWebpack__text');
    block.classList.add('hiWebpack');
    block.classList.add('hiWebpack_position_center');
    selector.append(block);
}