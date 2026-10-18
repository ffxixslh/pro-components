import { attachPropertiesToComponent } from '@ffxixslh/utils';
import RButton from '../RButton';
import { RTableContext, type RTableContextType } from './Context';
import type { RTableProps } from './ProTable';
import ProTable from './ProTable';

export type { RTableContextType, RTableProps };

export default attachPropertiesToComponent(ProTable, {
  Context: RTableContext,
  Button: RButton,
});
