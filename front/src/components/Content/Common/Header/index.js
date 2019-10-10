import { cn } from '@bem-react/classname'
import { compose } from '@bem-react/core'

import Base from './Header'

// import { TextWeightBold } from './_mod/Header_mod_value'

export const cnHeader = cn('Header')

export const Header = compose(
  // TextWeightBold
)(Base)