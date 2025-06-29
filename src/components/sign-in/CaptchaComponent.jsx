import React, { Component } from 'react';
import {  loadCaptchaEnginge, LoadCanvasTemplate} from 'react-simple-captcha';

import { injectIntl } from 'react-intl';

class CaptchaComponent extends Component {

      componentDidMount () {
        //loadCaptchaEnginge(Number_Of_Captcha_Charcters, Background_Color, Font_Color, upper/lower/numbers/special_char);
        loadCaptchaEnginge(6, '#e6e4e3','#000000', 'numbers');       
   };

   render() {
        return( <LoadCanvasTemplate  reloadText={this.props.intl.formatMessage({id:"IDS_RELOADCAPTCHA"})} reloadColor="#1268e3"/>);   
   };
}

export default injectIntl(CaptchaComponent);