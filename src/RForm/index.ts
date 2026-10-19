import { attachPropertiesToComponent } from '@ffxixslh/utils';
import { RFormContext, type RFormContextType } from './Context';
import { RForm as _RForm, type RFormProps } from './RForm';

export type { RFormContextType, RFormProps };

export const RForm = attachPropertiesToComponent(_RForm, {
  Context: RFormContext,
});
