import {CardModules} from '../../src/common/types/plugins/modules';
import comfyuiArguments from './ComfyUI/Arguments';
import COMFYUI_RM from './ComfyUI/RendererMethods';
import {COMFYUI_ID} from './Constants';

const rendererModules: CardModules = [
  {
    routePath: 'imageGen_page',
    cards: [
      {
        id: COMFYUI_ID,
        title: 'ComfyUI',
        description:
          'This ui will let you design and execute advanced stable diffusion pipelines' +
          ' using a graph/nodes/flowchart based interface.',
        repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
        type: 'image',
        supportCustomArguments: true,
        arguments: comfyuiArguments,
        methods: COMFYUI_RM,
        installationType: 'git',
      },
    ],
  },
];

export default rendererModules;
