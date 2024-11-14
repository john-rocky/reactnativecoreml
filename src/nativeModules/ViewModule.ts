// ViewModule.ts
import { NativeModules } from 'react-native';

type ViewModuleType = {
  showView: () => Promise<string>;
};

export const ViewModule = NativeModules.ViewModule as ViewModuleType;

