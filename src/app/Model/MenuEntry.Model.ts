import {MenuType} from './MenuType.Enum';

export interface MenuEntry {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  type: MenuType;
  price: number;
}
