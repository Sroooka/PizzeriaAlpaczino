import {MenuType} from './MenuType.Enum';

export interface Menu {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  type: MenuType;
  price: number;
}
