import { attachPropertiesToComponent } from '@ffxixslh/utils';
import { RButton } from '../RButton';
import { RTableContext, type RTableContextType } from './Context';
import { RTable as _RTable, type RTableProps } from './RTable';

export type { RTableContextType, RTableProps };

export const RTable = attachPropertiesToComponent(_RTable, {
  Context: RTableContext,
  Button: RButton,
});
