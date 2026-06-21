import {MainModules, MainModuleUtils} from '../../src/common/types/plugins/modules';
import Comfy_MM from './ComfyUI/MainMethods';
import {COMFYUI_ID} from './Constants';

export default async function initialModule(utils: MainModuleUtils): Promise<MainModules[]> {
  return [{id: COMFYUI_ID, methods: () => Comfy_MM(utils)}];
}
