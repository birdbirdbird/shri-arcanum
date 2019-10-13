import { cn } from '@bem-react/classname'
import { compose } from '@bem-react/core'

import Base from './Text'

import { TextViewPrimary } from './_view/Text_view_primary'
import { TextViewSecondary } from './_view/Text_view_secondary'
import { TextViewLink } from './_view/Text_view_link'
import { TextViewLabels } from './_view/Text_view_labels'
import { TextViewFirstLetter } from './_view/Text_view_firstLetter'

import { TextWeightBold } from './_weight/Text_weight_bold'

import { TextSizeXs } from './_size/Text_size_xs'
import { TextSizeS } from './_size/Text_size_s'
import { TextSizeM } from './_size/Text_size_m'
import { TextSizeL } from './_size/Text_size_l'
import { TextSizeXl } from './_size/Text_size_xl'
import { TextSizeXlIcon } from './_size/Text_size_xl-icon'
import { TextSizeMIcon } from './_size/Text_size_m-icon'

export const cnText = cn('Text')

export const Text = compose(
  TextViewLink,
  TextViewPrimary,
  TextViewSecondary,
  TextViewLabels,
  TextViewFirstLetter,

  TextWeightBold,

  TextSizeXs,
  TextSizeS,
  TextSizeM,
  TextSizeL,
  TextSizeXl,
  TextSizeXlIcon,
  TextSizeMIcon
)(Base)