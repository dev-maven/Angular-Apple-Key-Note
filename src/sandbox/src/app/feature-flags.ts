import { PebElementType } from '@pe/builder-core';
import {
  convertFeaturesArrayToCollection,
  PeFeatureFlag,
  PeFeatureFlagActionEnum,
  PeFeatureFlagBehaviorData,
  PeFeatureFlagCollection,
} from '@pe/feature-flag';
import { PebBehaviorType } from '../../../../projects/modules/editor/src/constants';

export const FEATURES: PeFeatureFlag[] = [
  {
    name: 'text.move',
    action: PeFeatureFlagActionEnum.Disable,
    data: {
      behaviorType: PebBehaviorType.move,
      elementType: PebElementType.Text,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'text.resize',
    action: PeFeatureFlagActionEnum.Disable,
    data: {
      behaviorType: PebBehaviorType.resizeElement,
      elementType: PebElementType.Text,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'image.resize',
    action: PeFeatureFlagActionEnum.Disable,
    data: {
      behaviorType: PebBehaviorType.resizeElement,
      elementType: PebElementType.Image,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'block.resize',
    action: PeFeatureFlagActionEnum.Allow,
    data: {
      behaviorType: PebBehaviorType.resizeElement,
      elementType: PebElementType.Block,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'product.resize',
    action: PeFeatureFlagActionEnum.Disable,
    data: {
      behaviorType: PebBehaviorType.resizeProduct,
      elementType: PebElementType.Product,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'section.resize',
    action: PeFeatureFlagActionEnum.Disable,
    data: {
      behaviorType: PebBehaviorType.resizeSection,
      elementType: PebElementType.Section,
    } as PeFeatureFlagBehaviorData,
  },
  {
    name: 'create_blank_page',
    action: PeFeatureFlagActionEnum.Show,
  },
];

export const FEATURES_COLLECTION: PeFeatureFlagCollection = convertFeaturesArrayToCollection(FEATURES);
