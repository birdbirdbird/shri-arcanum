import React from 'react';
import { Text } from 'components/Base/Content/Text'
import './Footer.css'

import FooterItem from './-Item/Footer-Item'
import FooterDev from './-Dev/Footer-Dev'

const	Footer	=	()	=>	(	
  <footer className="Footer">
    <FooterItem>
      <Text size='s' view='secondary'>Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia, 119021</Text>
    </FooterItem>
    <FooterItem>
      <FooterDev>
      <Text size='s' view='secondary'>UI: 0.1.15</Text>
      </FooterDev>
      <FooterDev>
        <Text size='s' view='secondary'>© 2007—2019 </Text>
        <Text size='s' view='link'>Yandex</Text>
      </FooterDev>
    </FooterItem>
  </footer>
)

export default Footer;
